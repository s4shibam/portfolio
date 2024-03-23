import {
  IconType,
  SiCodechef,
  SiCodeforces,
  SiLeetcode
} from '@icons-pack/react-simple-icons'

export type TCodingProfile = {
  name: string
  Icon: IconType
  link: string
  color: string
}

export const CODING_PROFILES: TCodingProfile[] = [
  {
    name: 'LeetCode',
    Icon: SiLeetcode,
    link: 'https://leetcode.com/s4shibam',
    color: '#FFA116'
  },
  {
    name: 'CodeChef',
    Icon: SiCodechef,
    link: 'https://www.codechef.com/users/s4shibam',
    color: '#5B4638'
  },
  {
    name: 'CodeForces',
    Icon: SiCodeforces,
    link: 'https://codeforces.com/profile/s4shibam',
    color: '#1F8ACB'
  }
]
