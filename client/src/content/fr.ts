import type { CvContent } from './types'

export const fr: CvContent = {
  name: 'Berenice Toranza',
  role: 'Développeuse Full Stack',
  intro:
    "Développeuse Full Stack spécialisée en front-end, avec plus de 7 ans d'expérience dans la création d'applications web en production. J'aime travailler en équipe agile, être responsable des fonctionnalités que je développe, et continuer à apprendre à chaque projet. Issue d'une reconversion professionnelle depuis le tourisme, cela se ressent dans ma façon de communiquer avec les clients et les équipes.",
  sectionTitles: {
    hello: 'Hello',
    contact: 'Contact',
    about: 'À propos de moi',
    education: 'Formation',
    experience: 'Expérience',
    skills: 'Technologies',
    languages: 'Langues',
  },
  contact: {
    location: 'Paris, France',
    phone: '+33 07 53 72 76 88',
    email: 'btoranza@gmail.com',
    linkedin: 'www.linkedin.com/in/btoranza',
    // TODO: pegar tu URL real de GitHub.
    github: 'https://github.com/',
  },
  about: [
    'Développeuse Full Stack expérimentée, spécialisée en JavaScript.',
    'Expérience avec les méthodologies Agile et les tableaux Kanban.',
    'Passionnée par les processus de transformation et le changement positif.',
    "Grande capacité d'adaptation et apprentissage rapide.",
    "Soucieuse d'excellence et du travail d'équipe respectueux.",
  ],
  education: [
    {
      institution: 'Ada Coding',
      program: 'Développement Front End',
      period: '2018-2019',
    },
    {
      institution: 'Universidad Argentina de la Empresa',
      program: 'Licence en Tourisme et Hôtellerie',
      period: '2008-2012',
    },
    {
      institution: 'Université Savoie Mont Blanc',
      program: 'Échange universitaire – Tourisme et Hôtellerie',
      period: '2012',
    },
  ],
  experience: [
    {
      company: 'Paramo Technologies',
      role: 'Développeuse Javascript Sr.',
      period: 'Avr 2023 - Juin 2026',
      bullets: [
        "Développement, tests et maintenance d'une application web interne de marketing.",
        "Collaboration avec les parties prenantes depuis la planification et l'estimation jusqu'au déploiement et aux démonstrations.",
        'Stack technique: Svelte, React.js, Nest.js, MongoDB, Docker, Kubernetes, DAPR, Pulsar.',
        "Plus de 20 stratégies marketing mises en place, générant un impact réel sur plus de 4 marques de paris et casino, représentant plus d'un million de clients dans le monde.",
        "Les stratégies de rétention appliquées ont permis de réactiver plus de 5 000 clients inactifs la première semaine.",
      ],
    },
    {
      company: 'Accusys Technologies',
      role: 'Développeuse Front End Sr.',
      period: 'Oct 2022 - Avr 2023',
      bullets: [
        'Développement d\'un logiciel de gestion à haute sécurité destiné aux entités financières.',
        'Stack technique: Angular 12+, Angular Material.',
      ],
    },
    {
      company: 'Altimetrik',
      role: 'Développeuse Front End Ssr.',
      period: 'Fév 2022 - Sep 2022',
      bullets: [
        "Création d'une bibliothèque de composants pour usage interne.",
        "Développement et tests d'un projet de quiz interne.",
        'Stack technique: Angular 11+, HTML natif, Stencil.js.',
      ],
    },
    {
      company: 'D3 Sistemas',
      role: 'Développeuse Full Stack',
      period: 'Août 2019 - Jan 2022',
      bullets: [
        "Migration d'une application existante vers Angular.",
        'Développement, tests et déploiement de nouvelle version.',
        'Stack technique: Angular 10+, .NET, SQL.',
      ],
    },
    {
      company: 'Lenovo',
      role: 'Développeuse web',
      period: 'Mai 2019 - Août 2019',
      bullets: [
        "Maintenance du site e-commerce pour l'Amérique latine.",
        'Création de landing pages et mises à jour de portfolio.',
        'Stack technique: HTML, CSS, Javascript, logiciel SAP.',
      ],
    },
    {
      company: 'Air New Zealand / Google AdWords / Tours by Locals',
      role: 'Service Client',
      period: 'Déc 2016 - Jan 2019',
      bullets: ['Service client en personne et par téléphone.'],
    },
    {
      company: 'American Express',
      role: 'Analyste Back Office – France',
      period: 'Juil 2014 - Déc 2016',
      bullets: [
        'Gestion de comptes pour la France et le Canada francophone.',
        'Rédaction de communications formelles.',
      ],
    },
  ],
  skills: [
    'HTML5, CSS3 (SASS), Responsive Design',
    'JavaScript (ES6+), TypeScript',
    'Svelte',
    'Node.js, Nest.js',
    'APIs REST: Swagger, Postman',
    'MongoDB',
    'Docker, Kubernetes',
    'Angular +18, React',
    'Méthodologies Agile, Jira',
    'GitLab',
  ],
  languages: [
    { language: 'Espagnol', level: 'Langue maternelle' },
    { language: 'Anglais', level: 'Bilingue - C2' },
    { language: 'Français', level: 'Bilingue - C2' },
    { language: 'Portugais', level: 'Intermédiaire - B1' },
  ],
}
