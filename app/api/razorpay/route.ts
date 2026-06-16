import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export const runtime = 'nodejs'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, userId } = body

    if (!amount || !userId) {
      return NextResponse.json(
        { error: 'Missing amount or userId' }, 
        { status: 400, headers: corsHeaders }
      )
    }

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      console.error('Razorpay Keys Missing in Vercel Env')
      return NextResponse.json(
        { error: 'Server Config Error: Razorpay keys not found' }, 
        { status: 500, headers: corsHeaders }
      )
    }

    console.log('Creating order for user:', userId, 'Amount:', amount)

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

    const options = {
      amount: amount, // 10000 = ₹100 paise
      currency: 'INR',
      receipt: Date.now().toString(), // Char 13 chiah, limit pel lo
      notes: {
        userId: userId
      }
    }

    const order = await razorpay.orders.create(options)
    console.log('Order created:', order.id)

    return NextResponse.json(order, { 
      status: 200,
      headers: corsHeaders 
    })
    
  } catch (err: any) {
    console.error('API Route Error:', err)
    const errorMessage = err.error?.description || err.message || 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { 
      status: 500,
      headers: corsHeaders
    })
  }
}