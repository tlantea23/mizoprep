'use client'
import SubjectPage from '../components/SubjectPage'

const scienceTechChapters = [
  {
    id: 'sci-1',
    title: {
      mizo: 'Chapter 1: ISRO leh India Space Programme',
      english: 'Chapter 1: ISRO and India Space Programme'
    },
    notes: {
      mizo: [
        'ISRO din: August 15, 1969. Dr. Vikram Sarabhai "Father of Indian Space Programme". Headquarters Bengaluru.',
        'SLV-3 1980: Dr. APJ Abdul Kalam Project Director. Rohini RS-1 satellite orbit ah dah. India ram 6-na.',
        'PSLV: "Workhorse". Chandrayaan-1, Mangalyaan kap tu. Polar orbit tan.',
        'GSLV Mk-III/LVM3: "Bahubali". Cryogenic engine. Chandrayaan-2, Chandrayaan-3 kap. Gaganyaan tan hman tur.',
        'Chandrayaan-1 2008: Thla ah tui molecule hmuchhuak. MIP in India flag phun.',
        'Chandrayaan-3 2023: Aug 23 ah South Pole ah tum. Shiv Shakti Point. Sulphur, Aluminium hmuchhuak. Budget ₹615 crore.',
        'Mangalyaan 2013: Tum khatna ah Mars lut. Cost ₹450 crore chauh. Kum 8 thawk.',
        'Aditya-L1 2023: L1 point atangin Ni zir. Eclipse nghah ngai lo.',
        'Gaganyaan 2025: Mihring 3 space ah ni 3. Vyommitra robot. Astronaut 4 training zo.',
        'NavIC: India GPS. Satellite 7. Military tan encrypted.'
      ],
      english: [
        'ISRO established: August 15, 1969. Dr. Vikram Sarabhai "Father of Indian Space Programme". Headquarters Bengaluru.',
        'SLV-3 1980: Dr. APJ Abdul Kalam Project Director. Placed Rohini RS-1 in orbit. India 6th nation.',
        'PSLV: "Workhorse". Launched Chandrayaan-1, Mangalyaan. For polar orbit.',
        'GSLV Mk-III/LVM3: "Bahubali". Cryogenic engine. Launched Chandrayaan-2, Chandrayaan-3. For Gaganyaan.',
        'Chandrayaan-1 2008: Discovered water molecules on Moon. MIP planted Indian flag.',
        'Chandrayaan-3 2023: Aug 23 landing on South Pole. Shiv Shakti Point. Detected Sulphur, Aluminium. Budget ₹615 crore.',
        'Mangalyaan 2013: Reached Mars in first attempt. Cost only ₹450 crore. Operated 8 years.',
        'Aditya-L1 2023: Studies Sun from L1 point. No need to wait for eclipse.',
        'Gaganyaan 2025: 3 humans to space for 3 days. Vyommitra robot. 4 astronauts trained.',
        'NavIC: India\'s GPS. 7 satellites. Encrypted for military.'
      ]
    }
  },
  {
    id: 'sci-2',
    title: {
      mizo: 'Chapter 2: Defence Technology - Missile leh Aircraft',
      english: 'Chapter 2: Defence Technology - Missiles and Aircraft'
    },
    notes: {
      mizo: [
        'DRDO din: 1958. Lab 50+. Dr. Kalam "Missile Man".',
        'IGMDP 1983: Prithvi, Agni, Trishul, Akash, Nag.',
        'Agni-V: 5,000km+. MIRV capable. China khawpui kap phak.',
        'BrahMos: India-Russia. Mach 2.8-3.0. Range 290-800km. Khawvela rang ber.',
        'Tejas Mk-1A: HAL siam. 83 order ₹48,000 crore. AESA radar nei.',
        'INS Vikrant 2022: India siam Aircraft Carrier. 45,000 tonnes. MiG-29K 30 phur.',
        'INS Arihant: Nuclear submarine. K-4 missile 3,500km. Second strike capability.',
        'Mission Shakti 2019: ASAT test. Satellite kap tla. Ram 4-na.',
        'S-400: Russia atangin lei. 400km range. Squadron 5.'
      ],
      english: [
        'DRDO established: 1958. 50+ labs. Dr. Kalam "Missile Man".',
        'IGMDP 1983: Prithvi, Agni, Trishul, Akash, Nag.',
        'Agni-V: 5,000km+. MIRV capable. Can reach Chinese cities.',
        'BrahMos: India-Russia. Mach 2.8-3.0. Range 290-800km. World\'s fastest.',
        'Tejas Mk-1A: Made by HAL. 83 ordered ₹48,000 crore. Has AESA radar.',
        'INS Vikrant 2022: Indigenous Aircraft Carrier. 45,000 tonnes. Carries 30 MiG-29K.',
        'INS Arihant: Nuclear submarine. K-4 missile 3,500km. Second strike capability.',
        'Mission Shakti 2019: ASAT test. Shot down satellite. 4th nation.',
        'S-400: From Russia. 400km range. 5 squadrons.'
      ]
    }
  },
  {
    id: 'sci-3',
    title: {
      mizo: 'Chapter 3: Nuclear Technology leh Energy',
      english: 'Chapter 3: Nuclear Technology and Energy'
    },
    notes: {
      mizo: [
        'Atomic Energy Commission 1948: Dr. Homi Bhabha din. BARC Mumbai.',
        'Pokhran-I 1974: "Smiling Buddha". 15kt. Ram 6-na nuclear nei.',
        'Pokhran-II 1998: "Operation Shakti". Test 5. Thermonuclear 45kt. No First Use policy.',
        'Nuclear Plant 22: 7,480 MW. Kudankulam lian ber 2,000 MW. Target 22,480 MW by 2031.',
        'Three-Stage Programme: 1. PHWR Uranium, 2. FBR Plutonium, 3. Thorium. India ah Thorium 25%.',
        'ISA 2015: International Solar Alliance. PM Modi + France. HQ Gurugram. Ram 120+ member.',
        'Green Hydrogen Mission 2023: ₹19,744 crore. Target 5 MMT/year by 2030.',
        'Solar: 75 GW+. Bhadla Park 2,245 MW lian ber. Wind: 45 GW+. Tamil Nadu ah tam ber.'
      ],
      english: [
        'Atomic Energy Commission 1948: Founded by Dr. Homi Bhabha. BARC Mumbai.',
        'Pokhran-I 1974: "Smiling Buddha". 15kt. 6th nuclear nation.',
        'Pokhran-II 1998: "Operation Shakti". 5 tests. Thermonuclear 45kt. No First Use policy.',
        'Nuclear Plants 22: 7,480 MW. Kudankulam largest 2,000 MW. Target 22,480 MW by 2031.',
        'Three-Stage Programme: 1. PHWR Uranium, 2. FBR Plutonium, 3. Thorium. India has 25% world thorium.',
        'ISA 2015: International Solar Alliance. PM Modi + France. HQ Gurugram. 120+ members.',
        'Green Hydrogen Mission 2023: ₹19,744 crore. Target 5 MMT/year by 2030.',
        'Solar: 75 GW+. Bhadla Park 2,245 MW largest. Wind: 45 GW+. Tamil Nadu highest.'
      ]
    }
  },
  {
    id: 'sci-4',
    title: {
      mizo: 'Chapter 4: Biotechnology leh Medical Science',
      english: 'Chapter 4: Biotechnology and Medical Science'
    },
    notes: {
      mizo: [
        'COVID Vaccine: Covaxin - Bharat Biotech inactivated virus. Covishield - Serum Institute Oxford.',
        'Genome India: Mi 10,000 gene sequence. Natna inthlahchhawn zir nan.',
        'CRISPR-Cas9: Gene editing. Nobel 2020. Sickle cell, Thalassemia enkawl theihna.',
        'Stem Cell: Leukaemia, Spinal injury tan. India ah stem cell bank tam.',
        'Bt Cotton: GM crop hman phal awmchhun. Rulhut in ei lo. Mahyco-Monsanto.',
        'AYUSH Ministry 2014: Ayurveda, Yoga, Unani, Siddha, Homeopathy. Traditional medicine.',
        'Jan Aushadhi: Damdawi man tlawm. Generic medicine 2,000+ dawr.',
        'eSanjeevani: Telemedicine. Doctor online in biak theih. OPD 20 crore+ kan tawh.',
        'Ayushman Bharat 2018: Khawvela health insurance lian ber. Mi 50 crore cover. ₹5 lakh/year family 1 tan.'
      ],
      english: [
        'COVID Vaccine: Covaxin - Bharat Biotech inactivated virus. Covishield - Serum Institute Oxford.',
        'Genome India: Sequencing 10,000 Indians. For genetic disease research.',
        'CRISPR-Cas9: Gene editing. Nobel 2020. Can treat Sickle cell, Thalassemia.',
        'Stem Cell: For Leukaemia, Spinal injury. Many stem cell banks in India.',
        'Bt Cotton: Only GM crop approved. Resistant to bollworm. Mahyco-Monsanto.',
        'AYUSH Ministry 2014: Ayurveda, Yoga, Unani, Siddha, Homeopathy. Traditional medicine.',
        'Jan Aushadhi: Affordable medicines. 2,000+ generic medicine stores.',
        'eSanjeevani: Telemedicine. Consult doctors online. 20 crore+ OPD done.',
        'Ayushman Bharat 2018: World\'s largest health insurance. Covers 50 crore people. ₹5 lakh/year per family.'
      ]
    },
    isPro: true
  },
  {
    id: 'sci-5',
    title: {
      mizo: 'Chapter 5: IT, AI, Quantum leh Digital India',
      english: 'Chapter 5: IT, AI, Quantum and Digital India'
    },
    notes: {
      mizo: [
        'Digital India 2015: Broadband, e-Governance, Digital literacy. DigiLocker, UMANG app.',
        'UPI 2016: NPCI siam. Khawvela tha ber. Thla 1 ah ₹20 lakh crore+ transaction. 14 billion+ volume.',
        'Aadhaar: Biometric ID lian ber 1.3 billion+. UIDAI. Bank, SIM, Ration link.',
        '5G Oct 1, 2022: PM Modi launch. Jio 1 Gbps+, Airtel. Latency 1ms. 4G aiin 100x rang.',
        'IndiaAI Mission 2024: ₹10,371 crore. GPU 10,000+ lei tur. AI startup fund. Bhashini - Indian language AI.',
        'Quantum Mission 2020: ₹8,000 crore. Quantum computer, communication, sensing. ISRO quantum satellite plan.',
        'Semiconductor Mission 2021: ₹76,000 crore. Micron Gujarat, Tata Dholera, CG Power Sanand. Chip siamna.',
        'Supercomputer: PARAM Siddhi-AI rank 63 khawvel ah. C-DAC siam. 5.26 Petaflops.',
        'DigiYatra: Airport ah face recognition. Paperless travel. Delhi, Bangalore, Varanasi ah.',
        'ONDC: Open Network Digital Commerce. Amazon, Flipkart monopoly break tur. UPI ang deuh e-commerce tan.'
      ],
      english: [
        'Digital India 2015: Broadband, e-Governance, Digital literacy. DigiLocker, UMANG app.',
        'UPI 2016: By NPCI. World\'s best. ₹20 lakh crore+ transaction per month. 14 billion+ volume.',
        'Aadhaar: Largest biometric ID 1.3 billion+. UIDAI. Linked to Bank, SIM, Ration.',
        '5G Oct 1, 2022: PM Modi launched. Jio 1 Gbps+, Airtel. Latency 1ms. 100x faster than 4G.',
        'IndiaAI Mission 2024: ₹10,371 crore. To buy 10,000+ GPUs. AI startup fund. Bhashini - Indian language AI.',
        'Quantum Mission 2020: ₹8,000 crore. Quantum computer, communication, sensing. ISRO quantum satellite planned.',
        'Semiconductor Mission 2021: ₹76,000 crore. Micron Gujarat, Tata Dholera, CG Power Sanand. Chip manufacturing.',
        'Supercomputer: PARAM Siddhi-AI rank 63 in world. By C-DAC. 5.26 Petaflops.',
        'DigiYatra: Face recognition at airports. Paperless travel. In Delhi, Bangalore, Varanasi.',
        'ONDC: Open Network Digital Commerce. To break Amazon, Flipkart monopoly. Like UPI for e-commerce.'
      ]
    },
    isPro: true
  },
  {
    id: 'sci-6',
    title: {
      mizo: 'Chapter 6: Environment Tech leh Climate Change',
      english: 'Chapter 6: Environment Tech and Climate Change'
    },
    notes: {
      mizo: [
        'COP28 Dubai 2023: PM Modi tel. India target: 2030 ah 500 GW non-fossil, 2070 ah Net Zero.',
        'LiFE Mission: Lifestyle for Environment. PM Modi puan. Mi tin plastic tlem hman, tui renchem tur.',
        'National Hydrogen Mission: Green Hydrogen ₹19,744 crore. Steel, fertilizer, transport ah hman tur.',
        'EV Policy FAME-II: ₹10,000 crore. Electric vehicle subsidy. Charging station 7,000+.',
        'BS-VI Norms 2020: Bharat Stage 6. Vehicle exhaust faina. Sulphur 10ppm chauh. Delhi pollution tihtlem nan.',
        'Namami Gange: Ganga lui tihfai. ₹20,000 crore. Sewage treatment plant 200+.',
        'CAMPA: Compensatory Afforestation Fund ₹66,000 crore. Ngaw kih apiangin ngaw thar phun let tur.',
        'Cheetah Project 2022: Namibia atanga Cheetah 8 Kuno National Park MP ah hruai. India ah kum 70 hnuah Cheetah awm leh.',
        'IPCC Report 2023: Khawvel lum zel 1.5°C pel tep. India tuifawn san, ruahtui dan danglam.',
        'Carbon Credit: Company in CO2 tihtlem chuan credit hralh thei. India ah carbon market 2026 ah.'
      ],
      english: [
        'COP28 Dubai 2023: PM Modi attended. India target: 500 GW non-fossil by 2030, Net Zero by 2070.',
        'LiFE Mission: Lifestyle for Environment. By PM Modi. Everyone use less plastic, save water.',
        'National Hydrogen Mission: Green Hydrogen ₹19,744 crore. For Steel, fertilizer, transport.',
        'EV Policy FAME-II: ₹10,000 crore. Electric vehicle subsidy. 7,000+ charging stations.',
        'BS-VI Norms 2020: Bharat Stage 6. Cleaner vehicle exhaust. Sulphur only 10ppm. To reduce Delhi pollution.',
        'Namami Gange: Clean Ganga river. ₹20,000 crore. 200+ sewage treatment plants.',
        'CAMPA: Compensatory Afforestation Fund ₹66,000 crore. Plant new forest for every forest cut.',
        'Cheetah Project 2022: 8 Cheetahs from Namibia to Kuno National Park MP. Cheetahs back in India after 70 years.',
        'IPCC Report 2023: Global warming near 1.5°C. India faces sea level rise, rainfall pattern change.',
        'Carbon Credit: Companies reducing CO2 can sell credits. India carbon market from 2026.'
      ]
    },
    isPro: true
  }
]

export default function ScienceTechPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'Science & Tech', english: 'Science & Tech' }}
      chapters={scienceTechChapters}
      backLink="/"
    />
  )
}