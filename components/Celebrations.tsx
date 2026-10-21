import type { CSSProperties, ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Divider, Lotus } from "./ornaments";
import { Venue } from "@/components/Venue";

/* ------------------------------------------------------------------ */
/*  Per-function colour themes                                         */
/* ------------------------------------------------------------------ */

type EventTheme = {
  card: string; // card background
  pattern: string; // subtle texture over the card
  patternSize?: string;
  ribbon?: string; // optional strip along the top edge
  border: string;
  glow: string; // coloured shadow around the card
  date: string;
  title: string;
  ceremony: string;
  body: string;
  accent: string; // time, pin icon, connector line
  marker: string; // timeline dot
  badgeBg: string;
  textShadow: string;
  motif: ReactNode;
};

const icon = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const LeafIcon = () => (
  <svg {...icon}>
    <path d="M12 21c-4.4 0-7-3.2-7-7.2C5 8.6 9.5 4.6 12 3c2.5 1.6 7 5.6 7 10.8 0 4-2.6 7.2-7 7.2Z" />
    <path d="M12 21V9M12 14l-3-2.5M12 11.5l3-2.5" />
  </svg>
);

const RingIcon = () => (
  <svg {...icon}>
    <circle cx="12" cy="15" r="6" />
    <path d="M9 6.5 12 3l3 3.5-3 2.5-3-2.5Z" />
  </svg>
);

const MarigoldIcon = () => (
  <svg {...icon}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <ellipse key={a} cx="12" cy="6.2" rx="2" ry="3.1" transform={`rotate(${a} 12 12)`} />
    ))}
    <circle cx="12" cy="12" r="2.4" />
  </svg>
);

const SparkleIcon = () => (
  <svg {...icon}>
    <path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8L11 3Z" />
    <path d="M18.5 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </svg>
);

const THEMES: Record<string, EventTheme> = {
  mehndi: {
    card: "linear-gradient(150deg, #1E5A39 0%, #2C7A4B 52%, #164A2D 100%)",
    pattern:
      "radial-gradient(ellipse 3px 5px at 50% 50%, rgba(196,232,168,0.16) 98%, transparent 100%)",
    patternSize: "26px 26px",
    border: "#D6B46A",
    glow: "rgba(22,74,45,0.45)",
    date: "#EBD68C",
    title: "#FFF8EE",
    ceremony: "#DDF0D2",
    body: "#EFF7EA",
    accent: "#EBD68C",
    marker: "#2C7A4B",
    badgeBg: "rgba(255,255,255,0.12)",
    textShadow: "0 1px 2px rgba(8,36,20,0.45)",
    motif: <LeafIcon />,
  },
  ring: {
    card: "linear-gradient(150deg, #1B3D8A 0%, #2A58B8 52%, #142E6A 100%)",
    pattern:
      "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 14px)",
    border: "#D6B46A",
    glow: "rgba(20,46,106,0.45)",
    date: "#F3D58A",
    title: "#FFF8EE",
    ceremony: "#DCE6FF",
    body: "#ECF1FF",
    accent: "#F3D58A",
    marker: "#2A58B8",
    badgeBg: "rgba(255,255,255,0.12)",
    textShadow: "0 1px 2px rgba(8,20,56,0.5)",
    motif: <RingIcon />,
  },
  haldi: {
    card: "linear-gradient(150deg, #FFD54A 0%, #FFE27A 45%, #F5AE2E 100%)",
    pattern: [
      "radial-gradient(circle at 12% 18%, #E0457B 0 2.5px, transparent 3.5px)",
      "radial-gradient(circle at 78% 12%, #2E9D58 0 2px, transparent 3px)",
      "radial-gradient(circle at 90% 70%, #2F7FD6 0 2.5px, transparent 3.5px)",
      "radial-gradient(circle at 30% 85%, #F26B1D 0 2px, transparent 3px)",
      "radial-gradient(circle at 60% 40%, #9B4DCA 0 1.5px, transparent 2.5px)",
      "radial-gradient(circle at 46% 94%, #E0457B 0 1.5px, transparent 2.5px)",
    ].join(","),
    patternSize: "130px 130px",
    ribbon:
      "linear-gradient(90deg, #E0457B 0 20%, #F26B1D 20% 40%, #2E9D58 40% 60%, #2F7FD6 60% 80%, #9B4DCA 80% 100%)",
    border: "#FFF3C4",
    glow: "rgba(190,110,10,0.4)",
    date: "#9A3412",
    title: "#4A1F00",
    ceremony: "#7A3608",
    body: "#5B2C06",
    accent: "#C2410C",
    marker: "#F5AE2E",
    badgeBg: "rgba(255,255,255,0.5)",
    textShadow: "none",
    motif: <MarigoldIcon />,
  },
  party: {
    card: "linear-gradient(135deg, #B8862E 0%, #F6E3A1 28%, #D4A93F 50%, #FFF1BF 70%, #A8761F 100%)",
    pattern: [
      "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.9) 0 1.2px, transparent 2px)",
      "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.8) 0 1px, transparent 1.8px)",
      "radial-gradient(circle at 45% 85%, rgba(255,250,220,0.9) 0 1.5px, transparent 2.3px)",
    ].join(","),
    patternSize: "60px 60px",
    border: "#FFF4CF",
    glow: "rgba(150,100,20,0.45)",
    date: "#6B4410",
    title: "#2B1A04",
    ceremony: "#5A3A0C",
    body: "#3A2508",
    accent: "#8C1D52",
    marker: "#D4A93F",
    badgeBg: "rgba(255,255,255,0.45)",
    textShadow: "0 1px 0 rgba(255,246,210,0.6)",
    motif: <SparkleIcon />,
  },
  wedding: {
    card: "linear-gradient(150deg, #6E1023 0%, #8E1B33 50%, #4F0A18 100%)",
    pattern:
      "radial-gradient(circle at 50% 50%, rgba(243,213,138,0.13) 0 1.2px, transparent 2px)",
    patternSize: "18px 18px",
    border: "#D6B46A",
    glow: "rgba(79,10,24,0.55)",
    date: "#F3D58A",
    title: "#FFF5E6",
    ceremony: "#F5DCCB",
    body: "#FBEADF",
    accent: "#F3D58A",
    marker: "#8E1B33",
    badgeBg: "rgba(243,213,138,0.14)",
    textShadow: "0 1px 2px rgba(40,4,12,0.55)",
    motif: <Lotus className="w-6" />,
  },
};

/* Match each event to its theme by its id, title or ceremony name */
function themeFor(event: { id: string; title: string; ceremony?: string }): EventTheme {
  const text = `${event.id} ${event.title} ${event.ceremony ?? ""}`.toLowerCase();

  if (/meh(e)?ndi/.test(text)) return THEMES.mehndi;
  if (/\bring\b|engagement|sagai|roka/.test(text)) return THEMES.ring;
  if (/haldi/.test(text)) return THEMES.haldi;
  if (/party|sangeet|cocktail|reception/.test(text)) return THEMES.party;
  return THEMES.wedding;
}

/* ------------------------------------------------------------------ */

export function Celebrations() {
  const events = wedding.events;

  return (
    <section
      id="celebrations"
      aria-labelledby="celebrations-title"
      className="relative isolate overflow-hidden bg-[#C04080] px-5 py-24 sm:py-32"
    >
      {/* Hot pink background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#E28CB5_0%,#C04080_48%,#A93768_100%)]" />

      {/* Subtle gold pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-jaali opacity-[0.08]" />

      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p {...reveal("fade")} className="eyebrow text-[#F3D58A]">
          Five days of love &amp; celebration
        </p>

        <h2
          id="celebrations-title"
          {...reveal("up", 100)}
          className="mt-5 font-script text-5xl text-[#FFF8EE] sm:text-7xl"
        >
          Wedding Timeline
        </h2>

        <p
          {...reveal("up", 200)}
          className="mt-5 font-display text-lg italic text-[#FCEBD0] sm:text-xl"
        >
          Every moment brings us closer together
        </p>

        <Divider className="mx-auto mt-8 w-36 text-[#D6B46A]" />
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-5xl sm:mt-24">
        {/* The story thread: left on mobile, centred on desktop */}
        <div className="absolute bottom-8 left-[15px] top-4 w-[2px] bg-gradient-to-b from-transparent via-[#F3D58A]/85 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12 sm:space-y-16">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            const t = themeFor(event);

            const cardStyle: CSSProperties = {
              background: t.card,
              borderColor: t.border,
              boxShadow: `0 18px 40px ${t.glow}, 0 0 0 1px rgba(255,255,255,0.08) inset`,
              textShadow: t.textShadow,
            };

            return (
              <article
                key={event.id}
                {...reveal("up", 100 + index * 100)}
                className="relative grid grid-cols-[32px_minmax(0,1fr)] items-center sm:grid-cols-[1fr_64px_1fr]"
              >
                {/* Timeline marker in the function's colour */}
                <div className="relative z-10 col-start-1 row-start-1 flex justify-center sm:col-start-2">
                  <span
                    className="flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-[#F3D58A]"
                    style={{
                      background: t.marker,
                      boxShadow: `0 0 0 4px rgba(255,255,255,0.12), 0 0 18px ${t.glow}`,
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFF8EE]" />
                  </span>
                </div>

                {/* Card column */}
                <div
                  className={[
                    "relative col-start-2 row-start-1 min-w-0 pl-5 sm:col-start-1 sm:pl-0",
                    isLeft ? "sm:pr-10" : "sm:col-start-3 sm:pl-10",
                  ].join(" ")}
                >
                  {/* Connector from the thread to the card */}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute top-1/2 h-[2px] w-5 -translate-y-1/2 sm:w-10",
                      "left-0",
                      isLeft ? "sm:left-auto sm:right-0" : "sm:left-0",
                    ].join(" ")}
                    style={{ background: t.border, opacity: 0.85 }}
                  />

                  <div
                    className={[
                      "relative overflow-hidden rounded-[22px] border px-6 py-7 sm:px-8 sm:py-8",
                      isLeft ? "sm:text-right" : "sm:text-left",
                    ].join(" ")}
                    style={cardStyle}
                  >
                    {/* Texture */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage: t.pattern,
                        backgroundSize: t.patternSize,
                      }}
                    />

                    {/* Soft light from the top */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,255,255,0.22),transparent_60%)]"
                    />

                    {/* Optional carnival ribbon (Haldi) */}
                    {t.ribbon && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-[6px]"
                        style={{ background: t.ribbon }}
                      />
                    )}

                    {/* Inner hairline frame */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[6px] rounded-[17px] border"
                      style={{ borderColor: t.border, opacity: 0.35 }}
                    />

                    {/* Motif badge on the outer corner */}
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute top-4 flex h-11 w-11 items-center justify-center rounded-full border",
                        "right-4",
                        isLeft ? "sm:left-4 sm:right-auto" : "sm:right-4",
                      ].join(" ")}
                      style={{
                        background: t.badgeBg,
                        borderColor: t.border,
                        color: t.accent,
                      }}
                    >
                      {t.motif}
                    </span>

                    <div className="relative">
                      {/* Date */}
                      <p
                        className="pr-12 font-sans text-xs font-semibold uppercase tracking-[0.26em] sm:pr-0 sm:text-sm"
                        style={{ color: t.date }}
                      >
                        {event.date} · {event.weekday}
                      </p>

                      {/* Function name */}
                      <h3
                        className="mt-3 font-caps text-2xl font-semibold tracking-[0.06em] sm:text-[2rem] sm:leading-tight"
                        style={{ color: t.title }}
                      >
                        {event.title}
                      </h3>

                      {/* Ceremony */}
                      <p
                        className="mt-2 font-display text-xl font-medium italic sm:text-2xl"
                        style={{ color: t.ceremony }}
                      >
                        {event.ceremony}
                      </p>

                      {/* Venue */}
                      <p
                        className={[
                          "mt-4 flex items-center gap-2 font-sans text-base font-medium sm:text-lg",
                          isLeft ? "sm:justify-end" : "sm:justify-start",
                        ].join(" ")}
                        style={{ color: t.body }}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0"
                          style={{ fill: t.accent }}
                        >
                          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                        </svg>
                        {event.location}
                      </p>

                      {/* Time */}
                      <div
                        className={[
                          "mt-4 flex items-center gap-3",
                          isLeft ? "sm:flex-row-reverse" : "",
                        ].join(" ")}
                      >
                        <span className="h-[2px] w-8" style={{ background: t.accent }} />
                        <span
                          className="font-sans text-base font-semibold tracking-[0.18em] sm:text-lg"
                          style={{ color: t.accent }}
                        >
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Closing ornament */}
      <div className="mt-20 text-center">
        <Lotus className="mx-auto w-12 text-[#F3D58A]" />

        <p className="mt-5 font-display text-2xl italic text-[#FFF8EE]">
          With love, we invite you to celebrate
        </p>

        <p className="eyebrow mt-4 text-[#F3D58A]">Ansh &amp; Vanshika</p>
      </div>

{/* Venue & Google Maps QR
<div
  {...reveal("up", 150)}
  className="mx-auto mt-24 max-w-3xl text-center"
>
  <Divider className="mx-auto mb-10 w-36 text-[#D6B46A]" />

  <p className="eyebrow text-[#D6B46A]">
    Find Your Way
  </p>

  <h2 className="mt-5 font-script text-5xl text-[#F5EBDD] sm:text-6xl">
    The Venue
  </h2>

  <p className="mt-7 font-display text-3xl italic text-[#E5D2B2]">
    {wedding.venue.name}
  </p>

  <p className="mt-2 font-sans text-sm tracking-widest text-[#F5EBDD]/65">
    {wedding.venue.locality}
  </p>

  <p className="mx-auto mt-6 max-w-md font-display text-lg italic text-[#E5D2B2]/80">
    Follow the way to a celebration filled with love,
    laughter and beautiful memories.
  </p>

  {/* Clickable QR code */}
  {/* <a
    href={wedding.venue.mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open Patram Haveli on Google Maps"
    className="group mx-auto mt-10 flex w-fit flex-col items-center gap-4"
  >
    <div className="rounded-2xl border border-[#D6B46A]/50 bg-[#F5EBDD] p-5 shadow-[0_0_35px_rgba(214,180,106,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(214,180,106,0.25)]">
      <QRCodeSVG
        value={wedding.venue.mapsUrl}
        size={160}
        bgColor="#F5EBDD"
        fgColor="#C04080"
        level="H"
        marginSize={2}
      />
    </div>

    <span className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#D6B46A] transition-colors group-hover:text-[#F5EBDD]">
      <span aria-hidden="true">↗</span>
      Scan or Tap for Directions
    </span>
  </a> */}
{/* </div> */}

    </section>
  );
}