import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { SparePartsContent } from '@/components/services/spare-parts-content'

export const metadata = {
  title: 'Spare Parts Supply & Logistics | Fulmar Marine',
  description: 'OEM & genuine alternative marine spare parts with global sourcing. Engine components, boiler spares, IGG parts, pump spares with 24-48hr emergency dispatch.',
}

export default function SparePartsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Spare Parts Supply"
        title="Global Parts Sourcing"
        description="OEM & genuine alternatives with full traceability. Ready stock for critical components with 24-48 hour emergency dispatch worldwide."
        image="/images/spare-parts.jpg"
      />
      <SparePartsContent />
      <Footer />
    </main>
  )
}
