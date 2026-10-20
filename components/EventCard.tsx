
import type { WeddingEvent } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { CornerFlourish, eventIcons } from "./ornaments";

type EventCardProps = {
  event: WeddingEvent;
  venue: string;
  index: number;
};

export function EventCard({ event, venue, index }: EventCardProps) {
  // Use a consistent royal navy and antique-gold style for every event.
  const Icon = eventIcons.wedding;
  const [dayNumber, ...monthParts] = event.date.split(" ");

  return (
    <article
      {...reveal("up", index * 140)}
      aria-labelledby={`${event.id}-title`}
      className="group relative mx-auto flex w-full max-w-[22rem] overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#1C3155_0%,#101F3D_55%,#0B1428_100%)] p-2.5 shadow-[0_28px_50px_-18px_rgba(5,15,35,0.45)] transition-[translate,box-shadow] duration-1000 ease-luxe hover:-translate-y-1.5 hover:shadow-[0_36px_60px_-18px_rgba(5,15,35,0.6)]"
    >
      {/* Subtle jaali texture */}
      <div className="pointer-events-none absolute inset-0 bg-jaali opacity-[0.07]" />

      {/* Double frame with ornamental corners */}
      <div className="relative flex w-full flex-col items-center rounded-[15px] border border-[#D6B46A]/50 px-6 pb-8 pt-9 text-center text-[#F5EBDD]">
        <div className="pointer-events-none absolute inset-1.5 rounded-[11px] border border-[#D6B46A]/25" />

        {[
          "top-1 left-1",
          "top-1 right-1 -scale-x-100",
          "bottom-1 left-1 -scale-y-100",
          "right-1 bottom-1 -scale-x-100 -scale-y-100",
        ].map((pos) => (
          <CornerFlourish
            key={pos}
            className={`pointer-events-none absolute w-9 text-[#D6B46A]/70 ${pos}`}
          />
        ))}

        {/* Event medallion */}
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#D6B46A]/50 bg-[#F5EBDD]/5 text-[#D6B46A]">
          <Icon className="h-11 w-11 transition-transform duration-[1.6s] ease-luxe group-hover:scale-110" />
        </div>

        <p className="eyebrow mt-6 text-[0.62rem] text-[#F5EBDD]/65">
          {event.day} · {event.weekday}
        </p>

        <p className="mt-3 font-display text-[4.25rem] font-light leading-none text-[#F5EBDD]">
          {dayNumber}
        </p>

        <p className="mt-1 font-caps text-[0.8rem] tracking-[0.34em] text-[#D6B46A]">
          {monthParts.join(" ")}
        </p>

        <h3
          id={`${event.id}-title`}
          className="mt-6 font-caps text-[1.02rem] uppercase leading-snug tracking-[0.2em] text-[#F5EBDD]"
        >
          {event.title}
        </h3>

        <p className="mt-1.5 font-display text-[1.6rem] italic leading-tight text-[#E5D2B2]">
          {event.ceremony}
        </p>

        <p className="mt-6 rounded-full border border-[#D6B46A]/50 px-6 py-2 font-sans text-[0.72rem] font-normal tracking-[0.28em] text-[#D6B46A]">
          {event.time}
        </p>

        {/* Event location */}
        {event.location && (
          <div className="mt-7 w-full">
            <div className="flex items-center gap-3 text-[#F5EBDD]/50">
              <span className="h-px flex-1 bg-current" />
              <span className="eyebrow text-[0.58rem]">Location</span>
              <span className="h-px flex-1 bg-current" />
            </div>

            <p className="mt-3 font-display text-lg italic text-[#F5EBDD]/80">
              {event.location}
            </p>
          </div>
        )}

        <p className="eyebrow mt-auto pt-7 text-[0.56rem] text-[#F5EBDD]/50">
          {venue}
        </p>
      </div>
    </article>
  );
}
