'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CapacitorHttp } from '@capacitor/core'
import { Browser } from '@capacitor/browser'

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PremiumPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuyPro = async () => {
    setLoading(true)
    setError('')

    try {
      // 1. Vercel API ko la, Order siam rawh
      const response = await CapacitorHttp.post({
        url: 'https://mizoprep.vercel.app/api/razorpay',
        headers: { 'Content-Type': 'application/json' },
        data: { amount: 10000 } // ₹100 = 10000 paise
      })

      console.log('Razorpay Response:', response)
      const data = response.data

      if (response.status !== 200) {
        throw new Error(data.error || `Server error: ${response.status}`)
      }

      // 2. Razorpay Checkout script load leh load loh check
      if (!(window as any).Razorpay) {
        await loadRazorpayScript()
      }

      // 3. Razorpay Popup hawng rawh - order_id hmangin
      const options = {
        key: 'rzp_test_xxxxxxxxxxxxxx', // ← I Razorpay Key ID tak dah rawh
        amount: data.amount, // API atanga lo kal
        currency: data.currency, // API atanga lo kal
        name: 'MizoPrep Premium',
        description: 'Pro Membership',
        order_id: data.id, // ← Hei hi a pawimawh ber
        handler: function (response: any) {
          // Payment hlawhtling
          console.log('Payment Success:', response)
          console.log('payment_id:', response.razorpay_payment_id)
          console.log('order_id:', response.razorpay_order_id)
          
          // Success page ah kal tir rawh
          router.push('/premium/success')
        },
        prefill: {
          name: 'User',
          email: 'user@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        },
        modal: {
          ondismiss: function() {
            console.log('Checkout closed')
            setLoading(false)
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      
      rzp.on('payment.failed', function (response: any){
        console.error('Payment Failed:', response.error)
        setError(response.error.description || 'Payment failed')
        setLoading(false)
      });

      rzp.open();

    } catch (error: any) {
      console.error('Payment Error:', error)
      setError(error.message || 'Payment failed. Internet check la, try leh rawh.')
    } finally {
      // Razorpay popup in a handle tawh, hetah dah kher lo
    }
  }

  // Razorpay script load na
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Go Premium</h1>
      <p className="mb-4">₹100 chauh in Pro features zawng zawng unlock rawh.</p>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <button
        onClick={handleBuyPro}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Buy Pro - ₹100'}
      </button>
    </div>
  )
}