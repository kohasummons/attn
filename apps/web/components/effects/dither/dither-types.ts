export type DitherOptions = {
  strength?: number;
  levels?: number;
  pixelSize?: number;
  dim?: number;
  contrast?: number;
  saturation?: number;
  warmth?: number;
  animated?: boolean;
  animationDuration?: number;
  animationAmount?: number;
};

/** Glass can sample the completed image, including its live effect. */
export const ARTWORK_FRAME_EVENT = "artwork:frame";

export type DitherHandle = {
  update: (options: DitherOptions) => void;
  dispose: () => void;
};
