import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const options = {
      amount: 10000, // ₹100
      currency: "INR",
      receipt: "mizoprep_" + Date.now(),
    }

    const auth = Buffer.from(
      process.env.RAZORPAY_KEY_ID + ':' + process.env.RAZORPAY_KEY_SECRET
    ).toString('base64')

    const response = await fetch('https://api.razorpay.com/v1/payment_links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify({
        amount: options.amount,
        currency: options.currency,
        description: "MizoPrep Pro - 6 Months",
        callback_url: "https://mizoprep.vercel.app/pro-success",
        callback_method: "get"
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.log('Razorpay API Error:', data)
      return NextResponse.json(
        { error: data.error?.description || 'Razorpay failed' }, 
        { status: response.status }
      )
    }

    return NextResponse.json({ url: data.short_url })
    
  } catch (error: any) {
    console.log('Server Error:', error.message)
    return NextResponse.json(
      { error: 'Server error: ' + error.message }, 
      { status: 500 }
    )
  }
}