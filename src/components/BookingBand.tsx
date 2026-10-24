import { Link } from 'react-router-dom'
import { business } from '../data/site'

export default function BookingBand({ heading = 'Group excursions' }: { heading?: string }) {
  return (
    <section className="wrap py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-daybreak px-8 py-12 md:px-14">
        <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gold/40 blur-3xl" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Now booking {business.bookingYear}</p>
            <h2 className="mt-2 text-3xl md:text-5xl">{heading}</h2>
          </div>
          <Link to="/contact" className="btn-primary">Let's start planning</Link>
        </div>
      </div>
    </section>
  )
}
