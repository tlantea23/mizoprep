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

  testLink?: string
  testTitle?: string
  testDesc?: string
  showMockTest?: boolean

  // ✅ FIX: backLink optional (so no build error)
  backLink?: string
}

export default function SubjectPage({
  subjectName,
  chapters,
  slug,
  testLink = '/mock-test',
  testTitle = 'Mock Test',
  testDesc = 'Test your knowledge',
  showMockTest = false,
  backLink
}: SubjectPageProps) {

  const router = useRouter()

  const [isEnglish, setIsEnglish] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [proExpiry, setProExpiry] = useState<string | null>(null)

  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)
  const [showProModal, setShowProModal] = useState(false)

  const [unlockedChapters, setUnlockedChapters] = useState<number[]>([])
  const [loadingAd, setLoadingAd] = useState<number | null>(null)

  // =====================
  // ADS
  // =====================
  useEffect(() => {
    if (isPro) return

    const count = Number(localStorage.getItem('ad_count') || 0) + 1
    localStorage.setItem('ad_count', String(count))

    if (count % 3 === 0) {
      showInterstitial()
    }
  }, [isPro])

  // =====================
  // PRO CHECK
  // =====================
  useEffect(() => {
    const pro = localStorage.getItem('mizoprep_pro')
    const expiry = localStorage.getItem('mizoprep_pro_expiry')

    if (pro === 'true' && expiry) {
      const exp = new Date(expiry)

      if (exp > new Date()) {
        setIsPro(true)
        setProExpiry(expiry)
      } else {
        localStorage.removeItem('mizoprep_pro')
        localStorage.removeItem('mizoprep_pro_expiry')
      }
    }

    // restore unlocked chapters
    const saved = localStorage.getItem(`${slug}_unlocked`)

    if (saved) {
      const parsed: number[] = JSON.parse(saved)

      const valid = parsed.filter((idx) => {
        const exp = localStorage.getItem(`${slug}_unlock_${idx}_expiry`)
        return exp && Number(exp) > Date.now()
      })

      setUnlockedChapters(valid)
      localStorage.setItem(`${slug}_unlocked`, JSON.stringify(valid))
    }
  }, [slug])

  // =====================
  // BACK BUTTON FIX (🔥 IMPORTANT)
  // =====================
  const handleBack = () => {
    if (selectedChapter) {
      setSelectedChapter(null)
      return
    }

    if (backLink) {
      router.push(backLink)
    } else {
      router.back()
    }
  }

  // =====================
  // CHAPTER CLICK
  // =====================
  const handleChapterClick = async (chapter: Chapter, idx: number) => {

    // FREE: first 3 chapters
    if (idx < 3 || isPro || unlockedChapters.includes(idx)) {
      setSelectedChapter(chapter)
      return
    }

    setLoadingAd(idx)

    const rewarded = await showRewardedAd()

    setLoadingAd(null)

    if (rewarded) {
      const updated = [...unlockedChapters, idx]

      setUnlockedChapters(updated)
      localStorage.setItem(`${slug}_unlocked`, JSON.stringify(updated))

      const expiry = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem(`${slug}_unlock_${idx}_expiry`, String(expiry))

      setSelectedChapter(chapter)
    } else {
      setShowProModal(true)
    }
  }

  const getDaysLeft = () => {
    if (!proExpiry) return 0

    return Math.max(
      0,
      Math.ceil((new Date(proExpiry).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    )
  }

  // =====================
  // UI
  // =====================
  return (
    <div className="min-h-screen bg-gray-50 p-3">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between mb-5">
          <button onClick={handleBack} className="text-blue-600 font-semibold">
            ← {isEnglish ? 'Back' : 'Kir'}
          </button>

          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="px-3 py-1 bg-gray-200 rounded text-sm"
          >
            {isEnglish ? 'Mizo' : 'English'}
          </button>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-3">
          {isEnglish ? subjectName.english : subjectName.mizo}
        </h1>

        {/* PRO STATUS */}
        {isPro && (
          <div className="bg-green-50 border border-green-300 p-3 rounded mb-4">
            ✓ Pro Active ({getDaysLeft()} days left)
          </div>
        )}

        {/* CHAPTER LIST */}
        {!selectedChapter && (
          <>
            <p className="text-sm text-gray-600 mb-4">
              Chapters 1–3 FREE. Others need Pro or Rewarded Ad.
            </p>

            {/* MOCK TEST */}
            {showMockTest && (
              <div className="bg-green-500 text-white p-4 rounded mb-4">
                <h2 className="font-bold">{testTitle}</h2>
                <p className="text-sm mb-2">{testDesc}</p>

                {isPro ? (
                  <Link href={testLink}>
                    <button className="bg-white text-green-600 px-4 py-1 rounded">
                      Start Test
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => setShowProModal(true)}
                    className="bg-white text-green-600 px-4 py-1 rounded"
                  >
                    Pro Only
                  </button>
                )}
              </div>
            )}

            {/* CHAPTERS */}
            <div className="space-y-3">
              {chapters.map((ch, idx) => {

                const locked =
                  idx >= 3 &&
                  !isPro &&
                  !unlockedChapters.includes(idx)

                return (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterClick(ch, idx)}
                    disabled={loadingAd === idx}
                    className={`w-full text-left p-4 rounded border-l-4 bg-white ${
                      locked ? 'border-gray-300 opacity-80' : 'border-blue-500'
                    }`}
                  >
                    <div className="flex justify-between">

                      <div>
                        <p className="text-xs text-blue-600">
                          Chapter {idx + 1}
                        </p>

                        <p className="font-semibold">
                          {isEnglish ? ch.title.english : ch.title.mizo}
                        </p>
                      </div>

                      <span>
                        {loadingAd === idx
                          ? '⏳'
                          : idx < 3
                          ? 'FREE'
                          : isPro
                          ? 'PRO'
                          : unlockedChapters.includes(idx)
                          ? '⏰'
                          : '🔒'}
                      </span>

                    </div>
                  </button>
                )
              })}
            </div>

            {/* PRO BANNER */}
            {!isPro && (
              <div className="mt-6 bg-orange-500 text-white p-4 rounded text-center">
                <p className="font-bold">Unlock All Chapters</p>

                <Link href="/premium">
                  <button className="bg-white text-orange-600 px-4 py-1 rounded mt-2">
                    Get Pro ₹100
                  </button>
                </Link>
              </div>
            )}
          </>
        )}

        {/* CHAPTER CONTENT */}
        {selectedChapter && (
          <div className="bg-white p-5 rounded shadow">

            <div className="flex justify-between">
              <h2 className="font-bold text-xl">
                {isEnglish ? selectedChapter.title.english : selectedChapter.title.mizo}
              </h2>

              <button onClick={() => setSelectedChapter(null)}>
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {(isEnglish
                ? selectedChapter.notes.english
                : selectedChapter.notes.mizo
              ).map((n, i) => (
                <p key={i}>• {n}</p>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* PRO MODAL */}
      {showProModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-5 rounded w-80">

            <h3 className="font-bold mb-2">Pro Required</h3>

            <p className="text-sm mb-4">
              Watch ad or upgrade to unlock chapters.
            </p>

            <div className="flex gap-2">

              <button
                onClick={() => setShowProModal(false)}
                className="bg-gray-200 flex-1 p-2 rounded"
              >
                Close
              </button>

              <Link href="/premium" className="flex-1">
                <button className="bg-blue-600 text-white w-full p-2 rounded">
                  Pro
                </button>
              </Link>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}