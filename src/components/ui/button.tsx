'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

import { fadeIn } from '@/animation/framer'
import { cn } from '@/utils/functions'

type TButton = {
  children?: ReactNode
  icon?: string
  type?: 'button' | 'reset' | 'submit'
  disabled?: boolean
  className?: string
  wrapperClassName?: string
  target?: string
  download?: boolean
  link?: HTMLAttributeAnchorTarget
  onClick?: () => void
}

const DefaultButton = ({
  children,
  icon,
  type,
  disabled = false,
  className,
  wrapperClassName,
  onClick
}: TButton) => {
  return (
    <motion.button
      className={cn(
        "relative z-10 overflow-hidden rounded-2xl bg-white bg-gradient-to-br from-secondary to-primary/90 px-6 py-2 shadow-button before:absolute before:inset-0 before:z-10 before:rounded-2xl before:bg-gradient-to-tl before:opacity-0 before:transition-opacity before:duration-700 before:ease-in-out before:content-[''] before:hover:opacity-100",
        wrapperClassName
      )}
      disabled={disabled}
      type={type || 'button'}
      variants={fadeIn('down', 'tween', 25, 0.25, 0.5)}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <div
        className={cn(
          'relative z-10 flex items-center justify-center gap-2 text-lg font-medium normal-case tracking-wide text-text-black md:text-xl',
          className
        )}
        id="stick-item"
      >
        {children}
        {icon && <i className={`bx ${icon} text-2xl md:text-3xl`} />}
      </div>
    </motion.button>
  )
}

const Button = ({
  children,
  icon,
  type,
  target,
  disabled,
  download,
  className,
  wrapperClassName,
  link = '',
  onClick = () => {}
}: TButton) => {
  if (link) {
    // Link Button
    return (
      <Link
        className="block w-fit"
        download={download}
        href={link}
        target={target}
      >
        <DefaultButton
          className={className}
          icon={icon}
          wrapperClassName={wrapperClassName}
          onClick={onClick}
        >
          {children}
        </DefaultButton>
      </Link>
    )
  } else {
    // Click Button
    return (
      <DefaultButton
        className={className}
        disabled={disabled}
        icon={icon}
        type={type}
        wrapperClassName={wrapperClassName}
        onClick={onClick}
      >
        {children}
      </DefaultButton>
    )
  }
}

export default Button
