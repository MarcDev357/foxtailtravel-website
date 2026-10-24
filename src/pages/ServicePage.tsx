import { Link } from 'react-router-dom'
import { resortGallery, services, type Service } from '../data/site'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import BookingBand from '../components/BookingBand'
import usePageTitle from '../components/usePageTitle'

export default function ServicePage({ service: s }: { service: Service }) {
  usePageTitle(s.cardTitle)
  const others = services.filter((o) => o.slug !== s.slug)
  return (
    <>
      <PageHero
        eyebrow="Wellness services"
        title={<>{s.title} <span className="em">{s.emphasis}</span></>}
        image={s.image}
        imageAlt={s.imageAlt}
      />

      <section className="wrap grid gap-12 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-24">
        <div className="min-w-0">
          <p className="max-w-[62ch] text-xl leading-relaxed text-ink">{s.intro}</p>
          <Link to="/contact" className="btn-primary mt-8">Start planning</Link>
        </div>
        <aside className="h-fit rounded-2xl card border-t-4 border-flame p-6">
          <p className="eyebrow">Nurture your soul with</p>
          <ul className="mt-4 space-y-3">
            {s.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fox" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          {s.extraLink && (
            <a href={s.extraLink.url} target="_blank" rel="noopener" className="mt-6 block border-t border-line pt-5">
              <span className="font-display font-bold text-fox">{s.extraLink.label} ↗</span>
              <span className="mt-1 block text-sm text-muted">{s.extraLink.note}</span>
            </a>
          )}
        </aside>
      </section>

      {s.slug === 'resorts' && (
        <section className="border-t border-line bg-surface py-20 md:py-24">
          <div className="wrap">
            <h2 className="text-3xl md:text-4xl">Wellness &amp; spa resort <span className="em">Inspiration</span></h2>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {resortGallery.map((g, i) => (
                <Photo key={g.src} src={g.src} alt={g.alt} className={`rounded-xl ${i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`} />
              ))}
            </div>
          </div>
        </section>
      )}

      {s.guides.length > 0 && (
        <section className="border-t border-line py-20 md:py-24">
          <div className="wrap">
            <p className="eyebrow">Travel guides</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{s.guidesHeading}</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.guides.map((g) => (
                <a key={g.url} href={g.url} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-6 hover:border-fox hover:shadow-md">
                  <span className="font-display text-xl font-bold">{g.title}</span>
                  <span className="text-fox transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingBand />

      <section className="wrap py-20">
        <p className="eyebrow">Explore more wellness services</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <Link key={o.slug} to={`/${o.slug}`} className="rounded-full border-2 border-line px-5 py-2.5 font-display text-sm font-semibold hover:border-fox hover:text-fox">{o.cardTitle}</Link>
          ))}
        </div>
      </section>
    </>
  )
}
