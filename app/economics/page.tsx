'use client'
import SubjectPage from '../components/SubjectPage'

const economicsChapters = [
  {
    id: 'eco-1',
    title: {
      mizo: 'Chapter 1: Economics Bulpui - Demand & Supply',
      english: 'Chapter 1: Basics of Economics - Demand & Supply'
    },
    notes: {
      mizo: [
        'Economics awmzia: Mihring duhna tihpuitlin nan resource tlemte hman dan zirna a ni. "Scarcity" hi Economics bulpui ber.',
        'Demand Law: Thil man a to chuan mihring lei duh a tlem, a tlâwm chuan a tam. Price ↑ = Demand ↓',
        'Supply Law: Thil man a to chuan siamchhuah an uar, a tlâwm chuan an siam tlem. Price ↑ = Supply ↑',
        'Equilibrium Price: Demand leh Supply intlukna lai. He lai hi market price dik tak a ni.',
        'Elasticity: Thil man tlem te a danglam pawha demand nasa takin a danglam chuan "Elastic" a ni. Ei tur basic ang chi chu "Inelastic".',
        'GDP awmzia: Ram chhunga kum 1 chhunga thil leh service siamchhuah zawng zawng hlutna. India GDP 2024 ah $3.9 Trillion vel.'
      ],
      english: [
        'Economics meaning: Study of how to use scarce resources to satisfy human wants. "Scarcity" is the foundation of Economics.',
        'Law of Demand: When price increases, demand decreases. When price falls, demand increases. Price ↑ = Demand ↓',
        'Law of Supply: When price increases, producers supply more. When price falls, they supply less. Price ↑ = Supply ↑',
        'Equilibrium Price: Point where Demand equals Supply. This is the actual market price.',
        'Elasticity: If small price change causes big demand change, it\'s "Elastic". Basic necessities are "Inelastic".',
        'GDP meaning: Total monetary value of all goods and services produced within a country in 1 year. India GDP 2024 around $3.9 Trillion.'
      ]
    }
  },
  {
    id: 'eco-2',
    title: {
      mizo: 'Chapter 2: India Economy - 5 Year Plans & NITI Aayog',
      english: 'Chapter 2: Indian Economy - 5 Year Plans & NITI Aayog'
    },
    notes: {
      mizo: [
        '1st Five Year Plan 1951-56: Agriculture ngaih pawimawh ber. Dr. K.N. Raj ruahman. Dam 2 lian - Bhakra Nangal, Hirakud.',
        '2nd Five Year Plan 1956-61: P.C. Mahalanobis model. Industries lam, Steel plant lian Bhilai, Rourkela, Durgapur din.',
        'Green Revolution 1960s: Dr. M.S. Swaminathan kaihhruai. HYV seeds, Fertilizer, Irrigation hmangin buh leh wheat thar a pung nasa.',
        '1991 Economic Reforms: Dr. Manmohan Singh Finance Minister laiin LPG Policy - Liberalisation, Privatisation, Globalisation.',
        'NITI Aayog: Jan 1, 2015 ah Planning Commission thlak. "Think Tank" anga hna thawk. Chairman = Prime Minister.',
        'Atmanirbhar Bharat 2020: COVID hnuah PM Modi puan. Package ₹20 lakh crore. Local thil siam uar tur.'
      ],
      english: [
        '1st Five Year Plan 1951-56: Focus on Agriculture. Planned by Dr. K.N. Raj. Major dams - Bhakra Nangal, Hirakud.',
        '2nd Five Year Plan 1956-61: P.C. Mahalanobis model. Focus on Industries, Major Steel plants Bhilai, Rourkela, Durgapur established.',
        'Green Revolution 1960s: Led by Dr. M.S. Swaminathan. HYV seeds, Fertilizer, Irrigation massively increased rice and wheat production.',
        '1991 Economic Reforms: Under Finance Minister Dr. Manmohan Singh - LPG Policy - Liberalisation, Privatisation, Globalisation.',
        'NITI Aayog: Replaced Planning Commission on Jan 1, 2015. Works as "Think Tank". Chairman = Prime Minister.',
        'Atmanirbhar Bharat 2020: Announced by PM Modi post-COVID. ₹20 lakh crore package. Promote local manufacturing.'
      ]
    }
  },
  {
    id: 'eco-3',
    title: {
      mizo: 'Chapter 3: Pawisa, Bank leh Inflation',
      english: 'Chapter 3: Money, Banking and Inflation'
    },
    notes: {
      mizo: [
        'RBI: Reserve Bank of India, 1935 ah din. India Central Bank. Governor tunlai = Shaktikanta Das. Pawisa chhu, interest rate control.',
        'Repo Rate: RBI in commercial bank te pawisa a puktirna rate. Tunah 6.50%. Repo ↑ chuan loan a to, inflation a hniam.',
        'CRR & SLR: CRR = Cash Reserve Ratio 4.5%, SLR = Statutory Liquidity Ratio 18%. Bank in RBI ah dah ngei ngei tur.',
        'Inflation awmzia: Thil man pung zel, pawisa hlutna tlahniam. CPI leh WPI in teh thin. India target = 4% ± 2%.',
        'Deflation: Thil man tlahniam zel, a tha lo. Miin lei an nghak, economy a chawl.',
        'Demonetisation Nov 8, 2016: ₹500 leh ₹1000 note hman theih loh. Black money tihtawp nan. Note thar ₹2000, ₹500 tihchhuah.'
      ],
      english: [
        'RBI: Reserve Bank of India, established 1935. India\'s Central Bank. Current Governor = Shaktikanta Das. Prints currency, controls interest rate.',
        'Repo Rate: Rate at which RBI lends to commercial banks. Currently 6.50%. If Repo ↑, loans become costly, inflation reduces.',
        'CRR & SLR: CRR = Cash Reserve Ratio 4.5%, SLR = Statutory Liquidity Ratio 18%. Mandatory deposits banks keep with RBI.',
        'Inflation meaning: Continuous rise in prices, money value decreases. Measured by CPI and WPI. India target = 4% ± 2%.',
        'Deflation: Continuous fall in prices, harmful. People postpone buying, economy stagnates.',
        'Demonetisation Nov 8, 2016: ₹500 and ₹1000 notes invalid. To curb black money. New ₹2000, ₹500 notes issued.'
      ]
    }
  },
  {
    id: 'eco-4',
    title: {
      mizo: 'Chapter 4: Budget, Tax leh GST',
      english: 'Chapter 4: Budget, Tax and GST'
    },
    notes: {
      mizo: [
        'Union Budget: Finance Minister in Feb 1 ah Parliament ah pharh thin. Kum 1 chhunga sawrkar sum lakluh leh hman dan.',
        'Fiscal Deficit: Sawrkar sum hmanna a lakluh aia tam. GDP atanga 3-4% a nih a him. 2024-25 ah 5.1% target.',
        'Tax chi 2: Direct Tax - Income Tax, Corporate Tax. Indirect Tax - GST, Customs Duty.',
        'GST July 1, 2017: "One Nation One Tax". Tax hrang CGST, SGST, IGST in a thlak. Slab 4: 5%, 12%, 18%, 28%.',
        'GST Council: Finance Minister Chairman, State FM zawng zawng member. GST rate an rel.',
        'FRBM Act 2003: Fiscal Responsibility and Budget Management. Sawrkar leiba tihtlem nan dan siam.'
      ],
      english: [
        'Union Budget: Presented by Finance Minister on Feb 1 in Parliament. Annual statement of govt income and expenditure.',
        'Fiscal Deficit: When govt expenditure exceeds revenue. 3-4% of GDP is safe. 2024-25 target is 5.1%.',
        'Types of Tax: Direct Tax - Income Tax, Corporate Tax. Indirect Tax - GST, Customs Duty.',
        'GST July 1, 2017: "One Nation One Tax". Replaced multiple taxes with CGST, SGST, IGST. 4 slabs: 5%, 12%, 18%, 28%.',
        'GST Council: Chaired by Finance Minister, all State FMs are members. Decides GST rates.',
        'FRBM Act 2003: Fiscal Responsibility and Budget Management. Law to reduce government debt.'
      ]
    },
    isPro: true
  },
  {
    id: 'eco-5',
    title: {
      mizo: 'Chapter 5: Poverty, Unemployment & Development',
      english: 'Chapter 5: Poverty, Unemployment & Development'
    },
    notes: {
      mizo: [
        'Poverty Line: Tendulkar Committee 2011-12: Khawpui ah ₹1000/thla, Thingtlâng ah ₹816/thla aia tlem chu "Below Poverty Line".',
        'MGNREGA 2005: Mahatma Gandhi National Rural Employment Guarantee Act. Kum 1 ah ni 100 hna thawh guarantee. Hlawh ₹200+ /ni.',
        'Unemployment chi hrang: Disguised - hna thawktu tam lutuk, Seasonal - Fur lai chauh hna awm, Structural - skill inmil lo.',
        'HDI: Human Development Index. UNDP in siam. Life Expectancy, Education, Per Capita Income atanga teh. India rank 134/193 in 2023.',
        'SDG: Sustainable Development Goals 17, UN in 2015 ah siam. 2030 ah zawh tur. Goal 1: No Poverty, Goal 4: Quality Education.',
        'Gini Coefficient: Inneih tawk lohna tehna. 0 = inang vek, 1 = mi 1 in a nei vek. India ah 0.35 vel.'
      ],
      english: [
        'Poverty Line: Tendulkar Committee 2011-12: Urban ₹1000/month, Rural ₹816/month below is "Below Poverty Line".',
        'MGNREGA 2005: Mahatma Gandhi National Rural Employment Guarantee Act. Guarantees 100 days work per year. Wage ₹200+/day.',
        'Types of Unemployment: Disguised - too many workers, Seasonal - work only in monsoon, Structural - skill mismatch.',
        'HDI: Human Development Index. By UNDP. Based on Life Expectancy, Education, Per Capita Income. India rank 134/193 in 2023.',
        'SDG: Sustainable Development Goals 17, by UN in 2015. Target 2030. Goal 1: No Poverty, Goal 4: Quality Education.',
        'Gini Coefficient: Measures inequality. 0 = perfect equality, 1 = perfect inequality. India around 0.35.'
      ]
    },
    isPro: true
  }
]

export default function EconomicsPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'Economics', english: 'Economics' }}
      chapters={economicsChapters}
      backLink="/"
    />
  )
}