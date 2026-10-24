import { Link } from 'react-router-dom'
import { about, advisor, business, heroImages } from '../data/site'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import NewsletterForm from '../components/NewsletterForm'
import BookingBand from '../components/BookingBand'
import usePageTitle from '../components/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero eyebrow="Fuel your soul with travel" title={<>About <span className="em">Foxtail Travel</span></>} image={heroImages.about} imageAlt="Indoor infinity pool overlooking mountains">
        <Link to="/contact" className="btn-primary mt-2">Get in touch</Link>
      </PageHero>

      <section className="wrap grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <Photo src={advisor.photo} alt={`Portrait of ${advisor.name}`} className="aspect-[2/3] max-w-[17rem] rounded-2xl" />
          <div className="mt-5 flex items-center gap-4">
            <img src={advisor.ctaLogo} alt="Certified Travel Associate" className="h-12 w-auto" />
            <div>
              <p className="font-display text-xl font-bold">{advisor.name}</p>
              <p className="text-sm text-muted">{advisor.role}</p>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <p className="eyebrow">Meet your</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Wellness travel <span className="em">Designer</span></h2>
          {advisor.bio.map((p) => (
            <p key={p.slice(0, 20)} className="mt-6 max-w-[62ch] text-lg text-muted">{p}</p>
          ))}
          <div className="mt-8 rounded-xl border border-line bg-surface p-5">
            <p className="text-sm text-muted">Email BJ</p>
            <a href={`mailto:${business.email}`} className="select-all font-display text-lg font-bold text-fox">{business.email}</a>
          </div>
        </div>
      </section>

      <section className="bg-sunrise">
        <div className="wrap py-20 md:py-24">
          <blockquote className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="block font-script text-7xl leading-none text-flame">“</span>
            <p className="font-display text-2xl font-medium leading-snug text-char md:text-3xl">{about.promise}</p>
            <footer className="mt-6 font-display text-sm font-bold uppercase tracking-[0.22em] text-flame">Foxtail Travel</footer>
          </blockquote>
          <div className="mt-10 text-center"><Link to="/contact" className="btn-primary">Let's begin</Link></div>
        </div>
      </section>

      <BookingBand heading="Contact us now to start planning" />

      <section className="wrap grid gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="eyebrow">Stay inspired</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Join our wellness travel <span className="em">Community</span></h2>
          <p className="mt-4 text-muted">Stay informed about the latest in wellness travel.</p>
          <div className="mt-6 flex gap-5 text-sm font-semibold">
            <a href={business.facebook} target="_blank" rel="noopener" className="font-display font-bold text-fox hover:underline">Facebook</a>
            <a href={business.instagram} target="_blank" rel="noopener" className="font-display font-bold text-fox hover:underline">Instagram {business.instagramHandle}</a>
          </div>
        </div>
        <div className="min-w-0 self-center"><NewsletterForm /></div>
      </section>
    </>
  )
}
