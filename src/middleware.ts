import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getHardExternalLinksToRedirect } from '@/utils/functions'

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/_')) {
    const hardLinks = getHardExternalLinksToRedirect()

    const redirect = hardLinks.find(
      (link) => req.nextUrl.pathname === link.source
    )

    if (redirect?.destination?.startsWith('http')) {
      return NextResponse.redirect(new URL(redirect.destination))
    }
  }

  if (req.nextUrl.pathname.startsWith('/r_')) {
    const resumeCode = req.nextUrl.pathname.split('/r_').pop()

    const resume = await (
      await fetch(new URL(`/api/resume/${resumeCode}`, req.url))
    ).json()

    if (!resume.error && resume.link?.startsWith('http')) {
      return NextResponse.redirect(new URL(resume.link))
    }
  }

  return NextResponse.next()
}
