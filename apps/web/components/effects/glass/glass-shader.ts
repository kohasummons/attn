// All distances are CSS pixels, so the lens looks the same at every DPR.
export const MAX_GLASS_SURFACES = 16;

export const glassVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const glassFragmentShader = /* glsl */ `
  uniform sampler2D uBackdrop;
  uniform vec2 uResolution;
  uniform vec4 uImageBounds;
  uniform vec2 uImageSize;
  uniform vec4 uSurfaces[MAX_SURFACES];
  uniform float uRadii[MAX_SURFACES];
  uniform int uCount;
  uniform float uHovered[MAX_SURFACES];
  uniform vec2 uPointer;
  uniform float uRefraction;
  uniform float uFrost;
  uniform float uTint;
  varying vec2 vUv;

  vec2 backdropUv(vec2 pixel) {
    // Match the DOM image's centered object-fit: cover crop exactly.
    vec2 box = uImageBounds.zw;
    float scale = max(box.x / uImageSize.x, box.y / uImageSize.y);
    vec2 drawn = uImageSize * scale;
    vec2 uv = (pixel - uImageBounds.xy + (drawn - box) * 0.5) / drawn;
    return vec2(uv.x, 1.0 - uv.y);
  }

  vec3 backdrop(vec2 p) {
    vec2 uv = backdropUv(p);
    vec2 blur = vec2(uFrost) / uImageSize;
    return texture2D(uBackdrop, uv).rgb * 0.6
      + texture2D(uBackdrop, uv + vec2(blur.x, 0.0)).rgb * 0.1
      + texture2D(uBackdrop, uv - vec2(blur.x, 0.0)).rgb * 0.1
      + texture2D(uBackdrop, uv + vec2(0.0, blur.y)).rgb * 0.1
      + texture2D(uBackdrop, uv - vec2(0.0, blur.y)).rgb * 0.1;
  }

  void main() {
    vec2 pixel = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
    vec2 displacement = vec2(0.0);
    float coverage = 0.0;
    float reflection = 0.0;
    for (int i = 0; i < MAX_SURFACES; i++) {
      if (i >= uCount) break;
      vec4 bounds = uSurfaces[i];
      vec2 halfSize = bounds.zw * 0.5;
      vec2 p = pixel - bounds.xy - halfSize;
      float radius = min(uRadii[i], min(halfSize.x, halfSize.y));
      vec2 q = abs(p) - halfSize + radius;
      float distance = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
      float alpha = 1.0 - smoothstep(-0.75, 0.5, distance);
      if (alpha <= 0.0) continue;

      // Rounded lens: flat center, curved bevel. The inward bend samples
      // a different part of the actual painting, rather than blurring it.
      vec2 normal = normalize(max(q, vec2(0.001)) * sign(p));
      float bevel = 1.0 - smoothstep(0.0, min(radius, 12.0), -distance);
      displacement += normal * (bevel * bevel * uRefraction + 0.6) * alpha;
      vec2 lightOffset = vec2(-90.0, -160.0);
      vec2 light = normalize(lightOffset + (uPointer - bounds.xy - halfSize) * uHovered[i]);
      float shine = pow(max(dot(normal, light), 0.0), 3.0);
      reflection += (shine * 0.24 + 0.025) * bevel * alpha;
      coverage = max(coverage, alpha);
    }
    if (coverage <= 0.0) discard;
    vec3 color = backdrop(pixel - displacement);
    color = mix(color, vec3(1.0), uTint);
    color += reflection;
    gl_FragColor = vec4(color, coverage);
    #include <colorspace_fragment>
  }
`;
