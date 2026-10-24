import { Link } from 'react-router-dom'
import { advisor, blogPosts } from '../data/site'
import usePageTitle from '../components/usePageTitle'

export const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function Blog() {
  usePageTitle('Blog')
  return (
    <section className="wrap grid gap-12 py-20 md:grid-cols-[1fr_16rem] md:py-28">
      <div className="min-w-0">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-3 text-4xl md:text-6xl">The Foxtail <span className="em">Blog</span></h1>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {blogPosts.map((p) => (
            <li key={p.url} className="py-8">
              <time dateTime={p.date} className="text-sm text-muted">{fmt(p.date)}</time>
              <h2 className="mt-2 text-3xl">
                <Link to={`/blog/${p.slug}`} className="hover:text-fox">{p.title}</Link>
              </h2>
              <p className="mt-3 max-w-[62ch] text-muted">{p.summary}</p>
              <Link to={`/blog/${p.slug}`} className="mt-4 inline-block font-semibold text-fox">Read the post →</Link>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit rounded-2xl border border-line bg-surface p-6">
        <p className="font-display text-xl font-bold">{advisor.name}</p>
        <p className="mt-1 text-sm text-muted">Your wellness travel specialist</p>
      </aside>
    </section>
  )
}
