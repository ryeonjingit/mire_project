import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { DiagnosisSection } from '@/components/diagnosis-section'
import { CommunitySection } from '@/components/community-section'
import { BrewerySection } from '@/components/brewery-section'
import { NewsSection } from '@/components/news-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DiagnosisSection />
      <CommunitySection />
      <BrewerySection />
      <NewsSection />
      <Footer />
    </main>
  )
}
