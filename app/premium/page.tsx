'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Browser } from '@capacitor/browser'
import { CapacitorHttp } from '@capacitor/core'

export default function PremiumPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuyPro = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await CapacitorHttp.post({
        url: 'https://mizoprep.vercel.app/api/razorpay', // ← / paih
        headers: { 'Content-Type': 'application/json' },
        data: {} // Server ah amount fix tawh, send kher a ngai lo
      })
      
      const data = response.data

      // CapacitorHttp ah status 200-299 hi success
      if (response.status < 200 || response.status >= 300) {
        throw new Error(data.error || `Payment failed: ${response.status}`)
      }

      if (data.url) {
        await Browser.open({ url: data.url })
      } else {
        throw new Error('Payment link not received from server')
      }
      
    } catch (error: any) {
      console.error('Payment Error:', error)
      setError(error.message || 'Payment failed. Internet check la, try leh rawh.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      <div className="max-w-md mx-auto pt-8">
        <button onClick={() => router.back()} className="text-blue-600 font-semibold mb-4">← Back</button>
        
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="text-4xl mb-3">💎</div>
          <h1 className="text-3xl font-bold mb-2">MizoPrep Pro</h1>
          <p className="text-white/90 mb-4">Unlock everything for 6 months</p>
          
          <div className="bg-white/20 backdrop-blur rounded-xl p-4 mb-4">
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">₹100</span>
              <span className="text-white/80 ml-2">/ 6 months</span>
            </div>
            <p className="text-sm text-center text-white/90">≈ ₹17/month only</p>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>All 8 Subjects - 64 Chapters unlocked</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Full Mock Test 200 Questions</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Current Affairs Monthly Updates</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Mizo + English Toggle</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>No Ads, Priority Support</span>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-300 rounded-lg p-3 mb-4 text-sm">
              {error}
            </div>
          )}

          <button 
            onClick={handleBuyPro}
            disabled={loading}
            className="w-full bg-white text-orange-600 py-4 rounded-xl font-bold text-lg active:scale-95 disabled:opacity-50 transition"
          >
            {loading ? 'Opening Payment...' : 'Get Pro - ₹100'}
          </button>
          
          <p className="text-xs text-center mt-4 text-white/70">
            Secure payment via Razorpay & UPI
          </p>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">📱 After Payment</h3>
          <p className="text-sm text-blue-800">
            Your Pro access will activate instantly. Valid till {new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})}
          </p>
        </div>
      </div>
    </div>
  )
}