'use client'
import SubjectPage from '../components/SubjectPage'

const mizoramGKChapters = [
  {
    id: 'mizo-1',
    title: {
      mizo: 'Chapter 1: Mizoram Chanchin Bulpui',
      english: 'Chapter 1: Mizoram Basic Facts'
    },
    notes: {
      mizo: [
        'Mizoram din: Feb 20, 1987. State 23-na. UT atanga State ah hlankai. Capital: Aizawl.',
        'Zau zawng: 21,081 sq km. India ram 0.64%. District 11: Aizawl, Lunglei, Champhai, Kolasib, Serchhip, Mamit, Lawngtlai, Siaha, Saitual, Khawzawl, Hnahthial.',
        'Ramri: Hmar ah Assam 123km, Hmarchhak ah Manipur 95km, Thlang ah Tripura 66km, Bangladesh 318km, Chhak leh Chhim ah Myanmar 510km.',
        'Mihring: 2011 Census ah 10,91,014. Mipa 5,52,339, Hmeichhia 5,38,675. Sex Ratio 975. Density 52 per sq km.',
        'Zirna: Literacy 91.58% - India ah 3-na. Kerala 94%, Lakshadweep 92% hnuai ah.',
        'Sakhua: Kristian 87.16%, Buddhist 8.51% - Chakma, Hindu 2.75%, Muslim 1.35%.',
        'Tawng: Mizo tawng official. Duhlian tawng hmang tam ber. Mara, Lai, Hmar, Paite, Chakma tawng pawh.',
        'Tlang sang: Phawngpui/Blue Mountain 2,157m Lawngtlai. Tlang hniam ber: Tlabung 21m.',
        'Lui lian: Tlawng 185.5km sei ber. Chhimtuipui/Kolodyne 138.5km. Tuirial, Tuivawl, Khawthlangtuipui/Karnaphuli.'
      ],
      english: [
        'Mizoram formed: Feb 20, 1987. 23rd State. Upgraded from UT. Capital: Aizawl.',
        'Area: 21,081 sq km. 0.64% of India. 11 Districts: Aizawl, Lunglei, Champhai, Kolasib, Serchhip, Mamit, Lawngtlai, Siaha, Saitual, Khawzawl, Hnahthial.',
        'Borders: North Assam 123km, Northeast Manipur 95km, West Tripura 66km, Bangladesh 318km, East & South Myanmar 510km.',
        'Population: 2011 Census 10,91,014. Male 5,52,339, Female 5,38,675. Sex Ratio 975. Density 52 per sq km.',
        'Literacy: 91.58% - 3rd in India. After Kerala 94%, Lakshadweep 92%.',
        'Religion: Christian 87.16%, Buddhist 8.51% - Chakma, Hindu 2.75%, Muslim 1.35%.',
        'Language: Mizo official. Duhlian dialect most common. Mara, Lai, Hmar, Paite, Chakma languages also.',
        'Highest Peak: Phawngpui/Blue Mountain 2,157m Lawngtlai. Lowest: Tlabung 21m.',
        'Major Rivers: Tlawng 185.5km longest. Chhimtuipui/Kolodyne 138.5km. Tuirial, Tuivawl, Khawthlangtuipui/Karnaphuli.'
      ]
    }
  },
  {
    id: 'mizo-2',
    title: {
      mizo: 'Chapter 2: Mizo History - Lal leh British',
      english: 'Chapter 2: Mizo History - Chiefs and British'
    },
    notes: {
      mizo: [
        'Mizo thlahtu: China Shan state atanga lo pem. Kawlphai, Chin Hills ah cheng. 1700s ah Mizoram ah lut.',
        'Zawlbuk: Tlangval riahkhawmna. Pasaltha in naupangte zirtir. 1954 ah sawrkarin a titawp.',
        'Lal hun: Khawtin ah Lal a awm. Lal upa in ro a relpui. Lal in chhiah a la: Fathang, Sachhiah, Buhsun.',
        'Lal lian ber: Vanhnuailiana, Lallula, Khawvelthanga, Suakpuilala. Lalsavunga Sailo - British do hmasa ber.',
        'British lut: 1890 ah Lt. Col. Tregear kaihhruai in Aizawl an la. Fort Aijal din. 1891 ah South Lushai Hills, 1898 ah North nen zawm.',
        'Lal thuneihna titawp: 1954 Assam Lushai Hills Acquisition of Chief Rights Act. Lal zawng zawng thuneihna hlip. Compensation pe.',
        'Mizo Union 1946: Party hmasa ber. Lal ban duh. Vanlawma, Pachhunga kaihhruai.',
        'MNF Movement 1966: Feb 28 zana ralthuam nen Independence puang. Laldenga President. Operation Jericho. Aizawl, Lunglei la. Mar 6 ah Indian Air Force in Aizawl bomb.',
        'Mautam 1959: Mau a par, ramin tla. Tam hnahthlak. MNF pianchhan lian.',
        'Peace Accord June 30, 1986: PM Rajiv Gandhi + Laldenga. MNF in ralthuam pe. Mizoram State pek. Laldenga CM hmasa ber 1987.'
      ],
      english: [
        'Mizo ancestors: Migrated from China Shan state. Lived in Kawlphai, Chin Hills. Entered Mizoram in 1700s.',
        'Zawlbuk: Bachelors dormitory. Pasaltha taught youth. Abolished by govt in 1954.',
        'Chiefdom era: Each village had Chief. Lal upa assisted in administration. Chiefs collected tax: Fathang, Sachhiah, Buhsun.',
        'Famous Chiefs: Vanhnuailiana, Lallula, Khawvelthanga, Suakpuilala. Lalsavunga Sailo - first to fight British.',
        'British entry: 1890 Lt. Col. Tregear captured Aizawl. Built Fort Aijal. 1891 South Lushai Hills, 1898 merged with North.',
        'Abolition of Chieftainship: 1954 Assam Lushai Hills Acquisition of Chief Rights Act. All chiefs powers abolished. Compensation given.',
        'Mizo Union 1946: First party. Wanted to abolish chiefs. Led by Vanlawma, Pachhunga.',
        'MNF Movement 1966: Feb 28 night declared Independence with arms. Laldenga President. Operation Jericho. Captured Aizawl, Lunglei. Mar 6 Indian Air Force bombed Aizawl.',
        'Mautam 1959: Bamboo flowering, rodent plague. Famine. Major cause for MNF.',
        'Peace Accord June 30, 1986: PM Rajiv Gandhi + Laldenga. MNF surrendered arms. Mizoram granted Statehood. Laldenga first CM 1987.'
      ]
    }
  },
  {
    id: 'mizo-3',
    title: {
      mizo: 'Chapter 3: Mizo Thawnthu leh Pi Pute Thu',
      english: 'Chapter 3: Mizo Folktales and Ancestral Wisdom'
    },
    notes: {
      mizo: [
        'Chhura leh Naupangi: Chhura sava veiin Naupangi a ngaizawng. Sih pui atangin a chhanchhuak. Mizo thawnthu lar ber.',
        'Kungawrhi: Nuthlawi hmeltha, Pasal 7 nei. A pasal te a that zel. Pasaltha Thangliana in a that.',
        'Liandova leh Tuaisiala: Thian inngeih. Liandova nupui Nghalngai in Tuaisiala a ngaizawng. Liandova thih hnuah an innei.',
        'Sawmthing Tei: Sahrang in mi a seh thin. Pasal tha in an kap hlum. A lu an khai.',
        'Rimenhawihi: Nula hmeltha. Pasaltha in an inchuh. Tawihna avangin a thi.',
        'Tlingi leh Ngama: Inhmangaih na tak. Ngama ral ah a thi. Tlingi lungleng in a thi ve. Tlingi Par an tih.',
        'Thailungi: Ramhuai in a ru. A pasal in a zawng hmu. Hringlang Tlang ah.',
        'Pi Pute Thufing: "Sem sem dam dam, ei bil thi thi" - Inpuih tawn thatna. "Thiante tan chuan thih ngam" - Inpumkhatna.',
        '"Hmel hriat loh di an tha ngai lo" - Mahni chi leh kuang hre chiang tur. "Sakei hma ah lu hai loh tur" - Ral hma ah fimkhur tur.',
        'Khuangchawi: Mi hausa in se chhuan thum talh a, khawtlang a chawm. Pasal tha nihna. Thangchhuah paina.'
      ],
      english: [
        'Chhura and Naupangi: Chhura bird hunter loved Naupangi. Rescued her from giant eagle. Most famous Mizo folktale.',
        'Kungawrhi: Beautiful widow, married 7 husbands. Killed all her husbands. Pasaltha Thangliana killed her.',
        'Liandova and Tuaisiala: Best friends. Liandova\'s wife Nghalngai loved Tuaisiala. After Liandova died, they married.',
        'Sawmthing Tei: Monster that ate people. Pasaltha shot it dead. Hung its head.',
        'Rimenhawihi: Beautiful girl. Pasaltha fought over her. Died of sorrow.',
        'Tlingi and Ngama: True lovers. Ngama died in war. Tlingi died of grief. Called Tlingi Flower.',
        'Thailungi: Kidnapped by demon. Her husband found her. At Hringlang Tlang.',
        'Ancestral Wisdom: "Sem sem dam dam, ei bil thi thi" - Sharing is life, selfishness is death. "Thiante tan chuan thih ngam" - Die for friends - Unity.',
        '"Hmel hriat loh di an tha ngai lo" - Don\'t trust strangers. "Sakei hma ah lu hai loh tur" - Don\'t be careless before enemy.',
        'Khuangchawi: Rich man sacrifices 3 mithuns, feeds entire village. Sign of Pasaltha. Path to Thangchhuah.'
      ]
    }
  },
  {
    id: 'mizo-4',
    title: {
      mizo: 'Chapter 4: Mizo Nunphung leh Kut',
      english: 'Chapter 4: Mizo Culture and Festivals'
    },
    notes: {
      mizo: [
        'Tlawmngaihna: Mahni hma sial lo, midang tana inpek. Mizo nunphung bulpui. A thi a thau pawh chawi.',
        'Hnatlang: Khawtlang hna thawh ho. In sak, lo vat, thlan lai. Hmeichhia Buhchum, Mipa in.',
        'Nghabeng: Nula rim. Tlangval in zanah nula in ah leng. Inneih hma inngaihzawn dan.',
        'Inneih: Man ₹420 + Thianman ₹1500-3000. Mo thuam: Puanchei, Kawrchei, Vakiria. Mo lawm zan.',
        'Chapchar Kut: Feb-Mar. Lo vah zawh lawmna. Cheraw kan, Chai lam, Sarlamkai. 1450 ah Lal Zawlbuk ah tan.',
        'Mim Kut: Aug-Sep. Thlawhhma thar lawmna. Mitthi te tan buh hlan. Tapchhak zawl ah.',
        'Pawl Kut: Dec-Jan. Buh seng zawh lawmna. Sa leh zu. Thla 2 chhung.',
        'Cheraw Kan: Mau 4 hmangin lam. Hmeichhe lam. Khawvel hriat lar. Guinness Record 2010.',
        'Chheih Lam: Mipa lam. Tlawmngaihna lantirna. Khuang, Dar, Seki nen.',
        'Puan: Puanchei - hmeichhe puan mawi. Ngotekherh - pasal nei lo tan. Pawndum - lunglen puan.'
      ],
      english: [
        'Tlawmngaihna: Selfless service, sacrifice for others. Core Mizo value. Bear others burden.',
        'Hnatlang: Community work. House building, jhum, grave digging. Women cook Buhchum, Men work.',
        'Nghabeng: Courtship. Young men visit girls at night. Pre-marriage dating custom.',
        'Marriage: Bride price ₹420 + Thianman ₹1500-3000. Bride dress: Puanchei, Kawrchei, Vakiria. Mo lawm night.',
        'Chapchar Kut: Feb-Mar. Post-jhum celebration. Cheraw dance, Chai, Sarlamkai. Started 1450 in Chief Zawlbuk.',
        'Mim Kut: Aug-Sep. Maize harvest festival. Offerings to dead. At Tapchhak zawl.',
        'Pawl Kut: Dec-Jan. Harvest festival. Meat and rice beer. Lasts 2 months.',
        'Cheraw Dance: Bamboo dance with 4 bamboos. Female dance. World famous. Guinness Record 2010.',
        'Chheih Lam: Male dance. Shows Tlawmngaihna. With Drum, Gong, Seki.',
        'Puan: Puanchei - women ceremonial cloth. Ngotekherh - for unmarried. Pawndum - mourning cloth.'
      ]
    },
    isPro: true
  },
  {
    id: 'mizo-5',
    title: {
      mizo: 'Chapter 5: Mizoram Sawrkar leh Dan',
      english: 'Chapter 5: Mizoram Government and Law'
    },
    notes: {
      mizo: [
        'Assembly: MLA 40. Seat ST tan 39 reserve, 1 General. Speaker tunlai: Lalrinliana Sailo.',
        'MP: Lok Sabha 1 - Richard Vanlalhmangaiha. Rajya Sabha 1 - K. Vanlalvena.',
        'Governor: Dr. Hari Babu Kambhampati. CM: Lalduhoma ZPM. 2023 ah thlan tlin.',
        'High Court: Gauhati High Court Aizawl Bench. 1990 atangin. Chief Justice tunlai: Vijay Bishnoi.',
        '6th Schedule: Lai, Mara, Chakma tan Autonomous District Council 3. Lawngtlai, Siaha ah.',
        'ILP: Inner Line Permit 1873 Bengal Eastern Frontier Regulation. Vai lut turin ILP lak ngai. Mizoram, Nagaland, Arunachal, Manipur ah.',
        'MLPC Act 2014: Mizoram Liquor Prohibition & Control. Zu khap leh phal inthlak. Tunah phal.',
        'NLUP: New Land Use Policy 2010. Jhum tih tlem nan. Huan, ranvulh, dawr tan tanpuina.',
        'SEDPP: Socio-Economic Development Policy Program 2023. ZPM sawrkar. Chhungkaw 1 ah ₹50,000/year tanpuina target.'
      ],
      english: [
        'Assembly: 40 MLAs. 39 seats reserved ST, 1 General. Current Speaker: Lalrinliana Sailo.',
        'MP: Lok Sabha 1 - Richard Vanlalhmangaiha. Rajya Sabha 1 - K. Vanlalvena.',
        'Governor: Dr. Hari Babu Kambhampati. CM: Lalduhoma ZPM. Elected 2023.',
        'High Court: Gauhati High Court Aizawl Bench. Since 1990. Current Chief Justice: Vijay Bishnoi.',
        '6th Schedule: 3 Autonomous District Councils for Lai, Mara, Chakma. In Lawngtlai, Siaha.',
        'ILP: Inner Line Permit 1873 Bengal Eastern Frontier Regulation. Non-Mizos need ILP to enter. In Mizoram, Nagaland, Arunachal, Manipur.',
        'MLPC Act 2014: Mizoram Liquor Prohibition & Control. Ban and lift keeps changing. Currently allowed.',
        'NLUP: New Land Use Policy 2010. To reduce Jhum. Support for plantation, livestock, shops.',
        'SEDPP: Socio-Economic Development Policy Program 2023. ZPM govt. Target ₹50,000/year support per family.'
      ]
    },
    isPro: true
  },
  {
    id: 'mizo-6',
    title: {
      mizo: 'Chapter 6: Mizoram Economy leh Hmasawnna',
      english: 'Chapter 6: Mizoram Economy and Development'
    },
    notes: {
      mizo: [
        'GSDP 2023-24: ₹35,805 crore. Growth 11.4%. Per Capita ₹2,62,297.',
        'Agriculture: 60% in eizawn nan hmang. Jhum 21% area. Buh thar 1.3 lakh MT. Mautam avangin buh tlem.',
        'Huan: Orange, Hatkora, Iskut, Passion fruit. Serchhip ah Orange tam ber. Champhai ah grape.',
        'Mau: Melocanna baccifera. Mautam 48 kum dan ah. Mau atangin paper, furniture, pickles siam.',
        'Handloom: Puan siam. Mizo puan export. KVIC in pui. Puanchei ₹5,000-20,000.',
        'Bamboo Mission: National Bamboo Mission. Mizoram ah mau chin uar. Agarbatti stick, charcoal.',
        'Tourism: Reiek Tlang, Phawngpui, Tamdil, Vantawng Khawhthla. Thenzawl Golf Course. 2023 ah tourist 1.8 lakh.',
        'Kaladan Project: Sittwe Port Myanmar atanga Mizoram kawng. Zorinpui Lawngtlai. ₹2,904 crore. Trade kawng.',
        'Railway: Bairabi railhead 2016. Sairang thleng tur 2024. Aizawl hnai tawh.',
        'Airport: Lengpui Airport 1998. Tabletop airport. Runway 2,500m. Delhi, Kolkata, Guwahati flight.'
      ],
      english: [
        'GSDP 2023-24: ₹35,805 crore. Growth 11.4%. Per Capita ₹2,62,297.',
        'Agriculture: 60% depend on it. Jhum 21% area. Rice production 1.3 lakh MT. Less due to Mautam.',
        'Horticulture: Orange, Hatkora, Chayote, Passion fruit. Serchhip has most Orange. Champhai grapes.',
        'Bamboo: Melocanna baccifera. Mautam every 48 years. Bamboo for paper, furniture, pickles.',
        'Handloom: Puan weaving. Mizo puan export. KVIC supports. Puanchei ₹5,000-20,000.',
        'Bamboo Mission: National Bamboo Mission. Promote bamboo cultivation in Mizoram. Agarbatti stick, charcoal.',
        'Tourism: Reiek Tlang, Phawngpui, Tamdil, Vantawng Falls. Thenzawl Golf Course. 1.8 lakh tourists in 2023.',
        'Kaladan Project: Sittwe Port Myanmar to Mizoram road. Zorinpui Lawngtlai. ₹2,904 crore. Trade route.',
        'Railway: Bairabi railhead 2016. Extending to Sairang 2024. Near Aizawl.',
        'Airport: Lengpui Airport 1998. Tabletop airport. Runway 2,500m. Flights to Delhi, Kolkata, Guwahati.'
      ]
    },
    isPro: true
  }
]

export default function MizoramGKPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'Mizoram GK', english: 'Mizoram GK' }}
      chapters={mizoramGKChapters}
      backLink="/"
    />
  )
}