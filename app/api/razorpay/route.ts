import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(req: Request) {
  try {
    // 1. Razorpay instance hi hetah siam rawh
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!, // NEXT_PUBLIC tel lo
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const { amount } = await req.json()

    const order = await razorpay.orders.create({
      amount: amount, // 49900 paise = ₹499
      currency: 'INR',
      receipt: 'receipt_' + Date.now(),
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Order creation failed' },
      { status: 500 }
    )
  }
}