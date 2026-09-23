import type { CvContent } from './types'

export const en: CvContent = {
  name: 'Berenice Toranza',
  role: 'Full Stack Developer',
  intro:
    "Full Stack Developer specialized in frontend, with 7+ years building production web applications. I enjoy working in agile teams, owning the features I build, and learning something new with every project. I'm a career switcher from tourism, which shows in how I communicate with clients and teams.",
  sectionTitles: {
    hello: 'Hello',
    contact: 'Contact',
    about: 'About Me',
    education: 'Education',
    experience: 'Experience',
    skills: 'Technologies',
    languages: 'Languages',
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
    'Experienced Full Stack Developer, specialized in JavaScript.',
    'Experience with Agile methodologies and Kanban boards.',
    'Passionate about transformation processes and positive change.',
    'Strong adaptability and fast learner.',
    'Committed to excellence and respectful teamwork.',
  ],
  education: [
    {
      institution: 'Ada Coding',
      program: 'Front End Development',
      period: '2018-2019',
    },
    {
      institution: 'Universidad Argentina de la Empresa',
      program: "Bachelor's in Tourism and Hospitality",
      period: '2008-2012',
    },
    {
      institution: 'Université Savoie Mont Blanc',
      program: 'University exchange – Tourism and Hospitality',
      period: '2012',
    },
  ],
  experience: [
    {
      company: 'Paramo Technologies',
      role: 'Senior JavaScript Developer',
      period: 'Apr 2023 - Jun 2026',
      bullets: [
        'Development, testing and maintenance of an internal marketing web application.',
        'Collaboration with stakeholders from planning and estimation through deployment and demos.',
        'Tech stack: Svelte, React.js, Nest.js, MongoDB, Docker, Kubernetes, DAPR, Pulsar.',
        'Rolled out 20+ marketing strategies, impacting more than 4 betting and casino brands, reaching over a million customers worldwide.',
        'Retention strategies reactivated more than 5,000 inactive customers in the first week.',
      ],
    },
    {
      company: 'Accusys Technologies',
      role: 'Senior Front End Developer',
      period: 'Oct 2022 - Apr 2023',
      bullets: [
        'Development of a high-security management system for financial institutions.',
        'Tech stack: Angular 12+, Angular Material.',
      ],
    },
    {
      company: 'Altimetrik',
      role: 'Semi-Senior Front End Developer',
      period: 'Feb 2022 - Sep 2022',
      bullets: [
        'Built an internal component library for shared use.',
        'Developed and tested an internal quiz project.',
        'Tech stack: Angular 11+, native HTML, Stencil.js.',
      ],
    },
    {
      company: 'D3 Sistemas',
      role: 'Full Stack Developer',
      period: 'Aug 2019 - Jan 2022',
      bullets: [
        'Migrated an existing application to Angular.',
        'Developed, tested and deployed a new version.',
        'Tech stack: Angular 10+, .NET, SQL.',
      ],
    },
    {
      company: 'Lenovo',
      role: 'Web Developer',
      period: 'May 2019 - Aug 2019',
      bullets: [
        'Maintenance of the e-commerce site for Latin America.',
        'Built landing pages and updated portfolio content.',
        'Tech stack: HTML, CSS, JavaScript, SAP software.',
      ],
    },
    {
      company: 'Air New Zealand / Google AdWords / Tours by Locals',
      role: 'Customer Service',
      period: 'Dec 2016 - Jan 2019',
      bullets: ['In-person and phone customer service.'],
    },
    {
      company: 'American Express',
      role: 'Back Office Analyst – France',
      period: 'Jul 2014 - Dec 2016',
      bullets: [
        'Account management for France and French-speaking Canada.',
        'Drafted formal business communications.',
      ],
    },
  ],
  skills: [
    'HTML5, CSS3 (SASS), Responsive Design',
    'JavaScript (ES6+), TypeScript',
    'Svelte',
    'Node.js, Nest.js',
    'REST APIs: Swagger, Postman',
    'MongoDB',
    'Docker, Kubernetes',
    'Angular +18, React',
    'Agile Methodologies, Jira',
    'GitLab',
  ],
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Bilingual - C2' },
    { language: 'French', level: 'Bilingual - C2' },
    { language: 'Portuguese', level: 'Intermediate - B1' },
  ],
}
