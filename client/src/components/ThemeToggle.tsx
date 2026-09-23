import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <MoonIcon size={16} weight="fill" aria-hidden="true" />
      ) : (
        <SunIcon size={16} weight="fill" aria-hidden="true" />
      )}
    </button>
  )
}
