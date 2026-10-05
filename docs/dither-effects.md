# Live image dithering

All painting layers with Figma's Dither effect on the Home, About, and Labs designs now use clean source images and one reusable `DitherImage` component. This covers heroes, courses/mission landscapes, every product backdrop (including redacted previews), all three article images, events, footer scenery, and the footer agent painting. Logos, product UI screenshots, architectural line drawings, and text are not dithered.

## Sources and image quality

Eleven original image files were downloaded directly from Figma image fills. Their SHA-1 hashes match the fill hashes exactly; `artwork-sources.json` records the node IDs, native dimensions, and sizes. The images range from 728×386 to 4096×3072. Existing artwork cannot gain detail beyond its source resolution.

Full-resolution delivery copies use WebP quality 95 without resizing. Combined source weight falls from 80.7 MB to 18.0 MB (77.7% smaller); these are source asset totals, not page transfer sizes. Next Image serves responsive derivatives at quality 90 and lazy-loads below-fold images. No dither, gradients, glass, or dimming is baked into these delivery images. Source filenames map explicitly in `marketing/artwork-sources.ts`; old exported assets are no longer referenced by the migrated painting components.

## Live tuning with DialKit

In the local development preview, use the **Image dithering** panel at the top right. Collapse it with its header/close control and reopen the floating icon. It appears on Home, About, and Labs.

- **Apply To**: all images, or hero images only.
- **Effect → Strength**: 0 shows the clean graded painting; 1 applies full dithering. **Color Levels** controls the palette; **Pixel Size** controls the pattern size.
- **Animation → Enabled** turns variation on/off. **Cycle Seconds** is the time for one loop (lower is faster). **Amount** is how strongly the pattern changes. Reduced-motion preference still takes precedence.
- **Color** optionally overrides image-specific grading. Leave **Override Image Colors** off to preserve each painting's existing art direction.
- Use **Versions** to compare settings, **Copy parameters** to share them for committing into defaults, or **Reset to site defaults** to restore the original settings.

DialKit persists values and versions in this browser under `dialkit:attention-factory-dither-v1`. These are local preview settings; they do not edit source files. The editor is dynamically loaded only in development, and production never applies persisted preview overrides.

`animationDuration` (seconds, default 8) and `animationAmount` (default 0.035) are reusable DitherImage options. Slider changes update the existing renderer registration and shader uniforms, preserving textures/canvas resources. Animation phase advances incrementally so speed changes do not restart the loop. Zero strength/amount and disabled animation stop continuous rendering for that image.

## Reuse

```tsx
import { DitherImage } from "@/components/effects/dither/dither-image";

<div className="relative h-80 overflow-hidden rounded-xl">
  <DitherImage
    src="/redesign/originals/courses.webp"
    alt=""
    sizes="(max-width: 600px) 100vw, 640px"
    strength={0.65}
    levels={5}
    pixelSize={1}
    dim={0.4}
    animated
  />
</div>
```

The component fills a positioned container. `mobileSrc` optionally selects another responsive source. `contrast`, `saturation`, and `warmth` provide live color grading. `strength={0}` removes quantization; `animated={false}` keeps static dithering. The marketing `Artwork` composition resolves known painting names to these presets and keeps existing layout, section fades, and Motion parallax.

## Rendering and animation

The custom Three.js/WebGL2 shader performs 16×16 Bayer quantization in display RGB, based on the Figma pattern and five-level palette. Default strength 0.65 preserves more original detail than full quantization. The image samples remain full-detail; `pixelSize` controls the dither pattern, not a pixelated source image.

The decorative marketing motion is a small threshold variation (amplitude 0.035), with a continuous eight-second sine cycle. The painting does not jump or move because of the dither. Reduced-motion preference removes the variation and renders a static pattern.

One shared offscreen GPU renderer and one scheduler service all image instances. A single render buffer is sized for the active views, and viewport/scissor draws are copied synchronously into ordinary 2D canvases. This preserves normal DOM stacking, rounded clipping, section gradient masks, and parallax without creating a WebGL context for each picture.

- Desktop updates are capped at 20 fps; mobile at 12 fps. These are scheduling limits, not claimed measured device performance.
- DPR is capped at 2, with at most two million output pixels per image.
- Only intersecting images render. Hidden tabs stop scheduling.
- Offscreen GPU textures are disposed and their 2D canvases shrink to 1×1.
- Clean, graded HTML images remain as the no-JS/loading/WebGL-failure fallback.
- Dedicated texture decoding uses the responsive `currentSrc` URL, benefiting from the browser cache. DOM picture elements are not uploaded directly, avoiding blank texture uploads.
- Version checks discard late image loads after scrolling, source switches, or unmount.
- Context loss shows the clean fallback; restoration redraws. The last unmount disposes the renderer, material, geometry, timers, and listeners.

The glass renderer consumes completed dither canvases through `artwork:frame`, so refraction bends the exact current painting and pattern. Glass keeps its own existing context; the page has one shared dither context plus the footer glass context, not one context per image or button.

## Verification

Production build (including TypeScript), scoped ESLint, and whitespace checks pass. Browser review verified actual nontransparent rendered pixels, desktop/mobile image sources, multiple simultaneous product/article views, offscreen bitmap release, re-entry, responsive mission artwork switching, and live glass integration. Home, About, and Labs use the shared component. Real low-end-device profiling remains separate from these browser checks.
