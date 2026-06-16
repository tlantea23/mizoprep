import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

// CORS headers hi a pawimawh ber
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Preflight request handle na
export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders })
}

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

    // Hei hi thlak danglam: corsHeaders belh
    return NextResponse.json(order, { 
      status: 200,
      headers: corsHeaders 
    })
    
  } catch (err: any) {
    console.error('API Route Error:', err)
    // Error ah pawh corsHeaders belh
    return NextResponse.json({ error: err.message }, { 
      status: 500,
      headers: corsHeaders
    })
  }
}