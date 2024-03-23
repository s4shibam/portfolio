import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TTagListProps = {
  animation?: boolean
  data: string[]
  wrapperClassName?: string
  className?: string
}

type TTagProps = {
  animation?: boolean
  i?: number
  children: ReactNode
  className?: string
}

const TagList = ({
  animation = false,
  data,
  className,
  wrapperClassName
}: TTagListProps) => {
  return (
    <div
      className={cn('flex flex-wrap gap-2 overflow-hidden', wrapperClassName)}
    >
      {data?.map((tech, i) => (
        <Tag key={i} animation={animation} className={className} i={i}>
          {tech}
        </Tag>
      ))}
    </div>
  )
}

export default TagList

export const Tag = ({
  animation = false,
  i = 0,
  children,
  className
}: TTagProps) => {
  return (
    <motion.span
      key={i}
      className={cn(
        'rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium tracking-wider text-text-black shadow-inner shadow-bg-dark drop-shadow-md dark:bg-primary dark:text-text-white dark:shadow-bg-light md:text-base',
        className
      )}
      variants={
        animation ? fadeIn('left', 'tween', 50, 0.25 * (i + 1), 0.25) : {}
      }
    >
      {children}
    </motion.span>
  )
}
