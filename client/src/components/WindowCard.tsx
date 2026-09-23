import type { ReactNode } from 'react'
import WindowControls from './WindowControls'
import styles from './WindowCard.module.scss'

interface WindowCardProps {
  title: string
  children: ReactNode
}

export default function WindowCard({ title, children }: WindowCardProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.shadow} aria-hidden="true" />
      <div className={styles.card}>
        <header className={styles.header}>
          <span className={styles.title}>{title.toUpperCase()}</span>
          <WindowControls className={styles.controls} />
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}
