import { useEffect, useRef } from 'react'
import { CheckCircleIcon, XIcon } from '@phosphor-icons/react'
import styles from './Toast.module.scss'

interface ToastProps {
  message: string
  onClose: () => void
}

const AUTO_DISMISS_MS = 5000

export default function Toast({ message, onClose }: ToastProps) {
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const timeout = setTimeout(() => onCloseRef.current(), AUTO_DISMISS_MS)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={styles.toast} role="status">
      <CheckCircleIcon size={22} weight="fill" className={styles.icon} />
      <p className={styles.message}>{message}</p>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        <XIcon size={16} weight="bold" />
      </button>
    </div>
  )
}
