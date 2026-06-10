'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Atom, FlaskConical, Dna, Rocket, Cpu, ChevronDown, ChevronUp, Lock } from 'lucide-react'

interface Note {
  id: number
  title: { mizo: string; english: string }
  content: { mizo: string; english: string }
  keyPoints: { mizo: string[]; english: string[] }
  mpsc: { mizo: string; english: string }
}

interface Chapter {
  id: string
  name: { mizo: string; english: string }
  desc: { mizo: string; english: string }
  icon: any
  color: string
  notes: Note[]
  isFree: boolean
}

const scienceChapters: Chapter[] = [
  // CHAPTER 1 - PHYSICS - FREE
  {
    id: 'physics',
    name: { mizo: 'Physics', english: 'Physics' },
    desc: { mizo: 'Motion, Energy, Electricity, Light', english: 'Motion, Energy, Electricity, Light' },
    icon: Atom,
    color: 'from-blue-600 to-blue-800',
    isFree: true,
    notes: [
      {
        id: 1,
        title: { mizo: 'Newton\'s Laws of Motion', english: 'Newton\'s Laws of Motion' },
        content: {
          mizo: `**Newton's Law 3 Kimchang:**

**1. Law of Inertia:**
Thil awmngai rengin a awm reng ang. External force in a ti danglam loh chuan.

*Example:* Bus a ding thut chuan i hmalam ah i bawk.

**2. Law of Acceleration (F = ma):**
Force = Mass × Acceleration

*Example:* Bike 100kg, acceleration 5 m/s² → Force = 500N

**3. Law of Action-Reaction:**
Action tinah reaction a awm. Equal, opposite direction.

*Example:* Rocket: Gas hnuailam ah chhuak, rocket chunglam ah kal.

**Equations:**
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as

**MPSC 2026:** Gaganyaan G1 Jan 2026 hlawhtling. 3rd law hman.`,
          english: `**Newton's Three Laws:**

**1. Law of Inertia:**
Object at rest stays at rest. Object in motion stays in motion unless acted upon.

*Example:* When bus stops, you lurch forward.

**2. Law of Acceleration (F = ma):**
Force = Mass × Acceleration

*Example:* Bike 100kg, acceleration 5 m/s² → Force = 500N

**3. Law of Action-Reaction:**
For every action, equal opposite reaction.

*Example:* Rocket: Gas expels down, rocket moves up.

**Equations:**
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as

**MPSC 2026:** Gaganyaan G1 Jan 2026 success. Uses 3rd law.`
        },
        keyPoints: {
          mizo: ['1st Law: Inertia', '2nd Law: F=ma', '3rd Law: Action=Reaction', 'Gaganyaan 3rd law'],
          english: ['1st Law: Inertia', '2nd Law: F=ma', '3rd Law: Action=Reaction', 'Gaganyaan 3rd law']
        },
        mpsc: {
          mizo: 'Gaganyaan G1 Jan 2026. Vyommitra robot. 2027 manned mission.',
          english: 'Gaganyaan G1 Jan 2026. Vyommitra robot. 2027 manned mission.'
        }
      },
      {
        id: 2,
        title: { mizo: 'Electricity - Ohm\'s Law', english: 'Electricity - Ohm\'s Law' },
        content: {
          mizo: `**Ohm's Law: V = IR**

**Power:** P = VI = I²R = V²/R

*Example:* 220V bulb, 100W
I = P/V = 100/220 = 0.454A
R = V/I = 484Ω

**Series:** R_total = R₁ + R₂ + R₃
**Parallel:** 1/R_total = 1/R₁ + 1/R₂

**India:** 220-240V, 50Hz AC
**Kakrapar Unit-4:** 700 MW PHWR, Feb 2026`,
          english: `**Ohm's Law: V = IR**

**Power:** P = VI = I²R = V²/R

*Example:* 220V bulb, 100W
I = P/V = 100/220 = 0.454A
R = V/I = 484Ω

**Series:** R_total = R₁ + R₂ + R₃
**Parallel:** 1/R_total = 1/R₁ + 1/R₂

**India:** 220-240V, 50Hz AC
**Kakrapar Unit-4:** 700 MW PHWR, Feb 2026`
        },
        keyPoints: {
          mizo: ['V = IR', 'P = VI', 'India: 220-240V', 'Kakrapar: 700 MW'],
          english: ['V = IR', 'P = VI', 'India: 220-240V', 'Kakrapar: 700 MW']
        },
        mpsc: {
          mizo: 'Kakrapar Unit-4 Feb 2026 commission. Indigenous technology.',
          english: 'Kakrapar Unit-4 Feb 2026 commissioned. Indigenous technology.'
        }
      }
    ]
  },
  // CHAPTER 2 - CHEMISTRY - FREE
  {
    id: 'chemistry',
    name: { mizo: 'Chemistry', english: 'Chemistry' },
    desc: { mizo: 'Elements, Compounds, Reactions', english: 'Elements, Compounds, Reactions' },
    icon: FlaskConical,
    color: 'from-purple-600 to-purple-800',
    isFree: true,
    notes: [
      {
        id: 1,
        title: { mizo: 'Green Hydrogen 2026', english: 'Green Hydrogen 2026' },
        content: {
          mizo: `**Green Hydrogen Mission 2026:**
- Water electrolysis: 2H₂O → 2H₂ + O₂
- Zero carbon emission
- India target: 5 MMT per annum by 2030
- Budget: Rs 19,744 crore

**Elements Pawimawh:**
1. **Hydrogen (H, 1):** Lightest, Fuel
2. **Carbon (C, 6):** Life basis
3. **Oxygen (O, 8):** 21% air
4. **Sodium (Na, 11):** Salt NaCl
5. **Iron (Fe, 26):** Blood haemoglobin

**Nuclear:** Kakrapar Unit-4 U-235 fission`,
          english: `**Green Hydrogen Mission 2026:**
- Water electrolysis: 2H₂O → 2H₂ + O₂
- Zero carbon emission
- India target: 5 MMT per annum by 2030
- Budget: Rs 19,744 crore

**Important Elements:**
1. **Hydrogen (H, 1):** Lightest, Fuel
2. **Carbon (C, 6):** Life basis
3. **Oxygen (O, 8):** 21% air
4. **Sodium (Na, 11):** Salt NaCl
5. **Iron (Fe, 26):** Blood haemoglobin

**Nuclear:** Kakrapar Unit-4 U-235 fission`
        },
        keyPoints: {
          mizo: ['Green Hydrogen: 2H₂O → 2H₂ + O₂', 'India: 5 MMT 2030', 'Atomic no = Proton'],
          english: ['Green Hydrogen: 2H₂O → 2H₂ + O₂', 'India: 5 MMT 2030', 'Atomic no = Proton']
        },
        mpsc: {
          mizo: 'Green Hydrogen Mission 2026. Kakrapar Unit-4 nuclear.',
          english: 'Green Hydrogen Mission 2026. Kakrapar Unit-4 nuclear.'
        }
      }
    ]
  },
   // CHAPTER 3 - BIOLOGY - FREE
  {
    id: 'biology',
    name: { mizo: 'Biology', english: 'Biology' },
    desc: { mizo: 'Cell, DNA, Human Body', english: 'Cell, DNA, Human Body' },
    icon: Dna,
    color: 'from-green-600 to-green-800',
    isFree: true,
    notes: [
      {
        id: 1,
        title: { mizo: 'DNA & Calamaria mizoramensis', english: 'DNA & Calamaria mizoramensis' },
        content: {
          mizo: `**DNA Structure:**
- Double Helix - Watson & Crick 1953
- Base pairs: A-T, G-C
- Human: 23 pairs = 46 chromosomes

**CRISPR Gene Editing 2026:**
- DNA cut & paste, Cas9 enzyme
- Disease cure: Sickle cell, Thalassemia

**Calamaria mizoramensis:**
- Snake thar Mizoram University Jan 2026
- Russia, Germany, Vietnam nen tangkawp
- Zootaxa ah publish

**DengiAll Vaccine 2026:**
- Serum Institute, April 2026
- India dengue vaccine hmasa ber
- 4 serotypes cover, 80%+ efficacy`,
          english: `**DNA Structure:**
- Double Helix - Watson & Crick 1953
- Base pairs: A-T, G-C
- Human: 23 pairs = 46 chromosomes

**CRISPR Gene Editing 2026:**
- DNA cut & paste, Cas9 enzyme
- Disease cure: Sickle cell, Thalassemia

**Calamaria mizoramensis:**
- New snake Mizoram University Jan 2026
- Collaboration: Russia, Germany, Vietnam
- Published in Zootaxa

**DengiAll Vaccine 2026:**
- Serum Institute, April 2026
- First dengue vaccine in India
- 4 serotypes cover, 80%+ efficacy`
        },
        keyPoints: {
          mizo: ['DNA: A-T, G-C', 'CRISPR: Gene editing', 'Calamaria: Jan 2026', 'DengiAll: April 2026'],
          english: ['DNA: A-T, G-C', 'CRISPR: Gene editing', 'Calamaria: Jan 2026', 'DengiAll: April 2026']
        },
        mpsc: {
          mizo: 'Calamaria mizoramensis Jan 2026. DengiAll April 2026.',
          english: 'Calamaria mizoramensis Jan 2026. DengiAll April 2026.'
        }
      }
    ]
  },
  // CHAPTER 4 - SPACE TECH - FREE
  {
    id: 'space-tech',
    name: { mizo: 'Space & Technology', english: 'Space & Technology' },
    desc: { mizo: 'ISRO, Gaganyaan, Satellites', english: 'ISRO, Gaganyaan, Satellites' },
    icon: Rocket,
    color: 'from-indigo-600 to-indigo-800',
    isFree: true,
    notes: [
      {
        id: 1,
        title: { mizo: 'Gaganyaan Mission 2026', english: 'Gaganyaan Mission 2026' },
        content: {
          mizo: `**Gaganyaan Timeline:**

**G1 (Jan 2026):** ✅ Uncrewed test success
- GSLV Mk-III human-rated
- Vyommitra robot test

**G2 (2026):** Vyommitra full mission
- Female humanoid robot

**G3 (2027):** Manned mission
- 3 IAF astronauts
- 400 km orbit, 7 days
- India 4th country human spaceflight

**EOS-09 (June 2026):** Earth Observation, Agriculture

**MPSC:** ISRO 1969, Vikram Sarabhai. Chandrayaan-3 2023 South Pole.`,
          english: `**Gaganyaan Timeline:**

**G1 (Jan 2026):** ✅ Uncrewed test success
- GSLV Mk-III human-rated
- Vyommitra robot test

**G2 (2026):** Vyommitra full mission
- Female humanoid robot

**G3 (2027):** Manned mission
- 3 IAF astronauts
- 400 km orbit, 7 days
- India 4th country human spaceflight

**EOS-09 (June 2026):** Earth Observation, Agriculture

**MPSC:** ISRO 1969, Vikram Sarabhai. Chandrayaan-3 2023 South Pole.`
        },
        keyPoints: {
          mizo: ['G1: Jan 2026 success', 'G3: 2027 manned', 'Vyommitra: Female robot', 'EOS-09: June 2026'],
          english: ['G1: Jan 2026 success', 'G3: 2027 manned', 'Vyommitra: Female robot', 'EOS-09: June 2026']
        },
        mpsc: {
          mizo: 'Gaganyaan G1 Jan 2026. 2027 ah mihring 3 space ah.',
          english: 'Gaganyaan G1 Jan 2026. 3 humans to space in 2027.'
        }
      }
    ]
  },
    // CHAPTER 5 - COMPUTER AI - FREE
  {
    id: 'computer-ai',
    name: { mizo: 'Computer & AI 2026', english: 'Computer & AI 2026' },
    desc: { mizo: 'AI, Quantum, Supercomputer', english: 'AI, Quantum, Supercomputer' },
    icon: Cpu,
    color: 'from-cyan-600 to-cyan-800',
    isFree: true,
    notes: [
      {
        id: 1,
        title: { mizo: 'AIRAWAT 2.0 & Quantum', english: 'AIRAWAT 2.0 & Quantum' },
        content: {
          mizo: `**AIRAWAT 2.0 - May 2026:**
- AI Supercomputer 200 petaflops
- PARAM series, C-DAC Pune
- Healthcare, Agriculture AI

**Quantum Mission Phase 2 - March 2026:**
- Rs 6,000 crore budget
- QKD: Unhackable communication
- ISRO + DRDO: 300 km fibre test

**India:** Top 5 Quantum Technology
**5G:** 10 Gbps, **6G:** 1 Tbps research`,
          english: `**AIRAWAT 2.0 - May 2026:**
- AI Supercomputer 200 petaflops
- PARAM series, C-DAC Pune
- Healthcare, Agriculture AI

**Quantum Mission Phase 2 - March 2026:**
- Rs 6,000 crore budget
- QKD: Unhackable communication
- ISRO + DRDO: 300 km fibre test

**India:** Top 5 Quantum Technology
**5G:** 10 Gbps, **6G:** 1 Tbps research`
        },
        keyPoints: {
          mizo: ['AIRAWAT: 200 petaflops', 'Quantum: Rs 6000 cr', 'QKD: Unhackable'],
          english: ['AIRAWAT: 200 petaflops', 'Quantum: Rs 6000 cr', 'QKD: Unhackable']
        },
        mpsc: {
          mizo: 'AIRAWAT 2.0 May 2026. Quantum Mission March 2026.',
          english: 'AIRAWAT 2.0 May 2026. Quantum Mission March 2026.'
        }
      }
    ]
  },
  // PRO CHAPTERS 6+ - LOCKED
  {
    id: 'advanced-physics',
    name: { mizo: 'Advanced Physics Pro', english: 'Advanced Physics Pro' },
    desc: { mizo: 'Nuclear, Relativity', english: 'Nuclear, Relativity' },
    icon: Atom,
    color: 'from-red-600 to-red-800',
    isFree: false,
    notes: []
  }
]

export default function SciencePage() {
  const router = useRouter()
  const [isPro, setIsPro] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [expandedNote, setExpandedNote] = useState<number | null>(null)
  const [language, setLanguage] = useState<'mizo' | 'english'>('mizo')

  const handleChapterClick = (chapter: Chapter) => {
    if (!chapter.isFree &&!isPro) {
      alert('🔒 Pro Chapter! Upgrade to MPSC Pro to access.')
      return
    }
    setSelectedChapter(chapter.id)
  }

  if (selectedChapter) {
    const chapter = scienceChapters.find(c => c.id === selectedChapter)!
    const Icon = chapter.icon

    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSelectedChapter(null)} className="p-2 hover:bg-gray-800 rounded-lg">
                <ArrowLeft size={24} />
              </button>
              <div className="flex items-center gap-3">
                <Icon size={32} />
                <div>
                  <h1 className="text-3xl font-bold">{chapter.name[language]}</h1>
                  <p className="text-gray-400">{chapter.notes.length} Notes</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'mizo'? 'english' : 'mizo')}
              className="bg-purple-600 px-3 py-1 rounded text-sm font-bold hover:bg-purple-700"
            >
              {language === 'mizo'? 'English' : 'Mizo'}
            </button>
          </div>

          <div className="space-y-4">
            {chapter.notes.map((note) => (
              <div key={note.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedNote(expandedNote === note.id? null : note.id)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-750 transition"
                >
                  <h2 className="text-xl font-bold text-left">{note.title[language]}</h2>
                  {expandedNote === note.id? <ChevronUp /> : <ChevronDown />}
                </button>

                {expandedNote === note.id && (
                  <div className="p-6 pt-0 space-y-4">
                    <div className="prose prose-invert max-w-none whitespace-pre-wrap text-gray-300">
                      {note.content[language]}
                    </div>

                    <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                      <h3 className="font-bold mb-2 text-blue-400">📌 Key Points:</h3>
                      <ul className="space-y-1 text-sm">
                        {note.keyPoints[language].map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
                      <h3 className="font-bold mb-2 text-yellow-400">🎯 MPSC 2026:</h3>
                      <p className="text-sm">{note.mpsc[language]}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-gray-800 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Science 2026</h1>
              <p className="text-gray-400">Physics, Chemistry, Biology, Space, AI</p>
            </div>
          </div>
          <button
            onClick={() => setLanguage(language === 'mizo'? 'english' : 'mizo')}
            className="bg-purple-600 px-3 py-1 rounded text-sm font-bold hover:bg-purple-700"
          >
            {language === 'mizo'? 'English' : 'Mizo'}
          </button>
        </div>

        {!isPro && (
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-600 rounded-lg">
            <p className="text-sm">
              <span className="font-bold">🎓 Free:</span> Chapter 1-5 unlock.
              <span className="font-bold ml-2">🔒 Pro:</span> All chapters + 100+ notes + Mock Tests
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {scienceChapters.map((chapter) => {
            const Icon = chapter.icon
            const isLocked =!chapter.isFree &&!isPro

            return (
              <button
                key={chapter.id}
                onClick={() => handleChapterClick(chapter)}
                className={`bg-gradient-to-br ${chapter.color} p-6 rounded-xl text-left transition relative ${
                  isLocked? 'opacity-60' : 'hover:scale-105'
                }`}
              >
                {isLocked && (
                  <div className="absolute top-4 right-4">
                    <Lock size={24} />
                  </div>
                )}
                <Icon size={40} className="mb-4" />
                <h2 className="text-xl font-bold mb-1">{chapter.name[language]}</h2>
                <p className="text-sm opacity-90 mb-3">{chapter.desc[language]}</p>
                <div className="flex gap-4 text-sm opacity-75">
                  <span>📝 {chapter.notes.length} Notes</span>
                  {chapter.isFree && <span className="text-green-400 font-bold">FREE</span>}
                  {!chapter.isFree && <span className="text-yellow-400 font-bold">PRO</span>}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
} 