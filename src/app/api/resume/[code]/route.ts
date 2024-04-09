import { NextResponse } from 'next/server'

import { supabase } from '@/utils/supabase'

export async function GET(
  req: Request,
  { params }: { params: { code: string } }
) {
  try {
    const { data: resume, error } = await supabase
      .from('resume_links')
      .select('*')
      .eq('code', params.code)
      .single()

    if (error) {
      return NextResponse.json({ error: 'Resume not found!' }, { status: 404 })
    }

    return NextResponse.json(resume)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error!' },
      { status: 500 }
    )
  }
}
