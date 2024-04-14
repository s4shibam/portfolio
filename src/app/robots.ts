import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function robots(): MetadataRoute.Robots {
  const headersList = headers()
  const domain = headersList.get('host') as string

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/_next/', '/api/']
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/_next/', '/api/']
      }
    ],
    sitemap: `https://${domain}/sitemap.xml`
  }
}
