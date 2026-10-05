import {
  LinearFilter,
  Mesh,
  NoColorSpace,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { ditherFragmentShader, ditherVertexShader } from "./dither-shader";
import {
  ARTWORK_FRAME_EVENT,
  type DitherHandle,
  type DitherOptions,
} from "./dither-types";

type View = {
  element: HTMLElement;
  image: HTMLImageElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  options: DitherOptions;
  visible: boolean;
  dirty: boolean;
  texture: Texture<HTMLImageElement> | null;
  source: string;
  width: number;
  height: number;
  pixelWidth: number;
  pixelHeight: number;
  loading: boolean;
  failed: boolean;
  generation: number;
  phase: number;
  lastFrame: number;
};

// One GPU context and one timer for the entire site. Each view receives a
// synchronous bitmap copy into a regular 2D canvas, preserving DOM clipping,
// border radii, gradient masks, and the existing Motion parallax transforms.
let shared: DitherRenderer | undefined;

class DitherRenderer {
  private renderer = new WebGLRenderer({
    alpha: true,
    antialias: false,
    preserveDrawingBuffer: true,
    powerPreference: "low-power",
  });
  private scene = new Scene();
  private camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private geometry = new PlaneGeometry(2, 2);
  private uniforms = {
    uImage: { value: null as Texture | null },
    uImageSize: { value: new Vector2() },
    uSize: { value: new Vector2() },
    uTime: { value: 0 },
    uMotion: { value: 0 },
    uAmount: { value: 0.035 },
    uStrength: { value: 0.65 },
    uLevels: { value: 5 },
    uPixelSize: { value: 1 },
    uDim: { value: 0 },
    uGrade: { value: new Vector3(1.2, 1, 0) },
  };
  private material = new ShaderMaterial({
    uniforms: this.uniforms,
    vertexShader: ditherVertexShader,
    fragmentShader: ditherFragmentShader,
    depthTest: false,
    depthWrite: false,
  });
  private views = new Set<View>();
  private reduced = matchMedia("(prefers-reduced-motion: reduce)");
  private mobile = matchMedia("(max-width: 600px)");
  private timer: ReturnType<typeof setTimeout> | undefined;
  private frame = 0;
  private lost = false;
  private failed = false;

  constructor() {
    this.renderer.setPixelRatio(1);
    this.renderer.debug.onShaderError = (gl, _program, vertex, fragment) => {
      this.failed = true;
      console.error(
        "Dither shader:",
        gl.getShaderInfoLog(vertex),
        gl.getShaderInfoLog(fragment),
      );
    };
    this.scene.add(new Mesh(this.geometry, this.material));
    this.renderer.domElement.addEventListener(
      "webglcontextlost",
      this.contextLost,
    );
    this.renderer.domElement.addEventListener(
      "webglcontextrestored",
      this.contextRestored,
    );
    this.reduced.addEventListener("change", this.refresh);
    this.mobile.addEventListener("change", this.refresh);
    document.addEventListener("visibilitychange", this.refresh);
  }

  private contextLost = (event: Event) => {
    event.preventDefault();
    this.lost = true;
    this.stop();
    this.views.forEach((view) => this.fallback(view));
  };
  private contextRestored = () => {
    this.lost = false;
    this.failed = false;
    this.refresh();
  };
  private refresh = () => {
    this.stop();
    this.views.forEach((view) => {
      view.dirty = true;
    });
    this.schedule();
  };
  private stop() {
    clearTimeout(this.timer);
    this.timer = undefined;
    cancelAnimationFrame(this.frame);
    this.frame = 0;
  }
  private fallback(view: View) {
    delete view.element.dataset.ditherReady;
    view.canvas.dispatchEvent(
      new Event(ARTWORK_FRAME_EVENT, { bubbles: true }),
    );
  }
  private active(view: View) {
    return (
      view.visible &&
      !view.failed &&
      !view.loading &&
      view.image.complete &&
      view.image.naturalWidth > 0
    );
  }
  private animated(view: View) {
    return (
      view.options.animated !== false &&
      (view.options.animationAmount ?? 0.035) > 0 &&
      (view.options.strength ?? 0.65) > 0 &&
      !this.reduced.matches
    );
  }
  private schedule(delay = 0) {
    if (
      this.timer !== undefined ||
      this.frame ||
      this.lost ||
      this.failed ||
      document.hidden
    )
      return;
    if (
      ![...this.views].some(
        (view) => this.active(view) && (view.dirty || this.animated(view)),
      )
    )
      return;
    this.timer = setTimeout(() => {
      this.timer = undefined;
      this.frame = requestAnimationFrame(this.render);
    }, delay);
  }

  private render = (time: number) => {
    this.frame = 0;
    if (document.hidden || this.lost || this.failed) return;
    const visible = [...this.views].filter(
      (view) => this.active(view) && (view.dirty || this.animated(view)),
    );
    let bufferWidth = 1;
    let bufferHeight = 1;
    for (const view of visible) {
      const dpr = Math.min(
        devicePixelRatio || 1,
        2,
        Math.sqrt(2_000_000 / Math.max(1, view.width * view.height)),
      );
      view.pixelWidth = Math.max(1, Math.round(view.width * dpr));
      view.pixelHeight = Math.max(1, Math.round(view.height * dpr));
      bufferWidth = Math.max(bufferWidth, view.pixelWidth);
      bufferHeight = Math.max(bufferHeight, view.pixelHeight);
    }
    if (!visible.length) return;
    if (
      this.renderer.domElement.width !== bufferWidth ||
      this.renderer.domElement.height !== bufferHeight
    )
      this.renderer.setSize(bufferWidth, bufferHeight, false);
    this.renderer.setScissorTest(true);
    for (const view of visible) {
      try {
        this.draw(view, time);
      } catch (error) {
        this.failed = true;
        console.error("Dither renderer:", error);
      }
      if (this.failed) {
        this.views.forEach((item) => this.fallback(item));
        return;
      }
    }
    this.schedule(this.mobile.matches ? 1000 / 12 : 1000 / 20);
  };

  private draw(view: View, time: number) {
    const { image, canvas, options, context, width, height } = view;
    if (width <= 0 || height <= 0) return;
    const source = image.currentSrc || image.src;
    if (source !== view.source) {
      view.texture?.dispose();
      view.texture = null;
      view.source = source;
      view.loading = true;
      const generation = ++view.generation;
      new TextureLoader().load(
        source,
        (texture) => {
          if (
            !this.views.has(view) ||
            !view.visible ||
            view.source !== source ||
            generation !== view.generation
          ) {
            texture.dispose();
            return;
          }
          texture.colorSpace = NoColorSpace;
          texture.minFilter = LinearFilter;
          texture.generateMipmaps = false;
          view.loading = false;
          view.texture = texture;
          view.dirty = true;
          this.schedule();
        },
        undefined,
        () => {
          if (!this.views.has(view) || generation !== view.generation) return;
          view.loading = false;
          view.failed = true;
          this.fallback(view);
        },
      );
      return;
    }
    if (!view.texture) return;
    const w = view.pixelWidth;
    const h = view.pixelHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const top = this.renderer.domElement.height - h;
    this.renderer.setViewport(0, top, w, h);
    this.renderer.setScissor(0, top, w, h);
    const u = this.uniforms;
    u.uImage.value = view.texture;
    u.uImageSize.value.set(view.texture.image.width, view.texture.image.height);
    u.uSize.value.set(width, height);
    const elapsed = view.lastFrame
      ? Math.min((time - view.lastFrame) / 1000, 0.2)
      : 0;
    if (this.animated(view)) {
      view.phase +=
        (elapsed * Math.PI * 2) / Math.max(0.5, options.animationDuration ?? 8);
    }
    view.lastFrame = time;
    u.uTime.value = view.phase;
    u.uAmount.value = options.animationAmount ?? 0.035;
    u.uMotion.value = this.animated(view) ? 1 : 0;
    u.uStrength.value = options.strength ?? 0.65;
    u.uLevels.value = options.levels ?? 5;
    u.uPixelSize.value = options.pixelSize ?? 1;
    u.uDim.value = options.dim ?? 0;
    u.uGrade.value.set(
      options.contrast ?? 1.2,
      options.saturation ?? 1,
      options.warmth ?? 0,
    );
    this.renderer.render(this.scene, this.camera);
    if (this.failed) return;
    context.clearRect(0, 0, w, h);
    context.drawImage(this.renderer.domElement, 0, 0, w, h, 0, 0, w, h);
    view.dirty = false;
    view.element.dataset.ditherReady = "true";
    canvas.dispatchEvent(new Event(ARTWORK_FRAME_EVENT, { bubbles: true }));
  }

  register(
    element: HTMLElement,
    image: HTMLImageElement,
    canvas: HTMLCanvasElement,
    options: DitherOptions,
  ): DitherHandle {
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return { update: () => {}, dispose: () => {} };
    const view: View = {
      element,
      image,
      canvas,
      context,
      options,
      visible: false,
      dirty: true,
      texture: null,
      source: "",
      width: 0,
      height: 0,
      pixelWidth: 1,
      pixelHeight: 1,
      loading: false,
      failed: false,
      generation: 0,
      phase: 0,
      lastFrame: 0,
    };
    this.views.add(view);
    const measure = () => {
      const rect = element.getBoundingClientRect();
      view.width = rect.width;
      view.height = rect.height;
      view.dirty = true;
      this.schedule();
    };
    const loaded = () => {
      view.source = "";
      view.failed = false;
      view.loading = false;
      ++view.generation;
      measure();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(element);
    const intersection = new IntersectionObserver(([entry]) => {
      view.visible = entry.isIntersecting;
      if (view.visible) measure();
      else {
        view.lastFrame = 0;
        view.texture?.dispose();
        view.texture = null;
        view.source = "";
        view.loading = false;
        ++view.generation;
        // Release offscreen bitmaps as well as GPU memory.
        canvas.width = 1;
        canvas.height = 1;
        this.fallback(view);
        if (![...this.views].some((item) => this.active(item))) this.stop();
      }
    });
    intersection.observe(element);
    image.addEventListener("load", loaded);
    measure();
    return {
      update: (nextOptions) => {
        view.options = nextOptions;
        view.dirty = true;
        view.lastFrame = 0;
        this.schedule();
      },
      dispose: () => {
        resize.disconnect();
        intersection.disconnect();
        image.removeEventListener("load", loaded);
        view.texture?.dispose();
        this.views.delete(view);
        this.fallback(view);
        if (!this.views.size) {
          this.dispose();
          shared = undefined;
        }
      },
    };
  }

  private dispose() {
    this.stop();
    this.reduced.removeEventListener("change", this.refresh);
    this.mobile.removeEventListener("change", this.refresh);
    document.removeEventListener("visibilitychange", this.refresh);
    this.renderer.domElement.removeEventListener(
      "webglcontextlost",
      this.contextLost,
    );
    this.renderer.domElement.removeEventListener(
      "webglcontextrestored",
      this.contextRestored,
    );
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }
}

export function registerDither(
  element: HTMLElement,
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  options: DitherOptions,
) {
  shared ??= new DitherRenderer();
  return shared.register(element, image, canvas, options);
}
