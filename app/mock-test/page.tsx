'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MOCK_QUESTIONS, Question } from './questions'

export default function MockTestPage() {
  const router = useRouter()
  const [hasMockAccess, setHasMockAccess] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  const [mode, setMode] = useState<'list' | 'test' | 'result'>('list')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const mockStatus = localStorage.getItem('mizoprep_mock')
    const proStatus = localStorage.getItem('mizoprep_pro')

    if (proStatus === 'true') {
      setIsPro(true)
    }
    if (mockStatus === 'true') {
      setHasMockAccess(true)
    }
  }, [])

  const startFreeTest = () => {
    setQuestions(MOCK_QUESTIONS.slice(0, 20))
    setUserAnswers(Array(20).fill(null))
    setMode('test')
    setCurrentQ(0)
  }

  const startFullTest = () => {
    if (!hasMockAccess) {
      router.push('/premium')
      return
    }
    const shuffled = [...MOCK_QUESTIONS].sort(() => 0.5 - Math.random())
    setQuestions(shuffled.slice(0, 100))
    setUserAnswers(Array(100).fill(null))
    setMode('test')
    setCurrentQ(0)
  }

  const handleAnswer = (idx: number) => {
    setSelected(idx)
    const newAnswers = [...userAnswers]
    newAnswers[currentQ] = idx
    setUserAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelected(userAnswers[currentQ + 1])
    } else {
      setMode('result')
    }
  }

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
      setSelected(userAnswers[currentQ - 1])
    }
  }

  const calculateScore = () => {
    return userAnswers.reduce((acc: number, ans, idx) => {
      const question = questions[idx]
      if (!question) return acc
      return ans === question.answer? acc + 1 : acc
    }, 0)
  }

  if (mode === 'result') {
    const score = calculateScore()
    const percentage = ((score / questions.length) * 100).toFixed(1)

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{score >= questions.length * 0.6? '🎉' : '📚'}</div>
            <h2 className="text-2xl font-bold mb-2">Test Zo Ta</h2>
            <p className="text-5xl font-bold text-blue-600 mb-1">{score}/{questions.length}</p>
            <p className="text-gray-600">{percentage}%</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{score}</p>
              <p className="text-xs text-gray-600">Correct</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-red-600">{questions.length - score}</p>
              <p className="text-xs text-gray-600">Wrong</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
              <p className="text-xs text-gray-600">Score</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
            {questions.map((q, idx) => (
              <div key={q.id} className={`p-3 rounded-lg border-2 ${
                userAnswers[idx] === q.answer? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
              }`}>
                <p className="font-semibold text-sm mb-2">{idx + 1}. {isEnglish? q.questionEn : q.question}</p>
                <p className="text-xs text-gray-600">
                  I chhanna: {userAnswers[idx]!== null? (isEnglish? q.optionsEn[userAnswers[idx]!] : q.options[userAnswers[idx]!]) : 'Chhang lo'}
                </p>
                {userAnswers[idx]!== q.answer && (
                  <p className="text-xs text-green-700 font-semibold mt-1">
                    Correct: {isEnglish? q.optionsEn[q.answer] : q.options[q.answer]}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2 italic">{isEnglish? q.explanationEn : q.explanation}</p>
              </div>
            ))}
          </div>

          {!hasMockAccess && questions.length === 20 && (
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 mb-4 text-white text-center">
              <p className="font-bold mb-1">Question 480 dang i chhang duh em?</p>
              <p className="text-xs opacity-90 mb-3">Mock Test 500 unlock rawh</p>
              <Link href="/premium">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm">
                  Mock Test ₹50
                </button>
              </Link>
            </div>
          )}

          <button
            onClick={() => {setMode('list'); setCurrentQ(0); setUserAnswers([])}}
            className="w-full bg-gray-600 text-white py-3 rounded-lg font-bold"
          >
            Mock Test List
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'test') {
    const q = questions[currentQ]

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between mb-4">
            <button onClick={() => setMode('list')} className="text-blue-600 font-semibold">← Chhuak</button>
            <div className="flex gap-2">
              <button onClick={() => setIsEnglish(false)} className={`px-2 py-1 rounded text-xs ${!isEnglish? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Mizo</button>
              <button onClick={() => setIsEnglish(true)} className={`px-2 py-1 rounded text-xs ${isEnglish? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Eng</button>
            </div>
            <span className="text-sm font-semibold">{currentQ + 1}/{questions.length}</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">{q.subject}</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: `${((currentQ+1)/questions.length)*100}%`}} />
              </div>
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
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevQuestion}
                disabled={currentQ === 0}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                Hmasa
              </button>
              <button
                onClick={nextQuestion}
                disabled={selected === null}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {currentQ === questions.length - 1? 'Submit' : 'Dawt Leh'}
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
        <button onClick={() => router.push('/')} className="text-blue-600 font-semibold mb-4">← Haw</button>
        <h1 className="text-2xl font-bold mb-6">Mock Test</h1>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 mb-4 text-white shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-xl font-bold mb-1">🎁 Free Sample Test</h2>
              <p className="text-sm opacity-90">20 Questions • Subject Mix</p>
            </div>
            <span className="bg-white text-green-600 px-3 py-1 rounded-full font-bold text-sm">FREE</span>
          </div>
          <button onClick={startFreeTest} className="w-full bg-white text-green-600 py-3 rounded-lg font-bold active:scale-95">
            Test Chhang Tan Rawh
          </button>
        </div>

        <div className={`bg-white rounded-xl border-2 p-6 shadow-lg ${hasMockAccess? 'border-blue-500' : 'border-gray-300'}`}>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-bold mb-1">🔥 Full Mock Test</h2>
              <p className="text-sm text-gray-600">100 Questions • Random from 500 Bank</p>
              <p className="text-xs text-gray-500 mt-1">Polity, History, Geography, Economics, Mizoram GK, Science, Current</p>
            </div>
            {!hasMockAccess && <span className="text-3xl">🔒</span>}
          </div>

          {hasMockAccess? (
            <button onClick={startFullTest} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold active:scale-95">
              Full Test Tan Rawh
            </button>
          ) : (
            <Link href="/premium">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                Unlock ₹50
              </button>
            </Link>
          )}
        </div>

        {!isPro && (
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white text-center">
            <p className="font-bold mb-1">💡 Pro ₹100 la rawh</p>
            <p className="text-xs opacity-90 mb-3">Notes zawng zawng unlock. Mock test tel lo.</p>
            <Link href="/premium">
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold text-sm">
                Pro Nei Rawh ₹100
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}