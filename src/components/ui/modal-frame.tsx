'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FC, ReactNode } from 'react'

import { scaleInOut, slideIn } from '@/animation/framer'
import { colors } from '@/lib/theme'
import { cn } from '@/utils/functions'

interface ModalFrameProps {
  defaultBorderColor?: boolean
  children: ReactNode
  className?: string
  close: () => void
  color?: string
  dedicatedClose?: boolean
  maskClassName?: string
  title?: string
  titleClassName?: string
}

const ModalFrame: FC<ModalFrameProps> = ({
  defaultBorderColor = false,
  children,
  className,
  close,
  color,
  dedicatedClose,
  maskClassName,
  title,
  titleClassName
}) => {
  const { theme } = useTheme()
  const themedBorderColor =
    color && !defaultBorderColor
      ? color
      : theme === 'dark'
        ? colors.bg.light
        : colors.bg.dark
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className={cn(
          'fixed inset-0 z-[100] flex items-center justify-center bg-primary/20 p-4 backdrop-blur-md md:p-8',
          maskClassName
        )}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={dedicatedClose ? () => {} : close}
      >
        <motion.div
          animate="animate"
          className={cn(
            'hide-scroll relative max-h-full w-full overflow-auto rounded-3xl border-2 bg-bg-light p-3 drop-shadow-2xl dark:bg-bg-dark md:p-5',
            className
          )}
          exit="exit"
          initial="initial"
          style={{ borderColor: themedBorderColor }}
          variants={scaleInOut}
          onClick={(e) => e.stopPropagation()}
        >
          {!!title && (
            <motion.div
              className={cn('absolute inset-x-0 top-0', titleClassName)}
              style={{ backgroundColor: color || colors.secondary }}
              variants={slideIn('up', 'tween', 150, 0.1, 0.5)}
            >
              <p className="p-2 text-center text-3xl font-semibold uppercase tracking-wide text-black dark:text-white md:text-4xl">
                {title}
              </p>
              <span className="block h-10 w-full rounded-t-3xl bg-bg-light dark:bg-bg-dark" />
            </motion.div>
          )}
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ModalFrame
