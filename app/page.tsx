import { Celebrations } from "@/components/Celebrations";
import { Closing } from "@/components/Closing";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { Families } from "@/components/Families";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { RevealObserver } from "@/components/RevealObserver";
import { SaveTheDate } from "@/components/SaveTheDate";
import MusicPlayer from "@/components/MusicPlayer";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <>
      <EnvelopeGate />
      <MusicPlayer />
      <main>
        <Hero />
        <SaveTheDate />
        <Invitation />
        
        <Celebrations />
        <Venue />
        <Families />
      </main>
      <Closing />
      <RevealObserver />
    </>
  );
}
