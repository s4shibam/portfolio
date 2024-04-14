import { motion } from 'framer-motion'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TIconListProps = {
  animation?: boolean
  data: string[]
  boxIcon?: string
  className?: string
  iconClassName?: string
  wrapperClassName?: string
}

const IconList = ({
  animation = false,
  data,
  boxIcon = 'bx-chevrons-right',
  className,
  iconClassName,
  wrapperClassName
}: TIconListProps) => {
  return (
    <ul className={cn('flex flex-col gap-1.5', wrapperClassName)}>
      {data?.map((point, i) => (
        <motion.li
          key={i}
          className={cn('flex list-none items-start gap-2', className)}
          variants={
            animation ? fadeIn('down', 'tween', 50, 0.25 * (i + 1), 0.25) : {}
          }
        >
          <i
            className={cn(
              'bx bx-sm pt-0.5 text-primary dark:text-secondary',
              boxIcon,
              iconClassName
            )}
          />
          <p className="leading-6">{point}</p>
        </motion.li>
      ))}
    </ul>
  )
}

export default IconList
