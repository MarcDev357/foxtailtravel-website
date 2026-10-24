import { business, heroImages } from '../data/site'
import PageHero from '../components/PageHero'
import InquiryForm from '../components/InquiryForm'
import usePageTitle from '../components/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's <span className="em">Talk</span></>} image={heroImages.contact} imageAlt="Woman on a platform over calm water">
        Contact us to begin your next wellness travel experience.
      </PageHero>
      <section className="wrap grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <InquiryForm idPrefix="contact" />
        <div className="space-y-8">
          <div>
            <p className="eyebrow">Email us</p>
            <a href={`mailto:${business.email}`} className="mt-2 block select-all break-words font-display text-xl font-bold text-fox">{business.email}</a>
          </div>
          <div>
            <p className="eyebrow">Socialize with us</p>
            <div className="mt-2 flex flex-col gap-1">
              <a href={business.facebook} target="_blank" rel="noopener" className="hover:text-fox">Facebook ↗</a>
              <a href={business.instagram} target="_blank" rel="noopener" className="hover:text-fox">Instagram {business.instagramHandle} ↗</a>
            </div>
          </div>
          <div className="rounded-2xl card border-t-4 border-flame p-6">
            <p className="font-display text-xl font-bold">What happens next</p>
            <p className="mt-2 text-muted">BJ reads every vision personally and will reach out by email to begin planning your wellness journey together.</p>
          </div>
        </div>
      </section>
    </>
  )
}
