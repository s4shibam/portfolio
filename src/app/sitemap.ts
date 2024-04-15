import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

import { NAV_ITEMS } from '@/constants/nav-items'
import { APP_URL } from '@/constants/others'
import { MAJOR_PROJECTS, MINOR_PROJECTS } from '@/constants/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers()
  let domain = headersList.get('host') as string

  if (domain.startsWith('localhost')) {
    domain = APP_URL?.replace('https://', '')
  }

  const navLinks = NAV_ITEMS.map((item) => {
    return { url: `https://${domain}${item.link}`, lastModified: new Date() }
  })

  const projectLinks = MAJOR_PROJECTS.concat(MINOR_PROJECTS).map((project) => {
    return {
      url: `https://${domain}/projects/${project.id}`,
      lastModified: new Date()
    }
  })

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date()
    },
    ...navLinks,
    ...projectLinks
  ]
}
