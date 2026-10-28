"use client";

import { DialRoot } from "dialkit";
import "dialkit/styles.css";
import DitherPanel from "@/components/effects/dither/dither-panel";
import type { DitherTuningValues } from "@/components/effects/dither/dither-tuning-context";
import RailPanel from "./rail-panel";

export default function PreviewControls({
  onChange,
}: {
  onChange: (values: DitherTuningValues) => void;
}) {
  return (
    <>
      <DitherPanel onChange={onChange} />
      <RailPanel />
      <DialRoot position="bottom-right" defaultOpen />
    </>
  );
}
