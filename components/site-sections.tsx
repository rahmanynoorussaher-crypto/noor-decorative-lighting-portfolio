function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
      {children}
    </p>
  )
}

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <SectionLabel>What it is</SectionLabel>
          <h2 id="about-heading" className="mt-4 font-serif text-4xl leading-tight text-balance">
            A home for handcrafted brass lighting
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Noor Decorative Lighting is a digital storefront and portfolio for a
            decorative lighting business. It showcases premium, high-quality
            brass light fixtures designed to bring warmth, elegance, and
            timeless style to interior and exterior spaces.
          </p>
        </div>
        <div>
          <SectionLabel>Why it matters</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance">
            Light that shapes a room
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Beautiful, handcrafted lighting completely transforms a room&apos;s
            ambiance while acting as a striking piece of decor.
          </p>
        </div>
      </div>

      <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-3">
        {['Warmth', 'Elegance', 'Timeless style'].map((quality) => (
          <li key={quality} className="bg-card px-8 py-10 text-center">
            <span className="font-serif text-2xl text-primary">{quality}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <SectionLabel>Where to see more</SectionLabel>
        <h2 id="contact-heading" className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
          Contact us for the full product catalog
        </h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Get in touch to receive the complete product catalog and shipping
          details.
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="font-serif text-xl">Noor Decorative Lighting</span>
        <span className="text-primary-foreground/70">Made by Noorussahar Ismail</span>
      </div>
    </footer>
  )
}
