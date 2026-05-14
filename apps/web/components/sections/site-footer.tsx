import Image from "next/image";

import { Container } from "@/components/ui/container";

const columns = [
  {
    label: "Product",
    items: ["Features", "Pricing", "Book a demo"],
  },
  {
    label: "Explore",
    items: ["Events", "Blog"],
  },
  {
    label: "Company",
    items: ["About us", "Contact us"],
  },
  {
    label: "Legal",
    items: ["Privacy Policy", "Terms of Service"],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative h-[714px] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[246px] hidden justify-end lg:flex">
        <div className="relative h-[742px] w-[857px] -mr-[103px]">
          <Image
            src="/v2/footer-art.png"
            alt=""
            fill
            sizes="857px"
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>

      <Container className="relative pt-[69px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[auto_1fr]">
          <div>
            <p className="text-[30px] font-extrabold leading-none tracking-[-0.07em] text-white">
              attn.
            </p>
            <p className="mt-3 text-[16px] tracking-[-0.02em] text-[#b3b7b9]">
              be inevitable with ai
            </p>
          </div>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-4 md:justify-self-end">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="text-[16px] font-normal text-white/65">{col.label}</p>
                <ul className="mt-7 flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[16px] tracking-[-0.02em] text-[#d0d0d0] hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
