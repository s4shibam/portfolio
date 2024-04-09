import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

import { fadeIn } from '@/animation/framer'
import { colors } from '@/lib/theme'
import { cn } from '@/utils/functions'

type TAnimatedBorder = {
  className?: string
  wrapperClassName?: string
  children: ReactNode
}

const AnimatedBorderCard = ({
  className,
  wrapperClassName,
  children
}: TAnimatedBorder) => {
  const { theme } = useTheme()
  const midColor = theme === 'dark' ? colors.bg.dark : colors.bg.lighter

  return (
    <motion.div
      className={cn(
        'group relative grid place-items-center overflow-hidden rounded-3xl p-1 drop-shadow-lg',
        wrapperClassName
      )}
      variants={fadeIn('down', 'tween', 25, 0.2, 0.7)}
    >
      <div
        className={cn('z-10 w-full overflow-hidden rounded-[20px]', className)}
      >
        {children}
      </div>
      <div
        className="group-hover:animate-pause absolute size-[110vw] animate-[spin_20s_linear_infinite]"
        style={{
          background: `conic-gradient(${colors.primary} 0deg 160deg, ${midColor} 160deg 180deg, 
                        ${colors.secondary} 180deg 340deg, ${midColor} 340deg 360deg)`
        }}
      />
    </motion.div>
  )
}

export default AnimatedBorderCard
