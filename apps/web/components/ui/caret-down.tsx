import type { ComponentProps } from "react";

export function CaretDown({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M8.025 1.425L4.0125 5.4L0 1.425V0H8.025V1.425Z"
        fill="currentColor"
      />
    </svg>
  );
}
