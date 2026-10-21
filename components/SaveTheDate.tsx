"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Countdown } from "./Countdown";
import { ScallopEdge } from "./ScallopEdge";
import { Divider, Lotus } from "./ornaments";

/* Heart shape in 0..1 units (used for clipping and the gold outline) */
const HEART_PATH =
  "M0.5,0.98 C0.46,0.95 0,0.64 0,0.3 C0,0.12 0.13,0 0.29,0 C0.39,0 0.46,0.06 0.5,0.14 C0.54,0.06 0.61,0 0.71,0 C0.87,0 1,0.12 1,0.3 C1,0.64 0.54,0.95 0.5,0.98 Z";

const CONFETTI_COLORS = [
  "#D6B46A",
  "#F7E5A8",
  "#C69B37",
  "#C04080",
  "#E28CB5",
  "#F5EBDD",
  "#FFFFFF",
];

type Phase = "idle" | "scratching" | "revealed";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* Small heart centred on (0,0) for confetti */
function drawHeart(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, s * 0.35);
  ctx.bezierCurveTo(-s * 0.05, s * 0.3, -s * 0.5, 0, -s * 0.5, -s * 0.2);
  ctx.bezierCurveTo(-s * 0.5, -s * 0.42, -s * 0.22, -s * 0.5, 0, -s * 0.28);
  ctx.bezierCurveTo(s * 0.22, -s * 0.5, s * 0.5, -s * 0.42, s * 0.5, -s * 0.2);
  ctx.bezierCurveTo(s * 0.5, 0, s * 0.05, s * 0.3, 0, s * 0.35);
  ctx.closePath();
  ctx.fill();
}

/* Confetti + floating hearts burst from (ox, oy) in viewport coordinates */
function launchCelebration(
  canvas: HTMLCanvasElement,
  ox: number,
  oy: number,
  onDone: () => void
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    onDone();
    return () => {};
  }

  const dpr = window.devicePixelRatio || 1;
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rot: number;
    vr: number;
    size: number;
    color: string;
    heart: boolean;
    wobble: number;
  };

  const particles: Particle[] = [];

  const add = (count: number, heart: boolean) => {
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.7;
      const speed = heart ? 3 + Math.random() * 5 : 6 + Math.random() * 10;
      particles.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (heart ? 1 : 2),
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        size: heart ? 10 + Math.random() * 10 : 6 + Math.random() * 6,
        color: heart
          ? Math.random() > 0.4
            ? "#C04080"
            : "#E28CB5"
          : CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        heart,
        wobble: Math.random() * Math.PI * 2,
      });
    }
  };

  add(160, false);
  add(28, true);

  const duration = 3400;
  const start = performance.now();
  let raf = 0;

  const frame = (now: number) => {
    const t = now - start;
    ctx.clearRect(0, 0, W, H);
    const fade = t > duration - 900 ? Math.max(0, (duration - t) / 900) : 1;

    for (const p of particles) {
      p.vx *= 0.985;
      p.vy = p.vy * 0.985 + (p.heart ? 0.09 : 0.22);
      p.wobble += 0.1;
      p.x += p.vx + (p.heart ? Math.sin(p.wobble) * 0.6 : 0);
      p.y += p.vy;
      p.rot += p.vr;

      ctx.save();
      ctx.globalAlpha = fade;
      ctx.translate(p.x, p.y);
      ctx.fillStyle = p.color;

      if (p.heart) {
        ctx.rotate(Math.sin(p.wobble) * 0.25);
        drawHeart(ctx, p.size);
      } else {
        ctx.rotate(p.rot);
        ctx.scale(1, Math.cos(p.wobble));
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }

      ctx.restore();
    }

    if (t < duration) {
      raf = requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, W, H);
      onDone();
    }
  };

  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}

function HeartRevealCard({ date }: { date: string }) {
  const clipId = `heart-clip-${useId().replace(/:/g, "")}`;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("idle");

  const [phase, setPhase] = useState<Phase>("idle");
  const [celebrating, setCelebrating] = useState(false);
  const [confettiEl, setConfettiEl] = useState<HTMLCanvasElement | null>(null);

  /* 1. Paint the gold scratch surface */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function drawSurface() {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;

      // Champagne gold surface
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#D8B86B");
      gradient.addColorStop(0.22, "#F7E5A8");
      gradient.addColorStop(0.48, "#DAB85E");
      gradient.addColorStop(0.68, "#F5DEA0");
      gradient.addColorStop(0.86, "#C69B37");
      gradient.addColorStop(1, "#F0D78A");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Fine diagonal shimmer
      ctx.save();
      ctx.globalAlpha = 0.16;
      ctx.strokeStyle = "#FFF8D8";
      ctx.lineWidth = 1;
      for (let x = -h; x < w + h; x += 12) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + h, h);
        ctx.stroke();
      }
      ctx.restore();

      // Gold speckles
      let seed = 21;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      for (let i = 0; i < 220; i++) {
        ctx.beginPath();
        ctx.arc(random() * w, random() * h, random() * 1.5 + 0.3, 0, Math.PI * 2);
        ctx.fillStyle =
          random() > 0.5 ? "rgba(111,75,22,0.25)" : "rgba(255,250,220,0.65)";
        ctx.fill();
      }

      // Teaser text, placed in the wide upper part of the heart
      const cy = h * 0.42;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#4C3515";

      const titleSize = Math.min(22, Math.max(14, w * 0.045));
      ctx.font = `600 ${titleSize}px Georgia, serif`;
      ctx.letterSpacing = "0.16em";
      ctx.fillText("✦  OUR SPECIAL DAY  ✦", w / 2, cy - 8);

      ctx.font = `italic ${Math.min(16, Math.max(12, w * 0.032))}px Georgia, serif`;
      ctx.letterSpacing = "0.1em";
      ctx.fillStyle = "rgba(76,53,21,0.85)";
      ctx.fillText("is about to be revealed", w / 2, cy + 22);
    }

    drawSurface();

    const observer = new ResizeObserver(() => {
      if (phaseRef.current === "idle") drawSurface();
    });
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  /* 2. Auto scratch when the heart scrolls into view */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let timer: number | undefined;
    let raf = 0;

    const finish = () => {
      phaseRef.current = "revealed";
      setPhase("revealed");
    };

    const run = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || prefersReducedMotion()) return finish();

      phaseRef.current = "scratching";
      setPhase("scratching");

      const { width: w, height: h } = canvas.getBoundingClientRect();
      const r = Math.max(26, w * 0.085); // brush radius
      const gap = r * 1.25;

      // Zigzag path covering the whole heart, top to bottom
      const pts: [number, number][] = [];
      let row = 0;
      for (let y = r * 0.6; y < h + r * 0.3; y += gap, row++) {
        const ltr = row % 2 === 0;
        const xa = ltr ? -r * 0.3 : w + r * 0.3;
        const xb = ltr ? w + r * 0.3 : -r * 0.3;
        pts.push([xa, y + (Math.random() - 0.5) * r * 0.4]);
        pts.push([xb, y + gap * 0.5 + (Math.random() - 0.5) * r * 0.4]);
      }

      const cum: number[] = [0];
      for (let i = 1; i < pts.length; i++) {
        cum.push(
          cum[i - 1] +
            Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
        );
      }
      const total = cum[cum.length - 1];

      const pointAt = (d: number): [number, number] => {
        let i = 1;
        while (i < cum.length - 1 && cum[i] < d) i++;
        const t = Math.min(1, (d - cum[i - 1]) / (cum[i] - cum[i - 1] || 1));
        return [
          pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t,
          pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t,
        ];
      };

      const ease = (t: number) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const duration = 2600;
      const step = r * 0.3;
      const start = performance.now();
      let drawn = 0;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "#000";

      const frame = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const target = ease(t) * total;

        while (drawn <= target) {
          const [x, y] = pointAt(drawn);
          ctx.beginPath();
          ctx.arc(x, y, r * (0.85 + Math.random() * 0.3), 0, Math.PI * 2);
          ctx.fill();
          drawn += step;
        }

        if (t < 1) {
          raf = requestAnimationFrame(frame);
        } else {
          // Fade away any leftover flecks of gold, then reveal
          const fadeOut = canvas.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 500,
            easing: "ease-out",
            fill: "forwards",
          });
          fadeOut.onfinish = finish;
        }
      };

      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          timer = window.setTimeout(run, 700);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(wrapper);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* 3. Celebrate once revealed */
  useEffect(() => {
    if (phase !== "revealed" || prefersReducedMotion()) return;

    heartRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.08)" },
        { transform: "scale(0.97)" },
        { transform: "scale(1.04)" },
        { transform: "scale(1)" },
      ],
      { duration: 900, easing: "ease-out" }
    );

    dateRef.current?.animate(
      [
        { transform: "scale(1)", textShadow: "0 0 0 rgba(214,180,106,0)" },
        { transform: "scale(1.15)", textShadow: "0 0 18px rgba(214,180,106,0.9)" },
        { transform: "scale(1)", textShadow: "0 0 6px rgba(214,180,106,0.4)" },
      ],
      { duration: 1000, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );

    setCelebrating(true);
  }, [phase]);

  /* 4. Run the confetti burst from the heart's centre */
  useEffect(() => {
    if (!confettiEl) return;
    const rect = heartRef.current?.getBoundingClientRect();
    const ox = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const oy = rect ? rect.top + rect.height * 0.4 : window.innerHeight / 2;
    return launchCelebration(confettiEl, ox, oy, () => setCelebrating(false));
  }, [confettiEl]);

  const revealed = phase === "revealed";

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto mt-10 w-full max-w-[30rem]"
      {...reveal("up", 150)}
    >
      {/* Heart clip definition */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={HEART_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div style={{ filter: "drop-shadow(0 24px 36px rgba(0,0,0,0.35))" }}>
        <div
          ref={heartRef}
          className="relative aspect-[1/0.95] w-full"
          style={{ clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}
        >
          {/* Date underneath the gold surface */}
          <div
            aria-hidden={!revealed}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_40%_35%,#FFF9ED_0%,#F5EBDD_60%,#E5D2B2_100%)] px-[16%] pb-[22%] pt-[4%] text-center"
          >
            <p className="eyebrow text-[#80612F]">A Day To Remember</p>

            <p className="mt-2 font-display text-2xl italic text-[#80612F] sm:text-3xl">
              Save the Date
            </p>

            <p
              ref={dateRef}
              className="mt-3 font-caps text-2xl font-semibold tracking-[0.08em] text-[#C04080] sm:text-4xl"
            >
              {date}
            </p>

            <div className="mt-3 h-px w-20 bg-[#D6B46A]" />

            <p className="mt-3 font-display text-sm italic text-[#80612F] sm:text-base">
              A beautiful beginning awaits
            </p>
          </div>

          {/* Gold surface that scratches itself away */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
            />
          )}

          {/* Gold heart outline, stays on top during and after the scratch */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={HEART_PATH}
              fill="none"
              stroke="#D6B46A"
              strokeWidth={4}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={HEART_PATH}
              transform="translate(0.5 0.47) scale(0.92) translate(-0.5 -0.47)"
              fill="none"
              stroke="#B8945A"
              strokeOpacity={0.55}
              strokeWidth={1.2}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {revealed ? `Wedding date: ${date}` : ""}
      </p>

      {celebrating &&
        typeof document !== "undefined" &&
        createPortal(
          <canvas
            ref={setConfettiEl}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
          />,
          document.body
        )}
    </div>
  );
}

export function SaveTheDate() {
  const { date } = wedding;

  return (
    <section
      id="save-the-date"
      aria-labelledby="save-the-date-title"
      className="relative isolate overflow-hidden bg-[#C04080] px-5 py-24 sm:py-32"
    >
      {/* Hot pink background with a subtle champagne glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#E28CB5_0%,#C04080_42%,#A93768_100%)]" />

      {/* Gold decorative accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-jaali opacity-[0.12]" />

      <ScallopEdge color="#F5EBDD" />

      <p {...reveal("fade")} className="eyebrow text-center text-[#D6B46A]">
        Save the date
      </p>

      <h2
        id="save-the-date-title"
        {...reveal("up", 100)}
        className="mt-8 text-center font-display text-3xl italic text-[#F5EBDD] sm:text-4xl"
      >
        A little surprise awaits
      </h2>

      <HeartRevealCard date={date.display} />
    </section>
  );
}