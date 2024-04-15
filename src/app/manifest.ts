import { MetadataRoute } from 'next'

import { METADATA } from '@/constants/meta'
import { colors } from '@/lib/theme'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: METADATA.title as string,
    short_name: METADATA.title as string,
    description: METADATA.description as string,
    start_url: '/',
    display: 'standalone',
    background_color: colors.bg.light,
    theme_color: colors.primary,
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
