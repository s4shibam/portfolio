'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

import { pageTransition } from '@/animation/framer'
import FocusLight from '@/common/focus-light'
import NavBar from '@/common/nav-bar'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <ThemeProvider attribute="class">
      <motion.main
        animate="animate"
        className="relative mx-auto size-full max-w-portfolio pt-9 md:pt-36"
        exit="exit"
        initial="initial"
        variants={pageTransition}
      >
        <FocusLight />

        <NavBar />

        {children}

        {pathname !== '/' && <p className="h-20 md:h-10" />}
      </motion.main>
    </ThemeProvider>
  )
}

export default LayoutProvider
