'use client'
import SubjectPage from '../components/SubjectPage'

const geographyChapters = [
  {
    id: 'geo-1',
    title: {
      mizo: 'Chapter 1: Khawvel Geography Bulpui',
      english: 'Chapter 1: Fundamentals of World Geography'
    },
    notes: {
      mizo: [
        'Khawvel hi continent 7 leh tuipui 5 in then a ni: Asia, Africa, North America, South America, Antarctica, Europe, Australia.',
        'Latitude leh Longitude: Latitude hi equator atanga hmar/chhim lam tehna, Longitude hi Prime Meridian atanga chhak/thlang lam tehna a ni.',
        'Tropic of Cancer 23.5°N ah a awm a, India laihawl a paltlang. Tropic of Capricorn 23.5°S ah a awm.',
        'Khawvel hunbi: GMT/UTC atanga chhut a ni. India hi IST (GMT+5:30) a hmang.',
        'Plate Tectonics: Khawvel crust hi plate lian 7 in a insiam. Heng plate insutna hian lirnghing leh tlang sang a siam.'
      ],
      english: [
        'The world is divided into 7 continents and 5 oceans: Asia, Africa, North America, South America, Antarctica, Europe, Australia.',
        'Latitude and Longitude: Latitude measures north/south from equator, Longitude measures east/west from Prime Meridian.',
        'Tropic of Cancer lies at 23.5°N and passes through central India. Tropic of Capricorn is at 23.5°S.',
        'World Time Zones: Calculated from GMT/UTC. India uses IST (GMT+5:30).',
        'Plate Tectonics: Earth crust consists of 7 major plates. Their collision causes earthquakes and mountain formation.'
      ]
    }
  },
  {
    id: 'geo-2',
    title: {
      mizo: 'Chapter 2: India Geography - A Ram Leilung',
      english: 'Chapter 2: India Geography - Physical Features'
    },
    notes: {
      mizo: [
        'India ram zau zawng: 32,87,263 sq km. Khawvel ram lian ber 7-na a ni.',
        'India hmar lamah Himalaya tlangdung a awm. Khawvel tlang sang ber Mount Everest 8,848m Nepal ah a awm.',
        'Peninsular India: Deccan Plateau hi lava atanga insiam, a lung a dum, cotton thar nan a tha.',
        'Lui lian ber: Ganga 2,525km, Brahmaputra 2,900km, Godavari 1,465km.',
        'Thlasik, Nipui, Fur: India ah season 3 a awm. Fur hi June-September in a thleng, South-West Monsoon vang a ni.',
        'Thliarkar: Andaman & Nicobar Bay of Bengal ah, Lakshadweep Arabian Sea ah a awm.'
      ],
      english: [
        'Total area of India: 3,287,263 sq km. 7th largest country in the world.',
        'Himalayas lie in northern India. World\'s highest peak Mount Everest 8,848m is in Nepal.',
        'Peninsular India: Deccan Plateau formed by lava, black soil, excellent for cotton cultivation.',
        'Major Rivers: Ganga 2,525km, Brahmaputra 2,900km, Godavari 1,465km.',
        'Seasons: India has 3 seasons - Winter, Summer, Monsoon. Monsoon arrives June-September due to South-West Monsoon.',
        'Islands: Andaman & Nicobar in Bay of Bengal, Lakshadweep in Arabian Sea.'
      ]
    }
  },
  {
    id: 'geo-3',
    title: {
      mizo: 'Chapter 3: Mizoram Geography',
      english: 'Chapter 3: Mizoram Geography'
    },
    notes: {
      mizo: [
        'Mizoram zau zawng: 21,081 sq km. District 11 a awm mek.',
        'Tlang sang ber: Phawngpui/Blue Mountain 2,157m, Lawngtlai district ah a awm.',
        'Lui pawimawh: Tlawng lui 185.5km a sei ber, Chhimtuipui/Kolodyne lui 138.5km.',
        'Mizoram ramri: Hmarchhak lamah Manipur, Hmar lamah Assam, Thlang lamah Tripura leh Bangladesh, Chhim leh Chhak lamah Myanmar.',
        'Leilung pianhmang: Tlang ram 21% vel chauh, a bak zawng tlangram a ni. Leilung awih dan 73% chu 30° aia awih.',
        'Climate: Mizoram ah thlasik, nipui, fur season 3 a awm. Fur laiin ruah 250cm vel a sur. Temperature 11°C atanga 30°C inkar.',
        'Ramsa leh Ngaw: Dampa Tiger Reserve Mamit ah, Ngawngpui Wildlife Sanctuary Lawngtlai ah a awm.'
      ],
      english: [
        'Area of Mizoram: 21,081 sq km. Currently has 11 districts.',
        'Highest peak: Phawngpui/Blue Mountain 2,157m, located in Lawngtlai district.',
        'Important rivers: Tlawng river 185.5km longest, Chhimtuipui/Kolodyne river 138.5km.',
        'Mizoram borders: Manipur in northeast, Assam in north, Tripura and Bangladesh in west, Myanmar in south and east.',
        'Topography: Only 21% is plain area, rest is hilly. 73% of land has slope above 30°.',
        'Climate: Mizoram has 3 seasons. Monsoon rainfall around 250cm. Temperature ranges 11°C to 30°C.',
        'Wildlife: Dampa Tiger Reserve in Mamit, Ngawngpui Wildlife Sanctuary in Lawngtlai.'
      ]
    }
  },
  {
    id: 'geo-4',
    title: {
      mizo: 'Chapter 4: Climate leh Monsoon',
      english: 'Chapter 4: Climate and Monsoon'
    },
    notes: {
      mizo: [
        'Monsoon awmzia: Thlifim direction thlak thut vangin fur a thleng thin. June ah South-West Monsoon a lo thleng.',
        'El-Nino leh La-Nina: El-Nino in India ah fur a tlem tir, La-Nina in fur a tam tir.',
        'Koppen Climate Classification: India ram hi Aw (Tropical Savanna), Cwg (Monsoon with dry winter), BSh (Semi-arid) climate a nei.',
        'Western Disturbances: Mediterranean atanga lo kal, Hmarchhak India ah thlasik laiin ruah a sur tir.',
        'Retreating Monsoon: October-November ah Monsoon a tawlh kir, Tamil Nadu ah ruah a sur tam hun.'
      ],
      english: [
        'Monsoon meaning: Sudden shift in wind direction causing rains. South-West Monsoon arrives in June.',
        'El-Nino and La-Nina: El-Nino causes less rainfall in India, La-Nina causes excess rainfall.',
        'Koppen Climate Classification: India has Aw (Tropical Savanna), Cwg (Monsoon with dry winter), BSh (Semi-arid) climates.',
        'Western Disturbances: Originate from Mediterranean, cause winter rainfall in Northwest India.',
        'Retreating Monsoon: October-November monsoon withdraws, causes heavy rainfall in Tamil Nadu.'
      ]
    },
    isPro: true
  },
  {
    id: 'geo-5',
    title: {
      mizo: 'Chapter 5: Soil leh Natural Vegetation',
      english: 'Chapter 5: Soil and Natural Vegetation'
    },
    notes: {
      mizo: [
        'Soil chi hrang: Alluvial soil lui kama awm, Black soil Deccan Plateau ah, Red soil Tamil Nadu ah, Laterite soil Kerala ah.',
        'Alluvial soil hi Ganga-Brahmaputra ruam ah a tam ber, buh leh wheat thar nan a tha ber.',
        'Black soil/Cotton soil hi Maharashtra, Gujarat ah a tam, cotton thar nan hman ber.',
        'Natural Vegetation: Tropical Evergreen Forest - Western Ghats ah, Tropical Deciduous - Madhya Pradesh ah.',
        'Mangrove Forest: Sundarbans West Bengal ah khawvel mangrove lian ber a awm. Tidal forest a ni.',
        'Chipko Movement 1973: Uttarakhand ah thing kih duh lohna, Gaura Devi kaihhruai.'
      ],
      english: [
        'Soil types: Alluvial soil in river plains, Black soil in Deccan Plateau, Red soil in Tamil Nadu, Laterite soil in Kerala.',
        'Alluvial soil abundant in Ganga-Brahmaputra valley, best for rice and wheat cultivation.',
        'Black soil/Cotton soil abundant in Maharashtra, Gujarat, best for cotton cultivation.',
        'Natural Vegetation: Tropical Evergreen Forest in Western Ghats, Tropical Deciduous in Madhya Pradesh.',
        'Mangrove Forest: Sundarbans in West Bengal is world\'s largest mangrove. It is tidal forest.',
        'Chipko Movement 1973: In Uttarakhand against deforestation, led by Gaura Devi.'
      ]
    },
    isPro: true
  },
  {
    id: 'geo-6',
    title: {
      mizo: 'Chapter 6: Agriculture leh Irrigation',
      english: 'Chapter 6: Agriculture and Irrigation'
    },
    notes: {
      mizo: [
        'Kharif Crop: Fur laia thar - Buh, Vaimim, Behliang. June-July ah tuh, Oct-Nov ah seng.',
        'Rabi Crop: Thlasik laia thar - Wheat, Barley, Mustard. Oct-Dec ah tuh, April-June ah seng.',
        'Zaid Crop: Nipui laia thar - Watermelon, Cucumber. March-June inkar.',
        'Irrigation: India ah Canal irrigation 24%, Tube well 46%, Tank 3% hman a ni.',
        'Green Revolution 1960s: Dr. M.S. Swaminathan kaihhruai, HYV seeds hmangin buh leh wheat thar a pung.',
        'Jhum/Shifting Cultivation: Mizoram ah a la tam, kum 3-5 hnuah ram dangah an insawn.'
      ],
      english: [
        'Kharif Crop: Monsoon season - Rice, Maize, Cotton. Sown June-July, harvested Oct-Nov.',
        'Rabi Crop: Winter season - Wheat, Barley, Mustard. Sown Oct-Dec, harvested April-June.',
        'Zaid Crop: Summer season - Watermelon, Cucumber. March-June period.',
        'Irrigation: In India Canal irrigation 24%, Tube well 46%, Tank 3% used.',
        'Green Revolution 1960s: Led by Dr. M.S. Swaminathan, HYV seeds increased rice and wheat production.',
        'Jhum/Shifting Cultivation: Still prevalent in Mizoram, shift to new land after 3-5 years.'
      ]
    },
    isPro: true
  },
  {
    id: 'geo-7',
    title: {
      mizo: 'Chapter 7: Minerals leh Industries',
      english: 'Chapter 7: Minerals and Industries'
    },
    notes: {
      mizo: [
        'Iron Ore: Odisha, Jharkhand, Chhattisgarh ah a tam ber. Khawvel ah India hi 4-na a ni.',
        'Coal: Jharkhand (Jharia), West Bengal (Raniganj), Odisha ah a tam. India coal 98% Gondwana coal a ni.',
        'Petroleum: Mumbai High Arabian Sea ah, Digboi Assam ah oil field upa ber. Gujarat leh Rajasthan ah pawh a awm.',
        'Bauxite: Odisha ah 50% a awm, Aluminium siam nan hman.',
        'Steel Plant: Bhilai (Chhattisgarh), Rourkela (Odisha), Durgapur (West Bengal) ah a awm.',
        'Cotton Textile: Mumbai "Cottonopolis of India", Ahmedabad "Manchester of India" an ti.'
      ],
      english: [
        'Iron Ore: Abundant in Odisha, Jharkhand, Chhattisgarh. India ranks 4th in world.',
        'Coal: Jharkhand (Jharia), West Bengal (Raniganj), Odisha. 98% of India coal is Gondwana coal.',
        'Petroleum: Mumbai High in Arabian Sea, Digboi Assam oldest oil field. Also in Gujarat and Rajasthan.',
        'Bauxite: 50% in Odisha, used for Aluminium production.',
        'Steel Plant: Located in Bhilai (Chhattisgarh), Rourkela (Odisha), Durgapur (West Bengal).',
        'Cotton Textile: Mumbai called "Cottonopolis of India", Ahmedabad "Manchester of India".'
      ]
    },
    isPro: true
  },
  {
    id: 'geo-8',
    title: {
      mizo: 'Chapter 8: Transport leh Communication',
      english: 'Chapter 8: Transport and Communication'
    },
    notes: {
      mizo: [
        'National Highway: NH-44 India kawng thui ber 3,745km, Srinagar atanga Kanyakumari.',
        'Golden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata connect tu highway 5,846km.',
        'Railways: India Railways khawvel lian ber 4-na, 68,000km vel. Headquarters New Delhi.',
        'Port lian: Mumbai, Chennai, Kolkata, Kandla, Kochi, Visakhapatnam. Mumbai port buai ber.',
        'Airport: Indira Gandhi International Delhi, Chhatrapati Shivaji Mumbai ah a lian.',
        'Inland Waterways: NW-1 Ganga lui Allahabad atanga Haldia 1,620km.'
      ],
      english: [
        'National Highway: NH-44 longest in India 3,745km, Srinagar to Kanyakumari.',
        'Golden Quadrilateral: Highway connecting Delhi-Mumbai-Chennai-Kolkata 5,846km.',
        'Railways: Indian Railways 4th largest in world, 68,000km approx. Headquarters New Delhi.',
        'Major Ports: Mumbai, Chennai, Kolkata, Kandla, Kochi, Visakhapatnam. Mumbai is busiest.',
        'Airports: Indira Gandhi International Delhi, Chhatrapati Shivaji Mumbai are largest.',
        'Inland Waterways: NW-1 Ganga river Allahabad to Haldia 1,620km.'
      ]
    },
    isPro: true
  }
]

export default function GeographyPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'Geography', english: 'Geography' }}
      chapters={geographyChapters}
      backLink="/"
    />
  )
}