import { useState, type FormEvent } from 'react'
import { submitForm, type FormStatus } from './web3forms'

export default function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus({ state: 'sending' })
    const result = await submitForm(form, 'New newsletter subscriber')
    setStatus(result)
    if (result.state === 'sent') form.reset()
  }

  if (status.state === 'sent') {
    return <p className="text-lg" role="status">You're on the list. {status.message ?? 'Watch your inbox for the latest in wellness travel.'}</p>
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-[1fr_1.4fr_auto] sm:items-end">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="marketing_opt_in" value="yes" />
      <div>
        <label htmlFor="nl-name" className="label">First name</label>
        <input id="nl-name" name="first_name" required className="field" autoComplete="given-name" />
      </div>
      <div>
        <label htmlFor="nl-email" className="label">Email</label>
        <input id="nl-email" name="email" type="email" required className="field" autoComplete="email" />
      </div>
      <button type="submit" className="btn-primary" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Joining…' : 'Subscribe'}
      </button>
      {status.state === 'error' && <p className="text-sm font-medium text-flame sm:col-span-3" role="alert">{status.message}</p>}
      <p className="text-xs text-muted sm:col-span-3">By subscribing you agree to receive marketing and promotional emails. Unsubscribe anytime.</p>
    </form>
  )
}
