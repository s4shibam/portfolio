import { NextResponse } from 'next/server'

import { supabase } from '@/utils/supabase'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const source = params.id.split('_').pop()
  const tableName = params.id.startsWith('r_') ? 'resume_links' : 'other_links'

  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('source', source)
      .single()

    if (error) {
      return NextResponse.json({ error: 'Invalid link!' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error!' },
      { status: 500 }
    )
  }
}
