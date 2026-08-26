import { StarRating } from "@/app/superrad/_components/star";

type Shot = { src: string; w: number; h: number; bar?: boolean };

// Chat-screenshot testimonials in three centered rows (proportions from the
// Figma masonry). Each card keeps its aspect ratio and flex-grows by its width,
// so the whole gallery scales fluidly to any container width. Row widths (as a
// % of the 859px design) preserve the narrower top/bottom rows.
const rows: { width: string; cards: Shot[] }[] = [
  {
    width: "87.7%",
    cards: [
      { src: "339", w: 198, h: 255 },
      { src: "341", w: 352, h: 255 },
      { src: "351", w: 148, h: 256 },
    ],
  },
  {
    width: "100%",
    cards: [
      { src: "345", w: 289, h: 262 },
      { src: "347", w: 216, h: 262 },
      { src: "349", w: 298, h: 262, bar: true },
    ],
  },
  {
    width: "78.9%",
    cards: [
      { src: "345", w: 284, h: 258 },
      { src: "343", w: 360, h: 262 },
    ],
  },
];

// Flattened for the mobile 2-column layout.
const allCards: Shot[] = rows.flatMap((row) => row.cards);

function Card({ src, w, h, bar }: Shot) {
  return (
    <div
      className="min-w-0 rounded-[clamp(6px,1.5vw,13px)] bg-white p-[clamp(3px,0.75vw,6.5px)]"
      style={{ flexGrow: w, flexBasis: 0, aspectRatio: `${w} / ${h}` }}
    >
      <div className="relative size-full overflow-hidden rounded-[clamp(3px,0.75vw,6.5px)]">
        <img
          src={`/superrad/upgrade/fellows/${src}.webp`}
          alt="AI Fellow testimonial"
          className="absolute inset-0 size-full object-cover"
        />
        {bar && (
          <div className="absolute left-[24.8%] top-[55.7%] h-[5.5%] w-[35.6%] rounded-[4px] bg-[#242625]" />
        )}
      </div>
    </div>
  );
}

export function Fellows() {
  return (
    <section className="w-full overflow-hidden bg-[#221919] px-6 pt-[100px] pb-[20px]">
      <div className="mx-auto flex max-w-[859px] flex-col items-center">
        <h2 className="sr-greed text-center font-semibold leading-none tracking-[-2.4px] text-white text-[clamp(30px,7vw,50px)]">
          Hear from the AI Fellows
        </h2>

        {/* Desktop: the Figma 3-row masonry. */}
        <div className="mt-[40px] hidden w-full flex-col items-center gap-[clamp(8px,1.8vw,16px)] md:flex">
          {rows.map((row, i) => (
            <div
              key={i}
              style={{ width: row.width }}
              className="flex items-center justify-center gap-[clamp(4px,0.9vw,8px)]"
            >
              {row.cards.map((shot, j) => (
                <Card key={j} {...shot} />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: 2-column masonry (bigger, readable cards). */}
        <div className="mt-[40px] w-full columns-2 gap-[8px] md:hidden">
          {allCards.map((shot, j) => (
            <div key={j} className="mb-[8px] break-inside-avoid">
              <Card {...shot} />
            </div>
          ))}
        </div>

        <StarRating className="mt-[80px]" />
      </div>
    </section>
  );
}
