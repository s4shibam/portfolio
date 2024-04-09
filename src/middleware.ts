import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-request-url', req.url)
  const options = {
    request: {
      headers: requestHeaders
    }
  }

  if (req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next(options)
  }

  const isRedirectableLink =
    req.nextUrl.pathname.startsWith('/_') ||
    req.nextUrl.pathname.startsWith('/r_')

  if (isRedirectableLink) {
    const id = req.nextUrl.pathname.split('/')?.pop()
    if (id) {
      const link = await (
        await fetch(new URL(`/api/link/${id}`, req.url))
      ).json()

      if (!link.error && link.destination?.startsWith('http')) {
        return NextResponse.redirect(new URL(link.destination))
      }
    }
  }

  return NextResponse.next(options)
}
