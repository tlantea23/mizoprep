import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(request: Request) {
  try {
    const { amount, userId } = await request.json()
    
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const options = {
      amount: amount,
      currency: 'INR',
      receipt: `receipt_${userId}_${Date.now()}`,
    }

    const order = await razorpay.orders.create(options)
    return NextResponse.json(order)
    
  } catch (error: any) {
    console.error('Razorpay Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}