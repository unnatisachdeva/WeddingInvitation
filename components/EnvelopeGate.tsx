"use client";

import { useState } from "react";

type Phase = "closed" | "opening" | "gone";

const STORAGE_KEY = "av-gate-opened";
const REVEAL_SITE_AT = 1300;
const UNMOUNT_AT = 2900;

function CoverArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F8F0E8] text-[#7A1F4D]">
      {/* Handmade ivory paper */}
      <div className="bg-cotton absolute inset-0 opacity-55 mix-blend-multiply" />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.9) 0%, rgba(248,240,232,0.35) 60%, rgba(224,209,190,0.22) 100%)",
        }}
      />

      {/* Soft watercolor base wash */}
      <div
        aria-hidden="true"
        className="absolute -left-[15%] -top-[8%] h-[36%] w-[115%] rotate-[-5deg] opacity-95"
        style={{
          background: `
            radial-gradient(ellipse at 18% 22%, #7A1F4D 0%, transparent 43%),
            radial-gradient(ellipse at 42% 28%, #A0336A 0%, transparent 42%),
            radial-gradient(ellipse at 67% 18%, #C9659A 0%, transparent 38%),
            radial-gradient(ellipse at 83% 45%, #E8B4CE 0%, transparent 35%),
            radial-gradient(ellipse at 35% 65%, #7A1F4D 0%, transparent 45%)
          `,
          filter: "blur(9px)",
          clipPath:
            "polygon(0 0,100% 0,100% 36%,94% 42%,88% 36%,82% 53%,75% 45%,68% 64%,60% 57%,53% 75%,46% 66%,39% 85%,32% 74%,24% 89%,17% 77%,9% 83%,0 65%)",
        }}
      />

      {/* Deep pink pigment pools */}
      <div
        aria-hidden="true"
        className="absolute -left-[8%] top-[7%] h-[17%] w-[68%] rotate-[-9deg] opacity-75"
        style={{
          background:
            "linear-gradient(165deg, #5A1238 0%, #962A5E 35%, #B84A80 65%, transparent 100%)",
          clipPath:
            "polygon(0 0,100% 0,94% 22%,85% 40%,75% 32%,66% 55%,53% 48%,43% 72%,30% 63%,18% 86%,0 70%)",
          filter: "blur(4px)",
        }}
      />

      {/* Irregular dry-brush strokes */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -left-[5%] top-0 h-[34%] w-[110%]"
      >
        <defs>
          <linearGradient id="pinkPaint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5A1238" />
            <stop offset="48%" stopColor="#B03A72" />
            <stop offset="100%" stopColor="#DE97BC" />
          </linearGradient>

          <linearGradient id="palePaint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EFC3D8" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#DE97BC" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#EFC3D8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M-20 20 Q90 5 180 35 T355 28 T620 5 L620 95 Q535 78 470 106 T325 110 T170 128 T-20 95Z"
          fill="url(#pinkPaint)"
          opacity="0.55"
        />

        <path
          d="M-15 110 Q90 80 160 118 T295 105 T440 87 T620 75 L620 120 Q520 114 445 138 T290 150 T140 157 T-15 145Z"
          fill="#7A1F4D"
          opacity="0.52"
        />

        <path
          d="M0 160 Q100 130 190 163 T370 145 T610 132"
          fill="none"
          stroke="url(#palePaint)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <path
          d="M15 178 Q105 155 180 175 T345 164 T590 151"
          fill="none"
          stroke="#EFC3D8"
          strokeWidth="3"
          strokeDasharray="28 9 14 17 35 12"
          opacity="0.5"
        />

        <path
          d="M20 205 Q110 180 190 197 T370 184 T600 177"
          fill="none"
          stroke="#B84A80"
          strokeWidth="7"
          strokeDasharray="70 12 34 18 20 10"
          opacity="0.65"
        />
      </svg>

      {/* Gold pigment splatters */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[36%] opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 9% 16%, #C7A15A 0 1.5px, transparent 3px),
            radial-gradient(circle at 16% 25%, #E0C17D 0 2px, transparent 3.5px),
            radial-gradient(circle at 28% 9%, #B18A45 0 1px, transparent 2.5px),
            radial-gradient(circle at 43% 20%, #D6B46A 0 2px, transparent 4px),
            radial-gradient(circle at 52% 12%, #B18A45 0 1.5px, transparent 3px),
            radial-gradient(circle at 73% 25%, #D6B46A 0 2px, transparent 3.5px),
            radial-gradient(circle at 87% 16%, #B18A45 0 1px, transparent 2.5px),
            radial-gradient(circle at 36% 39%, #C7A15A 0 1.5px, transparent 3px)
          `,
        }}
      />

      {/* Lower watercolor wash */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[5%] -right-[12%] h-[24%] w-[92%] rotate-[-7deg]"
        style={{
          background: `
            radial-gradient(ellipse at 80% 65%, #7A1F4D 0%, transparent 52%),
            radial-gradient(ellipse at 56% 80%, #B84A80 0%, transparent 48%),
            radial-gradient(ellipse at 30% 95%, #E8B4CE 0%, transparent 42%)
          `,
          filter: "blur(7px)",
          clipPath:
            "polygon(15% 48%,26% 35%,35% 43%,45% 24%,56% 31%,65% 12%,75% 20%,86% 2%,100% 0,100% 100%,0 100%,4% 75%)",
        }}
      />

      {/* Gold dry-brush accent */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[2%] right-[-8%] h-[13%] w-[78%] rotate-[-6deg]"
        style={{
          background:
            "linear-gradient(170deg, transparent 8%, rgba(193,157,91,0.15) 18%, rgba(193,157,91,0.8) 39%, rgba(224,193,125,0.45) 45%, transparent 72%)",
          clipPath:
            "polygon(0 65%,13% 48%,24% 58%,39% 30%,53% 42%,68% 16%,79% 27%,100% 0,100% 100%,0 100%)",
        }}
      />

      {/* Fine antique-gold frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#B18A45]/35 sm:inset-5"
      />

      {/* Main invitation typography */}
      <div className="absolute inset-x-0 top-[31%] px-5 text-center sm:top-[29%]">
        <p className="font-display text-[clamp(1rem,4.5vw,1.5rem)] italic tracking-wide text-[#6E2F4E]">
          Wedding Invitation From
        </p>

        <p className="mt-3 font-caps text-[clamp(0.8rem,3.5vw,1.05rem)] uppercase tracking-[0.3em] text-[#7A1F4D]">
          Punjani Family
        </p>

        {/* Initials A | V */}
        <div className="mx-auto mt-10 flex items-center justify-center gap-5 sm:mt-12">
          <span className="font-display text-[clamp(5rem,23vw,9rem)] font-light leading-none text-[#8E2A5A] [text-shadow:1px_2px_0_rgba(177,138,69,0.4)]">
            A
          </span>

          <span className="h-[clamp(4rem,18vw,7rem)] w-px bg-[#B18A45]" />

          <span className="font-display text-[clamp(5rem,23vw,9rem)] font-light leading-none text-[#8E2A5A] [text-shadow:1px_2px_0_rgba(177,138,69,0.4)]">
            V
          </span>
        </div>

        <div className="mx-auto mt-7 flex max-w-[180px] items-center justify-center gap-3 text-[#B18A45]">
          <span className="h-px flex-1 bg-current" />
          <span aria-hidden="true" className="text-sm">
            ✦
          </span>
          <span className="h-px flex-1 bg-current" />
        </div>

        <p className="mt-5 font-display text-sm italic tracking-widest text-[#8A5A72] sm:text-base">
          With love &amp; blessings
        </p>
      </div>

      {/* Open invitation prompt */}
      <div className="gate-hint absolute inset-x-0 bottom-[7%] text-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-[#B18A45]/60 bg-[#F8F0E8]/85 px-6 py-3 font-caps text-xs uppercase tracking-[0.22em] text-[#7A1F4D] shadow-sm">
          Open invitation
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </div>
  );
}

export function EnvelopeGate() {
  const [phase, setPhase] = useState<Phase>("closed");

  if (phase === "gone") return null;

  const open = () => {
    if (phase !== "closed") return;

    setPhase("opening");
    window.scrollTo({ top: 0 });

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // The invitation can still open if session storage is unavailable.
    }

    window.setTimeout(() => {
      document.documentElement.setAttribute("data-opened", "");
    }, REVEAL_SITE_AT);

    window.setTimeout(() => {
      setPhase("gone");
    }, UNMOUNT_AT);
  };

  return (
    <div
      className={`gate fixed inset-0 z-50 isolate overflow-hidden ${
        phase === "opening" ? "is-opening" : ""
      }`}
    >
      {/* Left cover half */}
      <div
        className="cover-half cover-half--l absolute inset-y-0 left-0 w-1/2 overflow-hidden"
        style={{ transformOrigin: "left center" }}
      >
        <div className="absolute inset-y-0 left-0 w-screen">
          <CoverArt />
        </div>
      </div>

      {/* Right cover half */}
      <div
        className="cover-half cover-half--r absolute inset-y-0 right-0 w-1/2 overflow-hidden"
        style={{ transformOrigin: "right center" }}
      >
        <div className="absolute inset-y-0 right-0 w-screen">
          <CoverArt />
        </div>
      </div>

      {/* Tap anywhere to open */}
      <button
        type="button"
        onClick={open}
        disabled={phase !== "closed"}
        aria-label="Open the wedding invitation from the Punjani Family"
        className="absolute inset-0 z-10 cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-[#B18A45] disabled:cursor-default"
      />
    </div>
  );
}