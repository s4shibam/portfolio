'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { FC } from 'react'

import { slideIn } from '@/animation/framer'
import { NAV_ITEMS } from '@/constants/nav-items'
import DARK_MODE from '@/icons/dark-mode.svg'
import LIGHT_MODE from '@/icons/light-mode.svg'
import LOGO from '@/icons/logo.svg'
import { cn } from '@/utils/functions'

interface NavItemProps {
  text: string
  boxIcon?: string
  link: string
}

const NavBar: FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-bg-light/50 p-4 backdrop-blur-2xl dark:bg-bg-darker/50 md:bottom-auto md:top-px md:p-8">
      <motion.div
        className="mx-auto flex h-11 max-w-portfolio items-center justify-between gap-4 sm:gap-10"
        variants={slideIn('up', 'tween', 50, 0.01, 0.5)}
      >
        <HomeButton className="hidden md:block" />
        <nav className="mx-auto my-2 flex size-full items-center justify-between rounded-full bg-bg-lighter px-2 drop-shadow-md dark:bg-bg-dark md:w-fit md:px-4">
          <HomeButton className="mr-2 block md:hidden" />
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.title}
              boxIcon={item.boxIcon}
              link={item.link}
              text={item.title}
            />
          ))}
          <ToggleTheme className="ml-2 block md:hidden" />
        </nav>
        <ToggleTheme className="hidden md:block" />
      </motion.div>
    </div>
  )
}

export default NavBar

// Components
const NavItem = ({ text, boxIcon, link }: NavItemProps) => {
  // Check if the current route matches the link
  const isActiveLink = usePathname() === link

  return (
    <Link
      className={cn(
        'group relative flex h-full items-center justify-center px-3 md:px-3.5',
        {
          'text-primary drop-shadow-md dark:text-secondary': isActiveLink
        }
      )}
      href={link}
      id={link}
    >
      <i
        className={`bx ${boxIcon} text-2xl transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:hidden`}
      />
      <p className="hidden text-lg font-semibold tracking-wider transition-colors duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-secondary md:block">
        {text}
      </p>
      {isActiveLink && (
        <span className="absolute bottom-0 left-3 h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 group-hover:opacity-50 dark:via-secondary" />
      )}
    </Link>
  )
}

const HomeButton = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn(
        'grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary p-1 md:size-11',
        className
      )}
      href="/"
    >
      <Image alt="" className="size-full" src={LOGO} />
    </Link>
  )
}

const ToggleTheme = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return (
    <button
      className={cn(
        'grid size-8 place-items-center rounded-full bg-gradient-to-bl from-primary to-secondary p-2 md:size-11',
        className
      )}
      onClick={toggleTheme}
    >
      <Image
        alt=""
        className="size-full invert"
        src={theme === 'light' ? DARK_MODE : LIGHT_MODE}
      />
    </button>
  )
}
