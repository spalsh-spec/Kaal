import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Terms of Service — Kaal',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="pt-32 pb-8 text-center max-w-3xl mx-auto px-6">
        <Badge variant="secondary" className="mb-4">Last updated: May 2025</Badge>
        <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Plain-English summary: buy the device, use it as intended, and we&apos;ll take care of you.
          Full legal terms below.
        </p>
      </section>

      <article className="max-w-2xl mx-auto px-6 pb-32">
        <div className="space-y-6 mt-12">

          {[
            {
              title: '1. Agreement',
              body: 'By purchasing from Kaal, Inc. ("Kaal"), you agree to these Terms. If you don\'t agree, don\'t purchase. These Terms govern your purchase, use of Kaal hardware, software configuration, and services.',
            },
            {
              title: '2. What you\'re buying',
              body: 'You\'re purchasing: (a) a hardware device (MacBook, Windows laptop), (b) a configuration layer and AI tool stack pre-installed by Kaal, and (c) the service tier you selected (Stack Updates, tutorials, consulting sessions). You own the hardware outright. The Kaal configuration is licensed for your personal, non-commercial or commercial professional use.',
            },
            {
              title: '3. Pricing & payment',
              body: 'All prices are in USD. Payment is processed via Stripe at the time of order. We reserve the right to correct pricing errors. You\'ll be notified if a pricing error affects your order and given the option to reconfirm or cancel.',
            },
            {
              title: '4. Shipping',
              body: 'We aim to ship within 3–5 business days. Shipping timelines are estimates. We\'re not liable for carrier delays. Risk of loss passes to you when the carrier accepts the package.',
            },
            {
              title: '5. Returns & refunds',
              body: 'You may return your device within 30 days of delivery for any reason. To initiate a return, email returns@leverageos.com. We\'ll provide a prepaid return label. Refunds are processed within 10 business days of receiving the return. The device must be in its original condition.',
            },
            {
              title: '6. Hardware warranty',
              id: 'warranty',
              body: `Kaal extends the manufacturer's warranty by 12 months for all devices.

**Coverage:** Hardware defects, component failures, and manufacturing issues. Does not cover: physical damage, liquid damage, theft, or normal wear and tear.

**Claim process:** Email warranty@leverageos.com with a description of the issue and photos. We\'ll arrange repair or replacement at our discretion. Replacement devices will be configured identically to your original order.

**Timeframe:** Warranty claims must be submitted within the warranty period. The standard device warranty runs until 24 months from delivery.`,
            },
            {
              title: '7. Stack Updates',
              body: 'Stack Updates are included for the period specified in your tier (3 months for Standard, 6 months for Pro Bundle). After the included period, Stack Updates can be renewed at the then-current rate. We make reasonable efforts to ensure updates improve your stack; however, we may discontinue individual tools if they cease to function, become unavailable, or are superseded by better options.',
            },
            {
              title: '8. Acceptable use',
              body: 'You may use your Kaal device and software for any lawful purpose. You may not: (a) resell or redistribute the Kaal configuration, (b) reverse-engineer the configuration layer, (c) use the device to violate applicable law, or (d) attempt to circumvent any technical protections.',
            },
            {
              title: '9. AI tools',
              body: 'Third-party AI tools (Claude, Perplexity, etc.) run under your accounts and are subject to their own terms. Kaal pre-configures these tools but does not operate them. Your use of those tools is governed by the respective providers\' terms.',
            },
            {
              title: '10. Limitation of liability',
              body: 'To the maximum extent permitted by law, Kaal\'s liability for any claim arising from your purchase is limited to the amount you paid. We are not liable for indirect, consequential, or incidental damages.',
            },
            {
              title: '11. Governing law',
              body: 'These Terms are governed by the laws of Delaware, USA, without regard to conflict of law principles. Disputes shall be resolved by binding arbitration in accordance with JAMS rules, except that you may bring claims in small claims court.',
            },
            {
              title: '12. Changes',
              body: 'We may update these Terms. Material changes will be communicated by email at least 30 days in advance. Continued use of your device after the effective date constitutes acceptance.',
            },
            {
              title: '13. Contact',
              body: 'Legal & Terms questions: legal@leverageos.com',
            },
          ].map(section => (
            <div key={section.title} id={(section as { id?: string }).id} className="glass rounded-2xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-3">{section.title}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-2 last:mb-0">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      <Footer />
    </div>
  )
}
