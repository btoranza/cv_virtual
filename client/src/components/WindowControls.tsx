import styles from './WindowControls.module.scss'

interface WindowControlsProps {
  className?: string
}

export default function WindowControls({ className }: WindowControlsProps) {
  return (
    <span className={`${styles.controls} ${className ?? ''}`} aria-hidden="true">
      <span className={`${styles.button} ${styles.minimize}`} />
      <span className={`${styles.button} ${styles.close}`} />
    </span>
  )
}
