
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { QRCodeSVG } from "qrcode.react";

export function Venue() {
  const { venue } = wedding;

  return (
    <section
      id="venue"
      aria-labelledby="venue-title"
      className="relative isolate overflow-hidden bg-[#C04080] px-5 pb-24 pt-0 sm:pb-32"
    >
      {/* Torn parchment sheet */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[#F3E5C5]"
        style={{
          clipPath:
            "polygon(0 2%, 2% 1%, 4% 2%, 6% 0.8%, 8% 1.8%, 10% 0.7%, 12% 1.6%, 14% 0.5%, 16% 1.5%, 18% 0.7%, 20% 1.8%, 22% 0.6%, 24% 1.6%, 26% 0.5%, 28% 1.7%, 30% 0.7%, 32% 1.5%, 34% 0.4%, 36% 1.7%, 38% 0.6%, 40% 1.6%, 42% 0.5%, 44% 1.7%, 46% 0.6%, 48% 1.6%, 50% 0.5%, 52% 1.7%, 54% 0.6%, 56% 1.5%, 58% 0.5%, 60% 1.7%, 62% 0.6%, 64% 1.6%, 66% 0.5%, 68% 1.7%, 70% 0.6%, 72% 1.6%, 74% 0.5%, 76% 1.7%, 78% 0.6%, 80% 1.5%, 82% 0.5%, 84% 1.7%, 86% 0.6%, 88% 1.6%, 90% 0.5%, 92% 1.7%, 94% 0.6%, 96% 1.6%, 98% 0.5%, 100% 1.5%, 100% 100%, 0 100%)",
        }}
      /> */}

      {/* Parchment texture and subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,252,239,0.65),transparent_72%)]" />
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-multiply" />

      {/* Fine antique-gold frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-4 top-8 border border-[#B18A45]/35 sm:inset-x-8 sm:bottom-8 sm:top-10"
      />

      <div className="relative mx-auto max-w-3xl pt-20 text-center sm:pt-28">
        <p
          {...reveal("fade")}
          className="eyebrow text-[#704e09]"
        >
          A place to gather
        </p>

        <h2
          id="venue-title"
          {...reveal("up", 100)}
          className="mt-4 font-script text-5xl text-[#f1eaee] sm:text-7xl"
        >
          Find Your Way
        </h2>

        <div
          {...reveal("up", 150)}
          className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3 text-[#A47A2D]"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B18A45]" />
          <span className="text-xl" aria-hidden="true">❧</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B18A45]" />
        </div>

        <p
          {...reveal("up", 200)}
          className="mt-5 font-display text-3xl italic text-[#be2b75] sm:text-4xl"
        >
          {venue.name}
        </p>

        <p className="eyebrow mt-3 text-[0.65rem] text-[#53648d]">
          {venue.locality}
        </p>

        <p className="mx-auto mt-6 max-w-md font-display text-lg italic leading-relaxed text-[#174a7e]">
          We look forward to welcoming you to share
          these beautiful moments with us.
        </p>

        {/* Clickable Google Maps QR code */}
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${venue.name} in Google Maps`}
          {...reveal("scale", 300)}
          className="group mx-auto mt-9 inline-flex flex-col items-center gap-4"
        >
          <div className="rounded-2xl border border-[#B18A45]/60 bg-[#FFF9EA] p-4 shadow-[0_8px_30px_rgba(90,65,25,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_35px_rgba(90,65,25,0.2)] sm:p-5">
            <QRCodeSVG
              value={venue.mapsUrl}
              size={160}
              bgColor="#FFF9EA"
              fgColor="#C04080"
              level="H"
              marginSize={2}
            />
          </div>

          <span className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#fbfaf6] transition-colors group-hover:text-[#C04080]">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
              aria-hidden="true"
            >
              <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.2" />
            </svg>
            Scan or tap for location
          </span>
        </a>

        
      </div>
    </section>
  );
}
