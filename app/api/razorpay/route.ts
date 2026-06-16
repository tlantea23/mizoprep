import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, userId } = body

    console.log('Creating order for user:', userId, 'Amount:', amount)

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    })

    const options = {
      amount: amount, // 10000 = ₹100
      currency: 'INR',
      receipt: `receipt_${userId}_${Date.now()}`,
    }

    const order = await razorpay.orders.create(options)
    console.log('Order created:', order.id)

    return NextResponse.json(order)
  } catch (err: any) {
    console.error('API Route Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}