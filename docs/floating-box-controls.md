# Floating box controls

Open **DialKit → Floating boxes** in the local development preview. Settings persist in this browser; production uses `railMotionDefaults` in `apps/web/components/marketing/rail-motion.ts`.

- **Speed**: multiplier for the entire group (0.25–3×).
- **Neighbor Difference**: bounded speed variation between adjacent boxes (0–10%, default 2%). Opposite partners always match.
- **Playback → Paused**: freeze/resume at the current position.
- **Cycle Seconds**: base duration of a complete down-and-up trip (2–30 seconds). Actual duration is Cycle Seconds divided by Speed.
- **Easing**: Gentle preserves the existing motion; Pronounced gives stronger acceleration/deceleration; Constant speed removes easing.
- **Spacing → Neighbor Phase Percent**: small signed timing offset between neighboring boxes (default 1% of a full cycle). Each box reaches its own endpoint and reverses immediately, independently of the adjacent boxes. Change the sign to reverse the order. Speed variation stays bounded within each cycle and cannot accumulate drift.
- **Travel → Top/Bottom Inset Percent**: shorten travel from either end of the available line. Zero keeps full travel. Both values are percentages of the original available travel, not the viewport.
- **Restart animation**: restart the shared timeline, preserving neighbor timing offsets, other settings, and pause state.
- **Reset to site defaults**: restore the original settings and restart.

The measured ticker boundary and 8px clearance always apply. Reduced-motion preference takes priority over the panel. Copy parameters can be used to share a chosen configuration before changing production defaults.

Endpoint holds have been removed: every box reverses as soon as it reaches its own end. Opposite partners retain identical timing.

HQ horizontal rails also use these settings. Top Inset and Bottom Inset act as left and right insets on horizontal rails. Their dashed tracks remain stationary; only the squares translate.
