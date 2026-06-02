// Real company logos (official marks via simple-icons) for the integrated
// AI/work stack — rendered in brand colour on white app-tiles for instant
// recognition and credibility.
import {
  siClaude, siGooglegemini, siPerplexity, siHuggingface, siElevenlabs, siGithub,
  siNotion, siFigma, siGrammarly, siHubspot, siZapier, siReplit,
} from 'simple-icons'

type Icon = { title: string; hex: string; path: string }
export type Brand = { icon: Icon; name: string; desc: string }

export const BRAND_STACK: Brand[] = [
  { icon: siClaude,       name: 'Claude',       desc: 'Reasoning & writing' },
  { icon: siGooglegemini, name: 'Gemini',       desc: 'Multimodal AI' },
  { icon: siPerplexity,   name: 'Perplexity',   desc: 'AI research' },
  { icon: siHuggingface,  name: 'Hugging Face', desc: 'Open models' },
  { icon: siElevenlabs,   name: 'ElevenLabs',   desc: 'AI voice' },
  { icon: siGithub,       name: 'GitHub',       desc: 'Code & Copilot' },
  { icon: siNotion,       name: 'Notion',       desc: 'Docs & AI' },
  { icon: siFigma,        name: 'Figma',        desc: 'Design' },
  { icon: siGrammarly,    name: 'Grammarly',    desc: 'Writing AI' },
  { icon: siHubspot,      name: 'HubSpot',      desc: 'CRM & marketing' },
  { icon: siZapier,       name: 'Zapier',       desc: 'Automation' },
  { icon: siReplit,       name: 'Replit',       desc: 'Build with AI' },
]

// Inline official mark. color overrides the brand hex (e.g. for monochrome use).
export function BrandLogo({ icon, size = 26, color }: { icon: Icon; size?: number; color?: string }) {
  return (
    <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" width={size} height={size}
         fill={color ?? `#${icon.hex}`} xmlns="http://www.w3.org/2000/svg">
      <path d={icon.path} />
    </svg>
  )
}

// A white rounded app-tile holding a brand logo — recognisable on any panel.
export function BrandTile({ icon, size = 26, className = '' }: { icon: Icon; size?: number; className?: string }) {
  return (
    <span className={`grid place-items-center rounded-[12px] bg-white shadow-md ${className}`}>
      <BrandLogo icon={icon} size={size} />
    </span>
  )
}
