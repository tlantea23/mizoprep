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
  source: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Choose the correct form: He ___ to Delhi yesterday.',
    options: ['go', 'goes', 'went', 'gone'],
    correct: 2,
    explanation: '**Simple Past Tense** hman tur. "Yesterday" keyword awm vangin hun kal tawh a ni. V2 form "went" a dik. "go" = V1, "goes" = V1+s, "gone" = V3.',
    source: 'MPSC 2023'
  },
  {
    id: 2,
    question: 'Identify the part of speech of the underlined word: She runs **quickly**.',
    options: ['Adjective', 'Adverb', 'Verb', 'Noun'],
    correct: 1,
    explanation: '**Quickly** hi verb "runs" sawifiah tu a ni. Thil tih engtin nge tih a sawifiah. Adverb of Manner. Adjective chuan noun sawifiah.',
    source: 'MPSC 2022'
  },
  {
    id: 3,
    question: 'Change to Passive Voice: They built this house in 2020.',
    options: [
      'This house is built by them in 2020.',
      'This house was built by them in 2020.',
      'This house has been built by them in 2020.',
      'This house was being built by them in 2020.'
    ],
    correct: 1,
    explanation: 'Active: Simple Past "built". Passive rule: was/were + V3. "This house" singular → "was built". "in 2020" a awm vangin was built a dik.',
    source: 'UPSC 2024'
  },
  {
    id: 4,
    question: 'Choose the synonym of "ABUNDANT":',
    options: ['Scarce', 'Plentiful', 'Rare', 'Limited'],
    correct: 1,
    explanation: '**Abundant** = tam, tam tham. **Plentiful** = tam, a awm hnem. Scarce/Rare/Limited = tlem, a vang. Synonym = Plentiful.',
    source: 'MPSC 2024'
  },
  {
    id: 5,
    question: 'Choose the antonym of "BRAVE":',
    options: ['Courageous', 'Valiant', 'Cowardly', 'Bold'],
    correct: 2,
    explanation: '**Brave** = huaisen. **Cowardly** = dawihzep, huaisen lo. Antonym dik. Courageous/Valiant/Bold = huaisen vek, synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 6,
    question: 'Change to Indirect Speech: He said, "I am reading a book."',
    options: [
      'He said that I am reading a book.',
      'He said that he is reading a book.',
      'He said that he was reading a book.',
      'He said that he has been reading a book.'
    ],
    correct: 2,
    explanation: 'Direct → Indirect: am/is → was, I → he, Present Continuous → Past Continuous. "I am reading" → "he was reading".',
    source: 'UPSC 2023'
  },
  {
    id: 7,
    question: 'Fill in the blank: The sun ___ in the east.',
    options: ['rise', 'rises', 'rose', 'rising'],
    correct: 1,
    explanation: '**Universal Truth** = Simple Present Tense. "The sun" singular → V1 + s = "rises". Rise = V1 plural, Rose = V2, Rising = V-ing.',
    source: 'MPSC 2022'
  },
  {
    id: 8,
    question: 'One Word Substitution: A person who writes about his own life',
    options: ['Biography', 'Autobiography', 'Bibliography', 'Chronology'],
    correct: 1,
    explanation: '**Autobiography** = Mahni chanchin mahni ziah. Biography = mi dang chanchin ziah. Bibliography = lehkhabu list. Chronology = hun indawt.',
    source: 'MPSC 2024'
  },
  {
    id: 9,
    question: 'Choose the correct preposition: She is good ___ mathematics.',
    options: ['in', 'at', 'on', 'with'],
    correct: 1,
    explanation: '**Good at** = thiam, expert. Good in = chhungah tha (room). Good on = chungah tha (table). Good with = thiam (people/tools). Subject ah "at" hman tur.',
    source: 'UPSC 2022'
  },
  {
    id: 10,
    question: 'Identify the error: Each of the students **have** submitted their homework.',
    options: ['Each of', 'the students', 'have', 'No error'],
    correct: 2,
    explanation: '**Each** hi singular a ni. Each of the students = singular. Verb pawh singular "has" ni tur. "have" = plural, a dik lo. Correct: Each of the students **has** submitted.',
    source: 'MPSC 2023'
  },
  {
    id: 11,
    question: 'Idiom meaning: "Once in a blue moon" means:',
    options: ['Very often', 'Very rarely', 'Every month', 'At night'],
    correct: 1,
    explanation: '**Once in a blue moon** = vang tak, khat tawkin, kumkhua in vawikhat. Blue moon tak tak a awm khat vangin.',
    source: 'UPSC 2023'
  },
  {
    id: 12,
    question: 'Choose correct article: He is ___ honest man.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: '**Honest** hi "h" silent a ni. Sound "o" atanga tan. Vowel sound hma ah "an" hman tur. An honest man.',
    source: 'MPSC 2024'
  },
  {
    id: 13,
    question: 'Active to Passive: Who wrote this letter?',
    options: [
      'By whom this letter was written?',
      'By whom was this letter written?',
      'Who was this letter written by?',
      'By who was this letter written?'
    ],
    correct: 1,
    explanation: '**Who** → **By whom** passive ah. Tense: Simple Past "wrote" → "was written". Question form: By whom + was + O + V3? Correct: By whom was this letter written?',
    source: 'MPSC 2022'
  },
  {
    id: 14,
    question: 'Choose correct modal: You ___ wear helmet while driving.',
    options: ['can', 'may', 'must', 'might'],
    correct: 2,
    explanation: '**Must** = tih ngei ngei tur, compulsory. Helmet vuah hi dan a ni. Can = theihna, May = phalna, Might = a theih mai thei.',
    source: 'UPSC 2024'
  },
  {
    id: 15,
    question: 'Synonym of "DILIGENT":',
    options: ['Lazy', 'Careless', 'Hardworking', 'Slow'],
    correct: 2,
    explanation: '**Diligent** = taima, hna thawk tha. **Hardworking** = taima, hna thawk nasa. Lazy = thatchhia, Careless = fimkhur lo.',
    source: 'MPSC 2023'
  },
  {
    id: 16,
    question: 'Correct sentence:',
    options: [
      'One of the boys are absent.',
      'One of the boys is absent.',
      'One of the boy is absent.',
      'One of the boys were absent.'
    ],
    correct: 1,
    explanation: '**One of the** + plural noun + singular verb. "One" hi subject a ni. One... is absent. Boys = plural noun dik, is = singular verb dik.',
    source: 'UPSC 2023'
  },
  {
    id: 17,
    question: 'Antonym of "EXPAND":',
    options: ['Grow', 'Increase', 'Contract', 'Extend'],
    correct: 2,
    explanation: '**Expand** = zauh, ti lian. **Contract** = ti zim, ti tlem. Antonym dik. Grow/Increase/Extend = ti lian vek, synonym.',
    source: 'MPSC 2024'
  },
  {
    id: 18,
    question: 'Fill in: If I ___ rich, I would help the poor.',
    options: ['am', 'was', 'were', 'be'],
    correct: 2,
    explanation: '**Conditional Sentence Type 2** - Imaginary situation. If + Subject + were,... would + V1. I/he/she ah pawh "were" hman tur.',
    source: 'UPSC 2022'
  },
  {
    id: 19,
    question: 'Meaning of idiom: "Spill the beans"',
    options: ['To waste food', 'To reveal a secret', 'To cook beans', 'To clean'],
    correct: 1,
    explanation: '**Spill the beans** = thuruk puang, secret sawi chhuak. Entir: He spilled the beans about the surprise party.',
    source: 'MPSC 2023'
  },
  {
    id: 20,
    question: 'Choose correct conjunction: ___ he is poor, he is honest.',
    options: ['Because', 'Although', 'If', 'Since'],
    correct: 1,
    explanation: '**Although/Though** = mahse, inkalh. Poor mahse honest. Because = a chhan. If = a nih chuan. Since = a chhan/hun.',
    source: 'MPSC 2024'
  },
  {
    id: 21,
    question: 'Choose the correct spelling:',
    options: ['Accomodate', 'Accommodate', 'Acommodate', 'Accomodete'],
    correct: 1,
    explanation: '**Accommodate** = double c, double m. Spelling dik. MPSC ah spelling 2-3 mark a chhuak ziah.',
    source: 'MPSC 2023'
  },
  {
    id: 22,
    question: 'Fill in: He has been absent ___ Monday.',
    options: ['since', 'for', 'from', 'till'],
    correct: 0,
    explanation: '**Since** = point of time specific. "Monday" = hun bik. For = duration (for 3 days). Present Perfect Continuous nen "since" hman tur.',
    source: 'UPSC 2023'
  },
  {
    id: 23,
    question: 'Identify the tense: She will have been reading for 2 hours by 8 PM.',
    options: ['Future Perfect', 'Future Continuous', 'Future Perfect Continuous', 'Present Perfect Continuous'],
    correct: 2,
    explanation: '**Future Perfect Continuous** = will have been + V-ing + for/since. Hun bik thlenga la thleng zel tur sawina.',
    source: 'MPSC 2024'
  },
  {
    id: 24,
    question: 'Synonym of "CANDID":',
    options: ['Secretive', 'Frank', 'Cunning', 'Reserved'],
    correct: 1,
    explanation: '**Candid** = tlang tak, zep nei lo, honest. **Frank** = tlang tak, pawm awlsam. Secretive/Cunning/Reserved = zep nei, a letling.',
    source: 'MPSC 2022'
  },
  {
    id: 25,
    question: 'Antonym of "HOSTILE":',
    options: ['Friendly', 'Aggressive', 'Angry', 'Violent'],
    correct: 0,
    explanation: '**Hostile** = hmelma, inngeih lo. **Friendly** = inngeih, thian tha. Antonym dik. Aggressive/Angry/Violent = hostile synonym.',
    source: 'UPSC 2024'
  },
  {
    id: 26,
    question: 'Change to Indirect: She said to me, "Please help me."',
    options: [
      'She said to me to help her.',
      'She requested me to help her.',
      'She told me to help her.',
      'She asked me to help her.'
    ],
    correct: 1,
    explanation: '**Please** awm chuan **request** hman tur. "Said to" → requested. "me" → her. Correct: She requested me to help her.',
    source: 'MPSC 2023'
  },
  {
    id: 27,
    question: 'One Word: Government by a king or queen',
    options: ['Democracy', 'Monarchy', 'Autocracy', 'Oligarchy'],
    correct: 1,
    explanation: '**Monarchy** = Lal/Maharani rorelna. Democracy = mipui rorelna. Autocracy = mi pakhat thuneihna. Oligarchy = mi tlemte rorelna.',
    source: 'MPSC 2024'
  },
  {
    id: 28,
    question: 'Choose correct verb: Neither of the boys ___ present.',
    options: ['are', 'is', 'were', 'have been'],
    correct: 1,
    explanation: '**Neither of** + plural noun = singular verb. "Neither" hi singular. Correct: Neither of the boys **is** present.',
    source: 'UPSC 2022'
  },
  {
    id: 29,
    question: 'Idiom: "Beat around the bush" means:',
    options: ['To hit a bush', 'To avoid the main topic', 'To clean garden', 'To be brave'],
    correct: 1,
    explanation: '**Beat around the bush** = thudik sawi duh lo, kual vak, pehhel. Entir: Stop beating around the bush and tell the truth.',
    source: 'MPSC 2023'
  },
  {
    id: 30,
    question: 'Passive: They are repairing the road.',
    options: [
      'The road is repaired by them.',
      'The road is being repaired by them.',
      'The road has been repaired by them.',
      'The road was being repaired by them.'
    ],
    correct: 1,
    explanation: 'Active: Present Continuous "are repairing". Passive: is/am/are + being + V3. Correct: The road **is being repaired** by them.',
    source: 'UPSC 2023'
  },
  {
    id: 31,
    question: 'Synonym of "FRUGAL":',
    options: ['Wasteful', 'Extravagant', 'Thrifty', 'Generous'],
    correct: 2,
    explanation: '**Frugal** = ren, sum hmang fimkhur. **Thrifty** = ren, sum renchem. Wasteful/Extravagant = hmang nasa, a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 32,
    question: 'Choose correct determiner: ___ books are mine.',
    options: ['This', 'That', 'These', 'Much'],
    correct: 2,
    explanation: '**Books** = plural. **These** = plural demonstrative. This/That = singular. Much = uncountable tan.',
    source: 'MPSC 2022'
  },
  {
    id: 33,
    question: 'Antonym of "ANCIENT":',
    options: ['Old', 'Historic', 'Modern', 'Aged'],
    correct: 2,
    explanation: '**Ancient** = hmanlai, hlui. **Modern** = tunlai, thar. Antonym dik. Old/Historic/Aged = hlui vek, synonym.',
    source: 'UPSC 2024'
  },
  {
    id: 34,
    question: 'Fill in: She is junior ___ me.',
    options: ['than', 'to', 'from', 'of'],
    correct: 1,
    explanation: '**Junior, Senior, Superior, Inferior, Prior** hnuah **to** hman tur, "than" ni lo. Exception. Correct: junior **to** me.',
    source: 'MPSC 2023'
  },
  {
    id: 35,
    question: 'Direct: He said, "Hurrah! We won." Indirect:',
    options: [
      'He exclaimed with joy that they won.',
      'He exclaimed with joy that they had won.',
      'He said that they won.',
      'He told that they won.'
    ],
    correct: 1,
    explanation: '**Hurrah!** = exclamation of joy. "Exclaimed with joy" hmang tur. Tense: Simple Past "won" → Past Perfect "had won".',
    source: 'UPSC 2023'
  },
  {
    id: 36,
    question: 'One Word: One who loves books',
    options: ['Bibliophile', 'Biographer', 'Philosopher', 'Philologist'],
    correct: 0,
    explanation: '**Bibliophile** = lehkhabu ngaina, lehkhabu khawltu. Biographer = chanchin ziaktu. Philosopher = fing var. Philologist = tawng zir mi.',
    source: 'MPSC 2024'
  },
  {
    id: 37,
    question: 'Error: He is **more taller** than his brother.',
    options: ['He is', 'more taller', 'than his brother', 'No error'],
    correct: 1,
    explanation: '**Taller** hi comparative tawh. "More" telh leh chuan double comparative, a dik lo. Correct: He is **taller** than his brother.',
    source: 'MPSC 2022'
  },
  {
    id: 38,
    question: 'Idiom: "A blessing in disguise" means:',
    options: ['A curse', 'Good thing that seemed bad at first', 'A gift', 'Bad luck'],
    correct: 1,
    explanation: '**A blessing in disguise** = thil tha lo anga lang, mahse a tawpah tha. Entir: Losing that job was a blessing in disguise - better job ka hmu.',
    source: 'UPSC 2022'
  },
  {
    id: 39,
    question: 'Choose correct form: I wish I ___ a bird.',
    options: ['am', 'was', 'were', 'be'],
    correct: 2,
    explanation: '**Wish** + imaginary situation ah **were** hman tur, I/he/she ah pawh. "I were" = subjunctive mood. Correct: I wish I **were** a bird.',
    source: 'MPSC 2023'
  },
  {
    id: 40,
    question: 'Synonym of "JUBILANT":',
    options: ['Sad', 'Depressed', 'Joyful', 'Angry'],
    correct: 2,
    explanation: '**Jubilant** = lawm em em, hlim veng veng. **Joyful** = hlim, lawm. Sad/Depressed = lungngai. Angry = thinrim.',
    source: 'MPSC 2024'
  },
  {
    id: 41,
    question: 'Passive: Someone stole my bike.',
    options: [
      'My bike is stolen.',
      'My bike was stolen.',
      'My bike has been stolen.',
      'My bike was being stolen.'
    ],
    correct: 1,
    explanation: 'Active: Simple Past "stole". Passive: was/were + V3. "Someone" agent hriat loh = "by someone" paih theih. Correct: My bike **was stolen**.',
    source: 'UPSC 2024'
  },
  {
    id: 42,
    question: 'Antonym of "DENSE":',
    options: ['Thick', 'Crowded', 'Sparse', 'Heavy'],
    correct: 2,
    explanation: '**Dense** = chhah, inhnaih, a tam. **Sparse** = pan, inhlat, a tlem. Antonym dik. Thick/Crowded/Heavy = dense synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 43,
    question: 'Fill in: She prefers coffee ___ tea.',
    options: ['than', 'to', 'over', 'from'],
    correct: 1,
    explanation: '**Prefer** hnuah **to** hman tur, "than" ni lo. Rule: Prefer A to B. Correct: She prefers coffee **to** tea.',
    source: 'UPSC 2022'
  },
  {
    id: 44,
    question: 'One Word: A person who cannot read or write',
    options: ['Literate', 'Illiterate', 'Eligible', 'Illegible'],
    correct: 1,
    explanation: '**Illiterate** = ziak chhiar thiam lo. Literate = ziak chhiar thiam. Eligible = tling. Illegible = chhiar theih loh (ziak).',
    source: 'MPSC 2024'
  },
  {
    id: 45,
    question: 'Choose correct verb: The news ___ good.',
    options: ['are', 'is', 'were', 'have been'],
    correct: 1,
    explanation: '**News** hi singular uncountable noun. Plural ang lang mahse singular verb "is" hman tur. Correct: The news **is** good.',
    source: 'MPSC 2023'
  },
  {
    id: 46,
    question: 'Idiom: "Hit the nail on the head" means:',
    options: ['To hit someone', 'To be exactly right', 'To work hard', 'To miss target'],
    correct: 1,
    explanation: '**Hit the nail on the head** = thudik tak sawi, a point ah tak sawi. Entir: Your analysis hit the nail on the head.',
    source: 'UPSC 2023'
  },
  {
    id: 47,
    question: 'Direct: "Don\'t touch it," he said. Indirect:',
    options: [
      'He said to not touch it.',
      'He told me not to touch it.',
      'He said me not to touch it.',
      'He ordered not to touch it.'
    ],
    correct: 1,
    explanation: 'Imperative negative: told/ordered + object + not to + V1. "Said to" → told. Correct: He **told me not to touch** it.',
    source: 'MPSC 2022'
  },
  {
    id: 48,
    question: 'Synonym of "IDENTICAL":',
    options: ['Different', 'Similar', 'Same', 'Unique'],
    correct: 2,
    explanation: '**Identical** = inang chiah, danglam lo. **Same** = inang chiah. Similar = inang deuh. Different/Unique = danglam.',
    source: 'MPSC 2024'
  },
  {
    id: 49,
    question: 'Choose correct preposition: He died ___ malaria.',
    options: ['of', 'from', 'by', 'with'],
    correct: 0,
    explanation: '**Die of** = natna vangin thih. Die from = accident/injury vangin. Die by = suicide/violence. Malaria = disease → die **of** malaria.',
    source: 'UPSC 2024'
  },
  {
    id: 50,
    question: 'Antonym of "ARRIVAL":',
    options: ['Coming', 'Entry', 'Departure', 'Approach'],
    correct: 2,
    explanation: '**Arrival** = thlen, lo thlen. **Departure** = chhuah, kal chhuah. Antonym dik. Coming/Entry/Approach = thlen lam, synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 51,
    question: 'Error: **The scissors** is blunt.',
    options: ['The', 'scissors', 'is', 'No error'],
    correct: 3,
    explanation: '**Scissors** hi plural form mahse singular/plural ve ve a ni thei. "A pair of scissors" = singular. "The scissors is blunt" a dik. Error awm lo.',
    source: 'UPSC 2023'
  },
  {
    id: 52,
    question: 'One Word: Killing of one\'s own brother',
    options: ['Suicide', 'Homicide', 'Fratricide', 'Genocide'],
    correct: 2,
    explanation: '**Fratricide** = unaupa that. Suicide = mahni inthat. Homicide = mihring that. Genocide = hnam that.',
    source: 'MPSC 2024'
  },
  {
    id: 53,
    question: 'Fill in: Hardly ___ he reached home when it started raining.',
    options: ['did', 'had', 'has', 'was'],
    correct: 1,
    explanation: '**Hardly...when** structure: Hardly + had + Subject + V3 + when. Inversion. Correct: Hardly **had** he reached home when...',
    source: 'UPSC 2022'
  },
  {
    id: 54,
    question: 'Idiom: "Piece of cake" means:',
    options: ['A sweet dish', 'Very easy', 'A party', 'Difficult task'],
    correct: 1,
    explanation: '**Piece of cake** = thil awlsam tak, harsa lo. Entir: The exam was a piece of cake.',
    source: 'MPSC 2023'
  },
  {
    id: 55,
    question: 'Synonym of "VAST":',
    options: ['Small', 'Tiny', 'Immense', 'Limited'],
    correct: 2,
    explanation: '**Vast** = zau, lian, zau tham. **Immense** = zau, lian, nasa. Small/Tiny/Limited = te, a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 56,
    question: 'Passive: Open the door.',
    options: [
      'The door is opened.',
      'Let the door be opened.',
      'The door was opened.',
      'Let the door opened.'
    ],
    correct: 1,
    explanation: 'Imperative sentence passive: **Let + object + be + V3**. Correct: **Let the door be opened**.',
    source: 'UPSC 2023'
  },
  {
    id: 57,
    question: 'Antonym of "CRUEL":',
    options: ['Kind', 'Harsh', 'Severe', 'Brutal'],
    correct: 0,
    explanation: '**Cruel** = nunrawng, khawngaihna nei lo. **Kind** = ngilnei, khawngaihna nei. Antonym dik. Harsh/Severe/Brutal = cruel synonym.',
    source: 'MPSC 2022'
  },
  {
    id: 58,
    question: 'Choose correct form: I ___ him yesterday.',
    options: ['see', 'saw', 'seen', 'seeing'],
    correct: 1,
    explanation: '**Yesterday** = Simple Past keyword. V2 form "saw" hman tur. See = V1, Seen = V3, Seeing = V-ing.',
    source: 'MPSC 2024'
  },
  {
    id: 59,
    question: 'One Word: A person who believes in fate',
    options: ['Optimist', 'Pessimist', 'Fatalist', 'Realist'],
    correct: 2,
    explanation: '**Fatalist** = engkim ruat lawk vek emaw ti, fate ring tu. Optimist = thil tha beisei. Pessimist = thil tha lo beisei.',
    source: 'UPSC 2024'
  },
  {
    id: 60,
    question: 'Fill in: He is afraid ___ dogs.',
    options: ['from', 'of', 'by', 'with'],
    correct: 1,
    explanation: '**Afraid of** = hlau. Fixed preposition. Correct: He is afraid **of** dogs.',
    source: 'MPSC 2023'
  },
  {
    id: 61,
    question: 'Idiom: "When pigs fly" means:',
    options: ['Very soon', 'Never', 'At night', 'During rain'],
    correct: 1,
    explanation: '**When pigs fly** = thleng ngai lo tur, impossible. Vawk a thlawk ngai lo vangin.',
    source: 'UPSC 2022'
  },
  {
    id: 62,
    question: 'Synonym of "GENUINE":',
    options: ['Fake', 'False', 'Authentic', 'Duplicate'],
    correct: 2,
    explanation: '**Genuine** = tak tak, lem lo. **Authentic** = tak tak, original. Fake/False/Duplicate = lem, a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 63,
    question: 'Direct: She said, "What a beautiful flower!" Indirect:',
    options: [
      'She said that it was a beautiful flower.',
      'She exclaimed that it was a beautiful flower.',
      'She exclaimed that it was a very beautiful flower.',
      'She told that it was a beautiful flower.'
    ],
    correct: 2,
    explanation: 'Exclamatory sentence: **exclaimed** hmang tur. "What a beautiful" → "a very beautiful". Tense: is → was. Correct: She exclaimed that it was a **very** beautiful flower.',
    source: 'MPSC 2023'
  },
  {
    id: 64,
    question: 'Antonym of "FAILURE":',
    options: ['Defeat', 'Loss', 'Success', 'Fall'],
    correct: 2,
    explanation: '**Failure** = hlawhchham. **Success** = hlawhtling. Antonym dik. Defeat/Loss/Fall = failure synonym.',
    source: 'UPSC 2023'
  },
  {
    id: 65,
    question: 'Choose correct verb: Ten kilometers ___ a long distance.',
    options: ['are', 'is', 'were', 'have been'],
    correct: 1,
    explanation: '**Ten kilometers** hi distance unit khat anga ngaih. Singular verb "is" hman tur. Amount/Distance/Time = singular.',
    source: 'MPSC 2024'
  },
  {
    id: 66,
    question: 'One Word: A speech delivered without preparation',
    options: ['Lecture', 'Debate', 'Extempore', 'Dialogue'],
    correct: 2,
    explanation: '**Extempore** = inpuahchah lawk loh thu sawi. Lecture = zirtirna. Debate = inhnialna. Dialogue = inbiakna.',
    source: 'UPSC 2024'
  },
  {
    id: 67,
    question: 'Fill in: He is blind ___ one eye.',
    options: ['in', 'of', 'with', 'by'],
    correct: 0,
    explanation: '**Blind in** = mit pakhat del. Fixed preposition. Blind of = a hmu thei lo (emotional). Correct: blind **in** one eye.',
    source: 'MPSC 2022'
  },
  {
    id: 68,
    question: 'Idiom: "Under the weather" means:',
    options: ['In rain', 'Ill', 'Happy', 'Outdoors'],
    correct: 1,
    explanation: '**Under the weather** = dam lo, nawm lo. Entir: I\'m feeling under the weather today.',
    source: 'MPSC 2023'
  },
  {
    id: 69,
    question: 'Synonym of "EAGER":',
    options: ['Reluctant', 'Keen', 'Lazy', 'Indifferent'],
    correct: 1,
    explanation: '**Eager** = chak, phur, nghakhlel. **Keen** = chak, phur, tum ruh. Reluctant = duh lo. Lazy = thatchhia. Indifferent = ngaihsak lo.',
    source: 'UPSC 2023'
  },
  {
    id: 70,
    question: 'Passive: People speak English all over the world.',
    options: [
      'English is spoke all over the world.',
      'English is spoken all over the world.',
      'English was spoken all over the world.',
      'English has been spoken all over the world.'
    ],
    correct: 1,
    explanation: 'Active: Simple Present "speak". Passive: is/am/are + V3. "People" general agent = "by people" paih theih. Correct: English **is spoken** all over the world.',
    source: 'MPSC 2024'
  },
  {
    id: 71,
    question: 'Antonym of "ARTIFICIAL":',
    options: ['Fake', 'Synthetic', 'Natural', 'Man-made'],
    correct: 2,
    explanation: '**Artificial** = siam chawp, lem. **Natural** = pianken, siam chawp lo. Antonym dik. Fake/Synthetic/Man-made = artificial synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 72,
    question: 'Error: **The police** has arrested the thief.',
    options: ['The', 'police', 'has', 'No error'],
    correct: 2,
    explanation: '**Police** hi plural noun. Always plural verb hman tur. "has" = singular. Correct: The police **have** arrested the thief.',
    source: 'UPSC 2024'
  },
  {
    id: 73,
    question: 'One Word: A person who studies the stars',
    options: ['Astrologer', 'Astronomer', 'Astronaut', 'Physicist'],
    correct: 1,
    explanation: '**Astronomer** = arsi zir mi, scientist. Astrologer = arsi hmanga hun lo thlir lawk tu. Astronaut = vana kal mi. Physicist = physics zir mi.',
    source: 'MPSC 2022'
  },
  {
    id: 74,
    question: 'Fill in: He insisted ___ my going there.',
    options: ['to', 'on', 'for', 'at'],
    correct: 1,
    explanation: '**Insist on** = phut tlat, nawr. Fixed preposition. Correct: He insisted **on** my going there.',
    source: 'UPSC 2023'
  },
  {
    id: 75,
    question: 'Idiom: "Cry over spilt milk" means:',
    options: ['To waste milk', 'To regret past events', 'To clean', 'To cook'],
    correct: 1,
    explanation: '**Cry over spilt milk** = thil thleng tawh, siam that theih loh sun vak, inchhir. Milk bua tawh chu chhar khawm theih loh.',
    source: 'MPSC 2024'
  },
  {
    id: 76,
    question: 'Synonym of "HUMBLE":',
    options: ['Proud', 'Arrogant', 'Modest', 'Boastful'],
    correct: 2,
    explanation: '**Humble** = inngaitlawm, chapona nei lo. **Modest** = inngaitlawm, uang lo. Proud/Arrogant/Boastful = chapo, a letling.',
    source: 'MPSC 2023'
  },
  {
    id: 77,
    question: 'Direct: The teacher said, "The earth moves round the sun." Indirect:',
    options: [
      'The teacher said that the earth moved round the sun.',
      'The teacher said that the earth moves round the sun.',
      'The teacher told that the earth moves round the sun.',
      'The teacher said that the earth had moved round the sun.'
    ],
    correct: 1,
    explanation: '**Universal Truth** ah tense thlak loh tur. "The earth moves round the sun" = universal truth. Indirect ah pawh "moves" ngai reng.',
    source: 'UPSC 2022'
  },
  {
    id: 78,
    question: 'Antonym of "GUILTY":',
    options: ['Criminal', 'Innocent', 'Accused', 'Blamed'],
    correct: 1,
    explanation: '**Guilty** = thiam loh, sual. **Innocent** = thiam, sual lo. Antonym dik. Criminal/Accused/Blamed = guilty synonym.',
    source: 'MPSC 2024'
  },
  {
    id: 79,
    question: 'Choose correct form: By the time we arrived, the train ___ .',
    options: ['left', 'had left', 'has left', 'leaves'],
    correct: 1,
    explanation: '**By the time** + Simple Past = Past Perfect. Thil pakhat a thlen hmain a dang a lo zo tawh. Correct: the train **had left**.',
    source: 'UPSC 2023'
  },
  {
    id: 80,
    question: 'One Word: Government by the rich',
    options: ['Democracy', 'Plutocracy', 'Theocracy', 'Bureaucracy'],
    correct: 1,
    explanation: '**Plutocracy** = mi hausa rorelna. Democracy = mipui rorelna. Theocracy = sakhua rorelna. Bureaucracy = official rorelna.',
    source: 'MPSC 2023'
  },
  {
    id: 81,
    question: 'Fill in: He is addicted ___ gambling.',
    options: ['to', 'in', 'with', 'on'],
    correct: 0,
    explanation: '**Addicted to** = ngawlvei, ching. Fixed preposition. Correct: He is addicted **to** gambling.',
    source: 'UPSC 2024'
  },
  {
    id: 82,
    question: 'Idiom: "The ball is in your court" means:',
    options: ['Play football', 'Your turn to act', 'You are winning', 'Game over'],
    correct: 1,
    explanation: '**The ball is in your court** = i kutah a awm, i tih hun, nangma thu. Tennis atanga lak.',
    source: 'MPSC 2022'
  },
  {
    id: 83,
    question: 'Synonym of "IMMENSE":',
    options: ['Small', 'Vast', 'Limited', 'Tiny'],
    correct: 1,
    explanation: '**Immense** = nasa, zau, lian tham. **Vast** = zau, lian. Small/Tiny/Limited = te, a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 84,
    question: 'Error: He **is working** here **since** 2020.',
    options: ['He', 'is working', 'here', 'since'],
    correct: 1,
    explanation: '**Since 2020** = point of time. Present Perfect Continuous hman tur: **has been working**. "Is working" = Present Continuous, since nen a inmil lo.',
    source: 'UPSC 2023'
  },
  {
    id: 85,
    question: 'Antonym of "ASCEND":',
    options: ['Climb', 'Rise', 'Descend', 'Mount'],
    correct: 2,
    explanation: '**Ascend** = chho, lawn chho. **Descend** = chhuk, lawn thla. Antonym dik. Climb/Rise/Mount = ascend synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 86,
    question: 'Choose correct conjunction: Walk quickly ___ you will miss the train.',
    options: ['and', 'or', 'but', 'so'],
    correct: 1,
    explanation: '**Or** = a nih loh chuan, otherwise. Negative result sawina. Walk quickly **or** you will miss the train = Chak deuhin kal rawh, a nih loh chuan train i nang lo ang.',
    source: 'UPSC 2024'
  },
  {
    id: 87,
    question: 'One Word: A place where birds are kept',
    options: ['Zoo', 'Aquarium', 'Aviary', 'Apiary'],
    correct: 2,
    explanation: '**Aviary** = sava dahna. Zoo = ramsa dahna. Aquarium = sangha dahna. Apiary = khuai dahna.',
    source: 'MPSC 2024'
  },
  {
    id: 88,
    question: 'Fill in: She is senior ___ me by 2 years.',
    options: ['than', 'to', 'from', 'of'],
    correct: 1,
    explanation: '**Senior to** - Junior to ang tho. Senior, Junior, Superior, Inferior, Prior hnuah **to** hman tur. Correct: senior **to** me.',
    source: 'UPSC 2022'
  },
  {
    id: 89,
    question: 'Idiom: "Hit the sack" means:',
    options: ['To hit someone', 'To go to bed', 'To work hard', 'To fight'],
    correct: 1,
    explanation: '**Hit the sack** = mut, mutna pan. Sack = mattress hlui. Entir: I\'m tired, I\'m going to hit the sack.',
    source: 'MPSC 2023'
  },
  {
    id: 90,
    question: 'Synonym of "JEALOUS":',
    options: ['Content', 'Envious', 'Happy', 'Satisfied'],
    correct: 1,
    explanation: '**Jealous** = thik, mi dang neih it. **Envious** = thik, it. Content/Happy/Satisfied = lungawi, a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 91,
    question: 'Passive: Who broke the window?',
    options: [
      'By whom the window was broken?',
      'By whom was the window broken?',
      'Who was the window broken by?',
      'By who was the window broken?'
    ],
    correct: 1,
    explanation: '**Who** → **By whom** passive ah. Tense: Simple Past "broke" → "was broken". Question: By whom + was + O + V3? Correct: By whom was the window broken?',
    source: 'UPSC 2023'
  },
  {
    id: 92,
    question: 'Antonym of "BITTER":',
    options: ['Sour', 'Sweet', 'Salty', 'Spicy'],
    correct: 1,
    explanation: '**Bitter** = kha. **Sweet** = thlum. Antonym dik. Sour = thur, Salty = al, Spicy = thak.',
    source: 'MPSC 2022'
  },
  {
    id: 93,
    question: 'Error: **No sooner** he had arrived **than** it started raining.',
    options: ['No sooner', 'he had arrived', 'than', 'No error'],
    correct: 1,
    explanation: '**No sooner** hnuah **inversion** awm tur. Had + Subject + V3. Correct: **No sooner had he arrived** than it started raining. Or: No sooner **did he arrive** than...',
    source: 'UPSC 2024'
  },
  {
    id: 94,
    question: 'One Word: One who knows many languages',
    options: ['Linguist', 'Polyglot', 'Bilingual', 'Multilingual'],
    correct: 1,
    explanation: '**Polyglot** = tawng tam tak thiam. Linguist = tawng zir mi. Bilingual = tawng 2 thiam. Multilingual = tawng tam thiam (adjective), Polyglot = noun.',
    source: 'MPSC 2023'
  },
  {
    id: 95,
    question: 'Fill in: He was charged ___ murder.',
    options: ['for', 'with', 'of', 'by'],
    correct: 1,
    explanation: '**Charged with** = puh, thubuai siam sak. Fixed preposition. Correct: He was charged **with** murder.',
    source: 'UPSC 2022'
  },
  {
    id: 96,
    question: 'Idiom: "Let the cat out of the bag" means:',
    options: ['To free a cat', 'To reveal a secret', 'To buy a bag', 'To catch a cat'],
    correct: 1,
    explanation: '**Let the cat out of the bag** = thuruk puang, secret sawi chhuak palh. Entir: He let the cat out of the bag about the surprise.',
    source: 'MPSC 2024'
  },
  {
    id: 97,
    question: 'Synonym of "CANDID":',
    options: ['Secretive', 'Honest', 'Cunning', 'Deceitful'],
    correct: 1,
    explanation: '**Candid** = tlang tak, zep nei lo. **Honest** = rinawm, tlang tak. Secretive/Cunning/Deceitful = zep nei, a letling.',
    source: 'MPSC 2023'
  },
  {
    id: 98,
    question: 'Choose correct verb: The committee ___ divided on this issue.',
    options: ['is', 'are', 'was', 'has been'],
    correct: 1,
    explanation: '**Committee** = collective noun. Inrem lo, inthen phawk = plural verb "are". Inrem = singular "is". "Divided" awm vangin **are** dik.',
    source: 'UPSC 2024'
  },
  {
    id: 99,
    question: 'Antonym of "BLESS":',
    options: ['Praise', 'Curse', 'Thank', 'Honor'],
    correct: 1,
    explanation: '**Bless** = malsawm. **Curse** = anchhia, hremna. Antonym dik. Praise/Thank/Honor = bless synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 100,
    question: 'Fill in: He was born ___ a rich family.',
    options: ['in', 'to', 'into', 'of'],
    correct: 1,
    explanation: '**Born to** = piang, nu leh pa. "Born to a rich family" = chhungkaw hausa ah piang. Born in = hmun. Born of = nu/pa hming.',
    source: 'UPSC 2024'
  },
  {
    id: 101,
    question: 'Idiom: "Burn the midnight oil" means:',
    options: ['To waste oil', 'To work late night', 'To cook', 'To sleep early'],
    correct: 1,
    explanation: '**Burn the midnight oil** = zan rei tak thawk, lehkha zir. Hmanlaiin oil lamp hmangin zan rei an zir thin.',
    source: 'MPSC 2024'
  },
  {
    id: 102,
    question: 'Synonym of "ENORMOUS":',
    options: ['Tiny', 'Small', 'Huge', 'Little'],
    correct: 2,
    explanation: '**Enormous** = lian em em, nasa. **Huge** = lian, nasa. Tiny/Small/Little = te, a letling.',
    source: 'UPSC 2023'
  },
  {
    id: 103,
    question: 'Passive: Please close the door.',
    options: [
      'The door is closed.',
      'You are requested to close the door.',
      'Let the door be closed.',
      'The door should be closed.'
    ],
    correct: 1,
    explanation: '**Please** awm chuan "You are requested to..." hmang. Imperative request. Correct: You are requested to close the door.',
    source: 'MPSC 2023'
  },
  {
    id: 104,
    question: 'Antonym of "CHEAP":',
    options: ['Expensive', 'Affordable', 'Economical', 'Inexpensive'],
    correct: 0,
    explanation: '**Cheap** = man tlawm. **Expensive** = man to. Antonym dik. Affordable/Economical/Inexpensive = cheap synonym.',
    source: 'MPSC 2022'
  },
  {
    id: 105,
    question: 'Error: **One of my friends** are a doctor.',
    options: ['One of', 'my friends', 'are', 'No error'],
    correct: 2,
    explanation: '**One of** + plural noun = singular verb. "One" hi subject. Correct: One of my friends **is** a doctor.',
    source: 'UPSC 2024'
  },
  {
    id: 106,
    question: 'One Word: A person who believes in God',
    options: ['Atheist', 'Theist', 'Agnostic', 'Pagan'],
    correct: 1,
    explanation: '**Theist** = Pathian ring tu. Atheist = Pathian ring lo. Agnostic = Pathian awm/awm lo hre lo. Pagan = sakhua dang bia.',
    source: 'MPSC 2024'
  },
  {
    id: 107,
    question: 'Fill in: She is good ___ dancing.',
    options: ['in', 'at', 'with', 'for'],
    correct: 1,
    explanation: '**Good at** = thiam, expert. Skill/activity ah "at" hman tur. Good in = chhungah. Correct: good **at** dancing.',
    source: 'UPSC 2023'
  },
  {
    id: 108,
    question: 'Idiom: "Kick the bucket" means:',
    options: ['To play football', 'To die', 'To clean', 'To get angry'],
    correct: 1,
    explanation: '**Kick the bucket** = thi, boral. Informal slang. Entir: The old man kicked the bucket last night.',
    source: 'MPSC 2023'
  },
  {
    id: 109,
    question: 'Synonym of "FEEBLE":',
    options: ['Strong', 'Weak', 'Powerful', 'Healthy'],
    correct: 1,
    explanation: '**Feeble** = chak lo, tha nei lo. **Weak** = chak lo, tha nei lo. Strong/Powerful/Healthy = a letling.',
    source: 'UPSC 2022'
  },
  {
    id: 110,
    question: 'Direct: He said, "May you live long!" Indirect:',
    options: [
      'He said that I may live long.',
      'He wished that I might live long.',
      'He told that I might live long.',
      'He prayed that I might live long.'
    ],
    correct: 1,
    explanation: '**May you live long!** = wish/prayer. "Wished" hmang tur. May → might. Correct: He wished that I might live long.',
    source: 'MPSC 2024'
  },
  {
    id: 111,
    question: 'Antonym of "COMPLEX":',
    options: ['Complicated', 'Simple', 'Difficult', 'Intricate'],
    correct: 1,
    explanation: '**Complex** = buai, harsa, inphiar. **Simple** = awlsam, buai lo. Antonym dik. Complicated/Difficult/Intricate = complex synonym.',
    source: 'MPSC 2023'
  },
  {
    id: 112,
    question: 'Choose correct verb: Bread and butter ___ my breakfast.',
    options: ['are', 'is', 'were', 'have been'],
    correct: 1,
    explanation: '**Bread and butter** = item pakhat anga ngaih, singular. Meaning: chaw ei tui ber. Correct: Bread and butter **is** my breakfast.',
    source: 'UPSC 2024'
  },
  {
    id: 113,
    question: 'One Word: A place where fish are kept',
    options: ['Zoo', 'Aviary', 'Aquarium', 'Apiary'],
    correct: 2,
    explanation: '**Aquarium** = sangha dahna. Zoo = ramsa dahna. Aviary = sava dahna. Apiary = khuai dahna.',
    source: 'MPSC 2022'
  },
  {
    id: 114,
    question: 'Fill in: He deals ___ rice.',
    options: ['in', 'with', 'on', 'at'],
    correct: 0,
    explanation: '**Deal in** = sumdawnna, bungrua zawrh. Deal with = mihring/buaina chingfel. Correct: He deals **in** rice = buhfai a zuar.',
    source: 'UPSC 2023'
  },
  {
    id: 115,
    question: 'Idiom: "Raining cats and dogs" means:',
    options: ['Animals falling', 'Raining heavily', 'Light rain', 'No rain'],
    correct: 1,
    explanation: '**Raining cats and dogs** = ruah nasa tak sur, ruahpui. Entir: Take umbrella, it\'s raining cats and dogs.',
    source: 'MPSC 2024'
  },
  {
    id: 116,
    question: 'Synonym of "GENEROU S":',
    options: ['Stingy', 'Selfish', 'Liberal', 'Greedy'],
    correct: 2,
    explanation: '**Generous** = phal, pek hmang. **Liberal** = phal, pek hmang. Stingy/Selfish/Greedy = phal lo, a letling.',
    source: 'MPSC 2023'
  },
  {
    id: 117,
    question: 'Passive: Nobody can solve this problem.',
    options: [
      'This problem cannot be solved.',
      'This problem cannot be solved by anybody.',
      'This problem can be solved by nobody.',
      'This problem cannot solve.'
    ],
    correct: 1,
    explanation: '**Nobody** = anybody (negative). Can + be + V3. By anybody paih theih. Best: This problem cannot be solved by anybody. Or: This problem cannot be solved.',
    source: 'UPSC 2024'
  },
  {
    id: 118,
    question: 'Antonym of "EMPTY":',
    options: ['Vacant', 'Hollow', 'Full', 'Blank'],
    correct: 2,
    explanation: '**Empty** = ruak, awm lo. **Full** = khat, awm. Antonym dik. Vacant/Hollow/Blank = empty synonym.',
    source: 'MPSC 2022'
  },
  {
    id: 119,
    question: 'Error: He **is living** in Delhi **for** 10 years.',
    options: ['He', 'is living', 'in Delhi', 'for'],
    correct: 1,
    explanation: '**For 10 years** = duration. Present Perfect Continuous hman tur. Correct: He **has been living** in Delhi for 10 years.',
    source: 'UPSC 2023'
  },
  {
    id: 120,
    question: 'One Word: One who walks on foot',
    options: ['Pedestrian', 'Passenger', 'Pilgrim', 'Nomad'],
    correct: 0,
    explanation: '**Pedestrian** = kea kal mi. Passenger = chuang. Pilgrim = biak zin mi. Nomad = pem kual mi.',
    source: 'MPSC 2024'
  },
  {
    id: 121,
    question: 'Fill in: She is married ___ a doctor.',
    options: ['to', 'with', 'by', 'from'],
    correct: 0,
    explanation: '**Married to** = innei. Fixed preposition. Correct: She is married **to** a doctor.',
    source: 'UPSC 2022'
  },
  {
    id: 122,
    question: 'Idiom: "Add fuel to the fire" means:',
    options: ['To help', 'To worsen a situation', 'To cook', 'To extinguish'],
    correct: 1,
    explanation: '**Add fuel to the fire** = buaina tithang zual, ti nasa zual. Entir: His comments added fuel to the fire.',
    source: 'MPSC 2023'
  },
  {
    id: 123,
    question: 'Synonym of "CAUTIOUS":',
    options: ['Careless', 'Careful', 'Reckless', 'Bold'],
    correct: 1,
    explanation: '**Cautious** = fimkhur, inveng. **Careful** = fimkhur, uluk. Careless/Reckless = fimkhur lo. Bold = huaisen.',
    source: 'MPSC 2024'
  },
  {
    id: 124,
    question: 'Direct: He said, "Alas! I am ruined." Indirect:',
    options: [
      'He said that alas he was ruined.',
      'He exclaimed with sorrow that he was ruined.',
      'He told that he was ruined.',
      'He said that he was ruined.'
    ],
    correct: 1,
    explanation: '**Alas!** = exclamation of sorrow. "Exclaimed with sorrow" hmang tur. Correct: He exclaimed with sorrow that he was ruined.',
    source: 'UPSC 2023'
  },
  {
    id: 125,
    question: 'Antonym of "ENEMY":',
    options: ['Foe', 'Rival', 'Friend', 'Opponent'],
    correct: 2,
    explanation: '**Enemy** = hmelma. **Friend** = thian. Antonym dik. Foe/Rival/Opponent = enemy synonym.',
    source: 'MPSC 2022'
  },
  {
    id: 126,
    question: 'Choose correct form: I ___ TV when the phone rang.',
    options: ['watch', 'was watching', 'watched', 'have watched'],
    correct: 1,
    explanation: '**When** clause past action inkhawlh = Past Continuous. Action kal lai "was watching" in phone a lo ri. Correct: I **was watching** TV...',
    source: 'MPSC 2024'
  },
  {
    id: 127,
    question: 'One Word: A person who hates women',
    options: ['Misogynist', 'Misandrist', 'Feminist', 'Chauvinist'],
    correct: 0,
    explanation: '**Misogynist** = hmeichhia hua. Misandrist = mipa hua. Feminist = hmeichhe dikna duh. Chauvinist = mahni chi/pawl chhuang lutuk.',
    source: 'UPSC 2024'
  },
  {
    id: 128,
    question: 'Fill in: He is blind ___ his faults.',
    options: ['in', 'of', 'to', 'with'],
    correct: 2,
    explanation: '**Blind to** = hmu thei lo, hre thei lo (figurative). Blind in = mit del tak. Correct: He is blind **to** his faults = a sual a hre lo.',
    source: 'MPSC 2023'
  },
  {
    id: 129,
    question: 'Idiom: "Break the ice" means:',
    options: ['To break ice', 'To start conversation', 'To fight', 'To be cold'],
    correct: 1,
    explanation: '**Break the ice** = inbiak tan, boruak tih thawl, zamna ti reh. Entir: He told a joke to break the ice.',
    source: 'UPSC 2022'
  },
  {
    id: 130,
    question: 'Synonym of "FEEBLE":',
    options: ['Strong', 'Weak', 'Healthy', 'Powerful'],
    correct: 1,
    explanation: '**Feeble** = chak lo, tha nei lo. **Weak** = chak lo. Strong/Healthy/Powerful = a letling.',
    source: 'MPSC 2024'
  },
  {
    id: 131,
    question: 'Passive: Who teaches you English?',
    options: [
      'By whom you are taught English?',
      'By whom are you taught English?',
      'Who are you taught English by?',
      'By who are you taught English?'
    ],
    correct: 1,
    explanation: '**Who** → **By whom**. Tense: Simple Present "teaches" → "are taught". Question: By whom + are + S + V3? Correct: By whom are you taught English?',
    source: 'MPSC 2023'
  },
  {
    id: 132,
    question: 'Antonym of "ASCEND":',
    options: ['Climb', 'Descend', 'Rise', 'Mount'],
    correct: 1,
    explanation: '**Ascend** = chho, lawn chho. **Descend** = chhuk, lawn thla. Antonym dik.',
    source: 'UPSC 2023'
  },
  {
    id: 133,
    question: 'Error: **The news** are surprising.',
    options: ['The', 'news', 'are', 'No error'],
    correct: 2,
    explanation: '**News** = uncountable singular noun. Singular verb "is" hman tur. Correct: The news **is** surprising.',
    source: 'MPSC 2024'
  },
  {
    id: 134,
    question: 'One Word: Government by officials',
    options: ['Democracy', 'Bureaucracy', 'Autocracy', 'Monarchy'],
    correct: 1,
    explanation: '**Bureaucracy** = official/office mi rorelna. Democracy = mipui rorelna. Autocracy = mi pakhat rorelna. Monarchy = lal rorelna.',
    source: 'UPSC 2024'
  },
  {
    id: 135,
    question: 'Fill in: He is envious ___ his friend\'s success.',
    options: ['of', 'with', 'at', 'for'],
    correct: 0,
    explanation: '**Envious of** = thik, it. Fixed preposition. Correct: He is envious **of** his friend\'s success.',
    source: 'MPSC 2022'
  },
  {
    id: 136,
    question: 'Idiom: "Cost an arm and a leg" means:',
    options: ['Very cheap', 'Very expensive', 'Free', 'Dangerous'],
    correct: 1,
    explanation: '**Cost an arm and a leg** = man to em em, to uchuak. Entir: That car costs an arm and a leg.',
    source: 'MPSC 2023'
  },
  {
    id: 137,
    question: 'Synonym of "VALIANT":',
    options: ['Cowardly', 'Brave', 'Weak', 'Timid'],
    correct: 1,
    explanation: '**Valiant** = huaisen, zam lo. **Brave** = huaisen. Cowardly/Weak/Timid = dawihzep, a letling.',
    source: 'UPSC 2023'
  },
  {
    id: 138,
    question: 'Direct: He said, "Let us go for a walk." Indirect:',
    options: [
      'He said that let us go for a walk.',
      'He suggested that we should go for a walk.',
      'He told that we should go for a walk.',
      'He asked to go for a walk.'
    ],
    correct: 1,
    explanation: '**Let us** = suggestion. "Suggested that we should..." hmang tur. Correct: He suggested that we should go for a walk.',
    source: 'MPSC 2024'
  },
  {
    id: 139,
    question: 'Antonym of "ARRIVAL":',
    options: ['Coming', 'Departure', 'Entry', 'Approach'],
    correct: 1,
    explanation: '**Arrival** = thlen. **Departure** = chhuah, kal chhuah. Antonym dik.',
    source: 'MPSC 2023'
  },
  {
    id: 140,
    question: 'Choose correct verb: Each of the students ___ present.',
    options: ['are', 'is', 'were', 'have been'],
    correct: 1,
    explanation: '**Each of** + plural noun = singular verb. "Each" = singular. Correct: Each of the students **is** present.',
    source: 'UPSC 2024'
  },
  {
    id: 141,
    question: 'One Word: A book published after author\'s death',
    options: ['Manuscript', 'Posthumous', 'Autobiography', 'Biography'],
    correct: 1,
    explanation: '**Posthumous** = thi hnu a tihchhuah. Manuscript = kut ziak. Autobiography = mahni chanchin ziah. Biography = mi dang chanchin.',
    source: 'MPSC 2022'
  },
  {
    id: 142,
    question: 'Fill in: He is confident ___ success.',
    options: ['of', 'for', 'to', 'about'],
    correct: 0,
    explanation: '**Confident of** = ring tlat, chiang. Fixed preposition. Correct: He is confident **of** success.',
    source: 'UPSC 2023'
  },
  {
    id: 143,
    question: 'Idiom: "Bite the bullet" means:',
    options: ['To eat', 'To face a difficult situation bravely', 'To be angry', 'To fight'],
    correct: 1,
    explanation: '**Bite the bullet** = harsatna/na hmachhawn ngam, tuar ngam. Hmanlaiin operation dawnin bullet an seh thin.',
    source: 'MPSC 2024'
  },
  {
    id: 144,
    question: 'Synonym of "AMIABLE":',
    options: ['Hostile', 'Friendly', 'Rude', 'Angry'],
    correct: 1,
    explanation: '**Amiable** = nelawm, kawm nuam. **Friendly** = nelawm, thian tha. Hostile/Rude/Angry = nelawm lo.',
    source: 'MPSC 2023'
  },
  {
    id: 145,
    question: 'Passive: People say he is honest.',
    options: [
      'He is said to be honest.',
      'It is said that he is honest.',
      'Both A and B',
      'He is said that he is honest.'
    ],
    correct: 2,
    explanation: '**People say** = general statement. Passive 2 ways: 1) He is said to be honest. 2) It is said that he is honest. **Both A and B** a dik.',
    source: 'UPSC 2024'
  },
  {
    id: 146,
    question: 'Antonym of "OPTIMIST":',
    options: ['Realist', 'Pessimist', 'Idealist', 'Humanist'],
    correct: 1,
    explanation: '**Optimist** = thil tha beisei, beiseina nei. **Pessimist** = thil tha lo beisei, beidawng. Antonym dik.',
    source: 'MPSC 2022'
  },
  {
    id: 147,
    question: 'Error: **Neither he nor I** am guilty.',
    options: ['Neither he nor I', 'am', 'guilty', 'No error'],
    correct: 3,
    explanation: '**Neither...nor** ah verb chu subject hnai zawk "I" a zui. I = am. "Neither he nor I am guilty" a dik. Error awm lo.',
    source: 'UPSC 2023'
  },
  {
    id: 148,
    question: 'One Word: A place where animals are slaughtered',
    options: ['Stable', 'Kennel', 'Abattoir', 'Aviary'],
    correct: 2,
    explanation: '**Abattoir** = ran talhna hmun, slaughterhouse. Stable = sakawr dahna. Kennel = ui dahna. Aviary = sava dahna.',
    source: 'MPSC 2024'
  },
  {
    id: 149,
    question: 'Fill in: He is ignorant ___ his duties.',
    options: ['of', 'about', 'with', 'for'],
    correct: 0,
    explanation: '**Ignorant of** = hre lo, thiam lo. Fixed preposition. Correct: He is ignorant **of** his duties.',
    source: 'UPSC 2022'
  },
  {
    id: 150,
    question: 'Idiom: "Get your act together" means:',
    options: ['To perform', 'To organize yourself', 'To fight', 'To dance'],
    correct: 1,
    explanation: '**Get your act together** = insiam tha rawh, inpeih fel rawh, nun uluk rawh. Entir: You need to get your act together before exam.',
    source: 'MPSC 2023'
  }
]

export default function EnglishTestPage() {
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
          <Link href="/premium" className="text-blue-600 underline">Get Pro Access</Link>
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
              {score === questions.length? 'Perfect! 🌟' :
               score >= questions.length * 0.7? 'Excellent! 👍' :
               score >= questions.length * 0.5? 'Good Job! 😊' : 'Keep Practicing! 💪'}
            </p>
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
              <Link href="/english" className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium">
                Back to English
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
            <Link href="/english" className="text-blue-600 font-medium">← Back</Link>
            <h1 className="text-xl font-bold text-gray-900">English Mock Test - Pro</h1>
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
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Question {currentQ + 1}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {q.source}
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
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Score: {score}/{questions.length}</span>
            <div className="flex gap-1">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx < currentQ? 'bg-green-500' : idx === currentQ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}