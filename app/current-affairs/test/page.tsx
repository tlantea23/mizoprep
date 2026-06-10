'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Globe, Award, MapPin, Trophy, BookOpen } from 'lucide-react'

interface Question {
  id: number
  question: {
    mizo: string
    english: string
  }
  options: {
    mizo: string[]
    english: string[]
  }
  correctAnswer: number
  explanation: {
    mizo: string
    english: string
  }
  category: 'world' | 'national' | 'mizoram' | 'awards' | 'sports'
  date: string
}

const currentAffairsQuestions: Question[] = [
  // CAPTAIN LALRINAWMA SAILO - Q1-5 MPSC MOST IMPORTANT
  {
    id: 1,
    question: {
      mizo: 'June 2026 ah Kirti Chakra dawng Mizo officer tu nge?',
      english: 'Which Mizo officer received Kirti Chakra in June 2026?'
    },
    options: {
      mizo: [
        'Captain Lalrinawma Sailo, 4 Para (Special Forces)',
        'Lt Commander Suraj Prashar, Indian Navy',
        'Subedar Chalhnuna Lushai',
        'Major Vanlalhuma, Assam Rifles'
      ],
      english: [
        'Captain Lalrinawma Sailo, 4 Para (Special Forces)',
        'Lt Commander Suraj Prashar, Indian Navy',
        'Subedar Chalhnuna Lushai',
        'Major Vanlalhuma, Assam Rifles'
      ]
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Captain Lalrinawma Sailo, 4 Para (SF) in Kirti Chakra dawng. President Droupadi Murmu hnen atangin Rashtrapati Bhavan ah. Pahalgam beitu hel pathum kap hlum. "The Cleanest Operation" tiin Indian Army in a sawi. Mizo zinga Kirti Chakra dawng thei pahnihna. 1968 khan Subedar Chalhnuna Lushai in a dawng tawh.',
      english: 'Captain Lalrinawma Sailo, 4 Para (SF) received Kirti Chakra from President Droupadi Murmu at Rashtrapati Bhavan. Killed three terrorists who attacked Pahalgam. Indian Army called it "The Cleanest Operation". Second Mizo to receive Kirti Chakra after Subedar Chalhnuna Lushai in 1968.'
    },
    category: 'awards',
    date: '2026-06-08'
  },
  {
    id: 2,
    question: {
      mizo: 'Kirti Chakra hi eng chawimawina nge?',
      english: 'What type of award is Kirti Chakra?'
    },
    options: {
      mizo: [
        'Ramchhunga sipai huaisen chawimawina sang ber dawt tu',
        'Wartime gallantry award',
        'Civilian bravery award',
        'Sports award'
      ],
      english: [
        'Second highest peacetime gallantry award',
        'Wartime gallantry award',
        'Civilian bravery award',
        'Sports award'
      ]
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Kirti Chakra hi ramchhunga sipai huaisen chawimawina sang ber dawt tu a ni. Peacetime gallantry award.',
      english: 'Kirti Chakra is the second highest peacetime gallantry award for military personnel.'
    },
    category: 'awards',
    date: '2026-06-08'
  },
  {
    id: 3,
    question: {
      mizo: 'Mizo zinga Kirti Chakra dawng hmasa ber tu nge?',
      english: 'Who was the first Mizo to receive Kirti Chakra?'
    },
    options: {
      mizo: [
        'Subedar Chalhnuna Lushai - 1968',
        'Captain Lalrinawma Sailo - 2026',
        'Havildar Lalthanzama - 1999',
        'Naik Vanlalvena - 1971'
      ],
      english: [
        'Subedar Chalhnuna Lushai - 1968',
        'Captain Lalrinawma Sailo - 2026',
        'Havildar Lalthanzama - 1999',
        'Naik Vanlalvena - 1971'
      ]
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Subedar Chalhnuna Lushai in kum 1968 khan Kirti Chakra a dawng hmasa ber. Captain Lalrinawma Sailo hi pahnihna.',
      english: 'Subedar Chalhnuna Lushai was the first Mizo to receive Kirti Chakra in 1968. Captain Lalrinawma Sailo is the second.'
    },
    category: 'awards',
    date: '2026-06-08'
  },
  {
    id: 4,
    question: {
      mizo: 'Captain Lalrinawma Sailo in hel pathum a kah hlumna hmun chu khawiah nge?',
      english: 'Where did Captain Lalrinawma Sailo kill three terrorists?'
    },
    options: {
      mizo: ['Pahalgam', 'Uri', 'Pulwama', 'Kupwara'],
      english: ['Pahalgam', 'Uri', 'Pulwama', 'Kupwara']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Pahalgam beitu hel pathum te zawng chhuakin a kap hlum vek. Indian Army in "The Cleanest Operation" a ti.',
      english: 'Hunted down and killed three terrorists who attacked Pahalgam. Indian Army called it "The Cleanest Operation".'
    },
    category: 'awards',
    date: '2026-06-08'
  },
  {
    id: 5,
    question: {
      mizo: 'Indian Army in Captain Lalrinawma Sailo operation hi engtin nge a sawi?',
      english: 'What did Indian Army call Captain Lalrinawma Sailo\'s operation?'
    },
    options: {
      mizo: ['"The Cleanest Operation"', '"Operation Vijay"', '"Operation Meghdoot"', '"Operation Trident"'],
      english: ['"The Cleanest Operation"', '"Operation Vijay"', '"Operation Meghdoot"', '"Operation Trident"']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Indian Army chuan "The Cleanest Operation" a ti. Hel hovin silai an hmet pual ve hman lo.',
      english: 'Indian Army called it "The Cleanest Operation". Terrorists could not even fire back.'
    },
    category: 'awards',
    date: '2026-06-08'
  },
  // WORLD
  {
    id: 6,
    question: {
      mizo: 'Jan 2026 ah UN Security Council Non-Permanent Member 2027-28 atan tute nge thlan tlin?',
      english: 'Who were elected as UN Security Council Non-Permanent Members for 2027-28 in Jan 2026?'
    },
    options: {
      mizo: ['Portugal leh Austria', 'Germany leh Austria', 'Portugal leh Germany', 'Italy leh Spain'],
      english: ['Portugal and Austria', 'Germany and Austria', 'Portugal and Germany', 'Italy and Spain']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Jan 2026 ah Portugal leh Austria thlan tlin. Germany a tling zo lo.',
      english: 'Portugal and Austria were elected in Jan 2026. Germany failed to secure seat.'
    },
    category: 'world',
    date: '2026-01-15'
  },
  {
    id: 7,
    question: {
      mizo: 'June 9, 2026 ah BGB DG Delhi ah eng vangin nge a kal?',
      english: 'Why did BGB DG visit Delhi on June 9, 2026?'
    },
    options: {
      mizo: ['BSF nen border talks - undocumented mi thawn luh buai', 'Trade agreement', 'Cultural exchange', 'Sports meet'],
      english: ['Border talks with BSF - dispute over sending undocumented people', 'Trade agreement', 'Cultural exchange', 'Sports meet']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'June 9, 2026 ah BGB DG in Delhi ah BSF nen border talks nei. Undocumented mi thawn luh chungchang buai.',
      english: 'June 9, 2026 BGB DG visited Delhi for border talks with BSF over undocumented people dispute.'
    },
    category: 'world',
    date: '2026-06-09'
  },
  {
    id: 8,
    question: {
      mizo: 'May 2026 ah Iran-Israel war vangin eng nge thleng?',
      english: 'What happened due to Iran-Israel war in May 2026?'
    },
    options: {
      mizo: ['Crude oil man kai, Market 1% tla', 'Oil man tlawm', 'Market pung', 'Thil danglam lo'],
      english: ['Crude oil prices rose, Market fell 1%', 'Oil prices fell', 'Market rose', 'No change']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'US-Israel in Iran bei vangin crude oil man kai. Market 1% tla.',
      english: 'US-Israel attacked Iran causing crude oil prices to rise. Markets fell 1%.'
    },
    category: 'world',
    date: '2026-05-15'
  },
  {
    id: 9,
    question: {
      mizo: 'June 8, 2026 ah Netanyahu in Iran chungchang engtin nge a sawi?',
      english: 'What did Netanyahu say about Iran on June 8, 2026?'
    },
    options: {
      mizo: ['Fighting halt mahse future attack chu "with force" respond ang', 'Surrender', 'Peace treaty sign', 'Ngawi reng'],
      english: ['Fighting halt but will respond "with force" to future attacks', 'Surrender', 'Sign peace treaty', 'Remain silent']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Netanyahu in fighting halt ti mahse future attack chu "with force" respond ang a ti.',
      english: 'Netanyahu acknowledged halt in fighting but vowed to respond "with force" to future attacks.'
    },
    category: 'world',
    date: '2026-06-08'
  },
  {
    id: 10,
    question: {
      mizo: 'June 8, 2026 ah Indian sailor engzat nge US missile attack atangin chhanchhuah?',
      english: 'How many Indian sailors were rescued from US missile attack on June 8, 2026?'
    },
    options: {
      mizo: ['24', '20', '30', '15'],
      english: ['24', '20', '30', '15']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Indian sailor 24 Marivex tanker atangin US missile attack hnuah chhanchhuah.',
      english: '24 Indian sailors were rescued from tanker Marivex after US missile strike.'
    },
    category: 'world',
    date: '2026-06-08'
  },
  // NATIONAL
  {
    id: 11,
    question: {
      mizo: 'Jan 2026 ah India in E85 Fuel hmasa ber a launch. Ethanol engzat nge a tel?',
      english: 'India launched first E85 Fuel in Jan 2026. What percentage of Ethanol does it contain?'
    },
    options: {
      mizo: ['85%', '75%', '95%', '65%'],
      english: ['85%', '75%', '95%', '65%']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'E85 Fuel ah 85% Ethanol a tel. Petrol import leh carbon emission ti tlem tur.',
      english: 'E85 Fuel contains 85% Ethanol to reduce petrol imports and carbon emissions.'
    },
    category: 'national',
    date: '2026-01-12'
  },
  {
    id: 12,
    question: {
      mizo: 'FY 2025-26 ah India GDP growth engzat nge?',
      english: 'What was India GDP growth in FY 2025-26?'
    },
    options: {
      mizo: ['7.7%', '6.5%', '8.2%', '5.9%'],
      english: ['7.7%', '6.5%', '8.2%', '5.9%']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'FY 2025-26 ah 7.7% growth, kum 2 chhunga sang ber. IMF in FY27 tan 6.5% forecast.',
      english: '7.7% growth in FY 2025-26, highest in 2 years. IMF forecasts 6.5% for FY27.'
    },
    category: 'national',
    date: '2026-02-28'
  },
  {
    id: 13,
    question: {
      mizo: 'Feb 2026 ah RBI Repo Rate engzat nge?',
      english: 'What was RBI Repo Rate in Feb 2026?'
    },
    options: {
      mizo: ['5.25%', '6.50%', '4.00%', '5.75%'],
      english: ['5.25%', '6.50%', '4.00%', '5.75%']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Repo Rate 5.25% ah dah nghet. Growth forecast 6.6% ah cut.',
      english: 'Repo Rate kept unchanged at 5.25%. Growth forecast cut to 6.6%.'
    },
    category: 'national',
    date: '2026-02-08'
  },
  {
    id: 14,
    question: {
      mizo: 'March 2026 ah India 100th Ramsar Site eng nge?',
      english: 'What is India 100th Ramsar Site designated in March 2026?'
    },
    options: {
      mizo: ['Jai Prakash Narayan Bird Sanctuary, UP', 'Loktak Lake, Manipur', 'Chilika Lake, Odisha', 'Sambhar Lake, Rajasthan'],
      english: ['Jai Prakash Narayan Bird Sanctuary, UP', 'Loktak Lake, Manipur', 'Chilika Lake, Odisha', 'Sambhar Lake, Rajasthan']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Jai Prakash Narayan Bird Sanctuary, Uttar Pradesh chu 100th Ramsar Site.',
      english: 'Jai Prakash Narayan Bird Sanctuary, Uttar Pradesh is the 100th Ramsar Site.'
    },
    category: 'national',
    date: '2026-03-10'
  },
  {
    id: 15,
    question: {
      mizo: 'June 8, 2026 ah Visakhapatnam RINL ah eng thil nge thleng?',
      english: 'What happened at Visakhapatnam RINL on June 8, 2026?'
    },
    options: {
      mizo: ['Explosion - worker 8 thi, 6 hliam', 'Fire - mihring thi lo', 'Strike', 'Production ti tawp'],
      english: ['Explosion - 8 workers dead, 6 injured', 'Fire - no casualties', 'Strike', 'Production halt']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'RINL plant ah explosion. Worker 8 thi, 6 hliam na. Molten steel tleh.',
      english: 'Explosion at RINL plant. 8 workers killed, 6 injured. Molten steel spilled.'
    },
    category: 'national',
    date: '2026-06-08'
  },
  // MIZORAM
  {
    id: 16,
    question: {
      mizo: 'Jan 26, 2026 ah Mizoram Republic Day ah Governor tu nge hmanpui?',
      english: 'Which Governor led Mizoram Republic Day on Jan 26, 2026?'
    },
    options: {
      mizo: ['General Dr Vijay Kumar Singh', 'Hari Babu Kambhampati', 'Dr Kambhampati Hari Babu', 'PS Sreedharan Pillai'],
      english: ['General Dr Vijay Kumar Singh', 'Hari Babu Kambhampati', 'Dr Kambhampati Hari Babu', 'PS Sreedharan Pillai']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'General Dr Vijay Kumar Singh in Jan 26 ah Republic Day hmanpui. Jan 30 ah NCC HQ Aizawl hawn.',
      english: 'General Dr Vijay Kumar Singh led Republic Day Jan 26. Inaugurated NCC HQ Aizawl Jan 30.'
    },
    category: 'mizoram',
    date: '2026-01-26'
  },
  {
    id: 17,
    question: {
      mizo: '2023-2024 ah Mizoram ah tourist engzat percent nge pung?',
      english: 'What percentage did tourist arrivals increase in Mizoram between 2023-2024?'
    },
    options: {
      mizo: ['145.54%', '120.25%', '98.75%', '165.30%'],
      english: ['145.54%', '120.25%', '98.75%', '165.30%']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Mizoram ah tourist 145.54% pung 2023-2024. Rail connectivity vang.',
      english: 'Mizoram recorded 145.54% rise in tourist arrivals between 2023-2024 due to rail connectivity.'
    },
    category: 'mizoram',
    date: '2026-01-22'
  },
  {
    id: 18,
    question: {
      mizo: 'Bairabi-Sairang railway line engtikah nge hawn?',
      english: 'When was Bairabi-Sairang railway line inaugurated?'
    },
    options: {
      mizo: ['Sept 2025', 'Jan 2026', 'March 2025', 'Dec 2024'],
      english: ['Sept 2025', 'Jan 2026', 'March 2025', 'Dec 2024']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Bairabi-Sairang line Sept 2025 hawn tawh. Aizawl rail connection hmasa ber. June 2026 ah Rajdhani Express tlan tan.',
      english: 'Bairabi-Sairang line inaugurated Sept 2025. First rail connection to Aizawl. Rajdhani Express operational June 2026.'
    },
    category: 'mizoram',
    date: '2026-02-05'
  },
  {
    id: 19,
    question: {
      mizo: 'June 9, 2026 ah PM Modi in Aizawl ah engtia tam nge development project a hawn?',
      english: 'How much worth of development projects did PM Modi inaugurate in Aizawl on June 9, 2026?'
    },
    options: {
      mizo: ['Rs 9,000 crore', 'Rs 5,000 crore', 'Rs 12,000 crore', 'Rs 7,500 crore'],
      english: ['Rs 9,000 crore', 'Rs 5,000 crore', 'Rs 12,000 crore', 'Rs 7,500 crore']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'PM Modi in Rs 9,000 crore man development works Aizawl ah hawng. "Historic day" - Aizawl India railway map ah lut.',
      english: 'PM Modi inaugurated Rs 9,000 crore development works in Aizawl. "Historic day" - Aizawl on India railway map.'
    },
    category: 'mizoram',
    date: '2026-06-09'
  },
  {
    id: 20,
    question: {
      mizo: 'June 2026 ah Rajdhani Express eng khaw pahnih inkarah nge tlan tan?',
      english: 'Between which two cities did Rajdhani Express start running in June 2026?'
    },
    options: {
      mizo: ['Delhi-Sairang', 'Delhi-Aizawl', 'Guwahati-Sairang', 'Kolkata-Aizawl'],
      english: ['Delhi-Sairang', 'Delhi-Aizawl', 'Guwahati-Sairang', 'Kolkata-Aizawl']
    },
    correctAnswer: 0,
    explanation: {
      mizo: 'Rajdhani Express Delhi-Sairang tlan tan. Bairabi-Sairang line Sept 2025 hawn tawh.',
      english: 'Rajdhani Express Delhi-Sairang operational. Bairabi-Sairang line inaugurated Sept 2025.'
    },
    category: 'mizoram',
    date: '2026-06-02'
  }
]

const categoryIcons = {
  world: Globe,
  national: BookOpen,
  mizoram: MapPin,
  awards: Award,
  sports: Trophy
}

export default function CurrentAffairsTestPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isPro, setIsPro] = useState(false)
  const [testComplete, setTestComplete] = useState(false)
  const [language, setLanguage] = useState<'mizo' | 'english'>('mizo')

  useEffect(() => {
    const questionsToShow = isPro
? currentAffairsQuestions
      : currentAffairsQuestions.slice(0, 20)
    setQuestions(questionsToShow)
  }, [isPro])

  if (questions.length === 0) return <div className="min-h-screen bg-gray-900 text-white p-4">Loading...</div>

  const question = questions[currentQ]
  const CategoryIcon = categoryIcons[question.category]

  const handleAnswer = (index: number) => {
    setSelectedOption(index)
    setShowAnswer(true)
    if (index === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setShowAnswer(false)
      setSelectedOption(null)
    } else {
      setTestComplete(true)
    }
  }

  const restartTest = () => {
    setCurrentQ(0)
    setScore(0)
    setShowAnswer(false)
    setSelectedOption(null)
    setTestComplete(false)
  }

  if (testComplete) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-800 rounded-lg transition"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold">Test Complete! 🎉</h1>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-5xl mb-4">{score}/{questions.length}</p>
            <p className="text-xl mb-6">
              {score >= questions.length * 0.8? 'Excellent! Pro level 🔥' :
               score >= questions.length * 0.6? 'Good Job! 👍' :
               'Keep Practicing! 💪'}
            </p>
            <button
              onClick={restartTest}
              className="bg-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              Restart Test
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-800 rounded-lg transition"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold">Current Affairs 2026</h1>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setLanguage(language === 'mizo'? 'english' : 'mizo')}
              className="bg-purple-600 px-3 py-1 rounded text-sm font-bold hover:bg-purple-700"
            >
              {language === 'mizo'? 'English' : 'Mizo'}
            </button>
            <div className="text-right">
              <div className="text-sm text-gray-400">Score</div>
              <div className="text-xl font-bold">{score}/{questions.length}</div>
            </div>
          </div>
        </div>

        <div className="mb-4 bg-gray-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-3 flex justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CategoryIcon size={16} />
              <span className="capitalize">{question.category} | {question.date}</span>
            </div>
            <span>Question {currentQ + 1} of {questions.length}</span>
          </div>

          <h2 className="text-xl mb-4">{question.question[language]}</h2>

          <div className="space-y-2">
            {question.options[language].map((option, idx) => (
              <button
                key={idx}
                onClick={() =>!showAnswer && handleAnswer(idx)}
                disabled={showAnswer}
                className={`w-full text-left p-3 rounded transition ${
                  showAnswer
             ? idx === question.correctAnswer
               ? 'bg-green-600 border-2 border-green-400'
                      : idx === selectedOption
               ? 'bg-red-600 border-2 border-red-400'
                      : 'bg-gray-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="mt-6 p-4 bg-gray-700 rounded">
              <p className="font-bold mb-2 text-lg">
                {selectedOption === question.correctAnswer? '✅ Correct!' : '❌ Wrong!'}
              </p>
              <p className="mb-2">{question.explanation[language]}</p>
              <button
                onClick={nextQuestion}
                className="w-full bg-blue-600 px-4 py-3 rounded font-bold hover:bg-blue-700"
              >
                {currentQ < questions.length - 1? 'Next Question →' : 'Finish Test'}
              </button>
            </div>
          )}
        </div>

        {!isPro && (
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg text-center">
            <p className="text-sm">🔒 Free users: 20 questions only. Upgrade to Pro for all 100 questions!</p>
          </div>
        )}
      </div>
    </div>
  )
}