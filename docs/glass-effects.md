# Reusable glass effects

`GlassScene` owns one lazy-loaded Three.js WebGL2 renderer. `GlassSurface` composes with a native element or existing shadcn control through Base UI's `render` prop. The footer uses ten lenses (five links and five icon surrounds) in a single draw call.

```tsx
import { GlassScene, GlassSurface } from "@/components/effects/glass/glass";

<GlassScene backdropSelector=".painting img" refraction={10} frost={0.8} tint={0.055}>
  <div className="painting">{/* Absolutely positioned, centered cover image. */}</div>
  <div className="content">{/* position: relative; z-index: 2 */}
    <GlassSurface render={<a href="/labs" />} className="rounded-full">
      Visit our lab
    </GlassSurface>
  </div>
</GlassScene>
```

Keep the backdrop below the canvas (z-index 1) and HTML content above it (z-index 2). Set the scene's size, clipping, and surface padding in the consuming component. The surface retains native focus, keyboard navigation, links, and pointer behavior. The canvas never receives pointer events or accessibility focus.

## Rendering contract

This is screen-space refraction of an explicit image texture, not a screenshot of the page or a physically traced 3D object. The GLSL shader measures rounded surfaces in CSS pixels, bends texture coordinates near their edges, and adds directional reflections. Text and glyphs are separate HTML above the lenses and stay sharp.

The backdrop must be a centered `object-fit: cover` image inside the scene. When it belongs to DitherImage, the renderer samples its completed canvas instead of the raw image, with frame notifications keeping the animated pattern aligned. `currentSrc` keeps responsive picture sources aligned with the DOM. Source textures use sRGB and shader output converts back to sRGB. Transparent images, filters/overlays applied over the backdrop, non-centered crops, transformed/continuously animated surfaces, video, and arbitrary HTML behind the scene are not supported by this adapter. They need an explicit composited texture or render-target adapter before reuse. Nested lenses combine displacement of the source image; they do not refract intervening HTML.

- `refraction`: edge displacement in CSS pixels, default 10.
- `frost`: texture softness, default 0.8.
- `tint`: white contribution in linear color, default 0.055.
- Up to 16 surfaces per scene; split larger groups into appropriately bounded scenes.
- Use uniform corner radii, in pixels or percentages. Capsules and circles are supported.

## Lifecycle and fallback

Three.js is dynamically imported when the scene comes within 200px of the viewport. Rendering is on demand after texture load, resize, content/font changes, pointer input, and live artwork frames. DitherImage supplies those frames at its bounded rate while visible. There is no permanent animation loop. Offscreen/hidden scenes skip rendering; DPR is capped at 2. Reduced motion uses a stationary highlight and touch does not track pointer lighting.

A translucent CSS backdrop blur is present before initialization and when WebGL, texture loading, shader compilation, or context availability fails. Ready state is only applied after rendering. Context restoration redraws; unmount releases observers, events, pending frames, textures, materials, geometry, and the WebGL context.

For future animated effects, add a bounded scheduler to this renderer or an explicit scene-texture adapter. Do not create a canvas or WebGL context for each button, or try to sample arbitrary DOM using a shader.

References: [Three.js ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html), [color management](https://threejs.org/manual/pages/color-management.html), [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).
