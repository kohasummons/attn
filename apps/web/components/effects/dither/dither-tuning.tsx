"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import {
  DitherTuningContext,
  type DitherTuningValues,
} from "./dither-tuning-context";

const PreviewControls = dynamic(
  () => import("@/components/marketing/preview-controls"),
  { ssr: false },
);

export function DitherTuning({ children }: { children: ReactNode }) {
  const [tuning, setTuning] = useState<DitherTuningValues | null>(null);
  return (
    <DitherTuningContext.Provider value={tuning}>
      {children}
      {/* Keep both the editor and persisted preview overrides out of production. */}
      {/* eslint-disable-next-line turbo/no-undeclared-env-vars */}
      {process.env.NODE_ENV === "development" && (
        <PreviewControls onChange={setTuning} />
      )}
    </DitherTuningContext.Provider>
  );
}
