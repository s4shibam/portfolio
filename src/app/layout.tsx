import { Outfit } from 'next/font/google'
import { ReactNode } from 'react'

import { METADATA } from '@/constants/meta'
import LayoutProvider from '@/providers/layout-provider'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = METADATA

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}

export default RootLayout
