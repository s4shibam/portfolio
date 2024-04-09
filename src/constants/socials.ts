export type TSocial = {
  name: string
  id: string
  boxIcon: string
  href: string
  css: string
}

export const SOCIALS: TSocial[] = [
  {
    name: 'facebook',
    id: 'fb',
    boxIcon: 'bxl-facebook',
    href: 'https://facebook.com/s4shibam',
    css: 'border-[#0866FF] [&>*]:text-[#0866FF] dark:border-[#0866FF]'
  },
  {
    name: 'github',
    id: 'gh',
    boxIcon: 'bxl-github',
    href: 'https://github.com/s4shibam',
    css: 'border-[#181717] [&>*]:text-[#181717] dark:border-white dark:[&>*]:text-white'
  },
  {
    name: 'gmail',
    id: 'gm',
    boxIcon: 'bxl-gmail',
    href: 'https://mail.google.com/mail/u/0?fs=1&tf=cm&to=s4shibam@gmail.com',
    css: 'border-[#EA4335] [&>*]:text-[#EA4335] dark:border-[#EA4335]'
  },
  {
    name: 'instagram',
    id: 'ig',
    boxIcon: 'bxl-instagram',
    href: 'https://instagram.com/s4shibam/',
    css: 'border-[#E4405F] [&>*]:text-[#E4405F] dark:border-[#E4405F]'
  },
  {
    name: 'linkedin',
    id: 'li',
    boxIcon: 'bxl-linkedin',
    href: 'https://linkedin.com/in/s4shibam/',
    css: 'border-[#0A66C2] [&>*]:text-[#0A66C2] dark:border-[#0A66C2]'
  },
  {
    name: 'twitter',
    id: 'tw',
    boxIcon: 'bxl-twitter',
    href: 'https://twitter.com/intent/follow?screen_name=s4shibam',
    css: 'border-[#1D9BF0] [&>*]:text-[#1D9BF0] dark:border-[#1D9BF0]'
  }
]
