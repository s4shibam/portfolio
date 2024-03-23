export type TNavItem = {
  title: string
  boxIcon: string
  link: string
}

export const NAV_ITEMS: TNavItem[] = [
  {
    title: 'Projects',
    boxIcon: 'bx-briefcase',
    link: '/projects'
  },
  {
    title: 'Experiences',
    boxIcon: 'bx-trophy',
    link: '/experiences'
  },
  {
    title: 'Stacks',
    boxIcon: 'bx-command',
    link: '/stacks'
  },
  {
    title: 'Snips',
    boxIcon: 'bx-cookie',
    link: '/snips'
  },
  {
    title: 'About',
    boxIcon: 'bx-user',
    link: '/about'
  }
]
