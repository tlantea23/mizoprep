'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type Language = 'mizo' | 'english'

type Chapter = {
  id: string
  title: { mizo: string, english: string }
  notes: { mizo: string[], english: string[] }
}

const HISTORY_CHAPTERS: Chapter[] = [
  {
    id: 'prehistoric',
    title: { mizo: '1. Hun Hmasa Ber', english: '1. Prehistoric Period' },
    notes: {
      mizo: [
        "Paleolithic: Kum nuai 5 atanga 10000 BC. Chunar, Kurnool ah hmanrua hmuh.",
        "Mesolithic: 10000-6000 BC. Bagor, Adamgarh. Hliap leh nauban hman.",
        "Neolithic: 6000-1000 BC. Mehrgarh, Burzahom. Buh leh belvaw.",
        "Chalcolithic: 3000-500 BC. Jorwe, Kayatha. Dar leh lung hmanrua.",
        "Mizoram: Vangchhia, Champhai ah lung hmanrua Neolithic hun ami hmuh."
      ],
      english: [
        "Paleolithic: 5 lakh to 10000 BC. Tools found at Chunar, Kurnool.",
        "Mesolithic: 10000-6000 BC. Bagor, Adamgarh. Microliths used.",
        "Neolithic: 6000-1000 BC. Mehrgarh, Burzahom. Agriculture & pottery.",
        "Chalcolithic: 3000-500 BC. Jorwe, Kayatha. Copper & stone tools.",
        "Mizoram: Neolithic tools found at Vangchhia, Champhai."
      ]
    }
  },
  {
    id: 'indus-valley',
    title: { mizo: '2. Indus Valley Civilization', english: '2. Indus Valley Civilization' },
    notes: {
      mizo: [
        "Hun: 3300-1300 BC. Mature phase 2600-1900 BC.",
        "Hmunpui: Harappa, Mohenjo-daro, Dholavira, Lothal, Rakhigarhi, Kalibangan.",
        "Thil pawimawh: Grid system, Great Bath, Granary, Drainage system.",
        "Zawrh sumdawn: Mesopotamia nen. Lothal dockyard.",
        "Ziah dan: Pictographic script. La chhiar chhuah theih loh.",
        "Sakhua: Pashupati seal, Mother Goddess, Swastika symbol.",
        "Tlahniam chhan: Tuilian, Lei che, Ramngaw tlahniam, Aryan lo lut."
      ],
      english: [
        "Period: 3300-1300 BC. Mature phase 2600-1900 BC.",
        "Major Sites: Harappa, Mohenjo-daro, Dholavira, Lothal, Rakhigarhi, Kalibangan.",
        "Features: Grid system, Great Bath, Granary, Advanced drainage.",
        "Trade: With Mesopotamia. Lothal was a dockyard.",
        "Script: Pictographic. Not deciphered yet.",
        "Religion: Pashupati seal, Mother Goddess, Swastika symbol.",
        "Decline: Floods, Tectonic activity, Deforestation, Aryan invasion theory."
      ]
    }
  },
  {
    id: 'vedic-period',
    title: { mizo: '3. Vedic Hun', english: '3. Vedic Period' },
    notes: {
      mizo: [
        "Early Vedic: 1500-1000 BC. Rig Veda. Sapta Sindhu region. Janapada.",
        "Later Vedic: 1000-600 BC. Sama, Yajur, Atharva Veda. Ganga valley.",
        "Sakhaw: Indra, Agni, Varuna. Yajna, Sacrifice pawimawh.",
        "Khaikhawmna: Sabha, Samiti, Vidatha. Raja tribal chief.",
        "Varna System: Brahmin, Kshatriya, Vaishya, Shudra. Rig Veda Purusha Sukta.",
        "Upanishads: Atman, Brahman philosophy. Karma, Moksha concept."
      ],
      english: [
        "Early Vedic: 1500-1000 BC. Rig Veda. Sapta Sindhu region. Tribal Janapadas.",
        "Later Vedic: 1000-600 BC. Sama, Yajur, Atharva Vedas. Ganga valley expansion.",
        "Religion: Indra, Agni, Varuna worship. Yajna, Sacrifices important.",
        "Polity: Sabha, Samiti, Vidatha assemblies. Raja was tribal chief.",
        "Varna System: Brahmin, Kshatriya, Vaishya, Shudra. From Rig Veda Purusha Sukta.",
        "Upanishads: Philosophy of Atman, Brahman. Concepts of Karma, Moksha."
      ]
    }
  },
  {
    id: 'mahajanapadas',
    title: { mizo: '4. Mahajanapadas', english: '4. Mahajanapadas' },
    notes: {
      mizo: [
        "Hun: 600 BC. Ram 16 lian. Anguttara Nikaya & Bhagavati Sutra ah.",
        "Pawimawh: Magadha, Kosala, Vatsa, Avanti, Vajji Gana-sangha.",
        "Magadha Lalna: Haryanka - Bimbisara, Ajatashatru. Nanda - Mahapadma Nanda.",
        "Thil thar: Iron, Thlawhna, Pawisa siam - Punch-marked coins.",
        "Second Urbanization: Pura, Nagara piang. Vaiphei sumdawnna."
      ],
      english: [
        "Period: 600 BC. 16 Great States mentioned in Anguttara Nikaya & Bhagavati Sutra.",
        "Important: Magadha, Kosala, Vatsa, Avanti, Vajji Gana-sangha.",
        "Magadha Dynasties: Haryanka - Bimbisara, Ajatashatru. Nanda - Mahapadma Nanda.",
        "New Developments: Iron tools, Agriculture, Punch-marked coins.",
        "Second Urbanization: Rise of Puras, Nagaras. Trade routes developed."
      ]
    }
  },
  {
    id: 'jainism-buddhism',
    title: { mizo: '5. Jainism & Buddhism', english: '5. Jainism & Buddhism' },
    notes: {
      mizo: [
        "Jainism: Vardhamana Mahavira - Tirthankara 24-na. 540-468 BC.",
        "Thurin: Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha. Triratna.",
        "Sect: Digambara, Svetambara. First Council - Pataliputra 300 BC.",
        "Buddhism: Gautama Buddha - Siddhartha. 563-483 BC. Lumbini.",
        "Thurin: Four Noble Truths, Eightfold Path, Middle Path. Tripitaka.",
        "Councils: 1st Rajgir, 2nd Vaishali, 3rd Pataliputra, 4th Kashmir.",
        "Sect: Hinayana, Mahayana, Vajrayana. Ashoka in darh zau."
      ],
      english: [
        "Jainism: Vardhamana Mahavira - 24th Tirthankara. 540-468 BC.",
        "Teachings: Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha. Triratna.",
        "Sects: Digambara, Svetambara. First Council - Pataliputra 300 BC.",
        "Buddhism: Gautama Buddha - Siddhartha. 563-483 BC. Born Lumbini.",
        "Teachings: Four Noble Truths, Eightfold Path, Middle Path. Tripitaka.",
        "Councils: 1st Rajgir, 2nd Vaishali, 3rd Pataliputra, 4th Kashmir.",
        "Sects: Hinayana, Mahayana, Vajrayana. Spread by Ashoka."
      ]
    }
  },
    {
    id: 'mauryan',
    title: { mizo: '6. Mauryan Empire 🔒 Pro', english: '6. Mauryan Empire 🔒 Pro' },
    notes: {
      mizo: [
        "Chandragupta Maurya: 321-297 BC. Chanakya pui. Nanda hnawt chhuak.",
        "Bindusara: 297-273 BC. Amitrochates. Deimachus Greek ambassador.",
        "Ashoka: 269-232 BC. Kalinga War 261 BC. Buddhism la. Dhamma.",
        "Edicts: Rock Edicts 14, Pillar Edicts 7, Minor Rock Edicts. Brahmi script.",
        "Administration: Centralised. Saptanga theory. Mantriparishad. Spy system.",
        "Economy: Agriculture, Trade, Punch-marked coins. Sannidhata - Treasury.",
        "Tlahniam: Lal chak lo, Province hrang, Brahmin duh lo, Ralthuam chhe tawh."
      ],
      english: [
        "Chandragupta Maurya: 321-297 BC. Guided by Chanakya. Overthrew Nandas.",
        "Bindusara: 297-273 BC. Called Amitrochates. Deimachus Greek ambassador.",
        "Ashoka: 269-232 BC. Kalinga War 261 BC. Converted to Buddhism. Propagated Dhamma.",
        "Edicts: 14 Rock Edicts, 7 Pillar Edicts, Minor Rock Edicts. Brahmi script.",
        "Administration: Centralised. Saptanga theory. Mantriparishad. Efficient spy system.",
        "Economy: Agriculture, Trade, Punch-marked coins. Sannidhata - Treasurer.",
        "Decline: Weak successors, Provincial revolts, Brahmin resentment, Military weakness."
      ]
    }
  },
  {
    id: 'post-mauryan',
    title: { mizo: '7. Post-Mauryan 🔒 Pro', english: '7. Post-Mauryan 🔒 Pro' },
    notes: {
      mizo: [
        "Shunga: Pushyamitra 185-149 BC. Bharhut Stupa. Patanjali.",
        "Kanva: Vasudeva 73-28 BC. Last ruler Susarman.",
        "Satavahanas: Simuka 60 BC. Gautamiputra Satakarni. Amaravati Stupa.",
        "Indo-Greeks: Menander/Milinda 165-145 BC. Milinda Panha. Gandhara Art.",
        "Sakas: Maues 80 BC. Rudradaman I - Junagadh inscription.",
        "Kushanas: Kujula Kadphises. Kanishka 78 AD - Saka Era. 4th Buddhist Council.",
        "Gandhara Art: Greco-Roman influence. Buddha statue hmasa ber."
      ],
      english: [
        "Shunga: Pushyamitra 185-149 BC. Bharhut Stupa. Patanjali's Mahabhashya.",
        "Kanva: Vasudeva 73-28 BC. Last ruler Susarman killed by Satavahanas.",
        "Satavahanas: Simuka 60 BC. Gautamiputra Satakarni greatest. Amaravati Stupa.",
        "Indo-Greeks: Menander/Milinda 165-145 BC. Milinda Panha dialogue. Gandhara Art.",
        "Sakas: Maues 80 BC. Rudradaman I - Junagadh inscription 150 AD.",
        "Kushanas: Kujula Kadphises. Kanishka 78 AD - Saka Era. 4th Buddhist Council.",
        "Gandhara Art: Greco-Roman influence. First Buddha statues created."
      ]
    }
  },
  {
    id: 'gupta',
    title: { mizo: '8. Gupta Empire 🔒 Pro', english: '8. Gupta Empire 🔒 Pro' },
    notes: {
      mizo: [
        "Chandragupta I: 319-335 AD. Gupta Era tan. Maharajadhiraja title.",
        "Samudragupta: 335-380 AD. Napoleon of India. Allahabad Pillar - Harisena.",
        "Chandragupta II: 380-415 AD. Vikramaditya. Fa-Hien lo kal. Ujjain la.",
        "Golden Age: Science - Aryabhata, Varahamihira. Literature - Kalidasa.",
        "Administration: Decentralised. Kumaramatya, Sandhivigrahika officers.",
        "Economy: Gold coins dinar. Trade Rome nen. Guilds - Shrenis.",
        "Tlahniam: Huna invasion - Toramana, Mihirakula. Feudalism."
      ],
      english: [
        "Chandragupta I: 319-335 AD. Started Gupta Era. Title Maharajadhiraja.",
        "Samudragupta: 335-380 AD. Napoleon of India. Allahabad Pillar inscription by Harisena.",
        "Chandragupta II: 380-415 AD. Vikramaditya. Fa-Hien visited. Conquered Ujjain.",
        "Golden Age: Science - Aryabhata, Varahamihira. Literature - Kalidasa, Vishakhadatta.",
        "Administration: Decentralised. Kumaramatya, Sandhivigrahika officers.",
        "Economy: Gold coins called dinars. Trade with Rome. Guilds - Shrenis.",
        "Decline: Huna invasion - Toramana, Mihirakula. Rise of feudalism."
      ]
    }
  },
  {
    id: 'post-gupta',
    title: { mizo: '9. Post-Gupta 🔒 Pro', english: '9. Post-Gupta 🔒 Pro' },
    notes: {
      mizo: [
        "Harshavardhana: 606-647 AD. Pushyabhuti dynasty. Kannauj capital.",
        "Hiuen Tsang: Chinese pilgrim 630-643 AD. Si-Yu-Ki ziak. Nalanda University.",
        "Chalukyas: Pulakesin II 609-642 AD. Aihole inscription. Ravikirti.",
        "Pallavas: Mahendravarman I, Narasimhavarman I. Mamallapuram temples.",
        "Rashtrakutas: Dantidurga. Krishna I - Kailasa temple Ellora. Amoghavarsha.",
        "Tripartite Struggle: Palas, Pratiharas, Rashtrakutas. Kannauj tan."
      ],
      english: [
        "Harshavardhana: 606-647 AD. Pushyabhuti dynasty. Capital Kannauj.",
        "Hiuen Tsang: Chinese pilgrim 630-643 AD. Wrote Si-Yu-Ki. Visited Nalanda.",
        "Chalukyas: Pulakesin II 609-642 AD. Aihole inscription by Ravikirti.",
        "Pallavas: Mahendravarman I, Narasimhavarman I. Mamallapuram Shore temples.",
        "Rashtrakutas: Dantidurga founder. Krishna I - Kailasa temple Ellora. Amoghavarsha.",
        "Tripartite Struggle: Palas, Pratiharas, Rashtrakutas fought for Kannauj."
      ]
    }
  },
  {
    id: 'early-medieval',
    title: { mizo: '10. Early Medieval India 🔒 Pro', english: '10. Early Medieval India 🔒 Pro' },
    notes: {
      mizo: [
        "Rajputs: Pratiharas, Chauhans, Paramaras, Solankis. Feudal system.",
        "Prithviraj Chauhan: 1178-1192 AD. First Battle of Tarain 1191 win. Second 1192 lost.",
        "Cholas: Vijayalaya 850 AD. Rajaraja I 985-1014. Rajendra I 1014-1044.",
        "Chola Admin: Ur, Sabha, Nagaram local bodies. Naval power. Brihadeshwara temple.",
        "Arab Invasion: Muhammad bin Qasim 712 AD. Sind conquer.",
        "Turkish Invasion: Mahmud Ghazni 1000-1027 AD. 17 raids. Somnath 1025.",
        "Muhammad Ghori: 1175-1206 AD. Second Tarain 1192. Delhi Sultanate bul."
      ],
      english: [
        "Rajputs: Pratiharas, Chauhans, Paramaras, Solankis. Feudal system emerged.",
        "Prithviraj Chauhan: 1178-1192 AD. Won First Battle of Tarain 1191. Lost Second 1192.",
        "Cholas: Vijayalaya 850 AD. Rajaraja I 985-1014. Rajendra I 1014-1044.",
        "Chola Admin: Ur, Sabha, Nagaram local self-govt. Strong navy. Brihadeshwara temple.",
        "Arab Invasion: Muhammad bin Qasim 712 AD. Conquered Sind.",
        "Turkish Invasion: Mahmud Ghazni 1000-1027 AD. 17 raids. Somnath temple 1025.",
        "Muhammad Ghori: 1175-1206 AD. Second Tarain 1192. Laid foundation of Delhi Sultanate."
      ]
    }
  },
  {
    id: 'delhi-sultanate',
    title: { mizo: '11. Delhi Sultanate 🔒 Pro', english: '11. Delhi Sultanate 🔒 Pro' },
    notes: {
      mizo: [
        "Slave Dynasty: Qutub-ud-din Aibak 1206-1210. Qutub Minar bul tan.",
        "Iltutmish: 1211-1236 AD. Iqta system. Silver Tanka, Copper Jital.",
        "Razia Sultan: 1236-1240 AD. Hmeichhe Sultan hmasa ber.",
        "Balban: 1266-1287 AD. Theory of Kingship. Divine right. Nauroz.",
        "Khilji: Alauddin 1296-1316 AD. Market reforms. Malik Kafur - South India.",
        "Tughlaq: Muhammad bin Tughlaq 1325-1351. Token currency, Capital transfer Daulatabad.",
        "Firoz Shah: 1351-1388 AD. Canal siam. Taxes 4 chauh. Slavery.",
        "Sayyid & Lodi: 1414-1526 AD. Ibrahim Lodi - First Battle of Panipat 1526."
      ],
      english: [
        "Slave Dynasty: Qutub-ud-din Aibak 1206-1210. Started Qutub Minar.",
        "Iltutmish: 1211-1236 AD. Iqta system. Silver Tanka, Copper Jital coins.",
        "Razia Sultan: 1236-1240 AD. First woman Sultan of Delhi.",
        "Balban: 1266-1287 AD. Theory of Kingship. Divine right concept. Nauroz festival.",
        "Khilji: Alauddin 1296-1316 AD. Market reforms. Malik Kafur conquered South.",
        "Tughlaq: Muhammad bin Tughlaq 1325-1351. Token currency, Capital shift to Daulatabad.",
        "Firoz Shah: 1351-1388 AD. Built canals. Only 4 taxes. Encouraged slavery.",
        "Sayyid & Lodi: 1414-1526 AD. Ibrahim Lodi defeated in First Battle of Panipat 1526."
      ]
    }
  },
  {
    id: 'vijayanagara',
    title: { mizo: '12. Vijayanagara & Bahmani 🔒 Pro', english: '12. Vijayanagara & Bahmani 🔒 Pro' },
    notes: {
      mizo: [
        "Vijayanagara: Harihara & Bukka 1336 AD. Hampi capital. Sangama dynasty.",
        "Krishnadeva Raya: 1509-1529 AD. Tuluva dynasty. Ashtadiggajas. Amuktamalyada.",
        "Battle of Talikota: 1565 AD. Deccan Sultanates in Vijayanagara hneh.",
        "Administration: Nayankara system. Ayagar system. Hampi ruins UNESCO.",
        "Bahmani: Alauddin Hasan Bahman Shah 1347 AD. Gulbarga capital.",
        "Breakup: 5 Deccan Sultanates - Bijapur, Golconda, Ahmednagar, Berar, Bidar.",
        "Culture: Hazara Rama temple, Vitthala temple. Hindustani music."
      ],
      english: [
        "Vijayanagara: Harihara & Bukka 1336 AD. Capital Hampi. Sangama dynasty.",
        "Krishnadeva Raya: 1509-1529 AD. Tuluva dynasty. Ashtadiggajas poets. Amuktamalyada.",
        "Battle of Talikota: 1565 AD. Deccan Sultanates defeated Vijayanagara.",
        "Administration: Nayankara system. Ayagar village system. Hampi UNESCO site.",
        "Bahmani: Alauddin Hasan Bahman Shah 1347 AD. Capital Gulbarga.",
        "Breakup: Into 5 Deccan Sultanates - Bijapur, Golconda, Ahmednagar, Berar, Bidar.",
        "Culture: Hazara Rama temple, Vitthala temple. Development of Hindustani music."
      ]
    }
  },
    {
    id: 'mughal',
    title: { mizo: '13. Mughal Empire 🔒 Pro', english: '13. Mughal Empire 🔒 Pro' },
    notes: {
      mizo: [
        "Babur: 1526-1530 AD. First Panipat 1526. Tuzuk-i-Baburi. Mughal dynasty bul.",
        "Humayun: 1530-1556 AD. Sher Shah in hnawt chhuak 1540. 1555 ah la let.",
        "Akbar: 1556-1605 AD. Second Panipat 1556. Mansabdari, Zabt system.",
        "Policy: Sulh-i-kul, Din-i-Ilahi 1582, Jizya tihbo 1564. Navratnas.",
        "Jahangir: 1605-1627 AD. Nur Jahan. Captain Hawkins, Sir Thomas Roe.",
        "Shah Jahan: 1628-1658 AD. Golden Age. Taj Mahal 1632-1653. Peacock Throne.",
        "Aurangzeb: 1658-1707 AD. Jizya la leh 1679. Deccan policy. Tlahniam tan.",
        "Tlahniam: Lal chak lo, Maratha, Sikh, Jats, Rajput hel. Nadir Shah 1739."
      ],
      english: [
        "Babur: 1526-1530 AD. First Panipat 1526. Tuzuk-i-Baburi memoir. Founded Mughal dynasty.",
        "Humayun: 1530-1556 AD. Defeated by Sher Shah 1540. Recaptured Delhi 1555.",
        "Akbar: 1556-1605 AD. Second Panipat 1556. Mansabdari, Zabt revenue system.",
        "Policy: Sulh-i-kul tolerance, Din-i-Ilahi 1582, Abolished Jizya 1564. Navratnas.",
        "Jahangir: 1605-1627 AD. Nur Jahan influence. Captain Hawkins, Sir Thomas Roe visited.",
        "Shah Jahan: 1628-1658 AD. Golden Age of Mughals. Taj Mahal 1632-1653. Peacock Throne.",
        "Aurangzeb: 1658-1707 AD. Reimposed Jizya 1679. Deccan policy. Empire overextended.",
        "Decline: Weak successors, Maratha, Sikh, Jats, Rajput revolts. Nadir Shah invasion 1739."
      ]
    }
  },
  {
    id: 'maratha',
    title: { mizo: '14. Marathas & Others 🔒 Pro', english: '14. Marathas & Others 🔒 Pro' },
    notes: {
      mizo: [
        "Shivaji: 1627-1680 AD. 1674 Coronation Raigad. Ashta Pradhan. Guerrilla warfare.",
        "Maratha Admin: Chauth 1/4, Sardeshmukhi 1/10. Peshwa - Balaji Vishwanath.",
        "Third Panipat: 1761 AD. Ahmad Shah Abdali vs Marathas. Maratha tlawm.",
        "Sikhs: Guru Nanak 1469-1539 AD. Guru Gobind Singh - Khalsa 1699.",
        "Bhakti Movement: Kabir, Nanak, Chaitanya, Mirabai, Tulsidas, Surdas.",
        "Sufi Movement: Khwaja Moinuddin Chishti, Nizamuddin Auliya. Silsilas."
      ],
      english: [
        "Shivaji: 1627-1680 AD. Coronation 1674 Raigad. Ashta Pradhan council. Guerrilla warfare.",
        "Maratha Admin: Chauth 1/4 tax, Sardeshmukhi 1/10. Peshwa - Balaji Vishwanath first.",
        "Third Panipat: 1761 AD. Ahmad Shah Abdali defeated Marathas. Major setback.",
        "Sikhs: Guru Nanak 1469-1539 AD. Guru Gobind Singh created Khalsa 1699.",
        "Bhakti Movement: Kabir, Nanak, Chaitanya, Mirabai, Tulsidas, Surdas.",
        "Sufi Movement: Khwaja Moinuddin Chishti, Nizamuddin Auliya. Various Silsilas."
      ]
    }
  },
  {
    id: 'advent-europeans',
    title: { mizo: '15. Europeans Lo Lut 🔒 Pro', english: '15. Advent of Europeans 🔒 Pro' },
    notes: {
      mizo: [
        "Portuguese: Vasco da Gama 1498 Calicut. Albuquerque - Goa 1510.",
        "Dutch: 1602 Dutch East India Company. Pulicat 1610. Masulipatam.",
        "British: 1600 East India Company. 1612 Surat factory. 1639 Madras.",
        "French: 1664 French East India Company. 1673 Pondicherry.",
        "Carnatic Wars: 1746-1763 AD. Dupleix vs Clive. British chak.",
        "Battle of Plassey: 1757 AD. Siraj-ud-daulah vs Clive. Bengal la.",
        "Battle of Buxar: 1764 AD. Mir Qasim + Shuja + Shah Alam II vs British."
      ],
      english: [
        "Portuguese: Vasco da Gama 1498 Calicut. Albuquerque captured Goa 1510.",
        "Dutch: 1602 Dutch East India Company. Pulicat 1610. Masulipatam.",
        "British: 1600 East India Company. 1612 Surat factory. 1639 Madras.",
        "French: 1664 French East India Company. 1673 Pondicherry.",
        "Carnatic Wars: 1746-1763 AD. Dupleix vs Clive. British victory.",
        "Battle of Plassey: 1757 AD. Siraj-ud-daulah vs Clive. British won Bengal.",
        "Battle of Buxar: 1764 AD. Mir Qasim + Shuja-ud-daula + Shah Alam II vs British."
      ]
    }
  },
  {
    id: 'british-expansion',
    title: { mizo: '16. British Expansion 🔒 Pro', english: '16. British Expansion 🔒 Pro' },
    notes: {
      mizo: [
        "Dual Govt Bengal: 1765-1772 AD. Robert Clive. Diwani & Nizamat.",
        "Regulating Act 1773: Governor-General Warren Hastings. Supreme Court Calcutta.",
        "Pitt's India Act 1784: Board of Control. Dual system.",
        "Subsidiary Alliance: Lord Wellesley 1798. Hyderabad hmasa ber.",
        "Doctrine of Lapse: Lord Dalhousie 1848. Satara, Jhansi, Nagpur.",
        "Anglo-Mysore Wars: 4 wars. Tipu Sultan thi 1799 Srirangapatna.",
        "Anglo-Maratha Wars: 3 wars. Third 1817-1818 - Peshwa tawp.",
        "Anglo-Sikh Wars: First 1845-46, Second 1848-49. Punjab annex 1849."
      ],
      english: [
        "Dual Govt Bengal: 1765-1772 AD. Robert Clive. Diwani & Nizamat.",
        "Regulating Act 1773: Governor-General Warren Hastings. Supreme Court Calcutta.",
        "Pitt's India Act 1784: Board of Control established. Dual system.",
        "Subsidiary Alliance: Lord Wellesley 1798. Hyderabad first to accept.",
        "Doctrine of Lapse: Lord Dalhousie 1848. Satara, Jhansi, Nagpur annexed.",
        "Anglo-Mysore Wars: 4 wars. Tipu Sultan died 1799 Srirangapatna.",
        "Anglo-Maratha Wars: 3 wars. Third 1817-1818 - End of Peshwa.",
        "Anglo-Sikh Wars: First 1845-46, Second 1848-49. Punjab annexed 1849."
      ]
    }
  },
  {
    id: 'revolt-1857',
    title: { mizo: '17. 1857 Hel & Aftermath 🔒 Pro', english: '17. Revolt of 1857 & Aftermath 🔒 Pro' },
    notes: {
      mizo: [
        "Chhan: Political, Economic, Social, Military, Immediate - Enfield rifle.",
        "Tan: 1857 May 10 Meerut. Bahadur Shah II Emperor.",
        "Hruaitu: Nana Saheb, Tantia Tope, Rani Lakshmibai, Kunwar Singh, Begum Hazrat Mahal.",
        "A tawp: 1858 July 8. Canning in sipai hmangin tih tawp.",
        "Tlahniam chhan: Unity awm lo, Hruaitu tha awm lo, Resources tlem.",
        "Rah chhuah: EIC tawp 1858. Govt of India Act 1858. Viceroy - Canning.",
        "Queen Proclamation: 1858 Nov 1. Doctrine of Lapse tawp. Religious tolerance."
      ],
      english: [
        "Causes: Political, Economic, Social, Military, Immediate - Enfield rifle cartridges.",
        "Beginning: May 10, 1857 Meerut. Bahadur Shah II declared Emperor.",
        "Leaders: Nana Saheb, Tantia Tope, Rani Lakshmibai, Kunwar Singh, Begum Hazrat Mahal.",
        "End: July 8, 1858. Suppressed by Canning with military force.",
        "Failure: Lack of unity, No effective leadership, Limited resources.",
        "Results: End of EIC 1858. Govt of India Act 1858. Viceroy - Lord Canning.",
        "Queen Proclamation: Nov 1, 1858. End of Doctrine of Lapse. Religious tolerance."
      ]
    }
  },
  {
    id: 'national-movement',
    title: { mizo: '18. National Movement 🔒 Pro', english: '18. National Movement 🔒 Pro' },
    notes: {
      mizo: [
        "INC: 1885 Bombay. A.O. Hume. W.C. Bonnerjee President hmasa.",
        "Moderates: 1885-1905. Gokhale, Naoroji, Mehta. Petition, Prayer.",
        "Extremists: 1905-1920. Tilak, Lala Lajpat Rai, Bipin Pal. Swaraj.",
        "Partition of Bengal: 1905 Lord Curzon. Swadeshi Movement.",
        "Muslim League: 1906 Dacca. Aga Khan, Nawab Salimullah.",
        "Gandhi Era: 1915 South Africa atang. Champaran 1917, Kheda 1918, Ahmedabad 1918.",
        "Non-Cooperation: 1920-1922. Chauri Chaura 1922 ah tawp.",
        "Civil Disobedience: 1930-1934. Dandi March 1930 Mar 12 - Apr 6.",
        "Quit India: 1942 Aug 8. Do or Die. Gandhi, Nehru, Patel lung in tang.",
        "INA: Subhas Chandra Bose 1943. Chalo Delhi. Capt Mohan Singh.",
        "Independence: 1947 Aug 15. Mountbatten Plan June 3, 1947. Partition."
      ],
      english: [
        "INC: 1885 Bombay. A.O. Hume founder. W.C. Bonnerjee first President.",
        "Moderates: 1885-1905. Gokhale, Naoroji, Mehta. Petition, Prayer method.",
        "Extremists: 1905-1920. Tilak, Lala Lajpat Rai, Bipin Pal. Demand Swaraj.",
        "Partition of Bengal: 1905 Lord Curzon. Led to Swadeshi Movement.",
        "Muslim League: 1906 Dacca. Aga Khan, Nawab Salimullah founders.",
        "Gandhi Era: Returned 1915 from South Africa. Champaran 1917, Kheda 1918, Ahmedabad 1918.",
        "Non-Cooperation: 1920-1922. Withdrawn after Chauri Chaura 1922.",
        "Civil Disobedience: 1930-1934. Dandi March Mar 12 - Apr 6, 1930.",
        "Quit India: Aug 8, 1942. Do or Die. Gandhi, Nehru, Patel imprisoned.",
        "INA: Subhas Chandra Bose 1943. Chalo Delhi. Capt Mohan Singh founder.",
        "Independence: Aug 15, 1947. Mountbatten Plan June 3, 1947. Partition."
      ]
    }
  }
]; // <-- Array tawp

export default function HistoryPage() {
  const [language, setLanguage] = useState<Language>('mizo')
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['prehistoric']))
  const [isPro, setIsPro] = useState(false)
  useEffect(() => {
    const pro = localStorage.getItem('mizoprep_pro')
    if (pro === 'true') setIsPro(true)
  }, [])

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters)
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId)
    } else {
      newExpanded.add(chapterId)
    }
    setExpandedChapters(newExpanded)
  }
const handleUpgrade = async () => {
  const res = await fetch('/api/razorpay', { method: 'POST' })
  const order = await res.json()

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: 'INR',
    name: 'MizoPrep',
    description: 'History Pro - ₹100',
    prefill: {
  name: "MizoPrep User",
  email: "test@mizoprep.com", 
  contact: "7000000000"
},
    order_id: order.id,
    handler: function (response: any) {
      setIsPro(true)
      localStorage.setItem('mizoprep_pro', 'true')
      alert('Payment hlawhtling! Pro unlock a ni e 🎉')
    },
    
    theme: { color: '#2563eb' }
  }

  // @ts-ignore
  const rzp = new window.Razorpay(options)
  rzp.open()
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Haw
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('mizo')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  language === 'mizo'
                 ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Mizo
              </button>
              <button
                onClick={() => setLanguage('english')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  language === 'english'
                 ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </button>
            </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {language === 'mizo'? 'Indian History' : 'Indian History'}
          </h1>
          <p className="text-gray-600 mt-1">
            {language === 'mizo'
           ? 'MPSC - Ancient to Modern - Chapter 18 kim'
              : 'MPSC - Ancient to Modern - All 18 Chapters'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {!isPro && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">🔓 Unlock Pro - ₹100 chauh</h3>
            <p className="mb-4 opacity-90">
              {language === 'mizo'
             ? 'Chapter 6-18 zawng zawng unlock rawh'
                : 'Unlock all Chapters 6-18'}
            </p>
            <ul className="text-sm space-y-1 mb-4 opacity-90">
              <li>✓ Ancient, Medieval, Modern History kimchang</li>
              <li>✓ Mizo tawng explanation vek</li>
              <li>✓ MPSC exam oriented</li>
              <li>✓ 1 year access</li>
            </ul>
            <button
              onClick={handleUpgrade}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-md"
            >
              Upgrade to Pro ₹100
            </button>
          </div>
        )}

        <div className="space-y-4">
          {HISTORY_CHAPTERS.map((chapter) => {
            const isLocked = chapter.title.english.includes('🔒') &&!isPro
            const isExpanded = expandedChapters.has(chapter.id)

            return (
              <div
                key={chapter.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() =>!isLocked && toggleChapter(chapter.id)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left transition ${
                    isLocked
                   ? 'cursor-not-allowed opacity-60'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {isLocked? '🔒' : isExpanded? '📖' : '📘'}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {chapter.title[language]}
                    </span>
                  </div>
                  {!isLocked && (
                    <span className="text-gray-400">
                      {isExpanded? '−' : '+'}
                    </span>
                  )}
                </button>

                {isExpanded &&!isLocked && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <ul className="space-y-3 mt-4">
                      {chapter.notes[language].map((note, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                          <span className="leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isLocked && (
                  <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-600 text-center py-4">
                      {language === 'mizo'
                     ? '🔒 Pro member chauh tan. ₹100 in unlock rawh.'
                        : '🔒 Pro members only. Unlock for ₹100.'}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-amber-50 border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-900 mb-2">
            {language === 'mizo'? '💡 Zir Dan Tur' : '💡 Study Tips'}
          </h3>
          <ul className="text-sm text-amber-800 space-y-2">
            <li>• {language === 'mizo'
           ? 'Chapter 1-5 hi Free. Ancient History bulpui a ni.'
              : 'Chapters 1-5 are free. Foundation of Ancient History.'}</li>
            <li>• {language === 'mizo'
           ? 'Pro ah Medieval & Modern History kimchang a awm.'
              : 'Pro unlocks Medieval & Modern History in detail.'}</li>
            <li>• {language === 'mizo'
           ? 'Timeline milin zir la. Cause-Effect hre reng rawh.'
              : 'Study by timeline. Remember Cause-Effect relations.'}</li>
            <li>• {language === 'mizo'
           ? 'MPSC ah History 15-20 marks a rawn chhuak thin.'
              : 'History covers 15-20 marks in MPSC Prelims.'}</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
       
  )
}