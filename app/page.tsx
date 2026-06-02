import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { HeroSlideshow } from '@/components/landing/hero-slideshow'
import { OrderFlow } from '@/components/landing/order-flow'
import {
  PrimaryCta, Pyramid, ProductExplainer, FlowDiagram,
  Plans, SupportModules, LiveExamples, VideoShowcase, FinalCta,
} from '@/components/landing/sections'

export default function HomePage() {
  return (
    <div className="no-x-overflow">
      <Nav />
      <main>
        <HeroSlideshow />     {/* 2. Hero slideshow */}
        <PrimaryCta />        {/* 3. Main CTA */}
        <Pyramid />           {/* 4. Pyramid images */}
        <ProductExplainer />  {/* 5. Product explanation */}
        <FlowDiagram />       {/*    AI-powered workflow */}
        <Plans />             {/* 6. Normal & Pro plans */}
        <SupportModules />    {/* 7. Support modules */}
        <LiveExamples />      {/* 8. Live company build */}
        <VideoShowcase />     {/* 9. Video & image showcase */}
        <FinalCta />          {/* 10. Final order CTA */}
      </main>
      <Footer />
      <OrderFlow />           {/* Staged order modal (opens via Order buttons) */}
    </div>
  )
}
