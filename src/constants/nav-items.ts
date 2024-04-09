export type TNavItem = {
  iconId: string
  link: string
}

export const NAV_ITEMS: TNavItem[] = [
  {
    iconId: 'projects',
    link: '/projects'
  },
  {
    iconId: 'experiences',
    link: '/experiences'
  },
  {
    iconId: 'stacks',
    link: '/stacks'
  },
  // TODO: Enable when content available
  // {
  //   iconId: 'snips',
  //   link: '/snips'
  // },
  {
    iconId: 'about',
    link: '/about'
  }
]
