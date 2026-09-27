import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { PaintBucketIcon } from '@phosphor-icons/react'
import { PALETTES, useColor } from '../context/ColorContext'
import styles from './ColorPicker.module.scss'

interface ColorPickerProps {
  footerRef: RefObject<HTMLElement | null>
}

export default function ColorPicker({ footerRef }: ColorPickerProps) {
  const { paletteId, setPaletteId } = useColor()
  const [open, setOpen] = useState(false)
  const [pinned, setPinned] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => {
      setPinned(entry.isIntersecting)
    })
    observer.observe(footer)

    return () => observer.disconnect()
  }, [footerRef])

  return (
    <div className={`${styles.wrap} ${pinned ? styles.pinned : ''}`} ref={wrapRef}>
      {open && (
        <div className={styles.panel}>
          {PALETTES.map((palette) => (
            <button
              key={palette.id}
              type="button"
              className={`${styles.swatch} ${palette.id === paletteId ? styles.swatchActive : ''}`}
              style={{ background: palette.primary, borderColor: palette.accent }}
              aria-label={palette.id}
              onClick={() => {
                setPaletteId(palette.id)
                setOpen(false)
              }}
            />
          ))}
        </div>
      )}
      <button
        type="button"
        className={styles.button}
        aria-label="Change color palette"
        onClick={() => setOpen((current) => !current)}
      >
        <PaintBucketIcon size={20} weight="bold" />
      </button>
    </div>
  )
}
