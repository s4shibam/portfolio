import JELLYBEAN from '@/companies/jellybean.webp'

export type TCompany = {
  name: string
  logo: any
  link: string
  color: string
}

export type TTenure = {
  from: string
  to: string
}

export type TExperience = {
  company: TCompany
  designation: string
  location: string
  tenure: TTenure
  description: string[]
  techStack: string[]
}

export const EXPERIENCES_HEADER = {
  heading: 'My Experiences',
  subHeading: 'Know about my professional journey and learnings'
}

export const EXPERIENCES: TExperience[] = [
  {
    company: {
      name: 'Jellybean',
      logo: JELLYBEAN,
      link: 'https://jellybean.life',
      color: '#5255C1'
    },
    designation: 'SDE Intern',
    location: 'Remote (Bangalore, India)',
    tenure: { from: 'July 2023', to: 'Present' },
    description: [
      'Developed a ground-up in-platform e-commerce platform tailored for employee needs, integrating GraphQL queries with the Saleor backend, driving a remarkable 400% increase in client onboarding.',
      'Implemented role-based authorization and routing using HOCs, custom hooks, and scalable UI components.',
      "Enhanced Jellybean's user dashboard for diverse audience requirements, maintaining mobile-first design, resulting in a notable 470% surge in platform user sessions.",
      'Engineered robust REST API views in Django for reward disbursement and store purchases, handling 2000 requests monthly and processing transactions worth 6 crores in total.',
      'Actively contributed to design decisions and reviewed more than 10 PRs in the Agile development cycle, ensuring code quality, reusability, and consistency for teammates.'
    ],
    techStack: [
      'Next.js',
      'React Query',
      'Tailwind CSS',
      'Ant Design',
      'TypeScript',
      'GraphQL',
      'Saleor E-commerce',
      'Django'
    ]
  }
]
