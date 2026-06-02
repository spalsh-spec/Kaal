// ───────────────────────────────────────────────
// Helios.Ai — tiny global event bus to open the
// staged order flow from anywhere (nav, CTAs) with
// no provider plumbing. Works across all pages:
//   • On the homepage the OrderFlow modal is mounted
//     and listens for 'helios:open-order'.
//   • On other pages we route home with ?order=1,
//     which OrderFlow auto-detects on mount.
// ───────────────────────────────────────────────
export const OPEN_ORDER_EVENT = 'helios:open-order'

export function openOrder() {
  if (typeof window === 'undefined') return
  if (window.location.pathname === '/') {
    window.dispatchEvent(new CustomEvent(OPEN_ORDER_EVENT))
  } else {
    window.location.href = '/?order=1'
  }
}

export function scrollToId(id: string) {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  else window.location.href = `/#${id}`
}
