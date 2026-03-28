import { Footer } from '@/components/footer'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}
