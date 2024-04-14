'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TPageHeadingProps = {
  dot?: boolean
  className?: string
  header?: {
    heading?: string
    subHeading?: string
  }
  heading?: string
  subHeading?: string
}

const PageHeading = ({
  dot = true,
  className,
  header,
  heading,
  subHeading
}: TPageHeadingProps) => {
  heading = heading || header?.heading
  subHeading = subHeading || header?.subHeading

  if (!heading && !subHeading) {
    return null
  }

  return (
    <motion.div
      className={cn(
        'mb-5 flex flex-col items-center gap-1 md:mb-10',
        className
      )}
      variants={fadeIn('up', 'tween', 75, 0.1, 0.5)}
    >
      {heading && (
        <h2 className="text-center text-2xl font-bold text-text-black dark:text-text-white sm:text-4xl">
          {heading}

          {dot && <span className="text-primary dark:text-secondary">.</span>}
        </h2>
      )}
      {subHeading && (
        <h5 className="mx-auto max-w-md text-center text-lg font-semibold text-primary dark:text-secondary sm:text-xl">
          {subHeading}
        </h5>
      )}
    </motion.div>
  )
}

export default PageHeading
