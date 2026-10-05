"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

// ─── utils ─────────────────────────────────────────────────────────────────

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function childrenOfType(children: ReactNode, displayName: string) {
  return Children.toArray(children).filter(
    (c): c is ReactElement =>
      isValidElement(c) &&
      (c.type as { displayName?: string })?.displayName === displayName
  );
}

function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    setCoarse(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCoarse(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return coarse;
}

function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
  }, []);
  return isIOS;
}

// ─── context ───────────────────────────────────────────────────────────────

type VideoPlayerContextValue = {
  isPlaying: boolean;
  togglePlay: () => void;
  videoRef: RefObject<HTMLVideoElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  progressBarRef: RefObject<HTMLDivElement | null>;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
  videoProps: React.VideoHTMLAttributes<HTMLVideoElement>;
  isPiP: boolean;
  isFullscreen: boolean;
  togglePiP: () => void;
  toggleFullscreen: () => void;
  toggleVolume: () => void;
  setVolumeValue: (v: number) => void;
  volume: number;
};

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null);

function useVideoPlayer() {
  const ctx = useContext(VideoPlayerContext);
  if (!ctx)
    throw new Error("VideoPlayer subcomponents must be wrapped in VideoPlayer.Root");
  return ctx;
}

// ─── icons (inline svg — no extra deps) ────────────────────────────────────

const iconClass = "h-5 w-5";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
  </svg>
);
const VolumeMuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
  </svg>
);
const VolumeDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </svg>
);
const VolumeUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);
const FullScreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);
const PiPIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" />
  </svg>
);
const PiPExitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
    <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3zm0 16.02H3V4.97h18v14.05z" />
  </svg>
);

// ─── icon button ───────────────────────────────────────────────────────────

function IconButton({
  children,
  title,
  ...rest
}: {
  children: ReactNode;
  title?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      {...rest}
    >
      {children}
    </button>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────

type RootProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  children: ReactNode;
};

function Root({ children, loop, autoPlay, muted, ...rest }: RootProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay || false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPiP, setIsPiP] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [prevVolume, setPrevVolume] = useState(1);
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastTimeUpdateRef = useRef<number>(0);

  const prefersReducedMotion = useReducedMotion();
  const isCoarsePointer = useIsCoarsePointer();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoad = () => setDuration(video.duration);
    if (video.readyState >= 1) onLoad();
    video.addEventListener("loadedmetadata", onLoad);
    return () => video.removeEventListener("loadedmetadata", onLoad);
  }, []);

  // 60fps progress bar via direct DOM mutation; throttle state for time display
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = (ts: number) => {
      if (video.duration) {
        const progress = video.currentTime / video.duration;
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${progress})`;
        }
        if (ts - lastTimeUpdateRef.current > 250) {
          setCurrentTime(video.currentTime);
          lastTimeUpdateRef.current = ts;
        }
        if (!loop && video.currentTime >= video.duration) {
          setIsPlaying(false);
          video.pause();
        }
      }
      rafRef.current = requestAnimationFrame(update);
    };

    if (isPlaying) rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, loop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const enter = () => setIsPiP(true);
    const leave = () => setIsPiP(false);
    video.addEventListener("enterpictureinpicture", enter);
    video.addEventListener("leavepictureinpicture", leave);
    return () => {
      video.removeEventListener("enterpictureinpicture", enter);
      video.removeEventListener("leavepictureinpicture", leave);
    };
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) video.pause();
    else void video.play();
    setIsPlaying((p) => !p);
  };

  const seek = (time: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = time;
    setCurrentTime(time);
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${time / video.duration})`;
    }
  };

  const toggleVolume = () => {
    const video = videoRef.current;
    if (!video) return;
    if (volume === 0) {
      video.muted = false;
      video.volume = prevVolume;
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      video.muted = true;
      video.volume = 0;
      setVolume(0);
    }
  };

  const setVolumeValue = (v: number) => {
    const video = videoRef.current;
    if (!video) return;
    const next = Math.max(0, Math.min(1, v));
    video.muted = next === 0;
    video.volume = next;
    setVolume(next);
  };

  const togglePiP = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture();
      else if (document.pictureInPictureEnabled) await video.requestPictureInPicture();
    } catch {
      // PiP not supported or denied
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await container.requestFullscreen();
    } catch {
      // FS not supported or denied
    }
  };

  // controls always visible on touch devices (no hover signal); otherwise hide
  // while playing unless the player has focus.
  const showControls = !isPlaying || isFocusWithin || isCoarsePointer;

  const videoChildren = childrenOfType(children, "VideoPlayer.Video");
  const glowChildren = childrenOfType(children, "VideoPlayer.Glow");
  const overlayChildren = childrenOfType(children, "VideoPlayer.VideoOverlay");
  const controlChildren = Children.toArray(children).filter((c) => {
    if (!isValidElement(c)) return false;
    const name = (c.type as { displayName?: string })?.displayName;
    return (
      !!name &&
      name.startsWith("VideoPlayer.") &&
      !["VideoPlayer.Video", "VideoPlayer.Glow", "VideoPlayer.VideoOverlay"].includes(name)
    );
  });

  if (!videoChildren.length) {
    throw new Error("VideoPlayer.Root must contain a VideoPlayer.Video child");
  }

  return (
    <VideoPlayerContext.Provider
      value={{
        isPlaying,
        togglePlay,
        videoRef,
        containerRef,
        progressBarRef,
        currentTime,
        duration,
        seek,
        videoProps: { loop, autoPlay, muted, ...rest },
        isPiP,
        isFullscreen,
        togglePiP,
        toggleFullscreen,
        toggleVolume,
        setVolumeValue,
        volume,
      }}
    >
      <motion.div
        ref={containerRef}
        initial={showControls ? "visible" : "hidden"}
        animate={showControls ? "visible" : "hidden"}
        whileHover="visible"
        onFocus={(event) => {
          const target = event.target as HTMLElement;
          requestAnimationFrame(() => {
            if (target.matches(":focus-visible")) setIsFocusWithin(true);
          });
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setIsFocusWithin(false);
          }
        }}
        className="relative isolate block w-full rounded-2xl"
      >
        {isPiP ? null : glowChildren}
        <div className="relative z-[1] overflow-hidden rounded-2xl">
          {videoChildren}
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <motion.div
            className="pointer-events-auto w-full"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.25 }}
          >
            {overlayChildren}
          </motion.div>
          <motion.div
            variants={{ hidden: { y: 52 }, visible: { y: 0 } }}
            transition={{
              type: "spring",
              bounce: 0.17,
              duration: prefersReducedMotion ? 0 : 0.3,
            }}
            className="pointer-events-auto absolute bottom-0 left-0 right-0 z-[1] p-2"
          >
            <div className="relative z-[1] flex w-full items-center justify-between gap-0 overflow-hidden rounded-[10px] bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur-xl">
              {controlChildren}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </VideoPlayerContext.Provider>
  );
}
Root.displayName = "VideoPlayer.Root";

// ─── Video ─────────────────────────────────────────────────────────────────

type VideoProps = {
  width?: number;
  height?: number;
  aspectRatio?: string | number;
  fit?: "cover" | "contain";
  children: ReactNode;
};

function Video({ aspectRatio, children, width, height, fit = "cover" }: VideoProps) {
  const { videoRef, videoProps, togglePlay } = useVideoPlayer();
  const prefersReducedMotion = useReducedMotion();
  const autoPlay = videoProps.autoPlay && !prefersReducedMotion;

  return (
    <div
      className="h-full w-full"
      style={{
        aspectRatio: aspectRatio
          ? `${aspectRatio}`
          : width && height
            ? `${width / height}`
            : undefined,
        transform: "scale(1) translateZ(0)",
      }}
    >
      <video
        {...videoProps}
        autoPlay={autoPlay}
        ref={videoRef}
        onClick={togglePlay}
        onKeyDown={(e) => {
          if (e.key === "Enter") togglePlay();
        }}
        className="relative z-[1] block h-full w-full cursor-pointer"
        style={{ objectFit: fit }}
      >
        {children}
      </video>
    </div>
  );
}
Video.displayName = "VideoPlayer.Video";

// ─── VideoOverlay (gradient header strip) ──────────────────────────────────

function VideoOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/25 to-transparent p-5 backdrop-blur-[0.5px]">
      {children}
    </div>
  );
}
VideoOverlay.displayName = "VideoPlayer.VideoOverlay";

// ─── PlaybackControls (play/pause + volume) ────────────────────────────────

function PlaybackControls() {
  const { isPlaying, togglePlay, toggleVolume, volume, setVolumeValue } =
    useVideoPlayer();
  const isCoarsePointer = useIsCoarsePointer();
  const volumePercent = volume * 100;
  const [isVolumeHovering, setIsVolumeHovering] = useState(false);

  return (
    <div className="flex items-center gap-0">
      <IconButton title={isPlaying ? "Pause" : "Play"} onClick={togglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <div
        className="relative"
        onPointerEnter={() => !isCoarsePointer && setIsVolumeHovering(true)}
        onPointerLeave={() => !isCoarsePointer && setIsVolumeHovering(false)}
        onFocus={() => !isCoarsePointer && setIsVolumeHovering(true)}
        onBlur={() => !isCoarsePointer && setIsVolumeHovering(false)}
      >
        <div
          className="absolute bottom-0 left-1/2 w-8 -translate-x-1/2 pb-11 transition-opacity"
          style={{
            opacity: isVolumeHovering ? 1 : 0,
            pointerEvents: isVolumeHovering ? "auto" : "none",
          }}
        >
          <div className="relative h-[102px] w-full overflow-hidden rounded-md bg-white/10 ring-1 ring-white/10 backdrop-blur-xl">
            <input
              aria-hidden
              tabIndex={-1}
              type="range"
              min={0}
              max={100}
              value={volumePercent}
              onChange={(e) => setVolumeValue(Number(e.target.value) / 100)}
              className="absolute left-1/2 top-1/2 m-0 h-6 w-20 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 cursor-pointer appearance-none bg-transparent [&::-moz-range-progress]:h-1 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-white [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/30 [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:[background-image:var(--track-gradient)] [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              style={
                {
                  "--track-gradient": `linear-gradient(to right, white ${volumePercent}%, rgba(255,255,255,0.3) ${volumePercent}%)`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
        <IconButton
          title={volumePercent === 0 ? "Unmute" : "Mute"}
          onClick={toggleVolume}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setVolumeValue(volume + 0.05);
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setVolumeValue(volume - 0.05);
            }
          }}
        >
          {volumePercent === 0 ? (
            <VolumeMuteIcon />
          ) : volumePercent < 50 ? (
            <VolumeDownIcon />
          ) : (
            <VolumeUpIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
}
PlaybackControls.displayName = "VideoPlayer.PlaybackControls";

// ─── Track + Range (progress scrubber) ─────────────────────────────────────

function Track({ children }: { children: ReactNode }) {
  const { seek, duration, currentTime } = useVideoPlayer();
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const id = useId();

  const getPctFromX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return x / rect.width;
  };

  const seekFromX = (clientX: number) => {
    if (!duration) return;
    seek(getPctFromX(clientX) * duration);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = true;
    seekFromX(e.clientX);
    const onMove = (ev: PointerEvent) => {
      if (isDraggingRef.current) seekFromX(ev.clientX);
    };
    const onUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  };

  return (
    <>
      <span className="text-[12px] font-medium tabular-nums text-white">
        {formatTime(currentTime)}
      </span>
      <div
        className="relative mx-3 flex h-6 flex-1 cursor-pointer items-center"
        onPointerDown={handlePointerDown}
      >
        <div
          ref={trackRef}
          id={`${id}-track`}
          tabIndex={0}
          role="slider"
          aria-label="Video track progress"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          aria-valuetext={formatTime(currentTime)}
          className="relative h-1 w-full overflow-hidden rounded-full bg-white/15 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/30"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") seek(currentTime - 1);
            if (e.key === "ArrowRight") seek(currentTime + 1);
          }}
        >
          {children}
        </div>
      </div>
      <span className="text-[12px] font-medium tabular-nums text-white">
        {formatTime(duration)}
      </span>
    </>
  );
}
Track.displayName = "VideoPlayer.Track";

function Range({ type }: { type: "played" | "buffered" }) {
  const { progressBarRef } = useVideoPlayer();
  const isPlayed = type === "played";
  return (
    <div
      ref={isPlayed ? progressBarRef : undefined}
      className="absolute left-0 h-full w-full origin-left"
      style={{
        transform: "scaleX(0)",
        backgroundColor: isPlayed ? "white" : "rgba(255,255,255,0.2)",
        zIndex: isPlayed ? 2 : 1,
      }}
    />
  );
}
Range.displayName = "VideoPlayer.Range";

// ─── ScreenControls (fullscreen + PiP) ─────────────────────────────────────

function ScreenControls() {
  const { togglePiP, toggleFullscreen, isPiP } = useVideoPlayer();
  const isIOSDevice = useIsIOS();

  return (
    <div className="flex items-center gap-0">
      {!isIOSDevice && (
        <IconButton title="Fullscreen" onClick={toggleFullscreen}>
          <FullScreenIcon />
        </IconButton>
      )}
      <IconButton title="Picture in Picture" onClick={togglePiP}>
        {isPiP ? <PiPExitIcon /> : <PiPIcon />}
      </IconButton>
    </div>
  );
}
ScreenControls.displayName = "VideoPlayer.ScreenControls";

// ─── Glow (canvas-driven ambient backdrop) ─────────────────────────────────

type GlowProps = {
  blur?: number;
  scaleX?: number;
  scaleY?: number;
  canvasWidth?: number;
  canvasHeight?: number;
  fps?: number;
};

function Glow({
  blur = 100,
  scaleX = 1.2,
  scaleY = 1.2,
  canvasWidth = 256,
  canvasHeight = 144,
  fps = 15,
}: GlowProps) {
  const { videoRef } = useVideoPlayer();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (canvasRef.current) ctxRef.current = canvasRef.current.getContext("2d");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const ctx = ctxRef.current;
    if (!video || !ctx) return;
    const interval = 1000 / fps;
    let lastDraw = 0;
    const draw = (ts: number) => {
      if (ts - lastDraw >= interval) {
        try {
          ctx.drawImage(video, 0, 0, canvasWidth, canvasHeight);
        } catch {
          // cross-origin video taints the canvas; bail silently
        }
        lastDraw = ts;
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [videoRef, canvasWidth, canvasHeight, fps]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      aria-hidden
      className="pointer-events-none absolute z-0"
      style={{
        top: "50%",
        left: "50%",
        width: "90%",
        transform: `translate(-50%, -50%) scale(${scaleX}, ${scaleY})`,
        filter: `blur(${blur}px) saturate(1.25)`,
        willChange: "transform",
      }}
    />
  );
}
Glow.displayName = "VideoPlayer.Glow";

// ─── one-liner wrapper ─────────────────────────────────────────────────────

type VideoPlayerWrapperProps = {
  src: string;
  type?: string;
  poster?: string;
  alt?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  onPlay?: React.ReactEventHandler<HTMLVideoElement>;
};

function VideoPlayerWrapper({
  src,
  type = "video/mp4",
  poster,
  alt,
  width,
  height,
  autoPlay,
  loop,
  muted,
  onPlay,
}: VideoPlayerWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <div
      ref={ref}
      className="relative mx-auto block h-full w-full rounded-2xl bg-black"
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {isInView ? (
        <Root
          aria-label={alt}
          playsInline
          poster={poster}
          muted={muted}
          autoPlay={autoPlay || false}
          loop={loop || false}
          onPlay={onPlay}
        >
          <Glow />
          <Video width={width} height={height}>
            <source src={src} type={type} />
          </Video>
          <PlaybackControls />
          <Track>
            <Range type="played" />
          </Track>
          <ScreenControls />
        </Root>
      ) : null}
    </div>
  );
}

export const VideoPlayer = Object.assign(VideoPlayerWrapper, {
  Root,
  Video,
  VideoOverlay,
  PlaybackControls,
  Track,
  Range,
  ScreenControls,
  Glow,
});
