import type { CvContent, Language, TranslatedContent } from './types'
import { shared } from './shared'
import { en } from './en'
import { fr } from './fr'
import { es } from './es'

function mergeContent(translated: TranslatedContent): CvContent {
  return {
    name: shared.name,
    role: translated.role,
    intro: translated.intro,
    nav: translated.nav,
    sectionTitles: translated.sectionTitles,
    contact: {
      location: translated.contact.location,
      ...shared.contact,
    },
    contactForm: translated.contactForm,
    notFound: translated.notFound,
    about: translated.about,
    education: translated.education,
    experience: translated.experience,
    skills: translated.skills,
    languages: translated.languages,
    projects: shared.projects.map((project) => {
      const translation = translated.projects.find((p) => p.id === project.id)
      return {
        ...project,
        name: translation?.name ?? project.name,
        description: translation?.description ?? '',
      }
    }),
  }
}

export const content: Record<Language, CvContent> = {
  en: mergeContent(en),
  fr: mergeContent(fr),
  es: mergeContent(es),
}
