import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(req: Request) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const paymentLink = await razorpay.paymentLink.create({
      amount: 20000, // ₹200 paise in
      currency: "INR",
      description: "MizoPrep Pro - 6 months",
      customer: {
        name: "MizoPrep User",
        email: "user@mizoprep.app"
      },
      notify: {
        sms: false,
        email: false
      },
      callback_url: "https://mizoprep.vercel.app/premium/success",
      callback_method: "get"
    })

    return NextResponse.json({ 
      url: paymentLink.short_url,
      id: paymentLink.id 
    })
    
  } catch (error: any) {
    console.error('Razorpay Error:', error)
    return NextResponse.json(
      { error: error.message || 'Payment link creation failed' },
      { status: 500 }
    )
  }
}