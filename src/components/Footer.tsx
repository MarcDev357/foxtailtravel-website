import { Link } from 'react-router-dom'
import { business, partners, retreats, services } from '../data/site'
import Wordmark from './Wordmark'

const head = 'font-display text-xs font-semibold uppercase tracking-[0.22em] text-flame'

export default function Footer() {
  return (
    <footer className="bg-daybreak">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark className="h-16" />
          <p className="mt-5 text-muted">
            Fuel your soul with travel. Wellness journeys that nurture your mind, body and soul, planned personally by BJ Bradley, CTA.
          </p>
          <p className="mt-6 text-sm text-muted">Email us</p>
          <a href={`mailto:${business.email}`} className="select-all font-display text-lg font-semibold text-fox hover:underline">{business.email}</a>
          <div className="mt-5 flex gap-5 text-sm font-semibold">
            <a href={business.facebook} target="_blank" rel="noopener" className="text-ink hover:text-fox">Facebook</a>
            <a href={business.instagram} target="_blank" rel="noopener" className="text-ink hover:text-fox">Instagram</a>
          </div>
        </div>
        <div>
          <p className={head}>Wellness Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/${s.slug}`} className="text-ink hover:text-fox">{s.cardTitle}</Link></li>
            ))}
            <li><a href={retreats.url} target="_blank" rel="noopener" className="text-ink hover:text-fox">Wellness Retreats ↗</a></li>
          </ul>
        </div>
        <div>
          <p className={head}>Trusted partners</p>
          <ul className="mt-4 space-y-3">
            {partners.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener" className="group block">
                  {p.logo && (
                    <span className="mb-2 inline-flex rounded-lg bg-white px-3 py-2 shadow-sm">
                      <img src={p.logo} alt="" className="h-7 w-auto" />
                    </span>
                  )}
                  <span className="block text-ink group-hover:text-fox">{p.name}</span>
                  <span className="block text-sm text-muted">{p.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-flame/15">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</span>
          <span>Site by Veteran Webworks</span>
        </div>
      </div>
    </footer>
  )
}
