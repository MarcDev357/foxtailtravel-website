import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { retreats, services } from '../data/site'
import Wordmark from './Wordmark'

const link = ({ isActive }: { isActive: boolean }) =>
  `font-display text-sm font-medium transition-colors hover:text-fox ${isActive ? 'text-fox' : 'text-ink'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  const serviceActive = services.some((s) => pathname === `/${s.slug}`)

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-20 items-center justify-between gap-6 md:h-24">
        <Link to="/" aria-label="Foxtail Travel home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <div className="group relative">
            <button
              className={`flex items-center gap-1 font-display text-sm font-medium hover:text-fox ${serviceActive ? 'text-fox' : 'text-ink'}`}
              aria-haspopup="true"
            >
              Wellness Services
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="card p-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <NavLink to={`/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-dawn hover:text-fox">
                      {s.nav}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a href={retreats.url} target="_blank" rel="noopener" className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-dawn hover:text-fox">
                    Retreats <span aria-hidden="true" className="text-muted">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5">Plan my trip</Link>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="text-ink">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-bg lg:hidden" aria-label="Mobile">
          <ul className="wrap flex flex-col gap-1 py-4">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/blog', 'Blog'],
            ].map(([to, label]) => (
              <li key={to}><NavLink to={to} end className="block py-2 font-display text-lg font-medium text-ink">{label}</NavLink></li>
            ))}
            <li className="mt-3 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-flame">Wellness Services</li>
            {services.map((s) => (
              <li key={s.slug}><NavLink to={`/${s.slug}`} className="block py-2 pl-3 text-muted">{s.nav}</NavLink></li>
            ))}
            <li><a href={retreats.url} target="_blank" rel="noopener" className="block py-2 pl-3 text-muted">Retreats ↗</a></li>
            <li className="mt-4"><Link to="/contact" className="btn-primary w-full">Plan my trip</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
