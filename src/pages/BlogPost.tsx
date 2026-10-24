import { Link, useParams } from 'react-router-dom'
import { advisor, blogPosts } from '../data/site'
import { fmt } from './Blog'
import NotFound from './NotFound'
import usePageTitle from '../components/usePageTitle'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  usePageTitle(post?.title)
  if (!post) return <NotFound />
  return (
    <article className="wrap max-w-3xl py-20 md:py-28">
      <Link to="/blog" className="text-sm font-semibold text-fox">← All posts</Link>
      <time dateTime={post.date} className="mt-8 block text-sm text-muted">{fmt(post.date)} · {advisor.name}</time>
      <h1 className="mt-3 text-4xl md:text-5xl">{post.title}</h1>
      <p className="mt-6 text-lg text-muted">{post.summary}</p>
      <a href={post.url} target="_blank" rel="noopener" className="mt-10 flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-6 hover:border-fox">
        <span>
          <span className="eyebrow">Illustrated guide</span>
          <span className="mt-1 block font-display text-2xl">{post.title}</span>
        </span>
        <span className="text-xl text-fox" aria-hidden="true">↗</span>
      </a>
      <div className="mt-12 rounded-3xl bg-daybreak p-8">
        <h2 className="text-2xl">Ready to plan with an advisor?</h2>
        <p className="mt-2 text-muted">Share your vision with BJ and let us craft a journey that nurtures your mind, body and soul.</p>
        <Link to="/contact" className="btn-primary mt-5">Let's begin</Link>
      </div>
    </article>
  )
}
