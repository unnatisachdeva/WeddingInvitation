
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Divider, Mandala } from "./ornaments";
import { Monogram } from "./Monogram";
import { Petals } from "./Petals";
import { ScallopEdge } from "./ScallopEdge";

export function Closing() {
  const { date, venue } = wedding;

  return (
    <footer
      id="closing"
      aria-label="Closing note"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F7EEDB_0%,#F0DFBB_52%,#E6D0A1_100%)] px-5 py-20 text-center text-[#C04080] sm:px-8 sm:py-28"
    >
      {/* Parchment texture */}
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-multiply" />

      {/* Warm central glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,252,239,0.85)_0%,rgba(255,252,239,0.25)_48%,transparent_75%)]" />

      {/* Subtle mandala backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-[43%] -z-10 w-[125vmin] max-w-none -translate-x-1/2 -translate-y-1/2 text-[#9D793B]/[0.10]">
        <Mandala className="w-full" />
      </div>

      {/* Fine inner frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#B18A45]/55 sm:inset-5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[17px] border border-[#B18A45]/25 sm:inset-[25px]"
      />

      {/* Corner ornaments */}
      <div aria-hidden="true" className="pointer-events-none absolute left-5 top-5 text-[#9D793B] sm:left-8 sm:top-8">
        <svg viewBox="0 0 56 56" className="h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M2 28C16 28 28 16 28 2M2 12C8 12 12 8 12 2M2 42C24 42 42 24 42 2M2 53C30 53 53 30 53 2" />
          <path d="M10 28C16 23 21 18 24 10M18 42C27 34 34 27 42 18" />
          <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-5 top-5 rotate-90 text-[#9D793B] sm:right-8 sm:top-8">
        <svg viewBox="0 0 56 56" className="h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M2 28C16 28 28 16 28 2M2 12C8 12 12 8 12 2M2 42C24 42 42 24 42 2M2 53C30 53 53 30 53 2" />
          <path d="M10 28C16 23 21 18 24 10M18 42C27 34 34 27 42 18" />
          <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-5 left-5 rotate-[-90deg] text-[#9D793B] sm:bottom-8 sm:left-8">
        <svg viewBox="0 0 56 56" className="h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M2 28C16 28 28 16 28 2M2 12C8 12 12 8 12 2M2 42C24 42 42 24 42 2M2 53C30 53 53 30 53 2" />
          <path d="M10 28C16 23 21 18 24 10M18 42C27 34 34 27 42 18" />
          <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-5 right-5 rotate-180 text-[#9D793B] sm:bottom-8 sm:right-8">
        <svg viewBox="0 0 56 56" className="h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M2 28C16 28 28 16 28 2M2 12C8 12 12 8 12 2M2 42C24 42 42 24 42 2M2 53C30 53 53 30 53 2" />
          <path d="M10 28C16 23 21 18 24 10M18 42C27 34 34 27 42 18" />
          <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <ScallopEdge color="#F7EEDB" />
      <Petals count={5} />

      <div className="relative mx-auto max-w-3xl">
        {/* Peacock-inspired ornamental accent */}
        <div {...reveal("scale")} className="relative mx-auto w-fit">
          <div className="pointer-events-none absolute -inset-5 rounded-full border border-[#B18A45]/35" />
          <div className="pointer-events-none absolute -inset-2 rounded-full border border-[#B18A45]/25" />
          <Monogram
            className="relative mx-auto w-28 text-[0.95rem] sm:w-36"
            ringClassName="text-[#A47A2D]"
            letterClassName="text-[#C04080]"
          />
        </div>

        {/* Decorative separator */}
        <div className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-3 text-[#A47A2D]">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B18A45]" />
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M16 2C21 8 24 12 16 16C8 12 11 8 16 2Z" />
            <path d="M16 16C24 13 29 17 28 23C22 24 18 21 16 16Z" />
            <path d="M16 16C8 13 3 17 4 23C10 24 14 21 16 16Z" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B18A45]" />
        </div>

        {/* Closing message */}
        <p
          {...reveal("up", 200)}
          className="mx-auto mt-9 max-w-lg font-display text-xl leading-relaxed font-light italic text-[#243957] sm:text-3xl"
        >
          We look forward to celebrating
          <span className="block">these beautiful moments with you.</span>
        </p>

        {/* Family sign-off */}
        <div {...reveal("fade", 300)} className="mt-14">
          <p className="eyebrow text-[0.65rem] tracking-[0.32em] text-[#8B682E] sm:tracking-[0.4em]">
            With love &amp; warm regards
          </p>

          <p
            {...reveal("blur", 400)}
            className="mt-5 font-script text-[clamp(3.3rem,12vw,6.5rem)] leading-[1.15] text-[#C04080]"
          >
            Punjani Family
          </p>

          <p className="mt-3 font-caps text-[0.65rem] tracking-[0.3em] text-[#8B682E]">
            WITH LOVE, ALWAYS
          </p>
        </div>

        {/* Gold ornamental divider */}
        <div {...reveal("up", 500)}>
          <Divider className="mx-auto mt-9 w-44 text-[#A47A2D]" />

          <p className="mt-7 font-display text-xl tracking-[0.25em] text-[#C04080] sm:text-2xl sm:tracking-[0.4em]">
            {date.numeric}
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B18A45]/60" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#A47A2D]" />
            <span className="h-px w-8 bg-[#B18A45]/60" />
          </div>

          <p className="eyebrow mt-6 text-[#C04080]">
            {venue.name}
          </p>

          <p className="eyebrow mt-2 text-[0.6rem] text-[#6E7890]">
            {venue.locality}
          </p>

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-[#8B682E] transition-colors hover:text-[#C04080]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.2" />
            </svg>
            View venue on map
          </a>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          className="eyebrow mx-auto mt-20 inline-flex flex-col items-center gap-3 text-[0.6rem] text-[#6E7890] transition-colors duration-500 hover:text-[#C04080]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.2}
            aria-hidden="true"
          >
            <path d="M6 14l6-6 6 6" />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  );
}
