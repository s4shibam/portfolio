import {
  IconType,
  SiCodechef,
  SiCodeforces,
  SiLeetcode
} from '@icons-pack/react-simple-icons'

export type TCodingProfile = {
  name: string
  source: string
  Icon: IconType
  color: string
}

export const CODING_PROFILES: TCodingProfile[] = [
  {
    name: 'LeetCode',
    source: 'lc',
    Icon: SiLeetcode,
    color: '#FFA116'
  },
  {
    name: 'CodeChef',
    source: 'cc',
    Icon: SiCodechef,
    color: '#5B4638'
  },
  {
    name: 'CodeForces',
    source: 'cf',
    Icon: SiCodeforces,
    color: '#1F8ACB'
  }
]
