import type { TranslatedContent } from './types'

export const es: TranslatedContent = {
  role: 'Desarrolladora Full Stack',
  intro:
    'Desarrolladora Full Stack especializada en frontend, con más de 7 años construyendo aplicaciones web en producción. Me gusta trabajar en equipos ágiles, tomar ownership de las features que construyo y seguir aprendiendo con cada proyecto nuevo. Vengo de una reconversión profesional desde el turismo, algo que se nota en cómo me comunico con clientes y equipos.',
  nav: {
    home: 'Inicio',
    resume: 'CV',
    projects: 'Proyectos',
    contact: 'Contacto',
    phone: 'Teléfono',
    email: 'Email',
    findMeOnline: 'Encontrame Online',
    showMore: 'Ver más',
    showLess: 'Ver menos',
    downloadCv: 'Descargar CV',
  },
  sectionTitles: {
    hello: 'Hola',
    contact: 'Contacto',
    about: 'Sobre Mí',
    education: 'Formación',
    experience: 'Experiencia',
    skills: 'Competencias',
    languages: 'Idiomas',
  },
  contact: {
    location: 'París, Francia',
  },
  contactForm: {
    intro: '¿Tenés una propuesta, un proyecto o simplemente querés saludar? Mandame un mensaje y te respondo a la brevedad.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'vos@ejemplo.com',
    messagePlaceholder: 'Contame un poco sobre tu proyecto u oportunidad...',
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Gracias! Tu mensaje fue enviado, te voy a responder pronto.',
    error: 'Algo salió mal. Probá de nuevo o escribime directamente por email.',
    nameRequired: 'Ingresá tu nombre.',
    emailInvalid: 'Ingresá un email válido.',
    messageRequired: 'Escribí un mensaje.',
  },
  notFound: {
    title: 'Página no encontrada',
    message: 'La página que buscás no existe o fue movida.',
    backHome: 'Volver al Inicio',
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
    'HTML5',
    'CSS3 (SASS)',
    'Diseño Responsive',
    'JavaScript (ES6+)',
    'TypeScript',
    'Svelte',
    'Angular +18',
    'React',
    'Node.js',
    'Nest.js',
    'APIs REST',
    'Swagger',
    'Postman',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'GitLab',
    'Metodologías Ágiles',
    'Jira',
    'Desarrollo asistido por IA',
    'Claude Code',
    'Copilot',
  ],
  languages: [
    { language: 'Español', level: 'Nativo', proficiency: 100 },
    { language: 'Inglés', level: 'C2', proficiency: 100 },
    { language: 'Francés', level: 'C1', proficiency: 85 },
    { language: 'Portugués', level: 'B1', proficiency: 55 },
  ],
  projects: [
    {
      id: 1,
      description:
        'Aplicación web full-stack que simula una organización de ventas real, con múltiples equipos, reglas de bonos configurables y dashboards interactivos. Los usuarios pueden crear y gestionar ventas y clientes directamente en la aplicación. Automatiza el cálculo de bonos mensuales según la performance de ventas, trackea el progreso de cada vendedor y de cada equipo contra sus objetivos, y le da a finanzas visibilidad clara sobre las métricas de ventas y la compensación.',
    },
    {
      id: 2,
      description:
        'Aplicación en React para gestionar un registro de vehículos, permitiendo crear, editar y eliminar registros con campos como marca, modelo, color y patente. Funciona completamente del lado del cliente, con validación de formularios y edición inline, hecha como prueba técnica para D3 Sistemas. Uno de mis primerísimos proyectos en React, al comienzo de mi transición al desarrollo.',
    },
    {
      id: 3,
      description:
        'Aplicación en React + TypeScript que trae personajes de Star Wars desde una API simulada y muestra una lista paginada y con búsqueda. Incluye búsqueda en tiempo real con debouncing, paginación, y estados de carga, vacío y error bien manejados.',
    },
    {
      id: 4,
      description:
        'Dos ejercicios de maquetado front-end realizados para procesos de selección, unidos bajo una sola landing page: una landing animada hecha con HTML, SCSS y TypeScript, y una página de catálogo de notebooks hecha con HTML y CSS puro. Entre mis primerísimos trabajos, pero donde ya se nota mi costado detallista, en una muestra de maquetado semántico y estilos desde cero, sin ningún framework.',
    },
    {
      id: 5,
      description:
        'Una plataforma de trivia configurable: el tema, los niveles de dificultad, la cantidad de preguntas por partida y los resultados finales se definen desde un único archivo de configuración, así que la misma app se puede reutilizar para cualquier temática. Incluye un formulario público para que cualquiera proponga una pregunta, y un panel de administración protegido por contraseña para revisar, editar y aprobar o rechazar esas propuestas antes de que se sumen al quiz. En este caso está configurada como un quiz de desarrollo frontend, sobre JavaScript, TypeScript, CSS y HTML, con tres niveles de dificultad acumulativos y una explicación después de cada respuesta.',
    },
  ],
}
