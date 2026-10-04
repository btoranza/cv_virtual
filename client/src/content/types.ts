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
  proficiency: number
}

export interface ProjectEntry {
  id: number
  name: string
  description: string
  stackFrontend: string[]
  stackBackend: string[]
  repoUrl: string
  demoUrl?: string
  image?: string
  image2?: string
}

export interface SharedProject {
  id: number
  name: string
  stackFrontend: string[]
  stackBackend: string[]
  repoUrl: string
  demoUrl?: string
  image?: string
  image2?: string
}

export interface SharedContent {
  name: string
  contact: {
    phone: string
    email: string
    linkedin: string
    github: string
  }
  projects: SharedProject[]
}

export interface TranslatedProject {
  id: number
  description: string
}

export interface TranslatedContent {
  role: string
  intro: string
  nav: {
    home: string
    resume: string
    projects: string
    contact: string
    phone: string
    email: string
    findMeOnline: string
    showMore: string
    showLess: string
    downloadCv: string
  }
  sectionTitles: {
    hello: string
    contact: string
    about: string
    education: string
    experience: string
    skills: string
    languages: string
  }
  contact: {
    location: string
  }
  contactForm: {
    intro: string
    name: string
    email: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
    nameRequired: string
    emailInvalid: string
    messageRequired: string
  }
  notFound: {
    title: string
    message: string
    backHome: string
  }
  about: string[]
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
  languages: LanguageEntry[]
  projects: TranslatedProject[]
}

export interface CvContent {
  name: string
  role: string
  intro: string
  nav: {
    home: string
    resume: string
    projects: string
    contact: string
    phone: string
    email: string
    findMeOnline: string
    showMore: string
    showLess: string
    downloadCv: string
  }
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
  contactForm: {
    intro: string
    name: string
    email: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
    nameRequired: string
    emailInvalid: string
    messageRequired: string
  }
  notFound: {
    title: string
    message: string
    backHome: string
  }
  about: string[]
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
  languages: LanguageEntry[]
  projects: ProjectEntry[]
}
