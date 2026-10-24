import { useState, type FormEvent } from 'react'
import { submitForm, type FormStatus } from './web3forms'

export default function InquiryForm({ idPrefix = 'inq' }: { idPrefix?: string }) {
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus({ state: 'sending' })
    const result = await submitForm(form, 'New trip inquiry from foxtailtravel.com')
    setStatus(result)
    if (result.state === 'sent') form.reset()
  }

  if (status.state === 'sent') {
    return (
      <div className="rounded-2xl border-t-4 border-flame bg-surface p-8 shadow-[0_10px_40px_-18px_rgb(var(--flame)/0.35)]" role="status">
        <h3 className="text-2xl">Thank you! Your journey begins here.</h3>
        <p className="mt-3 text-muted">
          {status.message ?? 'BJ will reach out by email soon to begin planning your wellness journey together.'}
        </p>
        <button className="btn-ghost mt-6 text-fox" onClick={() => setStatus({ state: 'idle' })}>Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border-t-4 border-flame bg-surface p-6 shadow-[0_10px_40px_-18px_rgb(var(--flame)/0.35)] md:p-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-first`} className="label">First name *</label>
          <input id={`${idPrefix}-first`} name="first_name" required autoComplete="given-name" className="field" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-last`} className="label">Last name</label>
          <input id={`${idPrefix}-last`} name="last_name" autoComplete="family-name" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className="label">Email *</label>
        <input id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-vision`} className="label">Tell us your vision *</label>
        <textarea
          id={`${idPrefix}-vision`}
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="Where would you love to go? Who's traveling, when, and how do you want to feel when you come home?"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input id={`${idPrefix}-optin`} name="marketing_opt_in" type="checkbox" value="yes" className="mt-1 h-4 w-4 accent-[rgb(var(--fox))]" />
        I agree to receive marketing and promotional emails from Foxtail Travel.
      </label>
      {status.state === 'error' && <p className="text-sm font-medium text-flame" role="alert">{status.message}</p>}
      <button type="submit" className="btn-primary justify-self-start" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
