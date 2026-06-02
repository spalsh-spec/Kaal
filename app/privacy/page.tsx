import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Privacy Policy — HeliosOS',
  description: 'How HeliosOS handles your data. Short version: we don\'t sell it, we minimize it, and you own it.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="pt-32 pb-8 text-center max-w-3xl mx-auto px-6">
        <Badge variant="secondary" className="mb-4">Last updated: May 2025</Badge>
        <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Short version: we collect the minimum we need, never sell it, and you can delete it anytime.
          The long version follows.
        </p>
      </section>

      <article className="max-w-2xl mx-auto px-6 pb-32 prose prose-invert prose-sm max-w-none">
        <div className="space-y-10 mt-12">

          {[
            {
              title: '1. Who we are',
              body: 'HeliosOS, Inc. ("HeliosOS", "we", "us") is a company that sells AI-configured laptop computers. Our registered address is available on request. For privacy questions, contact us at privacy@leverageos.com.',
            },
            {
              title: '2. Information we collect',
              body: `We collect only what\'s necessary to provide our service:

**Account & order information:** Name, email address, shipping address, and payment information (processed securely via Stripe; we never store raw card numbers).

**Device configuration:** Your selected profession, hardware model, and tier — used to configure your device correctly.

**Usage data:** Aggregated, anonymised analytics on which features of our platform are used. We use this to improve the product. We do not track individual behaviour.

**Support communications:** Any messages you send to our support team, kept to resolve issues and improve our service.

We do not collect data from the AI tools running on your device. Those tools operate under their own privacy policies (Anthropic, OpenAI, etc.).`,
            },
            {
              title: '3. How we use it',
              body: `We use your information only to:
- Process and fulfil your order
- Configure and ship your device
- Send order updates and onboarding materials (transactional emails only)
- Provide customer support
- Improve our products and services (using aggregated data only)

We will never sell your data to third parties. We will never use your data for advertising.`,
            },
            {
              title: '4. Sharing',
              body: `We share data with a small number of service providers who help us operate:
- **Stripe** (payment processing)
- **Resend** (transactional emails)
- **Supabase** (database, hosted in the US)
- **Vercel** (website hosting)

All service providers are under contractual obligation to handle your data securely and only for the purposes we specify.`,
            },
            {
              title: '5. Your AI tools and data privacy',
              body: 'Your HeliosOS device runs AI tools (Claude, Perplexity, etc.) under your own accounts. Your interactions with those tools are governed by their respective privacy policies. HeliosOS does not have access to your AI conversations or outputs.',
            },
            {
              title: '6. Data retention',
              body: 'We retain order and account data for 7 years (legal and tax purposes). Support communications are retained for 2 years. You can request deletion of your account at any time; we will comply within 30 days except where legal retention requirements apply.',
            },
            {
              title: '7. Your rights',
              body: `Depending on your jurisdiction, you may have the right to:
- Access the personal data we hold about you
- Correct inaccurate data
- Request deletion of your data
- Object to processing
- Data portability

To exercise these rights, email privacy@leverageos.com. We will respond within 30 days.`,
            },
            {
              title: '8. Cookies',
              body: 'We use cookies only for essential site functionality (authentication, preferences). We do not use advertising or tracking cookies. You can disable cookies in your browser at any time.',
            },
            {
              title: '9. Security',
              body: 'We use industry-standard encryption (TLS 1.3) for data in transit and AES-256 for data at rest. Access to customer data is limited to staff who need it to do their job, and is logged and audited.',
            },
            {
              title: '10. Changes to this policy',
              body: 'We may update this policy periodically. When we do, we\'ll update the date at the top and notify you by email if the changes are material. Continued use of our service constitutes acceptance of the updated policy.',
            },
            {
              title: '11. Contact',
              body: 'Privacy questions, data access requests, or complaints: privacy@leverageos.com. We aim to respond within 2 business days.',
            },
          ].map(section => (
            <div key={section.title} className="glass rounded-2xl p-6">
              <h2 className="text-base font-semibold text-foreground mb-3">{section.title}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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
