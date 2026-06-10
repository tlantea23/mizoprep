import Link from 'next/link'

export default function Home() {
  const subjects = [
    { name: 'Indian Polity', icon: '🏛️', href: '/polity' },
    { name: 'History', icon: '📜', href: '/history' },
    { name: 'Geography', icon: '🌍', href: '/geography' },
    { name: 'Economics', icon: '💰', href: '/economics' },
    { name: 'Mizoram GK', icon: '🏞️', href: '/mizoram-gk' },
    { name: 'Science-tech', icon: '🔬', href: '/science-tech' },
    { name: 'Current Affairs', icon: '📰', href: '/current-affairs' },
    { name: 'English', icon: '📖', href: '/english' }, 
    { name: 'Science', icon: '🔬', href: '/science' },
    { name: 'Mock Test', icon: '✍️', href: '/mock-test' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-red-700">MizoPrep</h1>
          <p className="text-sm text-gray-600 mt-1">MPSC Exam Prep in Mizo</p>
        </div>

        {/* Pro Banner - Mock test dah tawh lo */}
        <Link href="/premium">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 mb-6 text-white active:scale-95 transition-transform shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🔥</span>
                  <h2 className="font-bold text-lg">MizoPrep Pro</h2>
                </div>
                <p className="text-xs opacity-90">Subjects Notes kimchang Mizo tawngin</p>
              </div>
              <div className="bg-white text-orange-600 px-3 py-1 rounded-full font-bold text-sm">₹100</div>
            </div>
          </div>
        </Link>

        {/* Subject Grid */}
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((subject) => (
            <Link 
              key={subject.name} 
              href={subject.href}
              className="bg-white p-4 rounded-xl shadow-sm border border-red-100 active:scale-95 transition-transform"
            >
              <div className="text-2xl mb-2">{subject.icon}</div>
              <p className="font-semibold text-sm text-gray-800 leading-tight">{subject.name}</p>
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