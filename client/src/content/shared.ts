import type { SharedContent } from './types'
import projectBonusImg from '../assets/projectBonus1.png'
import projectBonus2Img from '../assets/projectBonus2.png'
import projectCars1Img from '../assets/projectCars1.png'
import projectCars2Img from '../assets/projectCars2.png'

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
      id: 2,
      name: 'Vehicle Administration System',
      stackFrontend: ['React', 'JavaScript', 'Sass'],
      stackBackend: [],
      repoUrl: 'https://github.com/btoranza/Sistema-Administracion-Autos',
      demoUrl: 'https://sistema-administracion-autos.vercel.app',
      image: projectCars1Img,
      image2: projectCars2Img,
    },
  ],
}
