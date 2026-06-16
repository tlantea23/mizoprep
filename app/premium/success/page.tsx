'use client'

import { useRouter } from 'next/navigation'

export default function PremiumSuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-green-50 p-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">MizoPrep Pro i nei ta e.</p>
        
        <button
          onClick={() => router.push('/')}
          className="bg-green-600 text-white font-bold p-4 rounded-lg w-full"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}