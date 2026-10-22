import { Celebrations } from "@/components/Celebrations";

import { EnvelopeGate } from "@/components/EnvelopeGate";
import { Families } from "@/components/Families";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { RevealObserver } from "@/components/RevealObserver";
import { SaveTheDate } from "@/components/SaveTheDate";
import MusicPlayer from "@/components/MusicPlayer";
import { Venue } from "@/components/Venue";
import { ContactFooter } from "@/components/ContactFooter";


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
        <Families />
        <Venue />

        
      </main>
      <ContactFooter />
      
     
      <RevealObserver />
    </>
  );
}
