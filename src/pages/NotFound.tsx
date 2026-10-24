import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="wrap py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl md:text-5xl">This path wandered <span className="em">Off the map</span></h1>
      <p className="mt-4 text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  )
}
