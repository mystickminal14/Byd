import useSeo from '@/hooks/useSeo';
import Hero from '@/components/sections/Hero';
import ModelShowcase from '@/components/sections/ModelShowcase';
import GlobalMarquee from '@/components/sections/GlobalMarquee';
import BladeBattery from '@/components/sections/BladeBattery';
import VideoExperience from '@/components/sections/VideoExperience';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import { SITE } from '@/data/site';

export default function Home() {
  useSeo({
    title: 'BYD Nepal — Technology Green Future | ATTO, DOLPHIN, SEALION & M6',
    description: SITE.description,
  });

  return (
    <>
      <Hero />
      <GlobalMarquee />
      <ModelShowcase />
      <BladeBattery />
      <VideoExperience
        youtubeId="Gz2M51oG5Zc"
        kicker="Ocean Series"
        title="Meet the SEALION 7"
        caption="The official BYD film. Tap play, tap sound on, and meet the flagship."
      />
      <EnquiryCTA />
    </>
  );
}
