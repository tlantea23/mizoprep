'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { showInterstitial, showRewardedAd } from '@/lib/admob'

interface Chapter {
  id: string
  title: { mizo: string; english: string }
  notes: { mizo: string[]; english: string[] }
}

interface SubjectPageProps {
  subjectName: { mizo: string; english: string }
  chapters: Chapter[]
  slug: string
  testId: string
  backLink: string
  testLink: string
  testTitle: string
  testDesc: string
  showMockTest?: boolean
}

export default function SubjectPage({
  subjectName,
  chapters,
  slug,
  testId,
  backLink,
  testLink='/mock-test',
  testTitle='Mock Test',
  testDesc='Test your knowledge',
  showMockTest = false
}: SubjectPageProps) {
  const router = useRouter()
  const [isEnglish, setIsEnglish] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [proExpiry, setProExpiry] = useState<string | null>(null)
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)
  const [showProModal, setShowProModal] = useState(false)
  const [unlockedChapters, setUnlockedChapters] = useState<number[]>([])
  const [loadingAd, setLoadingAd] = useState<number | null>(null)

  useEffect(() => {
    if (isPro) return
    const count = Number(localStorage.getItem('subjectAdCount') || 0) + 1
    localStorage.setItem('subjectAdCount', String(count))
    if (count % 2 === 0) {
      showInterstitial()
    }
  }, [isPro])

  useEffect(() => {
    const proStatus = localStorage.getItem('mizoprep_pro')
    const expiry = localStorage.getItem('mizoprep_pro_expiry')
    if (proStatus === 'true' && expiry) {
      const expiryDate = new Date(Number(expiry))
      if (expiryDate > new Date()) {
        setIsPro(true)
        setProExpiry(expiry)
      } else {
        localStorage.removeItem('mizoprep_pro')
        localStorage.removeItem('mizoprep_pro_expiry')
        setIsPro(false)
      }
    }

    // Rewarded unlock load
    const saved = localStorage.getItem(`${slug}_unlocked`)
    if (saved) {
      const unlocked: number[] = JSON.parse(saved)
      const valid = unlocked.filter(idx => {
        const exp = localStorage.getItem(`${slug}_unlock_${idx}_expiry`)
        return exp && Number(exp) > Date.now()
      })
      setUnlockedChapters(valid)
      localStorage.setItem(`${slug}_unlocked`, JSON.stringify(valid))
    }
  }, [slug])

  const handleBack = () => {
    if (selectedChapter) {
      setSelectedChapter(null)
    } else if (window.history.length > 1) {
      window.history.back()
    } else {
      router.push('/')
    }
  }

  const handleChapterClick = async (chapter: Chapter, idx: number) => {
    if (idx < 2 || isPro || unlockedChapters.includes(idx)) {
      setSelectedChapter(chapter)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Rewarded Ad en tir
    setLoadingAd(idx)
    const rewarded = await showRewardedAd()
    setLoadingAd(null)

    if (rewarded) {
      const newUnlocked = [...unlockedChapters, idx]
      setUnlockedChapters(newUnlocked)
      localStorage.setItem(`${slug}_unlocked`, JSON.stringify(newUnlocked))

      // 24 hours expiry
      const expiry = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem(`${slug}_unlock_${idx}_expiry`, String(expiry))

      setSelectedChapter(chapter)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowProModal(true)
    }
  }

  const getDaysLeft = () => {
    if (!proExpiry) return 0
    const days = Math.ceil((Number(proExpiry) - Date.now()) / (1000 * 60 * 60 * 24))
    return days > 0? days : 0
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={handleBack} className="text-blue-600 font-semibold">
            ← {isEnglish? 'Back' : 'Kir'}
          </button>
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="px-3 py-1 bg-gray-200 rounded text-sm font-semibold"
          >
            {isEnglish? 'Mizo' : 'English'}
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {isEnglish? subjectName.english : subjectName.mizo}
        </h1>

        {/* Chapter Notes Display */}
        {selectedChapter && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {isEnglish? selectedChapter.title.english : selectedChapter.title.mizo}
              </h2>
              <button
                onClick={() => setSelectedChapter(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold ml-2"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              {(isEnglish? selectedChapter.notes.english : selectedChapter.notes.mizo).map((note, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">•</span>
                  <p className="text-gray-700 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chapter List - Hide when chapter is selected */}
        {!selectedChapter && (
          <>
            {isPro && proExpiry && (
              <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4">
                <p className="text-sm text-green-800 font-semibold">
                  ✓ Pro Active - {getDaysLeft()} days left
                </p>
                <p className="text-xs text-green-700">
                  Expires: {new Date(Number(proExpiry)).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})}
                </p>
              </div>
            )}

            {!isPro && (
              <p className="text-gray-600 mb-6">
                {isEnglish? 'Chapters 1-2 free. Watch ad or upgrade for all chapters.' : 'Chapter 1 & 2 free. Ad en la unlock rawh emaw Pro nei rawh.'}
              </p>
            )}

            {showMockTest && (
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-5 mb-6 text-white">
                <h2 className="text-xl font-bold mb-2">📝 {testTitle}</h2>
                <p className="text-sm opacity-90 mb-3">{testDesc}</p>
                {isPro? (
                  <Link href={testLink}>
                    <button className="w-full bg-white text-green-600 py-2 rounded-lg font-bold">
                      {isEnglish? 'Start Test' : 'Test Tan Rawh'}
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowProModal(true)}
                    className="w-full bg-white text-green-600 py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                  >
                    🔒 {isEnglish? 'Pro Only' : 'Pro Tan Chauh'}
                  </button>
                )}
              </div>
            )}

            <div className="grid gap-3">
              {chapters.map((chapter, idx) => {
                const isLocked = idx > 1 &&!isPro &&!unlockedChapters.includes(idx)
                const isTempUnlocked = unlockedChapters.includes(idx)

                return (
                  <button
                    key={chapter.id}
                    onClick={() => handleChapterClick(chapter, idx)}
                    disabled={loadingAd === idx}
                    className={`bg-white rounded-lg shadow p-4 text-left transition-all border-l-4 disabled:opacity-50 ${
                      isLocked? 'border-gray-300' : 'border-blue-500 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-blue-600 font-bold">Chapter {idx + 1}</span>
                          {idx < 2? (
                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">FREE</span>
                          ) : isPro? (
                            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">PRO</span>
                          ) : isTempUnlocked? (
                            <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded">⏰ 24H</span>
                          ) : (
                            <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded">📺 AD</span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-800 mt-1">
                          {isEnglish? chapter.title.english : chapter.title.mizo}
                        </h3>
                      </div>
                      <span className="text-2xl">
                        {loadingAd === idx? '⏳' : isLocked? '🔒' : '→'}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {!isPro && (
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white text-center">
                <p className="font-bold mb-1">💎 {isEnglish? 'Unlock All Chapters' : 'Chapter Zawng Zawng Unlock'}</p>
                <p className="text-xs opacity-90 mb-3">
                  {isEnglish? 'Get Pro ₹100 - Valid for 6 months' : 'Pro ₹100 - Thla 6 chhung a daih'}
                </p>
                <Link href="/premium">
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold text-sm">
                    {isEnglish? 'Get Pro ₹100' : 'Pro Nei Rawh ₹100'}
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {showProModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-5 max-w-sm w-full">
            <h3 className="text-xl font-bold mb-3">🔒 {isEnglish? 'Pro Required' : 'Pro A Ngai'}</h3>
            <p className="text-gray-600 mb-4 text-sm">
              {isEnglish?
                'Watch an ad to unlock for 24 hours, or get Pro for all chapters forever.' :
                'Ad en la ni 1 chhung unlock rawh, emaw Pro nei la chapter zawng zawng nei rawh.'
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