import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { headers } from 'next/headers'
import { ReactNode } from 'react'

import './globals.css'
import OG_IMAGE from '@/assets/og-image.png'
import { METADATA } from '@/constants/meta'
import { APP_URL } from '@/constants/others'
import { colors } from '@/lib/theme'
import LayoutProvider from '@/providers/layout-provider'
import { getProjectDetails } from '@/utils/functions'
import GoogleAnalytics from 'components/analytics/google-analytics'

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: false
})

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: METADATA.title,
    description: METADATA.description,
    keywords: METADATA.keywords,
    metadataBase: new URL(APP_URL),
    openGraph: {
      images: [
        {
          url: OG_IMAGE.src,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: 'Shibam Saha'
        }
      ]
    }
  }
  const pathname = new URL(headers().get('x-request-url')!).pathname

  const title =
    'Shibam Saha' +
    pathname
      .split('/')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' > ')

  if (pathname !== '/') {
    metadata.title = title
  }

  if (pathname.startsWith('/projects/')) {
    const projectId = pathname.split('/').pop()
    const projectDetails = getProjectDetails(projectId)
    metadata.description = projectDetails?.summary

    if (metadata.openGraph) {
      metadata.openGraph.images = [
        {
          url: projectDetails?.image?.src,
          width: projectDetails?.image?.width,
          height: projectDetails?.image?.height,
          alt: projectDetails?.title
        }
      ]
    }
  }

  return metadata
}

export const viewport: Viewport = {
  themeColor: colors.primary
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GoogleAnalytics />
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}

export default RootLayout
