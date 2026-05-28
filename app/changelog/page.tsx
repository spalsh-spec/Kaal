import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Changelog — LeverageOS',
  description: 'What\'s new in the LeverageOS stack. Updated every month.',
}

const CHANGELOG = [
  {
    version: '6.0',
    date: 'May 2025',
    label: 'Latest',
    changes: [
      { type: 'new', text: 'Kimi K2 local — runs fully on-device, no internet required' },
      { type: 'new', text: 'Voice agent layer — talk to your AI stack naturally' },
      { type: 'new', text: 'Real Estate vertical: CRM automation agent upgraded to v3' },
      { type: 'improved', text: 'Claude integration: 40% faster response with streaming enabled by default' },
      { type: 'improved', text: 'NotebookLM sync — automatic document import from cloud storage' },
      { type: 'retired', text: 'Legacy email agent (v1) — replaced by superior inbox AI' },
    ],
  },
  {
    version: '5.0',
    date: 'April 2025',
    label: null,
    changes: [
      { type: 'new', text: 'Runway ML — video generation and editing added to Creative stack' },
      { type: 'new', text: 'Finance vertical: Excel AI agent with formula generation' },
      { type: 'improved', text: 'Perplexity Pro — deep research mode enabled by default' },
      { type: 'improved', text: 'ElevenLabs integration: voice cloning available in 3 clicks' },
      { type: 'fixed', text: 'MacBook Pro M3 Max: sleep/wake latency with AI agents resolved' },
    ],
  },
  {
    version: '4.0',
    date: 'March 2025',
    label: null,
    changes: [
      { type: 'new', text: 'Healthcare vertical: clinical documentation AI — SOAP notes in under 3 minutes' },
      { type: 'new', text: 'Cursor AI code editor — now available across all profession stacks' },
      { type: 'improved', text: 'Midjourney: one-click image generation from clipboard text' },
      { type: 'improved', text: 'Stack Update UX — smoother install, no restart required' },
    ],
  },
  {
    version: '3.0',
    date: 'February 2025',
    label: null,
    changes: [
      { type: 'new', text: 'Legal vertical: contract clause library with 400+ standard clauses' },
      { type: 'new', text: 'Executive stack: board deck generation from bullet points' },
      { type: 'improved', text: 'Claude 3.7 Sonnet — replaced Claude 3.5 as default model' },
      { type: 'improved', text: 'Community platform v2 — search, tagging, and profession filters' },
    ],
  },
]

const TYPE_STYLES: Record<string, { label: string; color: string }> = {
  new: { label: 'New', color: 'bg-emerge-500/20 text-emerge-400' },
  improved: { label: 'Improved', color: 'bg-volta-500/20 text-volta-400' },
  fixed: { label: 'Fixed', color: 'bg-amber-500/20 text-amber-400' },
  retired: { label: 'Retired', color: 'bg-muted/50 text-muted-foreground' },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="pt-32 pb-12 text-center max-w-3xl mx-auto px-6">
        <Badge variant="volta" className="mb-4">Monthly updates</Badge>
        <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight mb-4">
          What&apos;s new in your stack
        </h1>
        <p className="text-muted-foreground">
          AI moves fast. So does LeverageOS. Here&apos;s every change, every month.
        </p>
      </section>

      <div className="max-w-2xl mx-auto px-6 pb-32 space-y-8">
        {CHANGELOG.map((release) => (
          <div key={release.version} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">Version {release.version}</h2>
                  {release.label && <Badge variant="volta" className="text-[10px]">{release.label}</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{release.date}</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {release.changes.map((change, i) => {
                const style = TYPE_STYLES[change.type]
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${style.color}`}>
                      {style.label}
                    </span>
                    <span className="text-sm text-foreground/80">{change.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
