import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../content/types'
import styles from './LanguageSwitcher.module.scss'

const OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={styles.switcher} role="group" aria-label="Language">
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`${styles.option} ${option.code === language ? styles.active : ''}`}
          onClick={() => setLanguage(option.code)}
          aria-pressed={option.code === language}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
