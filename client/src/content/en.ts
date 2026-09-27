import type { TranslatedContent } from './types'

export const en: TranslatedContent = {
  role: 'Full Stack Developer',
  intro:
    "Full Stack Developer specialized in frontend, with 7+ years building production web applications. I enjoy working in agile teams, owning the features I build, and learning something new with every project. I'm a career switcher from tourism, which shows in how I communicate with clients and teams.",
  nav: {
    home: 'Home',
    resume: 'CV',
    projects: 'Projects',
    contact: 'Contact',
    phone: 'Phone',
    email: 'Email',
    findMeOnline: 'Find Me Online',
    showMore: 'Show more',
    showLess: 'Show less',
    downloadCv: 'Download CV',
  },
  sectionTitles: {
    hello: 'Hello',
    contact: 'Contact',
    about: 'About Me',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    languages: 'Languages',
  },
  contact: {
    location: 'Paris, France',
  },
  contactForm: {
    intro: "Have a role, a project or just want to say hi? Send me a message and I'll get back to you soon.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Tell me a bit about your project or opportunity...',
    send: 'Send message',
    sending: 'Sending...',
    success: "Thanks! Your message has been sent, I'll get back to you soon.",
    error: 'Something went wrong. Please try again or email me directly.',
    nameRequired: 'Please enter your name.',
    emailInvalid: 'Please enter a valid email.',
    messageRequired: 'Please write a message.',
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
    'REST APIs',
    'Swagger',
    'Postman',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'GitLab',
    'Agile Methodologies',
    'Jira',
    'AI-Assisted Development',
    'Claude Code',
    'Copilot',
  ],
  languages: [
    { language: 'Spanish', level: 'Native', proficiency: 100 },
    { language: 'English', level: 'C2', proficiency: 100 },
    { language: 'French', level: 'C1', proficiency: 85 },
    { language: 'Portuguese', level: 'B1', proficiency: 55 },
  ],
  projects: [
    {
      id: 1,
      description:
        "A full-stack web app that simulates a real sales organization, with multiple teams, configurable bonus rules, and interactive dashboards. Users can create and manage sales records and customers directly in the app. It automates monthly bonus calculations based on sales performance, tracks each salesperson's and team's progress against their goals, and gives finance departments clear visibility into sales metrics and compensation.",
    },
    {
      id: 2,
      description:
        'A React app to manage a vehicle registry, letting users create, edit and delete records with fields like brand, model, color and license plate. Built entirely client-side, with form validation and inline editing, as a technical assessment for D3 Sistemas. One of my very first React projects, early in my transition into development.',
    },
    {
      id: 3,
      description:
        'A React + TypeScript app that fetches Star Wars characters from a mocked API and renders a searchable, paginated list. Includes real-time search with debouncing, pagination, and proper loading, empty and error states.',
    },
    {
      id: 4,
      description:
        'Two front-end markup exercises from hiring processes, combined under one landing page: an animated landing page built with HTML, SCSS and TypeScript, and a laptop catalog page built with plain HTML and CSS. Among my very first projects, but you can already see my attention to detail in a showcase of semantic markup and styling from scratch, without any framework.',
    },
  ],
}
