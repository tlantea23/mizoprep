'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    // 1. Premium activate nghal
    localStorage.setItem('isPro', 'true')
    localStorage.setItem('proActivatedDate', new Date().toISOString())

    // 2. 3 second hnuah Home ah auto redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/')
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
      fontFamily: 'Montserrat, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{fontSize: '80px', marginBottom: '20px'}}>✓</div>
      <h1 style={{fontSize: '32px', marginBottom: '10px'}}>Payment Successful</h1>
      <p style={{fontSize: '18px', opacity: 0.9, marginBottom: '5px'}}>Premium i activate fel e!</p>
      <p style={{marginBottom: '10px'}}>MizoPrep lo hmang tangkai zel rawh</p>
      <p style={{marginBottom: '40px', opacity: 0.8, fontSize: '14px'}}>
        Redirecting to Home in {countdown}s...
      </p>

      <button
        onClick={() => router.push('/')}
        style={{
          backgroundColor: 'white',
          color: '#7C3AED',
          border: 'none',
          padding: '14px 32px',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      >
        Go to Home Now
      </button>
    </div>
  )
}