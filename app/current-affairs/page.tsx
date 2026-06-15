'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { showInterstitial } from '@/lib/admob'

const currentAffairsChapters = [
  {
    id: 'ca-world-2026',
    title: {
      mizo: 'World News Jan-May 2026',
      english: 'World News Jan-May 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. UN Security Council** - 2027-28 Non-Permanent Member atan Portugal, Austria thlan tlin. Germany tling zo lo.',
        '**2. UNGA President** - Bangladesh Khalilur Rahman 81st Session President.',
        '**3. China Statement** - China in India nen "cooperative partners" nih duh thu sawi.',
        '**FEBRUARY-MARCH 2026:**',
        '**4. Nepal Border** - Nepal FM in India nen Kalapani-Lipulekh issue resolve duh. Third party mediation duh lo.',
        '**5. Canada** - Under-16 tan Social Media ban tum.',
        '**APRIL-MAY 2026:**',
        '**6. Iran-Israel War** - US-Israel in Iran bei. Crude oil man kai. Market 1% tla.',
        '**7. Iran Travel Advisory** - India in citizens te Iran kal lo turin hriattir.',
        '**8. G7 Summit** - June 15-17 Italy ah. Ukraine support, China trade issue discuss.',
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. UN Security Council** - Portugal and Austria elected as Non-Permanent Members for 2027-28.',
        '**2. UNGA President** - Bangladesh Khalilur Rahman elected 81st Session President.',
        '**APRIL-MAY 2026:**',
        '**6. Iran-Israel War** - US-Israel attacked Iran. Crude oil prices rose.',
        '**7. Iran Travel Advisory** - India advised citizens not to travel to Iran.',
      ]
    }
  },
  {
    id: 'ca-national-2026',
    title: {
      mizo: 'National News Jan-May 2026',
      english: 'National News Jan-May 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. E85 Fuel Launch** - India in 85% Ethanol blend E85 Fuel hmasa ber launch. Petrol import ti tlem tur.',
        '**2. IIP Base Year** - 2011-12 atangin 2022-23 ah thlak. Gas & Water Supply telh.',
        '**3. India HDI 2025** - Rank 132/193. Medium Human Development.',
        '**FEBRUARY 2026:**',
        '**4. GDP Growth** - FY 2025-26 ah 7.7% growth, kum 2 chhunga sang ber.',
        '**5. RBI Policy** - Repo Rate 5.25% ah dah nghet. Growth forecast 6.6%.',
        '**6. Nuclear Warheads** - SIPRI: India in 190 nuclear warheads nei.',
        '**MARCH 2026:**',
        '**7. 100th Ramsar Site** - Jai Prakash Narayan Bird Sanctuary, UP.',
        '**8. Vegan Logo** - FSSAI in official Vegan Logo launch.',
        '**9. India-France Deal** - $9 billion Rafale-M deal sign. 26 aircraft Navy tan.',
        '**APRIL 2026:**',
        '**10. Current Account Surplus** - Jan-Mar 2026 ah $7.1 billion surplus, GDP 0.7%.',
        '**11. India-UK FTA** - April 2026 ah sign. Scotch whisky duty 150% to 75%.',
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. E85 Fuel Launch** - India launched first 85% Ethanol blend E85 Fuel.',
        '**FEBRUARY 2026:**',
        '**4. GDP Growth** - 7.7% growth in FY 2025-26, highest in 2 years.',
        '**5. RBI Policy** - Repo Rate kept at 5.25%.',
        '**APRIL 2026:**',
        '**10. Current Account Surplus** - $7.1 billion surplus in Jan-Mar 2026.',
      ]
    }
  },
  {
    id: 'ca-mizoram-2026',
    title: {
      mizo: 'Mizoram News Jan-May 2026',
      english: 'Mizoram News Jan-May 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. Myanmar Refugees** - Minister Lalnghinglova Hmar: Total 38,059 Myanmar, Bangladesh, Manipur IDP awm. Biometric 93% zo.',
        '**2. Tourism Growth** - 2023-2024 ah tourist 145.54% pung. Rail connectivity vang.',
        '**3. New Snake Species** - Calamaria mizoramensis hmuh chhuah. Mizoram University + Russia, Germany, Vietnam.',
        '**FEBRUARY 2026:**',
        '**4. Railway Link** - Bairabi-Sairang line Sept 2025 hawn tawh. Aizawl rail connection hmasa ber.',
        '**5. Geological Faults** - Mizoram hi Churachandpur Mao Fault leh Mat Fault inkarah awm.',
        '**MARCH 2026:**',
        '**6. Tourism Events Calendar** - Dec 2025 ah launch. Festival, cultural programme, sports events.',
        '**7. Thainzal Tourism** - Aizawl atanga darkar 3. Waterfall, golf course, valley siam tum.',
        '**APRIL 2026:**',
        '**8. State Credit Seminar** - Dec 16, 2025 ah CM Lalduhoma hmanpui. NABARD in Rs 4,349.71 crores priority sector tan ruahman.',
        '**9. Thenzawl Solar Plant** - 10 MW NABARD funding, hawn tep. 5 MW Sumsuih ah siam leh tur.',
        '**10. Rubber Mission** - 4,50,000 rubber saplings phun tawh. 11,00,000 phun leh tum.',
        '**MAY 2026:**',
        '**11. BRO Operations** - May 30 ah ruah nasa vangin kawng tlahniam. BRO in 24x7 hna thawk. Koloriang-Lee-Sarli-Huri kawng tihnun.',
        '**12. Assam Rifles Training** - May 26-30 ah Boatmanship Training. Monsoon inpeihna.',
        '**13. PM Modi Project** - June 9 Rs 9,000 crore development works Aizawl ah hawng. "Historic day" - Aizawl India railway map ah lut. Rajdhani Express Delhi-Sairang tlan tan.',
        '**14. ED Raid Champhai** - June 5 hmun 9 raid. Myanmar supari smuggling. Fake e-way bills Rs 251.19 cr SGST + Rs 86.25 cr CGST fraud.',
        '**15. Electoral Roll SIR** - Month khat chhung June 28 thleng. Voter 8,75,068. Online submission theih.',
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. Myanmar Refugees** - Total 38,059 including Myanmar, Bangladesh, Manipur IDPs. 93% biometric done.',
        '**2. Tourism Growth** - 145.54% rise in tourist arrivals 2023-2024 due to rail connectivity.',
        '**3. New Snake Species** - Calamaria mizoramensis discovered by Mizoram University.',
        '**FEBRUARY 2026:**',
        '**4. Railway Link** - Bairabi-Sairang line inaugurated Sept 2025. First rail connection to Aizawl.',
        '**APRIL 2026:**',
        '**8. State Credit Seminar** - CM Lalduhoma attended Dec 16, 2025. NABARD projected Rs 4,349.71 crores.',
        '**9. Thenzawl Solar Plant** - 10 MW NABARD funded, nearing inauguration.',
        '**MAY 2026:**',
        '**13. PM Modi Project** - June 9 inaugurated Rs 9,000 crore development works in Aizawl. Rajdhani Express Delhi-Sairang operational.',
        '**14. ED Raid Champhai** - June 5 raids at 9 spots. Myanmar supari smuggling.',
      ]
    }
  },
  {
    id: 'ca-sports-2026',
    title: {
      mizo: 'Sports Jan-May 2026',
      english: 'Sports Jan-May 2026'
    },
    notes: {
      mizo: [
        '**FEBRUARY 2026:**',
        '**1. Football** - India Women Team SAFF Championship 2026 champion. Kum 7 hnuah a vawi 6 nan.',
        '**APRIL 2026:**',
        '**2. Premier League 2025-26** - Arsenal Champion. 85 points. Kum 22 hnuah title la leh.',
        '**3. Champions League** - PSG Champion. Final ah Arsenal hneh.',
        '**MAY 2026:**',
        '**4. F1** - Kimi Antonelli Monaco Grand Prix 2026 la. Mercedes driver naupang ber winner.',
        '**MIZORAM SPECIAL:**',
        '**5. Santosh Trophy** - Mizoram team quarter-final lut. Services hneh lo.',
      ],
      english: [
        '**FEBRUARY 2026:**',
        '**1. Football** - India Women Team SAFF Championship 2026 champions. 6th title after 7 years.',
        '**APRIL 2026:**',
        '**2. Premier League 2025-26** - Arsenal Champions. 85 points. First title in 22 years.',
        '**3. Champions League** - PSG Champions. Defeated Arsenal 2-1 in final.',
      ]
    }
  }
]

export default function CurrentAffairsPage() {
  const router = useRouter()

  // Page load apiangin ad vawi 1
  useEffect(() => {
    showInterstitial()
  }, [])

  const handleChapterClick = (chapterNum: number, path: string) => {
    showInterstitial() // Chapter click apiangin ad
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 font-medium">← Back</Link>
            <h1 className="text-lg font-bold text-gray-900">Current Affairs 2026</h1>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              FREE
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-gray-700">
          <strong>Note:</strong> Practice questions only. Mizo Prep is not affiliated with MPSC, UPSC or any Govt entity. Jan-May 2026 current affairs.
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Affairs 2026</h2>
          <p className="text-gray-600">Chapter zawng zawng free vek. Ad en la chhunzawm rawh.</p>
        </div>

        {/* Full Test Card */}
        <div 
          onClick={() => handleChapterClick(0, '/current-affairs/test')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6 active:scale-98 cursor-pointer shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📝</span>
            <span className="font-bold text-xl">Full Test 100 Questions</span>
          </div>
          <p className="text-sm opacity-90">Jan-May 2026 zawng zawng - FREE - Ad support</p>
          <div className="mt-3 bg-white/20 rounded-lg px-3 py-1 inline-block text-xs font-semibold">
            TAP TO START →
          </div>
        </div>

        {/* Chapter 1 */}
        <div 
          onClick={() => handleChapterClick(1, '/current-affairs/chapter-1')}
          className="bg-white rounded-lg shadow p-4 mb-3 active:scale-98 cursor-pointer border-l-4 border-blue-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600 font-semibold">Chapter 1</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">FREE</span>
              </div>
              <p className="font-medium text-gray-800">World News Jan-May 2026</p>
              <p className="text-xs text-gray-500 mt-1">25 Questions</p>
            </div>
            <span className="text-gray-400 text-xl">→</span>
          </div>
        </div>

        {/* Chapter 2 */}
        <div 
          onClick={() => handleChapterClick(2, '/current-affairs/chapter-2')}
          className="bg-white rounded-lg shadow p-4 mb-3 active:scale-98 cursor-pointer border-l-4 border-blue-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600 font-semibold">Chapter 2</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">FREE</span>
              </div>
              <p className="font-medium text-gray-800">National News Jan-May 2026</p>
              <p className="text-xs text-gray-500 mt-1">25 Questions</p>
            </div>
            <span className="text-gray-400 text-xl">→</span>
          </div>
        </div>

        {/* Chapter 3 */}
        <div 
          onClick={() => handleChapterClick(3, '/current-affairs/chapter-3')}
          className="bg-white rounded-lg shadow p-4 mb-3 active:scale-98 cursor-pointer border-l-4 border-orange-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600 font-semibold">Chapter 3</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">📺 AD</span>
              </div>
              <p className="font-medium text-gray-800">Mizoram News Jan-May 2026</p>
              <p className="text-xs text-gray-500 mt-1">25 Questions - Ad en a ngai</p>
            </div>
            <span className="text-gray-400 text-xl">→</span>
          </div>
        </div>

        {/* Chapter 4 */}
        <div 
          onClick={() => handleChapterClick(4, '/current-affairs/chapter-4')}
          className="bg-white rounded-lg shadow p-4 mb-3 active:scale-98 cursor-pointer border-l-4 border-orange-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600 font-semibold">Chapter 4</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">📺 AD</span>
              </div>
              <p className="font-medium text-gray-800">Sports Jan-May 2026</p>
              <p className="text-xs text-gray-500 mt-1">25 Questions - Ad en a ngai</p>
            </div>
            <span className="text-gray-400 text-xl">→</span>
          </div>
        </div>

      </div>
    </div>
  )
}