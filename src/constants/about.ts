export type TAbout = {
  type: string
  description: string[]
}

export const ABOUT_HEADER = {
  heading: 'About Me',
  subHeading: 'Get to know me better - my story, interests, and aspirations'
}

export const ABOUT: TAbout[] = [
  {
    type: 'summary',
    description: [
      "Hi, I'm Shibam. I'm a student and a developer from West Bengal, India."
    ]
  },
  {
    type: 'education',
    description: [
      'I completed my schooling from Bidhannagar Municipal School.',
      'Currently pursuing B.Tech. in CSE from Techno International New Town.'
    ]
  },
  {
    type: 'interests',
    description: [
      'My primary interest lies in software development, especially web and mobile.',
      'Apart from that, I enjoy competitive programming and teaching.',
      'I take an active interest in technology, business, and geo-politics, as well as how they intersect to affect society.'
    ]
  },
  {
    type: '! working',
    description: [
      "When I'm not working on my computer, I enjoy watching movies, cooking, playing cricket and sleeping."
    ]
  }
]
