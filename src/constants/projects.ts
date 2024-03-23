import CALCULATOR from '@/projects/calculator.webp'
import CERTIVITA from '@/projects/certivita.webp'
import CKRET from '@/projects/ckret.webp'
import DIGITAL_CLOCK from '@/projects/digital-clock.webp'
import FILMINGG from '@/projects/filmingg.webp'
import QUIZZY from '@/projects/quizzy.webp'
import REGISTRATION_FORM_UI from '@/projects/registration-form-ui.webp'
import SCRENOO from '@/projects/screnoo.webp'
import SUDOKU_WIZARD from '@/projects/sudoku-wizard.webp'

export type TProject = {
  title: string
  image: any
  summary: string
  links: {
    linkType: string
    linkTypeBoxIcon: string
    linkHost: string
    linkHostBoxIcon: string
  }[]
  features: string[]
  techs: string[]
  color: string
}

export const MAJOR_PROJECT_HEADER = {
  heading: 'Featured Projects',
  subHeading:
    'Explore my gallery of the latest projects and practical creations'
}

export const MINOR_PROJECT_HEADER = {
  heading: 'Minor Projects',
  subHeading: 'These modest accomplishments mark my beginnings'
}

export const MAJOR_PROJECTS: TProject[] = [
  {
    title: 'Ckret',
    image: CKRET,
    color: '#FF8A00',
    summary:
      'Ckret is an anonymous messaging platform. Exchange anonymous questions, feedback, suggestions, dares, and challenges with your friends, families, and coworkers.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/ckret',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://ckret.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Exchange messages with friends and families anonymously.',
      'Create account anonymously or with gmail to get messages.',
      'Send secret messages using ckret link without even creating account.',
      'Share ckret link to social media platforms in one click to receive messages.',
      'Highly customizable settings for the best user experience.',
      'Install the Ckret App (PWA) for convenience.'
    ],
    techs: [
      'next',
      'typescript',
      'tailwindcss',
      'shadcn/ui',
      'next-auth',
      'react-query',
      'react-hot-toast',
      'html2canvas'
    ]
  },
  {
    title: 'Quizzy',
    image: QUIZZY,
    color: '#18A08B',
    summary:
      'Quizzy is a platform for online computer science or coding quizzes, as well as learning new topics by watching video content on the platform.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/quizzy',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://quizzy.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'User experience-centric, modern and responsive interface',
      'Dark and Light theme support',
      'User authentication by Firebase: Google Signin, Email/Password Signin',
      'Option to edit profile and reset password',
      'Marking based quizzes',
      'Certificate on successful completion',
      'Quiz submission history',
      'Video tutorials to learn computer science topics'
    ],
    techs: [
      'react',
      'tailwindcss',
      'firebase',
      'lodash',
      'react-router-dom',
      'react-hot-toast'
    ]
  },
  {
    title: 'Sudoku Wizard',
    image: SUDOKU_WIZARD,
    color: '#7373E2',
    summary:
      'Sudoku Wizard is an algorithmic project based on Backtracking Algorithm. This project illustrates the operation of the backtracking algorithm, which is used to solve any sudoku puzzle.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/sudoku-wizard',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://sudoku-wizard.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Generate sudoku problem',
      'Solve existing sudoku problem',
      'Visualize how the backtracking algorithm works in behind'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    title: 'Certivita',
    image: CERTIVITA,
    color: '#0099FF',
    summary:
      'Certivita is an online tool that helps to generate fully customizable personalized certificates.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/certivita',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://certivita.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Generate customizable certificates',
      'List of customizable fields: Certificate Genre, Recipient Name, Certificate Reason, Date of Issue, Signature',
      'Download certificate in .pdf format'
    ],
    techs: ['html', 'tailwindcss', 'javascript', 'pdf-lib', 'sweetalert']
  }
]

export const MINOR_PROJECTS: TProject[] = [
  {
    title: 'Screnoo',
    image: SCRENOO,
    color: '#5EEAD4',
    summary:
      'Screnoo is a PC Screen recorder which helps to record desktop or laptop screen along with system or user audio.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/screnoo',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://screnoo.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Record PC / Laptop screen',
      'Record system or user audio',
      'Download recording in .mp4 format'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    title: 'Filmingg',
    image: FILMINGG,
    color: '#FA4000',
    summary:
      'Filmingg is a Movie searching / guide web application backed up by OMDB API.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/filmingg',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://filmingg.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Responsive UI',
      'Show information about movies and series',
      'Click the poster image to redirect to the Google search result'
    ],
    techs: ['html', 'tailwindcss', 'javascript']
  },
  {
    title: 'Calculator',
    image: CALCULATOR,
    color: '#009245',
    summary: 'This is a simple responsive Calculator.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/calculator',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://calculator.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Basic binary operations',
      'Delete and All Clear support',
      'Glassmorphism Effect'
    ],
    techs: ['html', 'css', 'javascript']
  },
  {
    title: 'Digital Clock',
    image: DIGITAL_CLOCK,
    color: '#C33764',
    summary: 'This is a simple responsive Digital Clock.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/digital-clock',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://digital-clock.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: [
      'Shows Time',
      'Shows Date and Day',
      'Rainbow bubbles background animation'
    ],
    techs: ['html', 'css', 'javascript']
  },
  {
    title: 'Registration Form UI',
    image: REGISTRATION_FORM_UI,
    color: '#E100FF',
    summary:
      'This is a simple front end of a user registration or signup form with glassmorphism styled interface.',
    links: [
      {
        linkType: 'code',
        linkTypeBoxIcon: 'bx-terminal',
        linkHost: 'https://github.com/s4shibam/registration-form-ui',
        linkHostBoxIcon: 'bxl-github'
      },
      {
        linkType: 'demo',
        linkTypeBoxIcon: 'bx-link-external',
        linkHost: 'https://registration-form-ui.shibamsaha.dev',
        linkHostBoxIcon: 'bx-globe'
      }
    ],
    features: ['Responsive User Interface', 'Glassmorphism Effect'],
    techs: ['html', 'css']
  }
]
