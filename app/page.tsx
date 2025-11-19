import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Approach } from '@/components/approach'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
