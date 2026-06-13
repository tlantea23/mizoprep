'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  date: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Jan 2026 ah UN Security Council 2027-28 Non-Permanent Member atan eng ram nge thlan tlin?',
    options: ['Germany, Japan', 'Portugal, Austria', 'India, Brazil', 'France, Canada'],
    correct: 1,
    explanation: 'Jan 2026 ah Portugal leh Austria thlan tlin. Germany tling zo lo. UN Security Council Non-Permanent Member term 2 years.',
    date: 'Jan 2026'
  },
  {
    id: 2,
    question: '81st UNGA Session President 2026 atan tu nge thlan?',
    options: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka'],
    correct: 1,
    explanation: 'Bangladesh Khalilur Rahman 81st Session President atan thlan tlin. Jan 2026.',
    date: 'Jan 2026'
  },
  {
    id: 3,
    question: 'India in E85 Fuel hmasa ber launch hun:',
    options: ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'],
    correct: 1,
    explanation: 'Jan 2026 ah 85% Ethanol blend E85 Fuel launch. Petrol import leh carbon emission ti tlem tur.',
    date: 'Jan 2026'
  },
  {
    id: 4,
    question: 'IIP Base Year 2026 ah engtin nge thlak?',
    options: ['2004-05 to 2011-12', '2011-12 to 2022-23', '2015-16 to 2020-21', '2010-11 to 2021-22'],
    correct: 1,
    explanation: 'Index of Industrial Production base year 2011-12 atangin 2022-23 ah thlak. Gas Supply leh Water Supply sector telh thar.',
    date: 'Jan 2026'
  },
  {
    id: 5,
    question: 'Mizoram ah refugee engzat nge awm Feb 2026 ah?',
    options: ['25,000', '38,059', '50,000', '15,000'],
    correct: 1,
    explanation: 'Minister Lalnghinglova Hmar sawi danin Myanmar, Bangladesh, Manipur IDP total 38,059 awm. Biometric 93% zo.',
    date: 'Feb 2026'
  },
  {
    id: 6,
    question: 'India GDP Growth FY 2025-26:',
    options: ['6.5%', '7.0%', '7.7%', '8.0%'],
    correct: 2,
    explanation: 'Feb 2026: FY 2025-26 ah 7.7% growth, kum 2 chhunga sang ber. IMF in FY27 tan 6.5% forecast.',
    date: 'Feb 2026'
  },
  {
    id: 7,
    question: 'RBI Repo Rate Feb 2026:',
    options: ['5.00%', '5.25%', '5.50%', '6.00%'],
    correct: 1,
    explanation: 'RBI in Repo Rate 5.25% ah dah nghet. Growth forecast 6.6% ah cut.',
    date: 'Feb 2026'
  },
  {
    id: 8,
    question: 'SIPRI report 2026: India nuclear warheads engzat?',
    options: ['150', '170', '190', '200'],
    correct: 2,
    explanation: 'SIPRI Feb 2026: India in 190 nuclear warheads nei. World top 5 military spender zinga mi.',
    date: 'Feb 2026'
  },
  {
    id: 9,
    question: 'India ram pum 100th Ramsar Site:',
    options: ['Loktak Lake', 'Jai Prakash Narayan Bird Sanctuary', 'Wular Lake', 'Chilika Lake'],
    correct: 1,
    explanation: 'March 2026: Jai Prakash Narayan Bird Sanctuary, Uttar Pradesh 100th Ramsar Site ah puan.',
    date: 'Mar 2026'
  },
  {
    id: 10,
    question: 'FSSAI in Vegan Logo official launch hun:',
    options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'],
    correct: 2,
    explanation: 'March 2026: FSSAI in official Vegan Logo launch. Vegan product identification tan.',
    date: 'Mar 2026'
  },
  {
    id: 11,
    question: 'Norway Chess 2026 Champion Indian hmasa ber:',
    options: ['Viswanathan Anand', 'R Praggnanandhaa', 'Gukesh D', 'Arjun Erigaisi'],
    correct: 1,
    explanation: 'Feb 2026: R Praggnanandhaa Norway Chess 2026 Champion. World No.2 Magnus Carlsen hneh. Indian hmasa ber.',
    date: 'Feb 2026'
  },
  {
    id: 12,
    question: 'India Women Team SAFF Championship 2026 eng vawi nge an lak?',
    options: ['5th', '6th', '7th', '8th'],
    correct: 1,
    explanation: 'Feb 2026: India Women Team SAFF Championship 2026 champion. Kum 7 hnuah a vawi 6 nan.',
    date: 'Feb 2026'
  },
  {
    id: 13,
    question: 'Current Account Surplus Jan-Mar 2026:',
    options: ['$5.1 billion', '$7.1 billion', '$9.1 billion', '$3.1 billion'],
    correct: 1,
    explanation: 'April 2026: Jan-Mar 2026 ah $7.1 billion surplus, GDP 0.7%. Services export leh remittances vang.',
    date: 'Apr 2026'
  },
  {
    id: 14,
    question: 'UP Police Constable exam 2026 ah candidate engzat?',
    options: ['10 lakh', '20 lakh', '28 lakh', '35 lakh'],
    correct: 2,
    explanation: 'April 2026: Constable post 32,679 atan mi 28 lakh exam. Unemployment nasa hle tih a lang.',
    date: 'Apr 2026'
  },
  {
    id: 15,
    question: 'Iran-Israel War 2026 tan hun:',
    options: ['Mar 2026', 'Apr 2026', 'May 2026', 'June 2026'],
    correct: 1,
    explanation: 'April-May 2026: US-Israel in Iran bei. Crude oil man kai. Market 1% tla.',
    date: 'Apr-May 2026'
  },
  {
    id: 16,
    question: 'Iran-Israel Ceasefire 2026 puan hun:',
    options: ['June 5', 'June 8', 'June 10', 'June 15'],
    correct: 1,
    explanation: 'June 8, 2026: Netanyahu in fighting halt ti mahse future attack chu "with force" respond ang a ti.',
    date: 'June 2026'
  },
  {
    id: 17,
    question: 'US Judge in Trump H-1B visa fee engzat nge unlawful ti a titawp?',
    options: ['$50,000', '$75,000', '$100,000', '$125,000'],
    correct: 2,
    explanation: 'June 2026: US Judge in Trump $100,000 H-1B visa fee unlawful tiin ti tawp. Indian IT professional tan relief.',
    date: 'June 2026'
  },
  {
    id: 18,
    question: 'PM Modi in Aizawl ah Rs engzat development works hawng June 2026?',
    options: ['Rs 5,000 crore', 'Rs 7,000 crore', 'Rs 9,000 crore', 'Rs 10,000 crore'],
    correct: 2,
    explanation: 'June 9, 2026: PM Modi in Rs 9,000 crore development works Aizawl ah hawng. "Historic day" - Aizawl India railway map ah lut.',
    date: 'June 2026'
  },
  {
    id: 19,
    question: 'Rajdhani Express Delhi-Sairang tlan tan hun:',
    options: ['May 2026', 'June 2026', 'July 2026', 'Aug 2026'],
    correct: 1,
    explanation: 'June 2026: Rajdhani Express Delhi-Sairang tlan tan. Bairabi-Sairang line Sept 2025 hawn tawh.',
    date: 'June 2026'
  },
  {
    id: 20,
    question: 'ED in Champhai ah hmun engzat raid June 2026?',
    options: ['5', '7', '9', '12'],
    correct: 2,
    explanation: 'June 5, 2026: ED in hmun 9 raid. Myanmar supari smuggling. Fake e-way bills Rs 251.19 cr SGST + Rs 86.25 cr CGST fraud.',
    date: 'June 2026'
  },
  {
    id: 21,
    question: 'Monsoon 2026 India ram pum thleng hun:',
    options: ['June 5', 'June 8', 'June 10', 'June 15'],
    correct: 2,
    explanation: 'June 10, 2026: Monsoon India ram pumah thleng. Kerala ah ni 3 hma.',
    date: 'June 2026'
  },
  {
    id: 22,
    question: 'Digital India 2.0 launch hun:',
    options: ['June 15', 'June 18', 'June 20', 'June 25'],
    correct: 1,
    explanation: 'June 18, 2026: Digital India 2.0 launch. AI, 6G, Quantum tech focus.',
    date: 'June 2026'
  },
  {
    id: 23,
    question: 'G7 Summit 2026 khawiah nge neih?',
    options: ['France', 'Germany', 'Italy', 'Japan'],
    correct: 2,
    explanation: 'June 15-17, 2026: G7 Summit Italy ah. Ukraine support, China trade issue discuss.',
    date: 'June 2026'
  },
  {
    id: 24,
    question: 'Sweden, Finland NATO full membership activate hun:',
    options: ['May 2026', 'June 2026', 'July 2026', 'Aug 2026'],
    correct: 1,
    explanation: 'June 2026: Sweden, Finland NATO full membership activate. Russia-Ukraine war vangin.',
    date: 'June 2026'
  },
  {
    id: 25,
    question: 'FIFA World Cup 2026 tan hun:',
    options: ['June 8', 'June 11', 'June 15', 'June 20'],
    correct: 1,
    explanation: 'June 11, 2026: FIFA World Cup USA-Mexico-Canada ah tan. Opening match Mexico City. India qualify lo.',
    date: 'June 2026'
  },
  {
    id: 26,
    question: 'Chess World Cup 2026 khawiah nge tan?',
    options: ['Chennai', 'Baku', 'Moscow', 'London'],
    correct: 1,
    explanation: 'June 15, 2026: Chess World Cup Baku ah tan. India: Gukesh D, Arjun Erigaisi, Praggnanandhaa tel.',
    date: 'June 2026'
  },
  {
    id: 27,
    question: 'Wimbledon 2026 tan hun:',
    options: ['June 25', 'June 29', 'July 1', 'July 5'],
    correct: 1,
    explanation: 'June 29, 2026: Wimbledon tan. Indian players 3 qualified: Sumit Nagal, Ankita Raina, Rohan Bopanna.',
    date: 'June 2026'
  },
  {
    id: 28,
    question: 'Champions League 2025-26 Winner:',
    options: ['Arsenal', 'Real Madrid', 'Bayern Munich', 'PSG'],
    correct: 4,
    explanation: 'May 2026: PSG Champion. Final ah Arsenal hneh.',
    date: 'May 2026'
  },
  {
    id: 29,
    question: 'Premier League 2025-26 Champion:',
    options: ['Man City', 'Arsenal', 'Liverpool', 'Chelsea'],
    correct: 2,
    explanation: 'April 2026: Arsenal Champion.',
    date: 'Apr 2026'
  },
  {
    id: 30,
    question: 'Monaco Grand Prix 2026 Winner:',
    options: ['Max Verstappen', 'Lewis Hamilton', 'Kimi Antonelli', 'Charles Leclerc'],
    correct: 2,
    explanation: 'May 2026: Kimi Antonelli Monaco Grand Prix 2026 la. Mercedes driver naupang ber winner.',
    date: 'May 2026'
  },
  {
    id: 31,
    question: 'PM-JAY hnuaiah family engzat cover Jan 2026?',
    options: ['10 crore', '12 crore', '15 crore', '20 crore'],
    correct: 1,
    explanation: 'Ayushman Bharat PM-JAY: Rs 5 lakh insurance. 12 crore family cover. 2026: 55 crore beneficiary.',
    date: 'Jan 2026'
  },
  {
    id: 32,
    question: 'PM-KISAN hnuaiah farmer engzat benefit dawng?',
    options: ['8 crore', '10 crore', '11 crore', '12 crore'],
    correct: 2,
    explanation: 'PM-KISAN: Rs 6000/year. 11 crore farmer. Rs 3.68 lakh crore disburse tawh.',
    date: 'Jan 2026'
  },
  {
    id: 33,
    question: 'MGNREGA wage Mizoram 2026:',
    options: ['Rs 229/day', 'Rs 249/day', 'Rs 269/day', 'Rs 289/day'],
    correct: 1,
    explanation: 'MGNREGA: Ni 100 hna guarantee. Mizoram: Rs 249/day. State tin wage dang.',
    date: 'Jan 2026'
  },
  {
    id: 34,
    question: 'PM Mudra Yojana Shishu loan limit:',
    options: ['Rs 25,000', 'Rs 50,000', 'Rs 75,000', 'Rs 1,00,000'],
    correct: 1,
    explanation: 'PM Mudra: Shishu <50k, Kishore 50k-5L, Tarun 5L-10L loan. No collateral.',
    date: 'Jan 2026'
  },
  {
    id: 35,
    question: 'UPI transaction Jan 2026:',
    options: ['12.99 billion', '14.99 billion', '16.99 billion', '18.99 billion'],
    correct: 2,
    explanation: 'Jan 2026: 16.99 billion transaction. World highest. Digital economy growth.',
    date: 'Jan 2026'
  },
  {
    id: 36,
    question: 'India HDI 2025 Rank:',
    options: ['125/193', '132/193', '140/193', '145/193'],
    correct: 1,
    explanation: 'India HDI 2025: 0.685, Rank 132/193. Category: Medium Human Development.',
    date: 'Jan 2026'
  },
  {
    id: 37,
    question: 'Mizoram Literacy Rate Census 2011:',
    options: ['88.3%', '91.3%', '93.3%', '95.3%'],
    correct: 1,
    explanation: 'Census 2011: Mizoram 91.3% literacy. India ah 3rd highest. Kerala 94%, Lakshadweep 91.8%.',
    date: 'Jan 2026'
  },
  {
    id: 38,
    question: 'NABARD in Mizoram priority sector tan engzat ruahman?',
    options: ['Rs 3,349.71 cr', 'Rs 4,349.71 cr', 'Rs 5,349.71 cr', 'Rs 6,349.71 cr'],
    correct: 1,
    explanation: 'Dec 2025 State Credit Seminar: NABARD in Rs 4,349.71 crores priority sector tan ruahman.',
    date: 'Dec 2025'
  },
  {
    id: 39,
    question: 'Thenzawl Solar Plant capacity:',
    options: ['5 MW', '10 MW', '15 MW', '20 MW'],
    correct: 1,
    explanation: 'Thenzawl Solar Plant: 10 MW NABARD funding, hawn tep. 5 MW Sumsuih ah siam leh tur.',
    date: 'Apr 2026'
  },
  {
    id: 40,
    question: 'Rubber Mission Mizoram ah sapling engzat phun tawh?',
    options: ['2,50,000', '3,50,000', '4,50,000', '5,50,000'],
    correct: 2,
    explanation: 'April 2026: 4,50,000 rubber saplings phun tawh. 11,00,000 phun leh tum.',
    date: 'Apr 2026'
  },
  {
    id: 41,
    question: 'Mizoram University in snake thar hmuh chhuah hming:',
    options: ['Calamaria mizoramensis', 'Python mizoramensis', 'Cobra mizoramensis', 'Viper mizoramensis'],
    correct: 0,
    explanation: 'Jan 2026: Calamaria mizoramensis hmuh chhuah. Mizoram University + Russia, Germany, Vietnam. Zootaxa ah publish.',
    date: 'Jan 2026'
  },
  {
    id: 42,
    question: 'Mizoram Tourism Growth 2023-2024:',
    options: ['100.54%', '125.54%', '145.54%', '165.54%'],
    correct: 2,
    explanation: '2023-2024 ah tourist 145.54% pung. Rail connectivity vang. Bairabi-Sairang line.',
    date: 'Jan 2026'
  },
  {
    id: 43,
    question: 'PM Awas Yojana Aizawl ah in engzat hawn June 2026?',
    options: ['300', '400', '500', '600'],
    correct: 2,
    explanation: 'June 14, 2026: PM Awas Yojana Aizawl ah in 500 hawn. CM Lalduhoma in hawn.',
    date: 'June 2026'
  },
  {
    id: 44,
    question: 'IMD in Mizoram tan red alert pek hun:',
    options: ['June 10', 'June 12', 'June 15', 'June 18'],
    correct: 1,
    explanation: 'June 12, 2026: IMD in Mizoram tan red alert. Landslide warning district 6 ah. Heavy rainfall.',
    date: 'June 2026'
  },
  {
    id: 45,
    question: 'Shaurya Chakra 2026 dawngtu:',
    options: ['Maj Gen Singh', 'Lt Commander Suraj Prashar', 'Col Sharma', 'Capt Verma'],
    correct: 1,
    explanation: 'Jan 2026: Lt Commander Suraj Prashar, Indian Navy. Submarine rescue operation.',
    date: 'Jan 2026'
  },
  {
    id: 46,
    question: 'RBI Governor term extend tu:',
    options: ['Shaktikanta Das', 'Urjit Patel', 'Sanjay Malhotra', 'Raghuram Rajan'],
    correct: 2,
    explanation: 'June 2026: Sanjay Malhotra term extend. RBI Governor.',
    date: 'June 2026'
  },
  {
    id: 47,
    question: 'DRDO Chief extension:',
    options: ['1 year', '2 years', '3 years', '5 years'],
    correct: 1,
    explanation: 'June 2026: Dr Samir Kamat DRDO Chief extension 2 years.',
    date: 'June 2026'
  },
  {
    id: 48,
    question: 'IndiaAI Mission CEO thar:',
    options: ['Nandan Nilekani', 'Saurabh Vijay', 'R S Sharma', 'Arvind Gupta'],
    correct: 1,
    explanation: 'Jan 2026: Saurabh Vijay, UIDAI CEO hlui, IndiaAI Mission CEO.',
    date: 'Jan 2026'
  },
  {
    id: 49,
    question: 'World Bank Executive Director Indian:',
    options: ['Raghuram Rajan', 'Arvind Subramanian', 'Neelkanth Mishra', 'Kaushik Basu'],
    correct: 2,
    explanation: 'Jan 2026: Neelkanth Mishra, World Bank Executive Director thar.',
    date: 'Jan 2026'
  },
  {
    id: 50,
    question: 'Mizoram Electoral Roll SIR 2026 voter engzat?',
    options: ['7,75,068', '8,75,068', '9,75,068', '10,75,068'],
    correct: 1,
    explanation: 'June 2026: Electoral Roll SIR. Month khat chhung June 28 thleng. Voter 8,75,068. Online submission theih.',
    date: 'June 2026'
  },
  {
    id: 51,
    question: 'Kirti Chakra 2026 dawngtu Mizo pa hming dik:',
    options: ['Naib Subedar Sanglawma', 'Captain Lalrinawma Sailo', 'Subedar Chalhnuna Lushai', 'Hav Lalhmingthanga'],
    correct: 2,
    explanation: 'Captain Lalrinawma Sailo, 4 Para (Special Forces). President Droupadi Murmu hnen atangin dawng. Mizo zinga Kirti Chakra dawng thei pahnihna. Hmasa ber Subedar Chalhnuna Lushai 1968. Pahalgam beitu hel pathum kap hlum. Operation "The Cleanest Operation" tiin Army in sawi.',
    date: 'May 2026'
  },
  {
    id: 52,
    question: 'National Florence Nightingale Award 2026 dawngtu Mizo nu:',
    options: ['Lalnunpuii Sailo', 'Pi Lalenthangi Hnamte', 'Lalremruati', 'Lalbiakdiki'],
    correct: 2,
    explanation: 'May 12, 2026: Pi Lalenthangi Hnamte, Health Worker, Tuichawng Ayush Health & Wellness Centre. Rashtrapati Bhavan, New Delhi ah President Droupadi Murmu in hlan. India rama Nurse chawimawina sang ber.',
    date: 'May 12, 2026'
  },
  {
    id: 53,
    question: 'ASEAN Summit 2026 khawiah nge neih?',
    options: ['Bangkok', 'Jakarta', 'Manila', 'Hanoi'],
    correct: 1,
    explanation: 'April 2026: ASEAN Summit Jakarta, Indonesia ah neih. Myanmar crisis leh South China Sea issue discuss ber. India Special Invitee.',
    date: 'Apr 2026'
  },
  {
    id: 54,
    question: 'BRICS Summit 2026 Host Country:',
    options: ['Brazil', 'Russia', 'India', 'South Africa'],
    correct: 1,
    explanation: 'July 2026: BRICS Summit Russia Kazan ah. New Development Bank expansion. BRICS currency discuss. De-dollarization.',
    date: 'July 2026'
  },
  {
    id: 55,
    question: 'G20 Summit 2026 khawiah?',
    options: ['South Africa', 'Brazil', 'USA', 'Argentina'],
    correct: 2,
    explanation: 'Sept 2026: G20 Summit USA ah. Theme: "Inclusive Growth & Digital Transformation". PM Modi tel. India in 2023 host tawh.',
    date: 'Sept 2026'
  },
  {
    id: 56,
    question: 'India-France Rafale-M deal 2026 engzat man?',
    options: ['$5 billion', '$7 billion', '$9 billion', '$11 billion'],
    correct: 2,
    explanation: 'March 2026: India-France in $9 billion Rafale-M deal sign. 26 aircraft Navy tan. INS Vikrant leh INS Vikramaditya ah hman tur. Make in India 50%.',
    date: 'Mar 2026'
  },
  {
    id: 57,
    question: 'India in Agni-6 missile test hlawhtling hun:',
    options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'],
    correct: 2,
    explanation: 'March 2026: Agni-6 ICBM test hlawhtling. Range 12,000 km. MIRV technology - warhead 10 keng thei. China leh Europe kap phak.',
    date: 'Mar 2026'
  },
  {
    id: 58,
    question: 'ISRO Aditya-L2 mission launch hun:',
    options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'],
    correct: 1,
    explanation: 'Feb 2026: Aditya-L2 launch hlawhtling. Sun study tan L2 orbit atangin. Aditya-L1 hlawhtlin hnuah. 7 payload.',
    date: 'Feb 2026'
  },
  {
    id: 59,
    question: 'Chandrayaan-4 launch target kum:',
    options: ['2026', '2027', '2028', '2029'],
    correct: 2,
    explanation: 'June 2026: ISRO in Chandrayaan-4 launch 2028 ah tih puang. Lunar sample return mission. Japan JAXA nen thawhdun. 2 launch vehicle.',
    date: 'June 2026'
  },
  {
    id: 60,
    question: 'India AI Supercomputer "AIRAWAT" upgrade 2026 capacity:',
    options: ['10 PetaFLOPS', '15 PetaFLOPS', '20 PetaFLOPS', '25 PetaFLOPS'],
    correct: 2,
    explanation: 'April 2026: AIRAWAT upgrade 20 PetaFLOPS ah. Asia fastest AI supercomputer. Pune C-DAC ah. IndiaAI Mission hnuaiah.',
    date: 'Apr 2026'
  },
  {
    id: 61,
    question: '6G technology trial India in neih tan hun:',
    options: ['Mar 2026', 'Apr 2026', 'May 2026', 'June 2026'],
    correct: 2,
    explanation: 'May 2026: 6G trial Delhi, Mumbai, Bangalore ah tan. Speed 1 Tbps target. 2030 commercial launch tum. Bharat 6G Alliance.',
    date: 'May 2026'
  },
  {
    id: 62,
    question: 'National Green Hydrogen Mission 2030 target:',
    options: ['3 MMT', '5 MMT', '7 MMT', '10 MMT'],
    correct: 1,
    explanation: 'Budget Rs 19,744 cr. 2030 ah 5 MMT production target. Green ammonia export. Jobs 6 lakh siam tum. Carbon emission 50 MMT ti tlem.',
    date: 'Jan 2026'
  },
  {
    id: 63,
    question: 'PM Surya Ghar Muft Bijli Yojana hnuaiah in engzat solar pek tawh June 2026?',
    options: ['50 lakh', '75 lakh', '1 crore', '1.25 crore'],
    correct: 2,
    explanation: 'June 2026: 1 crore households solar panel install tawh. 300 units free per month. Rs 75,021 cr budget. Subsidy Rs 78,000.',
    date: 'June 2026'
  },
  {
    id: 64,
    question: 'Vande Bharat Sleeper train hmasa ber route:',
    options: ['Delhi-Mumbai', 'Delhi-Howrah', 'Mumbai-Chennai', 'Delhi-Bangalore'],
    correct: 1,
    explanation: 'Feb 2026: Vande Bharat Sleeper Delhi-Howrah route ah tlan tan. 16 hours. Speed 160 kmph. 3-tier AC, 2-tier AC, 1st AC.',
    date: 'Feb 2026'
  },
  {
    id: 65,
    question: 'Bullet Train Mumbai-Ahmedabad project zawh hun tur:',
    options: ['2027', '2028', '2029', '2030'],
    correct: 1,
    explanation: 'June 2026: 70% work zo tawh. 2028 December ah commercial operation tan tum. 508 km, 320 kmph speed. Japan Shinkansen tech.',
    date: 'June 2026'
  },
  {
    id: 66,
    question: 'India Semiconductor plant hmasa ber khawiah din?',
    options: ['Gujarat', 'Assam', 'Tamil Nadu', 'Karnataka'],
    correct: 0,
    explanation: 'March 2026: Tata-PSMC Semiconductor plant Dholera, Gujarat ah hawn. Rs 91,000 cr investment. Chip production 2027 tan. 28nm chips.',
    date: 'Mar 2026'
  },
  {
    id: 67,
    question: 'National Quantum Mission budget:',
    options: ['Rs 4,000 cr', 'Rs 6,000 cr', 'Rs 8,000 cr', 'Rs 10,000 cr'],
    correct: 1,
    explanation: 'Jan 2026: National Quantum Mission Rs 6,000 cr. Quantum computer 50-100 qubit, communication, sensing develop. 2031 target.',
    date: 'Jan 2026'
  },
  {
    id: 68,
    question: 'India GDP size June 2026:',
    options: ['$3.5 trillion', '$4.0 trillion', '$4.5 trillion', '$5.0 trillion'],
    correct: 2,
    explanation: 'June 2026: India GDP $4.5 trillion. World 4th largest economy. Japan lehpelh. 2027 ah $5 trillion target. 7.7% growth FY26.',
    date: 'June 2026'
  },
  {
    id: 69,
    question: 'Forex Reserves India June 2026:',
    options: ['$650 billion', '$680 billion', '$710 billion', '$740 billion'],
    correct: 2,
    explanation: 'June 2026: Forex Reserves $710 billion. All-time high. Import cover 11 months. RBI data.',
    date: 'June 2026'
  },
  {
    id: 70,
    question: 'UPI transaction value Jan 2026:',
    options: ['Rs 18 lakh crore', 'Rs 20 lakh crore', 'Rs 22 lakh crore', 'Rs 24 lakh crore'],
    correct: 2,
    explanation: 'Jan 2026: UPI transaction Rs 22 lakh crore. 16.99 billion transactions. NPCI report. World highest digital payment.',
    date: 'Jan 2026'
  },
  {
    id: 71,
    question: 'India in Defense Export 2025-26:',
    options: ['Rs 18,000 cr', 'Rs 21,000 cr', 'Rs 24,000 cr', 'Rs 27,000 cr'],
    correct: 1,
    explanation: 'April 2026: Defense export Rs 21,000 cr. Target Rs 35,000 cr by 2025. BrahMos, Akash missile, Tejas export. 100+ countries.',
    date: 'Apr 2026'
  },
  {
    id: 72,
    question: 'Tejas Mk2 fighter jet first flight hun tur:',
    options: ['2026', '2027', '2028', '2029'],
    correct: 1,
    explanation: 'June 2026: Tejas Mk2 first flight 2027 ah tih puang. Indigenous 4.5 gen fighter. GE F414 engine. Canard design.',
    date: 'June 2026'
  },
  {
    id: 73,
    question: 'INS Vikrant full operational hun:',
    options: ['2024', '2025', '2026', '2027'],
    correct: 2,
    explanation: 'Jan 2026: INS Vikrant full operational. 36 aircraft carry thei. MiG-29K, MH-60R, Tejas-N. Indian Ocean ah deploy.',
    date: 'Jan 2026'
  },
  {
    id: 74,
    question: 'India-China Border talks 2026 round engzatna?',
    options: ['20th', '21st', '22nd', '23rd'],
    correct: 2,
    explanation: 'May 2026: 22nd round Corps Commander Level talks. Ladakh standoff de-escalation discuss. Pangong Tso, Gogra-Hot Springs area.',
    date: 'May 2026'
  },
  {
    id: 75,
    question: 'QUAD Summit 2026 host:',
    options: ['India', 'USA', 'Japan', 'Australia'],
    correct: 0,
    explanation: 'March 2026: QUAD Summit New Delhi ah. PM Modi host. China Indo-Pacific aggression, maritime security discuss.',
    date: 'Mar 2026'
  },
  {
    id: 76,
    question: 'India-UAE CEPA trade 2025-26:',
    options: ['$75 billion', '$85 billion', '$95 billion', '$105 billion'],
    correct: 1,
    explanation: 'June 2026: India-UAE trade $85 billion. CEPA hnuah 30% pung. 2027 ah $100 billion target. Crude oil, gold, gems.',
    date: 'June 2026'
  },
  {
    id: 77,
    question: 'India-Australia ECTA review hun:',
    options: ['Jan 2026', 'Mar 2026', 'May 2026', 'July 2026'],
    correct: 1,
    explanation: 'March 2026: ECTA review. Critical minerals, education, agriculture telh belh. Trade $50 billion target. Lithium, cobalt.',
    date: 'Mar 2026'
  },
  {
    id: 78,
    question: 'India-UK FTA sign hun:',
    options: ['Feb 2026', 'Apr 2026', 'June 2026', 'Aug 2026'],
    correct: 1,
    explanation: 'April 2026: India-UK FTA sign. Scotch whisky duty 150% to 75%. Indian textile, pharma, IT access. $100 billion trade target.',
    date: 'Apr 2026'
  },
  {
    id: 79,
    question: 'UN Climate Summit COP31 2026 host:',
    options: ['Brazil', 'India', 'UAE', 'Egypt'],
    correct: 0,
    explanation: 'Nov 2026: COP31 Brazil Belem ah. Amazon deforestation, climate finance $100 billion, loss & damage fund discuss ber tur.',
    date: 'June 2026'
  },
  {
    id: 80,
    question: 'India Net Zero target kum:',
    options: ['2050', '2060', '2070', '2080'],
    correct: 2,
    explanation: 'PM Modi COP26 ah puang: Net Zero 2070. Panchamrit: 500 GW non-fossil 2030, 50% renewable energy, 1 billion ton carbon reduce.',
    date: 'Jan 2026'
  },
  {
    id: 81,
    question: 'LiFE Mission launch hun:',
    options: ['2022', '2023', '2024', '2025'],
    correct: 0,
    explanation: 'LiFE = Lifestyle for Environment. Oct 2022 ah PM Modi in launch. Global movement. Pro-Planet People. Mission LiFE.',
    date: 'Jan 2026'
  },
  {
    id: 82,
    question: 'India in Carbon Credit Trading Scheme tan hun:',
    options: ['2024', '2025', '2026', '2027'],
    correct: 2,
    explanation: 'April 2026: Carbon Credit Trading Scheme tan. Companies in emission reduce chuan credit hralh thei. CCTS. Bureau of Energy Efficiency.',
    date: 'Apr 2026'
  },
  {
    id: 83,
    question: 'Project Cheetah Phase 2 ah cheetah engzat India ah thawn belh?',
    options: ['8', '12', '16', '20'],
    correct: 1,
    explanation: 'Feb 2026: South Africa atangin 12 cheetah thawn belh. Kuno National Park. Total 20 cheetah awm tawh. Gandhi Sagar sanctuary thar.',
    date: 'Feb 2026'
  },
  {
    id: 84,
    question: 'Tiger Population India 2026:',
    options: ['3,500', '3,800', '4,000', '4,200'],
    correct: 2,
    explanation: 'June 2026: Tiger Census 2026. 4,000+ tigers. World 75% India ah. Project Tiger kum 50. 55 tiger reserves.',
    date: 'June 2026'
  },
  {
    id: 85,
    question: 'India in Lunar Space Station launch tum kum:',
    options: ['2030', '2035', '2040', '2045'],
    correct: 2,
    explanation: 'June 2026: ISRO in 2040 ah Lunar Space Station launch tum. Bharatiya Antariksha Station hnuah. NASA Artemis nen thawhdun. Moon base.',
    date: 'June 2026'
  },
  {
    id: 86,
    question: 'Gaganyaan Mission 1st uncrewed flight:',
    options: ['Dec 2025', 'Feb 2026', 'Apr 2026', 'June 2026'],
    correct: 1,
    explanation: 'Feb 2026: Gaganyaan G1 uncrewed flight hlawhtling. Vyommitra robot tel. Orbital module test. 2027 ah crewed mission 3 astronaut.',
    date: 'Feb 2026'
  },
  {
    id: 87,
    question: 'India in Submarine Cable India-Middle East-Europe launch hun:',
    options: ['2025', '2026', '2027', '2028'],
    correct: 1,
    explanation: 'May 2026: IMEEC submarine cable launch. Mumbai to Marseille. 10,000 km. Digital connectivity. 200 Tbps capacity.',
    date: 'May 2026'
  },
  {
    id: 88,
    question: 'National Education Policy 2020 implementation % June 2026:',
    options: ['60%', '70%', '80%', '90%'],
    correct: 1,
    explanation: 'June 2026: NEP 2020 implementation 70% zo. 5+3+3+4 structure. Vocational class 6 atangin. Higher education GER 28.4%. 50% target 2035.',
    date: 'June 2026'
  },
  {
    id: 89,
    question: 'PM SHRI Schools engzat upgrade tawh?',
    options: ['10,500', '12,500', '14,500', '16,500'],
    correct: 2,
    explanation: 'PM SHRI: 14,500 schools upgrade. Model school. Budget Rs 27,360 cr. 5 years. NEP 2020 implement nan.',
    date: 'Jan 2026'
  },
  {
    id: 90,
    question: 'Nari Shakti Vandan Adhiniyam implement hun:',
    options: ['2024', '2026', '2029', '2034'],
    correct: 2,
    explanation: 'Women Reservation Bill: Lok Sabha, State Assembly ah 33% reservation. 2029 Lok Sabha election atangin implement. Delimitation zawh hun.',
    date: 'Jan 2026'
  },
  {
    id: 91,
    question: 'e-SHRAM Portal ah worker engzat register June 2026?',
    options: ['25 crore', '28 crore', '30 crore', '32 crore'],
    correct: 2,
    explanation: 'June 2026: 30 crore unorganized workers register. National database. Social security scheme link. Pension, insurance.',
    date: 'June 2026'
  },
  {
    id: 92,
    question: 'Atal Pension Yojana subscriber 2026:',
    options: ['4 crore', '5 crore', '6 crore', '7 crore'],
    correct: 2,
    explanation: 'APY: Rs 1000-5000 pension. 6 crore subscriber. Unorganized sector tan. Age 18-40 join theih.',
    date: 'Jan 2026'
  },
  {
    id: 93,
    question: 'JJM Jal Jeevan Mission coverage June 2026:',
    options: ['70%', '75%', '78%', '82%'],
    correct: 2,
    explanation: 'June 2026: 15 crore household tap water. 78% coverage. Har Ghar Jal. Rs 3.6 lakh crore budget. 2024 target miss.',
    date: 'June 2026'
  },
  {
    id: 94,
    question: 'PMAY-G in engzat sak tawh?',
    options: ['2 crore', '2.5 crore', '3 crore', '3.5 crore'],
    correct: 2,
    explanation: 'PMAY-Gramin: 3 crore in sak tawh. Target 2.95 crore. Rs 1.2L-1.3L assistance. Pucca house with toilet.',
    date: 'Jan 2026'
  },
  {
    id: 95,
    question: 'India in 1st Hydrogen Train trial hun:',
    options: ['Dec 2025', 'Feb 2026', 'Apr 2026', 'June 2026'],
    correct: 1,
    explanation: 'Feb 2026: India hmasa ber Hydrogen Train trial Haryana Jind-Sonipat route ah. Zero emission. 160 kmph. 1,200 HP.',
    date: 'Feb 2026'
  },
  {
    id: 96,
    question: 'National Hydrogen Mission 2030 production target:',
    options: ['3 MMT', '5 MMT', '7 MMT', '10 MMT'],
    correct: 1,
    explanation: 'Green Hydrogen Mission: 5 MMT production 2030 ah. Rs 19,744 cr. Export hub siam tum. Electrolyser manufacturing.',
    date: 'Jan 2026'
  },
  {
    id: 97,
    question: 'India in 1st Underwater Metro khawiah?',
    options: ['Mumbai', 'Kolkata', 'Chennai', 'Kochi'],
    correct: 1,
    explanation: 'March 2026: Kolkata ah Underwater Metro hawn. Hooghly lui hnuai ah. India hmasa ber. 520 meter underwater. East-West Metro.',
    date: 'Mar 2026'
  },
  {
    id: 98,
    question: 'Mumbai Trans Harbour Link length:',
    options: ['18.5 km', '20.5 km', '21.8 km', '23.5 km'],
    correct: 2,
    explanation: 'MTHL Atal Setu: 21.8 km. India longest sea bridge. Mumbai-Navi Mumbai 20 min. 6 lane. Rs 18,000 cr. Jan 2024 hawn.',
    date: 'Jan 2026'
  },
  {
    id: 99,
    question: 'India in 1st Vertical Lift Sea Bridge:',
    options: ['Bandra-Worli', 'Pamban Bridge', 'Godavari Bridge', 'Howrah Bridge'],
    correct: 1,
    explanation: 'April 2026: New Pamban Bridge Rameswaram. Vertical lift. Train kal dawnin a in chawi sang 17 meter. Old bridge 1914. 2.07 km.',
    date: 'Apr 2026'
  },
  {
    id: 100,
    question: 'Chenab Rail Bridge height:',
    options: ['325 m', '335 m', '345 m', '359 m'],
    correct: 3,
    explanation: 'Chenab Bridge: 359 m sang. World highest railway bridge. Eiffel Tower aiin 35 m sang zawk. Udhampur-Srinagar-Baramulla line. Chenab lui chungah.',
    date: 'Jan 2026'
  }
]

export default function CurrentAffairsTestPage() {
  const [isPro, setIsPro] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const proStatus = localStorage.getItem('mizoprep_pro')
    if (proStatus!== 'true') {
      router.push('/premium')
    } else {
      setIsPro(true)
    }
  }, [router])

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

  if (!isPro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Pro Members Only</h1>
          <p className="text-gray-600 mb-4">Current Affairs Mock Test - 50 Questions</p>
          <Link href="/premium" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Get Pro ₹200
          </Link>
        </div>
      </div>
    )
  }

  if (completed) {
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
               score >= 40? 'Excellent! 👍' :
               score >= 30? 'Good Job! 😊' :
               score >= 20? 'Average - Practice More! 💪' : 'Need More Study! 📚'}
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-bold text-blue-900 mb-2">Performance:</h3>
              <p className="text-gray-700">Percentage: {((score/questions.length)*100).toFixed(1)}%</p>
              <p className="text-gray-700">Correct: {score} | Wrong: {questions.length - score}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentQ(0)
                  setSelected(null)
                  setShowAnswer(false)
                  setScore(0)
                  setCompleted(false)
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                Retry Test
              </button>
              <Link href="/current-affairs" className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium">
                Back to Notes
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
            <Link href="/current-affairs" className="text-blue-600 font-medium">← Back</Link>
            <h1 className="text-xl font-bold text-gray-900">CA 2026 Mock Test - Pro</h1>
            <div className="text-sm font-medium text-gray-600">
              {currentQ + 1}/{questions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Question {currentQ + 1}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                📅 {q.date}
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
                  } ${showAnswer? 'cursor-not-allowed' : 'cursor-pointer'}`}
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
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: q.explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          )}

          <div className="flex gap-3">
            {!showAnswer? (
              <button
                onClick={handleCheck}
                disabled={selected === null}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium"
              >
                {currentQ < questions.length - 1? 'Next Question →' : 'Finish Test'}
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Score: {score}/{questions.length}</span>
            <span className="text-gray-600">{((score/questions.length)*100).toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{width: `${((currentQ+1)/questions.length)*100}%`}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}