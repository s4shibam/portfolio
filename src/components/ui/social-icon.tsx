'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { zoomIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

interface Link {
  href?: string
  css?: string
  icon?: string
}

interface SocialIconProps {
  link: Link
  index: number
}

const SocialIcon: FC<SocialIconProps> = ({ link, index }) => {
  const { css, href, icon } = link

  return (
    <motion.a
      key={href}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border-[3px] transition-all duration-300 ease-in-out hover:border-transparent hover:bg-transparent dark:hover:border-transparent dark:hover:bg-transparent sm:size-12',
        css
      )}
      href={href}
      target="_blank"
      variants={zoomIn(0.25 * index, 0.5)}
    >
      <motion.div
        className="grid size-full origin-center place-items-center"
        whileHover={{ scale: 2.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className={`bx ${icon} ml-px text-2xl`} />
      </motion.div>
    </motion.a>
  )
}

export default SocialIcon
