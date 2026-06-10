import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const order = await razorpay.orders.create({
      amount: 10000, // ₹100 = 10000 paise
      currency: 'INR',
      receipt: 'mizoprep_' + Date.now(),
    })
    return NextResponse.json(order)
  } catch (err) {
    return NextResponse.json({ error: 'Order create failed' }, { status: 500 })
  }
}