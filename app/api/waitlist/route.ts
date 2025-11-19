import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email_address } = body

    if (!email_address) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    const clerkSecretKey = process.env.CLERK_SECRET_KEY

    if (!clerkSecretKey) {
      console.error('CLERK_SECRET_KEY is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Add entry to Clerk waitlist
    const response = await fetch('https://api.clerk.com/v1/waitlist_entries', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${clerkSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Clerk API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to save email', details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving email:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

