
"use client";

import { reveal } from "@/lib/reveal";

export default function FamilyTribute() {
  return (
    <section
      id="family-tribute"
      className="family-tribute relative isolate overflow-hidden px-4 py-20 sm:px-8 sm:py-28"
    >
      {/* Botanical background accents */}
      <div className="ft-flower ft-flower-top" aria-hidden="true">
        <span className="ft-petal p1" />
        <span className="ft-petal p2" />
        <span className="ft-petal p3" />
        <span className="ft-petal p4" />
        <span className="ft-petal p5" />
        <span className="ft-leaf l1" />
        <span className="ft-leaf l2" />
        <span className="ft-leaf l3" />
        <span className="ft-stem" />
      </div>

      <div className="ft-flower ft-flower-bottom" aria-hidden="true">
        <span className="ft-petal p1" />
        <span className="ft-petal p2" />
        <span className="ft-petal p3" />
        <span className="ft-petal p4" />
        <span className="ft-petal p5" />
        <span className="ft-leaf l1" />
        <span className="ft-leaf l2" />
        <span className="ft-leaf l3" />
        <span className="ft-stem" />
      </div>

      {/* Fine decorative side lines */}
      <div className="ft-side-line ft-side-left" aria-hidden="true">
        <span>✧</span>
        <span>◇</span>
        <span>✧</span>
      </div>
      <div className="ft-side-line ft-side-right" aria-hidden="true">
        <span>✧</span>
        <span>◇</span>
        <span>✧</span>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Ornate double arch */}
        <div className="ft-arch">
          <div className="ft-arch-inner">
            {/* Lotus emblem */}
            <div className="ft-lotus" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 49C17 40 19 24 32 12C45 24 47 40 32 49Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M32 49C10 45 7 31 14 25C23 28 29 38 32 49Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M32 49C54 45 57 31 50 25C41 28 35 38 32 49Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M32 49V56M23 55H41M25 44L18 39M39 44L46 39"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Grandparents tribute */}
            <div
              {...reveal("fade", 100)}
              className="relative z-10 mx-auto max-w-2xl text-center"
            >
              <p className="ft-eyebrow">Forever in our hearts</p>

              <h2 className="ft-memory-title">In Loving Memory</h2>

              <div className="ft-divider" aria-hidden="true">
                <span />
                <b>✿</b>
                <span />
              </div>

              <p className="ft-memory-copy">
                In loving memory of our beloved grandparents, whose
                blessings, values, and love will forever remain a part
                of this family&apos;s journey.
              </p>

              <p className="ft-grandparent-names">
                <span>Late Smt. Raj Rani</span>
                <i>&</i>
                <span>Late Sh. Jay Dyal Punjani</span>
              </p>
            </div>

            {/* Decorative divider */}
            <div className="ft-mid-divider" aria-hidden="true">
              <span />
              <b>❧</b>
              <span />
            </div>

            {/* Brothers tribute */}
            <div
              {...reveal("fade", 200)}
              className="relative z-10 mx-auto max-w-2xl text-center"
            >
              <p className="ft-brothers-eyebrow">
                With love and blessings from
              </p>

              <h3 className="ft-brothers-title">Her Brothers</h3>

              <div className="ft-small-divider" aria-hidden="true">
                <span />
                <b>❧</b>
                <span />
              </div>

              <p className="ft-brothers-names">
                <span>Puneet Punjani</span>
                <i>&</i>
                <span>Harivansh Punjani</span>
              </p>
            </div>

            <div className="ft-bottom-star" aria-hidden="true">
              ✦
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .family-tribute {
          --ft-ivory: #f5ebdd;
          --ft-navy: #102744;
          --ft-gold: #b8873d;
          --ft-gold-light: #d6b46a;
          color: var(--ft-navy);
          background:
            radial-gradient(
              ellipse at 50% 40%,
              rgba(255, 252, 243, 0.8),
              transparent 72%
            ),
            var(--ft-ivory);
        }

        .family-tribute::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(184, 135, 61, 0.23);
          pointer-events: none;
        }

        .ft-arch {
          position: relative;
          padding: 14px;
          border: 1px solid rgba(184, 135, 61, 0.7);
          border-radius: 48% 48% 2px 2px / 18% 18% 2px 2px;
        }

        .ft-arch-inner {
          position: relative;
          overflow: hidden;
          min-height: 600px;
          padding: 108px 28px 45px;
          border: 1px solid rgba(184, 135, 61, 0.45);
          border-radius: 48% 48% 2px 2px / 18% 18% 2px 2px;
        }

        .ft-lotus {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 50%;
          display: grid;
          width: 62px;
          height: 62px;
          transform: translate(-50%, -1px);
          place-items: center;
          color: var(--ft-gold);
          background: var(--ft-ivory);
          border: 1px solid rgba(184, 135, 61, 0.65);
          border-radius: 50%;
        }

        .ft-lotus svg {
          width: 42px;
          height: 42px;
        }

        .ft-eyebrow,
        .ft-brothers-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.32em;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .ft-eyebrow {
          margin-bottom: 14px;
          color: var(--ft-gold);
        }

        .ft-memory-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.15;
          color: var(--ft-navy);
        }

        .ft-divider,
        .ft-mid-divider,
        .ft-small-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--ft-gold);
        }

        .ft-divider {
          margin: 27px auto;
        }

        .ft-divider span {
          width: 66px;
          height: 1px;
          background: var(--ft-gold);
        }

        .ft-divider b {
          font-size: 21px;
          font-weight: 400;
        }

        .ft-memory-copy {
          max-width: 540px;
          margin: 0 auto;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.9;
          color: #293b53;
        }

        .ft-grandparent-names {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
          color: #956723;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(16px, 2.4vw, 23px);
          line-height: 1.7;
        }

        .ft-grandparent-names i,
        .ft-brothers-names i {
          color: var(--ft-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.35em;
          font-weight: 400;
        }

        .ft-mid-divider {
          margin: 43px auto 45px;
        }

        .ft-mid-divider span {
          width: min(20%, 100px);
          height: 1px;
          background: rgba(184, 135, 61, 0.65);
        }

        .ft-mid-divider b {
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 400;
        }

        .ft-brothers-eyebrow {
          color: var(--ft-navy);
        }

        .ft-brothers-title {
          margin-top: 12px;
          color: #956723;
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: clamp(42px, 7vw, 68px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.2;
        }

        .ft-small-divider {
          gap: 8px;
          margin: 18px auto;
        }

        .ft-small-divider span {
          width: 44px;
          height: 1px;
          background: var(--ft-gold);
        }

        .ft-small-divider b {
          font-size: 19px;
          font-weight: 400;
        }

        .ft-brothers-names {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--ft-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(15px, 2.2vw, 21px);
          line-height: 1.8;
        }

        .ft-bottom-star {
          margin-top: 36px;
          color: var(--ft-gold);
          text-align: center;
          font-size: 20px;
        }

        /* Navy and gold floral corner artwork, drawn with CSS */
        .ft-flower {
          position: absolute;
          z-index: -1;
          width: 200px;
          height: 200px;
          opacity: 0.95;
          pointer-events: none;
        }

        .ft-flower-top {
          top: -36px;
          left: -54px;
          transform: rotate(-20deg);
        }

        .ft-flower-bottom {
          right: -42px;
          bottom: -24px;
          transform: rotate(160deg) scale(1.12);
        }

        .ft-petal {
          position: absolute;
          top: 28%;
          left: 37%;
          width: 45px;
          height: 80px;
          transform-origin: 50% 85%;
          border: 1px solid #b8873d;
          border-radius: 75% 25% 70% 30%;
          background: linear-gradient(
            145deg,
            #f4e6c8 0%,
            #d9c29a 30%,
            #183653 68%,
            #102744 100%
          );
          box-shadow: inset 2px 1px 4px rgba(255, 255, 255, 0.35);
        }

        .ft-petal.p1 {
          transform: rotate(0deg);
        }

        .ft-petal.p2 {
          transform: rotate(72deg);
        }

        .ft-petal.p3 {
          transform: rotate(144deg);
        }

        .ft-petal.p4 {
          transform: rotate(216deg);
        }

        .ft-petal.p5 {
          transform: rotate(288deg);
        }

        .ft-leaf {
          position: absolute;
          width: 25px;
          height: 50px;
          border: 1px solid #b8873d;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(135deg, #1d3b59, #102744);
        }

        .ft-leaf.l1 {
          top: 10%;
          left: 13%;
          transform: rotate(-44deg);
        }

        .ft-leaf.l2 {
          top: 52%;
          left: 8%;
          transform: rotate(-68deg);
        }

        .ft-leaf.l3 {
          top: 5%;
          right: 10%;
          transform: rotate(40deg);
        }

        .ft-stem {
          position: absolute;
          top: 30%;
          left: 18%;
          width: 1px;
          height: 160px;
          transform: rotate(34deg);
          transform-origin: top;
          background: #b8873d;
        }

        .ft-side-line {
          position: absolute;
          z-index: 1;
          top: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 35px;
          color: var(--ft-gold);
          font-size: 19px;
          opacity: 0.8;
        }

        .ft-side-line::before {
          content: "";
          width: 1px;
          height: 50px;
          background: rgba(184, 135, 61, 0.7);
        }

        .ft-side-line::after {
          content: "";
          width: 1px;
          height: 50px;
          background: rgba(184, 135, 61, 0.7);
        }

        .ft-side-left {
          left: 28px;
        }

        .ft-side-right {
          right: 28px;
        }

        @media (min-width: 768px) {
          .ft-arch {
            padding: 20px;
          }

          .ft-arch-inner {
            min-height: 740px;
            padding: 125px 55px 55px;
          }

          .ft-flower {
            width: 300px;
            height: 300px;
          }

          .ft-flower-top {
            top: -30px;
            left: -65px;
          }

          .ft-flower-bottom {
            right: -60px;
            bottom: -45px;
          }

          .ft-petal {
            width: 65px;
            height: 115px;
          }

          .ft-leaf {
            width: 35px;
            height: 65px;
          }

          .ft-side-left {
            left: 5%;
          }

          .ft-side-right {
            right: 5%;
          }
        }

        @media (max-width: 480px) {
          .family-tribute {
            padding-right: 12px;
            padding-left: 12px;
          }

          .family-tribute::before {
            inset: 6px;
          }

          .ft-arch {
            padding: 7px;
            border-radius: 48% 48% 2px 2px / 12% 12% 2px 2px;
          }

          .ft-arch-inner {
            min-height: 0;
            padding: 88px 15px 30px;
            border-radius: 48% 48% 2px 2px / 12% 12% 2px 2px;
          }

          .ft-lotus {
            width: 49px;
            height: 49px;
          }

          .ft-lotus svg {
            width: 34px;
            height: 34px;
          }

          .ft-eyebrow,
          .ft-brothers-eyebrow {
            font-size: 8px;
            letter-spacing: 0.22em;
          }

          .ft-memory-copy {
            font-size: 13px;
            line-height: 1.85;
          }

          .ft-grandparent-names {
            gap: 5px;
            margin-top: 24px;
            font-size: 15px;
          }

          .ft-mid-divider {
            margin: 34px auto;
          }

          .ft-brothers-names {
            gap: 5px;
            font-size: 14px;
          }

          .ft-flower {
            width: 115px;
            height: 115px;
            opacity: 0.75;
          }

          .ft-flower-top {
            top: 0;
            left: -55px;
          }

          .ft-flower-bottom {
            right: -45px;
            bottom: 0;
          }

          .ft-petal {
            width: 30px;
            height: 52px;
          }

          .ft-leaf {
            width: 18px;
            height: 30px;
          }

          .ft-stem {
            height: 90px;
          }

          .ft-side-line {
            display: none;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .ft-flower {
            animation: ft-float 8s ease-in-out infinite alternate;
          }

          .ft-flower-bottom {
            animation-delay: -4s;
          }

          @keyframes ft-float {
            from {
              translate: 0 0;
            }
            to {
              translate: 0 -8px;
            }
          }
        }
      `}</style>
    </section>
  );
}
