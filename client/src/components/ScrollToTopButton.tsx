import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { ArrowUpIcon } from '@phosphor-icons/react'
import styles from './ScrollToTopButton.module.scss'

interface ScrollToTopButtonProps {
  footerRef: RefObject<HTMLElement | null>
}

export default function ScrollToTopButton({ footerRef }: ScrollToTopButtonProps) {
  const [pinned, setPinned] = useState(false)
  const [visible, setVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    observerRef.current = new IntersectionObserver(([entry]) => {
      setPinned(entry.isIntersecting)
    })
    observerRef.current.observe(footer)

    return () => observerRef.current?.disconnect()
  }, [footerRef])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`${styles.button} ${pinned ? styles.pinned : ''} ${visible ? styles.visible : ''}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon size={20} weight="bold" />
    </button>
  )
}
