import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Models } from '@/components/models'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Models />
      </main>
      <Footer />
    </>
  )
}
