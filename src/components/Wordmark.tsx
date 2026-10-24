import { img } from '../data/site'

const logo = img('logo-light.png')

// The Foxtail Travel logo, cut out for use on the light header and footer (white parts recolored charcoal).
export default function Wordmark({ className = 'h-12 md:h-14' }: { className?: string }) {
  return <img src={logo} alt="Foxtail Travel" className={`w-auto ${className}`} width={255} height={114} />
}
