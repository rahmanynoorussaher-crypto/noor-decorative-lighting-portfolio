import Image from 'next/image'

export function SiteHero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary-foreground/70">
            Digital storefront &amp; portfolio
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-balance md:text-6xl">
            Noor Decorative Lighting
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Premium, high-quality brass light fixtures designed to bring warmth,
            elegance, and timeless style to interior and exterior spaces.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
          >
            Request the catalog
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/brass-pendant.png"
            alt="A brass pendant light glowing warmly against a dark blue wall"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
