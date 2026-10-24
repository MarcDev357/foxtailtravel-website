export type FormStatus = { state: 'idle' | 'sending' | 'sent' | 'error'; message?: string }

const KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

// Sends a form to Web3Forms, which forwards it to the inbox tied to the access key.
export async function submitForm(form: HTMLFormElement, subject: string): Promise<FormStatus> {
  if (import.meta.env.VITE_PREVIEW) {
    return { state: 'sent', message: 'Preview only. On the live site this message goes straight to BJ.' }
  }
  if (!KEY) {
    return { state: 'error', message: 'The form is not connected yet. Please email foxtailtravel@gmail.com.' }
  }
  const data = new FormData(form)
  data.append('access_key', KEY)
  data.append('subject', subject)
  data.append('from_name', 'Foxtail Travel website')
  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    const json = await res.json()
    if (json.success) return { state: 'sent' }
    return { state: 'error', message: json.message || 'Something went wrong. Please try again.' }
  } catch {
    return { state: 'error', message: 'We could not reach the server. Check your connection and try again.' }
  }
}
