import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProblemSolution } from '@/components/problem-solution'
import { HowItWorks } from '@/components/how-it-works'
import { Professions } from '@/components/professions'
import { EcosystemShowcase } from '@/components/ecosystem-showcase'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { UpdatePromise } from '@/components/update-promise'
import { CtaBand } from '@/components/cta-band'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <HowItWorks />
        <Professions />
        <EcosystemShowcase />
        <Pricing />
        <Testimonials />
        <UpdatePromise />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
