'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { showInterstitial } from '@/lib/admob'
import { questions } from './questions'

export default function EnglishTestPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [adWatched, setAdWatched] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Page load apiangin ad en phawt, en zawh chauh test tan
  useEffect(() => {
    const loadAd = async () => {
      setLoading(true)
      await showInterstitial()
      setAdWatched(true)
      setLoading(false)
    }
    loadAd()
  }, [])

  // Question 10 apiangin ad
  useEffect(() => {
    if (currentQ > 0 && currentQ % 10 === 0 &&!completed && adWatched) {
      showInterstitial()
    }
  }, [currentQ, completed, adWatched])

  const handleSelect = (idx: number) => {
    if (showAnswer) return
    setSelected(idx)
  }

  const handleCheck = () => {
    if (selected === null) return
    setShowAnswer(true)
    if (selected === questions[currentQ].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setShowAnswer(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = async () => {
    await showInterstitial()
    setCurrentQ(0)
    setSelected(null)
    setShowAnswer(false)
    setScore(0)
    setCompleted(false)
  }

  // Ad en hma chu loading
  if (loading ||!adWatched) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">📺</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Loading Test...</h2>
          <p className="text-gray-600">Ad en zawh hunah test a tan ang</p>
        </div>
      </div>
    )
  }

  if (completed) {
    const percentage = ((score / questions.length) * 100).toFixed(1)
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-2xl mx-auto pt-20">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Completed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your Score: <span className="font-bold text-blue-600">{score}/{questions.length}</span>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {score === questions.length? 'Perfect! 🌟 MPSC Ready!' :
               score >= 80? 'Excellent! 👍' :
               score >= 60? 'Good Job! 😊' :
               score >= 40? 'Average - Practice More! 💪' : 'Need More Study! 📚'}
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-bold text-blue-900 mb-2">Performance:</h3>
              <p className="text-gray-700">Percentage: {percentage}%</p>
              <p className="text-gray-700">Correct: {score} | Wrong: {questions.length - score}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium active:scale-95"
              >
                Retry Test
              </button>
              <Link href="/english" className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium active:scale-95">
                Back to English
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/english" className="text-blue-600 font-medium">← Back</Link>
            <h1 className="text-lg font-bold text-gray-900">English Mock Test</h1>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              FREE
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div className="bg-yellow-50 border-yellow-200 rounded-lg p-3 text-xs text-gray-700">
          <strong>Note:</strong> Practice questions only. Mizo Prep is not affiliated with MPSC, UPSC or any Govt entity.
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Question {currentQ + 1} of {questions.length}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {q.source}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              {q.question}
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {q.options.map((option, idx) => {
              const isSelected = selected === idx
              const isCorrect = idx === q.correct
              const showCorrect = showAnswer && isCorrect
              const showWrong = showAnswer && isSelected &&!isCorrect

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
               ? 'border-green-500 bg-green-50'
                      : showWrong
               ? 'border-red-500 bg-red-50'
                      : isSelected
               ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  } ${showAnswer? 'cursor-not-allowed' : 'cursor-pointer active:scale-98'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      showCorrect
                 ? 'bg-green-500 text-white'
                        : showWrong
                 ? 'bg-red-500 text-white'
                        : isSelected
                 ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {showAnswer && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h3 className="font-bold text-blue-900 mb-2">📖 Explanation:</h3>
              <div className="text-gray-700 leading-relaxed">
                {q.explanation}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {!showAnswer? (
              <button
                onClick={handleCheck}
                disabled={selected === null}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium active:scale-95"
              >
                {currentQ < questions.length - 1? 'Next Question →' : 'Finish Test'}
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Score: {score}/{questions.length}</span>
            <span className="text-gray-600">{((score / questions.length) * 100).toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}