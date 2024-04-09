'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { zoomIn } from '@/animation/framer'
import { TSocial } from '@/constants/socials'
import { cn, getBoxIcon } from '@/utils/functions'

type Props = {
  social: TSocial
  index: number
}

const SocialIcon = ({ social, index }: Props) => {
  const { css, source = '', iconId } = social

  return (
    <motion.div
      key={source}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border-[3px] transition-all duration-300 ease-in-out hover:border-transparent hover:bg-transparent dark:hover:border-transparent dark:hover:bg-transparent sm:size-12',
        css
      )}
      variants={zoomIn(0.25 * index, 0.5)}
    >
      <Link href={'/_' + source} target="_blank">
        <motion.div
          className="grid size-10 origin-center place-items-center sm:size-12"
          whileHover={{ scale: 2 }}
          whileTap={{ scale: 1 }}
        >
          <i className={`${getBoxIcon(iconId)} ml-px text-2xl`} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default SocialIcon
