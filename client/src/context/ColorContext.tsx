/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export interface ColorPalette {
  id: string
  primary: string
  accent: string
}

export const PALETTES: ColorPalette[] = [
  { id: 'pink', primary: '#ffc0d2', accent: '#dd7a9b' },
  { id: 'peach', primary: '#ffd9b3', accent: '#e0a765' },
  { id: 'mint', primary: '#bdeed9', accent: '#5cb894' },
  { id: 'sky', primary: '#bfe3ff', accent: '#6fa8d8' },
  { id: 'lavender', primary: '#ddd0ff', accent: '#a488e0' },
  { id: 'butter', primary: '#fff0b3', accent: '#e0c34d' },
]

const STORAGE_KEY = 'cv-color-palette'

interface ColorContextValue {
  paletteId: string
  setPaletteId: (id: string) => void
}

const ColorContext = createContext<ColorContextValue | null>(null)

function getInitialPaletteId(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && PALETTES.some((palette) => palette.id === stored)) return stored
  } catch {
    // localStorage no disponible (modo privado, storage bloqueado, etc.)
  }
  return PALETTES[0].id
}

export function ColorProvider({ children }: { children: ReactNode }) {
  const [paletteId, setPaletteId] = useState<string>(getInitialPaletteId)

  useEffect(() => {
    const palette = PALETTES.find((p) => p.id === paletteId) ?? PALETTES[0]
    document.documentElement.style.setProperty('--color-primary', palette.primary)
    document.documentElement.style.setProperty('--color-accent', palette.accent)
    try {
      localStorage.setItem(STORAGE_KEY, paletteId)
    } catch {
      // localStorage no disponible: la preferencia solo dura la sesión
    }
  }, [paletteId])

  return <ColorContext.Provider value={{ paletteId, setPaletteId }}>{children}</ColorContext.Provider>
}

export function useColor() {
  const ctx = useContext(ColorContext)
  if (!ctx) throw new Error('useColor debe usarse dentro de un ColorProvider')
  return ctx
}
