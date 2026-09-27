import { useEffect, useState } from 'react'
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setWidth(value))
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${width}%` }} />
    </div>
  )
}
