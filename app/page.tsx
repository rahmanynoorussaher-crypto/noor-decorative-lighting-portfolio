import { SiteHero } from '@/components/site-hero'
import { AboutSection, ContactSection, SiteFooter } from '@/components/site-sections'

export default function Page() {
  return (
    <>
      <main>
        <SiteHero />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
