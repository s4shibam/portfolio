'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useRef } from 'react'

import { fadeIn } from '@/animation/framer'
import { colors } from '@/lib/theme'
import { cn } from '@/utils/functions'

type TCard = {
  i?: number
  children: ReactNode
  className?: string
  titleClassName?: string
  wrapperClassName?: string
  title?: string | ReactNode
  hoverGradient?: {
    light: string
    dark: string
  }
}

const Card = ({
  i = 0,
  children,
  className,
  titleClassName,
  wrapperClassName,
  title,
  hoverGradient
}: TCard) => {
  const { theme } = useTheme()

  const cardColor = theme === 'dark' ? colors.bg.dark : colors.bg.lighter
  const gradientColor =
    theme === 'dark' ? hoverGradient?.dark : hoverGradient?.light

  const cardRef = useRef<HTMLDivElement>(null)

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!cardRef.current || window.innerWidth < 768) return

    const { left, top } = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - left
    const mouseY = e.clientY - top

    cardRef.current.style.background = `radial-gradient(555px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, ${cardColor} 75%) no-repeat`
  }

  const mouseLeaveHandler = () => {
    if (!cardRef.current) return
    cardRef.current.style.background = cardColor
  }

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.background = cardColor
    }
  }, [hoverGradient, cardColor])

  return (
    <div
      className={cn(
        'mt-[-18px] flex flex-col-reverse sm:mt-[-22px]',
        wrapperClassName
      )}
    >
      <motion.section
        ref={cardRef}
        className={cn(
          'relative overflow-hidden rounded-2xl border-2 bg-bg-lighter p-3 dark:bg-bg-darker',
          {
            'pt-[calc(1.125rem+0.75rem)] sm:pt-[calc(1.375rem+0.75rem)]':
              !!title
          },
          className
        )}
        variants={fadeIn('down', 'tween', 25, 0.25 * (i + 1), 0.75)}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler as any}
      >
        {children}
      </motion.section>
      {!!title && (
        <h3
          className={cn(
            'z-10 mx-3 flex h-9 w-fit translate-y-[1.125rem] items-center justify-center gap-1 rounded-xl border-2 bg-secondary px-4 text-base font-medium capitalize tracking-wide text-text-black outline-none dark:bg-primary dark:text-text-white sm:h-11 sm:translate-y-[1.375rem] md:text-lg',
            titleClassName
          )}
        >
          {title}
        </h3>
      )}
    </div>
  )
}

export default Card
