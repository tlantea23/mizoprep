'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { showInterstitial } from '@/lib/admob'

export interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  date: string
}

export const questions: Question[] = [
  {id: 1, question: 'UN Security Council 2027-28 Non-Permanent Member atan eng ram 2 nge thlan tlin?', options: ['Germany, Japan', 'Portugal, Austria', 'India, Brazil', 'Canada, Italy'], correct: 1, explanation: 'Jan 2026: Portugal leh Austria thlan tlin', date: 'Jan 2026'},
  {id: 2, question: '81st UNGA Session President 2026 atan tu nge thlan?', options: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka'], correct: 1, explanation: 'Bangladesh Khalilur Rahman 81st Session President atan thlan', date: 'Jan 2026'},
  {id: 3, question: 'India in E85 Fuel hmasa ber launch hun:', options: ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'], correct: 1, explanation: 'Jan 2026: 85% Ethanol blend E85 Fuel launch', date: 'Jan 2026'},
  {id: 4, question: 'IIP Base Year 2026 ah engtin nge thlak?', options: ['2004-05 to 2011-12', '2011-12 to 2022-23', '2015-16 to 2020-21', '2010-11 to 2021-22'], correct: 1, explanation: 'Base year 2011-12 atangin 2022-23 ah thlak. Gas & Water Supply telh thar', date: 'Jan 2026'},
  {id: 5, question: 'India HDI 2025 Rank:', options: ['125/193', '132/193', '140/193', '145/193'], correct: 1, explanation: 'India HDI 2025: 0.685, Rank 132/193. Medium Human Development', date: 'Jan 2026'},
  {id: 6, question: 'Mizoram Literacy Rate Census 2011:', options: ['88.3%', '91.3%', '93.3%', '95.3%'], correct: 1, explanation: 'Census 2011: Mizoram 91.3% literacy. India ah 3rd highest', date: 'Jan 2026'},
  {id: 7, question: 'PM-JAY hnuaiah family engzat cover Jan 2026?', options: ['10 crore', '12 crore', '15 crore', '20 crore'], correct: 1, explanation: 'Ayushman Bharat PM-JAY: Rs 5 lakh insurance. 12 crore family cover', date: 'Jan 2026'},
  {id: 8, question: 'PM-KISAN hnuaiah farmer engzat benefit dawng?', options: ['8 crore', '10 crore', '11 crore', '12 crore'], correct: 2, explanation: 'PM-KISAN: Rs 6000/year. 11 crore farmer', date: 'Jan 2026'},
  {id: 9, question: 'MGNREGA wage Mizoram 2026:', options: ['Rs 229/day', 'Rs 249/day', 'Rs 269/day', 'Rs 289/day'], correct: 1, explanation: 'MGNREGA: Ni 100 hna guarantee. Mizoram: Rs 249/day', date: 'Jan 2026'},
  {id: 10, question: 'PM Mudra Yojana Shishu loan limit:', options: ['Rs 25,000', 'Rs 50,000', 'Rs 75,000', 'Rs 1,00,000'], correct: 1, explanation: 'PM Mudra: Shishu <50k loan. No collateral', date: 'Jan 2026'},
  {id: 11, question: 'UPI transaction Jan 2026:', options: ['12.99 billion', '14.99 billion', '16.99 billion', '18.99 billion'], correct: 2, explanation: 'Jan 2026: 16.99 billion transaction. World highest', date: 'Jan 2026'},
  {id: 12, question: 'National Quantum Mission budget:', options: ['Rs 4,000 cr', 'Rs 6,000 cr', 'Rs 8,000 cr', 'Rs 10,000 cr'], correct: 1, explanation: 'Jan 2026: National Quantum Mission Rs 6,000 cr. 2031 target', date: 'Jan 2026'},
  {id: 13, question: 'National Green Hydrogen Mission 2030 target:', options: ['3 MMT', '5 MMT', '7 MMT', '10 MMT'], correct: 1, explanation: 'Green Hydrogen Mission: 5 MMT production 2030 ah', date: 'Jan 2026'},
  {id: 14, question: 'India Net Zero target kum:', options: ['2050', '2060', '2070', '2080'], correct: 2, explanation: 'PM Modi COP26 ah puang: Net Zero 2070', date: 'Jan 2026'},
  {id: 15, question: 'LiFE Mission launch hun:', options: ['2022', '2023', '2024', '2025'], correct: 0, explanation: 'LiFE = Lifestyle for Environment. Oct 2022 ah PM Modi in launch', date: 'Jan 2026'},
  {id: 16, question: 'INS Vikrant full operational hun:', options: ['2024', '2025', '2026', '2027'], correct: 2, explanation: 'Jan 2026: INS Vikrant full operational. 36 aircraft carry thei', date: 'Jan 2026'},
  {id: 17, question: 'Shaurya Chakra 2026 dawngtu:', options: ['Maj Gen Singh', 'Lt Commander Suraj Prashar', 'Col Sharma', 'Capt Verma'], correct: 1, explanation: 'Jan 2026: Lt Commander Suraj Prashar, Indian Navy. Submarine rescue', date: 'Jan 2026'},
  {id: 18, question: 'IndiaAI Mission CEO thar:', options: ['Nandan Nilekani', 'Saurabh Vijay', 'R S Sharma', 'Arvind Gupta'], correct: 1, explanation: 'Jan 2026: Saurabh Vijay, UIDAI CEO hlui, IndiaAI Mission CEO', date: 'Jan 2026'},
  {id: 19, question: 'World Bank Executive Director Indian:', options: ['Raghuram Rajan', 'Arvind Subramanian', 'Neelkanth Mishra', 'Kaushik Basu'], correct: 2, explanation: 'Jan 2026: Neelkanth Mishra, World Bank Executive Director thar', date: 'Jan 2026'},
  {id: 20, question: 'Mizoram University in snake thar hmuh chhuah hming:', options: ['Calamaria mizoramensis', 'Python mizoramensis', 'Cobra mizoramensis', 'Viper mizoramensis'], correct: 0, explanation: 'Jan 2026: Calamaria mizoramensis hmuh chhuah. Zootaxa ah publish', date: 'Jan 2026'},
  {id: 21, question: 'Mizoram ah refugee engzat nge awm Feb 2026 ah?', options: ['25,000', '38,059', '50,000', '15,000'], correct: 1, explanation: 'Minister Lalnghinglova Hmar: Myanmar, Bangladesh, Manipur IDP total 38,059. Biometric 93% zo', date: 'Feb 2026'},
  {id: 22, question: 'India GDP Growth FY 2025-26:', options: ['6.5%', '7.0%', '7.7%', '8.0%'], correct: 2, explanation: 'Feb 2026: FY 2025-26 ah 7.7% growth, kum 2 chhunga sang ber', date: 'Feb 2026'},
  {id: 23, question: 'RBI Repo Rate Feb 2026:', options: ['5.00%', '5.25%', '5.50%', '6.00%'], correct: 1, explanation: 'RBI in Repo Rate 5.25% ah dah nghet. Growth forecast 6.6% ah cut', date: 'Feb 2026'},
  {id: 24, question: 'SIPRI report 2026: India nuclear warheads engzat?', options: ['150', '170', '190', '200'], correct: 2, explanation: 'SIPRI Feb 2026: India in 190 nuclear warheads nei', date: 'Feb 2026'},
  {id: 25, question: 'India in framework understanding US nen sign hun:', options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'], correct: 1, explanation: 'Feb 2026: India-US Interim Agreement framework sign. BTA negotiations', date: 'Feb 2026'},
  {id: 26, question: 'Project Cheetah Phase 2 ah cheetah engzat thawn belh?', options: ['8', '12', '16', '20'], correct: 1, explanation: 'Feb 2026: South Africa atangin 12 cheetah thawn belh. Kuno NP. Total 20', date: 'Feb 2026'},
  {id: 27, question: 'Gaganyaan Mission 1st uncrewed flight:', options: ['Dec 2025', 'Feb 2026', 'Apr 2026', 'June 2026'], correct: 1, explanation: 'Feb 2026: Gaganyaan G1 uncrewed flight hlawhtling. Vyommitra robot tel', date: 'Feb 2026'},
  {id: 28, question: 'India 1st Hydrogen Train trial hun:', options: ['Dec 2025', 'Feb 2026', 'Apr 2026', 'June 2026'], correct: 1, explanation: 'Feb 2026: India hmasa ber Hydrogen Train trial Haryana Jind-Sonipat', date: 'Feb 2026'},
  {id: 29, question: 'ISRO Aditya-L2 mission launch hun:', options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'], correct: 1, explanation: 'Feb 2026: Aditya-L2 launch hlawhtling. Sun study tan L2 orbit', date: 'Feb 2026'},
  {id: 30, question: 'Vande Bharat Sleeper train hmasa ber route:', options: ['Delhi-Mumbai', 'Delhi-Howrah', 'Mumbai-Chennai', 'Delhi-Bangalore'], correct: 1, explanation: 'Feb 2026: Vande Bharat Sleeper Delhi-Howrah route ah tlan tan', date: 'Feb 2026'},
  {id: 31, question: 'India-Israel FTA Terms of Reference sign hun:', options: ['Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026'], correct: 1, explanation: 'Nov 2025: India-Israel FTA ToR sign. Feb 2026 ah 1st round negotiation', date: 'Feb 2026'},
  {id: 32, question: 'NABARD in Mizoram priority sector tan engzat ruahman?', options: ['Rs 3,349.71 cr', 'Rs 4,349.71 cr', 'Rs 5,349.71 cr', 'Rs 6,349.71 cr'], correct: 1, explanation: 'Dec 2025 State Credit Seminar: NABARD in Rs 4,349.71 crores ruahman', date: 'Feb 2026'},
  {id: 33, question: 'India Defence Export 2025-26:', options: ['Rs 18,000 cr', 'Rs 21,000 cr', 'Rs 24,000 cr', 'Rs 27,000 cr'], correct: 1, explanation: 'April 2026: Defense export Rs 21,000 cr. Target Rs 35,000 cr by 2025', date: 'Feb 2026'},
  {id: 34, question: 'Thenzawl Solar Plant capacity:', options: ['5 MW', '10 MW', '15 MW', '20 MW'], correct: 1, explanation: 'Thenzawl Solar Plant: 10 MW NABARD funding', date: 'Feb 2026'},
  {id: 35, question: 'Rubber Mission Mizoram ah sapling engzat phun tawh?', options: ['2,50,000', '3,50,000', '4,50,000', '5,50,000'], correct: 2, explanation: 'April 2026: 4,50,000 rubber saplings phun tawh', date: 'Feb 2026'},
  {id: 36, question: 'India ram pum 100th Ramsar Site:', options: ['Loktak Lake', 'Jai Prakash Narayan Bird Sanctuary', 'Wular Lake', 'Chilika Lake'], correct: 1, explanation: 'March 2026: Jai Prakash Narayan Bird Sanctuary, UP 100th Ramsar Site', date: 'Mar 2026'},
  {id: 37, question: 'FSSAI in Vegan Logo official launch hun:', options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'], correct: 2, explanation: 'March 2026: FSSAI in official Vegan Logo launch', date: 'Mar 2026'},
  {id: 38, question: 'India-France Rafale-M deal 2026 engzat man?', options: ['$5 billion', '$7 billion', '$9 billion', '$11 billion'], correct: 2, explanation: 'March 2026: India-France $9 billion Rafale-M deal sign. 26 aircraft', date: 'Mar 2026'},
  {id: 39, question: 'Agni-6 ICBM test hlawhtling hun:', options: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'], correct: 2, explanation: 'March 2026: Agni-6 test hlawhtling. Range 12,000 km. MIRV tech', date: 'Mar 2026'},
  {id: 40, question: 'QUAD Summit 2026 host:', options: ['India', 'USA', 'Japan', 'Australia'], correct: 0, explanation: 'March 2026: QUAD Summit New Delhi ah neih. PM Modi host', date: 'Mar 2026'},
  {id: 41, question: 'India in 1st Underwater Metro khawiah?', options: ['Mumbai', 'Kolkata', 'Chennai', 'Kochi'], correct: 1, explanation: 'March 2026: Kolkata ah Underwater Metro hawn. Hooghly lui hnuai', date: 'Mar 2026'},
  {id: 42, question: 'India Semiconductor plant hmasa ber khawiah din?', options: ['Gujarat', 'Assam', 'Tamil Nadu', 'Karnataka'], correct: 0, explanation: 'March 2026: Tata-PSMC Semiconductor plant Dholera, Gujarat hawn', date: 'Mar 2026'},
  {id: 43, question: 'India-Australia ECTA review hun:', options: ['Jan 2026', 'Mar 2026', 'May 2026', 'July 2026'], correct: 1, explanation: 'March 2026: ECTA review. Critical minerals, education telh belh', date: 'Mar 2026'},
  {id: 44, question: 'Chenab Rail Bridge height:', options: ['325 m', '335 m', '345 m', '359 m'], correct: 3, explanation: 'Chenab Bridge: 359 m sang. World highest railway bridge', date: 'Mar 2026'},
  {id: 45, question: 'Mumbai Trans Harbour Link length:', options: ['18.5 km', '20.5 km', '21.8 km', '23.5 km'], correct: 2, explanation: 'MTHL Atal Setu: 21.8 km. India longest sea bridge', date: 'Mar 2026'},
  {id: 46, question: 'Tiger Population India 2026:', options: ['3,500', '3,800', '4,000', '4,200'], correct: 2, explanation: 'June 2026: Tiger Census 2026. 4,000+ tigers. World 75% India ah', date: 'Mar 2026'},
  {id: 47, question: 'India GDP size June 2026:', options: ['$3.5 trillion', '$4.0 trillion', '$4.5 trillion', '$5.0 trillion'], correct: 2, explanation: 'June 2026: India GDP $4.5 trillion. World 4th largest economy', date: 'Mar 2026'},
  {id: 48, question: 'Forex Reserves India June 2026:', options: ['$650 billion', '$680 billion', '$710 billion', '$740 billion'], correct: 2, explanation: 'June 2026: Forex Reserves $710 billion. All-time high', date: 'Mar 2026'},
  {id: 49, question: 'UPI transaction value Jan 2026:', options: ['Rs 18 lakh crore', 'Rs 20 lakh crore', 'Rs 22 lakh crore', 'Rs 24 lakh crore'], correct: 2, explanation: 'Jan 2026: UPI transaction Rs 22 lakh crore', date: 'Mar 2026'},
  {id: 50, question: 'JJM Jal Jeevan Mission coverage June 2026:', options: ['70%', '75%', '78%', '82%'], correct: 2, explanation: 'June 2026: 15 crore household tap water. 78% coverage', date: 'Mar 2026'},
  {id: 51, question: 'Current Account Surplus Jan-Mar 2026:', options: ['$5.1 billion', '$7.1 billion', '$9.1 billion', '$3.1 billion'], correct: 1, explanation: 'April 2026: Jan-Mar 2026 ah $7.1 billion surplus, GDP 0.7%', date: 'Apr 2026'},
  {id: 52, question: 'UP Police Constable exam 2026 ah candidate engzat?', options: ['10 lakh', '20 lakh', '28 lakh', '35 lakh'], correct: 2, explanation: 'April 2026: Constable post 32,679 atan mi 28 lakh exam', date: 'Apr 2026'},
  {id: 53, question: 'Iran-Israel War 2026 tan hun:', options: ['Mar 2026', 'Apr 2026', 'May 2026', 'June 2026'], correct: 1, explanation: 'April-May 2026: US-Israel in Iran bei. Crude oil man kai', date: 'Apr 2026'},
  {id: 54, question: 'ASEAN Summit 2026 khawiah nge neih?', options: ['Bangkok', 'Jakarta', 'Manila', 'Hanoi'], correct: 1, explanation: 'April 2026: ASEAN Summit Jakarta, Indonesia ah neih', date: 'Apr 2026'},
  {id: 55, question: 'India-UK FTA sign hun:', options: ['Feb 2026', 'Apr 2026', 'June 2026', 'Aug 2026'], correct: 1, explanation: 'April 2026: India-UK FTA sign. Scotch whisky duty 150% to 75%', date: 'Apr 2026'},
  {id: 56, question: 'Carbon Credit Trading Scheme tan hun:', options: ['2024', '2025', '2026', '2027'], correct: 2, explanation: 'April 2026: Carbon Credit Trading Scheme tan. CCTS', date: 'Apr 2026'},
  {id: 57, question: 'India AI Supercomputer "AIRAWAT" upgrade 2026 capacity:', options: ['10 PetaFLOPS', '15 PetaFLOPS', '20 PetaFLOPS', '25 PetaFLOPS'], correct: 2, explanation: 'April 2026: AIRAWAT upgrade 20 PetaFLOPS ah. Asia fastest', date: 'Apr 2026'},
  {id: 58, question: 'Premier League 2025-26 Champion:', options: ['Man City', 'Arsenal', 'Liverpool', 'Man United'], correct: 1, explanation: 'April 2026: Arsenal Champion. 85 points', date: 'Apr 2026'},
  {id: 59, question: 'New Pamban Bridge khawiah nge hawn?', options: ['Bandra-Worli', 'Rameswaram', 'Godavari', 'Howrah'], correct: 1, explanation: 'April 2026: New Pamban Bridge Rameswaram. Vertical lift', date: 'Apr 2026'},
  {id: 60, question: 'Mizoram Tourism Growth 2023-2024:', options: ['100.54%', '125.54%', '145.54%', '165.54%'], correct: 2, explanation: '2023-2024 ah tourist 145.54% pung. Rail connectivity vang', date: 'Apr 2026'},
  {id: 61, question: 'ECI in Phase III Special Intensive Revision ah voter engzat cover?', options: ['26.73 Cr', '36.73 Cr', '46.73 Cr', '56.73 Cr'], correct: 1, explanation: 'ECI Begins Phase III SIR Covering 36.73 Crore Voters May 15, 2026', date: 'May 2026'},
  {id: 62, question: 'India in Submarine Cable India-Middle East-Europe launch hun:', options: ['2025', '2026', '2027', '2028'], correct: 1, explanation: 'May 2026: IMEEC submarine cable launch. Mumbai to Marseille', date: 'May 2026'},
  {id: 63, question: '6G technology trial India in neih tan hun:', options: ['Mar 2026', 'Apr 2026', 'May 2026', 'June 2026'], correct: 2, explanation: 'May 2026: 6G trial Delhi, Mumbai, Bangalore ah tan', date: 'May 2026'},
  {id: 64, question: 'Champions League 2025-26 Winner:', options: ['Arsenal', 'Real Madrid', 'Bayern Munich', 'PSG'], correct: 3, explanation: 'May 2026: PSG Champion. Final ah Arsenal hneh', date: 'May 2026'},
  {id: 65, question: 'Monaco Grand Prix 2026 Winner:', options: ['Max Verstappen', 'Lewis Hamilton', 'Kimi Antonelli', 'Charles Leclerc'], correct: 2, explanation: 'May 2026: Kimi Antonelli Monaco Grand Prix 2026 la', date: 'May 2026'},
  {id: 66, question: 'Iran-Israel Ceasefire 2026 puan hun:', options: ['June 5', 'June 8', 'June 10', 'June 15'], correct: 1, explanation: 'June 8, 2026: Netanyahu in fighting halt ti mahse future attack chu "with force" respond ang a ti', date: 'May 2026'},
  {id: 67, question: 'US Judge in Trump H-1B visa fee engzat nge unlawful ti a titawp?', options: ['$50,000', '$75,000', '$100,000', '$125,000'], correct: 2, explanation: 'June 2026: US Judge in Trump $100,000 H-1B visa fee unlawful tiin ti tawp', date: 'May 2026'},
  {id: 68, question: 'PM Modi in Aizawl ah Rs engzat development works hawng June 2026?', options: ['Rs 5,000 crore', 'Rs 7,000 crore', 'Rs 9,000 crore', 'Rs 10,000 crore'], correct: 2, explanation: 'June 9, 2026: PM Modi in Rs 9,000 crore development works Aizawl ah hawng', date: 'May 2026'},
  {id: 69, question: 'Rajdhani Express Delhi-Sairang tlan tan hun:', options: ['May 2026', 'June 2026', 'July 2026', 'Aug 2026'], correct: 1, explanation: 'June 2026: Rajdhani Express Delhi-Sairang tlan tan', date: 'May 2026'},
  {id: 70, question: 'ED in Champhai ah hmun engzat raid June 2026?', options: ['5', '7', '9', '12'], correct: 2, explanation: 'June 5, 2026: ED in hmun 9 raid. Myanmar supari smuggling', date: 'May 2026'},
  {id: 71, question: 'PMAY-G in engzat sak tawh?', options: ['2 crore', '2.5 crore', '3.5 crore'], correct: 2, explanation: 'PMAY-Gramin: 3 crore in sak tawh. Target 2.95 crore', date: 'Jan 2026'},
  {id: 72, question: 'Atal Pension Yojana subscriber 2026:', options: ['4 crore', '5 crore', '6 crore', '7 crore'], correct: 2, explanation: 'APY: Rs 1000-5000 pension. 6 crore subscriber', date: 'Jan 2026'},
  {id: 73, question: 'e-SHRAM Portal ah worker engzat register June 2026?', options: ['25 crore', '28 crore', '30 crore', '32 crore'], correct: 2, explanation: 'June 2026: 30 crore unorganized workers register', date: 'May 2026'},
  {id: 74, question: 'Nari Shakti Vandan Adhiniyam implement hun:', options: ['2024', '2026', '2029', '2034'], correct: 2, explanation: 'Women Reservation Bill: 2029 Lok Sabha election atangin implement', date: 'Jan 2026'},
  {id: 75, question: 'PM SHRI Schools engzat upgrade tawh?', options: ['10,500', '12,500', '14,500', '16,500'], correct: 2, explanation: 'PM SHRI: 14,500 schools upgrade. Model school', date: 'Jan 2026'},
  {id: 76, question: 'National Education Policy 2020 implementation % June 2026:', options: ['60%', '70%', '80%', '90%'], correct: 1, explanation: 'June 2026: NEP 2020 implementation 70% zo', date: 'May 2026'},
  {id: 77, question: 'India in Lunar Space Station launch tum kum:', options: ['2030', '2035', '2040', '2045'], correct: 2, explanation: 'June 2026: ISRO in 2040 ah Lunar Space Station launch tum', date: 'May 2026'},
  {id: 78, question: 'Chandrayaan-4 launch target kum:', options: ['2026', '2027', '2028', '2029'], correct: 2, explanation: 'June 2026: ISRO in Chandrayaan-4 launch 2028 ah tih puang', date: 'May 2026'},
  {id: 79, question: 'Tejas Mk2 fighter jet first flight hun tur:', options: ['2026', '2027', '2028', '2029'], correct: 1, explanation: 'June 2026: Tejas Mk2 first flight 2027 ah tih puang', date: 'May 2026'},
  {id: 80, question: 'Bullet Train Mumbai-Ahmedabad project zawh hun tur:', options: ['2027', '2028', '2029', '2030'], correct: 1, explanation: 'June 2026: 70% work zo tawh. 2028 December ah commercial operation', date: 'May 2026'},
  {id: 81, question: 'UN Climate Summit COP31 2026 host:', options: ['Brazil', 'India', 'UAE', 'Egypt'], correct: 0, explanation: 'Nov 2026: COP31 Brazil Belem ah', date: 'May 2026'},
  {id: 82, question: 'G7 Summit 2026 khawiah nge neih?', options: ['France', 'Germany', 'Italy', 'Japan'], correct: 2, explanation: 'June 15-17, 2026: G7 Summit Italy ah', date: 'May 2026'},
  {id: 83, question: 'Sweden, Finland NATO full membership activate hun:', options: ['May 2026', 'June 2026', 'July 2026', 'Aug 2026'], correct: 1, explanation: 'June 2026: Sweden, Finland NATO full membership activate', date: 'May 2026'},
  {id: 84, question: 'India-UAE CEPA hnuaiah trade 2025-26 engzat?', options: ['$75 billion', '$85 billion', '$95 billion', '$105 billion'], correct: 1, explanation: 'June 2026: India-UAE trade $85 billion. CEPA hnuah 30% pung', date: 'May 2026'},
  {id: 85, question: 'India-China Border talks 2026 round engzatna?', options: ['20th', '21st', '22nd', '23rd'], correct: 2, explanation: 'May 2026: 22nd round Corps Commander Level talks', date: 'May 2026'},
  {id: 86, question: 'G20 Summit 2026 khawiah?', options: ['South Africa', 'Brazil', 'USA', 'Argentina'], correct: 2, explanation: 'Sept 2026: G20 Summit USA ah', date: 'May 2026'},
  {id: 87, question: 'BRICS Summit 2026 Host Country:', options: ['Brazil', 'Russia', 'India', 'South Africa'], correct: 1, explanation: 'July 2026: BRICS Summit Russia Kazan ah', date: 'May 2026'},
  {id: 88, question: 'Kirti Chakra 2026 dawngtu Mizo pa hming dik:', options: ['Naib Subedar Sanglawma', 'Captain Lalrinawma Sailo', 'Subedar Chalhnuna Lushai', 'Hav Lalhmingthanga'], correct: 1, explanation: 'Captain Lalrinawma Sailo, 4 Para (Special Forces). President Droupadi Murmu hnen atangin dawng', date: 'May 2026'},
  {id: 89, question: 'National Florence Nightingale Award 2026 dawngtu Mizo nu:', options: ['Lalnunpuii Sailo', 'Pi Lalenthangi Hnamte', 'Lalremruati', 'Lalbiakdiki'], correct: 1, explanation: 'May 12, 2026: Pi Lalenthangi Hnamte, Health Worker, Tuichawng', date: 'May 2026'},
  {id: 90, question: 'PM Awas Yojana Aizawl ah in engzat hawn June 2026?', options: ['300', '400', '500', '600'], correct: 2, explanation: 'June 14, 2026: PM Awas Yojana Aizawl ah in 500 hawn', date: 'May 2026'},
  {id: 91, question: 'Minimum one Sanskrit batch required for Classes 6 and 9 in:', options: ['Navodaya Vidyalaya', 'Kendriya Vidyalaya', 'Sainik School', 'Jawahar Navodaya'], correct: 1, explanation: 'Every Kendriya Vidyalaya must maintain minimum one Sanskrit section', date: 'May 2026'},
  {id: 92, question: 'Retail inflation May 2026:', options: ['3.5%', '3.7%', '3.93%', '4.1%'], correct: 2, explanation: 'May retail inflation marginally rises to 3.93%, food inflation at 4.78%', date: 'May 2026'},
  {id: 93, question: 'May 2026 CPI inflation eng thla hnua sang ber?', options: ['12 months', '14 months', '16 months', '18 months'], correct: 2, explanation: 'May figure highest in 16 months. January 2025 ah 4.06%', date: 'May 2026'},
  {id: 94, question: 'Stock Market Close June 12, 2026: Sensex engzat in sang?', options: ['1,495 pts', '1,595 pts', '1,695 pts', '1,795 pts'], correct: 2, explanation: 'Sensex surges 1,695 pts, Nifty ends at 23,623 on hopes for US-Iran peace deal', date: 'May 2026'},
  {id: 95, question: 'IN-SPACe in space startup engzat thlang?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'IN-SPACe selected three Indian space startups for funding', date: 'May 2026'},
  {id: 96, question: 'Rajya Sabha candidates Rajasthan atang unopposed engzat?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'BJP Satish Poonia, Alka Gurjar, Congress Neeraj Dangi elected unopposed', date: 'May 2026'},
  {id: 97, question: 'Mallikarjun Kharge Rajya Sabha ah state eng atang?', options: ['Maharashtra', 'Rajasthan', 'Karnataka', 'Telangana'], correct: 2, explanation: 'Congress president Mallikarjun Kharge elected unanimously from Karnataka', date: 'May 2026'},
  {id: 98, question: 'India summons top US diplomat engvang?', options: ['Trade deal', 'Visa issue', 'Strikes on ships off Oman', 'Student visa'], correct: 2, explanation: 'India summons top US diplomat to protest strikes on ships off Oman', date: 'May 2026'},
  {id: 99, question: 'NLC India shares engzat in sang?', options: ['2%', '3%', '4%', '5%'], correct: 2, explanation: 'NLC India shares jump 4% after winning Ministry of Mines mineral block', date: 'May 2026'},
  {id: 100, question: 'Family seeks return of sailor killed khawi hmunah?', options: ['Red Sea', 'Persian Gulf', 'Strait of Hormuz', 'Arabian Sea'], correct: 2, explanation: 'Family of Himachal seafarer who died in US strike near Strait of Hormuz seeks body return', date: 'May 2026'}
]

export default function CurrentAffairsTestPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const router = useRouter()

  // Page load apiangin ad vawi 1
  useEffect(() => {
    showInterstitial()
  }, [])
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

  const handleRestart = () => {
    setCurrentQ(0)
    setSelected(null)
    setShowAnswer(false)
    setScore(0)
    setCompleted(false)
    showInterstitial()
  }
}