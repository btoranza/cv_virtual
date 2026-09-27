import { useState, type FormEvent } from 'react'
import { PaperPlaneTiltIcon } from '@phosphor-icons/react'
import WindowCard from '../components/WindowCard'
import Toast from '../components/Toast'
import Confetti from '../components/Confetti'
import { useLanguage } from '../context/LanguageContext'
import styles from './Contact.module.scss'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { content } = useLanguage()
  const { contactForm, sectionTitles } = content

  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [showToast, setShowToast] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  function validate(): FormErrors {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) nextErrors.name = contactForm.nameRequired
    if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = contactForm.emailInvalid
    if (!values.message.trim()) nextErrors.message = contactForm.messageRequired
    return nextErrors
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setValues({ name: '', email: '', message: '' })
      setShowToast(true)
      setShowConfetti(true)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.grid}>
      <div className={styles.cardWrap}>
        <WindowCard title={sectionTitles.contact}>
          <p className={styles.intro}>{contactForm.intro}</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  {contactForm.name}
                </label>
                <input
                  id="name"
                  className={styles.input}
                  type="text"
                  placeholder={contactForm.namePlaceholder}
                  value={values.name}
                  onChange={(event) => setValues({ ...values, name: event.target.value })}
                />
                <span className={styles.error}>{errors.name}</span>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  {contactForm.email}
                </label>
                <input
                  id="email"
                  className={styles.input}
                  type="email"
                  placeholder={contactForm.emailPlaceholder}
                  value={values.email}
                  onChange={(event) => setValues({ ...values, email: event.target.value })}
                />
                <span className={styles.error}>{errors.email}</span>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                {contactForm.message}
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder={contactForm.messagePlaceholder}
                value={values.message}
                onChange={(event) => setValues({ ...values, message: event.target.value })}
              />
              <span className={styles.error}>{errors.message}</span>
            </div>

            <button className={styles.submit} type="submit" disabled={status === 'sending'}>
              <PaperPlaneTiltIcon size={16} weight="bold" />
              {status === 'sending' ? contactForm.sending : contactForm.send}
            </button>

            <p className={styles.statusError}>{status === 'error' ? contactForm.error : ''}</p>
          </form>
        </WindowCard>
      </div>

      {showToast && (
        <Toast message={contactForm.success} onClose={() => setShowToast(false)} />
      )}
      {showConfetti && <Confetti onDone={() => setShowConfetti(false)} />}
    </div>
  )
}
