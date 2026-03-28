import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { ShipStoresContent } from '@/components/services/ship-stores-content'

export const metadata = {
  title: 'Ship Stores & Provisioning | Fulmar Marine',
  description: 'Complete vessel consumables, deck stores, provisions, and bonded stores. Global supply with multi-cultural crew capability.',
}

export default function ShipStoresPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Ship Stores & Provisioning"
        title="Complete Vessel Supply"
        description="Certified deck stores, fresh provisions, and bonded stores delivered to vessel at port or anchorage worldwide."
        image="/images/ship-stores.jpg"
      />
      <ShipStoresContent />
      <Footer />
    </main>
  )
}
