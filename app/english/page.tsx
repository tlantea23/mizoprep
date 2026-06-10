'use client'
import SubjectPage from '../components/SubjectPage'

const englishChapters = [
  {
    id: 'eng-1',
    title: {
      mizo: 'Chapter 1: Tenses - Hun Bi 12 Kimchang',
      english: 'Chapter 1: Tenses - All 12 Tenses'
    },
    notes: {
      mizo: [
        '**PRESENT TENSE:**',
        '**1. Present Simple** - Habit, Fact, Universal Truth. Formula: Sub + V1 + Obj. Mizo ah "thin", "ziah", "fo". Example: 1. The earth moves round the sun. (Lei hi ni a hel) 2. He goes to church every Sunday. (Sunday tin biakinah a kal thin) 3. Cats eat mice. (Zawhte in sazu a ei) 4. Water freezes at 0°C. (Tui 0°C ah a khang)',
        '**2. Present Continuous** - Tunah mek, hun bi nei. Formula: Sub + is/am/are + V1+ing. Mizo ah "mek", "lai". Example: 1. I am studying now. (Tunah ka zir mek) 2. She is cooking dinner. (Zanriah a siam mek) 3. They are playing in the field. (Mualah an khel mek) 4. Look! It is raining. (En rawh! Ruah a sur)',
        '**3. Present Perfect** - Zo tawh, tunah effect nei. Formula: Sub + has/have + V3. Keyword: Just, Already, Yet, Ever, Never, Since, For. Example: 1. I have just finished my work. (Ka hna ka zo chiah) 2. She has lived here for 5 years. (Kum 5 heta a cheng tawh) 3. Have you ever been to Delhi? (Delhi ah i kal tawh em?) 4. He has not come yet. (A la lo kal lo)',
        '**4. Present Perfect Continuous** - A tan atanga tun thleng. Formula: Sub + has/have + been + V1+ing. Example: 1. I have been waiting for 2 hours. (Darkar 2 ka nghak tawh) 2. She has been teaching since 2010. (2010 atangin a zirtir) 3. It has been raining since morning. (Zing atangin ruah a sur)',
        
        '**PAST TENSE:**',
        '**5. Past Simple** - Hun kal tawh, hun bithliah nei. Formula: Sub + V2. Keyword: Yesterday, Last, Ago, In 2020. Example: 1. I saw him yesterday. (Niminah ka hmu) 2. She went to Aizawl last week. (Kar hmasa Aizawl ah a kal) 3. Mizo people migrated from China. (Mizo te China atangin an pem)',
        '**6. Past Continuous** - Hun kal tawha thil thleng mek. Formula: Sub + was/were + V1+ing. Example: 1. I was sleeping when he came. (A lo kal laiin ka mu) 2. They were playing while it rained. (Ruah sur laiin an khel) 3. At 8pm, I was watching TV. (Dar 8 ah TV ka en)',
        '**7. Past Perfect** - Thil 2 thleng: pakhat hmasa zawk. Formula: Sub + had + V3. Example: 1. The train had left before I reached. (Ka thlen hmain rel a chhuak tawh) 2. She had finished work when I called. (Ka call hmain hna a zo tawh) 3. After he had eaten, he slept. (A ei zawhah a mu)',
        '**8. Past Perfect Continuous** - Hun rei tak kal tawha thleng mek. Formula: Sub + had + been + V1+ing. Example: 1. I had been studying for 3 hours when she came. (A lo kal hmain darkar 3 ka zir tawh) 2. He had been working there since 2000. (2000 atangin tah chuan a thawk)',

        '**FUTURE TENSE:**',
        '**9. Future Simple** - Nakina thleng tur. Formula: Sub + will/shall + V1. Example: 1. I will go to Delhi tomorrow. (Naktukah Delhi ah ka kal ang) 2. She will pass the exam. (Exam a pass ang) 3. It will rain soon. (Rei lo te ah ruah a sur ang)',
        '**10. Future Continuous** - Nakina thleng mek tur. Formula: Sub + will be + V1+ing. Example: 1. I will be studying at 8pm. (Dar 8 ah ka zir mek ang) 2. They will be playing tomorrow. (Naktukah an khel mek ang) 3. This time next week, I will be travelling. (Kar leh hetih hunah ka zin mek ang)',
        '**11. Future Perfect** - Hun bithliah ah zo hman. Formula: Sub + will have + V3. Example: 1. I will have finished by 5pm. (Dar 5 ah ka zo hman ang) 2. She will have left before you come. (I lo kal hmain a chhuak hman ang) 3. By 2026, I will have completed my degree. (2026 ah degree ka zo hman ang)',
        '**12. Future Perfect Continuous** - Nakina hun rei tak thleng tur. Formula: Sub + will have been + V1+ing. Example: 1. By next year, I will have been teaching for 10 years. (Kum leh ah kum 10 ka zirtir tawh ang) 2. In May, she will have been living here for 5 years. (May ah kum 5 heta a cheng tawh ang)',

        '**MPSC Tense Tips:** 1. Since = point of time, For = duration 2. Yet = negative/interrogative ah 3. Already = positive ah 4. Just = hlim hlawl 5. Ago = past simple nen chauh'
      ],
      english: [
        '**PRESENT TENSE:**',
        '**1. Present Simple** - Habit, Fact, Universal Truth. Formula: Sub + V1 + Obj. Uses: Daily routine, facts, scheduled events. Example: 1. The earth moves round the sun. 2. He goes to church every Sunday. 3. Cats eat mice. 4. Water freezes at 0°C. 5. The train leaves at 6pm.',
        '**2. Present Continuous** - Action happening now/temporary. Formula: Sub + is/am/are + V1+ing. Example: 1. I am studying now. 2. She is cooking dinner. 3. They are playing in the field. 4. Look! It is raining. 5. I am living in Aizawl these days.',
        '**3. Present Perfect** - Completed action with present relevance. Formula: Sub + has/have + V3. Keywords: Just, Already, Yet, Ever, Never, Since, For. Example: 1. I have just finished my work. 2. She has lived here for 5 years. 3. Have you ever been to Delhi? 4. He has not come yet. 5. I have already seen this movie.',
        '**4. Present Perfect Continuous** - Started in past, continuing now. Formula: Sub + has/have + been + V1+ing. Example: 1. I have been waiting for 2 hours. 2. She has been teaching since 2010. 3. It has been raining since morning. 4. How long have you been learning English?',
        
        '**PAST TENSE:**',
        '**5. Past Simple** - Completed action in past with specific time. Formula: Sub + V2. Keywords: Yesterday, Last, Ago, In 2020. Example: 1. I saw him yesterday. 2. She went to Aizawl last week. 3. Mizo people migrated from China. 4. Columbus discovered America in 1492.',
        '**6. Past Continuous** - Action in progress at specific past time. Formula: Sub + was/were + V1+ing. Example: 1. I was sleeping when he came. 2. They were playing while it rained. 3. At 8pm, I was watching TV. 4. What were you doing at 10am?',
        '**7. Past Perfect** - Action completed before another past action. Formula: Sub + had + V3. Example: 1. The train had left before I reached. 2. She had finished work when I called. 3. After he had eaten, he slept. 4. I had never seen such a sight before.',
        '**8. Past Perfect Continuous** - Duration before another past action. Formula: Sub + had + been + V1+ing. Example: 1. I had been studying for 3 hours when she came. 2. He had been working there since 2000. 3. She had been waiting for 2 hours before the bus came.',

        '**FUTURE TENSE:**',
        '**9. Future Simple** - Action that will happen. Formula: Sub + will/shall + V1. Example: 1. I will go to Delhi tomorrow. 2. She will pass the exam. 3. It will rain soon. 4. Will you help me? 5. I shall return in an hour.',
        '**10. Future Continuous** - Action in progress at future time. Formula: Sub + will be + V1+ing. Example: 1. I will be studying at 8pm. 2. They will be playing tomorrow. 3. This time next week, I will be travelling. 4. Will you be using the car tonight?',
        '**11. Future Perfect** - Action completed before specific future time. Formula: Sub + will have + V3. Example: 1. I will have finished by 5pm. 2. She will have left before you come. 3. By 2026, I will have completed my degree. 4. Will you have submitted by Monday?',
        '**12. Future Perfect Continuous** - Duration up to specific future time. Formula: Sub + will have been + V1+ing. Example: 1. By next year, I will have been teaching for 10 years. 2. In May, she will have been living here for 5 years. 3. By 6pm, I will have been waiting for 3 hours.',

        '**MPSC Tense Tips:** 1. Since = point of time, For = duration 2. Yet = negative/interrogative 3. Already = positive 4. Just = very recent 5. Ago = only with past simple'
      ]
    }
  },
  {
    id: 'eng-2',
    title: {
      mizo: 'Chapter 2: Voice Change - Active to Passive',
      english: 'Chapter 2: Voice Change - Active to Passive'
    },
    notes: {
      mizo: [
        '**Voice hrilhfiahna:** Active = Subject in action a ti. Passive = Subject in action a tawrh. MPSC ah 2-3 marks.',
        '**Rule 1: Tense danglam dan** - Present Simple: is/am/are + V3. Example: Ram eats mango → Mango is eaten by Ram. Past Simple: was/were + V3. Example: Ram ate mango → Mango was eaten by Ram.',
        '**Rule 2: Continuous** - is/am/are/was/were + being + V3. Example: Ram is eating mango → Mango is being eaten by Ram. Ram was eating mango → Mango was being eaten by Ram.',
        '**Rule 3: Perfect** - has/have/had + been + V3. Example: Ram has eaten mango → Mango has been eaten by Ram. Ram had eaten mango → Mango had been eaten by Ram.',
        '**Rule 4: Future** - will + be + V3. Example: Ram will eat mango → Mango will be eaten by Ram. Ram will have eaten → Mango will have been eaten by Ram.',
        '**Rule 5: Modal Verbs** - can/could/may/might/should/must + be + V3. Example: You must do it → It must be done by you. Can you solve it? → Can it be solved by you?',
        '**Imperative Sentences:** 1. Let + obj + be + V3. Close the door → Let the door be closed. 2. You are requested/ordered/advised + to + V1. Please help me → You are requested to help me.',
        '**Interrogative:** 1. Did Ram kill Ravan? → Was Ravan killed by Ram? 2. Who wrote this book? → By whom was this book written? 3. What did he buy? → What was bought by him?',
        '**Exception:** Intransitive verb passive a siam theih loh. Example: He sleeps. (Obj a awm lo) He goes. (Obj a awm lo)',
        '**MPSC Tricks:** 1. By + agent dah ziah 2. Tense mil tur 3. Verb V3 form dik 4. Question ah Was/Were/Is/Are hmasa ber'
      ],
      english: [
        '**Voice Definition:** Active = Subject does action. Passive = Subject receives action. 2-3 marks in MPSC.',
        '**Rule 1: Tense Changes** - Present Simple: is/am/are + V3. Example: Ram eats mango → Mango is eaten by Ram. Past Simple: was/were + V3. Example: Ram ate mango → Mango was eaten by Ram.',
        '**Rule 2: Continuous** - is/am/are/was/were + being + V3. Example: Ram is eating mango → Mango is being eaten by Ram. Ram was eating mango → Mango was being eaten by Ram.',
        '**Rule 3: Perfect** - has/have/had + been + V3. Example: Ram has eaten mango → Mango has been eaten by Ram. Ram had eaten mango → Mango had been eaten by Ram.',
        '**Rule 4: Future** - will + be + V3. Example: Ram will eat mango → Mango will be eaten by Ram. Ram will have eaten → Mango will have been eaten by Ram.',
        '**Rule 5: Modal Verbs** - can/could/may/might/should/must + be + V3. Example: You must do it → It must be done by you. Can you solve it? → Can it be solved by you?',
        '**Imperative Sentences:** 1. Let + obj + be + V3. Close the door → Let the door be closed. 2. You are requested/ordered/advised + to + V1. Please help me → You are requested to help me.',
        '**Interrogative:** 1. Did Ram kill Ravan? → Was Ravan killed by Ram? 2. Who wrote this book? → By whom was this book written? 3. What did he buy? → What was bought by him?',
        '**Exception:** Intransitive verbs cannot be passive. Example: He sleeps. (No object) He goes. (No object)',
        '**MPSC Tricks:** 1. Always use By + agent 2. Match tense correctly 3. Use V3 form 4. In questions, Was/Were/Is/Are comes first'
      ]
    }
  },
  {
    id: 'eng-3',
    title: {
      mizo: 'Chapter 3: Prepositions - In, On, At, By, With',
      english: 'Chapter 3: Prepositions - In, On, At, By, With'
    },
    notes: {
      mizo: [
        '**1. IN** - Kum, thla, hun rei, chhung. Example: 1. In 2023, in January, in the morning. 2. He lives in Aizawl. 3. The book is in the bag. 4. I will come in an hour. 5. She is interested in music.',
        '**2. ON** - Ni, date, chung, chungchang. Example: 1. On Monday, on 15th August. 2. The book is on the table. 3. He is on the bus. 4. A lecture on history. 5. On foot, on time.',
        '**3. AT** - Hun bithliah, hmun bithliah, rate. Example: 1. At 5pm, at night, at noon. 2. At the bus stop, at home. 3. Good at English, at a high speed. 4. At present, at first.',
        '**4. BY** - Hnaiah, kal pelh, siamtu, kalna. Example: 1. Sit by me. 2. By 5pm I will finish. 3. A book by Shakespeare. 4. Travel by bus, by car. 5. By mistake, by heart.',
        '**5. WITH** - Ken, hman, inremna. Example: 1. Cut with a knife. 2. I agree with you. 3. The boy with blue shirt. 4. Fill the glass with water. 5. With pleasure.',
        '**Fixed Prepositions MPSC:** 1. Afraid of 2. Good at 3. Interested in 4. Married to 5. Depend on 6. Believe in 7. Angry with (person), Angry at (thing) 8. Proud of 9. Succeed in 10. Accused of',
        '**Time Prepositions:** 1. In - months, years, long periods 2. On - days, dates 3. At - exact time, night, weekend 4. Since - point of time 5. For - duration 6. During - throughout',
        '**Place Prepositions:** 1. In - inside, enclosed 2. On - surface 3. At - specific point 4. Under - below 5. Over - above, covering 6. Between - two 7. Among - more than two'
      ],
      english: [
        '**1. IN** - Years, months, long periods, inside. Example: 1. In 2023, in January, in the morning. 2. He lives in Aizawl. 3. The book is in the bag. 4. I will come in an hour. 5. She is interested in music.',
        '**2. ON** - Days, dates, surface, about. Example: 1. On Monday, on 15th August. 2. The book is on the table. 3. He is on the bus. 4. A lecture on history. 5. On foot, on time.',
        '**3. AT** - Exact time, specific place, rate. Example: 1. At 5pm, at night, at noon. 2. At the bus stop, at home. 3. Good at English, at a high speed. 4. At present, at first.',
        '**4. BY** - Near, deadline, agent, means. Example: 1. Sit by me. 2. By 5pm I will finish. 3. A book by Shakespeare. 4. Travel by bus, by car. 5. By mistake, by heart.',
        '**5. WITH** - Using, accompanied, having. Example: 1. Cut with a knife. 2. I agree with you. 3. The boy with blue shirt. 4. Fill the glass with water. 5. With pleasure.',
        '**Fixed Prepositions MPSC:** 1. Afraid of 2. Good at 3. Interested in 4. Married to 5. Depend on 6. Believe in 7. Angry with (person), Angry at (thing) 8. Proud of 9. Succeed in 10. Accused of',
        '**Time Prepositions:** 1. In - months, years, long periods 2. On - days, dates 3. At - exact time, night, weekend 4. Since - point of time 5. For - duration 6. During - throughout',
        '**Place Prepositions:** 1. In - inside, enclosed 2. On - surface 3. At - specific point 4. Under - below 5. Over - above, covering 6. Between - two 7. Among - more than two'
      ]
    },
    isPro: true
  },
  {
    id: 'eng-4',
    title: {
      mizo: 'Chapter 4: Direct-Indirect Speech - Reported Speech',
      english: 'Chapter 4: Direct-Indirect Speech - Reported Speech'
    },
    notes: {
      mizo: [
        '**Rule 1: Reporting Verb Past Tense ah** - Present → Past, Past → Past Perfect, Will → Would, Can → Could, May → Might, Must → Had to. Example: He said, "I am ill" → He said that he was ill.',
        '**Rule 2: Pronoun thlak dan** - I → he/she, We → they, You → I/he/she, My → his/her, Our → their. Example: Ram said, "I am busy" → Ram said that he was busy.',
        '**Rule 3: Time/Place thlak dan** - Now → then, Today → that day, Yesterday → the previous day, Tomorrow → the next day, Here → there, This → that, These → those.',
        '**Rule 4: Question** - Said to → asked, enquired. Question mark bo, if/whether hman. Example: He said to me, "Are you ill?" → He asked me if I was ill. "What is your name?" → He asked what my name was.',
        '**Rule 5: Imperative** - Said to → ordered, requested, advised. To + V1 hman. Example: He said to me, "Please help me" → He requested me to help him. "Sit down" → He ordered me to sit down.',
        '**Rule 6: Exclamatory** - Said → exclaimed with joy/sorrow/surprise. Example: He said, "Hurrah! We won" → He exclaimed with joy that they had won. "Alas! I am ruined" → He exclaimed with sorrow that he was ruined.',
        '**Exception - Universal Truth** - Tense thlak loh. Example: Teacher said, "The sun rises in the east" → Teacher said that the sun rises in the east.',
        '**MPSC Examples:** 1. He said, "I will come tomorrow" → He said that he would come the next day. 2. She said to me, "Do you like tea?" → She asked me if I liked tea. 3. "Please sit down," he said → He requested me to sit down.'
      ],
      english: [
        '**Rule 1: Reporting Verb in Past** - Present → Past, Past → Past Perfect, Will → Would, Can → Could, May → Might, Must → Had to. Example: He said, "I am ill" → He said that he was ill.',
        '**Rule 2: Pronoun Changes** - I → he/she, We → they, You → I/he/she, My → his/her, Our → their. Example: Ram said, "I am busy" → Ram said that he was busy.',
        '**Rule 3: Time/Place Changes** - Now → then, Today → that day, Yesterday → the previous day, Tomorrow → the next day, Here → there, This → that, These → those.',
        '**Rule 4: Questions** - Said to → asked, enquired. Remove question mark, use if/whether. Example: He said to me, "Are you ill?" → He asked me if I was ill. "What is your name?" → He asked what my name was.',
        '**Rule 5: Imperative** - Said to → ordered, requested, advised. Use To + V1. Example: He said to me, "Please help me" → He requested me to help him. "Sit down" → He ordered me to sit down.',
        '**Rule 6: Exclamatory** - Said → exclaimed with joy/sorrow/surprise. Example: He said, "Hurrah! We won" → He exclaimed with joy that they had won. "Alas! I am ruined" → He exclaimed with sorrow that he was ruined.',
        '**Exception - Universal Truth** - Tense does not change. Example: Teacher said, "The sun rises in the east" → Teacher said that the sun rises in the east.',
        '**MPSC Examples:** 1. He said, "I will come tomorrow" → He said that he would come the next day. 2. She said to me, "Do you like tea?" → She asked me if I liked tea. 3. "Please sit down," he said → He requested me to sit down.'
      ]
    },
    isPro: true
  },
  {
    id: 'eng-5',
    title: {
      mizo: 'Chapter 5: Synonyms, Antonyms & One Word',
      english: 'Chapter 5: Synonyms, Antonyms & One Word Substitution'
    },
    notes: {
      mizo: [
        '**Synonyms MPSC ah lo chhuak thin:** 1. Abandon = Desert, Forsake 2. Brave = Courageous, Valiant 3. Calm = Peaceful, Tranquil 4. Diligent = Hardworking, Industrious 5. Enormous = Huge, Gigantic 6. Feeble = Weak, Frail 7. Genuine = Authentic, Real 8. Hostile = Unfriendly, Antagonistic 9. Imitate = Copy, Mimic 10. Joy = Happiness, Delight',
        '**Antonyms MPSC ah lo chhuak thin:** 1. Accept × Reject 2. Arrive × Depart 3. Beautiful × Ugly 4. Cruel × Kind 5. Deep × Shallow 6. Expand × Contract 7. Fresh × Stale 8. Guilty × Innocent 9. Honest × Dishonest 10. Include × Exclude',
        '**One Word Substitution:** 1. One who loves mankind = Philanthropist 2. One who hates mankind = Misanthrope 3. Government by people = Democracy 4. Government by one = Autocracy 5. Killing of self = Suicide 6. Killing of king = Regicide 7. Life history written by self = Autobiography 8. Life history written by others = Biography 9. One who cannot read/write = Illiterate 10. One who knows many languages = Polyglot',
        '**More One Word:** 11. Fear of water = Hydrophobia 12. Fear of height = Acrophobia 13. Study of birds = Ornithology 14. Study of earth = Geology 15. A place for sick = Hospital 16. A place for books = Library 17. A place for animals = Zoo 18. That which cannot be seen = Invisible 19. That which cannot be heard = Inaudible 20. That which cannot be cured = Incurable',
        '**MPSC Trick:** Word root hre la. Example: Phil = love, Anthrop = man, Bio = life, Graph = write, Cide = kill, Demo = people, Cracy = rule'
      ],
      english: [
        '**Common Synonyms for MPSC:** 1. Abandon = Desert, Forsake 2. Brave = Courageous, Valiant 3. Calm = Peaceful, Tranquil 4. Diligent = Hardworking, Industrious 5. Enormous = Huge, Gigantic 6. Feeble = Weak, Frail 7. Genuine = Authentic, Real 8. Hostile = Unfriendly, Antagonistic 9. Imitate = Copy, Mimic 10. Joy = Happiness, Delight',
        '**Common Antonyms for MPSC:** 1. Accept × Reject 2. Arrive × Depart 3. Beautiful × Ugly 4. Cruel × Kind 5. Deep × Shallow 6. Expand × Contract 7. Fresh × Stale 8. Guilty × Innocent 9. Honest × Dishonest 10. Include × Exclude',
        '**One Word Substitution:** 1. One who loves mankind = Philanthropist 2. One who hates mankind = Misanthrope 3. Government by people = Democracy 4. Government by one = Autocracy 5. Killing of self = Suicide 6. Killing of king = Regicide 7. Life history written by self = Autobiography 8. Life history written by others = Biography 9. One who cannot read/write = Illiterate 10. One who knows many languages = Polyglot',
        '**More One Word:** 11. Fear of water = Hydrophobia 12. Fear of height = Acrophobia 13. Study of birds = Ornithology 14. Study of earth = Geology 15. A place for sick = Hospital 16. A place for books = Library 17. A place for animals = Zoo 18. That which cannot be seen = Invisible 19. That which cannot be heard = Inaudible 20. That which cannot be cured = Incurable',
        '**MPSC Trick:** Learn word roots. Example: Phil = love, Anthrop = man, Bio = life, Graph = write, Cide = kill, Demo = people, Cracy = rule'
      ]
    },
    isPro: true
  }
]

export default function EnglishPage() {
  return (
    <SubjectPage
      subjectName={{ mizo: 'English / Sap Tawng', english: 'English' }}
      chapters={englishChapters}
      backLink="/"
      testLink="/english/test"
      testTitle="English Mock Test - 100 Questions"
      testDesc="Narration, Vocabulary, Idioms • Mizo explanation"
    />
  )
}