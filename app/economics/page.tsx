'use client'
import SubjectPage from '../components/SubjectPage'

const economicsChapters = [
  {
    id: 'eco-1',
    title: {
      mizo: 'Economic Development & Growth',
      english: 'Economic Development & Growth'
    },
    notes: {
      mizo: [
        '**1. Economic Growth vs Development**',
        'Growth = GDP/NNP pung. Quantity chauh.',
        'Development = GDP + Life Quality + Health + Education. Quality tel.',
        'HDI = Life Expectancy + Education + Per Capita Income. UNDP siam.',
        '**MPSC Point:** India HDI 2025: 0.685, Rank 132/193. Category: Medium Human Development.',
        '',
        '**2. GDP Measurement**',
        '**GDP** = Ram chhunga thil siam zawng zawng value. Formula: C + I + G + (X-M)',
        '**GNP** = GDP + Foreign Income - Foreign te Income',
        '**NNP** = GNP - Depreciation',
        '**Base Year** = Tuna 2011-12. 2026 ah 2022-23 ah thlak dawn.',
        '',
        '**3. Economic Planning**',
        '**Five Year Plans** = 1951-2017. Tuna NITI Aayog.',
        '**NITI Aayog** = 2015 ah din. Think Tank. CEO: BVR Subrahmanyam.',
        '**Vision 2047** = Viksit Bharat. $30 trillion economy target.'
      ],
      english: [
        '**1. Economic Growth vs Development**',
        'Growth = Increase in GDP/NNP. Only quantity.',
        'Development = GDP + Quality of Life + Health + Education. Includes quality.',
        'HDI = Life Expectancy + Education + Per Capita Income. Created by UNDP.',
        '**MPSC Point:** India HDI 2025: 0.685, Rank 132/193. Category: Medium Human Development.',
        '',
        '**2. GDP Measurement**',
        '**GDP** = Total value of goods/services produced within country. Formula: C + I + G + (X-M)',
        '**GNP** = GDP + Income from Abroad - Income to Abroad',
        '**NNP** = GNP - Depreciation',
        '**Base Year** = Currently 2011-12. Changing to 2022-23 in 2026.',
        '',
        '**3. Economic Planning**',
        '**Five Year Plans** = 1951-2017. Now NITI Aayog.',
        '**NITI Aayog** = Established 2015. Think Tank. CEO: BVR Subrahmanyam.',
        '**Vision 2047** = Viksit Bharat. $30 trillion economy target.'
      ]
    }
  },
  {
    id: 'eco-2',
    title: {
      mizo: 'Sustainable Development & Environment',
      english: 'Sustainable Development & Environment'
    },
    notes: {
      mizo: [
        '**1. Sustainable Development**',
        'Brundtland Report 1987: "Tuna mamawh phuhruk, nakin generation tichhe lo".',
        '**3 Pillars:** Economic + Social + Environmental.',
        '**SDG 2030** = Goal 17. India rank 109/166 SDG Index 2024.',
        '',
        '**2. Climate Change & India**',
        '**Net Zero Target** = 2070. PM Modi COP26 ah puang.',
        '**Panchamrit** = 1) 500 GW non-fossil 2030, 2) 50% energy renewable, 3) 1 billion ton carbon reduce, 4) 45% carbon intensity cut, 5) Net Zero 2070.',
        '**LiFE Mission** = Lifestyle for Environment. Global movement.',
        '',
        '**3. Environmental Economics**',
        '**Carbon Credit** = Company in carbon ti tlem chuan credit hralh thei.',
        '**Green GDP** = GDP - Environmental Damage Cost.',
        '**E85 Fuel** = Jan 2026 India in launch. 85% Ethanol. Import ti tlem.',
        '',
        '**4. Key Initiatives**',
        '**National Green Hydrogen Mission** = Rs 19,744 cr. 2030 ah 5 MMT production.',
        '**PM-KUSUM** = Farmer tan solar pump.',
        '**FAME India** = Electric vehicle promote. Phase II: Rs 10,000 cr.'
      ],
      english: [
        '**1. Sustainable Development**',
        'Brundtland Report 1987: "Meet present needs without compromising future generations".',
        '**3 Pillars:** Economic + Social + Environmental.',
        '**SDG 2030** = 17 Goals. India rank 109/166 SDG Index 2024.',
        '',
        '**2. Climate Change & India**',
        '**Net Zero Target** = 2070. Announced by PM Modi at COP26.',
        '**Panchamrit** = 1) 500 GW non-fossil by 2030, 2) 50% energy from renewable, 3) Reduce 1 billion ton carbon, 4) 45% carbon intensity cut, 5) Net Zero 2070.',
        '**LiFE Mission** = Lifestyle for Environment. Global movement.',
        '',
        '**3. Environmental Economics**',
        '**Carbon Credit** = Companies reducing carbon can sell credits.',
        '**Green GDP** = GDP - Environmental Damage Cost.',
        '**E85 Fuel** = Launched Jan 2026 in India. 85% Ethanol. Reduces imports.',
        '',
        '**4. Key Initiatives**',
        '**National Green Hydrogen Mission** = Rs 19,744 cr. 5 MMT production by 2030.',
        '**PM-KUSUM** = Solar pumps for farmers.',
        '**FAME India** = Promote electric vehicles. Phase II: Rs 10,000 cr.'
      ]
    }
  },
  {
    id: 'eco-3',
    title: {
      mizo: 'Poverty & Unemployment',
      english: 'Poverty & Unemployment'
    },
    notes: {
      mizo: [
        '**1. Poverty Measurement**',
        '**Tendulkar Committee** = 2009. Per day: Rural Rs 27, Urban Rs 33.',
        '**Rangarajan Committee** = 2014. Rural Rs 32, Urban Rs 47.',
        '**Multidimensional Poverty Index** = Health + Education + Living Standard. NITI Aayog report.',
        '**MPSC Point:** India MPI 2023: 11.28%. Kum 5 chhungin 13.5 crore poverty atang chhuak.',
        '',
        '**2. Unemployment Types**',
        '**Structural** = Skill mismatch. Education leh job in mil lo.',
        '**Cyclical** = Economy tla vang. Recession hun.',
        '**Frictional** = Job inthlak lai.',
        '**Disguised** = Thawk si, contribution zero. Agriculture ah tam.',
        '',
        '**3. Poverty Alleviation Schemes**',
        '**MGNREGA** = Ni 100 hna guarantee. Wage: State tin dang. Mizoram: Rs 249/day.',
        '**PMGKY** = 5kg ration free. 80 crore mi dawng.',
        '**DAY-NRLM** = Self Help Group. Women empowerment.',
        '**PM SVANidhi** = Street vendor loan Rs 10,000. No collateral.',
        '',
        '**4. Current Data 2026**',
        '**Unemployment Rate** = 7.8% Jan 2026 CMIE.',
        '**UP Police Exam** = 28 lakh candidate, 32,679 post chauh. Unemployment lang.'
      ],
      english: [
        '**1. Poverty Measurement**',
        '**Tendulkar Committee** = 2009. Per day: Rural Rs 27, Urban Rs 33.',
        '**Rangarajan Committee** = 2014. Rural Rs 32, Urban Rs 47.',
        '**Multidimensional Poverty Index** = Health + Education + Living Standard. NITI Aayog report.',
        '**MPSC Point:** India MPI 2023: 11.28%. 13.5 crore people escaped poverty in 5 years.',
        '',
        '**2. Unemployment Types**',
        '**Structural** = Skill mismatch. Education and jobs don\'t match.',
        '**Cyclical** = Due to economic downturn. During recession.',
        '**Frictional** = Between jobs.',
        '**Disguised** = Working but zero contribution. Common in agriculture.',
        '',
        '**3. Poverty Alleviation Schemes**',
        '**MGNREGA** = 100 days job guarantee. Wage: Varies by state. Mizoram: Rs 249/day.',
        '**PMGKY** = 5kg free ration. 80 crore beneficiaries.',
        '**DAY-NRLM** = Self Help Groups. Women empowerment.',
        '**PM SVANidhi** = Street vendor loan Rs 10,000. No collateral.',
        '',
        '**4. Current Data 2026**',
        '**Unemployment Rate** = 7.8% Jan 2026 CMIE.',
        '**UP Police Exam** = 28 lakh candidates for 32,679 posts. Shows unemployment.'
      ]
    }
  },
  {
    id: 'eco-4',
    title: {
      mizo: 'Inclusive Economy & Financial Inclusion',
      english: 'Inclusive Economy & Financial Inclusion'
    },
    notes: {
      mizo: [
        '**1. Inclusive Growth**',
        'Growth hlawkna mi zawng zawng in an dawn. Poor, SC, ST, Women tel.',
        '**Financial Inclusion** = Bank account, credit, insurance mi zawng zawng hnenah.',
        '',
        '**2. Key Schemes**',
        '**PM Jan Dhan Yojana** = Zero balance account. 52 crore accounts 2026. Overdraft Rs 10,000.',
        '**PM Mudra Yojana** = Shishu <50k, Kishore 50k-5L, Tarun 5L-10L loan. No collateral.',
        '**Stand-Up India** = SC/ST/Women entrepreneur. Rs 10L-1Cr loan.',
        '**PM Jeevan Jyoti Bima** = Rs 436/year. Rs 2 lakh insurance.',
        '**PM Suraksha Bima** = Rs 20/year. Accident insurance Rs 2 lakh.',
        '',
        '**3. Digital Economy**',
        '**UPI** = Jan 2026: 16.99 billion transactions. World\'s highest.',
        '**Digital Rupee** = CBDC. RBI pilot project.',
        '**Account Aggregator** = Financial data share awlsam.',
        '',
        '**4. MSME Sector**',
        '**Definition Thar:** Micro <1Cr investment, Small <10Cr, Medium <50Cr.',
        '**Udyam Registration** = Online free.',
        '**ECLGS** = Covid lai loan guarantee. Rs 3 lakh crore.'
      ],
      english: [
        '**1. Inclusive Growth**',
        'Benefits of growth reach everyone. Poor, SC, ST, Women included.',
        '**Financial Inclusion** = Bank account, credit, insurance for all.',
        '',
        '**2. Key Schemes**',
        '**PM Jan Dhan Yojana** = Zero balance account. 52 crore accounts 2026. Overdraft Rs 10,000.',
        '**PM Mudra Yojana** = Shishu <50k, Kishore 50k-5L, Tarun 5L-10L loan. No collateral.',
        '**Stand-Up India** = SC/ST/Women entrepreneurs. Rs 10L-1Cr loan.',
        '**PM Jeevan Jyoti Bima** = Rs 436/year. Rs 2 lakh insurance.',
        '**PM Suraksha Bima** = Rs 20/year. Accident insurance Rs 2 lakh.',
        '',
        '**3. Digital Economy**',
        '**UPI** = Jan 2026: 16.99 billion transactions. World\'s highest.',
        '**Digital Rupee** = CBDC. RBI pilot project.',
        '**Account Aggregator** = Easy financial data sharing.',
        '',
        '**4. MSME Sector**',
        '**New Definition:** Micro <1Cr investment, Small <10Cr, Medium <50Cr.',
        '**Udyam Registration** = Online free.',
        '**ECLGS** = Covid loan guarantee. Rs 3 lakh crore.'
      ]
    }
  },
  {
    id: 'eco-5',
    title: {
      mizo: 'Demographics & Population',
      english: 'Demographics & Population'
    },
    notes: {
      mizo: [
        '**1. Census 2011 Key Data**',
        '**Population** = 121 crore. World 17.5%.',
        '**Decadal Growth** = 17.7%. A tla hniam zel.',
        '**Sex Ratio** = 943 female per 1000 male. Kerala sang ber 1084.',
        '**Literacy** = 73%. Male 80.9%, Female 64.6%. Mizoram 91.3% 3rd highest.',
        '**Density** = 382 per sq km. Bihar sang ber 1106.',
        '',
        '**2. Demographic Dividend**',
        '**Definition** = Working age 15-64 tam hun. 62.5% India population.',
        '**Window** = 2005-2055. Tuna peak. 2041 ah senior citizen 16% tling ang.',
        '**Challenge** = Skill lo chuan "Demographic Disaster" ni thei.',
        '',
        '**3. Population Policy**',
        '**NPP 2000** = TFR 2.1 by 2010 target. Tling lo.',
        '**Current TFR** = 2.0 NFHS-5. Replacement level tling.',
        '**Population 2026** = 143 crore estimate. World hmasa ber China lehpelh tawh.',
        '',
        '**4. Migration**',
        '**Urbanization** = 35% 2026. 2036 ah 40% tling ang.',
        '**Push Factors** = Unemployment, agriculture tla.',
        '**Pull Factors** = Job, education, health city ah.',
        '**Mizoram** = Myanmar refugee 38,059. Biometric 93% zo.'
      ],
      english: [
        '**1. Census 2011 Key Data**',
        '**Population** = 121 crore. 17.5% of world.',
        '**Decadal Growth** = 17.7%. Declining trend.',
        '**Sex Ratio** = 943 female per 1000 male. Kerala highest 1084.',
        '**Literacy** = 73%. Male 80.9%, Female 64.6%. Mizoram 91.3% 3rd highest.',
        '**Density** = 382 per sq km. Bihar highest 1106.',
        '',
        '**2. Demographic Dividend**',
        '**Definition** = Working age 15-64 majority. 62.5% of India population.',
        '**Window** = 2005-2055. Currently peak. By 2041, senior citizens 16%.',
        '**Challenge** = Without skills becomes "Demographic Disaster".',
        '',
        '**3. Population Policy**',
        '**NPP 2000** = TFR 2.1 by 2010 target. Not achieved.',
        '**Current TFR** = 2.0 NFHS-5. Replacement level achieved.',
        '**Population 2026** = 143 crore estimate. World largest, overtook China.',
        '',
        '**4. Migration**',
        '**Urbanization** = 35% 2026. Will reach 40% by 2036.',
        '**Push Factors** = Unemployment, agriculture decline.',
        '**Pull Factors** = Jobs, education, health in cities.',
        '**Mizoram** = Myanmar refugees 38,059. Biometric 93% complete.'
      ]
    }
  },
  {
    id: 'eco-6',
    title: {
      mizo: 'Social Sector: Health, Education, Women',
      english: 'Social Sector: Health, Education, Women'
    },
    notes: {
      mizo: [
        '**1. Health Sector**',
        '**Ayushman Bharat** = Rs 5 lakh insurance. 12 crore family cover. 2026: 55 crore beneficiary.',
        '**PM-JAY** = Hospital 30,000+ empanelled.',
        '**Health Spending** = 2.1% GDP 2026. Target 2.5% by 2025 tling lo.',
        '**IMR** = 28 per 1000. MMR = 97 per lakh.',
        '',
        '**2. Education Sector**',
        '**NEP 2020** = 5+3+3+4 structure. Vocational class 6 atang.',
        '**GER** = Higher Education 28.4%. Target 50% by 2035.',
        '**Samagra Shiksha** = Pre-school to Class 12. Budget Rs 37,500 cr.',
        '**PM SHRI** = 14,500 schools upgrade. Model school.',
        '',
        '**3. Women Empowerment**',
        '**Reservation** = Panchayat 50%, Parliament 33% pass 2023. Implement 2029.',
        '**Beti Bachao Beti Padhao** = Sex ratio 918 to 934 improve.',
        '**Ujjwala** = 10 crore LPG connection free.',
        '**Maternity Benefit** = 26 weeks leave. Rs 6000 PMMVY.',
        '**Nari Shakti** = STEM JRF 53% hmeichhia. NDA women cadet graduate 2026.',
        '',
        '**4. Social Security**',
        '**Atal Pension Yojana** = Rs 1000-5000 pension. 6 crore subscriber.',
        '**PM Shram Yogi Mandhan** = Unorganized worker Rs 3000 pension.',
        '**e-SHRAM Portal** = 30 crore register. Database.'
      ],
      english: [
        '**1. Health Sector**',
        '**Ayushman Bharat** = Rs 5 lakh insurance. 12 crore families covered. 2026: 55 crore beneficiaries.',
        '**PM-JAY** = 30,000+ hospitals empanelled.',
        '**Health Spending** = 2.1% GDP 2026. Target 2.5% by 2025 not met.',
        '**IMR** = 28 per 1000. MMR = 97 per lakh.',
        '',
        '**2. Education Sector**',
        '**NEP 2020** = 5+3+3+4 structure. Vocational from class 6.',
        '**GER** = Higher Education 28.4%. Target 50% by 2035.',
        '**Samagra Shiksha** = Pre-school to Class 12. Budget Rs 37,500 cr.',
        '**PM SHRI** = 14,500 schools upgrade. Model schools.',
        '',
        '**3. Women Empowerment**',
        '**Reservation** = Panchayat 50%, Parliament 33% passed 2023. Implementation 2029.',
        '**Beti Bachao Beti Padhao** = Sex ratio improved 918 to 934.',
        '**Ujjwala** = 10 crore free LPG connections.',
        '**Maternity Benefit** = 26 weeks leave. Rs 6000 PMMVY.',
        '**Nari Shakti** = STEM JRF 53% women. NDA women cadets graduated 2026.',
        '',
        '**4. Social Security**',
        '**Atal Pension Yojana** = Rs 1000-5000 pension. 6 crore subscribers.',
        '**PM Shram Yogi Mandhan** = Unorganized workers Rs 3000 pension.',
        '**e-SHRAM Portal** = 30 crore registered. Database.'
      ]
    }
  },
  {
    id: 'eco-7',
    title: {
      mizo: 'Agriculture & Rural Development',
      english: 'Agriculture & Rural Development'
    },
    notes: {
      mizo: [
        '**1. Agriculture Contribution**',
        '**GDP Share** = 15% 2026. Employment 42% mahse productivity hniam.',
        '**Land Holding** = 86% marginal <2 hectare. Average 1.08 hectare.',
        '**MSP** = Crops 23. CACP recommend. 2026: Wheat Rs 2425, Paddy Rs 2300.',
        '',
        '**2. Key Schemes**',
        '**PM-KISAN** = Rs 6000/year. 11 crore farmer. Rs 3.68 lakh crore disburse tawh.',
        '**PMFBY** = Crop insurance. Premium: Kharif 2%, Rabi 1.5%.',
        '**e-NAM** = 1361 mandi online. Farmer in rate tha zawk hmu.',
        '**KCC** = 7 crore card. 4% interest loan.',
        '**Namo Drone Didi** = SHG hmeichhia 15,000 drone pilot training.',
        '',
        '**3. Rural Development**',
        '**PMAY-G** = 3 crore in sak tawh. Target 2.95 crore. Rs 1.2L-1.3L assistance.',
        '**JJM** = Tap water connection. 15 crore household 2026. 78% coverage.',
        '**SBM-G** = ODF Plus. 5.8 lakh village ODF Plus.',
        '**PMGSY** = Village road 7.8 lakh km siam tawh.',
        '',
        '**4. Current Issues 2026**',
        '**Farm Income** = Double target 2022 tling lo. Rs 10,218/month average.',
        '**Climate Impact** = Monsoon 2026 ni 3 hma. Crop damage risk.',
        '**Mizoram** = Rubber Mission 4.5 lakh saplings phun. Solar 10 MW Thenzawl.'
      ],
      english: [
        '**1. Agriculture Contribution**',
        '**GDP Share** = 15% 2026. Employment 42% but low productivity.',
        '**Land Holding** = 86% marginal <2 hectare. Average 1.08 hectare.',
        '**MSP** = 23 crops. CACP recommends. 2026: Wheat Rs 2425, Paddy Rs 2300.',
        '',
        '**2. Key Schemes**',
        '**PM-KISAN** = Rs 6000/year. 11 crore farmers. Rs 3.68 lakh crore disbursed.',
        '**PMFBY** = Crop insurance. Premium: Kharif 2%, Rabi 1.5%.',
        '**e-NAM** = 1361 mandis online. Farmers get better rates.',
        '**KCC** = 7 crore cards. 4% interest loan.',
        '**Namo Drone Didi** = 15,000 SHG women drone pilot training.',
        '',
        '**3. Rural Development**',
        '**PMAY-G** = 3 crore houses built. Target 2.95 crore. Rs 1.2L-1.3L assistance.',
        '**JJM** = Tap water connection. 15 crore households 2026. 78% coverage.',
        '**SBM-G** = ODF Plus. 5.8 lakh villages ODF Plus.',
        '**PMGSY** = 7.8 lakh km village roads built.',
        '',
        '**4. Current Issues 2026**',
        '**Farm Income** = Double target 2022 not met. Rs 10,218/month average.',
        '**Climate Impact** = Monsoon 2026 3 days early. Crop damage risk.',
        '**Mizoram** = Rubber Mission 4.5 lakh saplings planted. Solar 10 MW Thenzawl.'
      ]
    }
  }
]

export default function EconomicsPage() {  
  return (
    <SubjectPage
      subjectName={{ mizo: 'Economics', english: 'Economics' }}
      chapters={economicsChapters}
      backLink="/"
      testLink="/economics/test"
      testTitle="Economics Mock Test"
      testDesc="Economic & Social Development • Sustainable Development • Poverty • Inclusive Economy • Demographics • Social Sector"
      slug="economics"
    
    />
  )
}