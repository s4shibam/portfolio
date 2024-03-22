'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TPageWrapper = {
  children: ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: TPageWrapper) => {
  return (
    <motion.div
      className={cn('relative flex flex-col gap-8', className)}
      variants={fadeIn('up', 'tween', 50, 0.1, 0.5)}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
