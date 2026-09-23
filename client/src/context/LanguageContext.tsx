/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { content } from '../content'
import type { CvContent, Language } from '../content/types'

const STORAGE_KEY = 'cv-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  content: CvContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'fr' || value === 'es'
}

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // localStorage no disponible (modo privado, storage bloqueado, etc.)
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // localStorage no disponible: la preferencia solo dura la sesión
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de un LanguageProvider')
  return ctx
}
