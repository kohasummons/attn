"use client";

import { useEffect, useRef, useState } from "react";

const SRC =
  "https://player.mediadelivery.net/embed/688488/3abc8944-cfe7-40da-9369-3ac956fbf4b7?autoplay=true&loop=true&muted=true&preload=true&responsive=true";

const BTN =
  "flex size-[44px] cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:border hover:border-white/20";

function VolumeOnIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[20px]" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"
      />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[20px]" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602A5 5 0 0 1 15 16m2.7-11a9 9 0 0 1 2.362 11.086m-1.676 2.299A9 9 0 0 1 17.7 19M9.069 5.054L9.5 4.5A.8.8 0 0 1 11 5v2m0 4v8a.8.8 0 0 1-1.5.5L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l1.294-1.664M3 3l18 18"
      />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-[18px]" fill="currentColor" aria-hidden>
      <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
    </svg>
  );
}

function FullscreenExitIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-[18px]" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h8V4m8 0v8h8M4 20h8v8m16-8h-8v8"
      />
    </svg>
  );
}

type FsIframe = HTMLIFrameElement & { webkitRequestFullscreen?: () => void };
type FsDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => void;
};

export function VideoCard() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const doc = document as FsDocument;
      setFullscreen(Boolean(document.fullscreenElement ?? doc.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  const toggleMute = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    // Bunny Stream implements the Player.js protocol.
    win.postMessage(
      JSON.stringify({
        context: "player.js",
        version: "0.0.11",
        method: muted ? "unmute" : "mute",
      }),
      "*",
    );
    setMuted((m) => !m);
  };

  const toggleFullscreen = () => {
    const el = iframeRef.current as FsIframe | null;
    const doc = document as FsDocument;
    if (document.fullscreenElement ?? doc.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      else doc.webkitExitFullscreen?.();
    } else if (el) {
      if (el.requestFullscreen) el.requestFullscreen();
      else el.webkitRequestFullscreen?.();
    }
  };

  return (
    <div className="relative mt-[80px] aspect-[9/16] w-full max-w-[573px] overflow-hidden rounded-[37px] bg-white [transform:translateZ(0)]">
      <iframe
        ref={iframeRef}
        src={SRC}
        loading="lazy"
        title="SuperRad preview"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full rounded-[37px] border-0"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
        allowFullScreen
      />

      {/* Thumbnail + loader shown until the player is ready, then fades away. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-[5] rounded-[37px] transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/images/bg-offer-one-two.jpg"
          alt=""
          className="absolute inset-0 h-full w-full rounded-[37px] object-cover"
        />
        <div className="absolute inset-0 rounded-[37px] bg-black/25" />
        <div className="absolute left-1/2 top-1/2 size-[42px] -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-[3px] border-white/30 border-t-white" />
      </div>

      <div className="absolute bottom-[16px] right-[16px] z-10 flex items-center gap-[8px]">
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          aria-pressed={fullscreen}
          className={BTN}
        >
          {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className={BTN}
        >
          {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      </div>
    </div>
  );
}
