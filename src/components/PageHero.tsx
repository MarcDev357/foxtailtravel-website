import type { ReactNode } from 'react'
import Photo from './Photo'

type Props = { eyebrow: string; title: ReactNode; children?: ReactNode; image: string; imageAlt: string }

// Light hero: the photo glows through a warm-white wash, text sits in the bright side.
export default function PageHero({ eyebrow, title, children, image, imageAlt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-dawn">
      <Photo src={image} alt={imageAlt} eager className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/95 via-bg/85 to-bg/60 md:bg-gradient-to-r md:from-bg md:via-bg/90 md:to-bg/0" />
      <div className="wrap py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <span className="tail-bar mt-4" />
        <h1 className="mt-5 max-w-2xl text-4xl md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-xl text-lg text-muted">{children}</div>}
      </div>
    </section>
  )
}
