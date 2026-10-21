
import Image from "next/image";
import { wedding } from "@/lib/wedding";
import { delay } from "@/lib/reveal";

export function Hero() {
  const { couple, date, venue } = wedding;

  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-[#C04080] text-white"
    >
      <Image
        src="/wed-hero.jpeg"
        alt="Ansh and Vanshika dancing together at their wedding celebration"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[50%_46%]"
      />

      {/* Dark overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(192,64,128,0.48)_0%,rgba(192,64,128,0.18)_45%,rgba(192,64,128,0.68)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_40%)]"
      />

      <div
        aria-hidden="true"
        className="bg-grain absolute inset-0 -z-10 opacity-[0.14] mix-blend-soft-light"
      />

      {/* Centered content positioned towards the top */}
      <div className="relative z-10 flex min-h-svh justify-center px-5 pt-[clamp(5rem,12svh,8rem)] pb-16 sm:px-10 sm:pt-[clamp(6rem,15svh,10rem)]">
        <div className="w-full max-w-4xl text-center text-white [text-shadow:0_2px_22px_rgba(0,0,0,0.62)]">

          <h1>
            <span
              className="hero-in block font-script text-[clamp(4.5rem,12vw,8.5rem)] leading-[0.9] tracking-normal"
              style={delay(850)}
            >
              {couple.partnerOne}
            </span>

            <span
              className="hero-in my-2 block font-display text-[clamp(2rem,5vw,3.5rem)] leading-none italic"
              style={delay(1050)}
            >
              &amp;
            </span>

            <span
              className="hero-in block font-script text-[clamp(4.5rem,12vw,8.5rem)] leading-[0.9] tracking-normal"
              style={delay(1250)}
            >
              {couple.partnerTwo}
            </span>
          </h1>

          {/* <div
            className="hero-in mt-8 sm:mt-10"
            style={delay(1500)}
          >
            <p className="font-caps text-[clamp(1rem,2.8vw,1.5rem)] leading-none tracking-[0.18em]">
              {date.numeric.replaceAll("·", "•")}
            </p>

            <p className="mt-4 font-sans text-sm font-medium tracking-[0.08em] sm:text-base">
              {date.weekday} · {venue.name}
            </p>
          </div> */}

          {/* Scroll indicator */}
          <div
            className="eyebrow pointer-events-none mt-12 inline-flex flex-col items-center gap-3 text-[0.6rem] text-[#F5EBDD]/80 sm:mt-16"
            aria-hidden="true"
          >
            <span>Scroll down</span>

            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
            >
              <path d="M6 10l6 6 6-6" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
