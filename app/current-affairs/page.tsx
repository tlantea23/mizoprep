'use client'
import SubjectPage from '../components/SubjectPage'

const currentAffairsChapters = [
  {
    id: 'ca-world-2026',
    title: {
      mizo: 'World News Jan-Jun 2026',
      english: 'World News Jan-Jun 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. UN Security Council** - 2027-28 Non-Permanent Member atan Portugal, Austria thlan tlin. Germany tling zo lo.',
        '**2. UNGA President** - Bangladesh Khalilur Rahman 81st Session President.',
        '**3. China Statement** - China in India nen "cooperative partners" nih duh thu sawi. Border issue resolve duh.',
        '**FEBRUARY-MARCH 2026:**',
        '**4. Nepal Border** - Nepal FM in India nen Kalapani-Lipulekh-Limpiyadhura issue open mind a resolve duh. Third party mediation duh lo.',
        '**5. Bangladesh Border** - BGB DG Delhi ah BSF nen talks. Undocumented mi thawn luh chungchang buai.',
        '**6. Canada** - Under-16 tan Social Media ban tum.',
        '**APRIL-MAY 2026:**',
        '**7. Iran-Israel War** - US-Israel in Iran bei. Crude oil man kai. Market 1% tla.',
        '**8. Opec+** - Oil output ti pung, Hormuz khar vang.',
        '**9. Iran Travel Advisory** - India in citizens te Iran kal lo turin hriattir.',
        '**JUNE 2026:**',
        '**10. Iran-Israel Ceasefire** - June 8 ah Netanyahu in fighting halt ti mahse future attack chu "with force" respond ang a ti.',
        '**11. Epic Stalemate** - US-Israel war on Iran in objective a achieve lo.',
        '**12. H-1B Visa Fee** - US Judge in Trump $100,000 H-1B visa fee unlawful tiin ti tawp.',
        '**13. Indian Sailors Rescued** - US missile in Marivex tanker bei. Indian sailor 24 chhanchhuah.'
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. UN Security Council** - Portugal and Austria elected as Non-Permanent Members for 2027-28. Germany failed.',
        '**2. UNGA President** - Bangladesh Khalilur Rahman elected 81st Session President.',
        '**3. China Statement** - China expressed desire to be "cooperative partners" with India.',
        '**FEBRUARY-MARCH 2026:**',
        '**4. Nepal Border** - Nepal FM wants to resolve Kalapani-Lipulekh-Limpiyadhura issue with India. Rejects third party mediation.',
        '**5. Bangladesh Border** - BGB DG in Delhi for talks with BSF. Dispute over undocumented people.',
        '**6. Canada** - Plans to ban Social Media for under-16.',
        '**APRIL-MAY 2026:**',
        '**7. Iran-Israel War** - US-Israel attacked Iran. Crude oil prices rose. Markets fell 1%.',
        '**8. Opec+** - Increased oil output due to Hormuz closure.',
        '**9. Iran Travel Advisory** - India advised citizens not to travel to Iran.',
        '**JUNE 2026:**',
        '**10. Iran-Israel Ceasefire** - June 8, Netanyahu acknowledged halt in fighting but vowed force response.',
        '**11. Epic Stalemate** - US-Israel war on Iran has not achieved objectives.',
        '**12. H-1B Visa Fee** - US Judge struck down Trump $100,000 H-1B visa fee as unlawful.',
        '**13. Indian Sailors Rescued** - 24 Indian sailors rescued from tanker Marivex after US missile strike.'
      ]
    }
  },
  {
    id: 'ca-national-2026',
    title: {
      mizo: 'National News Jan-Jun 2026',
      english: 'National News Jan-Jun 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. E85 Fuel Launch** - India in 85% Ethanol blend E85 Fuel hmasa ber launch. Petrol import leh carbon emission ti tlem tur.',
        '**2. IIP Base Year Thlak** - Index of Industrial Production 2011-12 atangin 2022-23 ah thlak. Gas Supply leh Water Supply sector telh.',
        '**3. WPI Base Year** - 2022-23 ah thlak. 15 June ah PPI hman tan. 2031 ah WPI titawp ang.',
        '**4. 7th Meteorological Centre** - Jammu ah Regional Meteorological Centre pasarihna hawn.',
        '**5. Divyang Schemes** - Budget 2026-27 ah Divyang Sahara Yojana leh Divyangjan Kaushal Yojana puang.',
        '**FEBRUARY 2026:**',
        '**6. GDP Growth** - FY 2025-26 ah 7.7% growth, kum 2 chhunga sang ber. IMF in FY27 tan 6.5% forecast.',
        '**7. RBI Policy** - Repo Rate 5.25% ah dah nghet. Growth forecast 6.6% ah cut.',
        '**8. Nuclear Warheads** - SIPRI report: India in 190 nuclear warheads nei. World top 5 military spender.',
        '**9. Semiconductor** - Andhra Pradesh ah semiconductor project hmasa ber Vizag ah.',
        '**MARCH 2026:**',
        '**10. 100th Ramsar Site** - Jai Prakash Narayan Bird Sanctuary, Uttar Pradesh.',
        '**11. Vegan Logo** - FSSAI in official Vegan Logo launch.',
        '**12. Women Empowerment** - Panchayati Raj ah 50% reservation. STEM JRF ah 53% hmeichhia. NDA women cadet batch hmasa ber graduate.',
        '**APRIL 2026:**',
        '**13. Current Account Surplus** - Jan-Mar 2026 ah $7.1 billion surplus, GDP 0.7%. Services export leh remittances vang.',
        '**14. UP Police Exam** - Constable post 32,679 atan mi 28 lakh exam. Unemployment nasa.',
        '**MAY-JUNE 2026:**',
        '**15. Gold ETFs** - Outflows signal caution, investor te fimkhur.',
        '**16. OMC Underrecoveries** - Diesel litre khat ah Rs 30, Petrol ah Rs 6 hloh.',
        '**17. RINL Explosion** - June 8 Visakhapatnam ah explosion. Worker 8 thi, 6 hliam.',
        '**18. Spectrum Levy** - Bombay HC in Airtel, Vi te OTSC spectrum levy quash.',
        '**19. INDIA Bloc** - CJI hnenah SIR leh vote loot ziah luh tum. Education Minister Pradhan bang turin phut.'
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. E85 Fuel Launch** - India launched first 85% Ethanol blend E85 Fuel to reduce imports and emissions.',
        '**2. IIP Base Year Changed** - Index of Industrial Production base year from 2011-12 to 2022-23. Gas and Water Supply added.',
        '**3. WPI Base Year** - Changed to 2022-23. PPI to be used from June 15. WPI discontinued by 2031.',
        '**4. 7th Meteorological Centre** - 7th Regional Meteorological Centre opened in Jammu.',
        '**5. Divyang Schemes** - Budget 2026-27 announced Divyang Sahara Yojana and Divyangjan Kaushal Yojana.',
        '**FEBRUARY 2026:**',
        '**6. GDP Growth** - 7.7% growth in FY 2025-26, highest in 2 years. IMF forecasts 6.5% for FY27.',
        '**7. RBI Policy** - Repo Rate kept at 5.25%. Growth forecast cut to 6.6%.',
        '**8. Nuclear Warheads** - SIPRI: India has 190 nuclear warheads. Among top 5 military spenders.',
        '**9. Semiconductor** - First semiconductor project in Andhra Pradesh at Vizag.',
        '**MARCH 2026:**',
        '**10. 100th Ramsar Site** - Jai Prakash Narayan Bird Sanctuary, Uttar Pradesh designated.',
        '**11. Vegan Logo** - FSSAI launched official Vegan Logo.',
        '**12. Women Empowerment** - 50% reservation in Panchayati Raj. 53% women in STEM JRF. First NDA women cadets graduated.',
        '**APRIL 2026:**',
        '**13. Current Account Surplus** - $7.1 billion surplus in Jan-Mar 2026, 0.7% of GDP.',
        '**14. UP Police Exam** - 28 lakh candidates for 32,679 constable posts.',
        '**MAY-JUNE 2026:**',
        '**15. Gold ETFs** - Outflows signal investor caution.',
        '**16. OMC Underrecoveries** - Rs 30 per litre loss on diesel, Rs 6 on petrol.',
        '**17. RINL Explosion** - June 8 Visakhapatnam explosion. 8 dead, 6 injured.',
        '**18. Spectrum Levy** - Bombay HC quashed OTSC spectrum levy for Airtel, Vi.',
        '**19. INDIA Bloc** - To write to CJI on SIR and vote loot. Demands Education Minister resignation.'
      ]
    }
  },
  {
    id: 'ca-mizoram-2026',
    title: {
      mizo: 'Mizoram News Jan-Jun 9, 2026',
      english: 'Mizoram News Jan-Jun 9, 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. Governor Activities** - General Dr Vijay Kumar Singh in Jan 26 ah Republic Day hmanpui. Jan 30 ah NCC HQ Aizawl hawn.',
        '**2. Myanmar Refugees** - Minister Lalnghinglova Hmar in refugee te enkawl that thu sawi. Biometric enrolment 93% zo Feb 5 ah. Total 38,059 Myanmar, Bangladesh, Manipur IDP awm.',
        '**3. Tourism Growth** - 2023-2024 ah tourist 145.54% pung. Rail connectivity vang.',
        '**4. New Snake Species** - Calamaria mizoramensis hmuh chhuah. Mizoram University + Russia, Germany, Vietnam.',
        '**FEBRUARY 2026:**',
        '**5. Geological Faults** - Mizoram hi Churachandpur Mao Fault leh Mat Fault inkarah awm. June-July 2025 ah lirnghing 8: 4.2-5.5 magnitude.',
        '**6. Railway Link** - Bairabi-Sairang line Sept 2025 hawn tawh. Aizawl rail connection hmasa ber.',
        '**MARCH 2026:**',
        '**7. Tourism Events Calendar 2026** - Dec 2025 ah launch. Festival, cultural programme, sports events.',
        '**8. Thainzal Tourism** - Aizawl atanga darkar 3. Waterfall, golf course, valley siam tum.',
        '**APRIL 2026:**',
        '**9. State Credit Seminar** - Dec 16, 2025 ah CM Lalduhoma hmanpui. NABARD in Rs 4,349.71 crores priority sector tan ruahman.',
        '**10. Thenzawl Solar Plant** - 10 MW NABARD funding, hawn tep. 5 MW Sumsuih ah siam leh tur.',
        '**11. Rubber Mission** - 4,50,000 rubber saplings phun tawh. 11,00,000 phun leh tum.',
        '**MAY 2026:**',
        '**12. BRO Operations** - May 30 ah ruah nasa vangin kawng tlahniam. BRO in 24x7 hna thawk. Koloriang-Lee-Sarli-Huri kawng tihnun.',
        '**13. Assam Rifles Training** - May 26-30 ah Boatmanship Training. Monsoon inpeihna.',
        '**JUNE 2026:**',
        '**14. PM Modi Project** - June 9 Rs 9,000 crore development works Aizawl ah hawng. "Historic day" - Aizawl India railway map ah lut. Rajdhani Express Delhi-Sairang tlan tan.',
        '**15. MoS Murugan Visit** - June 2 Kolasib ah. PM Modi in Northeast development ngai pawimawh. Mizo filmmakers IFFI Goa ah tel thei.',
        '**16. ED Raid Champhai** - June 5 hmun 9 raid. Myanmar supari smuggling. Fake e-way bills Rs 251.19 cr SGST + Rs 86.25 cr CGST fraud.',
        '**17. Viksit Bharat 2047** - June 3 MoS Murugan in zirlaite role pawimawh thu sawi. Kolasib RSTC ah football exhibition. Khet Bachao Abhiyan launch.',
        '**18. BGB-BSF Talks** - June 9 BGB DG Delhi ah. Undocumented mi thawn luh chungchang buai.',
        '**19. Electoral Roll SIR** - Month khat chhung June 28 thleng. Voter 8,75,068. Online submission theih.'
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. Governor Activities** - General Dr Vijay Kumar Singh led Republic Day Jan 26. Inaugurated NCC HQ Aizawl Jan 30.',
        '**2. Myanmar Refugees** - Minister Lalnghinglova Hmar said refugees well cared for. 93% biometric enrolment by Feb 5. Total 38,059 including Myanmar, Bangladesh, Manipur IDPs.',
        '**3. Tourism Growth** - 145.54% rise in tourist arrivals 2023-2024 due to rail connectivity.',
        '**4. New Snake Species** - Calamaria mizoramensis discovered by Mizoram University with Russia, Germany, Vietnam.',
        '**FEBRUARY 2026:**',
        '**5. Geological Faults** - Mizoram between Churachandpur Mao Fault and Mat Fault. 8 earthquakes June-July 2025: 4.2-5.5 magnitude.',
        '**6. Railway Link** - Bairabi-Sairang line inaugurated Sept 2025. First rail connection to Aizawl.',
        '**MARCH 2026:**',
        '**7. Tourism Events Calendar 2026** - Launched Dec 2025 with festivals, cultural programmes and sports.',
        '**8. Thainzal Tourism** - 3 hours from Aizawl. Plans for waterfall, golf course, valley.',
        '**APRIL 2026:**',
        '**9. State Credit Seminar** - CM Lalduhoma attended Dec 16, 2025. NABARD projected Rs 4,349.71 crores for priority sectors.',
        '**10. Thenzawl Solar Plant** - 10 MW NABARD funded, nearing inauguration. 5 MW planned at Sumsuih.',
        '**11. Rubber Mission** - 4,50,000 rubber saplings planted. Plans for 11,00,000 more.',
        '**MAY 2026:**',
        '**12. BRO Operations** - After massive landslide May 30 due to heavy rains. BRO working 24x7. Koloriang-Lee-Sarli-Huri route operational.',
        '**13. Assam Rifles Training** - Boatmanship Training May 26-30 for monsoon preparedness.',
        '**JUNE 2026:**',
        '**14. PM Modi Project** - June 9 inaugurated Rs 9,000 crore development works in Aizawl. "Historic day" - Aizawl on India railway map. Rajdhani Express Delhi-Sairang operational.',
        '**15. MoS Murugan Visit** - June 2 in Kolasib. PM Modi accords high priority to Northeast. Mizo filmmakers at IFFI Goa.',
        '**16. ED Raid Champhai** - June 5 raids at 9 spots. Myanmar supari smuggling. Fake e-way bills Rs 251.19 cr SGST + Rs 86.25 cr CGST fraud.',
        '**17. Viksit Bharat 2047** - June 3 MoS Murugan underscored student role. Visited RSTC Kolasib, launched Khet Bachao Abhiyan.',
        '**18. BGB-BSF Talks** - June 9 BGB DG in Delhi. Dispute over undocumented Bangladeshis.',
        '**19. Electoral Roll SIR** - One month till June 28. Voters 8,75,068. Online submission available.'
      ]
    }
  },
  {
    id: 'ca-awards-2026',
    title: {
      mizo: 'National Awards & Appointments 2026',
      english: 'National Awards & Appointments 2026'
    },
    notes: {
      mizo: [
        '**GALLANTRY AWARDS:**',
        '**1. Shaurya Chakra** - Lt Commander Suraj Prashar, Indian Navy. Submarine rescue operation.',
        '**SPORTS AWARDS:**',
        '**2. Chess** - R Praggnanandhaa, Norway Chess 2026 Champion. Indian hmasa ber.',
        '**3. Football** - India Women Team, SAFF Championship 2026 Champion. Kum 7 hnuah.',
        '**4. Hockey** - India U18 Men, Asia Cup Champions 2026.',
        '**5. Tennis** - Alexander Zverev leh Mirra Andreeva, French Open 2026 Champions.',
        '**6. F1** - Kimi Antonelli, Monaco Grand Prix 2026 Winner.',
        '**SCIENCE & RECOGNITION:**',
        '**7. Mizoram University** - Calamaria mizoramensis snake thar hmuh chhuah. Zootaxa ah publish.',
        '**INFRASTRUCTURE:**',
        '**8. Bairabi-Sairang Railway** - Sept 2025 hawn. Aizawl rail connection hmasa ber. June 2026 Rajdhani Express tlan tan.',
        '**APPOINTMENTS:**',
        '**9. IndiaAI Mission CEO** - Saurabh Vijay, UIDAI CEO hlui.',
        '**10. World Bank** - Neelkanth Mishra, Executive Director thar.',
        '**11. CBSE Chairman** - Lokhande Prashant Sitaram.',
        '**12. Supreme Court** - Judge thar 5 approve.',
        '**13. UNGA President** - Khalilur Rahman, Bangladesh. 81st Session.',
        '**14. UN Security Council** - Portugal, Austria Non-Permanent Member 2027-28.'
      ],
      english: [
        '**GALLANTRY AWARDS:**',
        '**1. Shaurya Chakra** - Lt Commander Suraj Prashar, Indian Navy. Submarine rescue operation.',
        '**SPORTS AWARDS:**',
        '**2. Chess** - R Praggnanandhaa, Norway Chess 2026 Champion. First Indian.',
        '**3. Football** - India Women Team, SAFF Championship 2026 Champions. After 7 years.',
        '**4. Hockey** - India U18 Men, Asia Cup Champions 2026.',
        '**5. Tennis** - Alexander Zverev and Mirra Andreeva, French Open 2026 Champions.',
        '**6. F1** - Kimi Antonelli, Monaco Grand Prix 2026 Winner.',
        '**SCIENCE & RECOGNITION:**',
        '**7. Mizoram University** - Discovered Calamaria mizoramensis new snake species. Published in Zootaxa.',
        '**INFRASTRUCTURE:**',
        '**8. Bairabi-Sairang Railway** - Inaugurated Sept 2025. First rail connection to Aizawl. June 2026 Rajdhani Express operational.',
        '**APPOINTMENTS:**',
        '**9. IndiaAI Mission CEO** - Saurabh Vijay, former UIDAI CEO.',
        '**10. World Bank** - Neelkanth Mishra, new Executive Director.',
        '**11. CBSE Chairman** - Lokhande Prashant Sitaram.',
        '**12. Supreme Court** - 5 new judges approved.',
        '**13. UNGA President** - Khalilur Rahman, Bangladesh. 81st Session.',
        '**14. UN Security Council** - Portugal, Austria Non-Permanent Members 2027-28.'
      ]
    }
  },
  {
    id: 'ca-sports-2026',
    title: {
      mizo: 'Sports News Jan-Jun 2026',
      english: 'Sports News Jan-Jun 2026'
    },
    notes: {
      mizo: [
        '**JANUARY 2026:**',
        '**1. Hockey** - India Men U18 Asia Cup Champions.',
        '**2. Tennis** - Alexander Zverev leh Mirra Andreeva, French Open 2026 Champions.',
        '**FEBRUARY 2026:**',
        '**3. Football** - India Women Team SAFF Championship 2026 champion. Kum 7 hnuah a vawi 6 nan.',
        '**4. Chess** - R Praggnanandhaa Norway Chess 2026 Champion. Indian hmasa ber.',
        '**MARCH-APRIL 2026:**',
        '**5. Cricket** - India vs Afghanistan Test. India in biggest win record.',
        '**MAY 2026:**',
        '**6. F1** - Kimi Antonelli Monaco Grand Prix 2026 la.',
        '**JUNE 2026:**',
        '**7. MoS Murugan Sports** - June 3 Kolasib RSTC ah football exhibition match en. Viksit Bharat 2047 tan sports pawimawh.',
        '**MIZORAM SPECIAL:**',
        '**8. Tourism Events Calendar** - Sports events tam tak tel. Football, traditional games.',
        '**9. Assam Rifles** - Boatmanship Training May 26-30. Monsoon operational preparedness.'
      ],
      english: [
        '**JANUARY 2026:**',
        '**1. Hockey** - India Men U18 Asia Cup Champions.',
        '**2. Tennis** - Alexander Zverev and Mirra Andreeva, French Open 2026 Champions.',
        '**FEBRUARY 2026:**',
        '**3. Football** - India Women Team SAFF Championship 2026 champions. 6th title after 7 years.',
        '**4. Chess** - R Praggnanandhaa Norway Chess 2026 Champion. First Indian.',
        '**MARCH-APRIL 2026:**',
        '**5. Cricket** - India vs Afghanistan Test. India recorded biggest win.',
        '**MAY 2026:**',
        '**6. F1** - Kimi Antonelli wins Monaco Grand Prix 2026.',
        '**JUNE 2026:**',
        '**7. MoS Murugan Sports** - June 3 watched football exhibition at Kolasib RSTC. Emphasized sports for Viksit Bharat 2047.',
        '**MIZORAM SPECIAL:**',
        '**8. Tourism Events Calendar** - Includes multiple sports events. Football, traditional games.',
        '**9. Assam Rifles** - Boatmanship Training May 26-30. Monsoon operational preparedness.'
      ]
    }
  }
]

export default function CurrentAffairsPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'Current Affairs 2026', english: 'Current Affairs 2026' }}
      chapters={currentAffairsChapters}
      backLink="/"
      testLink="/current-affairs/test"
      testTitle="CA 2026 Mock Test - 100 Questions"
      testDesc="Jan 1 - Jun 9, 2026 • World, National, Mizoram • MPSC Important"
    />
  )
}