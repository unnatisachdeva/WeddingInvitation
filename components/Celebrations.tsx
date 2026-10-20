
import { QRCodeSVG } from "qrcode.react";
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Divider, Lotus } from "./ornaments";
import { Venue } from "@/components/Venue";


export function Celebrations() {
  const events = wedding.events;

  return (
    <section
      id="celebrations"
      aria-labelledby="celebrations-title"
      className="relative isolate overflow-hidden bg-[#0B1428] px-5 py-24 sm:py-32"
    >
      {/* Royal navy background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#1C3155_0%,#101F3D_48%,#0B1428_100%)]" />

      {/* Subtle gold pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-jaali opacity-[0.08]" />

      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p
          {...reveal("fade")}
          className="eyebrow text-[#D6B46A]"
        >
          Five days of love & celebration
        </p>

        <h2
          id="celebrations-title"
          {...reveal("up", 100)}
          className="mt-5 font-script text-5xl text-[#F5EBDD] sm:text-7xl"
        >
          Wedding Timeline
        </h2>

        <p
          {...reveal("up", 200)}
          className="mt-5 font-display text-lg italic text-[#E5D2B2]/80 sm:text-xl"
        >
          Every moment brings us closer together
        </p>

        <Divider className="mx-auto mt-8 w-36 text-[#D6B46A]" />
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-5xl sm:mt-24">

        {/* Central gold line on desktop; left line on mobile */}
        <div className="absolute bottom-8 left-[15px] top-4 w-px bg-gradient-to-b from-transparent via-[#D6B46A]/80 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-14 sm:space-y-20">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article
                key={event.id}
                {...reveal("up", 100 + index * 100)}
                className="relative grid grid-cols-[32px_minmax(0,1fr)] items-center sm:grid-cols-[1fr_64px_1fr]"
              >
                {/* Timeline marker */}
                <div className="relative z-10 col-start-1 row-start-1 flex justify-center sm:col-start-2">
                  <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#D6B46A] bg-[#101F3D] shadow-[0_0_16px_rgba(214,180,106,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6B46A]" />
                  </span>
                </div>

                {/* Event content */}
                <div
                  className={[
                    "col-start-2 row-start-1 min-w-0 pl-5 sm:col-start-1 sm:pl-0",
                    isLeft
                      ? "sm:pr-10 sm:text-right"
                      : "sm:col-start-3 sm:pl-10 sm:text-left",
                  ].join(" ")}
                >
                  <p className="eyebrow text-[0.65rem] text-[#D6B46A]">
                    {event.date} · {event.weekday}
                  </p>

                  <h3 className="mt-3 font-caps text-xl font-medium tracking-[0.06em] text-[#F5EBDD] sm:text-2xl">
                    {event.title}
                  </h3>

                  <p className="mt-2 font-display text-lg italic text-[#E5D2B2]">
                    {event.ceremony}
                  </p>
                  <p className="mt-2 font-sans text-sm text-[#F5EBDD]/65">
                    {event.location}
                  </p>
                  

                  <div
                    className={[
                      "mt-4 flex items-center gap-3",
                      "sm:justify-start",
                      isLeft ? "sm:justify-end" : "sm:justify-start",
                    ].join(" ")}
                  >
                    <span className="h-px w-7 bg-[#D6B46A]/60" />
                    <span className="font-sans text-sm tracking-[0.18em] text-[#D6B46A]">
                      {event.time}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Closing ornament */}
      <div className="mt-20 text-center">
        <Lotus className="mx-auto w-12 text-[#D6B46A]" />

        <p className="mt-5 font-display text-2xl italic text-[#F5EBDD]">
          With love, we invite you to celebrate
        </p>

        <p className="eyebrow mt-4 text-[#D6B46A]">
          Ansh & Vanshika
        </p>
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
        fgColor="#0B1428"
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
