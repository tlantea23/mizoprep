'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MOCK_QUESTIONS, Question } from './questions'

export default function MockTestPage() {
  const router = useRouter()
  const [isEnglish, setIsEnglish] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [proExpiry, setProExpiry] = useState<string | null>(null)
  const [showProModal, setShowProModal] = useState(false)

  const [mode, setMode] = useState<'list' | 'test' | 'result'>('list')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [showNavigator, setShowNavigator] = useState(false)
  const [marked, setMarked] = useState<boolean[]>([])
  const timerRef = useRef<ReturnType<typeof setTimeout> |null>(null)

  useEffect(() => {
    const proStatus = localStorage.getItem('mizoprep_pro')
    const expiry = localStorage.getItem('mizoprep_pro_expiry')

    if (proStatus === 'true' && expiry) {
      const expiryDate = new Date(expiry)
      if (expiryDate > new Date()) {
        setIsPro(true)
        setProExpiry(expiry)
      } else {
        localStorage.removeItem('mizoprep_pro')
        localStorage.removeItem('mizoprep_pro_expiry')
        setIsPro(false)
      }
    }
  }, [])

  useEffect(() => {
    if (mode === 'test' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev=>prev-1)
      },1000)
    } else if (mode === 'test' && timeLeft === 0 && questions.length > 0) {
      setMode('result')
    }
    return () => {
      if (timerRef.current)clearInterval(timerRef.current)
  }
  },)


  const getDaysLeft = () => {
    if (!proExpiry) return 0
    const days = Math.ceil((new Date(proExpiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return days > 0? days : 0
  }

  const checkProAccess = () => {
    if (!isPro) {
      setShowProModal(true)
      return false
    }
    return true
  }

  const startQuickTest = () => {
    if (!checkProAccess()) return

    const subjects = ['Polity', 'History', 'Geography', 'Economics', 'Science', 'Mizoram GK', 'Current Affairs']
    let quickQ: Question[] = []
    subjects.forEach(sub => {
      const subQ = MOCK_QUESTIONS.filter(q => q.subject === sub).sort(() => 0.5 - Math.random()).slice(0, 3)
      quickQ = [...quickQ,...subQ]
    })
    const q = quickQ.sort(() => 0.5 - Math.random()).slice(0, 20)
    setQuestions(q)
    setUserAnswers(Array(20).fill(null))
    setMarked(Array(20).fill(false))
    setTimeLeft(20 * 60)
    setMode('test')
    setCurrentQ(0)
    setSelected(null)
  }

  const startFullTest = () => {
    if (!checkProAccess()) return

    const subjects = ['Polity', 'History', 'Geography', 'Economics', 'Science', 'Mizoram GK', 'Current Affairs']
    let fullQ: Question[] = []
    subjects.forEach(sub => {
      const subQ = MOCK_QUESTIONS.filter(q => q.subject === sub).sort(() => 0.5 - Math.random()).slice(0, 29)
      fullQ = [...fullQ,...subQ]
    })
    const shuffled = fullQ.sort(() => 0.5 - Math.random()).slice(0, 200)
    setQuestions(shuffled)
    setUserAnswers(Array(200).fill(null))
    setMarked(Array(200).fill(false))
    setTimeLeft(200 * 60)
    setMode('test')
    setCurrentQ(0)
    setSelected(null)
  }

  const handleAnswer = (idx: number) => {
    setSelected(idx)
    const newAnswers = [...userAnswers]
    newAnswers[currentQ] = idx
    setUserAnswers(newAnswers)
  }

  const toggleMark = () => {
    const newMarked = [...marked]
    newMarked[currentQ] =!newMarked[currentQ]
    setMarked(newMarked)
  }

  const jumpToQuestion = (idx: number) => {
    setCurrentQ(idx)
    setSelected(userAnswers[idx])
    setShowNavigator(false)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      const next = currentQ + 1
      setCurrentQ(next)
      const setSelected='(number | null)[]'
      const userAnswers= 'number | null'
    } else {
      setMode('result')
    }
  }

  const prevQuestion = () => {
    if (currentQ > 0) {
      const prev = currentQ - 1
      setCurrentQ(prev)
      const setSelected='(number | null)[]'
      const userAnswers= 'number | null'
    }
  }

  const calculateScore = () => {
    return userAnswers.reduce((acc: number, ans, idx) => {
      return ans === questions[idx]?.answer? acc + 1 : acc
    }, 0)
  }

  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600)
    const m = Math.floor((sec % 3600) / 60)
    const s = sec % 60
    return h > 0? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` :
           `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const getStatusColor = (idx: number) => {
    if (userAnswers[idx]!== null) return 'bg-green-500 text-white'
    if (marked[idx]) return 'bg-yellow-500 text-white'
    if (idx === currentQ) return 'bg-blue-600 text-white'
    return 'bg-gray-300 text-gray-700'
  }

  const resetTest = () => {
    setMode('list')
    setCurrentQ(0)
    setUserAnswers([])
    setSelected(null)
    setTimeLeft(0)
    setQuestions([])
    setMarked([])
    if (timerRef.current)clearInterval(timerRef.current)
  }

  if (mode === 'result') {
    const score = calculateScore()
    const percentage = ((score / questions.length) * 100).toFixed(1)
    const attempted = userAnswers.filter(a => a!== null).length

    const subjectStats: {[key: string]: {total: number, correct: number}} = {}
    questions.forEach((q, idx) => {
      if (!subjectStats[q.subject]) subjectStats[q.subject] = {total: 0, correct: 0}
      subjectStats[q.subject].total++
      if (userAnswers[idx] === q.answer) subjectStats[q.subject].correct++
    })

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{score >= questions.length * 0.6? '🎉' : '📚'}</div>
            <h2 className="text-2xl font-bold mb-2">{isEnglish? 'Test Completed' : 'Test Zo Ta'}</h2>
            <p className="text-5xl font-bold text-blue-600 mb-1">{score}/{questions.length}</p>
            <p className="text-gray-600">{percentage}%</p>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{score}</p>
              <p className="text-xs text-gray-600">Correct</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-red-600">{attempted - score}</p>
              <p className="text-xs text-gray-600">Wrong</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-gray-600">{questions.length - attempted}</p>
              <p className="text-xs text-gray-600">Skipped</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
              <p className="text-xs text-gray-600">Score</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3">{isEnglish? 'Subject-wise Performance' : 'Subject Wise Performance'}</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(subjectStats).map(([sub, stat]) => (
                <div key={sub} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{sub}</span>
                    <span className="text-sm font-bold">{stat.correct}/{stat.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${(stat.correct/stat.total)*100 >= 60? 'bg-green-500' : 'bg-yellow-500'}`}
                         style={{width: `${(stat.correct/stat.total)*100}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={resetTest} className="w-full bg-gray-600 text-white py-3 rounded-lg font-bold">
            {isEnglish? 'Back to Test List' : 'Mock Test List'}
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'test') {
    const q = questions[currentQ]
    const answered = userAnswers.filter(a => a!== null).length

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <button onClick={resetTest} className="text-blue-600 font-semibold text-sm">← {isEnglish? 'Exit' : 'Chhuak'}</button>
              <div className={`font-mono text-lg font-bold ${timeLeft < 600? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
                ⏱ {formatTime(timeLeft)}
              </div>
              <div className="flex gap-1">
                <button onClick={() => setIsEnglish(false)} className={`px-2 py-1 rounded text-xs ${!isEnglish? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Mizo</button>
                <button onClick={() => setIsEnglish(true)} className={`px-2 py-1 rounded text-xs ${isEnglish? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Eng</button>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>{isEnglish? 'Question' : 'Zawhna'} {currentQ + 1}/{questions.length}</span>
              <button onClick={() => setShowNavigator(!showNavigator)} className="text-blue-600 font-semibold">
                {isEnglish? 'Navigator' : 'Navigator'} ☰
              </button>
              <span>{isEnglish? 'Attempted' : 'Chhan'}: {answered}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{width: `${((currentQ+1)/questions.length)*100}%`}} />
            </div>
          </div>

          {showNavigator && (
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="grid grid-cols-10 gap-1.5 max-h-64 overflow-y-auto">
                {questions.map((_, idx) => (
                  <button key={idx} onClick={() => jumpToQuestion(idx)} className={`h-7 rounded text-xs font-medium ${getStatusColor(idx)}`}>
                    {idx + 1}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-3 text-xs">
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded"></div>Answered</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded"></div>Marked</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-600 rounded"></div>Current</span>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">{q.subject}</span>
              <button onClick={toggleMark} className={`text-xs px-3 py-1 rounded font-semibold ${marked[currentQ]? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>
                {marked[currentQ]? (isEnglish? '★ Marked' : '★ Mark') : (isEnglish? '☆ Mark' : '☆ Mark')}
              </button>
            </div>

            <h2 className="text-lg font-bold mb-6">{isEnglish? q.questionEn : q.question}</h2>

            <div className="space-y-3 mb-6">
              {(isEnglish? q.optionsEn : q.options).map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selected === idx
                 ? 'border-blue-500 bg-blue-50 font-semibold'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>{opt}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevQuestion}
                disabled={currentQ === 0}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {isEnglish? 'Previous' : 'Hmasa'}
              </button>
              <button
                onClick={nextQuestion}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                {currentQ === questions.length - 1? (isEnglish? 'Submit' : 'Submit') : (isEnglish? 'Next' : 'Dawt Leh')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => router.push('/')} className="text-blue-600 font-semibold mb-4">← {isEnglish? 'Home' : 'kir'}</button>
        <h1 className="text-2xl font-bold mb-6">{isEnglish? 'MPSC Full Mock Test' : 'MPSC Full Mock Test'}</h1>

        {isPro && proExpiry && (
          <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4">
            <p className="text-sm text-green-800 font-semibold">
              ✓ Pro Active - {getDaysLeft()} days left
            </p>
            <p className="text-xs text-green-700">
              Expires: {new Date(proExpiry).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})}
            </p>
          </div>
        )}

        <div className={`rounded-xl p-6 mb-4 text-white shadow-lg ${
          isPro? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-gray-400 to-gray-500'
        }`}>
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-xl font-bold mb-1">🎯 {isEnglish? 'Quick Test' : 'Quick Test'}</h2>
              <p className="text-sm opacity-90">20 Questions • All Subjects • 20 Mins</p>
            </div>
            <span className={`px-3 py-1 rounded-full font-bold text-sm ${
              isPro? 'bg-white text-green-600' : 'bg-orange-500 text-white'
            }`}>
              {isPro? 'UNLOCKED' : 'PRO'}
            </span>
          </div>
          <button
            onClick={startQuickTest}
            className={`w-full py-3 rounded-lg font-bold active:scale-95 ${
              isPro? 'bg-white text-green-600' : 'bg-white/80 text-gray-600'
            }`}
          >
            {isPro? (isEnglish? 'Start Quick Test' : 'Quick Test Tan Rawh') : (isEnglish? '🔒 Pro Required' : '🔒 Pro Ngai')}
          </button>
        </div>

        <div className={`rounded-xl border-2 p-6 shadow-lg ${
          isPro? 'bg-white border-blue-500' : 'bg-gray-100 border-gray-300'
        }`}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-bold mb-1">🔥 {isEnglish? 'Full Mock Test 200' : 'Full Mock Test 200'}</h2>
              <p className="text-sm text-gray-600">200 Questions • All 7 Subjects • 3hrs 20mins</p>
              <p className="text-xs text-gray-500 mt-1">Polity, History, Geography, Economics, Mizoram GK, Science, Current Affairs</p>
            </div>
            <span className={`px-3 py-1 rounded-full font-bold text-sm ${
              isPro? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
            }`}>
              {isPro? 'UNLOCKED' : 'PRO'}
            </span>
          </div>

          <button
            onClick={startFullTest}
            className={`w-full py-3 rounded-lg font-bold active:scale-95 ${
              isPro? 'bg-blue-600 text-white' : 'bg-gray-400 text-white'
            }`}
          >
            {isPro? (isEnglish? 'Start Full Test 200Q' : 'Full Test 200Q Tan Rawh') : (isEnglish? '🔒 Pro Required' : '🔒 Pro Ngai')}
          </button>
        </div>

        {!isPro && (
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white text-center">
            <p className="font-bold mb-1">💎 {isEnglish? 'Unlock Mock Tests' : 'Mock Test Unlock'}</p>
            <p className="text-xs opacity-90 mb-3">
              {isEnglish? 'Get Pro ₹200 - All tests + All chapters for 6 months' : 'Pro ₹200 - Test zawng zawng + Chapter zawng zawng thla 6'}
            </p>
            <Link href="/premium">
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold text-sm">
                {isEnglish? 'Get Pro ₹200' : 'Pro Nei Rawh ₹200'}
              </button>
            </Link>
          </div>
        )}
      </div>

      {showProModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold mb-3">🔒 {isEnglish? 'Pro Required' : 'Pro Ngai'}</h3>
            <p className="text-gray-600 mb-4 text-sm">
              {isEnglish?
                'Mock Tests are for Pro members only. Get Pro ₹200 for 6 months access to all tests & chapters.' :
                'Mock Test hi Pro member tan chauh. Pro ₹200 in thla 6 chhung test & chapter zawng zawng hmang rawh.'
              }
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowProModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold"
              >
                {isEnglish? 'Cancel' : 'Cancel'}
              </button>
              <Link href="/premium" className="flex-1">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
                  {isEnglish? 'Get Pro' : 'Pro Nei Rawh'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}