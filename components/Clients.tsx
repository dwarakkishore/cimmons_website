import Image from "next/image";

// Client logos extracted from the CIMMONS Company Profile ("Our clients").
// name is used for the accessible alt text.
const CLIENTS = [
  { file: "bosch", name: "Bosch" },
  { file: "cred", name: "CRED" },
  { file: "qwikcilver", name: "Qwikcilver" },
  { file: "britannia", name: "Britannia" },
  { file: "prefr", name: "Prefr" },
  { file: "moneyview", name: "Moneyview" },
  { file: "pine-labs", name: "Pine Labs" },
  { file: "betterhalf", name: "Betterhalf.ai" },
  { file: "snitch", name: "Snitch" },
  { file: "slice", name: "Slice" },
  { file: "nova-benefits", name: "Nova Benefits" },
  { file: "honda", name: "Honda" },
  { file: "assetz", name: "Assetz" },
  { file: "eazeebox", name: "Eazeebox" },
  { file: "relicell", name: "Relicell" },
  { file: "ek-bazaar", name: "Ek Bazaar" },
  { file: "hoysala", name: "Hoysala Caabz" },
  { file: "ajeenkya", name: "Ajeenkya DY Patil University" },
  { file: "nestaway", name: "NestAway" },
  { file: "houszzat", name: "Houszzat" },
  { file: "hdfc", name: "HDFC Bank" },
  { file: "bajaj-allianz", name: "Bajaj Allianz" },
];

export default function Clients() {
  return (
    <section className="bg-soft py-16 lg:py-20">
      <div className="container-x">
        <div className="mb-12 text-center">
          <span className="eyebrow">Our Clients</span>
          <h2 className="section-title mt-5 text-[26px] sm:text-[32px] lg:text-[38px]">
            Trusted by leading brands across industries
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* edge fades so logos dissolve into the section background at both ends */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-soft to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-soft to-transparent sm:w-32" />

        {/* Seamless infinite marquee — the list is duplicated so the -50% translate loops cleanly */}
        <div className="marquee-track animate-marquee">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div
              key={i}
              className="mx-6 flex shrink-0 items-center md:mx-10"
            >
              <Image
                src={`/assets/img/clients/${c.file}.png`}
                alt={c.name}
                width={200}
                height={80}
                className="h-10 w-auto object-contain opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
