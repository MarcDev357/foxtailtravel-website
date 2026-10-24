import { useState } from 'react'

type Props = { src: string; alt: string; className?: string; eager?: boolean }

// Image with a tinted fallback, so a missing photo never leaves a broken icon.
export default function Photo({ src, alt, className = '', eager }: Props) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`photo ${className}`} role={failed ? 'img' : undefined} aria-label={failed ? alt : undefined}>
      {!failed && (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />
      )}
    </div>
  )
}
