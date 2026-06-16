'use client'
import { CapacitorHttp } from '@capacitor/core'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    Razorpay: any;
    Capacitor: any;
  }
}

export default function PremiumPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setRazorpayLoaded(true)
    document.body.appendChild(script)
  }, [])

  const handleBuyPro = async () => {
    if (!razorpayLoaded) {
      setError('Payment gateway loading. Wait 2 seconds and try again.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const isCapacitor = typeof window !== 'undefined' && window.Capacitor
      const apiUrl = isCapacitor 
        ? 'https://mizoprep.vercel.app/api/razorpay'
        : '/api/razorpay'

      const response = await CapacitorHttp.post({
        url: apiUrl,
        headers: { 'Content-Type': 'application/json' },
        data: { 
          amount: 10000, // ₹100
          userId: 'guest_' + Date.now() // Supabase a awm loh chuan hetiang hi
        },
      })

      const order = response.data
      
      if (response.status !== 200 || !order.id) {
        throw new Error(order.error || `API Error: ${response.status}`)
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'MizoPrep Pro',
        description: 'Pro Membership - 6 Months',
        order_id: order.id,
        handler: function (response: any) {
          console.log('Payment Success:', response)
          alert('Payment Success! ID: ' + response.razorpay_payment_id)
          // Hetah hian i user database update logic dah tur
          // Eg: fetch('/api/activate-pro', { method: 'POST', body: JSON.stringify(response) })
        },
        prefill: {
          name: 'Guest User',
          email: 'guest@mizoprep.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
        modal: {
          ondismiss: function() {
            setLoading(false)
          }
        }
      }

      const rzp = new window.Razorpay(options)
      rzp.on('payment.failed', function (response: any) {
        setError(`Payment Failed: ${response.error.description}`)
        setLoading(false)
      })
      rzp.open()

    } catch (error: any) {
      console.error('Full Error:', error)
      alert(`Error Name: ${error.name}\nMessage: ${error.message}`) 
      setError(`Debug: ${error.message}`)
      setLoading(false)
    }
  }

  return (
    <div className="p-4 bg-gradient-to-b from-orange-500 to-red-600 min-h-screen text-white">
      <button onClick={() => router.back()} className="mb-4 font-semibold">← Back</button>
      
      <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
        <div className="text-5xl mb-2">💎</div>
        <h1 className="text-2xl font-bold">MizoPrep Pro</h1>
        <p className="opacity-90">Unlock everything for 6 months</p>
        <h2 className="text-4xl font-bold my-4">₹100 <span className="text-lg font-normal">/6 months</span></h2>
        
        <div className="my-6 space-y-3 text-left">
          <p className="flex items-center gap-2">✓ Full Mock Test 200 Questions</p>
          <p className="flex items-center gap-2">✓ Current Affairs Monthly Updates</p>
          <p className="flex items-center gap-2">✓ Mizo + English Toggle</p>
          <p className="flex items-center gap-2">✓ No Ads, Priority Support</p>
        </div>
        
        {error && <p className="text-yellow-300 bg-black/20 p-3 rounded my-4 break-words text-sm">{error}</p>}
        
        <button
          onClick={handleBuyPro}
          disabled={loading || !razorpayLoaded}
          className="bg-white text-orange-600 font-bold p-4 rounded-lg w-full disabled:bg-gray-300 disabled:text-gray-500 transition-all"
        >
          {loading ? 'Opening Payment...' : razorpayLoaded ? 'Buy Pro Now' : 'Loading Gateway...'}
        </button>
        
        <p className="text-xs text-center mt-4 opacity-70">Secure payment via Razorpay & UPI</p>
      </div>
    </div>
  )
}