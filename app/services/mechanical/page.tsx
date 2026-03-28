import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { MechanicalContent } from '@/components/services/mechanical-content'

export const metadata = {
  title: 'Mechanical Repair & Engine Services | Fulmar Marine',
  description: 'Complete mechanical lifecycle support for main propulsion and auxiliary engines. Crankshaft replacement, turbocharger servicing, cylinder overhaul, and more.',
}

export default function MechanicalPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Mechanical Services"
        title="Engine Repair & Overhaul"
        description="Technical solutions for planned maintenance, performance recovery, and catastrophic engine casualty. In-situ and workshop capabilities worldwide."
        image="/images/engine-room.jpg"
      />
      <MechanicalContent />
      <Footer />
    </main>
  )
}
