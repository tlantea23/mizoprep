'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth' // I auth hook path nen thlak rawh
import { useRouter } from 'next/navigation'

interface Chapter {
  id: string
  title: { mizo: string; english: string }
  notes: { mizo: string[]; english: string[] }
}

interface SubjectPageProps {
  subjectName: { mizo: string; english: string }
  chapters: Chapter[]
  backLink?: string
  testLink?: string
  testTitle?: string
  testDesc?: string
  slug: string // 'science', 'maths', 'mizo' etc
  testId: string // 'science-mock-1' tiang
}

export default function SubjectPage({
  subjectName,
  chapters,
  backLink = '/',
  testLink,
  testTitle,
  testDesc,
  slug,
  testId
}: SubjectPageProps) {
  const [language, setLanguage] = useState<'mizo' | 'english'>('mizo')
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)
  const { user, loading } = useAuth()
  const router = useRouter()

  // 1. Notes Access: Free subject OR Pro user
  const isPro = user?.plan === 'pro'
  const freeSubjects = ['mizo', 'english', 'gk', 'current-affairs']
  const isFreeSubject = freeSubjects.includes(slug)
  const canAccessNotes = isFreeSubject || isPro

  // 2. Mock Test Access: User in a lei tawh em check
  const hasBoughtTest = user?.purchasedTests?.includes(testId) || false
  const canAccessTest = hasBoughtTest

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  const handleNotesLocked = () => {
    router.push('/pricing?reason=notes')
  }

  const handleTestLocked = () => {
    router.push(`/buy-test/${testId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                href={backLink} 
                className="text-blue-600 hover:text-blue-800 font-medium transition"
              >
                ← {language === 'mizo' ? 'Hawh' : 'Back'}
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {language === 'mizo' ? subjectName.mizo : subjectName.english}
              </h1>
            </div>
            <button
              onClick={() => setLanguage(language === 'mizo' ? 'english' : 'mizo')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
            >
              {language === 'mizo' ? 'English' : 'Mizo'}
            </button>
          </div>
        </div>
      </div>

      {/* Chapters List - Notes */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id} 
            className="mb-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <button
              onClick={() => {
                if (!canAccessNotes) {
                  handleNotesLocked()
                  return
                }
                setExpandedChapter(
                  expandedChapter === chapter.id ? null : chapter.id
                )
              }}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                {language === 'mizo' ? chapter.title.mizo : chapter.title.english}
                {!canAccessNotes && <span className="text-sm">🔒</span>}
              </h2>
              <span className="text-2xl text-gray-400">
                {canAccessNotes ? (expandedChapter === chapter.id ? '−' : '+') : '🔒'}
              </span>
            </button>
            
            {expandedChapter === chapter.id && canAccessNotes && (
              <div className="px-6 pb-4 border-t">
                <div className="pt-4 space-y-3">
                  {(language === 'mizo' 
                    ? chapter.notes.mizo 
                    : chapter.notes.english
                  ).map((note, idx) => (
                    <div 
                      key={idx} 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: note.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {expandedChapter === chapter.id && !canAccessNotes && (
              <div className="px-6 pb-4 border-t">
                <div className="pt-4 text-center">
                  <p className="text-gray-600 mb-3 font-medium">
                    {language === 'mizo' 
                      ? 'He chapter note hi Pro user tan chauh a ni.' 
                      : 'These chapter notes are for Pro users only.'}
                  </p>
                  <button
                    onClick={handleNotesLocked}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-md"
                  >
                    {language === 'mizo' ? 'Pro ah Upgrade - ₹100/month' : 'Upgrade to Pro - ₹100/month'}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    {language === 'mizo' 
                      ? 'Subject 14 zawng zawng note i hmu thei ang' 
                      : 'Unlock notes for all 14 subjects'}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mock Test Button - A hrang ₹50 */}
      {testLink && (
        <div className="max-w-4xl mx-auto px-4 pb-8">
          {canAccessTest ? (
            <Link href={testLink}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      ✅ {testTitle || (language === 'mizo' ? 'Mock Test Nei Rawh' : 'Take Mock Test')}
                    </h3>
                    <p className="opacity-90">
                      {testDesc || (language === 'mizo' 
                        ? 'I lei tawh. I thiam tawh em test rawh' 
                        : 'You own this. Test your knowledge')}
                    </p>
                  </div>
                  <div className="text-4xl">→</div>
                </div>
              </div>
            </Link>
          ) : (
            <div 
              onClick={handleTestLocked}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    🔒 {testTitle || (language === 'mizo' ? 'Mock Test Lei Rawh' : 'Buy Mock Test')}
                  </h3>
                  <p className="opacity-90">
                    {language === 'mizo' 
                      ? 'He test hi ₹50 in a hrangin lei a ngai' 
                      : 'Buy this test separately for ₹50'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹50</div>
                  <div className="text-xs opacity-90">One Time</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}