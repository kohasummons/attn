import { ARTWORK_FRAME_EVENT } from "../dither/dither-types";
import {
  CanvasTexture,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  Vector4,
  WebGLRenderer,
  type Texture,
} from "three";
import {
  glassFragmentShader,
  glassVertexShader,
  MAX_GLASS_SURFACES,
} from "./glass-shader";

export type GlassOptions = {
  /** Maximum edge displacement, in CSS pixels. */
  refraction?: number;
  /** Softness in texture pixels; keep low for clear glass. */
  frost?: number;
  /** White tint, from zero to one. */
  tint?: number;
};

/** One renderer per artwork scene, shared by every glass surface inside it. */
export function createGlassRenderer(
  root: HTMLElement,
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  { refraction = 10, frost = 0.8, tint = 0.055 }: GlassOptions,
) {
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geometry = new PlaneGeometry(2, 2);
  const uniforms = {
    uBackdrop: { value: null as Texture | null },
    uResolution: { value: new Vector2(1, 1) },
    uImageBounds: { value: new Vector4() },
    uImageSize: { value: new Vector2(1, 1) },
    uSurfaces: {
      value: Array.from({ length: MAX_GLASS_SURFACES }, () => new Vector4()),
    },
    uRadii: { value: Array<number>(MAX_GLASS_SURFACES).fill(0) },
    uCount: { value: 0 },
    uHovered: { value: Array<number>(MAX_GLASS_SURFACES).fill(0) },
    uPointer: { value: new Vector2(-100, -100) },
    uRefraction: { value: refraction },
    uFrost: { value: frost },
    uTint: { value: tint },
  };
  const material = new ShaderMaterial({
    uniforms,
    defines: { MAX_SURFACES: MAX_GLASS_SURFACES },
    vertexShader: glassVertexShader,
    fragmentShader: glassFragmentShader,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  scene.add(new Mesh(geometry, material));
  let disposed = false;
  let shaderFailed = false;
  renderer.debug.onShaderError = () => {
    shaderFailed = true;
  };
  let visible = false;
  let contextLost = false;
  let frame = 0;
  let source = "";
  let version = 0;
  let texture: Texture | null = null;
  let bounds = root.getBoundingClientRect();
  let surfaces: HTMLElement[] = [];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function draw() {
    frame = 0;
    if (
      disposed ||
      shaderFailed ||
      !visible ||
      contextLost ||
      document.hidden ||
      !texture
    )
      return;
    try {
      renderer.render(scene, camera);
      if (!shaderFailed) root.dataset.glassReady = "true";
    } catch {
      shaderFailed = true;
      delete root.dataset.glassReady;
    }
  }

  function invalidate() {
    if (!frame && !disposed && visible && !document.hidden)
      frame = requestAnimationFrame(draw);
  }

  function loadBackdrop() {
    const effect = image.closest<HTMLElement>(".dither-image");
    const live = effect?.querySelector<HTMLCanvasElement>(
      "[data-dither-canvas]",
    );
    if (live) {
      if (effect?.dataset.ditherReady !== "true") {
        texture?.dispose();
        texture = null;
        source = "";
        uniforms.uBackdrop.value = null;
        delete root.dataset.glassReady;
        return;
      }
      if (source !== "live-canvas" || !texture) {
        ++version;
        texture?.dispose();
        texture = new CanvasTexture(live);
        texture.colorSpace = SRGBColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = LinearFilter;
        source = "live-canvas";
        uniforms.uBackdrop.value = texture;
      }
      uniforms.uImageSize.value.set(live.width, live.height);
      texture.needsUpdate = true;
      invalidate();
      return;
    }
    const next = image.currentSrc || image.src;
    if (!image.complete || !image.naturalWidth || next === source) return;
    source = next;
    const request = ++version;
    texture?.dispose();
    texture = null;
    uniforms.uBackdrop.value = null;
    delete root.dataset.glassReady;
    new TextureLoader().load(
      next,
      (loaded) => {
        if (disposed || request !== version) {
          loaded.dispose();
          return;
        }
        loaded.colorSpace = SRGBColorSpace;
        texture?.dispose();
        texture = loaded;
        uniforms.uBackdrop.value = loaded;
        uniforms.uImageSize.value.set(image.naturalWidth, image.naturalHeight);
        invalidate();
      },
      undefined,
      () => {
        if (disposed || request !== version) return;
        texture?.dispose();
        texture = null;
        delete root.dataset.glassReady;
        source = "";
      },
    );
  }

  function measure() {
    bounds = root.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(bounds.width, bounds.height, false);
    uniforms.uResolution.value.set(bounds.width, bounds.height);
    const imageBounds = image.getBoundingClientRect();
    uniforms.uImageBounds.value.set(
      imageBounds.x - bounds.x,
      imageBounds.y - bounds.y,
      imageBounds.width,
      imageBounds.height,
    );
    surfaces = Array.from(
      root.querySelectorAll<HTMLElement>("[data-glass-surface]"),
    )
      .filter((el) => el.closest("[data-glass-scene]") === root)
      .slice(0, MAX_GLASS_SURFACES);
    uniforms.uCount.value = surfaces.length;
    uniforms.uHovered.value.fill(0);
    surfaces.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      uniforms.uSurfaces.value[i].set(
        rect.x - bounds.x,
        rect.y - bounds.y,
        rect.width,
        rect.height,
      );
      const radius = getComputedStyle(el).borderTopLeftRadius;
      const value = parseFloat(radius) || 0;
      uniforms.uRadii.value[i] = radius.includes("%")
        ? (Math.min(rect.width, rect.height) * value) / 100
        : value;
    });
    loadBackdrop();
    invalidate();
  }

  function move(event: PointerEvent) {
    if (reducedMotion.matches || event.pointerType === "touch") return;
    let hovered = event.target instanceof Element
      ? event.target.closest<HTMLElement>("[data-glass-surface]")
      : null;
    if (hovered?.closest("[data-glass-scene]") !== root) hovered = null;
    // Nested icon lenses belong to their enclosing pill's hover region.
    while (hovered) {
      const parent = hovered.parentElement?.closest<HTMLElement>("[data-glass-surface]");
      if (!parent || parent.closest("[data-glass-scene]") !== root) break;
      hovered = parent;
    }
    uniforms.uHovered.value.fill(0);
    surfaces.forEach((surface, index) => {
      uniforms.uHovered.value[index] = hovered?.contains(surface) ? 1 : 0;
    });
    // Read the current origin: the page may have scrolled since the last resize.
    bounds = root.getBoundingClientRect();
    uniforms.uPointer.value.set(
      event.clientX - bounds.x,
      event.clientY - bounds.y,
    );
    invalidate();
  }
  function resetLight() {
    uniforms.uHovered.value.fill(0);
    uniforms.uPointer.value.set(-100, -100);
    invalidate();
  }
  function loseContext(event: Event) {
    event.preventDefault();
    contextLost = true;
    delete root.dataset.glassReady;
    cancelAnimationFrame(frame);
    frame = 0;
  }
  function restoreContext() {
    contextLost = false;
    shaderFailed = false;
    measure();
  }
  const resize = new ResizeObserver(measure);
  resize.observe(root);
  resize.observe(image);
  root
    .querySelectorAll<HTMLElement>("[data-glass-surface]")
    .forEach((el) => resize.observe(el));
  const mutations = new MutationObserver(() => {
    root
      .querySelectorAll<HTMLElement>("[data-glass-surface]")
      .forEach((el) => resize.observe(el));
    measure();
  });
  mutations.observe(root, { childList: true, subtree: true });
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) measure();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  intersection.observe(root);
  image.addEventListener("load", measure);
  root.addEventListener(ARTWORK_FRAME_EVENT, loadBackdrop);
  root.addEventListener("pointermove", move);
  root.addEventListener("pointerleave", resetLight);
  reducedMotion.addEventListener("change", resetLight);
  document.addEventListener("visibilitychange", invalidate);
  window.addEventListener("resize", measure);
  canvas.addEventListener("webglcontextlost", loseContext);
  canvas.addEventListener("webglcontextrestored", restoreContext);
  void document.fonts.ready.then(() => {
    if (!disposed) measure();
  });
  measure();

  return () => {
    disposed = true;
    ++version;
    cancelAnimationFrame(frame);
    resize.disconnect();
    mutations.disconnect();
    intersection.disconnect();
    image.removeEventListener("load", measure);
    root.removeEventListener(ARTWORK_FRAME_EVENT, loadBackdrop);
    root.removeEventListener("pointermove", move);
    root.removeEventListener("pointerleave", resetLight);
    reducedMotion.removeEventListener("change", resetLight);
    document.removeEventListener("visibilitychange", invalidate);
    window.removeEventListener("resize", measure);
    canvas.removeEventListener("webglcontextlost", loseContext);
    canvas.removeEventListener("webglcontextrestored", restoreContext);
    texture?.dispose();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    // An options update (or Strict Mode) reuses this canvas immediately.
    // Only lose its context after the canvas has actually left the document.
    if (!canvas.isConnected) renderer.forceContextLoss();
    delete root.dataset.glassReady;
  };
}
