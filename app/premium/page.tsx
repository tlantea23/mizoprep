'use client'
import { useRouter } from 'next/navigation'

export default function PremiumPage() {
  const router = useRouter()

  const handleBuyPro = () => {
    // Razorpay integrate hnuah
    localStorage.setItem('mizoprep_pro', 'true')
    alert('Pro activate! Chapter zawng zawng a in hawng e')
    router.push('/')
  }

  const handleBuyMock = () => {
    // Razorpay integrate hnuah  
    localStorage.setItem('mizoprep_mock', 'true')
    alert('Mock Test activate! Question 500 i chhang thei e')
    router.push('/mock-test')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <button onClick={() => router.push('/')} className="text-blue-600 font-semibold mb-4">← Haw</button>
        
        <h1 className="text-3xl font-bold text-center mb-2">MizoPrep Premium</h1>
        <p className="text-center text-gray-600 mb-8">I duh zawk thlang rawh</p>

        {/* Option 1: Pro - Notes chauh */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4 border-2 border-orange-500">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-bold text-orange-600">🔥 Pro Notes</h2>
              <p className="text-sm text-gray-600">Chapter zawng zawng</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">₹100</p>
            </div>
          </div>
          <div className="space-y-1 text-sm mb-4">
            <p>✅ Subject 7 zawng zawng Notes kim</p>
            <p>✅ Mizo tawng explanation</p>
            <p>✅ Lifetime access</p>
            <p>❌ Mock Test tel lo</p>
          </div>
          <button 
            onClick={handleBuyPro}
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold active:scale-95"
          >
            Pro Nei Rawh ₹100
          </button>
        </div>

        {/* Option 2: Mock Test - Question 500 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-500">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-bold text-blue-600">✍️ Mock Test</h2>
              <p className="text-sm text-gray-600">Question 500 Bank</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">₹50</p>
            </div>
          </div>
          <div className="space-y-1 text-sm mb-4">
            <p>✅ Question 500 zawng zawng</p>
            <p>✅ Random 100 test unlimited</p>
            <p>✅ Subject-wise test</p>
            <p>✅ Chhanna Mizo tawngin</p>
          </div>
          <button 
            onClick={handleBuyMock}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold active:scale-95"
          >
            Mock Test Hawng ₹50
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-6">
          Pro lei pawn Mock Test a tel lo. A hrangin ₹50 in lei a ngai.
        </p>
      </div>
    </div>
  )
}