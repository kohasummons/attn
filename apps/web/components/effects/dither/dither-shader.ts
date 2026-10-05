export const ditherVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const ditherFragmentShader = /* glsl */ `
  uniform sampler2D uImage;
  uniform vec2 uImageSize;
  uniform vec2 uSize;
  uniform float uTime;
  uniform float uMotion;
  uniform float uAmount;
  uniform float uStrength;
  uniform float uLevels;
  uniform float uPixelSize;
  uniform float uDim;
  uniform vec3 uGrade;
  varying vec2 vUv;

  // The same recursive 16x16 Bayer ordering used by the Figma effect.
  float bayer16(vec2 pixel) {
    vec2 p = mod(floor(pixel), 16.0);
    float value = 0.0;
    for (int bit = 0; bit < 4; bit++) {
      vec2 digit = mod(p, 2.0);
      float quadrant = digit.y < 1.0 ? digit.x * 2.0 : 3.0 - digit.x * 2.0;
      value = value * 4.0 + quadrant;
      p = floor(p * 0.5);
    }
    return (value + 0.5) / 256.0;
  }

  void main() {
    float scale = max(uSize.x / uImageSize.x, uSize.y / uImageSize.y);
    vec2 crop = uSize / (uImageSize * scale);
    vec2 uv = (vUv - 0.5) * crop + 0.5;
    // Work in display RGB: ordered quantization belongs after color grading.
    vec4 source = texture2D(uImage, uv);
    vec3 color = (source.rgb - 0.5) * uGrade.x + 0.5;
    float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(vec3(luminance), color, uGrade.y);
    color += vec3(uGrade.z * 0.06, uGrade.z * 0.015, -uGrade.z * 0.06);
    color = clamp(color * (1.0 - uDim), 0.0, 1.0);
    vec2 pixel = vec2(vUv.x, 1.0 - vUv.y) * uSize / uPixelSize;
    float threshold = bayer16(pixel);
    // Tiny, continuous threshold changes; the image itself never jumps.
    threshold += uMotion * uAmount * sin(uTime + threshold * 6.283185);
    float levels = max(2.0, uLevels) - 1.0;
    vec3 quantized = floor(color * levels + threshold) / levels;
    gl_FragColor = vec4(mix(color, clamp(quantized, 0.0, 1.0), uStrength), source.a);
  }
`;
