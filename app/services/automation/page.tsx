import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { AutomationContent } from '@/components/services/automation-content'

export const metadata = {
  title: 'Automation & Control Systems | Fulmar Marine',
  description: 'Marine automation, control systems & instrumentation services. ME engine control, PMS, cargo control, remote diagnostics with OEM-agnostic expertise.',
}

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Automation & Control"
        title="Marine Automation Services"
        description="Technical support for electronically controlled engines, power management systems, and cargo control platforms. OEM-agnostic diagnostics."
        image="/images/automation.jpg"
      />
      <AutomationContent />
      <Footer />
    </main>
  )
}
