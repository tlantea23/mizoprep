import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST() {
  try {
    const paymentLink = await razorpay.paymentLink.create({
      amount: 20000, // ₹200
      currency: "INR",
      description: "MizoPrep Pro - 6 Months",
      customer: {
        name: "MizoPrep User",
        email: "user@mizoprep.com"
      },
      notify: {
        sms: true,
        email: true
      },
      callback_url: "https://mizoprep.vercel.app/premium/success",
      callback_method: "get"
    });

    return NextResponse.json({ url: paymentLink.short_url });
    
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}