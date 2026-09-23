export type Language = 'en' | 'fr' | 'es'

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface EducationEntry {
  institution: string
  program: string
  period: string
}

export interface LanguageEntry {
  language: string
  level: string
}

export interface CvContent {
  name: string
  role: string
  intro: string
  sectionTitles: {
    hello: string,
    contact: string
    about: string
    education: string
    experience: string
    skills: string
    languages: string
  }
  contact: {
    location: string
    phone: string
    email: string
    linkedin: string
    github: string
  }
  about: string[]
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
  languages: LanguageEntry[]
}
