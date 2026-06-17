'use client'

import { useState } from 'react'

declare global {
  interface Window {
    Razorpay: any
  }
}

const RAZORPAY_KEY = "rzp_test_xxxxx"

export default function PremiumPage() {
  const [loading, setLoading] = useState(false)

  const buy = async () => {
    setLoading(true)

    const res = await fetch('/api/razorpay', {
      method: 'POST',
      body: JSON.stringify({ amount: 100, userId: 'guest1' })
    })

    const order = await res.json()

    const options = {
      key: RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      handler: async (response: any) => {
        await fetch('/api/verify-payment', {
          method: 'POST',
          body: JSON.stringify({
            ...response,
            userId: 'guest1'
          })
        })

        alert("Payment Success 🎉")
        setLoading(false)
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div className="p-6">
      <h1>💎 Pro Plan ₹100</h1>

      <button
        onClick={buy}
        disabled={loading}
        className="bg-blue-600 text-white p-3 rounded"
      >
        {loading ? "Processing..." : "Buy Pro"}
      </button>
    </div>
  )
}