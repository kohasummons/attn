import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Mercy Thaddeus",
    role: "Builder",
    photo: "/images/team-mercy.jpg",
    site: "https://mercythaddeus.xyz",
    instagram: "https://www.instagram.com/mercythaddeus_",
    linkedin: "https://www.linkedin.com/in/mercythaddeus",
  },
  {
    name: "Joshua Omobola",
    role: "Builder",
    photo: "/images/team-joshua.jpg",
    site: "https://koha.wtf",
    instagram: "https://www.instagram.com/kohawithstuff",
    linkedin: "https://www.linkedin.com/in/kohasummons",
  },
];

export default function TeamPage() {
  return (
    <main className="relative min-h-dvh bg-background p-0 text-foreground">
      <div className="pointer-events-none fixed bottom-0 left-0 isolate h-32 w-full bg-linear-to-t from-[#fefefe] from-10% via-[#fefefe]/50 via-50% to-transparent" />
      <div className="w-full max-w-[600px] px-5 py-8 text-[18px] font-medium leading-[1.55] tracking-[-0.7px] text-[#888888] sm:p-14 sm:text-[20px]">
        <nav className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[18px] font-medium sm:text-[20px]">
          <Link className="text-[#0099ff] underline underline-offset-2" href="/">
            home
          </Link>
          <Link className="text-[#0099ff] underline underline-offset-2" href="/team">
            team
          </Link>
        </nav>

        <section className="mb-10">
          <h1 className="mb-4 text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[50px]">
            team.
          </h1>
          <p className="mb-4">
            attention factory is run by humans first.
          </p>
          <p className="mb-4">
            then AI Agents.
          </p>
          <p>
            we work across ai education & media, agentic systems, automation, and
            the generative ai tools that make you inevitable.
          </p>
        </section>

        <section className="space-y-10">
          {team.map((person) => (
            <div key={person.name}>
              <div className="relative mb-4 aspect-4/5 w-full overflow-hidden bg-neutral-200">
                <Image
                  alt={person.name}
                  className="object-cover grayscale transition duration-500 ease-out hover:grayscale-0"
                  fill
                  sizes="(min-width: 640px) 600px, 100vw"
                  src={person.photo}
                />
              </div>
              <h2 className="text-[26px] font-bold leading-tight tracking-[-0.04em] text-neutral-950">
                {person.name}
              </h2>
              <p className="mb-3">{person.role}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a
                  className="text-[#0099ff] underline underline-offset-2"
                  href={person.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="text-[#0099ff] underline underline-offset-2"
                  href={person.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="text-[#0099ff] underline underline-offset-2"
                  href={person.site}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Web
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
