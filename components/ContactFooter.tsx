import { Divider } from "./ornaments";

export function ContactFooter() {
  return (
    <footer
      aria-label="Invitation design contact"
      className="relative bg-[#F8F1E7] px-6 pt-10 pb-8 text-center sm:pt-12 sm:pb-10"
    >
      {/* Fine gold hairline with ornament */}
      <div className="mx-auto flex max-w-xl items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B08D3E]/60" />
        <Divider className="w-14 shrink-0 text-[#B08D3E]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B08D3E]/60" />
      </div>

      {/* Line 1 */}
      <p className="mt-6 font-display text-xl italic leading-snug text-[#4F101C] sm:text-2xl">
        Fell in love with this card? Let&rsquo;s make one just for you!
      </p>

      {/* Line 2 */}
      <p className="mt-2 font-display text-base text-[#4F101C]/75 sm:text-lg">
        Write to me at
      </p>

      {/* Line 3: email */}
      <a
        href="mailto:unnatiisachdevaa@gmail.com"
        className="mt-1 inline-block font-caps text-xs font-semibold tracking-[0.16em] text-[#9A7530] underline decoration-[#B08D3E]/70 underline-offset-4 hover:text-[#C04080] sm:text-sm"
      >
        unnatiisachdevaa@gmail.com
      </a>

      {/* Line 4: signature */}
      <p className="mt-5 font-display text-sm text-[#4F101C]/60">
        Made with <span className="text-[#C04080]" aria-label="love">♡</span> by Unnati
      </p>
    </footer>
  );
}