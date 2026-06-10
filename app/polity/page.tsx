// app/polity/page.tsx
'use client'
import SubjectPage from '@/components/SubjectPage'

const POLITY_CHAPTERS = [
  {
    id: 'intro',
    title: { mizo: '1. Inhmelhriattirna', english: '1. Introduction' },
    notes: {
      mizo: [
        "Constitution: Danpui. Ram kalphung inrelbawlna dan bulpui ber.",
        "Constitutional Developments: 1773 Regulating Act atangin 1947 Independence Act thleng.",
        "National Symbols: Tiranga - Tricolor. Ashoka Chakra 24 spokes. National Emblem - Sarnath Lion.",
        "Flag Code 2002: Hman dan tur. Khawiah nge zar theih, khawiah nge zar theih loh.",
        "Constituent Assembly: 1946 Dec 6 din. Member 389. Dr. Rajendra Prasad President.",
        "Drafting Committee: 1947 Aug 29. Chairman Dr. B.R. Ambedkar. Members 7.",
        "Committees: Union Powers - Nehru. Provincial - Patel. Fundamental Rights - Patel.",
        "Sources: UK - Parliament. USA - Fundamental Rights. Ireland - DPSP. Canada - Federation.",
        "Nature: Federal in structure, Unitary in spirit. K.C. Wheare - Quasi-federal.",
        "Salient Features: Longest written 470+ Articles. Blend of rigidity & flexibility."
      ],
      english: [
        "Constitution: Supreme law of the land. Framework for governance.",
        "Constitutional Developments: From Regulating Act 1773 to Independence Act 1947.",
        "National Symbols: Tiranga - Saffron, White, Green. Ashoka Chakra 24 spokes. National Emblem - Lion Capital of Sarnath.",
        "Flag Code 2002: Rules for display. Where it can/cannot be hoisted.",
        "Constituent Assembly: Formed Dec 6, 1946. 389 members. Dr. Rajendra Prasad President.",
        "Drafting Committee: Aug 29, 1947. Chairman Dr. B.R. Ambedkar. 7 members.",
        "Key Committees: Union Powers - Nehru. Provincial Constitution - Patel. FR - Patel.",
        "Sources: UK - Parliamentary system. USA - FR, Judicial Review. Ireland - DPSP. Canada - Federation.",
        "Nature: Federal structure, Unitary spirit. K.C. Wheare called it 'Quasi-federal'.",
        "Salient Features: Longest written constitution 470+ Articles. Blend of rigidity & flexibility."
      ]
    }
  },
  {
    id: 'preamble',
    title: { mizo: '2. Preamble', english: '2. The Preamble' },
    notes: {
      mizo: [
        "Text: WE, THE PEOPLE OF INDIA, solemnly resolved to constitute India into...",
        "Sovereign: Independent, ram dang thu hnuaiah a awm lo.",
        "Socialist: 42nd Amendment 1976 belh. Democratic socialism.",
        "Secular: 42nd Amendment 1976. State sakhua a nei lo.",
        "Democratic: Mipui sorkar. Vote nei vek. Parliamentary democracy.",
        "Republic: Thlan chhuah Head - President. Lal rochun a awm lo.",
        "Justice: Social, Economic, Political.",
        "Liberty: Ngaihtuahna, Sawi chhuah, Rin, Sakhua, Biak zalenna.",
        "Equality: Status & Opportunity. Art 14-18.",
        "Fraternity: Unauna. Mihring zahawmna, Ram pumkhatna.",
        "Judicial View: Berubari 1960 - Part lo. Kesavananda 1973 - Part. Amend theih."
      ],
      english: [
        "Text: WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into...",
        "Sovereign: Independent authority. Not subject to external control.",
        "Socialist: Added by 42nd Amendment 1976. Democratic socialism.",
        "Secular: Added by 42nd Amendment 1976. No state religion.",
        "Democratic: Government by the people. Universal adult franchise.",
        "Republic: Elected Head - President. No hereditary monarch.",
        "Justice: Social, Economic, Political.",
        "Liberty: Thought, Expression, Belief, Faith, Worship.",
        "Equality: Status & Opportunity. Art 14-18.",
        "Fraternity: Brotherhood. Dignity of individual, Unity & Integrity.",
        "Cases: Berubari 1960 - Not part. Kesavananda 1973 - Part of Constitution."
      ]
    }
  },
  {
    id: 'union-territory',
    title: { mizo: '3. Union leh A Ram', english: '3. The Union and Its Territory' },
    notes: {
      mizo: [
        "Art 1: India, that is Bharat, shall be a Union of States.",
        "Art 2: Parliament in state thar admit/siam thei.",
        "Art 3: State ramri, hming, area thlak thei. President recommendation ngai.",
        "State thar piang hnu 1950: Andhra 1953, Maharashtra/Gujarat 1960, Nagaland 1963.",
        "Reorganisation 1956: SRC - Fazl Ali Commission. Linguistic basis.",
        "Mizoram: 1972 Jan 21 UT. 1987 Feb 20 State. Peace Accord 1986 June 30.",
        "Telangana: 2014 June 2. Andhra Pradesh Reorganisation Act 2014. State 29-na.",
        "J&K: Art 370 scrapped 2019 Aug 5. UT 2 ah then - J&K, Ladakh.",
        "UT: 8 tunah. Delhi, Puducherry ah Assembly awm.",
        "Special Status: Art 371 - Mizoram, Nagaland, etc."
      ],
      english: [
        "Art 1: India, that is Bharat, shall be a Union of States.",
        "Art 2: Parliament may admit/establish new states.",
        "Art 3: Parliament can alter boundaries, name, area. Needs President recommendation.",
        "New States after 1950: Andhra 1953, Maharashtra/Gujarat 1960, Nagaland 1963.",
        "Reorganisation 1956: SRC - Fazl Ali Commission. Based on language.",
        "Mizoram: UT on Jan 21, 1972. State on Feb 20, 1987. Peace Accord June 30, 1986.",
        "Telangana: Formed June 2, 2014. AP Reorganisation Act 2014. 29th State.",
        "J&K: Art 370 abrogated Aug 5, 2019. Bifurcated into 2 UTs - J&K, Ladakh.",
        "UTs: 8 currently. Delhi, Puducherry have Legislative Assemblies.",
        "Special Status: Art 371 - For Mizoram, Nagaland, etc."
      ]
    }
  },
  {
    id: 'citizenship',
    title: { mizo: '4. Citizenship', english: '4. Citizenship' },
    notes: {
      mizo: [
        "Part II: Art 5-11. Citizenship Act 1955.",
        "Acquisition: By Birth, Descent, Registration, Naturalisation, Incorporation.",
        "Termination: Renunciation, Termination, Deprivation.",
        "NRI: Non-Resident Indian. Indian citizen ramdang a awm.",
        "PIO: Person of Indian Origin. Tunah OCI nen merge.",
        "OCI: Overseas Citizen of India. Dual citizenship a ni lo. 2005 atangin.",
        "CAA 2019: Citizenship Amendment Act. Hindu, Sikh, Buddhist, Jain, Parsi, Christian - Afg, Pak, Bdesh 2014 Dec 31 hma lut.",
        "Rights nei lo aliens: Art 15, 16, 19, 29, 30 - Indian chauh."
      ],
      english: [
        "Part II: Art 5-11. Citizenship Act 1955 governs.",
        "Acquisition: By Birth, Descent, Registration, Naturalisation, Incorporation.",
        "Termination: Renunciation, Termination, Deprivation.",
        "NRI: Non-Resident Indian. Indian citizen residing abroad.",
        "PIO: Person of Indian Origin. Now merged with OCI.",
        "OCI: Overseas Citizen of India. Not dual citizenship. Started 2005.",
        "CAA 2019: For Hindu, Sikh, Buddhist, Jain, Parsi, Christian from Afg, Pak, Bdesh entered before Dec 31, 2014.",
        "Rights not to aliens: Art 15, 16, 19, 29, 30 - Only for citizens."
      ]
    }
  },
  {
    id: 'fundamental-rights',
    title: { mizo: '5. Fundamental Rights', english: '5. Fundamental Rights' },
    notes: {
      mizo: [
        "Part III: Art 12-35. 'Magna Carta of India'. USA Bill of Rights atangin la.",
        "Art 12: State - Central, State Govt, Local bodies, Other authorities.",
        "Art 13: Judicial Review. FR kalh dan siam chuan void.",
        "Art 14: Equality before law - UK. Equal protection - USA. Rule of Law.",
        "Art 15: Thleidanna awm lo - Sakhua, Hnam, Chi, Mipa/Hmeichhia, Pian na.",
        "Art 16: Sorkar hnathawh ah in ang. Reservation - SC 15%, ST 7.5%, OBC 27%, EWS 10%.",
        "Art 17: Untouchability tih tawp. Civil Rights Act 1955.",
        "Art 18: Title tih tawp. Bharat Ratna, Padma award title a ni lo.",
        "Art 19: Zalenna 6 - Sawi, Inkhawm, Pawl, Zin, Chen, Eizawn. Reasonable restrictions awm.",
        "Art 21: Nun leh mimal zalenna. Supreme Court in ti zau - Privacy, Education.",
        "Art 21A: Zirna dikna kum 6-14 - 86th Amendment 2002. RTE Act 2009.",
        "Art 23: Mihring sumdawn, nawr luihna khap.",
        "Art 25-28: Sakhua zalenna. Secularism lungphum.",
        "Art 32: Danpui venhimna. Dr. Ambedkar - 'Heart & Soul'. Writ 5 chi."
      ],
      english: [
        "Part III: Art 12-35. 'Magna Carta of India'. Borrowed from USA Bill of Rights.",
        "Art 12: State includes Central, State Govts, Local authorities, Other authorities.",
        "Art 13: Judicial Review. Laws inconsistent with FR are void.",
        "Art 14: Equality before law - UK. Equal protection of laws - USA. Rule of Law.",
        "Art 15: No discrimination on Religion, Race, Caste, Sex, Place of birth.",
        "Art 16: Equality in public employment. Reservation - SC 15%, ST 7.5%, OBC 27%, EWS 10%.",
        "Art 17: Untouchability abolished. Protection of Civil Rights Act 1955.",
        "Art 18: Titles abolished. Bharat Ratna, Padma awards not titles.",
        "Art 19: Six Freedoms - Speech, Assembly, Association, Movement, Residence, Profession.",
        "Art 21: Life & Personal Liberty. Expanded by SC - Right to privacy, education.",
        "Art 21A: Right to Education 6-14 years - 86th Amendment 2002. RTE Act 2009.",
        "Art 23: Prohibition of human trafficking, forced labour.",
        "Art 25-28: Freedom of Religion. Basis of Secularism.",
        "Art 32: Constitutional Remedies. Dr. Ambedkar called it 'Heart & Soul'. 5 Writs."
      ]
    }
  },
  {
    id: 'dpsp',
    title: { mizo: '6. DPSP', english: '6. DPSP' },
    notes: {
      mizo: [
        "Part IV: Art 36-51. Ireland Constitution atangin la. Gandhian, Socialist, Liberal.",
        "Art 37: Court ah khin theih loh. Sorkar kalphung ah bulpui ber.",
        "Gandhian: Art 40 - Village Panchayat. Art 43 - Cottage industry. Art 46 - SC/ST chawikan. Art 47 - Zu khap.",
        "Socialist: Art 38 - Welfare state. Art 39 - Equal pay, Resources sem. Art 41 - Hnathawh dikna.",
        "Liberal: Art 44 - Uniform Civil Code. Art 45 - Naupang enkawl. Art 48 - Ran vulh. Art 50 - Judiciary hrang.",
        "FR vs DPSP: Champakam 1951 - FR lal. Golaknath 1967 - FR tihdanglam theih loh. Kesavananda 1973 - Inrem.",
        "Minerva Mills 1980: Balance siam. FR leh DPSP inbuk tawk."
      ],
      english: [
        "Part IV: Art 36-51. Borrowed from Ireland. Gandhian, Socialist, Liberal principles.",
        "Art 37: Non-justiciable. Fundamental in governance of country.",
        "Gandhian: Art 40 - Village Panchayats. Art 43 - Cottage industries. Art 46 - SC/ST promotion. Art 47 - Prohibition.",
        "Socialist: Art 38 - Welfare state. Art 39 - Equal pay, Resource distribution. Art 41 - Right to work.",
        "Liberal: Art 44 - Uniform Civil Code. Art 45 - Early childhood care. Art 48 - Agriculture. Art 50 - Separation of Judiciary.",
        "FR vs DPSP: Champakam 1951 - FR prevail. Golaknath 1967 - FR unamendable. Kesavananda 1973 - Harmony.",
        "Minerva Mills 1980: Balance between FR & DPSP. Both equally important."
      ]
    }
  },
  {
    id: 'fundamental-duties',
    title: { mizo: '7. Fundamental Duties', english: '7. Fundamental Duties' },
    notes: {
      mizo: [
        "Part IVA: Art 51A. 42nd Amendment 1976 belh. USSR atangin la.",
        "11 Duties: Constitution zah, National Flag/Anthem zah, India zalenna sualtu chawimawi.",
        "Ram pumkhatna vawng, Hmeichhia zah, Ramngaw humhalh, Science ngaihsang.",
        "Public property humhalh, Ram humhim, Naupang kum 6-14 zir tir - 86th Amendment 2002.",
        "Khin theih loh. Mahse dan in enforce thei."
      ],
      english: [
        "Part IVA: Art 51A. Added by 42nd Amendment 1976. Borrowed from USSR.",
        "11 Duties: Respect Constitution, National Flag & Anthem, Cherish freedom struggle.",
        "Uphold unity, Renounce practices derogatory to women, Protect environment, Develop scientific temper.",
        "Safeguard public property, Defend country, Provide education to child 6-14 - 86th Amendment 2002.",
        "Non-justiciable. But enforceable by law."
      ]
    }
  },
  {
    id: 'union-executive',
    title: { mizo: '8. Union Executive', english: '8. Union Executive' },
    notes: {
      mizo: [
        "President Art 52: Head of State. First Citizen. Supreme Commander.",
        "Election: Electoral College - Elected MP + Elected MLA. Proportional representation.",
        "Powers: Executive Art 53, Legislative - Bill sign, Ordinance Art 123, Pardoning Art 72.",
        "Veto: Absolute - Hnawl. Suspensive - Thawn let. Pocket - Reply lo. Qualified a awm lo.",
        "Vice-President Art 63: Rajya Sabha Chairman. Election - MP zawng zawng.",
        "PM Art 74: Real executive. Council of Ministers head. Lok Sabha majority.",
        "Council of Ministers Art 75: Cabinet, MoS, Deputy. Collective responsibility.",
        "Attorney General Art 76: Govt lawyer lian ber. Qualification - SC Judge.",
        "CAG Art 148: Sorkar sum enfiah. 'Guardian of Public Purse'."
      ],
      english: [
        "President Art 52: Head of State. First Citizen. Supreme Commander of Armed Forces.",
        "Election: Electoral College - Elected MPs + Elected MLAs. Proportional representation.",
        "Powers: Executive Art 53, Legislative - Assent to bills, Ordinance Art 123, Pardoning Art 72.",
        "Veto: Absolute - Withhold. Suspensive - Return. Pocket - No action. No Qualified veto.",
        "Vice-President Art 63: Ex-officio Rajya Sabha Chairman. Elected by MPs only.",
        "PM Art 74: Real executive. Head of Council of Ministers. Leader of Lok Sabha majority.",
        "Council of Ministers Art 75: Cabinet, MoS, Deputy Ministers. Collective responsibility.",
        "Attorney General Art 76: Highest law officer. Qualification same as SC Judge.",
        "CAG Art 148: Audits Govt accounts. 'Guardian of Public Purse'. Independent office."
      ]
    }
  },
   {
    id: 'parliament',
    title: { mizo: '9. Parliament', english: '9. Parliament' },
    notes: {
      mizo: [
        "Art 79: President + Lok Sabha + Rajya Sabha.",
        "Lok Sabha: 543 elected. Max 550. Term 5 years. Adult franchise.",
        "Rajya Sabha: 245 max - 233 elected, 12 nominated. Term 6 years. 1/3 retire every 2 years.",
        "Speaker: Om Birla 17th LS. Casting vote. Resign to Deputy Speaker.",
        "Chairman RS: VP of India. Jagdeep Dhankhar tunah.",
        "Sessions: Budget, Monsoon, Winter. Max 6 months gap - Art 85.",
        "Bill: Ordinary, Money Art 110, Financial, Constitutional Art 368.",
        "Joint Sitting Art 108: Speaker preside. 3 times only - Dowry 1961, Banking 1978, POTA 2002.",
        "Money Bill: Lok Sabha chauh. RS recommend chauh thei 14 days.",
        "Parliamentary Committees: PAC, Estimates, Public Undertakings."
      ],
      english: [
        "Art 79: President + Lok Sabha + Rajya Sabha.",
        "Lok Sabha: 543 elected. Max 550. 5 year term. Universal adult franchise.",
        "Rajya Sabha: Max 245 - 233 elected, 12 nominated. 6 year term. 1/3 retire every 2 years.",
        "Speaker: Om Birla 17th LS. Casting vote. Resigns to Deputy Speaker.",
        "Chairman RS: VP of India. Jagdeep Dhankhar currently.",
        "Sessions: Budget, Monsoon, Winter. Max 6 months gap - Art 85.",
        "Bills: Ordinary, Money Art 110, Financial, Constitutional Art 368.",
        "Joint Sitting Art 108: Speaker presides. Only 3 times - Dowry 1961, Banking 1978, POTA 2002.",
        "Money Bill: Only in Lok Sabha. RS can only recommend within 14 days.",
        "Parliamentary Committees: PAC, Estimates, Public Undertakings."
      ]
    }
  },
  {
    id: 'state-executive',
    title: { mizo: '10. State Executive', english: '10. State Executive' },
    notes: {
      mizo: [
        "Governor Art 153: State constitutional head. President appoint 5 years.",
        "Powers: Executive, Legislative - Ordinance Art 213, Pardoning Art 161.",
        "CM Art 164: Real executive. Assembly majority leader. Governor appoint.",
        "Council of Ministers Art 164: CM + Ministers. Collective responsibility to Assembly.",
        "Advocate General Art 165: State lawyer lian ber. Governor appoint."
      ],
      english: [
        "Governor Art 153: Constitutional head of State. Appointed by President for 5 years.",
        "Powers: Executive, Legislative - Ordinance Art 213, Pardoning Art 161.",
        "CM Art 164: Real executive. Leader of Assembly majority. Appointed by Governor.",
        "Council of Ministers Art 164: CM + Ministers. Collectively responsible to Assembly.",
        "Advocate General Art 165: Highest law officer of State. Appointed by Governor."
      ]
    }
  },
  {
    id: 'local-government',
    title: { mizo: '11. Local Government', english: '11. Local Government' },
    notes: {
      mizo: [
        "73rd Amendment 1992: Panchayati Raj. Part IX, 11th Schedule, 29 subjects.",
        "3 Tier: Gram Panchayat, Panchayat Samiti, Zila Parishad.",
        "74th Amendment 1992: Municipalities. Part IXA, 12th Schedule, 18 subjects.",
        "3 Types: Nagar Panchayat, Municipal Council, Municipal Corporation.",
        "Reservation: SC/ST population proportion. Women 1/3 - Art 243D, 243T.",
        "State Finance Commission Art 243I: 5 years tin siam.",
        "State Election Commission Art 243K: Panchayat/Municipality election."
      ],
      english: [
        "73rd Amendment 1992: Panchayati Raj. Part IX, 11th Schedule, 29 subjects.",
        "3 Tier: Gram Panchayat, Panchayat Samiti, Zila Parishad.",
        "74th Amendment 1992: Municipalities. Part IXA, 12th Schedule, 18 subjects.",
        "3 Types: Nagar Panchayat, Municipal Council, Municipal Corporation.",
        "Reservation: SC/ST as per population. Women 1/3 - Art 243D, 243T.",
        "State Finance Commission Art 243I: Constituted every 5 years.",
        "State Election Commission Art 243K: For Panchayat/Municipality elections."
      ]
    }
  },
  {
    id: 'centre-state',
    title: { mizo: '12. Centre-State Relations', english: '12. Centre-State Relations' },
    notes: {
      mizo: [
        "Legislative: Art 245-255. Union List 100, State List 61, Concurrent List 52.",
        "Art 249: RS resolution 2/3 majority in State List law siam thei.",
        "Art 250: National Emergency lai State List ah Parliament law siam thei.",
        "Administrative: Art 256-263. All India Services Art 312.",
        "Financial: Art 268-293. Finance Commission Art 280 - 5 years tin.",
        "Inter-State Council Art 263: 1990 din. PM Chairman.",
        "Zonal Councils: 1956 States Reorganisation Act. 5 Zonal."
      ],
      english: [
        "Legislative: Art 245-255. Union List 100, State List 61, Concurrent List 52.",
        "Art 249: RS resolution by 2/3 majority allows Parliament to legislate on State List.",
        "Art 250: During National Emergency, Parliament can legislate on State List.",
        "Administrative: Art 256-263. All India Services Art 312 - IAS, IPS, IFoS.",
        "Financial: Art 268-293. Finance Commission Art 280 - Every 5 years.",
        "Inter-State Council Art 263: Established 1990. PM is Chairman.",
        "Zonal Councils: States Reorganisation Act 1956. 5 Zonal Councils."
      ]
    }
  },
  {
    id: 'judiciary',
    title: { mizo: '13. Judiciary', english: '13. Judiciary' },
    notes: {
      mizo: [
        "SC Art 124: CJI + 33 Judges. Collegium system appointment.",
        "Jurisdiction: Original Art 131, Appellate Art 132-136, Advisory Art 143.",
        "Judicial Review: Basic Structure Doctrine - Kesavananda 1973.",
        "HC Art 214: State tin ah 1. Chief Justice + Judges.",
        "Subordinate Courts: District & Sessions Judge, Civil Judge, Magistrate.",
        "PIL: Public Interest Litigation. Justice P.N. Bhagwati - 'Poor man's law'.",
        "Lok Adalat: Legal Services Authorities Act 1987. Speedy justice."
      ],
      english: [
        "SC Art 124: CJI + 33 Judges. Collegium system for appointment.",
        "Jurisdiction: Original Art 131, Appellate Art 132-136, Advisory Art 143.",
        "Judicial Review: Basic Structure Doctrine - Kesavananda Bharati 1973.",
        "HC Art 214: One for each State. Chief Justice + other Judges.",
        "Subordinate Courts: District & Sessions Judge, Civil Judge, Magistrate.",
        "PIL: Public Interest Litigation. Justice P.N. Bhagwati called it 'Poor man's law'.",
        "Lok Adalat: Legal Services Authorities Act 1987. Alternative dispute resolution."
      ]
    }
  },
  {
    id: 'emergency',
    title: { mizo: '14. Emergency', english: '14. Emergency Provisions' },
    notes: {
      mizo: [
        "National Emergency Art 352: War, External Aggression, Armed Rebellion. 3 times - 1962, 1971, 1975.",
        "Effect: Centre unitary, FR suspend Art 358, 359, Parliament State List ah law siam thei.",
        "President Rule Art 356: State constitutional machinery fail. Max 3 years. 44th Amendment.",
        "Financial Emergency Art 360: La puan ngai lo. Centre financial control.",
        "44th Amendment 1978: 'Internal disturbance' thlak 'Armed Rebellion'. Judicial review."
      ],
      english: [
        "National Emergency Art 352: War, External Aggression, Armed Rebellion. Proclaimed 3 times - 1962, 1971, 1975.",
        "Effect: Centre becomes unitary, FR suspended Art 358, 359, Parliament can legislate on State List.",
        "President Rule Art 356: Failure of constitutional machinery in State. Max 3 years. 44th Amendment restrictions.",
        "Financial Emergency Art 360: Never proclaimed yet. Centre assumes financial control.",
        "44th Amendment 1978: Replaced 'Internal disturbance' with 'Armed Rebellion'. Judicial review introduced."
      ]
    }
  },
  {
    id: 'elections',
    title: { mizo: '15. Elections', english: '15. Elections' },
    notes: {
      mizo: [
        "ECI Art 324: CEC + 2 ECs. Superintendence, direction, control.",
        "Functions: Electoral rolls, Elections conduct, Political parties register, Model Code.",
        "Universal Adult Franchise Art 326: Kum 18 chin vote - 61st Amendment 1989.",
        "Delimitation Commission Art 82: Constituency siam thar. 2008 hnuhnung ber.",
        "Anti-Defection Art 102(2): 10th Schedule 52nd Amendment 1985.",
        "EVM: Electronic Voting Machine. VVPAT nen 2019 atangin."
      ],
      english: [
        "ECI Art 324: CEC + 2 ECs. Superintendence, direction, control of elections.",
        "Functions: Electoral rolls preparation, Conduct of elections, Register political parties, Model Code of Conduct.",
        "Universal Adult Franchise Art 326: 18 years voting age - 61st Amendment 1989.",
        "Delimitation Commission Art 82: Readjustment of constituencies. Last in 2008.",
        "Anti-Defection Art 102(2): 10th Schedule, 52nd Amendment 1985.",
        "EVM: Electronic Voting Machine. With VVPAT since 2019."
      ]
    }
  },
  {
    id: 'commissions',
    title: { mizo: '16. Constitutional Bodies', english: '16. Constitutional Bodies' },
    notes: {
      mizo: [
        "UPSC Art 315: Chairman + Members. President appoint. Term 6 years/65 age.",
        "Functions: Recruitment, Promotion, Disciplinary matters advice.",
        "SPSC Art 315: State tan. Governor appoint. Mizoram ah MPSC.",
        "Finance Commission Art 280: 5 years tin. Tax sharing recommend. 15th FC - N.K. Singh.",
        "NCSC Art 338: SC tan. 89th Amendment 2003 in then. Chairman - Vijay Sampla.",
        "NCST Art 338A: ST tan. 89th Amendment 2003. Chairman - Harsh Chouhan.",
        "NCBC Art 338B: OBC tan. 102nd Amendment 2018 constitutional status. Chairman - Hansraj Ahir."
      ],
      english: [
        "UPSC Art 315: Chairman + Members. Appointed by President. 6 year term/65 age.",
        "Functions: Recruitment, Promotions, Disciplinary matters advice to Govt.",
        "SPSC Art 315: For States. Appointed by Governor. MPSC for Mizoram.",
        "Finance Commission Art 280: Every 5 years. Recommends tax sharing. 15th FC - N.K. Singh.",
        "NCSC Art 338: For SC. Separated by 89th Amendment 2003. Chairman - Vijay Sampla.",
        "NCST Art 338A: For ST. 89th Amendment 2003. Chairman - Harsh Chouhan.",
        "NCBC Art 338B: For OBC. 102nd Amendment 2018 gave constitutional status. Chairman - Hansraj Ahir."
      ]
    }
  },
    {
    id: 'statutory-bodies',
    title: { mizo: '17. Statutory Bodies', english: '17. Statutory Bodies' },
    notes: {
      mizo: [
        "NHRC: Protection of Human Rights Act 1993. Chairman - Retired CJI. Arun Mishra tunah.",
        "CIC: RTI Act 2005. Chief Information Commissioner. Heeralal Samariya tunah.",
        "CVC: CVC Act 2003. Santhanam Committee recommend. Praveen Kumar Srivastava tunah.",
        "CBI: Delhi Special Police Establishment Act 1946. 'Premier investigating agency'. Praveen Sood Director.",
        "Lokpal: Lokpal Act 2013. Anna Hazare movement. A.M. Khanwilkar Chairman.",
        "NITI Aayog: 2015 Jan 1. Planning Commission thlak. CEO - B.V.R. Subrahmanyam. VC - Suman Bery."
      ],
      english: [
        "NHRC: Protection of Human Rights Act 1993. Chairman - Retired CJI. Arun Mishra currently.",
        "CIC: RTI Act 2005. Chief Information Commissioner. Heeralal Samariya currently.",
        "CVC: CVC Act 2003. Based on Santhanam Committee. Praveen Kumar Srivastava currently.",
        "CBI: Delhi Special Police Establishment Act 1946. 'Premier investigating agency'. Praveen Sood Director.",
        "Lokpal: Lokpal and Lokayuktas Act 2013. Anna Hazare movement. A.M. Khanwilkar Chairman.",
        "NITI Aayog: Jan 1, 2015. Replaced Planning Commission. CEO - B.V.R. Subrahmanyam. VC - Suman Bery."
      ]
    }
  },
  {
    id: 'reforms',
    title: { mizo: '18. Administrative Reforms', english: '18. Administrative Reforms' },
    notes: {
      mizo: [
        "First ARC: 1966. Morarji Desai Chairman. 20 Reports.",
        "Second ARC: 2005-2009. Veerappa Moily Chairman. 15 Reports.",
        "Ethics: Code of Ethics for Ministers, Code of Conduct for Civil Servants.",
        "Citizen Charter: Sevottam model. Public service delivery standards.",
        "RTI 2005: Information dikna. 30 days chhunga pe tur. Appeal 2 stage.",
        "E-Governance: Digital India, UMANG, DigiLocker, MyGov.",
        "CPGRAMS: Centralized Public Grievance Redress System. DARPG hnuaiah."
      ],
      english: [
        "First ARC: 1966. Morarji Desai Chairman. 20 Reports.",
        "Second ARC: 2005-2009. Veerappa Moily Chairman. 15 Reports submitted.",
        "Ethics: Code of Ethics for Ministers, Code of Conduct for Civil Servants.",
        "Citizen Charter: Sevottam model for public service delivery standards.",
        "RTI 2005: Right to Information. 30 days time limit. 2-stage Appeal.",
        "E-Governance: Digital India, UMANG app, DigiLocker, MyGov.",
        "CPGRAMS: Centralized Public Grievance Redress and Monitoring System under DARPG."
      ]
    }
  },
  {
    id: 'comparison',
    title: { mizo: '19. Ram Dang Nen Khaihknan', english: '19. Comparison' },
    notes: {
      mizo: [
        "UK: Parliamentary, Constitutional Monarchy, Unitary, Unwritten, Flexible. King Charles III.",
        "USA: Presidential, Federal, Written, Rigid, Strong Judicial Review. President 4 years.",
        "India: Parliamentary, Federal, Written, Rigid+Flexible, Judicial Review. PM 5 years.",
        "France: Semi-Presidential. President + PM both powerful. 5th Republic.",
        "Switzerland: Direct Democracy. Referendum, Initiative, Recall. 7 member Federal Council.",
        "Japan: Constitutional Monarchy. Emperor symbolic. PM real power."
      ],
      english: [
        "UK: Parliamentary, Constitutional Monarchy, Unitary, Unwritten, Flexible. King Charles III.",
        "USA: Presidential, Federal, Written, Rigid, Strong Judicial Review. President 4 year term.",
        "India: Parliamentary, Federal, Written, Blend of Rigid & Flexible, Judicial Review. PM 5 year term.",
        "France: Semi-Presidential. Both President & PM powerful. 5th Republic.",
        "Switzerland: Direct Democracy. Referendum, Initiative, Recall. 7 member Federal Council.",
        "Japan: Constitutional Monarchy. Emperor is symbolic. PM real power."
      ]
    }
  },
    {
    id: 'governance',
    title: { mizo: '20. Governance', english: '20. Governance' },
    notes: {
      mizo: [
        "Good Governance: Transparency, Accountability, Responsiveness, Rule of Law, Equity, Effectiveness.",
        "E-Governance: G2C, G2B, G2G, G2E. Digital India Mission 2015.",
        "Citizen Charter: Services, Standards, Timeframe, Grievance, Compensation.",
        "Social Audit: MGNREGA ah mandatory. Public accountability tool. Meghalaya model.",
        "Civil Society: NGO, SHG, Pressure Groups, Media role. Jan Sunwai.",
        "Welfare Schemes: PM-KISAN, Ayushman Bharat, Ujjwala, PMAY.",
        "DBT: Direct Benefit Transfer. JAM Trinity - Jan Dhan, Aadhaar, Mobile. PFMS."
      ],
      english: [
        "Good Governance: Transparency, Accountability, Responsiveness, Rule of Law, Equity, Effectiveness.",
        "E-Governance: G2C, G2B, G2G, G2E. Digital India Mission 2015.",
        "Citizen Charter: Services offered, Standards, Timeframe, Grievance, Compensation.",
        "Social Audit: Mandatory in MGNREGA. Public accountability tool. Meghalaya model.",
        "Civil Society: Role of NGOs, SHGs, Pressure Groups, Media. Jan Sunwai.",
        "Welfare Schemes: PM-KISAN, Ayushman Bharat, Ujjwala, PMAY.",
        "DBT: Direct Benefit Transfer. JAM Trinity - Jan Dhan, Aadhaar, Mobile. PFMS."
      ]
    }
  },
  {
    id: 'development',
    title: { mizo: '21. Development Processes', english: '21. Development Processes' },
    notes: {
      mizo: [
        "Planning: 1951-2017 Five Year Plans. PC to NITI Aayog 2015.",
        "NITI Aayog: Think tank. Cooperative Federalism. 15 Year Vision, 7 Year Strategy, 3 Year Action.",
        "SDG: Sustainable Development Goals 2030. 17 Goals, 169 Targets. NITI Aayog monitor.",
        "Aspirational Districts: 112 districts. Jan Andolan approach. 5 core areas.",
        "DBT: Direct Benefit Transfer. JAM Trinity. ₹34 lakh crore transferred till 2024.",
        "NeVA: National e-Vidhan Application. Paperless Assembly.",
        "Gati Shakti: National Master Plan for Multi-modal Connectivity."
      ],
      english: [
        "Planning: Five Year Plans 1951-2017. Planning Commission to NITI Aayog 2015.",
        "NITI Aayog: Think tank. Cooperative Federalism. 15 Year Vision, 7 Year Strategy, 3 Year Action Plan.",
        "SDG: Sustainable Development Goals 2030. 17 Goals, 169 Targets. NITI Aayog monitors.",
        "Aspirational Districts: 112 districts. Jan Andolan approach. 5 core areas.",
        "DBT: Direct Benefit Transfer. JAM Trinity. ₹34 lakh crore transferred till 2024.",
        "NeVA: National e-Vidhan Application. Paperless Assembly.",
        "Gati Shakti: National Master Plan for Multi-modal Connectivity."
      ]
    }
  },
  {
    id: 'public-policy',
    title: { mizo: '22. Public Policy', english: '22. Public Policy' },
    notes: {
      mizo: [
        "Policy Cycle: Agenda Setting → Formulation → Adoption → Implementation → Evaluation → Termination.",
        "NEP 2020: 5+3+3+4 structure. Mother tongue medium Class 5 thleng. 6% GDP education ah.",
        "Health: Ayushman Bharat - PM-JAY ₹5 lakh coverage. 10 crore families. 1.5 lakh HWCs.",
        "Education: RTE 2009 - Kum 6-14 free & compulsory. 25% EWS quota private school ah.",
        "Food Security: NFSA 2013 - 67% population hnenah rice ₹3/kg, wheat ₹2/kg, coarse grain ₹1/kg.",
        "Environment: NAPCC - National Action Plan on Climate Change. 8 National Missions.",
        "Women: Beti Bachao Beti Padhao, Ujjwala, Maternity Benefit 26 weeks.",
        "Farmers: PM-KISAN ₹6000/year, PM Fasal Bima Yojana, e-NAM."
      ],
      english: [
        "Policy Cycle: Agenda Setting → Formulation → Adoption → Implementation → Evaluation → Termination.",
        "NEP 2020: 5+3+3+4 structure. Mother tongue as medium till Class 5. 6% GDP to education.",
        "Health: Ayushman Bharat - PM-JAY ₹5 lakh coverage for 10 crore families. 1.5 lakh HWCs.",
        "Education: RTE 2009 - Free & compulsory education for 6-14 years. 25% EWS quota in private schools.",
        "Food Security: NFSA 2013 - 67% population gets rice at ₹3/kg, wheat at ₹2/kg, coarse grain ₹1/kg.",
        "Environment: NAPCC - National Action Plan on Climate Change with 8 National Missions.",
        "Women: Beti Bachao Beti Padhao, Ujjwala, Maternity Benefit 26 weeks paid leave.",
        "Farmers: PM-KISAN ₹6000/year, PM Fasal Bima Yojana, e-NAM platform."
      ]
    }
  },
  {
    id: 'mpsc-special',
    title: { mizo: '23. Mizoram Special', english: '23. Mizoram Special' },
    notes: {
      mizo: [
        "6th Schedule: Art 244(2). ADC 10 awm - Assam 3, Meghalaya 3, Tripura 1, Mizoram 3.",
        "Mizoram ADC: Lai Autonomous District Council, Mara ADC, Chakma ADC. Legislative, Executive, Judicial powers nei.",
        "Inner Line Permit: Bengal Eastern Frontier Regulation 1873. Mizoram, Nagaland, Arunachal, Manipur. Tourist tan e-ILP.",
        "Mizoram Statehood: 1987 Feb 20. State 23-na. UT atangin kai chho. 53rd Amendment Act 1986.",
        "Mizoram CM Hmasa: Pu Laldenga 1987. Governor Hmasa: Pu Hiteswar Saikia.",
        "MPSC: Mizoram Public Service Commission. 1991 din. Chairman + Members 4. Pu R. Lalramnghaka Chairman tunah.",
        "Official Language: Mizo. English pawh hmang. Mizo Language Act 1972.",
        "High Court: Gauhati HC - Aizawl Bench. 1990 July 5 din. Permanent Bench 2000.",
        "Mizoram MLA: 40 seats. ST Reserved vek. 1 Lok Sabha, 1 Rajya Sabha.",
        "Important Acts: Mizo District Council Act 1954, Mizoram Land Revenue Act 2013, Mizoram Liquor Prohibition Act 2019.",
        "Districts: 11 districts. Hnahthial, Khawzawl, Saitual 2019 ah siam.",
        "State Symbols: State Animal - Serow. State Bird - Mrs. Hume's Pheasant. State Flower - Red Vanda."
      ],
      english: [
        "6th Schedule: Art 244(2). 10 ADCs - Assam 3, Meghalaya 3, Tripura 1, Mizoram 3.",
        "Mizoram ADCs: Lai Autonomous District Council, Mara ADC, Chakma ADC. Have Legislative, Executive, Judicial powers.",
        "Inner Line Permit: Bengal Eastern Frontier Regulation 1873. For Mizoram, Nagaland, Arunachal, Manipur. e-ILP for tourists.",
        "Mizoram Statehood: Feb 20, 1987. 23rd State. Upgraded from UT. 53rd Amendment Act 1986.",
        "First CM: Pu Laldenga 1987. First Governor: Pu Hiteswar Saikia.",
        "MPSC: Mizoram Public Service Commission. Established 1991. Chairman + 4 Members. Pu R. Lalramnghaka Chairman currently.",
        "Official Language: Mizo. English also used. Mizo Language Act 1972.",
        "High Court: Gauhati HC - Aizawl Bench. Established July 5, 1990. Permanent Bench 2000.",
        "Mizoram MLA: 40 seats. All ST Reserved. 1 Lok Sabha, 1 Rajya Sabha.",
        "Important Acts: Mizo District Council Act 1954, Mizoram Land Revenue Act 2013, Mizoram Liquor Prohibition Act 2019.",
        "Districts: 11 districts. Hnahthial, Khawzawl, Saitual created in 2019.",
        "State Symbols: State Animal - Serow. State Bird - Mrs. Hume's Pheasant. State Flower - Red Vanda."
      ]
    }
  }
]

export default function PolityPage() {
  return (
    <SubjectPage
      slug="polity"
      testId="polity-mock-1"
      subjectName={{ mizo: 'Indian Polity & Danpui', english: 'Indian Polity & Constitution' }}
      chapters={POLITY_CHAPTERS}
      backLink="/"
      testLink="/test/polity-mock-1"
      testTitle={{ mizo: 'Polity Mock Test 1', english: 'Polity Mock Test 1' }}
      testDesc={{ mizo: 'MPSC Polity Chapter 1-23', english: 'MPSC Polity Chapter 1-23' }}
    />
  )
} 