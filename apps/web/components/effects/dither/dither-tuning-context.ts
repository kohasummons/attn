"use client";

import { createContext, useContext } from "react";
import type { DitherOptions } from "./dither-types";

export type DitherTuningValues = {
  scope: string;
  overrideImageColors: boolean;
  options: DitherOptions;
};

export const DitherTuningContext = createContext<DitherTuningValues | null>(
  null,
);

export function useDitherTuning(group?: string) {
  const tuning = useContext(DitherTuningContext);
  return tuning && (tuning.scope === "all" || tuning.scope === group)
    ? tuning
    : undefined;
}
