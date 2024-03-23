import {
  IconType,
  SiAmazonaws,
  SiAmazonawsHex,
  SiAntdesign,
  SiAntdesignHex,
  SiBitbucket,
  SiBitbucketHex,
  SiC,
  SiCHex,
  SiCplusplus,
  SiCplusplusHex,
  SiCss3,
  SiCss3Hex,
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiExpressHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiMongodb,
  SiMongodbHex,
  SiMui,
  SiMuiHex,
  SiMysql,
  SiMysqlHex,
  SiNetlify,
  SiNetlifyHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiNotionHex,
  SiOpenai,
  SiOpenaiHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiReactquery,
  SiReactqueryHex,
  SiRedis,
  SiRedisHex,
  SiRedux,
  SiReduxHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiSupabase,
  SiSupabaseHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTrello,
  SiTrelloHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVercelHex,
  SiVisualstudiocode,
  SiVisualstudiocodeHex,
  SiVite,
  SiViteHex
} from '@icons-pack/react-simple-icons'

export type TTech = {
  title: string
  Icon: IconType
  color: string
}

export type TStackCategory = {
  type: string
  techs: TTech[]
}

export const STACKS_HEADER = {
  heading: 'Tech Stacks',
  subHeading: 'Peek into my software toolbox and preferred technology stacks'
}

export const STACK_CATEGORIES: TStackCategory[] = [
  {
    type: 'Languages',
    techs: [
      {
        title: 'C',
        Icon: SiC,
        color: SiCHex
      },
      {
        title: 'C++',
        Icon: SiCplusplus,
        color: SiCplusplusHex
      },
      {
        title: 'Python',
        Icon: SiPython,
        color: SiPythonHex
      },
      {
        title: 'HTML',
        Icon: SiHtml5,
        color: SiHtml5Hex
      },
      {
        title: 'CSS',
        Icon: SiCss3,
        color: SiCss3Hex
      },
      {
        title: 'JavaScript',
        Icon: SiJavascript,
        color: SiJavascriptHex
      },
      {
        title: 'TypeScript',
        Icon: SiTypescript,
        color: SiTypescriptHex
      }
    ]
  },
  {
    type: 'Frameworks & Libraries',
    techs: [
      {
        title: 'React.js',
        Icon: SiReact,
        color: SiReactHex
      },
      {
        title: 'Redux',
        Icon: SiRedux,
        color: SiReduxHex
      },
      {
        title: 'React Query',
        Icon: SiReactquery,
        color: SiReactqueryHex
      },
      {
        title: 'Tailwind CSS',
        Icon: SiTailwindcss,
        color: SiTailwindcssHex
      },
      {
        title: 'Next.js',
        Icon: SiNextdotjs,
        color: SiNextdotjsHex
      },
      {
        title: 'Ant Design',
        Icon: SiAntdesign,
        color: SiAntdesignHex
      },
      {
        title: 'Shadcn/ui',
        Icon: SiShadcnui,
        color: SiShadcnuiHex
      },
      {
        title: 'Material UI',
        Icon: SiMui,
        color: SiMuiHex
      },
      {
        title: 'Node.js',
        Icon: SiNodedotjs,
        color: SiNodedotjsHex
      },
      {
        title: 'Express.js',
        Icon: SiExpress,
        color: SiExpressHex
      }
    ]
  },
  {
    type: 'Databases',
    techs: [
      {
        title: 'Firebase',
        Icon: SiFirebase,
        color: SiFirebaseHex
      },
      {
        title: 'MongoDB',
        Icon: SiMongodb,
        color: SiMongodbHex
      },
      {
        title: 'PostgreSQL',
        Icon: SiPostgresql,
        color: SiPostgresqlHex
      },
      {
        title: 'Supabase',
        Icon: SiSupabase,
        color: SiSupabaseHex
      },
      {
        title: 'MySQL',
        Icon: SiMysql,
        color: SiMysqlHex
      },
      {
        title: 'Redis',
        Icon: SiRedis,
        color: SiRedisHex
      }
    ]
  },
  {
    type: 'Tools',
    techs: [
      {
        title: 'Vite.js',
        Icon: SiVite,
        color: SiViteHex
      },
      {
        title: 'Git',
        Icon: SiGit,
        color: SiGitHex
      },
      {
        title: 'VS Code',
        Icon: SiVisualstudiocode,
        color: SiVisualstudiocodeHex
      },
      {
        title: 'ChatGPT',
        Icon: SiOpenai,
        color: SiOpenaiHex
      },
      {
        title: 'Postman',
        Icon: SiPostman,
        color: SiPostmanHex
      },
      {
        title: 'Docker',
        Icon: SiDocker,
        color: SiDockerHex
      }
    ]
  },
  {
    type: 'Services',
    techs: [
      {
        title: 'Github',
        Icon: SiGithub,
        color: SiGithubHex
      },
      {
        title: 'BitBucket',
        Icon: SiBitbucket,
        color: SiBitbucketHex
      },
      {
        title: 'Figma',
        Icon: SiFigma,
        color: SiFigmaHex
      },
      {
        title: 'Trello',
        Icon: SiTrello,
        color: SiTrelloHex
      },
      {
        title: 'Vercel',
        Icon: SiVercel,
        color: SiVercelHex
      },
      {
        title: 'Netlify',
        Icon: SiNetlify,
        color: SiNetlifyHex
      },
      {
        title: 'AWS',
        Icon: SiAmazonaws,
        color: SiAmazonawsHex
      },
      {
        title: 'Notion',
        Icon: SiNotion,
        color: SiNotionHex
      }
    ]
  }
]
