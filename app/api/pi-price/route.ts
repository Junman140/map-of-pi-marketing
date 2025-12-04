import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function GET() {
  try {
    const response = await fetch('https://www.zyrachain.org/data/pi-price', {
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('API response not OK:', response.status, response.statusText)
      return NextResponse.json(
        { error: `Failed to fetch price data: ${response.status}` },
        { status: response.status }
      )
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Non-JSON response:', text.substring(0, 200))
      return NextResponse.json(
        { error: 'Invalid response format' },
        { status: 500 }
      )
    }

    const data = await response.json()
    console.log('Pi Price API raw response:', JSON.stringify(data, null, 2))
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Error fetching Pi price:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

