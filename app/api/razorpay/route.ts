import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const paymentLink = await razorpay.paymentLink.create({
      amount: amount,
      currency: 'INR',
      description: 'MizoPrep Pro 6 Months',
      customer: {
        name: 'MizoPrep User',
        // contact field hi dah miah suh
        // email pawh dah loh a tha zawk tunah chuan
      },
      notify: { sms: false, email: false },
      reminder_enable: false,
      callback_url: 'https://mizoprep.vercel.app/payment-success',
      callback_method: 'get'
    })

    return NextResponse.json({ url: paymentLink.short_url })

  } catch (error: any) {
    console.error('Razorpay API Error:', error)
    return NextResponse.json(
      { error: 'Payment link creation failed', details: error.error?.description || error.message },
      { status: 500 }
    )
  }
}