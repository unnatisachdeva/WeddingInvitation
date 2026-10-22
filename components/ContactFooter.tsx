import { reveal } from "@/lib/reveal";
import { Divider } from "./ornaments";

export function ContactFooter() {
  return (
    <footer
      aria-label="Invitation design contact"
      className="relative bg-[#F8F1E7] px-6 pt-10 pb-8 text-center sm:pt-12 sm:pb-10"
    >
      {/* Fine gold hairline with ornament */}
      <div {...reveal("fade")} className="mx-auto flex max-w-xl items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B08D3E]/60" />
        <Divider className="w-14 shrink-0 text-[#B08D3E]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B08D3E]/60" />
      </div>

      {/* Line 1 */}
      <p
        {...reveal("up", 100)}
        className="mt-6 font-display text-xl italic leading-snug text-[#4F101C] sm:text-2xl"
      >
        Fell in love with this card? Let&rsquo;s make one just for you!
      </p>

      {/* Line 2 */}
      <p
        {...reveal("fade", 150)}
        className="mt-2 font-display text-base text-[#4F101C]/75 sm:text-lg"
      >
        Write to me at
      </p>

      {/* Line 3: email */}
      <a
        {...reveal("up", 200)}
        href="mailto:unnatiisachdevaa@gmail.com"
        className="group relative mt-1 inline-block font-caps text-xs font-semibold tracking-[0.16em] text-[#9A7530] transition-colors duration-500 hover:text-[#C04080] sm:text-sm"
      >
        unnatiisachdevaa@gmail.com
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-50 bg-[#B08D3E]/70 transition-transform duration-500 group-hover:scale-x-100" />
      </a>

      {/* Line 4: signature */}
      <p
        {...reveal("fade", 250)}
        className="mt-5 font-display text-sm text-[#4F101C]/60"
      >
        Made with <span className="text-[#C04080]" aria-label="love">♡</span> by Unnati
      </p>
    </footer>
  );
}