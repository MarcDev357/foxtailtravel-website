import { useEffect } from 'react'

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Foxtail Travel` : 'Foxtail Travel | Wellness Travel Designer'
  }, [title])
}
