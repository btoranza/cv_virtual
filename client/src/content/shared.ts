import type { SharedContent } from './types'
import projectBonusImg from '../assets/projectBonus1.webp'
import projectBonus2Img from '../assets/projectBonus2.webp'
import projectCars1Img from '../assets/projectCars1.webp'
import projectCars2Img from '../assets/projectCars2.webp'
import projectStarWars1Img from '../assets/projectStarWars1.webp'
import projectStarWars2Img from '../assets/projectStarWars2.webp'
import projectLayout1Img from '../assets/projectLayout1.webp'
import projectLayout2Img from '../assets/projectLayout2.webp'
import projectTrivia1Img from '../assets/projectTrivia1.webp'
import projectTrivia2Img from '../assets/projectTrivia2.webp'

export const shared: SharedContent = {
  name: 'Berenice Toranza',
  contact: {
    phone: '+33 07 53 72 76 88',
    email: 'btoranza@gmail.com',
    linkedin: 'www.linkedin.com/in/btoranza',
    github: 'https://github.com/btoranza',
  },
  projects: [
    {
      id: 1,
      name: 'Bonus Management System',
      stackFrontend: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'TanStack Query',
        'Recharts',
      ],
      stackBackend: ['Python', 'Pydantic', 'FastAPI', 'MongoDB'],
      repoUrl: 'https://github.com/btoranza/bonus_management_system',
      demoUrl: 'https://bonus-management-system.vercel.app/',
      image: projectBonusImg,
      image2: projectBonus2Img,
    },
    {
      id: 5,
      name: 'Configurable Trivia Platform',
      stackFrontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      stackBackend: ['Prisma', 'PostgreSQL'],
      repoUrl: 'https://github.com/btoranza/trivia-platform',
      demoUrl: 'https://coding-trivia-bt.vercel.app',
      image: projectTrivia1Img,
      image2: projectTrivia2Img,
    },
    {
      id: 3,
      name: 'Star Wars Frontend Test',
      stackFrontend: ['React', 'TypeScript', 'Vite', 'SCSS', '@lumx/react', 'Mock Service Worker'],
      stackBackend: [],
      repoUrl: 'https://github.com/btoranza/star-wars-frontend-test',
      demoUrl: 'https://star-wars-frontend-test-hazel.vercel.app',
      image: projectStarWars1Img,
      image2: projectStarWars2Img,
    },
    {
      id: 2,
      name: 'Vehicle Administration System',
      stackFrontend: ['React', 'JavaScript', 'Sass'],
      stackBackend: [],
      repoUrl: 'https://github.com/btoranza/Sistema-Administracion-Autos',
      demoUrl: 'https://sistema-administracion-autos.vercel.app',
      image: projectCars1Img,
      image2: projectCars2Img,
    },
    {
      id: 4,
      name: 'Maquetado',
      stackFrontend: ['HTML', 'CSS', 'SCSS', 'TypeScript'],
      stackBackend: [],
      repoUrl: 'https://github.com/btoranza/maquetado',
      demoUrl: 'https://maquetado-five.vercel.app',
      image: projectLayout1Img,
      image2: projectLayout2Img,
    },
  ],
}
