import { Link } from 'react-router-dom'
import { about, advisor, business, heroImages, retreats, services } from '../data/site'
import Wordmark from '../components/Wordmark'
import Photo from '../components/Photo'
import InquiryForm from '../components/InquiryForm'
import BookingBand from '../components/BookingBand'
import usePageTitle from '../components/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      {/* Hero: the sunrise photo glows behind a warm-white wash */}
      <section className="relative isolate overflow-hidden bg-dawn">
        <Photo src={heroImages.home} alt="Woman relaxing in a steaming hot spring at sunrise" eager className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/95 via-bg/80 to-bg/50 md:bg-gradient-to-r md:from-bg md:via-bg/85 md:to-bg/0" />
        <div className="wrap flex min-h-[32rem] flex-col justify-center py-20 md:min-h-[38rem]">
          <p className="eyebrow">Wellness travel with {advisor.name}</p>
          <span className="tail-bar mt-4" />
          <h1 className="mt-6 max-w-2xl text-5xl leading-[1.02] md:text-7xl">
            Fuel your soul with <span className="em">Travel</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Unforgettable journeys that take you somewhere breathtaking and nurture your mind, body and soul along the way.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Let's begin</Link>
            <a href="#services" className="btn-soft">Explore our wellness services</a>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div className="relative flex justify-center">
          <div aria-hidden="true" className="absolute inset-6 rounded-full bg-glow/60 blur-3xl" />
          <div className="card relative flex w-full max-w-sm items-center justify-center px-10 py-14">
            <Wordmark className="h-auto w-full" />
          </div>
        </div>
        <div>
          <p className="eyebrow">Learn more</p>
          <h2 className="mt-3 text-4xl md:text-5xl">About <span className="em">Us</span></h2>
          <p className="mt-6 max-w-[62ch] text-lg text-muted">{about.intro}</p>
          <Link to="/about" className="mt-6 inline-flex font-display font-semibold text-fox hover:underline">Continue reading →</Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-sunrise py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Explore</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Our wellness <span className="em">Services</span></h2>
            </div>
            <p className="max-w-md text-muted">However you love to travel, we'll weave rest, rejuvenation and inner balance into every day of your journey.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1">
                <Photo src={s.image} alt={s.imageAlt} className="aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl">{s.cardTitle}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.highlights.join(' · ')}</p>
                  <span className="mt-4 font-display text-sm font-semibold text-fox">Discover more →</span>
                </div>
              </Link>
            ))}
          </div>
          <a href={retreats.url} target="_blank" rel="noopener" className="mt-6 flex flex-col gap-1 rounded-3xl border border-dashed border-flame/40 bg-white/60 p-6 hover:border-fox sm:flex-row sm:items-center sm:justify-between">
            <span>
              <span className="font-display text-xl font-bold text-char">Wellness Retreats</span>
              <span className="block text-sm text-muted">{retreats.note}</span>
            </span>
            <span className="font-display text-sm font-semibold text-fox">Browse retreats ↗</span>
          </a>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="wrap mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Fuel your soul with <span className="em">Travel</span></h2>
          <span className="tail-bar mx-auto mt-6" />
          <p className="mt-8 text-lg leading-relaxed text-muted md:text-xl">{about.mission}</p>
          <Link to="/about" className="btn-soft mt-10">Learn more</Link>
        </div>
      </section>

      <BookingBand />

      {/* Inquiry */}
      <section className="wrap grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <p className="eyebrow">Get started</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Begin the <span className="em">Planning</span> process</h2>
          <p className="mt-6 max-w-md text-lg text-muted">Tell us your vision. BJ will reach out personally to start crafting a journey around your well-being.</p>
          <p className="mt-8 text-sm text-muted">Email us</p>
          <a href={`mailto:${business.email}`} className="select-all font-display text-lg font-semibold text-fox">{business.email}</a>
        </div>
        <InquiryForm idPrefix="home" />
      </section>
    </>
  )
}
