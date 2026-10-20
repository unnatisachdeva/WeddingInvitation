
"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/lib/wedding";
import { reveal } from "@/lib/reveal";
import { Countdown } from "./Countdown";
import { ScallopEdge } from "./ScallopEdge";
import { Divider, Lotus } from "./ornaments";

function ScratchRevealCard({ date }: { date: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasScratched, setHasScratched] = useState(false);

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

      // Champagne gold scratch surface
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

      // Fine gold speckles
      let seed = 21;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      for (let i = 0; i < 220; i++) {
        ctx.beginPath();
        ctx.arc(random() * w, random() * h, random() * 1.5 + 0.3, 0, Math.PI * 2);
        ctx.fillStyle = random() > 0.5
          ? "rgba(111,75,22,0.25)"
          : "rgba(255,250,220,0.65)";
        ctx.fill();
      }

      // Inner ornamental frame
      ctx.strokeStyle = "rgba(112,78,27,0.45)";
      ctx.lineWidth = 1;
      ctx.strokeRect(12, 12, w - 24, h - 24);
      ctx.strokeStyle = "rgba(255,246,203,0.75)";
      ctx.strokeRect(17, 17, w - 34, h - 34);

      // Corner ornaments
      const corners = [
        [24, 24],
        [w - 24, 24],
        [24, h - 24],
        [w - 24, h - 24],
      ];

      corners.forEach(([x, y]) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "rgba(112,78,27,0.55)";
        ctx.fillRect(-4, -4, 8, 8);
        ctx.restore();
      });

      // Scratch instructions
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#4C3515";

      const titleSize = Math.min(27, Math.max(17, w * 0.052));
      ctx.font = `600 ${titleSize}px Georgia, serif`;
      ctx.letterSpacing = "0.16em";
      ctx.fillText("✦  SCRATCH HERE  ✦", w / 2, h / 2 - 7);

      ctx.font = `italic ${Math.min(17, Math.max(12, w * 0.031))}px Georgia, serif`;
      ctx.letterSpacing = "0.12em";
      ctx.fillStyle = "rgba(76,53,21,0.85)";
      ctx.fillText("To Reveal The Special Day", w / 2, h / 2 + 28);

      ctx.globalCompositeOperation = "source-over";
    }

    drawSurface();

    const observer = new ResizeObserver(() => {
      if (!isDrawing.current) drawSurface();
    });

    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  function scratch(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 23, 0, Math.PI * 2);
    ctx.fill();

    setHasScratched(true);
  }

  function checkProgress() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || isRevealed) return;

    try {
      const { width, height } = canvas;
      const pixels = ctx.getImageData(0, 0, width, height).data;
      let transparent = 0;
      let total = 0;

      // Sample pixels to estimate how much has been scratched
      const step = 16;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const alpha = pixels[(y * width + x) * 4 + 3];
          if (alpha < 50) transparent++;
          total++;
        }
      }

      if (total > 0 && transparent / total > 0.42) {
        setIsRevealed(true);
      }
    } catch {
      // Keep manual scratching available if pixel sampling is unavailable.
    }
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (isRevealed) return;
    e.preventDefault();
    isDrawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratch(e);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing.current || isRevealed) return;
    e.preventDefault();
    scratch(e);
  }

  function handlePointerUp() {
    isDrawing.current = false;
    checkProgress();
  }

  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-[35rem] overflow-hidden rounded-[32px] border border-[#D6B46A]/70 bg-[#F5EBDD] shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
      {...reveal("up", 150)}
    >
      {/* Date underneath the scratch surface */}
      <div className="relative flex min-h-[250px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#FFF9ED_0%,#F5EBDD_65%,#E5D2B2_100%)] px-5 py-10 text-center sm:min-h-[310px]">
        <div className="pointer-events-none absolute inset-3 rounded-[24px] border border-[#B8945A]/50" />

        <p className="eyebrow text-[#80612F]">
          A Day To Remember
        </p>

        <p className="mt-5 font-display text-3xl italic text-[#80612F] sm:text-4xl">
          Save the Date
        </p>

        <p className="mt-4 font-caps text-3xl font-semibold tracking-[0.1em] text-[#101F3D] sm:text-5xl">
          {date}
        </p>

        <div className="mt-4 h-px w-28 bg-[#D6B46A]" />

        <p className="mt-4 font-display text-lg italic text-[#80612F]">
          A beautiful beginning awaits
        </p>
      </div>

      {/* Scratchable gold overlay */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          aria-label="Scratch this gold card to reveal the wedding date"
          role="button"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsRevealed(true);
            }
          }}
          className="absolute inset-0 h-full w-full cursor-crosshair touch-none"
        />
      )}

      {/* {isRevealed && (
        <div className="absolute bottom-3 right-3 rounded-full bg-[#101F3D] px-3 py-1.5 font-sans text-xs tracking-wider text-[#F5EBDD]">
          Date revealed ✨
        </div>
      )} */}

      {!isRevealed && hasScratched && (
        <button
          type="button"
          onClick={() => setIsRevealed(true)}
          className="absolute bottom-3 right-3 rounded-full border border-[#80612F]/60 bg-[#F5EBDD]/95 px-3 py-1.5 font-sans text-xs text-[#101F3D] shadow-sm"
        >
          Reveal date
        </button>
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
      className="relative isolate overflow-hidden bg-[#0B1428] px-5 py-24 sm:py-32"
    >
      {/* Navy background with a subtle royal-blue glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#1C3155_0%,#101F3D_42%,#0B1428_100%)]" />

      {/* Gold decorative accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-jaali opacity-[0.12]" />

      <ScallopEdge color="#F5EBDD" />

      <p
        {...reveal("fade")}
        className="eyebrow text-center text-[#D6B46A]"
      >
        Save the date
      </p>

      <h2
        id="save-the-date-title"
        {...reveal("up", 100)}
        className="mt-8 text-center font-display text-3xl italic text-[#F5EBDD] sm:text-4xl"
      >
        A little surprise awaits
      </h2>

      {/* Scratch card only — no separate date, weekday or countdown */}
      <ScratchRevealCard date={date.display} />
    </section>
  );
}
