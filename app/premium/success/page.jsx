'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)
  const [saved, setSaved] = useState(false)
  const [expiryTime, setExpiryTime] = useState(0)

  useEffect(() => {
    // 1. Expiry calculate
    const expiry = Date.now() + 15552000000 // thla 6
    setExpiryTime(expiry)

    // 2. LocalStorage ah save phawt
    localStorage.setItem('mizoprep_pro', 'true')
    localStorage.setItem('mizoprep_pro_expiry', expiry.toString())

    // 3. Save dik em check
    const check = localStorage.getItem('mizoprep_pro')
    if (check === 'true') {
      setSaved(true)
      console.log('✅ Pro save success:', check, expiry)
    } else {
      console.log('❌ Pro save failed')
      alert('Pro save a fail. Phone storage full emaw?')
      return
    }

    // 4. 3 second hnuah redirect - URL PARAM TELH TAWH
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // HEI HI A PAWIMAWH - ?pro=true&expiry=... TELH RAWH
          router.replace(`/mock-test?pro=true&expiry=${expiry}`)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #7C3AED, #1E1B4B)',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{fontSize: '80px', marginBottom: '20px'}}>
        {saved? '✓' : '⏳'}
      </div>
      <h1 style={{fontSize: '32px', marginBottom: '10px'}}>
        {saved? 'Payment Successful' : 'Activating...'}
      </h1>
      <p style={{fontSize: '18px', marginBottom: '40px'}}>
        {saved? 'Premium activate fel e!' : 'LocalStorage save mek...'}
      </p>
      {saved && (
        <>
          <p style={{opacity: 0.8, fontSize: '14px', marginBottom: '20px'}}>
            Redirecting in {countdown}s...
          </p>
          <button
            onClick={() => router.replace(`/mock-test?pro=true&expiry=${expiryTime}`)}
            style={{
              backgroundColor: 'white',
              color: '#7C3AED',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Go to Mock Test Now
          </button>
        </>
      )}
    </div>
  )
}