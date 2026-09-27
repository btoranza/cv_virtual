import type { SharedContent } from './types'
import projectBonusImg from '../assets/projectBonus1.png'
import projectBonus2Img from '../assets/projectBonus2.png'
import projectCars1Img from '../assets/projectCars1.png'
import projectCars2Img from '../assets/projectCars2.png'
import projectStarWars1Img from '../assets/projectStarWars1.png'
import projectStarWars2Img from '../assets/projectStarWars2.png'
import projectLayout1Img from '../assets/projectLayout1.jpg'
import projectLayout2Img from '../assets/projectLayout2.jpg'

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
