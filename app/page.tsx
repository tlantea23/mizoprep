'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob'
import { Capacitor } from '@capacitor/core'

export default function Home() {
  const [isPro, setIsPro] = useState(false)
  const [loading, setLoading] = useState(true)

  const subjects = [
    { name: 'Indian Polity', icon: '🏛️', href: '/polity' },
    { name: 'History', icon: '📜', href: '/history' },
    { name: 'Geography', icon: '🌍', href: '/geography' },
    { name: 'Economics', icon: '💰', href: '/economics' },
    { name: 'Mizoram GK', icon: '🏞️', href: '/mizoram-gk' },
    { name: 'Current Affairs', icon: '📰', href: '/current-affairs' },
    { name: 'English', icon: '📖', href: '/english' }, 
    { name: 'General Science', icon: '🔬', href: '/general-science' },
    { name: 'Mock Test', icon: '✍️', href: '/mock-test' },
  ]

  useEffect(() => {
    const proStatus = localStorage.getItem('mizoprep_pro')
    const expiry = Number(localStorage.getItem('mizoprep_pro_expiry'))
    
    if (proStatus === 'true' && Date.now() < expiry) {
      setIsPro(true)
    } else {
      setIsPro(false)
      localStorage.removeItem('mizoprep_pro')
      localStorage.removeItem('mizoprep_pro_expiry')
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loading || isPro) return
    
    const showBannerAd = async () => {
      if (Capacitor.getPlatform() !== 'android' || !Capacitor.isPluginAvailable('AdMob')) {
        return
      }

      try {
        await AdMob.initialize({
          initializeForTesting: false
        })
        
        setTimeout(async () => {
          const options: BannerAdOptions = {
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
          }
          
          await AdMob.showBanner(options)
        }, 1000)

      } catch (error) {
        console.log('AdMob Error:', error)
      }
    }

    showBannerAd()
  }, [isPro, loading])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 p-3 ${isPro ? 'pb-4' : 'pb-18'}`}>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-700">MizoPrep</h1>
              <p className="text-sm text-gray-600 mt-1">MPSC Exam Prep in Mizo</p>
            </div>
            {isPro && (
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                PRO ✓
              </div>
            )}
          </div>
        </div>

        {/* Pro Banner - ₹100 chiah */}
        {!isPro && (
          <Link href="/premium">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-3 mb-4 text-white active:scale-95 transition-transform shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🔥</span>
                    <h2 className="font-bold text-lg">MizoPrep Pro</h2>
                  </div>
                  <p className="text-xs opacity-90">Ads zawng zawng remove + Priority Support</p>
                </div>
                <div className="bg-white text-orange-600 px-3 py-1 rounded-full font-bold text-sm">₹100</div>
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-2 gap-2">
          {subjects.map((subject) => (
            <Link 
              key={subject.name} 
              href={subject.href}
              className="bg-white p-3 rounded-xl shadow-sm border border-red-90 active:scale-90 transition-transform"
            >
              <div className="text-2xl mb-2">{subject.icon}</div>
              <p className="font-semibold text-sm text-gray-700 leading-tight">{subject.name}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">Made with ❤️ for MPSC Aspirants</p>
        </div>
      </div>
    </div>
  )
}