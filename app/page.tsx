import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesCardDeck } from '@/components/home/services-card-deck'
import { WhyFulmar } from '@/components/home/why-fulmar'
import { StatsSection } from '@/components/home/stats-section'
import { EngineSupport } from '@/components/home/engine-support'
import { CTASection } from '@/components/home/cta-section'
import { MarqueeSection } from '@/components/home/marquee-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <ServicesCardDeck />
      <WhyFulmar />
      <StatsSection />
      <EngineSupport />
      <CTASection />
      <Footer />
    </main>
  )
}
