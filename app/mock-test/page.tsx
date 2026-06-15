'use client'
import { useState, useEffect } from 'react'
import { showInterstitial } from '@/lib/admob'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MockTestPage() {
  const [adLoading, setAdLoading] = useState(false)
  const router = useRouter()

  const startFullTest = async () => {
    setAdLoading(true)
    await showInterstitial() // Test tan hmain ad en phawt
    setAdLoading(false)
    router.push('/mock-test/full')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 pb-20">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-blue-600 font-semibold">← kir</Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">MPSC Mock Test</h1>

        {/* Full Mock Test 200 - FREE, Ad en a ngai */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-4 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔥</span>
            <div>
              <h2 className="font-bold text-xl">Full Mock Test 200</h2>
              <p className="text-sm opacity-90">200 Questions • All Subjects • 3hrs 20mins</p>
            </div>
          </div>

          <div className="bg-white/20 text-sm p-3 rounded mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">📺</span>
              <span className="font-semibold">Ad Support</span>
            </div>
            <p className="text-xs opacity-90">Test tan hmain ad i en ang. Question 10 dan zelah ad a lang bawk ang.</p>
          </div>

          <div className="bg-green-500/30 text-xs px-3 py-2 rounded mb-4 text-center font-bold">
            100% FREE • AD EN CHAUH NGAI
          </div>

          <button 
            onClick={startFullTest}
            disabled={adLoading}
            className="w-full bg-white text-blue-600 py-4 rounded-lg font-bold text-lg active:scale-95 disabled:opacity-70"
          >
            {adLoading ? 'Ad Loading...' : '▶️ Ad En La, Test Tan Rawh'}
          </button>
        </div>

        {/* Pro Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 text-white text-center">
          <div className="text-2xl mb-2">💎</div>
          <h3 className="font-bold text-lg mb-1">Ads Ning Em?</h3>
          <p className="text-xs opacity-90 mb-3">Pro ₹100 - Ads zawng zawng bo + Priority Support</p>
          <Link href="/premium">
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold active:scale-95">
              Pro Nei Rawh ₹100
            </button>
          </Link>
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">📝 Test Info</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• MPSC GS Paper pattern</li>
            <li>• Negative marking: -1/3</li>
            <li>• Auto-save progress</li>
            <li>• Detailed explanation tel</li>
          </ul>
        </div>
      </div>
    </div>
  )
}