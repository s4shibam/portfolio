import { BOXICONS } from '@/lib/box-icons'

export type TSocial = {
  source: string
  iconId: keyof typeof BOXICONS
  css: string
}

export const SOCIALS: TSocial[] = [
  {
    source: 'fb',
    iconId: 'facebook',
    css: 'border-[#0866FF] [&>*]:text-[#0866FF] dark:border-[#0866FF]'
  },
  {
    source: 'gh',
    iconId: 'github',
    css: 'border-[#181717] [&>*]:text-[#181717] dark:border-white dark:[&>*]:text-white'
  },
  {
    source: 'gm',
    iconId: 'gmail',
    css: 'border-[#EA4335] [&>*]:text-[#EA4335] dark:border-[#EA4335]'
  },
  {
    source: 'ig',
    iconId: 'instagram',
    css: 'border-[#E4405F] [&>*]:text-[#E4405F] dark:border-[#E4405F]'
  },
  {
    source: 'li',
    iconId: 'linkedin',
    css: 'border-[#0A66C2] [&>*]:text-[#0A66C2] dark:border-[#0A66C2]'
  },
  {
    source: 'tw',
    iconId: 'twitter',
    css: 'border-[#1D9BF0] [&>*]:text-[#1D9BF0] dark:border-[#1D9BF0]'
  }
]
