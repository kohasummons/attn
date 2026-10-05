"use client";

import posthog from "posthog-js";
import { useRef } from "react";
import { VideoPlayer } from "../components/video-player";

// fires `video_played` once per mount for each fellow video. autocapture sees
// "click on play button" with no payload — this adds the identifier we care
// about (which fellow's video was actually watched).
export function TrackedVideoPlayer({
  name,
  src,
  type = "video/mp4",
}: {
  name: string;
  src: string;
  type?: string;
}) {
  const fired = useRef(false);

  return (
    <VideoPlayer
      src={src}
      type={type}
      onPlay={() => {
        if (fired.current) return;
        fired.current = true;
        posthog.capture("video_played", { fellow: name });
      }}
    />
  );
}
