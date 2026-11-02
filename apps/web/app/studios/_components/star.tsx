import { cn } from "@/lib/utils";

function Star({ haloed = false }: { haloed?: boolean }) {
  return (
    <span
      className={`flex size-[48px] items-center justify-center rounded-full ${
        haloed ? "bg-[rgba(123,97,255,0.2)]" : ""
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-[32px]"
        fill="#ff8d28"
        aria-hidden
      >
        <path d="M16 1.5l4.28 9.02 9.92 1.2-7.32 6.77 1.94 9.81L16 23.3l-8.82 4.99 1.94-9.81L1.8 11.72l9.92-1.2L16 1.5z" />
      </svg>
    </span>
  );
}

export function StarRating({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      aria-label="5 out of 5 stars"
    >
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}
