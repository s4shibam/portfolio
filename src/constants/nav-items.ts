export type TNavItem = {
  id: string
  title: string
  boxIcon: string
  link: string
}

export const NAV_ITEMS: TNavItem[] = [
  {
    id: 'projects',
    title: 'Projects',
    boxIcon: 'bx-briefcase',
    link: '/projects'
  },
  {
    id: 'experiences',
    title: 'Experiences',
    boxIcon: 'bx-trophy',
    link: '/experiences'
  },
  {
    id: 'stacks',
    title: 'Stacks',
    boxIcon: 'bx-command',
    link: '/stacks'
  },
  // TODO: Enable when content available
  // {
  //   id: 'snips',
  //   title: 'Snips',
  //   boxIcon: 'bx-cookie',
  //   link: '/snips'
  // },
  {
    id: 'about',
    title: 'About',
    boxIcon: 'bx-user',
    link: '/about'
  }
]
