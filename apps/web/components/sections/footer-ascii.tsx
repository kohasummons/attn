"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ART = "/images/brand/footer-art.png";
const CELL_WIDTH = 14;
const CELL_HEIGHT = 28;
const TOKENS = ".:-=+*#%@01{}[]<>/";
const ATLAS_WIDTH = 16;
const ATLAS_HEIGHT = 32;

const vertexSource = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = vec2((a_position.x + 1.0) * 0.5, (1.0 - a_position.y) * 0.5);
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSource = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_mask;
uniform sampler2D u_atlas;
uniform vec2 u_grid;
uniform float u_time;
uniform float u_count;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float glyph(float index, vec2 uv) {
  return texture2D(u_atlas, vec2((index + uv.x) / u_count, uv.y)).a;
}
void main() {
  vec2 cell = floor(v_uv * u_grid);
  vec2 local = fract(v_uv * u_grid);
  float density = texture2D(u_mask, (cell + 0.5) / u_grid).r;
  // Each cell changes at its own pace, without flashing the whole silhouette.
  float seed = hash(cell);
  float clock = u_time * (0.45 + seed * 0.45) + seed * 20.0;
  float step = floor(clock);
  float original = floor(clamp(density * 1.5, 0.0, 1.0) * 8.0);
  float oldToken = mix(original, floor(hash(cell + step - 1.0) * u_count), 0.75);
  float newToken = mix(original, floor(hash(cell + step) * u_count), 0.75);
  float ink = mix(glyph(floor(oldToken), local), glyph(floor(newToken), local),
    smoothstep(0.0, 0.22, fract(clock)));
  float opacity = smoothstep(0.015, 0.16, density) * 0.82;
  gl_FragColor = vec4(vec3(1.0), ink * opacity);
}`;

/** Decorative token texture; all navigation remains ordinary HTML above it. */
export function FooterAscii() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    let disposed = false;
    let visible = false;
    let initialized = false;
    let lost = false;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    const textures: WebGLTexture[] = [];
    const shaders: WebGLShader[] = [];
    const program = gl.createProgram();
    const buffer = gl.createBuffer();
    if (!program || !buffer) {
      if (program) gl.deleteProgram(program);
      if (buffer) gl.deleteBuffer(buffer);
      return;
    }

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Unable to create footer shader");
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error("Unable to compile footer shader");
      gl.attachShader(program, shader);
    };

    const texture = (source: HTMLCanvasElement, unit: number) => {
      const result = gl.createTexture();
      if (!result) throw new Error("Unable to create footer texture");
      textures.push(result);
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, result);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    };

    let timeLocation: WebGLUniformLocation | null = null;
    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.round(canvas.clientWidth * ratio);
      const height = Math.round(canvas.clientHeight * ratio);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform1f(timeLocation, elapsed / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const tick = (now: number) => {
      if (disposed || !visible || document.hidden || motion.matches || lost) {
        frame = 0;
        return;
      }
      if (now - last >= 1000 / 24) {
        elapsed += Math.min(now - last, 100);
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (!initialized || disposed || lost) return;
      setReady(!motion.matches);
      if (visible && !document.hidden && !motion.matches) {
        if (!frame) {
          last = performance.now();
          draw();
          frame = requestAnimationFrame(tick);
        }
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    const onContextLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      frame = 0;
      setReady(false);
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    const source = new window.Image();
    source.onload = () => {
      if (disposed || lost) return;
      try {
        compile(gl.VERTEX_SHADER, vertexSource);
        compile(gl.FRAGMENT_SHADER, fragmentSource);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Unable to link footer shader");
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        // Average the original glyph cells into a density map, preserving the artwork.
        const sample = document.createElement("canvas");
        sample.width = source.naturalWidth;
        sample.height = source.naturalHeight;
        const ctx = sample.getContext("2d");
        if (!ctx) throw new Error("Unable to sample footer artwork");
        ctx.drawImage(source, 0, 0);
        const pixels = ctx.getImageData(0, 0, sample.width, sample.height).data;
        const cols = Math.ceil(sample.width / CELL_WIDTH);
        const rows = Math.ceil(sample.height / CELL_HEIGHT);
        const mask = document.createElement("canvas");
        mask.width = cols;
        mask.height = rows;
        const maskCtx = mask.getContext("2d");
        if (!maskCtx) throw new Error("Unable to create footer mask");
        const data = maskCtx.createImageData(cols, rows);
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            let total = 0;
            let count = 0;
            for (let py = y * CELL_HEIGHT; py < Math.min((y + 1) * CELL_HEIGHT, sample.height); py++) {
              for (let px = x * CELL_WIDTH; px < Math.min((x + 1) * CELL_WIDTH, sample.width); px++) {
                const offset = (py * sample.width + px) * 4;
                total += pixels[offset] * pixels[offset + 3] / 255;
                count++;
              }
            }
            const i = (y * cols + x) * 4;
            data.data[i] = data.data[i + 1] = data.data[i + 2] = Math.round(total / count);
            data.data[i + 3] = 255;
          }
        }
        maskCtx.putImageData(data, 0, 0);
        texture(mask, 0);

        const atlas = document.createElement("canvas");
        atlas.width = ATLAS_WIDTH * TOKENS.length;
        atlas.height = ATLAS_HEIGHT;
        const atlasCtx = atlas.getContext("2d");
        if (!atlasCtx) throw new Error("Unable to create footer glyphs");
        atlasCtx.fillStyle = "white";
        atlasCtx.font = "24px monospace";
        atlasCtx.textAlign = "center";
        atlasCtx.textBaseline = "middle";
        [...TOKENS].forEach((token, i) => atlasCtx.fillText(token, (i + 0.5) * ATLAS_WIDTH, ATLAS_HEIGHT / 2));
        texture(atlas, 1);
        gl.uniform1i(gl.getUniformLocation(program, "u_mask"), 0);
        gl.uniform1i(gl.getUniformLocation(program, "u_atlas"), 1);
        gl.uniform2f(gl.getUniformLocation(program, "u_grid"), cols, rows);
        gl.uniform1f(gl.getUniformLocation(program, "u_count"), TOKENS.length);
        timeLocation = gl.getUniformLocation(program, "u_time");
        initialized = true;
        sync();
      } catch {
        // The original artwork remains visible if the device cannot render the effect.
        setReady(false);
      }
    };
    source.src = ART;

    return () => {
      disposed = true;
      source.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      textures.forEach((item) => gl.deleteTexture(item));
      shaders.forEach((item) => gl.deleteShader(item));
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div aria-hidden="true" className="relative h-full w-full">
      <Image src={ART} alt="" fill sizes="857px" className="object-contain object-right-bottom" style={{ opacity: ready ? 0 : 1 }} />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ opacity: ready ? 1 : 0 }} />
    </div>
  );
}
