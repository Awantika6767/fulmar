'use client';

import { AboutHero } from '@/components/about/about-hero';
import { CompanyStory } from '@/components/about/company-story';
import { TeamSection } from '@/components/about/team-section';
import { Milestones } from '@/components/about/milestones';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <Milestones />
      <TeamSection />
      <Footer />
    </>
  );
}
