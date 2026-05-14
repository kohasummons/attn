import Image from "next/image";

import { Container } from "@/components/ui/container";

export function LogoCloud() {
  return (
    <section className="relative bg-white">
      <Container className="flex h-[247px] items-center justify-center">
        <Image
          src="/v2/logo-cloud.png"
          alt="Featured partners"
          width={1166}
          height={83}
          sizes="(max-width: 1166px) 100vw, 1166px"
          className="h-auto w-full object-contain"
          priority
        />
      </Container>
    </section>
  );
}
