import type { CvContent } from './types'

export const es: CvContent = {
  name: 'Berenice Toranza',
  role: 'Desarrolladora Full Stack',
  intro:
    'Desarrolladora Full Stack especializada en frontend, con más de 7 años construyendo aplicaciones web en producción. Me gusta trabajar en equipos ágiles, tomar ownership de las features que construyo y seguir aprendiendo con cada proyecto nuevo. Vengo de una reconversión profesional desde el turismo, algo que se nota en cómo me comunico con clientes y equipos.',
  sectionTitles: {
    hello: 'Hola',
    contact: 'Contacto',
    about: 'Sobre Mí',
    education: 'Formación',
    experience: 'Experiencia',
    skills: 'Tecnologías',
    languages: 'Idiomas',
  },
  contact: {
    location: 'París, Francia',
    phone: '+33 07 53 72 76 88',
    email: 'btoranza@gmail.com',
    linkedin: 'www.linkedin.com/in/btoranza',
    // TODO: pegar tu URL real de GitHub.
    github: 'https://github.com/',
  },
  about: [
    'Desarrolladora Full Stack con experiencia, especializada en JavaScript.',
    'Experiencia con metodologías Ágiles y tableros Kanban.',
    'Apasionada por los procesos de transformación y el cambio positivo.',
    'Gran capacidad de adaptación y aprendizaje rápido.',
    'Comprometida con la excelencia y el trabajo en equipo respetuoso.',
  ],
  education: [
    {
      institution: 'Ada Coding',
      program: 'Desarrollo Front End',
      period: '2018-2019',
    },
    {
      institution: 'Universidad Argentina de la Empresa',
      program: 'Licenciatura en Turismo y Hotelería',
      period: '2008-2012',
    },
    {
      institution: 'Université Savoie Mont Blanc',
      program: 'Intercambio universitario – Turismo y Hotelería',
      period: '2012',
    },
  ],
  experience: [
    {
      company: 'Paramo Technologies',
      role: 'Desarrolladora JavaScript Senior',
      period: 'Abr 2023 - Jun 2026',
      bullets: [
        'Desarrollo, testing y mantenimiento de una aplicación web interna de marketing.',
        'Colaboración con las partes interesadas desde la planificación y estimación hasta el despliegue y las demos.',
        'Stack técnico: Svelte, React.js, Nest.js, MongoDB, Docker, Kubernetes, DAPR, Pulsar.',
        'Implementación de más de 20 estrategias de marketing, con impacto en más de 4 marcas de apuestas y casino, alcanzando a más de un millón de clientes en el mundo.',
        'Las estrategias de retención reactivaron a más de 5.000 clientes inactivos en la primera semana.',
      ],
    },
    {
      company: 'Accusys Technologies',
      role: 'Desarrolladora Front End Senior',
      period: 'Oct 2022 - Abr 2023',
      bullets: [
        'Desarrollo de un software de gestión de alta seguridad para entidades financieras.',
        'Stack técnico: Angular 12+, Angular Material.',
      ],
    },
    {
      company: 'Altimetrik',
      role: 'Desarrolladora Front End Semi-Senior',
      period: 'Feb 2022 - Sep 2022',
      bullets: [
        'Construcción de una librería de componentes interna de uso compartido.',
        'Desarrollo y testing de un proyecto de quiz interno.',
        'Stack técnico: Angular 11+, HTML nativo, Stencil.js.',
      ],
    },
    {
      company: 'D3 Sistemas',
      role: 'Desarrolladora Full Stack',
      period: 'Ago 2019 - Ene 2022',
      bullets: [
        'Migración de una aplicación existente a Angular.',
        'Desarrollo, testing y despliegue de una nueva versión.',
        'Stack técnico: Angular 10+, .NET, SQL.',
      ],
    },
    {
      company: 'Lenovo',
      role: 'Desarrolladora Web',
      period: 'May 2019 - Ago 2019',
      bullets: [
        'Mantenimiento del sitio de e-commerce para Latinoamérica.',
        'Creación de landing pages y actualización de contenido de portfolio.',
        'Stack técnico: HTML, CSS, JavaScript, software SAP.',
      ],
    },
    {
      company: 'Air New Zealand / Google AdWords / Tours by Locals',
      role: 'Atención al Cliente',
      period: 'Dic 2016 - Ene 2019',
      bullets: ['Atención al cliente presencial y telefónica.'],
    },
    {
      company: 'American Express',
      role: 'Analista Back Office – Francia',
      period: 'Jul 2014 - Dic 2016',
      bullets: [
        'Gestión de cuentas para Francia y Canadá francófono.',
        'Redacción de comunicaciones formales.',
      ],
    },
  ],
  skills: [
    'HTML5, CSS3 (SASS), Diseño Responsive',
    'JavaScript (ES6+), TypeScript',
    'Svelte',
    'Node.js, Nest.js',
    'APIs REST: Swagger, Postman',
    'MongoDB',
    'Docker, Kubernetes',
    'Angular +18, React',
    'Metodologías Ágiles, Jira',
    'GitLab',
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Bilingüe - C2' },
    { language: 'Francés', level: 'Bilingüe - C2' },
    { language: 'Portugués', level: 'Intermedio - B1' },
  ],
}