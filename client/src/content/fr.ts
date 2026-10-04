import type { TranslatedContent } from './types'

export const fr: TranslatedContent = {
  role: 'Développeuse Full Stack',
  intro:
    "Développeuse Full Stack spécialisée en front-end, avec plus de 7 ans d'expérience dans la création d'applications web en production. J'aime travailler en équipe agile, être responsable des fonctionnalités que je développe, et continuer à apprendre à chaque projet. Issue d'une reconversion professionnelle depuis le tourisme, cela se ressent dans ma façon de communiquer avec les clients et les équipes.",
  nav: {
    home: 'Accueil',
    resume: 'CV',
    projects: 'Projets',
    contact: 'Contact',
    phone: 'Téléphone',
    email: 'Email',
    findMeOnline: 'Me trouver en ligne',
    showMore: 'Voir plus',
    showLess: 'Voir moins',
    downloadCv: 'Télécharger le CV',
  },
  sectionTitles: {
    hello: 'Hello',
    contact: 'Contact',
    about: 'À propos de moi',
    education: 'Formation',
    experience: 'Expérience',
    skills: 'Compétences',
    languages: 'Langues',
  },
  contact: {
    location: 'Paris, France',
  },
  contactForm: {
    intro: "Une opportunité, un projet, ou juste envie de dire bonjour ? Envoyez-moi un message, je vous répondrai rapidement.",
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'vous@exemple.com',
    messagePlaceholder: 'Parlez-moi un peu de votre projet ou opportunité...',
    send: 'Envoyer le message',
    sending: 'Envoi...',
    success: 'Merci ! Votre message a été envoyé, je vous répondrai bientôt.',
    error: "Une erreur s'est produite. Réessayez ou écrivez-moi directement par email.",
    nameRequired: 'Merci de renseigner votre nom.',
    emailInvalid: 'Merci de renseigner un email valide.',
    messageRequired: 'Merci d\'écrire un message.',
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
    'HTML5',
    'CSS3 (SASS)',
    'Responsive Design',
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
    'Méthodologies Agile',
    'Jira',
    'Développement assisté par IA',
    'Claude Code',
    'Copilot',
  ],
  languages: [
    { language: 'Espagnol', level: 'Langue maternelle', proficiency: 100 },
    { language: 'Anglais', level: 'C2', proficiency: 100 },
    { language: 'Français', level: 'C1', proficiency: 85 },
    { language: 'Portugais', level: 'B1', proficiency: 55 },
  ],
  projects: [
    {
      id: 1,
      description:
        "Application web full-stack qui simule une organisation commerciale réelle, avec plusieurs équipes, des règles de primes configurables et des tableaux de bord interactifs. Les utilisateurs peuvent créer et gérer des ventes et des clients directement dans l'application. Elle automatise le calcul des primes mensuelles selon la performance des ventes, suit la progression de chaque commercial et de chaque équipe par rapport à leurs objectifs, et donne aux services financiers une visibilité claire sur les métriques de vente et la rémunération.",
    },
    {
      id: 2,
      description:
        "Application React pour gérer un registre de véhicules, permettant de créer, modifier et supprimer des fiches avec des champs comme la marque, le modèle, la couleur et la plaque d'immatriculation. Fonctionne entièrement côté client, avec validation de formulaire et édition en ligne, réalisée comme test technique pour D3 Sistemas. L'un de mes tout premiers projets React, au début de ma reconversion vers le développement.",
    },
    {
      id: 3,
      description:
        "Application React + TypeScript qui récupère des personnages Star Wars depuis une API simulée et affiche une liste paginée et consultable par recherche. Inclut une recherche en temps réel avec debouncing, la pagination, et des états de chargement, vide et d'erreur bien gérés.",
    },
    {
      id: 4,
      description:
        "Deux exercices de maquette front-end réalisés pour des processus de recrutement, réunis sous une seule landing page : une landing animée en HTML, SCSS et TypeScript, et une page catalogue d'ordinateurs portables en HTML et CSS pur. Parmi mes tout premiers projets, mais on y voit déjà mon sens du détail, dans une démonstration de markup sémantique et de style réalisés sans aucun framework.",
    },
    {
      id: 5,
      description:
        "Un quiz de trivia sur JavaScript, TypeScript, CSS et HTML, avec trois niveaux de difficulté cumulatifs et une explication après chaque réponse. À la fin, les joueurs obtiennent un résultat par palier qu'ils peuvent partager. Comprend un formulaire public permettant à chacun de proposer une question, ainsi qu'une page d'administration protégée par mot de passe pour relire, modifier et approuver ou rejeter ces propositions avant qu'elles ne rejoignent le quiz.",
    },
  ],
}
