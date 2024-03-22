'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TPageHeadingProps = {
  className?: string
  heading: string
  subHeading?: string
}

const PageHeading = ({ className, heading, subHeading }: TPageHeadingProps) => {
  return (
    <motion.div
      className={cn(
        'mb-5 flex flex-col items-center gap-1 md:mb-10',
        className
      )}
      variants={fadeIn('up', 'tween', 75, 0.1, 0.5)}
    >
      <h3 className="text-center text-2xl font-bold text-text-black dark:text-text-white sm:text-4xl">
        {heading}
        <span className="text-primary dark:text-secondary">.</span>
      </h3>
      <h4 className="mx-auto max-w-md text-center text-lg font-semibold text-primary dark:text-secondary sm:text-xl">
        {subHeading}
      </h4>
    </motion.div>
  )
}

export default PageHeading
