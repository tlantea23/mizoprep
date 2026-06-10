'use client'
import { useState } from 'react'
import Link from 'next/link'

type Question = {
  id: number
  q: string
  q_mz: string
  options: string[]
  options_mz: string[]
  ans: number
  exp: string
  exp_mz: string
  topic: string
}

type Language = 'en' | 'mz'

const QUESTIONS: Question[] = [
  {
    id: 1,
    q: "Choose the correct synonym for 'Abundant':",
    q_mz: "'Abundant' tih thumal nen a inhnaih ber chu:",
    options: ["Scarce", "Plentiful", "Empty", "Rare"],
    options_mz: ["Tlem", "Tam", "Ruak", "Vang"],
    ans: 1,
    exp: "Abundant means existing in large quantities; plentiful. Example: Abundant rainfall.",
    exp_mz: "Abundant awmzia chu tam tak awm tihna. Entirnan: Ruah tam tak sur.",
    topic: "Vocabulary"
  },
  {
    id: 2,
    q: "Identify the correct passive voice: 'She writes a letter.'",
    q_mz: "Passive voice dik thlang rawh: 'She writes a letter.'",
    options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."],
    options_mz: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."],
    ans: 0,
    exp: "Present Simple Active → Present Simple Passive: is/am/are + V3. 'writes' becomes 'is written'.",
    exp_mz: "Present Simple Active chu Passive ah chuan is/am/are + V3 a ni. 'writes' chu 'is written' a ni.",
    topic: "Grammar"
  },
  {
    id: 3,
    q: "Choose the antonym of 'Brave':",
    q_mz: "'Brave' tih thumal letling chu:",
    options: ["Courageous", "Bold", "Cowardly", "Fearless"],
    options_mz: ["Huaisen", "Pawisak nei lo", "Zamchhe", "Hlau lo"],
    ans: 2,
    exp: "Brave means courageous. Its opposite is cowardly, meaning lacking courage.",
    exp_mz: "Brave awmzia chu huaisen tihna. A letling chu zamchhe, huaisen lo tihna.",
    topic: "Vocabulary"
  },
  {
    id: 4,
    q: "Fill in: He ___ to Delhi yesterday.",
    q_mz: "Thun dik thlang rawh: He ___ to Delhi yesterday.",
    options: ["go", "goes", "went", "gone"],
    options_mz: ["go", "goes", "went", "gone"],
    ans: 2,
    exp: "'Yesterday' indicates Past Simple. Second form of 'go' is 'went'.",
    exp_mz: "'Yesterday' hian hun kal tawh a kawk. 'go' V2 na chu 'went' a ni.",
    topic: "Tense"
  },
  {
    id: 5,
    q: "Spot the error: 'Each of the boys have a pen.'",
    q_mz: "Tihsual lai zawng rawh: 'Each of the boys have a pen.'",
    options: ["Each", "of the boys", "have", "No error"],
    options_mz: ["Each", "of the boys", "have", "Tihsual awm lo"],
    ans: 2,
    exp: "'Each of' is followed by singular verb. Correct: 'Each of the boys has a pen.'",
    exp_mz: "'Each of' hnuah hian verb mal a kal tur. A dik chu: 'Each of the boys has a pen.'",
    topic: "Error Spotting"
  },
  {
    id: 6,
    q: "One word for 'A person who loves books':",
    q_mz: "Lehkhabu ngaina mi sawina thumal khat:",
    options: ["Biographer", "Bibliophile", "Publisher", "Librarian"],
    options_mz: ["Biographer", "Bibliophile", "Publisher", "Librarian"],
    ans: 1,
    exp: "Bibliophile = book lover. Bio=bibliography, phile=lover.",
    exp_mz: "Bibliophile awmzia chu lehkhabu ngaina mi tihna.",
    topic: "One Word"
  },
  {
    id: 7,
    q: "Choose correct preposition: He is afraid ___ dogs.",
    q_mz: "Preposition dik thlang rawh: He is afraid ___ dogs.",
    options: ["from", "of", "by", "with"],
    options_mz: ["from", "of", "by", "with"],
    ans: 1,
    exp: "'Afraid of' is the correct phrase. Example: She is afraid of darkness.",
    exp_mz: "'Afraid of' tih hi a dik. Entirnan: She is afraid of darkness.",
    topic: "Preposition"
  },
  {
    id: 8,
    q: "Meaning of idiom 'A piece of cake':",
    q_mz: "Idiom 'A piece of cake' awmzia chu:",
    options: ["Difficult task", "Easy task", "Sweet dish", "Small part"],
    options_mz: ["Harsa", "Awlsam", "Thilthlum", "Then then"],
    ans: 1,
    exp: "'A piece of cake' means something very easy to do.",
    exp_mz: "'A piece of cake' awmzia chu thil tih awlsam tak tihna.",
    topic: "Idioms"
  },
  {
    id: 9,
    q: "Change to indirect speech: He said, 'I am busy.'",
    q_mz: "Indirect speech ah thlak rawh: He said, 'I am busy.'",
    options: ["He said that he is busy.", "He said that he was busy.", "He said that I am busy.", "He said that I was busy."],
    options_mz: ["He said that he is busy.", "He said that he was busy.", "He said that I am busy.", "He said that I was busy."],
    ans: 1,
    exp: "Present tense 'am' changes to past 'was' in indirect speech. 'I' changes to 'he'.",
    exp_mz: "Direct a 'am' kha Indirect ah 'was' a ni. 'I' kha 'he' ah a thlak.",
    topic: "Narration"
  },
  {
    id: 10,
    q: "Plural of 'Crisis' is:",
    q_mz: "'Crisis' tih tam lam chu:",
    options: ["Crisises", "Crisis", "Crises", "Crise"],
    options_mz: ["Crisises", "Crisis", "Crises", "Crise"],
    ans: 2,
    exp: "Words ending in -is change to -es in plural: crisis → crises, basis → bases.",
    exp_mz: "-is tawp chu tam lamah -es a ni: crisis → crises, basis → bases.",
    topic: "Grammar"
  },
  // PRO Questions 11-50
  {
    id: 11,
    q: "Synonym of 'Meticulous':",
    q_mz: "'Meticulous' tih nen a inhnaih ber chu:",
    options: ["Careless", "Careful", "Quick", "Slow"],
    options_mz: ["Fimkhur lo", "Fimkhur", "Rang", "Muang"],
    ans: 1,
    exp: "Meticulous means showing great attention to detail; very careful and precise.",
    exp_mz: "Meticulous awmzia chu thil tih fimkhur em em, a kimchang taka ti tihna.",
    topic: "Vocabulary"
  },
  {
    id: 12,
    q: "Choose correct article: He is ___ honest man.",
    q_mz: "Article dik thlang rawh: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    options_mz: ["a", "an", "the", "article awm lo"],
    ans: 1,
    exp: "'Honest' starts with vowel sound 'o', so use 'an'. An honest man.",
    exp_mz: "'Honest' hi 'o' riin a intan a, 'h' a ri lo. Chuvangin 'an' hman tur. An honest man.",
    topic: "Articles"
  },
  {
    id: 13,
    q: "Antonym of 'Expand':",
    q_mz: "'Expand' tih letling chu:",
    options: ["Increase", "Enlarge", "Contract", "Extend"],
    options_mz: ["Tipung", "Tilian", "Tite", "Tisei"],
    ans: 2,
    exp: "Expand means become larger. Opposite is contract, meaning become smaller.",
    exp_mz: "Expand awmzia chu tihlian tihna. A letling chu contract, tite tihna.",
    topic: "Vocabulary"
  },
  {
    id: 14,
    q: "Correct spelling:",
    q_mz: "Spelling dik thlang rawh:",
    options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
    options_mz: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
    ans: 2,
    exp: "Accommodate has double 'c' and double 'm': ac-com-mo-date.",
    exp_mz: "Accommodate ah hian 'c' pahnih leh 'm' pahnih a awm: ac-com-mo-date.",
    topic: "Spelling"
  },
  {
    id: 15,
    q: "Meaning of 'Beat around the bush':",
    q_mz: "'Beat around the bush' awmzia chu:",
    options: ["Speak directly", "Avoid main topic", "Hit the bush", "Go hunting"],
    options_mz: ["Tlang taka sawi", "Thu pawimawh sawi lo", "Hnim vua", "Ramsial"],
    ans: 1,
    exp: "Beat around the bush means to avoid talking about main topic directly.",
    exp_mz: "Beat around the bush awmzia chu thu pawimawh sawi duh lova pehhel tihna.",
    topic: "Idioms"
  },
  {
    id: 16,
    q: "Fill in: Neither John nor his friends ___ present.",
    q_mz: "Thun dik thlang rawh: Neither John nor his friends ___ present.",
    options: ["is", "are", "was", "has"],
    options_mz: ["is", "are", "was", "has"],
    ans: 1,
    exp: "With 'neither...nor', verb agrees with nearest subject. 'Friends' is plural, so 'are'.",
    exp_mz: "'Neither...nor' ah hian verb chu subject hnaih ber a mil tur. 'Friends' a tam lam a ni a, 'are' hman tur.",
    topic: "Subject-Verb"
  },
  {
    id: 17,
    q: "One word for 'Government by officials':",
    q_mz: "Sawrkar hna thawk ten ram an awpna sawina:",
    options: ["Democracy", "Bureaucracy", "Autocracy", "Theocracy"],
    options_mz: ["Democracy", "Bureaucracy", "Autocracy", "Theocracy"],
    ans: 1,
    exp: "Bureaucracy = government run by state officials/bureaucrats.",
    exp_mz: "Bureaucracy awmzia chu sawrkar hna thawk, officer ten ram an awpna tihna.",
    topic: "One Word"
  },
  {
    id: 18,
    q: "Choose correct conjunction: He is slow ___ he is steady.",
    q_mz: "Conjunction dik thlang rawh: He is slow ___ he is steady.",
    options: ["and", "but", "or", "because"],
    options_mz: ["and", "but", "or", "because"],
    ans: 1,
    exp: "'But' shows contrast between two opposite qualities: slow vs steady.",
    exp_mz: "'But' hian thil inpersan a entir: muang si, fimkhur si.",
    topic: "Conjunction"
  },
  {
    id: 19,
    q: "Change voice: 'They will build a house.'",
    q_mz: "Voice thlak rawh: 'They will build a house.'",
    options: ["A house will build by them.", "A house will be built by them.", "A house is built by them.", "A house was built by them."],
    options_mz: ["A house will build by them.", "A house will be built by them.", "A house is built by them.", "A house was built by them."],
    ans: 1,
    exp: "Future Simple Passive: will + be + V3. 'will build' → 'will be built'.",
    exp_mz: "Future Simple Passive ah chuan will + be + V3 hman tur. 'will build' → 'will be built'.",
    topic: "Voice"
  },
  {
    id: 20,
    q: "Synonym of 'Ephemeral':",
    q_mz: "'Ephemeral' tih nen a inhnaih ber:",
    options: ["Permanent", "Temporary", "Eternal", "Strong"],
    options_mz: ["Hlun", "Rei lo te", "Kumkhua", "Chak"],
    ans: 1,
    exp: "Ephemeral means lasting for a very short time; temporary.",
    exp_mz: "Ephemeral awmzia chu rei lo te chhung chauh awm, ral leh mai tihna.",
    topic: "Vocabulary"
  },
  {
    id: 21,
    q: "Choose correct modal: You ___ respect your elders.",
    q_mz: "Modal dik thlang rawh: You ___ respect your elders.",
    options: ["can", "must", "may", "might"],
    options_mz: ["can", "must", "may", "might"],
    ans: 1,
    exp: "'Must' shows obligation or moral duty.",
    exp_mz: "'Must' hian tih ngei ngei tur, mawhphurhna a entir.",
    topic: "Modals"
  },
  {
    id: 22,
    q: "Antonym of 'Vague':",
    q_mz: "'Vague' tih letling chu:",
    options: ["Unclear", "Clear", "Cloudy", "Blurred"],
    options_mz: ["Chi lo", "Chi ang", "Chhum", "Phe"],
    ans: 1,
    exp: "Vague means unclear. Opposite is clear or definite.",
    exp_mz: "Vague awmzia chu chi lo tihna. A letling chu chiang tihna.",
    topic: "Vocabulary"
  },
  {
    id: 23,
    q: "Correct order: 'She a beautiful red silk saree bought.'",
    q_mz: "Thu rem dik thlang rawh:",
    options: ["She bought a beautiful red silk saree.", "She a beautiful silk red saree bought.", "A beautiful red silk saree she bought.", "She bought a red beautiful silk saree."],
    options_mz: ["She bought a beautiful red silk saree.", "She a beautiful silk red saree bought.", "A beautiful red silk saree she bought.", "She bought a red beautiful silk saree."],
    ans: 0,
    exp: "Order of adjectives: Opinion-Size-Age-Shape-Color-Origin-Material. Beautiful(opinion) red(color) silk(material).",
    exp_mz: "Adjective indawt dan: Ngaihdan-Lian/Zia-Rang/Hlui-Pianhmang-Rawng-Lo chhuahna-Siamna. Beautiful red silk.",
    topic: "Syntax"
  },
  {
    id: 24,
    q: "Meaning of 'To burn the midnight oil':",
    q_mz: "'To burn the midnight oil' awmzia:",
    options: ["Waste oil", "Work late night", "Sleep early", "Party all night"],
    options_mz: ["Oil paih", "Zan rei tak thawk", "Hma taka mu", "Zan khuain party"],
    ans: 1,
    exp: "Burn the midnight oil means to work late into the night.",
    exp_mz: "Burn the midnight oil awmzia chu zan rei tak thleng hna thawk tihna.",
    topic: "Idioms"
  },
  {
    id: 25,
    q: "Choose correct determiner: ___ student must bring his book.",
    q_mz: "Determiner dik thlang rawh: ___ student must bring his book.",
    options: ["Every", "All", "Some", "Few"],
    options_mz: ["Every", "All", "Some", "Few"],
    ans: 0,
    exp: "'Every' is used with singular noun 'student'. 'All students' would be plural.",
    exp_mz: "'Every' hian mal noun 'student' a keng. 'All' chu 'students' nen hman tur.",
    topic: "Determiners"
  },
  {
    id: 26,
    q: "Synonym of 'Prudent':",
    q_mz: "'Prudent' nen a inhnaih ber:",
    options: ["Foolish", "Wise", "Rash", "Careless"],
    options_mz: ["A", "Fimkhur leh fing", "Hmanhmawh", "Fimkhur lo"],
    ans: 1,
    exp: "Prudent means acting with care and thought for future; wise.",
    exp_mz: "Prudent awmzia chu nakin thlir a fimkhur taka thil ti, fing tihna.",
    topic: "Vocabulary"
  },
  {
    id: 27,
    q: "Error: 'He is junior than me.'",
    q_mz: "Tihsual: 'He is junior than me.'",
    options: ["He", "is", "junior", "than me"],
    options_mz: ["He", "is", "junior", "than me"],
    ans: 3,
    exp: "Comparatives like junior, senior, superior take 'to' not 'than'. Correct: junior to me.",
    exp_mz: "Junior, senior, superior ang chi hian 'than' ni lovin 'to' a keng. A dik chu: junior to me.",
    topic: "Error Spotting"
  },
  {
    id: 28,
    q: "Passive: 'Who wrote this book?'",
    q_mz: "Passive: 'Who wrote this book?'",
    options: ["By whom this book was written?", "By whom was this book written?", "Who was this book written by?", "By whom is this book written?"],
    options_mz: ["By whom this book was written?", "By whom was this book written?", "Who was this book written by?", "By whom is this book written?"],
    ans: 1,
    exp: "Active 'Who' becomes 'By whom' in passive. 'wrote' → 'was written'.",
    exp_mz: "Active a 'Who' kha Passive ah 'By whom' a ni. 'wrote' → 'was written'.",
    topic: "Voice"
  },
  {
    id: 29,
    q: "One word: 'Killing of one's own father':",
    q_mz: "Mahni pa thattu sawina thumal khat:",
    options: ["Homicide", "Suicide", "Patricide", "Matricide"],
    options_mz: ["Homicide", "Suicide", "Patricide", "Matricide"],
    ans: 2,
    exp: "Patricide = killing father. Matricide = killing mother.",
    exp_mz: "Patricide awmzia chu mahni pa thattu tihna. Matricide chu nu thattu.",
    topic: "One Word"
  },
  {
    id: 30,
    q: "Choose correct tense: I ___ here since 2010.",
    q_mz: "Tense dik thlang rawh: I ___ here since 2010.",
    options: ["live", "am living", "have lived", "lived"],
    options_mz: ["live", "am living", "have lived", "lived"],
    ans: 2,
    exp: "'Since 2010' shows action started in past and continues. Use Present Perfect: have lived.",
    exp_mz: "'Since 2010' hian hun kal tawh atanga tun thleng a entir. Present Perfect 'have lived' hman tur.",
    topic: "Tense"
  },
  {
    id: 31,
    q: "Synonym of 'Obsolete':",
    q_mz: "'Obsolete' nen a inhnaih ber:",
    options: ["Modern", "Outdated", "New", "Useful"],
    options_mz: ["Tun lai", "Hman lai/Hlun tawh lo", "Thar", "Hmang tlak"],
    ans: 1,
    exp: "Obsolete means no longer used; outdated.",
    exp_mz: "Obsolete awmzia chu hman tawh loh, hlui tawh tihna.",
    topic: "Vocabulary"
  },
  {
    id: 32,
    q: "Fill in: She is ___ M.A. in English.",
    q_mz: "Thun dik thlang rawh: She is ___ M.A. in English.",
    options: ["a", "an", "the", "no article"],
    options_mz: ["a", "an", "the", "article awm lo"],
    ans: 1,
    exp: "M.A. starts with vowel sound 'em', so use 'an'. An M.A.",
    exp_mz: "M.A. hi 'em' riin a intan, chuvangin 'an' hman tur. An M.A.",
    topic: "Articles"
  },
  {
    id: 33,
    q: "Antonym of 'Transparent':",
    q_mz: "'Transparent' tih letling chu:",
    options: ["Clear", "Opaque", "Visible", "Clean"],
    options_mz: ["Fian", "Chhah/Phe lo", "Lang", "Fai"],
    ans: 1,
    exp: "Transparent means allowing light through. Opposite is opaque.",
    exp_mz: "Transparent awmzia chu eng kal tlang thei tihna. A letling chu opaque, eng kal tlang thei lo.",
    topic: "Vocabulary"
  },
  {
    id: 34,
    q: "Meaning of 'To take French leave':",
    q_mz: "'To take French leave' awmzia:",
    options: ["Go to France", "Leave without permission", "Take holiday", "Learn French"],
    options_mz: ["France kal", "Phalna la lova kal", "Chawlh la", "French zir"],
    ans: 1,
    exp: "Take French leave means to leave without permission or notice.",
    exp_mz: "Take French leave awmzia chu phalna la lova, hrilh lova kal bo tihna.",
    topic: "Idioms"
  },
  {
    id: 35,
    q: "Correct sentence:",
    q_mz: "Thu dik thlang rawh:",
    options: ["He don't know", "He doesn't knows", "He doesn't know", "He not know"],
    options_mz: ["He don't know", "He doesn't knows", "He doesn't know", "He not know"],
    ans: 2,
    exp: "3rd person singular + doesn't + V1. He doesn't know.",
    exp_mz: "3rd person singular ah doesn't + V1 hman tur. He doesn't know.",
    topic: "Grammar"
  },
  {
    id: 36,
    q: "One word: 'A person who walks in sleep':",
    q_mz: "Muthilh laia kal mi sawina:",
    options: ["Dreamer", "Somnambulist", "Insomniac", "Nightmare"],
    options_mz: ["Dreamer", "Somnambulist", "Insomniac", "Nightmare"],
    ans: 1,
    exp: "Somnambulist = sleepwalker. Somnus=sleep, ambulare=walk.",
    exp_mz: "Somnambulist awmzia chu muthilh laia kal mi tihna.",
    topic: "One Word"
  },
  {
    id: 37,
    q: "Change to indirect: She said, 'Will you help me?'",
    q_mz: "Indirect ah thlak rawh: She said, 'Will you help me?'",
    options: ["She asked if I will help her", "She asked if I would help her", "She said that I will help her", "She asked will I help her"],
    options_mz: ["She asked if I will help her", "She asked if I would help her", "She said that I will help her", "She asked will I help her"],
    ans: 1,
    exp: "Question → asked if. Will → would. You → I, me → her.",
    exp_mz: "Question chu asked if a ni. Will → would. You → I, me → her.",
    topic: "Narration"
  },
  {
    id: 38,
    q: "Fill in: The sun ___ in the east.",
    q_mz: "Thun dik thlang rawh: The sun ___ in the east.",
    options: ["rise", "rises", "rose", "risen"],
    options_mz: ["rise", "rises", "rose", "risen"],
    ans: 1,
    exp: "Universal truth = Present Simple. 3rd person singular + V1+s = rises.",
    exp_mz: "Universal truth chu Present Simple a ni. 3rd person singular + V1+s = rises.",
    topic: "Tense"
  },
  {
    id: 39,
    q: "Synonym of 'Pacify':",
    q_mz: "'Pacify' nen a inhnaih ber:",
    options: ["Anger", "Calm", "Disturb", "Excite"],
    options_mz: ["Ti thinur", "Tithawidam", "Titibuai", "Tiphur"],
    ans: 1,
    exp: "Pacify means to calm or make peaceful.",
    exp_mz: "Pacify awmzia chu tithawidam, thlem tihna.",
    topic: "Vocabulary"
  },
  {
    id: 40,
    q: "Choose correct preposition: He died ___ cancer.",
    q_mz: "Preposition dik thlang rawh: He died ___ cancer.",
    options: ["from", "of", "by", "with"],
    options_mz: ["from", "of", "by", "with"],
    ans: 1,
    exp: "Die of = disease. Die from = other causes. Die by = violence. Cancer is disease.",
    exp_mz: "Die of = natna. Die from = chhan dang. Die by = tharum thawhna. Cancer chu natna a ni.",
    topic: "Preposition"
  },
  {
    id: 41,
    q: "Antonym of 'Amateur':",
    q_mz: "'Amateur' tih letling chu:",
    options: ["Beginner", "Professional", "Learner", "Student"],
    options_mz: ["Tir", "Professional", "Zirtu", "Zirlai"],
    ans: 1,
    exp: "Amateur = non-professional. Opposite is professional.",
    exp_mz: "Amateur awmzia chu eizawnna ni lo, tui vang chauh. A letling chu professional.",
    topic: "Vocabulary"
  },
  {
    id: 42,
    q: "Error: 'One of my friends are coming.'",
    q_mz: "Tihsual: 'One of my friends are coming.'",
    options: ["One", "of my friends", "are", "coming"],
    options_mz: ["One", "of my friends", "are", "coming"],
    ans: 2,
    exp: "'One of' takes singular verb. Correct: One of my friends is coming.",
    exp_mz: "'One of' hnuah verb mal hman tur. A dik chu: One of my friends is coming.",
    topic: "Error Spotting"
  },
  {
    id: 43,
    q: "One word: 'Fear of confined spaces':",
    q_mz: "Hmun tawt hlauhna sawina:",
    options: ["Acrophobia", "Claustrophobia", "Hydrophobia", "Agoraphobia"],
    options_mz: ["Acrophobia", "Claustrophobia", "Hydrophobia", "Agoraphobia"],
    ans: 1,
    exp: "Claustrophobia = fear of confined spaces. Acrophobia = fear of heights.",
    exp_mz: "Claustrophobia awmzia chu hmun tawt, zim hlauhna tihna.",
    topic: "One Word"
  },
  {
    id: 44,
    q: "Choose correct verb: The news ___ good.",
    q_mz: "Verb dik thlang rawh: The news ___ good.",
    options: ["are", "is", "were", "have"],
    options_mz: ["are", "is", "were", "have"],
    ans: 1,
    exp: "'News' is singular uncountable noun. Use singular verb 'is'.",
    exp_mz: "'News' hi mal noun chhiar theih loh a ni. Verb mal 'is' hman tur.",
    topic: "Subject-Verb"
  },
  {
    id: 45,
    q: "Meaning of 'To call a spade a spade':",
    q_mz: "'To call a spade a spade' awmzia:",
    options: ["To lie", "To speak frankly", "To dig", "To play cards"],
    options_mz: ["Dawt sawi", "Tlang taka sawi", "Lai", "Cards khel"],
    ans: 1,
    exp: "Call a spade a spade means to speak frankly and directly.",
    exp_mz: "Call a spade a spade awmzia chu thu zep lova tlang taka sawi tihna.",
    topic: "Idioms"
  },
  {
    id: 46,
    q: "Passive: 'Someone has stolen my book.'",
    q_mz: "Passive: 'Someone has stolen my book.'",
    options: ["My book has stolen", "My book has been stolen", "My book is stolen", "My book was stolen"],
    options_mz: ["My book has stolen", "My book has been stolen", "My book is stolen", "My book was stolen"],
    ans: 1,
    exp: "Present Perfect Active → Present Perfect Passive: has/have been + V3. Someone can be omitted.",
    exp_mz: "Present Perfect Active chu Passive ah has/have been + V3. Someone chu sawi loh theih.",
    topic: "Voice"
  },
  {
    id: 47,
    q: "Synonym of 'Candid':",
    q_mz: "'Candid' nen a inhnaih ber:",
    options: ["Secret", "Frank", "Hidden", "Dishonest"],
    options_mz: ["Thuruk", "Tlang", "Bihruk", "Dawheh"],
    ans: 1,
    exp: "Candid means frank, open and honest in speech.",
    exp_mz: "Candid awmzia chu tlang taka sawi, zep nei lo tihna.",
    topic: "Vocabulary"
  },
  {
    id: 48,
    q: "Fill in: I am looking forward ___ you.",
    q_mz: "Thun dik thlang rawh: I am looking forward ___ you.",
    options: ["to meet", "to meeting", "for meeting", "meet"],
    options_mz: ["to meet", "to meeting", "for meeting", "meet"],
    ans: 1,
    exp: "'Looking forward to' is followed by V1+ing (gerund). To meeting.",
    exp_mz: "'Looking forward to' hnuah hian V1+ing (gerund) hman tur. To meeting.",
    topic: "Gerund"
  },
  {
    id: 49,
    q: "Antonym of 'Optimistic':",
    q_mz: "'Optimistic' tih letling chu:",
    options: ["Hopeful", "Pessimistic", "Positive", "Cheerful"],
    options_mz: ["Beiseina nei", "Beidawng", "Positive", "Hlim"],
    ans: 1,
    exp: "Optimistic = hopeful. Opposite is pessimistic = expecting bad.",
    exp_mz: "Optimistic awmzia chu beiseina nei tihna. A letling chu pessimistic, beidawng tihna.",
    topic: "Vocabulary"
  },
  {
    id: 50,
    q: "Choose correct: 'She is one of the girls who ___ here.'",
    q_mz: "Thumal dik thlang rawh: 'She is one of the girls who ___ here.'",
    options: ["lives", "live", "living", "lived"],
    options_mz: ["lives", "live", "living", "lived"],
    ans: 1,
    exp: "'Who' refers to 'girls' (plural), so use plural verb 'live'.",
    exp_mz: "'Who' hian 'girls' (tam lam) a kawk, chuvangin verb tam lam 'live' hman tur.",
    topic: "Subject-Verb"
  },
  {
    id: 51,
    q: "She said, 'I had already eaten.'",
    q_mz: "She said, 'I had already eaten.'",
    options: ["She said that she had already eaten", "She said that she has already eaten", "She said that I had already eaten", "She said that she already ate"],
    options_mz: ["She said that she had already eaten", "She said that she has already eaten", "She said that I had already eaten", "She said that she already ate"],
    ans: 0,
    exp: "Past Perfect remains Past Perfect. Had eaten → had eaten. I → she.",
    exp_mz: "Past Perfect chu thlak loh. Had eaten → had eaten tho. I kha she ah.",
    topic: "Narration"
  },
  {
    id: 52,
    q: "He said to me, 'You must work hard.'",
    q_mz: "He said to me, 'You must work hard.'",
    options: ["He told me that I must work hard", "He told me that I had to work hard", "He advised me to work hard", "Both A and C"],
    options_mz: ["He told me that I must work hard", "He told me that I had to work hard", "He advised me to work hard", "A leh C ve ve"],
    ans: 3,
    exp: "Must = must/had to OR advised to. Both correct. You → I.",
    exp_mz: "Must chu must tho emaw had to a ni thei. Advised to pawh a dik. You kha I ah.",
    topic: "Narration"
  },
  {
    id: 53,
    q: "She said, 'Would that I were a queen!'",
    q_mz: "She said, 'Would that I were a queen!'",
    options: ["She wished that she were a queen", "She said that she would be a queen", "She wished that she was a queen", "She said she were a queen"],
    options_mz: ["She wished that she were a queen", "She said that she would be a queen", "She wished that she was a queen", "She said she were a queen"],
    ans: 0,
    exp: "Would that = wished that. Were remains were in imaginary.",
    exp_mz: "Would that chu wished that a ni. Were chu were tho imaginary ah chuan.",
    topic: "Narration"
  },
  {
    id: 54,
    q: "He said to me, 'Lend me your book.'",
    q_mz: "He said to me, 'Lend me your book.'",
    options: ["He requested me to lend him my book", "He asked me to lend him my book", "He told me to lend him my book", "All are correct"],
    options_mz: ["He requested me to lend him my book", "He asked me to lend him my book", "He told me to lend him my book", "A zavaiin a dik"],
    ans: 3,
    exp: "Imperative = requested/asked/told to. Me → him, your → my.",
    exp_mz: "Imperative chu requested/asked/told to a ni thei. Me kha him, your kha my ah.",
    topic: "Narration"
  },
  {
    id: 55,
    q: "She said, 'Oh! I have lost my pen.'",
    q_mz: "She said, 'Oh! I have lost my pen.'",
    options: ["She exclaimed with sorrow that she had lost her pen", "She said that she has lost her pen", "She exclaimed that she had lost her pen", "She exclaimed with joy that she lost her pen"],
    options_mz: ["She exclaimed with sorrow that she had lost her pen", "She said that she has lost her pen", "She exclaimed that she had lost her pen", "She exclaimed with joy that she lost her pen"],
    ans: 0,
    exp: "Oh! = sorrow. Have lost → had lost, I → she, my → her.",
    exp_mz: "Oh! chu lungngaihna. Have lost kha had lost ah, I kha she, my kha her ah.",
    topic: "Narration"
  },
  {
    id: 56,
    q: "He said, 'Let it rain.'",
    q_mz: "He said, 'Let it rain.'",
    options: ["He said to let it rain", "He wished that it might rain", "He prayed that it might rain", "He suggested that it should rain"],
    options_mz: ["He said to let it rain", "He wished that it might rain", "He prayed that it might rain", "He suggested that it should rain"],
    ans: 1,
    exp: "Let in wish = wished that + might. Let it rain = wished that it might rain.",
    exp_mz: "Let in duhna ah chuan wished that + might hman tur. Let it rain = wished that it might rain.",
    topic: "Narration"
  },
  {
    id: 57,
    q: "She said to me, 'Wait here till I return.'",
    q_mz: "She said to me, 'Wait here till I return.'",
    options: ["She told me to wait there till she returned", "She told me to wait here till she return", "She asked me to wait there till she return", "She told me wait there till she returned"],
    options_mz: ["She told me to wait there till she returned", "She told me to wait here till she return", "She asked me to wait there till she return", "She told me wait there till she returned"],
    ans: 0,
    exp: "Here → there, I → she, return → returned.",
    exp_mz: "Here kha there ah thlak. I kha she, return kha returned ah.",
    topic: "Narration"
  },
  {
    id: 58,
    q: "He said, 'I am going to Delhi next week.'",
    q_mz: "He said, 'I am going to Delhi next week.'",
    options: ["He said that he is going to Delhi next week", "He said that he was going to Delhi the following week", "He said that I was going to Delhi next week", "He said that he was going to Delhi next week"],
    options_mz: ["He said that he is going to Delhi next week", "He said that he was going to Delhi the following week", "He said that I was going to Delhi next week", "He said that he was going to Delhi next week"],
    ans: 1,
    exp: "Am going → was going, I → he, next week → the following week.",
    exp_mz: "Am going kha was going ah thlak. I kha he, next week kha the following week ah.",
    topic: "Narration"
  },
  {
    id: 59,
    q: "She said, 'I used to swim daily.'",
    q_mz: "She said, 'I used to swim daily.'",
    options: ["She said that she used to swim daily", "She said that she use to swim daily", "She said that I used to swim daily", "She said that she uses to swim daily"],
    options_mz: ["She said that she used to swim daily", "She said that she use to swim daily", "She said that I used to swim daily", "She said that she uses to swim daily"],
    ans: 0,
    exp: "Used to remains used to. I → she.",
    exp_mz: "Used to chu thlak loh. Used to = used to tho. I kha she ah thlak.",
    topic: "Narration"
  },
  {
    id: 60,
    q: "He said to me, 'Do you know him?'",
    q_mz: "He said to me, 'Do you know him?'",
    options: ["He asked me if I know him", "He asked me if I knew him", "He asked me do I know him", "He asked me that I knew him"],
    options_mz: ["He asked me if I know him", "He asked me if I knew him", "He asked me do I know him", "He asked me that I knew him"],
    ans: 1,
    exp: "Do you know → if I knew. Present → Past, you → I.",
    exp_mz: "Do you know kha if I knew ah thlak. Present → Past, you → I.",
    topic: "Narration"
  },
  // Antonyms & Synonyms 61-75
  {
    id: 61,
    q: "Synonym of 'Diligent':",
    q_mz: "'Diligent' nen a inhnaih ber:",
    options: ["Lazy", "Hardworking", "Careless", "Slow"],
    options_mz: ["Thatche", "Taima", "Fimkhur lo", "Muang"],
    ans: 1,
    exp: "Diligent means showing care and effort; hardworking.",
    exp_mz: "Diligent awmzia chu taima, thahnem ngai tihna.",
    topic: "Vocabulary"
  },
  {
    id: 62,
    q: "Antonym of 'Scarce':",
    q_mz: "'Scarce' tih letling chu:",
    options: ["Rare", "Abundant", "Little", "Few"],
    options_mz: ["Vang", "Tam", "Tlem", "Tlemte"],
    ans: 1,
    exp: "Scarce means insufficient. Opposite is abundant/plentiful.",
    exp_mz: "Scarce awmzia chu tlem, vang tihna. A letling chu tam, abundant.",
    topic: "Vocabulary"
  },
  {
    id: 63,
    q: "Synonym of 'Enormous':",
    q_mz: "'Enormous' nen a inhnaih ber:",
    options: ["Tiny", "Huge", "Small", "Little"],
    options_mz: ["Te", "Lian", "Te", "Tlem"],
    ans: 1,
    exp: "Enormous means very large; huge, gigantic.",
    exp_mz: "Enormous awmzia chu lian em em, nasat zia tihna.",
    topic: "Vocabulary"
  },
  {
    id: 64,
    q: "Antonym of 'Feeble':",
    q_mz: "'Feeble' tih letling chu:",
    options: ["Weak", "Strong", "Tired", "Sick"],
    options_mz: ["Chak lo", "Chak", "Chau", "Dam lo"],
    ans: 1,
    exp: "Feeble means weak. Opposite is strong.",
    exp_mz: "Feeble awmzia chu chak lo, derthawng tihna. A letling chu chak.",
    topic: "Vocabulary"
  },
  {
    id: 65,
    q: "Synonym of 'Hostile':",
    q_mz: "'Hostile' nen a inhnaih ber:",
    options: ["Friendly", "Unfriendly", "Kind", "Loving"],
    options_mz: ["Thian", "Thian lo/Ral", "Ngilnei", "Hmangaih"],
    ans: 1,
    exp: "Hostile means unfriendly or antagonistic.",
    exp_mz: "Hostile awmzia chu thian lo, ral, inngeih lo tihna.",
    topic: "Vocabulary"
  },
  {
    id: 66,
    q: "Antonym of 'Expand':",
    q_mz: "'Expand' tih letling chu:",
    options: ["Increase", "Contract", "Enlarge", "Grow"],
    options_mz: ["Tipung", "Tite", "Tilian", "Thang"],
    ans: 1,
    exp: "Expand means become larger. Opposite is contract = become smaller.",
    exp_mz: "Expand awmzia chu tihlian tihna. A letling chu contract = tite tihna.",
    topic: "Vocabulary"
  },
  {
    id: 67,
    q: "Synonym of 'Genuine':",
    q_mz: "'Genuine' nen a inhnaih ber:",
    options: ["Fake", "Authentic", "False", "Artificial"],
    options_mz: ["Lem", "Tak tak", "Dawt", "Siamchawp"],
    ans: 1,
    exp: "Genuine means authentic, real, true.",
    exp_mz: "Genuine awmzia chu tak tak, dik tak tihna.",
    topic: "Vocabulary"
  },
  {
    id: 68,
    q: "Antonym of 'Include':",
    q_mz: "'Include' tih letling chu:",
    options: ["Add", "Exclude", "Contain", "Insert"],
    options_mz: ["Telh", "Tel lo", "Keng", "Rawlh"],
    ans: 1,
    exp: "Include means to contain. Opposite is exclude = leave out.",
    exp_mz: "Include awmzia chu telh tihna. A letling chu exclude = tel lo tihna.",
    topic: "Vocabulary"
  },
  {
    id: 69,
    q: "Synonym of 'Imitate':",
    q_mz: "'Imitate' nen a inhnaih ber:",
    options: ["Create", "Copy", "Invent", "Original"],
    options_mz: ["Siam", "Entawn", "Hmu chhuak", "A tir"],
    ans: 1,
    exp: "Imitate means to copy or mimic someone's behavior.",
    exp_mz: "Imitate awmzia chu mi dang entawn, an anga awm tihna.",
    topic: "Vocabulary"
  },
  {
    id: 70,
    q: "Antonym of 'Cruel':",
    q_mz: "'Cruel' tih letling chu:",
    options: ["Kind", "Harsh", "Rude", "Evil"],
    options_mz: ["Ngilnei", "Khauh", "Mawilo", "Sual"],
    ans: 0,
    exp: "Cruel means causing pain. Opposite is kind = gentle, caring.",
    exp_mz: "Cruel awmzia chu mi tihrehawm thiam, khawngaihna nei lo. A letling chu ngilnei.",
    topic: "Vocabulary"
  },
  {
    id: 71,
    q: "Synonym of 'Vivid':",
    q_mz: "'Vivid' nen a inhnaih ber:",
    options: ["Dull", "Clear", "Vague", "Dim"],
    options_mz: ["Dai", "Chi ang", "Chi lo", "Eng lo"],
    ans: 1,
    exp: "Vivid means producing clear images; bright and distinct.",
    exp_mz: "Vivid awmzia chu chiang em em, mitthla a lang chiang tihna.",
    topic: "Vocabulary"
  },
  {
    id: 72,
    q: "Antonym of 'Arrive':",
    q_mz: "'Arrive' tih letling chu:",
    options: ["Come", "Depart", "Reach", "Enter"],
    options_mz: ["Lo kal", "Kal", "Thleng", "Lut"],
    ans: 1,
    exp: "Arrive means to reach. Opposite is depart = to leave.",
    exp_mz: "Arrive awmzia chu thleng tihna. A letling chu depart = kal/chhuak tihna.",
    topic: "Vocabulary"
  },
  {
    id: 73,
    q: "Synonym of 'Tedious':",
    q_mz: "'Tedious' nen a inhnaih ber:",
    options: ["Interesting", "Boring", "Exciting", "Short"],
    options_mz: ["Nawm", "Ninawm", "Phurawm", "Tawi"],
    ans: 1,
    exp: "Tedious means too long, slow, or dull; boring.",
    exp_mz: "Tedious awmzia chu ninawm, rei, tihchak loh tihna.",
    topic: "Vocabulary"
  },
  {
    id: 74,
    q: "Antonym of 'Guilty':",
    q_mz: "'Guilty' tih letling chu:",
    options: ["Criminal", "Innocent", "Blame", "Wrong"],
    options_mz: ["Misual", "Thiam lo", "Mawhphur", "Dik lo"],
    ans: 1,
    exp: "Guilty means responsible for wrong. Opposite is innocent.",
    exp_mz: "Guilty awmzia chu thiam loh chang, mawhphur tihna. A letling chu innocent = thiam lohna nei lo.",
    topic: "Vocabulary"
  },
  {
    id: 75,
    q: "Synonym of 'Frugal':",
    q_mz: "'Frugal' nen a inhnaih ber:",
    options: ["Wasteful", "Economical", "Generous", "Rich"],
    options_mz: ["Renkawh", "Renchem", "Pek thei", "Haosa"],
    ans: 1,
    exp: "Frugal means economical, avoiding waste; careful with money.",
    exp_mz: "Frugal awmzia chu renchem, sum hmang fimkhur tihna.",
    topic: "Vocabulary"
  },
  // Direct-Indirect More 76-85
  {
    id: 76,
    q: "He said, 'What a fool I am!'",
    q_mz: "He said, 'What a fool I am!'",
    options: ["He exclaimed that he was a great fool", "He said that what a fool he was", "He exclaimed what a fool he was", "He said he is a fool"],
    options_mz: ["He exclaimed that he was a great fool", "He said that what a fool he was", "He exclaimed what a fool he was", "He said he is a fool"],
    ans: 0,
    exp: "Exclamatory: exclaimed that + Sub + was + a great fool. I → he, am → was.",
    exp_mz: "Exclamatory ah exclaimed that + Sub + was + a great fool. I kha he, am kha was ah.",
    topic: "Narration"
  },
  {
    id: 77,
    q: "She said to me, 'Can you speak English?'",
    q_mz: "She said to me, 'Can you speak English?'",
    options: ["She asked me if I can speak English", "She asked me if I could speak English", "She said to me can I speak English", "She asked me that I could speak English"],
    options_mz: ["She asked me if I can speak English", "She asked me if I could speak English", "She said to me can I speak English", "She asked me that I could speak English"],
    ans: 1,
    exp: "Can → could, you → I. Question: asked if.",
    exp_mz: "Can kha could ah thlak, you kha I ah. Question ah asked if hman tur.",
    topic: "Narration"
  },
  {
    id: 78,
    q: "He said, 'May God bless you!'",
    q_mz: "He said, 'May God bless you!'",
    options: ["He prayed that God might bless me", "He said that may God bless me", "He wished that God bless me", "He prayed that God may bless me"],
    options_mz: ["He prayed that God might bless me", "He said that may God bless me", "He wished that God bless me", "He prayed that God may bless me"],
    ans: 0,
    exp: "Optative: prayed/wished that + might. May → might, you → me.",
    exp_mz: "Optative ah prayed/wished that + might hman tur. May kha might ah, you kha me ah.",
    topic: "Narration"
  },
  {
    id: 79,
    q: "She said, 'I wish I knew the answer.'",
    q_mz: "She said, 'I wish I knew the answer.'",
    options: ["She said that she wished she knew the answer", "She wished that she knew the answer", "She said that she wished she had known the answer", "She said she wish she knew"],
    options_mz: ["She said that she wished she knew the answer", "She said that she wished she had known the answer", "She said that she wished she knew the answer", "She said she wish she knew"],
    ans: 0,
    exp: "Wish sentence: no change in 'knew'. I → she. Wish remains wish.",
    exp_mz: "Wish sentence ah knew chu thlak loh. I kha she ah thlak. Wish chu wish tho.",
    topic: "Narration"
  },
  {
    id: 80,
    q: "He said to me, 'Let's play.'",
    q_mz: "He said to me, 'Let's play.'",
    options: ["He proposed to me that we should play", "He suggested to me that we should play", "He told me let us play", "Both A and B"],
    options_mz: ["He proposed to me that we should play", "He suggested to me that we should play", "He told me let us play", "A leh B ve ve"],
    ans: 3,
    exp: "Let's = proposed/suggested + that + we should.",
    exp_mz: "Let's chu proposed/suggested + that + we should a ni.",
    topic: "Narration"
  },
  {
    id: 81,
    q: "She said, 'The sun sets in the west.'",
    q_mz: "She said, 'The sun sets in the west.'",
    options: ["She said that the sun set in the west", "She said that the sun sets in the west", "She said the sun sets in west", "She told that sun sets in west"],
    options_mz: ["She said that the sun set in the west", "She said that the sun sets in the west", "She said the sun sets in west", "She told that sun sets in west"],
    ans: 1,
    exp: "Universal Truth = no tense change. Sets = sets.",
    exp_mz: "Universal Truth chu tense thlak loh. Sets = sets tho.",
    topic: "Narration"
  },
  {
    id: 82,
    q: "He said, 'I have been to Delhi twice.'",
    q_mz: "He said, 'I have been to Delhi twice.'",
    options: ["He said that he has been to Delhi twice", "He said that he had been to Delhi twice", "He said that I had been to Delhi twice", "He said that he had gone to Delhi twice"],
    options_mz: ["He said that he has been to Delhi twice", "He said that he had been to Delhi twice", "He said that I had been to Delhi twice", "He said that he had gone to Delhi twice"],
    ans: 1,
    exp: "Present Perfect → Past Perfect: have been → had been. I → he.",
    exp_mz: "Present Perfect kha Past Perfect ah thlak: have been → had been. I kha he ah.",
    topic: "Narration"
  },
  {
    id: 83,
    q: "She said to me, 'Why are you crying?'",
    q_mz: "She said to me, 'Why are you crying?'",
    options: ["She asked me why I am crying", "She asked me why I was crying", "She asked me why was I crying", "She said to me why I was crying"],
    options_mz: ["She asked me why I am crying", "She asked me why I was crying", "She asked me why was I crying", "She said to me why I was crying"],
    ans: 1,
    exp: "Wh-question: asked + why + Sub + V. Are → was, you → I.",
    exp_mz: "Wh-question ah asked + why + Sub + V. Are kha was ah, you kha I ah.",
    topic: "Narration"
  },
  {
    id: 84,
    q: "He said, 'Be quiet.'",
    q_mz: "He said, 'Be quiet.'",
    options: ["He ordered to be quiet", "He told to be quiet", "He asked to be quiet", "He said to be quiet"],
    options_mz: ["He ordered to be quiet", "He told to be quiet", "He asked to be quiet", "He said to be quiet"],
    ans: 0,
    exp: "Imperative command = ordered to + V1. Be quiet = ordered to be quiet.",
    exp_mz: "Imperative thupek chu ordered to + V1 a ni. Be quiet = ordered to be quiet.",
    topic: "Narration"
  },
  {
    id: 85,
    q: "She said, 'I must finish this today.'",
    q_mz: "She said, 'I must finish this today.'",
    options: ["She said that she must finish this today", "She said that she had to finish that that day", "She said that she must finish that day", "Both B and C"],
    options_mz: ["She said that she must finish this today", "She said that she had to finish that that day", "She said that she must finish that day", "B leh C ve ve"],
    ans: 3,
    exp: "Must = must/had to. This → that, today → that day. Both correct.",
    exp_mz: "Must chu must tho emaw had to a ni thei. This → that, today → that day. A pahnihin a dik.",
    topic: "Narration"
  },
  // Idioms 86-95
  {
    id: 86,
    q: "Meaning of 'Break the ice':",
    q_mz: "'Break the ice' awmzia:",
    options: ["To break ice", "To start conversation", "To fight", "To be cold"],
    options_mz: ["Vur ti keh", "Inbiakna tan", "Insuak", "Vawt"],
    ans: 1,
    exp: "Break the ice means to start conversation in a social situation.",
    exp_mz: "Break the ice awmzia chu mi inhmuh khawmna a inbiakna tan, boruak tihnem tihna.",
    topic: "Idioms"
  },
  {
    id: 87,
    q: "Meaning of 'Hit the nail on the head':",
    q_mz: "'Hit the nail on the head' awmzia:",
    options: ["To hit nail", "To be exactly right", "To work hard", "To miss target"],
    options_mz: ["Thingzai vuak", "A dik chat sawi", "Thawkrim", "Tumtirh thelh"],
    ans: 1,
    exp: "Hit the nail on the head means to be exactly right about something.",
    exp_mz: "Hit the nail on the head awmzia chu thil dik tak, a laili tak sawi fuh tihna.",
    topic: "Idioms"
  },
  {
    id: 88,
    q: "Meaning of 'Let the cat out of the bag':",
    q_mz: "'Let the cat out of the bag' awmzia:",
    options: ["To free cat", "To reveal secret", "To buy bag", "To catch cat"],
    options_mz: ["Zawhte chhuah", "Thuruk phawrh", "Ip lei", "Zawhte man"],
    ans: 1,
    exp: "Let the cat out of the bag means to reveal a secret accidentally.",
    exp_mz: "Let the cat out of the bag awmzia chu thuruk lo phawrh palh tihna.",
    topic: "Idioms"
  },
  {
    id: 89,
    q: "Meaning of 'Once in a blue moon':",
    q_mz: "'Once in a blue moon' awmzia:",
    options: ["Every night", "Very rarely", "Always", "Never"],
    options_mz: ["Zan tin", "Vang tak", "Engtik laiin", "Engtikah mah"],
    ans: 1,
    exp: "Once in a blue moon means very rarely, almost never.",
    exp_mz: "Once in a blue moon awmzia chu vang em, kumkhatah vawikhat pawh ni lo tihna.",
    topic: "Idioms"
  },
  {
    id: 90,
    q: "Meaning of 'Spill the beans':",
    q_mz: "'Spill the beans' awmzia:",
    options: ["To cook beans", "To reveal secret", "To waste food", "To plant beans"],
    options_mz: ["Be chi chhum", "Thuruk phawrh", "Eitur paih", "Be chi tuh"],
    ans: 1,
    exp: "Spill the beans means to reveal secret information.",
    exp_mz: "Spill the beans awmzia chu thuruk sawi chhuak, phawrh tihna.",
    topic: "Idioms"
  },
  {
    id: 91,
    q: "Meaning of 'Under the weather':",
    q_mz: "'Under the weather' awmzia:",
    options: ["In rain", "Feeling ill", "Under sky", "In cold"],
    options_mz: ["Ruah hnuai", "Dam lo", "Van hnuai", "Vawt ah"],
    ans: 1,
    exp: "Under the weather means feeling slightly ill or unwell.",
    exp_mz: "Under the weather awmzia chu dam tha lo deuh, nawm sam lo tihna.",
    topic: "Idioms"
  },
  {
    id: 92,
    q: "Meaning of 'Bite the bullet':",
    q_mz: "'Bite the bullet' awmzia:",
    options: ["To eat bullet", "To face difficult situation bravely", "To shoot", "To be angry"],
    options_mz: ["Silaimu seh", "Harsatna huaisen taka hmachhawn", "Kap", "Thinur"],
    ans: 1,
    exp: "Bite the bullet means to face a difficult situation with courage.",
    exp_mz: "Bite the bullet awmzia chu harsatna, na taka tuar ngai huaisen taka hmachhawn tihna.",
    topic: "Idioms"
  },
  {
    id: 93,
    q: "Meaning of 'Cost an arm and a leg':",
    q_mz: "'Cost an arm and a leg' awmzia:",
    options: ["To be injured", "To be very expensive", "To be cheap", "To lose body parts"],
    options_mz: ["Hliam", "To man em em", "Man tlawm", "Taksa chan then"],
    ans: 1,
    exp: "Cost an arm and a leg means to be very expensive.",
    exp_mz: "Cost an arm and a leg awmzia chu a man to lutuk, lei zo loh tihna.",
    topic: "Idioms"
  },
  {
    id: 94,
    q: "Meaning of 'Pull someone's leg':",
    q_mz: "'Pull someone's leg' awmzia:",
    options: ["To hurt someone", "To tease/joke with someone", "To help someone", "To pull physically"],
    options_mz: ["Tina", "Fiamthu thawh/Bum der", "Tanpui", "Pawt tak tak"],
    ans: 1,
    exp: "Pull someone's leg means to tease or joke with someone.",
    exp_mz: "Pull someone's leg awmzia chu mi fiam, bum der tihna.",
    topic: "Idioms"
  },
  {
    id: 95,
    q: "Meaning of 'The ball is in your court':",
    q_mz: "'The ball is in your court' awmzia:",
    options: ["Play ball", "It's your decision", "Court case", "Ball game"],
    options_mz: ["Ball pet", "I thu thu a ni", "Court case", "Ball game"],
    ans: 1,
    exp: "The ball is in your court means it's your turn to make a decision.",
    exp_mz: "The ball is in your court awmzia chu tunah chuan nangma thu thu, nangma tih tur tihna.",
    topic: "Idioms"
  },
  // More Narration 96-100
  {
    id: 96,
    q: "He said, 'I shall always obey my parents.'",
    q_mz: "He said, 'I shall always obey my parents.'",
    options: ["He said that he should always obey his parents", "He said that he would always obey his parents", "He said that I shall always obey my parents", "He said he will always obey his parents"],
    options_mz: ["He said that he should always obey his parents", "He said that he would always obey his parents", "He said that I shall always obey my parents", "He said he will always obey his parents"],
    ans: 1,
    exp: "Shall → should/would. Usually would. I → he, my → his.",
    exp_mz: "Shall kha should/would ah thlak. Tlangpuiin would. I kha he, my kha his ah.",
    topic: "Narration"
  },
  {
    id: 97,
    q: "She said to me, 'How old are you?'",
    q_mz: "She said to me, 'How old are you?'",
    options: ["She asked me how old I am", "She asked me how old I was", "She asked me how old was I", "She said to me how old I was"],
    options_mz: ["She asked me how old I am", "She asked me how old I was", "She asked me how old was I", "She said to me how old I was"],
    ans: 1,
    exp: "Wh-question: asked + how old + I + was. Are → was, you → I.",
    exp_mz: "Wh-question ah asked + how old + I + was. Are kha was ah, you kha I ah.",
    topic: "Narration"
  },
  {
    id: 98,
    q: "He said, 'Bravo! You have done well.'",
    q_mz: "He said, 'Bravo! You have done well.'",
    options: ["He applauded me saying that I have done well", "He applauded me saying that I had done well", "He said bravo that I had done well", "He praised me that I have done well"],
    options_mz: ["He applauded me saying that I have done well", "He applauded me saying that I had done well", "He said bravo that I had done well", "He praised me that I have done well"],
    ans: 1,
    exp: "Bravo = applauded. Have done → had done, you → I.",
    exp_mz: "Bravo chu fakna. Applauded hman tur. Have done kha had done ah, you kha I ah.",
    topic: "Narration"
  },
    {
    id: 99,
    q: "She said, 'Ugh! It smells bad.'",
    q_mz: "She said, 'Ugh! It smells bad.'",
    options: ["She exclaimed with disgust that it smelt bad", "She said that it smells bad", "She exclaimed that it smelled bad", "She said with disgust it smells bad"],
    options_mz: ["She exclaimed with disgust that it smelt bad", "She said that it smells bad", "She exclaimed that it smelled bad", "She said with disgust it smells bad"],
    ans: 0,
    exp: "Ugh! = disgust. Exclaimed with disgust. Smells → smelt/smelled.",
    exp_mz: "Ugh! chu tenna/entawntlak loh tihna. Exclaimed with disgust hman tur. Smells kha smelt/smelled ah.",
    topic: "Narration"
  },
  {
    id: 100,
    q: "He said to me, 'May you live long!'",
    q_mz: "He said to me, 'May you live long!'",
    options: ["He wished that I might live long", "He prayed that I might live long", "He blessed me that I might live long", "All are correct"],
    options_mz: ["He wished that I might live long", "He prayed that I might live long", "He blessed me that I might live long", "A zavaiin a dik"],
    ans: 3,
    exp: "Optative sentence with May = wished/prayed/blessed that + might. You → I. All options correct.",
    exp_mz: "May hmanga duhsakna chu wished/prayed/blessed that + might a ni. You kha I ah thlak. A zawng zawng a dik.",
    topic: "Narration"
  }
] 

export default function EnglishTestPage() {
  const [isPro, setIsPro] = useState(false)
  const [lang, setLang] = useState<Language>('mz')
  const [selected, setSelected] = useState<{[key: number]: number}>({})
  const [showTopic, setShowTopic] = useState<string>('All')
  const [showScore, setShowScore] = useState(false)

  const topics = ['All', 'Grammar', 'Vocabulary', 'Tense', 'Error Spotting', 'One Word', 'Idioms', 'Narration', 'Voice', 'Preposition', 'Articles', 'Spelling']
  const filteredQs = QUESTIONS.filter(q => showTopic === 'All' || q.topic === showTopic)
  const displayQs = filteredQs.slice(0, isPro? 50 : 5)

  const score = Object.keys(selected).reduce((acc, qId) => {
    const q = QUESTIONS.find(q => q.id === Number(qId))
    return acc + (q && selected[Number(qId)] === q.ans? 1 : 0)
  }, 0)

  const totalAttempted = Object.keys(selected).length

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-4 mb-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <Link href="/english" className="text-purple-600 hover:text-purple-800 font-semibold">
            ← English
          </Link>
          <button
            onClick={() => setLang(lang === 'en'? 'mz' : 'en')}
            className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium"
          >
            {lang === 'en'? 'Mizo' : 'English'}
          </button>
        </div>

        <h1 className="text-2xl font-bold text-purple-800 mb-3">
          📝 {lang === 'mz'? 'English Mock Test' : 'English Mock Test'}
        </h1>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
          {topics.map(t => (
            <button
              key={t}
              onClick={() => setShowTopic(t)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                showTopic === t? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {totalAttempted > 0 && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm font-semibold text-blue-800">
              Score: {score}/{totalAttempted} ({Math.round(score/totalAttempted*100)}%)
            </p>
          </div>
        )}
      </div>

      {displayQs.map((q) => (
        <div key={q.id} className="mb-4 p-4 bg-white rounded-lg shadow">
          <div className="flex justify-between items-start mb-2">
            <p className="font-medium text-gray-800">
              {q.id}. {lang === 'en'? q.q : q.q_mz}
            </p>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{q.topic}</span>
          </div>

          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected({...selected, [q.id]: idx})}
              disabled={selected[q.id]!== undefined}
              className={`block w-full text-left p-3 mb-2 rounded border transition ${
                selected[q.id] === idx
               ? idx === q.ans
                 ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-red-100 border-red-500 text-red-800'
                  : selected[q.id]!== undefined && idx === q.ans
                 ? 'bg-green-50 border-green-300'
                    : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
              {lang === 'en'? opt : q.options_mz[idx]}
              {selected[q.id]!== undefined && idx === q.ans && ' ✓'}
              {selected[q.id] === idx && idx!== q.ans && ' ✗'}
            </button>
          ))}

          {selected[q.id]!== undefined && (
            <div className="mt-3 p-3 bg-purple-50 rounded border-l-4 border-purple-500">
              <p className="text-sm text-gray-700">
                <b>{lang === 'mz'? 'Hrilhfiahna:' : 'Explanation:'}</b> {lang === 'en'? q.exp : q.exp_mz}
              </p>
            </div>
          )}

          {!isPro && q.id === 5 && (
            <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg">
              <p className="font-bold text-lg mb-1">🔒 Unlock 45 more questions</p>
              <p className="text-sm mb-3 text-gray-700">
                {lang === 'mz'
                 ? 'Grammar, Vocab, Idioms, One Word MCQ Mizo hrilhfiahna nen'
                  : 'Get Grammar, Vocab, Idioms, One Word MCQs with Mizo explanations'}
              </p>
              <button
                onClick={() => setIsPro(true)}
                className="w-full px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold"
              >
                Upgrade to Pro ₹49/month
              </button>
            </div>
          )}
        </div>
      ))}

      {isPro && (
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-green-700 font-medium">✅ Pro Activated - All 50 questions unlocked!</p>
        </div>
      )}

      {totalAttempted === displayQs.length && totalAttempted > 0 && (
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">Test Completed! 🎉</h3>
          <p className="text-4xl font-bold mb-2">{score}/{totalAttempted}</p>
          <p className="text-lg">{Math.round(score/totalAttempted*100)}%</p>
          <p className="mt-3 opacity-90">
            {score/totalAttempted >= 0.8
             ? (lang === 'mz'? 'I ti tha hle mai! MPSC ready i ni.' : 'Excellent! MPSC ready.')
              : score/totalAttempted >= 0.6
             ? (lang === 'mz'? 'A tha e. Tlem zir belh la.' : 'Good. Study a bit more.')
              : (lang === 'mz'? 'Zir belh a ngai. Notes chhiar leh rawh.' : 'Need practice. Read notes again.')}
          </p>
          <button
            onClick={() => {setSelected({}); window.scrollTo(0, 0);}}
            className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-bold"
          >
            {lang === 'mz'? 'Retake Test' : 'Retake Test'}
          </button>
        </div>
      )}
    </div>
  )
}