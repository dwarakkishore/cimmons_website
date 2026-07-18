import Image from "next/image";

const LOGOS = [
  "/assets/img/partner1.png",
  "/assets/img/partner2.png",
  "/assets/img/partner3.png",
  "/assets/img/partner4.png",
  "/assets/img/partner5.png",
];

export default function Partners() {
  return (
    <section className="overflow-hidden bg-ink py-8">
      <div className="relative">
        {/* edge fades so logos dissolve into the dark strip at both ends */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />

        {/* Seamless infinite marquee — the list is duplicated so the -50% translate loops cleanly */}
        <div className="marquee-track animate-marquee">
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div
              key={i}
              className="mx-8 flex shrink-0 items-center md:mx-12"
            >
              <Image
                src={src}
                alt={`Partner ${(i % LOGOS.length) + 1}`}
                width={140}
                height={40}
                className="h-8 w-auto opacity-70 brightness-0 invert transition-opacity hover:opacity-100 md:h-9"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
