import { NextResponse } from "next/server"
import crypto from "crypto"
import { db } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"

export async function POST(req: Request) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      userId
    } = await req.json()

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex")

    if (expected !== razorpay_signature) {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    const expiry = new Date()
    expiry.setMonth(expiry.getMonth() + 6)

    await setDoc(doc(db, "users", userId), {
      premium: true,
      expiryDate: expiry.toISOString()
    })

    return NextResponse.json({ success: true })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}