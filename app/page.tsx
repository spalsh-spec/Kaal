import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { TeslaHome } from '@/components/landing/tesla-home'

export default function HomePage() {
  return (
    <div className="no-x-overflow">
      <Nav />
      <main>
        <TeslaHome />
      </main>
      <Footer />
    </div>
  )
}
