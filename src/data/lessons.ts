import type { Lesson } from './constants';

export const COURSE_DATA: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Lesson 1: Seznamujeme se",
    subtitle: "Let's get to know each other",
    description: "Introductions, the verb 'být', and basic vocabulary.",
    dialogue: [
      { speaker: 'Eva', cz: 'Dobrý den. Já jsem Eva Hanušová.', en: 'Hello. I am Eva Hanušová.' },
      { speaker: 'Tom', cz: 'Dobrý den. Já jsem Thomas Brown.', en: 'Hello. I am Thomas Brown.' },
      { speaker: 'Eva', cz: 'Těší mě. Odkud jste?', en: 'Nice to meet you. Where are you from?' },
      { speaker: 'Tom', cz: 'Jsem z Austrálie.', en: 'I am from Australia.' },
      { speaker: 'Eva', cz: 'Aha, to je zajímavé. Co děláte?', en: 'Ah, that is interesting. What do you do?' },
      { speaker: 'Tom', cz: 'Jsem student. Studuju češtinu.', en: 'I am a student. I study Czech.' },
      { speaker: 'Eva', cz: 'To je skvělé! Já jsem učitelka.', en: 'That is great! I am a teacher.' },
      { speaker: 'Tom', cz: 'Těšilo mě. Na shledanou!', en: 'It was nice to meet you. Goodbye!' },
      { speaker: 'Eva', cz: 'Na shledanou!', en: 'Goodbye!' }
    ],
    vocab: {
      places: [
        { cz: 'nádraží', en: 'train station' },
        { cz: 'letiště', en: 'airport' },
        { cz: 'náměstí', en: 'square' },
        { cz: 'restaurace', en: 'restaurant' },
        { cz: 'obchod', en: 'shop / store' },
        { cz: 'nemocnice', en: 'hospital' },
        { cz: 'divadlo', en: 'theatre' },
      ],
      food: [
        { cz: 'česneková polévka', en: 'garlic soup' },
        { cz: 'vepřové maso', en: 'pork meat' },
        { cz: 'knedlíky', en: 'dumplings' },
        { cz: 'zmrzlina', en: 'ice cream' },
        { cz: 'pivo', en: 'beer' },
        { cz: 'víno', en: 'wine' },
        { cz: 'káva', en: 'coffee' },
      ]
    },
    grammar: {
      verbToBe: [
        { question: 'Dobrý den. Já _______ Eva Hanušová.', options: ['jsi', 'jsem', 'je', 'jsme'], correct: 1, explanation: '"jsem" is the 1st person singular (I am) for the verb "být".' },
        { question: 'Odkud _______?', options: ['jste', 'jsi', 'je', 'jsou'], correct: 0, explanation: '"jste" is the formal/plural form (you are).' },
        { question: 'On _______ student.', options: ['jsou', 'jsem', 'je', 'jsi'], correct: 2, explanation: '"je" is the 3rd person singular (he/she/it is).' },
        { question: 'My _______ z České republiky.', options: ['jsme', 'jste', 'jsou', 'jsem'], correct: 0, explanation: '"jsme" is the 1st person plural (we are).' }
      ]
    },
    insights: [
      {
        title: "Tykání vs. Vykání (Formal vs. Informal)",
        content: [
          "In Czech, there are two ways to address people. Use the formal 'Vy' (Vykání) when talking to strangers, teachers, or older people. Use the informal 'Ty' (Tykání) with friends, family, and children.",
          "Formal: Dobrý den! Odkud jste? (Hello! Where are you from?)",
          "Informal: Ahoj! Odkud jsi? (Hi! Where are you from?)"
        ]
      },
      {
        title: "Dropping Pronouns",
        content: [
          "Because the verb ending already tells you who is doing the action, personal pronouns (Já, Ty, My) are often dropped.",
          "Instead of 'Já jsem student', you usually just say 'Jsem student'."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'intro', title: 'Greetings', desc: 'Learn basic introductions.', icon: 'MessageCircle', color: 'blue' },
      { type: 'vocab', id: 'places', title: 'Places & City', desc: 'Master vocabulary for navigating a town.', icon: 'MapPin', color: 'emerald' },
      { type: 'matching', id: 'places', title: 'Match: Places', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'verbToBe', title: 'Verb "Být"', desc: 'Practice the conjugation of To Be.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  2: {
    id: 2,
    title: "Lesson 2: Kde je to?",
    subtitle: "Where is it?",
    description: "Directions, transport, and navigating the city.",
    dialogue: [
      { speaker: 'Tom', cz: 'Dobrý den, nevíte, kde je tady nějaký hotel?', en: 'Hello, do you know where a hotel is around here?' },
      { speaker: 'Paní', cz: 'Jeden nový hotel je blízko.', en: 'One new hotel is nearby.' },
      { speaker: 'Paní', cz: 'Musíte jít rovně a pak doprava.', en: 'You must go straight and then to the right.' },
      { speaker: 'Marina', cz: 'A nevíte, kde je restaurace?', en: 'And do you know where a restaurant is?' },
      { speaker: 'Pán', cz: 'Musíte jít zpátky a pak doleva.', en: 'You must go back and then to the left.' },
      { speaker: 'Tom', cz: 'Děkujeme! A je to daleko?', en: 'Thank you! And is it far?' },
      { speaker: 'Paní', cz: 'Ne, je to blízko. Pět minut pěšky.', en: 'No, it is nearby. Five minutes on foot.' },
      { speaker: 'Marina', cz: 'Děkujeme. Na shledanou!', en: 'Thank you. Goodbye!' }
    ],
    vocab: {
      directions: [
        { cz: 'vlevo / doleva', en: 'left / to the left' },
        { cz: 'vpravo / doprava', en: 'right / to the right' },
        { cz: 'nahoře', en: 'up' },
        { cz: 'dole', en: 'down' },
        { cz: 'rovně', en: 'straight' },
        { cz: 'zpátky', en: 'back' },
        { cz: 'auto', en: 'car' },
        { cz: 'vlak', en: 'train' }
      ]
    },
    grammar: {
      jitVsJet: [
        { question: 'Jdu _______.', options: ['autem', 'pěšky', 'vlakem', 'metrem'], correct: 1, explanation: '"Jít" means to go on foot (pěšky).' },
        { question: 'Jedu _______.', options: ['pěšky', 'autem', 'rovně', 'zpátky'], correct: 1, explanation: '"Jet" means to go by vehicle (autem).' },
        { question: 'Musíte _______ rovně a pak doprava.', options: ['jít', 'jet', 'jsem', 'jste'], correct: 0, explanation: 'Walking straight and right implies foot direction here.' },
        { question: 'Metro je rychlé. _______ metrem.', options: ['Jdu', 'Jedu', 'Je', 'Jsem'], correct: 1, explanation: 'Going by metro uses the vehicle verb "jet" -> "jedu".' }
      ]
    },
    insights: [
      {
        title: "Jít vs. Jet (Walking vs. Riding)",
        content: [
          "Czech makes a strict distinction between moving on foot and moving by vehicle.",
          "Use 'jít' (I go: jdu) when you are walking.",
          "Use 'jet' (I go: jedu) when you are using a car, bus, train, or bike."
        ]
      },
      {
        title: "Adverbs of Direction",
        content: [
          "Notice the difference between being somewhere and moving somewhere.",
          "Location: To je vlevo/vpravo. (It is on the left/right).",
          "Direction: Musíte jít doleva/doprava. (You must go to the left/right)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'directions-dialogue', title: 'Asking Directions', desc: 'Find your way around town.', icon: 'MessageCircle', color: 'cyan' },
      { type: 'vocab', id: 'directions', title: 'Directions', desc: 'Words for getting around.', icon: 'Compass', color: 'rose' },
      { type: 'matching', id: 'directions', title: 'Match: Directions', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'jitVsJet', title: 'Jít vs Jet', desc: 'Going on foot vs by vehicle.', icon: 'Train', color: 'blue' }
    ]
  },
  3: {
    id: 3,
    title: "Lesson 3: Jídlo a pití",
    subtitle: "Food and drink",
    description: "Ordering food, the accusative case, and key dining verbs.",
    dialogue: [
      { speaker: 'Číšník', cz: 'Dobrý den. Tady je jídelní lístek. Co si dáte k pití?', en: 'Hello. Here is the menu. What will you have to drink?' },
      { speaker: 'Petr', cz: 'Dám si černé pivo.', en: 'I will have a dark beer.' },
      { speaker: 'Eva', cz: 'Já si dám pomerančový džus.', en: 'I will have an orange juice.' },
      { speaker: 'Číšník', cz: 'A co si dáte k jídlu?', en: 'And what will you have to eat?' },
      { speaker: 'Petr', cz: 'Dám si česnekovou polévku a grilovaného lososa.', en: 'I will have garlic soup and grilled salmon.' },
      { speaker: 'Eva', cz: 'Mám ráda smažený sýr, ale dám si hovězí maso a rýži.', en: 'I like fried cheese, but I will have beef meat and rice.' },
      { speaker: 'Číšník', cz: 'Prosím, tady to je. Dobrou chuť!', en: 'Here you go. Enjoy your meal!' },
      { speaker: 'Petr', cz: 'Děkujeme. Zaplatím. Zvlášť.', en: 'Thank you. I will pay. Separately.' },
      { speaker: 'Eva', cz: 'Děkujeme, bylo to výborné!', en: 'Thank you, it was excellent!' },
      { speaker: 'Číšník', cz: 'Rádo se stalo. Přijďte zase! Na shledanou!', en: 'My pleasure. Come again! Goodbye!' }
    ],
    vocab: {
      restaurant: [
        { cz: 'jídelní lístek', en: 'menu' },
        { cz: 'číšník', en: 'waiter' },
        { cz: 'účet', en: 'bill / check' },
        { cz: 'zaplatit', en: 'to pay' },
        { cz: 'zvlášť', en: 'separately' },
        { cz: 'dohromady', en: 'together' },
        { cz: 'dobrou chuť', en: 'enjoy your meal' }
      ]
    },
    grammar: {
      accusative: [
        { question: 'Dám si ______ polévku.', options: ['bramborová', 'bramborovou', 'bramborové', 'bramborový'], correct: 1, explanation: 'Feminine nouns ending in -a take -ou in the accusative (bramborovou polévku).' },
        { question: 'Mám rád ______ sýr.', options: ['smažený', 'smaženou', 'smaženého', 'smažené'], correct: 0, explanation: 'Inanimate masculine nouns don\'t change form in the accusative (smažený sýr).' },
        { question: 'Dám si grilovaného ______.', options: ['losos', 'lososa', 'lososou', 'losose'], correct: 1, explanation: 'Animate masculine nouns take -a in the accusative (grilovaného lososa).' },
        { question: 'Já ______ pomerančový džus.', options: ['chtít', 'chceme', 'chci', 'chceš'], correct: 2, explanation: '"chci" is the 1st person singular of the verb "chtít" (I want).' }
      ]
    },
    insights: [
      {
        title: "The Accusative Case (Direct Object)",
        content: [
          "When ordering food ('Dám si...'), the item you are ordering becomes the direct object. In Czech, this requires the Accusative case.",
          "Feminine nouns ending in -a change to -u (e.g., polévka -> polévku).",
          "Feminine adjectives ending in -á change to -ou (e.g., bramborová -> bramborovou).",
          "Masculine inanimate nouns (like sýr or džus) and Neuter nouns (like pivo) do not change their endings in the accusative!"
        ]
      },
      {
        title: "Zvlášť nebo dohromady?",
        content: [
          "A very common question when paying the bill in Czechia is 'Zvlášť, nebo dohromady?' (Separately, or together?)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'restaurant-dialogue', title: 'At the Restaurant', desc: 'Order food and drinks like a local.', icon: 'Utensils', color: 'rose' },
      { type: 'vocab', id: 'restaurant', title: 'Dining Out', desc: 'Useful phrases for eating out.', icon: 'Coffee', color: 'cyan' },
      { type: 'matching', id: 'restaurant', title: 'Match: Dining', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'accusative', title: 'Accusative Case', desc: 'How to form the direct object.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  4: {
    id: 4,
    title: "Lesson 4: Moje rodina",
    subtitle: "My family",
    description: "Family members, possessive pronouns, and talking about age.",
    dialogue: [
      { speaker: 'Petr', cz: 'Evo, řekni mi něco o tvé rodině.', en: 'Eva, tell me something about your family.' },
      { speaker: 'Eva', cz: 'Jmenuju se Eva Hanušová. Je mi 24 let.', en: 'My name is Eva Hanušová. I am 24 years old.' },
      { speaker: 'Eva', cz: 'Jsem učitelka, pracuju v jazykové škole a učím češtinu.', en: 'I am a teacher, I work in a language school and teach Czech.' },
      { speaker: 'Petr', cz: 'A tvůj tatínek? Jak se jmenuje?', en: 'And your dad? What is his name?' },
      { speaker: 'Eva', cz: 'Můj tatínek se jmenuje Josef. Je mu 55 let.', en: 'My dad\'s name is Josef. He is 55 years old.' },
      { speaker: 'Petr', cz: 'A tvoje maminka?', en: 'And your mum?' },
      { speaker: 'Eva', cz: 'Moje maminka se jmenuje Irena. Je jí 50 let.', en: 'My mum\'s name is Irena. She is 50 years old.' },
      { speaker: 'Eva', cz: 'Mám mladšího bratra a starší sestru.', en: 'I have a younger brother and an older sister.' },
      { speaker: 'Petr', cz: 'Máš hezkou rodinu!', en: 'You have a nice family!' },
      { speaker: 'Eva', cz: 'Děkuju! A co tvoje rodina?', en: 'Thanks! And what about your family?' }
    ],
    vocab: {
      family: [
        { cz: 'matka / maminka', en: 'mother / mum' },
        { cz: 'otec / tatínek', en: 'father / dad' },
        { cz: 'bratr', en: 'brother' },
        { cz: 'sestra', en: 'sister' },
        { cz: 'babička', en: 'grandmother' },
        { cz: 'dědeček', en: 'grandfather' },
        { cz: 'syn', en: 'son' },
        { cz: 'dcera', en: 'daughter' }
      ]
    },
    grammar: {
      possessives: [
        { question: 'To je _______ bratr.', options: ['moje', 'můj', 'tvůj', 'její'], correct: 1, explanation: '"bratr" is masculine, so we use "můj" (my).' },
        { question: 'To je _______ sestra.', options: ['můj', 'moje', 'náš', 'váš'], correct: 1, explanation: '"sestra" is feminine, so we use "moje" (my).' },
        { question: 'Petr je muž. To je _______ auto.', options: ['jeho', 'její', 'tvoje', 'moje'], correct: 0, explanation: '"jeho" means "his" for a masculine possessor.' },
        { question: 'Jak se jmenuje _______ maminka?', options: ['tvůj', 'tvoje', 'váš', 'jeho'], correct: 1, explanation: '"maminka" is feminine, so we use "tvoje" (your).' }
      ]
    },
    insights: [
      {
        title: "Expressing Age",
        content: [
          "In English you 'are' an age. In Czech, age 'is to you'. We use the dative case.",
          "Je mi 24 let. (It is 24 years to me).",
          "Je mu 55 let. (He is 55). Je jí 50 let. (She is 50)."
        ]
      },
      {
        title: "Possessive Pronouns",
        content: [
          "Possessive pronouns (my, your) must match the gender of the object being possessed, NOT the person speaking.",
          "Můj bratr (My brother - masculine). Moje sestra (My sister - feminine).",
          "However, 3rd person pronouns 'jeho' (his) and 'její' (her) never change endings."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'family-dialogue', title: 'Meet the Family', desc: 'Read Eva\'s family introduction.', icon: 'MessageCircle', color: 'rose' },
      { type: 'vocab', id: 'family', title: 'Family Members', desc: 'Words for relatives.', icon: 'Users', color: 'emerald' },
      { type: 'matching', id: 'family', title: 'Match: Family', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'possessives', title: 'Possessives', desc: 'My, your, his, her.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  5: {
    id: 5,
    title: "Lesson 5: Kdy je to?",
    subtitle: "When is it?",
    description: "Telling time, daily routines, and modal verbs.",
    dialogue: [
      { speaker: 'Tom', cz: 'Ahoj Marino! Kolik je hodin?', en: 'Hi Marina! What time is it?' },
      { speaker: 'Marina', cz: 'Ahoj Tome! Teď je deset hodin.', en: 'Hi Tom! It is ten o\'clock now.' },
      { speaker: 'Tom', cz: 'A kdy začíná lekce? V deset, že?', en: 'And when does the lesson start? At ten, right?' },
      { speaker: 'Marina', cz: 'Ne, začíná až v jedenáct. Ještě máme čas na kávu.', en: 'No, it doesn\'t start until eleven. We still have time for coffee.' },
      { speaker: 'Tom', cz: 'Super! Chci si dát kávu.', en: 'Great! I want to have a coffee.' },
      { speaker: 'Marina', cz: 'Já musím ještě zavolat.', en: 'I still have to make a phone call.' },
      { speaker: 'Tom', cz: 'A co po lekci? Můžeš jít na oběd?', en: 'And what about after the lesson? Can you go for lunch?' },
      { speaker: 'Marina', cz: 'Jasně, můžeme jít do restaurace. Ale teď musíme jít na kávu!', en: 'Sure, we can go to a restaurant. But now we must go for coffee!' }
    ],
    vocab: {
      routine: [
        { cz: 'vstávat', en: 'to get up' },
        { cz: 'snídat', en: 'to have breakfast' },
        { cz: 'obědvat', en: 'to have lunch' },
        { cz: 'večeřet', en: 'to have dinner' },
        { cz: 'spát', en: 'to sleep' },
        { cz: 'pondělí', en: 'Monday' },
        { cz: 'pátek', en: 'Friday' },
        { cz: 'víkend', en: 'weekend' }
      ]
    },
    grammar: {
      modals: [
        { question: 'Já _______ spát.', options: ['chceš', 'chceme', 'chci', 'chtějí'], correct: 2, explanation: '"chci" is the 1st person singular (I want).' },
        { question: 'Zítra _______ jít do práce.', options: ['musím', 'musíš', 'musí', 'musíme'], correct: 0, explanation: '"musím" means "I must / I have to".' },
        { question: 'On _______ mluvit česky.', options: ['umím', 'umíš', 'umí', 'umíte'], correct: 2, explanation: '"umí" means "he/she knows how to".' },
        { question: 'My _______ jet na výlet.', options: ['můžu', 'můžeme', 'můžeš', 'můžou'], correct: 1, explanation: '"můžeme" means "we can / we are able to".' }
      ]
    },
    insights: [
      {
        title: "Telling Time",
        content: [
          "To ask 'What time is it?', we say 'Kolik je hodin?'.",
          "To ask 'At what time does it start?', we say 'V kolik hodin to začíná?'. Note the preposition 'V'."
        ]
      },
      {
        title: "Modal Verbs",
        content: [
          "Modal verbs modify the main verb. They include: chtít (to want), muset (must/have to), moct (can), and umět (know how to).",
          "The main verb always stays in the infinitive (e.g., 'Chci spát' = I want to sleep).",
          "'Chtít' has an irregular conjugation: chci, chceš, chce, chceme, chcete, chtějí."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'time-dialogue', title: 'What time is it?', desc: 'Talking about time and schedules.', icon: 'Clock', color: 'cyan' },
      { type: 'vocab', id: 'routine', title: 'Daily Routine', desc: 'Actions and days of the week.', icon: 'Calendar', color: 'rose' },
      { type: 'matching', id: 'routine', title: 'Match: Routine', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'modals', title: 'Modal Verbs', desc: 'Want, must, can, know how.', icon: 'BookOpen', color: 'blue' }
    ]
  },
  6: {
    id: 6,
    title: "Lesson 6: Co jsi dneska dělal/a?",
    subtitle: "What did you do today?",
    description: "Past tense, daily activities, and countries.",
    dialogue: [
      { speaker: 'Eva', cz: 'Ahoj, jak se máš? Co jsi dneska dělal?', en: 'Hi, how are you? What did you do today?' },
      { speaker: 'Petr', cz: 'Nic moc. Měl jsem celý den volno.', en: 'Nothing much. I had the whole day off.' },
      { speaker: 'Eva', cz: 'Já jsem naopak celý den pracovala.', en: 'I, on the contrary, worked all day.' },
      { speaker: 'Petr', cz: 'A kde byli Tom a Marina?', en: 'And where were Tom and Marina?' },
      { speaker: 'Eva', cz: 'Tom šel k doktorovi a Marina šla do práce.', en: 'Tom went to the doctor and Marina went to work.' },
      { speaker: 'Petr', cz: 'A co jsi dělala večer?', en: 'And what did you do in the evening?' },
      { speaker: 'Eva', cz: 'Pozvala jsem kamarádku a uvařily jsme večeři.', en: 'I invited a friend and we cooked dinner.' },
      { speaker: 'Petr', cz: 'To je fajn. Já jsem celý večer spal!', en: 'That is nice. I slept the whole evening!' },
      { speaker: 'Eva', cz: 'Tak to byl hezký den. Ahoj!', en: 'So it was a nice day. Bye!' }
    ],
    vocab: {
      past: [
        { cz: 'dělal / dělala', en: 'did' },
        { cz: 'byl / byla', en: 'was' },
        { cz: 'měl / měla', en: 'had' },
        { cz: 'šel / šla', en: 'went' },
        { cz: 'vstával', en: 'got up' },
        { cz: 'odpočíval', en: 'rested / relaxed' },
        { cz: 'včera', en: 'yesterday' }
      ]
    },
    grammar: {
      pastTense: [
        { question: 'Včera _______ byl doma.', options: ['jsi', 'jsem', 'je', 'jsme'], correct: 1, explanation: 'Use the auxiliary "jsem" for the 1st person singular (I was).' },
        { question: 'Co jsi dneska _______?', options: ['děláš', 'dělal', 'dělám', 'dělat'], correct: 1, explanation: 'The l-form "dělal" is required for the past tense.' },
        { question: 'Marina _______ do práce.', options: ['šel', 'šla', 'šli', 'jít'], correct: 1, explanation: '"šla" is the feminine past tense form of "jít" (she went).' },
        { question: 'My jsme _______ test.', options: ['psali', 'psal', 'psala', 'psát'], correct: 0, explanation: '"psali" is the plural past tense form (we wrote).' }
      ]
    },
    insights: [
      {
        title: "Forming the Past Tense",
        content: [
          "To form the past tense in Czech, drop the '-t' from the infinitive and add '-l' to create the 'l-form' (e.g. dělat -> dělal).",
          "Then, combine it with the present tense of the verb 'být' (jsem, jsi, jsme, jste).",
          "NOTE: For the 3rd person (he/she/it/they), we drop the auxiliary verb completely! Just say 'On dělal' (He did), NOT 'On je dělal'."
        ]
      },
      {
        title: "The Strict 2nd Position Rule",
        content: [
          "The auxiliary verbs (jsem, jsi, jsme, jste) and reflexive pronouns (se, si) MUST be placed in the second logical position of the sentence.",
          "Correct: Včera jsem byl doma.",
          "Incorrect: Jsem byl včera doma."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'past-dialogue', title: 'What did you do?', desc: 'Talking about the past.', icon: 'MessageCircle', color: 'blue' },
      { type: 'vocab', id: 'past', title: 'Past Activities', desc: 'Verbs in the past tense.', icon: 'History', color: 'emerald' },
      { type: 'matching', id: 'past', title: 'Match: Past Tense', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'pastTense', title: 'Past Tense', desc: 'How to form the past tense.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  7: {
    id: 7,
    title: "Lesson 7: Dům a byt",
    subtitle: "Houses and flats",
    description: "Housing vocabulary, furniture, and plurals.",
    dialogue: [
      { speaker: 'Petr', cz: 'Byty jsou dneska drahé, ale my jsme sehnali levný.', en: 'Flats are expensive today, but we found a cheap one.' },
      { speaker: 'Eva', cz: 'A velký! To je fajn, že v kuchyni už máme sporák.', en: 'And big! It\'s great that we already have a stove in the kitchen.' },
      { speaker: 'Petr', cz: 'Postel dáme do ložnice, stůl do kuchyně.', en: 'We will put the bed in the bedroom, the table in the kitchen.' },
      { speaker: 'Eva', cz: 'A co obývák? Já chci velkou sedačku.', en: 'And what about the living room? I want a big sofa.' },
      { speaker: 'Petr', cz: 'Tak dobře. A koupíme i dvě křesla.', en: 'Alright. And we will also buy two armchairs.' },
      { speaker: 'Eva', cz: 'A potřebujeme taky čtyři židle do kuchyně.', en: 'And we also need four chairs for the kitchen.' },
      { speaker: 'Petr', cz: 'A do koupelny? Máme tam dvě skříňky?', en: 'And for the bathroom? Do we have two cabinets there?' },
      { speaker: 'Eva', cz: 'Ano, to stačí. Ten byt je fajn. Máme dva pokoje, kuchyň a velký obývák!', en: 'Yes, that is enough. The flat is great. We have two rooms, a kitchen, and a big living room!' }
    ],
    vocab: {
      housing: [
        { cz: 'byt', en: 'flat / apartment' },
        { cz: 'kuchyň', en: 'kitchen' },
        { cz: 'koupelna', en: 'bathroom' },
        { cz: 'obývák', en: 'living room' },
        { cz: 'ložnice', en: 'bedroom' },
        { cz: 'postel', en: 'bed' },
        { cz: 'stůl', en: 'table' },
        { cz: 'židle', en: 'chair' }
      ]
    },
    grammar: {
      plurals: [
        { question: 'To jsou dvě nová ______.', options: ['křesla', 'křeslo', 'křeslům', 'křeslem'], correct: 0, explanation: 'The plural of "křeslo" (neuter) is "křesla".' },
        { question: 'Máme dva dětské ______.', options: ['pokoj', 'pokoje', 'pokojích', 'pokojem'], correct: 1, explanation: 'The plural of "pokoj" (masculine inanimate) is "pokoje".' },
        { question: 'Koupíme dvě velké ______.', options: ['postele', 'postel', 'postelích', 'postelí'], correct: 0, explanation: 'The plural of "postel" (feminine) is "postele".' },
        { question: 'Potřebujeme čtyři ______.', options: ['židle', 'židlí', 'židli', 'židlích'], correct: 0, explanation: 'The plural of "židle" (feminine) is "židle".' }
      ]
    },
    insights: [
      {
        title: "The Numbers 1 and 2",
        content: [
          "When using the numbers 1 and 2, the form of the numeral changes according to the noun's gender.",
          "Masculine/Neuter: jeden byt, jedno křeslo, dva byty.",
          "Feminine: jedna koupelna, dvě koupelny, dvě židle."
        ]
      },
      {
        title: "Plurals (Numbers 2, 3, 4)",
        content: [
          "The nominative plural is used after the numerals 2, 3, and 4 (e.g. dva pokoje, tři židle).",
          "Numbers 5 and higher require a completely different case (the genitive plural). Focus only on 2, 3, and 4 for now!"
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'house-dialogue', title: 'Furnishing a Flat', desc: 'Discussing rooms and furniture.', icon: 'Building', color: 'emerald' },
      { type: 'vocab', id: 'housing', title: 'House & Furniture', desc: 'Rooms and objects in a house.', icon: 'Box', color: 'rose' },
      { type: 'matching', id: 'housing', title: 'Match: House', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'plurals', title: 'Plurals (2,3,4)', desc: 'Nominative and accusative plurals.', icon: 'BookOpen', color: 'cyan' }
    ]
  },
  8: {
    id: 8,
    title: "Lesson 8: Plánujeme víkend",
    subtitle: "Planning our weekend",
    description: "Future tense, free time activities, and making plans.",
    dialogue: [
      { speaker: 'Eva', cz: 'Tak co myslíš, co dneska budeme dělat?', en: 'So what do you think, what will we do today?' },
      { speaker: 'Petr', cz: 'Já jsem nějaký unavený. Budeme doma a celý den budeme odpočívat, ne?', en: 'I am somewhat tired. We will be at home and rest all day, right?' },
      { speaker: 'Eva', cz: 'Tak dobře. Ale co večer?', en: 'Okay. But what about the evening?' },
      { speaker: 'Petr', cz: 'Večer půjdeme do kina. Koupím lístky.', en: 'In the evening we will go to the cinema. I will buy the tickets.' },
      { speaker: 'Eva', cz: 'Fajn. A co v neděli? Pojedeme někam na výlet?', en: 'Great. And what about Sunday? Shall we go somewhere on a trip?' },
      { speaker: 'Petr', cz: 'Ano, pojedeme na Karlštejn. Bude krásné počasí.', en: 'Yes, we will go to Karlštejn. The weather will be beautiful.' },
      { speaker: 'Eva', cz: 'Super! Vezmu si fotoaparát. Budeme fotit!', en: 'Super! I will take the camera. We will take photos!' },
      { speaker: 'Petr', cz: 'A večer budeme grilovat u Davida.', en: 'And in the evening we will have a barbecue at David\'s.' },
      { speaker: 'Eva', cz: 'Fajn, to bude skvělý víkend!', en: 'Great, it will be an awesome weekend!' }
    ],
    vocab: {
      freetime: [
        { cz: 'číst', en: 'to read' },
        { cz: 'odpočívat', en: 'to relax / to rest' },
        { cz: 'lyžovat', en: 'to ski' },
        { cz: 'plavat', en: 'to swim' },
        { cz: 'tancovat', en: 'to dance' },
        { cz: 'hrát tenis', en: 'to play tennis' },
        { cz: 'výlet', en: 'trip' }
      ]
    },
    grammar: {
      future: [
        { question: 'Zítra _______ doma.', options: ['jsem', 'byl', 'budu', 'být'], correct: 2, explanation: '"budu" is the 1st person singular future tense of "být" (I will be).' },
        { question: 'Večer _______ do kina.', options: ['půjdeme', 'jdeme', 'šli', 'jít'], correct: 0, explanation: '"půjdeme" is the future tense of "jít" for "we" (we will go).' },
        { question: 'Co dneska _______ dělat?', options: ['jsme', 'budeme', 'jdeme', 'máme'], correct: 1, explanation: '"budeme dělat" forms the future tense for imperfective verbs (what will we do).' },
        { question: 'V neděli _______ někam na výlet.', options: ['pojedeme', 'jedeme', 'jeli', 'jet'], correct: 0, explanation: '"pojedeme" is the future tense of "jet" for vehicles (we will go/drive).' }
      ]
    },
    insights: [
      {
        title: "The Future Tense",
        content: [
          "For most verbs (imperfective verbs), the future tense is formed using the future of 'být' + the infinitive: budu dělat (I will do).",
          "However, motion verbs are irregular! You don't say 'budu jít'. Instead, they have their own one-word future forms.",
          "Jít -> Půjdu (I will walk). Jet -> Pojedu (I will drive)."
        ]
      },
      {
        title: "Direction Prepositions (Kam?)",
        content: [
          "When answering the question Kam? (Where to?), use 'do' for buildings/cities (do kina), 'na' for events/open spaces (na koncert), and 'k' for people (k doktorovi)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'weekend-dialogue', title: 'Weekend Plans', desc: 'Discussing what to do.', icon: 'MessageCircle', color: 'rose' },
      { type: 'vocab', id: 'freetime', title: 'Free Time', desc: 'Hobbies and weekend activities.', icon: 'Activity', color: 'cyan' },
      { type: 'matching', id: 'freetime', title: 'Match: Free Time', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'future', title: 'Future Tense', desc: 'Talking about tomorrow.', icon: 'CalendarPlus', color: 'blue' }
    ]
  },
  9: {
    id: 9,
    title: "Lesson 9: Lidské tělo",
    subtitle: "The human body",
    description: "Body parts, visiting the doctor, and irregular plurals.",
    dialogue: [
      { speaker: 'Doktorka', cz: 'Dobrý den! Tak co potřebujete?', en: 'Hello! So what do you need?' },
      { speaker: 'Marina', cz: 'Paní doktorko, bolí mě hlava a taky hodně v krku.', en: 'Doctor, my head hurts and also my throat a lot.' },
      { speaker: 'Doktorka', cz: 'A máte teplotu?', en: 'And do you have a fever?' },
      { speaker: 'Marina', cz: 'Mám jenom 37,5, ale je mi špatně.', en: 'I only have 37.5, but I feel sick.' },
      { speaker: 'Doktorka', cz: 'Otevřete ústa... Řekněte á.', en: 'Open your mouth... Say ah.' },
      { speaker: 'Doktorka', cz: 'Máte angínu. Bolí vás taky uši?', en: 'You have a throat infection. Do your ears hurt too?' },
      { speaker: 'Marina', cz: 'Ne, uši mě nebolí, ale bolí mě záda.', en: 'No, my ears don\'t hurt, but my back hurts.' },
      { speaker: 'Doktorka', cz: 'Tady je recept. Třikrát denně. A ležte v posteli!', en: 'Here is a prescription. Three times a day. And stay in bed!' },
      { speaker: 'Marina', cz: 'Děkuju, paní doktorko. Na shledanou!', en: 'Thank you, doctor. Goodbye!' }
    ],
    vocab: {
      body: [
        { cz: 'hlava', en: 'head' },
        { cz: 'oko / oči', en: 'eye / eyes' },
        { cz: 'ucho / uši', en: 'ear / ears' },
        { cz: 'ruka / ruce', en: 'hand / hands (arms)' },
        { cz: 'noha / nohy', en: 'leg / legs' },
        { cz: 'břicho', en: 'stomach / belly' },
        { cz: 'záda', en: 'back' }
      ]
    },
    grammar: {
      doctor: [
        { question: 'Co _______ bolí?', options: ['vás', 'vy', 'vám', 'váš'], correct: 0, explanation: 'We use the accusative "vás" with the verb "bolet" (What is hurting you?).' },
        { question: 'Je _______ špatně.', options: ['já', 'mě', 'mi', 'mnou'], correct: 2, explanation: 'We use the dative "mi" with "je špatně" (I feel sick).' },
        { question: 'Mám dvě _______.', options: ['oko', 'oči', 'oka', 'očích'], correct: 1, explanation: 'The plural of "oko" is irregular: "oči".' },
        { question: 'Bolí mě _______.', options: ['ruce', 'ruka', 'ruky', 'ruk'], correct: 0, explanation: 'The irregular plural of "ruka" is "ruce" (my hands/arms hurt).' }
      ]
    },
    insights: [
      {
        title: "Irregular Plurals",
        content: [
          "Body parts that come in pairs often have highly irregular plural forms inherited from an old 'dual' case.",
          "Oko (eye) -> Oči (eyes)",
          "Ucho (ear) -> Uši (ears)",
          "Ruka (hand) -> Ruce (hands)"
        ]
      },
      {
        title: "Expressing Pain",
        content: [
          "Czech uses the Accusative case to say what hurts: 'Bolí mě hlava' (The head hurts ME).",
          "However, to say 'I feel sick', Czech uses the Dative case: 'Je mi špatně' (It is bad TO ME)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'doctor-dialogue', title: 'At the Doctor', desc: 'Describing symptoms.', icon: 'MessageCircle', color: 'cyan' },
      { type: 'vocab', id: 'body', title: 'Body Parts', desc: 'Anatomy and health.', icon: 'Heart', color: 'rose' },
      { type: 'matching', id: 'body', title: 'Match: Body', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'doctor', title: 'Doctor Phrases', desc: 'Irregular plurals and symptoms.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  10: {
    id: 10,
    title: "Lesson 10: Místo, kde bydlíme",
    subtitle: "The place we live",
    description: "Shops, places in the city, and the genitive case.",
    dialogue: [
      { speaker: 'Adéla', cz: 'Ahoj Marino, jak se máš? Bydlíš pořád u centra?', en: 'Hi Marina, how are you? Do you still live near the center?' },
      { speaker: 'Marina', cz: 'Ne, přestěhovala jsem se. Bydlím teď kousek od bazénu.', en: 'No, I moved. I live a short walk from the pool now.' },
      { speaker: 'Adéla', cz: 'To je fajn! A máš blízko obchody?', en: 'That\'s great! And do you have shops nearby?' },
      { speaker: 'Marina', cz: 'Ano, hned vedle domu mám lékárnu, pekárnu a potraviny.', en: 'Yes, right next to the house I have a pharmacy, bakery, and grocery store.' },
      { speaker: 'Adéla', cz: 'A máš daleko do školy?', en: 'And is the school far from you?' },
      { speaker: 'Marina', cz: 'Ne, škola je kousek od domu. A vedle školy je hezký park.', en: 'No, the school is a short distance from the house. And next to the school is a nice park.' },
      { speaker: 'Adéla', cz: 'To je super. Já bydlím daleko od centra.', en: 'That is great. I live far from the center.' },
      { speaker: 'Marina', cz: 'Přijeď ke mně na návštěvu! Bydlím blízko zastávky.', en: 'Come visit me! I live near the bus stop.' }
    ],
    vocab: {
      shops: [
        { cz: 'lékárna', en: 'pharmacy' },
        { cz: 'potraviny', en: 'grocery store' },
        { cz: 'pekařství / pekárna', en: 'bakery' },
        { cz: 'drogerie', en: 'chemist\'s / drugstore' },
        { cz: 'knihkupectví', en: 'bookshop' },
        { cz: 'papírnictví', en: 'stationer\'s' }
      ]
    },
    grammar: {
      genitive: [
        { question: 'Jdu do ______.', options: ['škola', 'školy', 'školu', 'školou'], correct: 1, explanation: 'The preposition "do" requires the genitive case ("školy").' },
        { question: 'Bydlím blízko ______.', options: ['nádraží', 'nádražího', 'nádražím', 'nádražích'], correct: 0, explanation: 'The genitive of "nádraží" remains "nádraží".' },
        { question: 'Jsem u ______.', options: ['doktor', 'doktorovi', 'doktora', 'doktorem'], correct: 2, explanation: 'The preposition "u" (at) requires the genitive ("doktora").' },
        { question: 'Jedu z ______ do Prahy.', options: ['Brno', 'Brnu', 'Brna', 'Brnem'], correct: 2, explanation: '"z" (from) requires the genitive case ("Brna").' }
      ]
    },
    insights: [
      {
        title: "Prepositions with the Genitive",
        content: [
          "The Genitive case is heavily used to describe location and origins. It follows prepositions like: z/ze (from), do (to), u (at/by), od (from), blízko (near), and vedle (next to).",
          "Example: Bydlím vedle školy. (I live next to the school)."
        ]
      },
      {
        title: "U vs. Do",
        content: [
          "Use 'u' for being at someone's place or near a building: Jsem u doktora (I am at the doctor's).",
          "Use 'do' for moving into a closed space: Jdu do kina (I am going to the cinema)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'living-dialogue', title: 'Neighborhood', desc: 'Talking about where you live.', icon: 'MessageCircle', color: 'emerald' },
      { type: 'vocab', id: 'shops', title: 'Shops & Places', desc: 'Everyday places in the city.', icon: 'Store', color: 'cyan' },
      { type: 'matching', id: 'shops', title: 'Match: Shops', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'genitive', title: 'Genitive Case', desc: 'Prepositions: do, z, u, od, vedle.', icon: 'BookOpen', color: 'blue' }
    ]
  },
  11: {
    id: 11,
    title: "Lesson 11: Na dovolené",
    subtitle: "On holiday",
    description: "Travel, holiday activities, and verbs of motion.",
    dialogue: [
      { speaker: 'Tom', cz: 'Cesta do Itálie byla docela dramatická!', en: 'The trip to Italy was quite dramatic!' },
      { speaker: 'Marina', cz: 'Co se stalo?', en: 'What happened?' },
      { speaker: 'Tom', cz: 'Nejdřív nám ujel autobus na letiště a skoro nám uletělo letadlo.', en: 'First we missed the bus to the airport and we almost missed our flight.' },
      { speaker: 'Marina', cz: 'A pak?', en: 'And then?' },
      { speaker: 'Tom', cz: 'Na letišti jsme zjistili, že se ztratil můj kufr.', en: 'At the airport we found out my suitcase got lost.' },
      { speaker: 'Marina', cz: 'To je hrozné! A našel se ten kufr?', en: 'That is terrible! And was the suitcase found?' },
      { speaker: 'Tom', cz: 'Nakonec jsme přijeli do hotelu a kufr přišel až druhý den.', en: 'In the end we arrived at the hotel and the suitcase came only the next day.' },
      { speaker: 'Marina', cz: 'A jak bylo v Itálii? Jezdili jste hodně?', en: 'And how was it in Italy? Did you travel a lot?' },
      { speaker: 'Tom', cz: 'Jezdili jsme každý den. Bylo to super, i když začátek byl dramatický!', en: 'We traveled every day. It was great, even though the beginning was dramatic!' }
    ],
    vocab: {
      travel: [
        { cz: 'letenka', en: 'plane ticket' },
        { cz: 'cestovní pas', en: 'passport' },
        { cz: 'kufr', en: 'suitcase' },
        { cz: 'batoh', en: 'backpack' },
        { cz: 'lyžovat', en: 'to ski' },
        { cz: 'opalovat se', en: 'to sunbathe' },
        { cz: 'průvodce', en: 'guidebook / tour guide' }
      ]
    },
    grammar: {
      motionVerbs: [
        { question: 'Každý den ______ do školy.', options: ['jdu', 'chodím', 'jedu', 'letím'], correct: 1, explanation: '"chodím" is a long verb of motion used for repeated actions (every day).' },
        { question: 'Dneska večer ______ do kina.', options: ['chodím', 'jezdím', 'jdu', 'létám'], correct: 2, explanation: '"jdu" is a short verb of motion used for a specific planned action (tonight).' },
        { question: 'O víkendu obvykle ______ na chatu.', options: ['jedu', 'jezdím', 'jdu', 'chodím'], correct: 1, explanation: '"jezdím" is for repeated travel by vehicle.' },
        { question: 'Zítra ______ do Prahy vlakem.', options: ['pojedu', 'jezdím', 'půjdu', 'chodím'], correct: 0, explanation: '"pojedu" is the future form of "jet" (one-time trip by vehicle).' }
      ]
    },
    insights: [
      {
        title: "Long vs. Short Verbs of Motion",
        content: [
          "Czech uses different verbs depending on whether a motion is repeated or a one-time event.",
          "Short (One-time/Specific): jít (walk), jet (drive), letět (fly). Example: Zítra jedu do Prahy.",
          "Long (Repeated/General): chodit (walk), jezdit (drive), létat (fly). Example: Často jezdím na kole."
        ]
      },
      {
        title: "Prefixes for Motion",
        content: [
          "You can change the direction of a motion verb by adding a prefix.",
          "Při- (arrival): přijet (to arrive by vehicle).",
          "Od- (departure): odletět (to depart by plane)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'holiday-dialogue', title: 'Travel Trouble', desc: 'Discussing a trip.', icon: 'MessageCircle', color: 'rose' },
      { type: 'vocab', id: 'travel', title: 'Travel Essentials', desc: 'Packing and holiday activities.', icon: 'Plane', color: 'cyan' },
      { type: 'matching', id: 'travel', title: 'Match: Travel', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'motionVerbs', title: 'Verbs of Motion', desc: 'jít vs chodit, jet vs jezdit.', icon: 'Compass', color: 'purple' }
    ]
  },
  12: {
    id: 12,
    title: "Lesson 12: Tradiční svátky",
    subtitle: "Traditional holidays",
    description: "Christmas, Easter, New Year, and traditions.",
    dialogue: [
      { speaker: 'Tom', cz: 'Jak slavíte Vánoce v České republice?', en: 'How do you celebrate Christmas in the Czech Republic?' },
      { speaker: 'Eva', cz: 'Hlavní svátek je 24. prosince. Jíme rybí polévku a kapra.', en: 'The main holiday is December 24th. We eat fish soup and carp.' },
      { speaker: 'Tom', cz: 'A co dárky? Kdo je nosí?', en: 'And what about presents? Who brings them?' },
      { speaker: 'Eva', cz: 'Děti věří, že dárky nosí Ježíšek.', en: 'Children believe that baby Jesus brings the presents.' },
      { speaker: 'Tom', cz: 'A co se ještě dělá na Vánoce?', en: 'And what else is done at Christmas?' },
      { speaker: 'Eva', cz: 'Peče se cukroví a zdobí se stromeček.', en: 'Cookies are baked and the tree is decorated.' },
      { speaker: 'Tom', cz: 'A jak se slaví Silvestr?', en: 'And how is New Year\'s Eve celebrated?' },
      { speaker: 'Eva', cz: 'Na Silvestra se pije šampaňské a sleduje se ohňostroj.', en: 'On New Year\'s Eve champagne is drunk and fireworks are watched.' },
      { speaker: 'Tom', cz: 'To se mi líbí! České svátky jsou krásné.', en: 'I like that! Czech holidays are beautiful.' }
    ],
    vocab: {
      holidays: [
        { cz: 'Vánoce', en: 'Christmas' },
        { cz: 'Velikonoce', en: 'Easter' },
        { cz: 'Silvestr', en: 'New Year\'s Eve' },
        { cz: 'dárek / dárky', en: 'present / gifts' },
        { cz: 'cukroví', en: 'Christmas cookies / sweets' },
        { cz: 'stromeček', en: 'Christmas tree' }
      ]
    },
    grammar: {
      passive: [
        { question: 'Na Vánoce ______ kapr.', options: ['jí se', 'jíme', 'jíst', 'se jedí'], correct: 0, explanation: '"jí se" means "carp is eaten" (Reflexive passive).' },
        { question: 'Vánoce ______ tři dny.', options: ['se slaví', 'slaví', 'slavíme', 'slavit'], correct: 0, explanation: '"se slaví" means "Christmas is celebrated" (Reflexive passive).' },
        { question: 'Na Silvestra ______ šampaňské.', options: ['pije se', 'se pije', 'pijí', 'pijeme'], correct: 1, explanation: '"se pije" means "champagne is drunk". Remember the 2nd position rule for "se".' },
        { question: 'Děti věří, že dárky ______ Ježíšek.', options: ['nosí', 'se nosí', 'nosíme', 'nosit'], correct: 0, explanation: 'Active sentence: Baby Jesus brings (nosí) the presents.' }
      ]
    },
    insights: [
      {
        title: "The Reflexive Passive",
        content: [
          "To say 'something is done' generally (without saying who does it), use the 3rd person of the verb + 'se'.",
          "Example: Vánoce se slaví tři dny. (Christmas is celebrated for three days).",
          "Example: Jí se sladké cukroví. (Sweet pastries are eaten)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'holiday-traditions', title: 'Czech Holidays', desc: 'Learning about Christmas.', icon: 'Gift', color: 'emerald' },
      { type: 'vocab', id: 'holidays', title: 'Celebrations', desc: 'Words for festive days.', icon: 'Sparkles', color: 'cyan' },
      { type: 'matching', id: 'holidays', title: 'Match: Holidays', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'passive', title: 'Reflexive Passive', desc: 'How to say "It is done".', icon: 'BookOpen', color: 'blue' }
    ]
  },
  13: {
    id: 13,
    title: "Lesson 13: Výmluvy a přání",
    subtitle: "Excuses and wishes",
    description: "The conditional mood and personal characteristics.",
    dialogue: [
      { speaker: 'Eva', cz: 'Co bys dělal, kdybys vyhrál milion?', en: 'What would you do if you won a million?' },
      { speaker: 'Petr', cz: 'Koupil bych si velký dům a cestoval bych.', en: 'I would buy a big house and I would travel.' },
      { speaker: 'Eva', cz: 'Já bych jela na cestu kolem světa.', en: 'I would go on a trip around the world.' },
      { speaker: 'Petr', cz: 'A kdybys mohla bydlet kdekoliv, kde bys bydlela?', en: 'And if you could live anywhere, where would you live?' },
      { speaker: 'Eva', cz: 'Bydlela bych u moře. A ty?', en: 'I would live by the sea. And you?' },
      { speaker: 'Petr', cz: 'Já bych si koupil ostrov!', en: 'I would buy an island!' },
      { speaker: 'Petr', cz: 'A pracovala bys?', en: 'And would you work?' },
      { speaker: 'Eva', cz: 'Určitě ne!', en: 'Definitely not!' }
    ],
    vocab: {
      traits: [
        { cz: 'líný', en: 'lazy' },
        { cz: 'pilný', en: 'hardworking' },
        { cz: 'spolehlivý', en: 'reliable' },
        { cz: 'sobecký', en: 'selfish' },
        { cz: 'upřímný', en: 'honest / sincere' },
        { cz: 'hodný', en: 'kind / good' }
      ]
    },
    grammar: {
      conditional: [
        { question: 'Já ______ to neudělal.', options: ['by', 'bych', 'bys', 'bychom'], correct: 1, explanation: '"bych" is the conditional auxiliary for the 1st person singular (I would).' },
        { question: 'Koupil ______ si nové auto?', options: ['bych', 'bys', 'by', 'byste'], correct: 1, explanation: '"bys" is the conditional auxiliary for "ty" (would you buy).' },
        { question: 'My ______ jeli na výlet.', options: ['bych', 'bys', 'by', 'bychom'], correct: 3, explanation: '"bychom" is the conditional auxiliary for "my" (we would).' },
        { question: 'Ona ______ chtěla spát.', options: ['by', 'bych', 'byste', 'bys'], correct: 0, explanation: '"by" is the conditional auxiliary for he/she/it.' }
      ]
    },
    insights: [
      {
        title: "The Conditional Mood (Would)",
        content: [
          "To say you 'would' do something, combine the past tense l-form (e.g. dělal) with a special conditional word.",
          "Já bych dělal (I would do). Ty bys dělal (You would do). On by dělal (He would do). My bychom dělali (We would do)."
        ]
      },
      {
        title: "Kdyby (If...)",
        content: [
          "When you want to say 'If I won...', you combine 'Když' (if) with the conditional word.",
          "Kdybych (If I), Kdybys (If you), Kdyby (If he/she/it)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'conditional-dialogue', title: 'If I won...', desc: 'Talking about hypotheticals.', icon: 'Wand2', color: 'purple' },
      { type: 'vocab', id: 'traits', title: 'Characteristics', desc: 'Describing people\'s traits.', icon: 'Users', color: 'cyan' },
      { type: 'matching', id: 'traits', title: 'Match: Traits', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'conditional', title: 'The Conditional', desc: 'Using bych, bys, by...', icon: 'BookOpen', color: 'rose' }
    ]
  },
  14: {
    id: 14,
    title: "Lesson 14: Mluvíme o počasí",
    subtitle: "Talking about the weather",
    description: "Weather vocabulary and comparison of adjectives.",
    dialogue: [
      { speaker: 'Marina', cz: 'Jaké bude zítra počasí?', en: 'What will the weather be like tomorrow?' },
      { speaker: 'Tom', cz: 'Bude pršet a bude zima.', en: 'It will rain and it will be cold.' },
      { speaker: 'Marina', cz: 'To je škoda. Dneska bylo krásně, svítilo slunce.', en: 'That\'s a shame. Today was beautiful, the sun was shining.' },
      { speaker: 'Tom', cz: 'Ano, včera bylo hůř než dneska.', en: 'Yes, yesterday was worse than today.' },
      { speaker: 'Marina', cz: 'V létě je teplejší než na podzim.', en: 'In summer it is warmer than in autumn.' },
      { speaker: 'Tom', cz: 'V Austrálii je větší vedro než tady.', en: 'In Australia the heat is greater than here.' },
      { speaker: 'Marina', cz: 'Ale nejkrásnější počasí je na jaře, ne?', en: 'But the most beautiful weather is in spring, right?' },
      { speaker: 'Tom', cz: 'Souhlasím. Jaro je lepší než zima. Doufám, že bude brzy líp!', en: 'I agree. Spring is better than winter. I hope it will be better soon!' }
    ],
    vocab: {
      weather: [
        { cz: 'slunce', en: 'sun' },
        { cz: 'prší', en: 'it is raining' },
        { cz: 'sněží', en: 'it is snowing' },
        { cz: 'vítr', en: 'wind' },
        { cz: 'mráz', en: 'frost' },
        { cz: 'mrak', en: 'cloud' },
        { cz: 'teplo', en: 'warm' },
        { cz: 'zima', en: 'cold' }
      ]
    },
    grammar: {
      comparisons: [
        { question: 'Dneska je krásně, ale zítra bude ještě ______.', options: ['dobře', 'lepší', 'líp / lépe', 'nejlépe'], correct: 2, explanation: '"líp / lépe" is the comparative form of the adverb "dobře" (better).' },
        { question: 'Tohle je ten ______ hotel ve městě.', options: ['nejlepší', 'lepší', 'dobrý', 'nejlépe'], correct: 0, explanation: '"nejlepší" is the superlative form of the adjective "dobrý" (the best).' },
        { question: 'Včera bylo ______ než dneska.', options: ['špatný', 'špatně', 'hůř', 'nejhůř'], correct: 2, explanation: '"hůř" is the comparative form of the adverb "špatně" (worse).' },
        { question: 'Tom je ______ než Petr.', options: ['starý', 'starší', 'nejstarší', 'staré'], correct: 1, explanation: '"starší" is the comparative form of "starý" (older).' }
      ]
    },
    insights: [
      {
        title: "Comparing Adjectives",
        content: [
          "To compare things (better, older), Czech adds the suffix -ší or -ejší/ější.",
          "Starý (old) -> Starší (older). Krásný (beautiful) -> Krásnější (more beautiful).",
          "Irregular: Dobrý -> lepší (better). Špatný -> horší (worse)."
        ]
      },
      {
        title: "The Superlative (The Best)",
        content: [
          "To form the superlative (the oldest, the best), simply add the prefix 'nej-' to the comparative form.",
          "Nejstarší (the oldest). Nejlepší (the best)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'weather-dialogue', title: 'The Forecast', desc: 'Talking about the weather.', icon: 'CloudSun', color: 'blue' },
      { type: 'vocab', id: 'weather', title: 'Meteorology', desc: 'Sun, rain, snow, and wind.', icon: 'ThermometerSun', color: 'emerald' },
      { type: 'matching', id: 'weather', title: 'Match: Weather', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'comparisons', title: 'Comparisons', desc: 'Good, better, best.', icon: 'BookOpen', color: 'rose' }
    ]
  },
  15: {
    id: 15,
    title: "Lesson 15: Technika a komunikace",
    subtitle: "Technology and communication",
    description: "Electronics, the internet, and the Dative case.",
    dialogue: [
      { speaker: 'Petr', cz: 'Potřebuju nový mobil. Můj starý už nefunguje.', en: 'I need a new mobile. My old one does not work anymore.' },
      { speaker: 'Eva', cz: 'Kup si tenhle chytrý telefon. Je rychlý.', en: 'Buy this smartphone. It is fast.' },
      { speaker: 'Petr', cz: 'Ale já chci jenom telefonovat a psát zprávy.', en: 'But I only want to call and write messages.' },
      { speaker: 'Eva', cz: 'Věř mi, internet v mobilu je super. Ukážu ti to.', en: 'Trust me, internet on the mobile is great. I will show you.' },
      { speaker: 'Petr', cz: 'Tak dobře. A kolik ten telefon stojí?', en: 'Okay then. And how much does that phone cost?' },
      { speaker: 'Eva', cz: 'Není drahý. A můžeš poslat zprávy kamarádům.', en: 'It is not expensive. And you can send messages to friends.' },
      { speaker: 'Petr', cz: 'To je fajn. Rád bych napsal e-mail doktorovi.', en: 'That is nice. I would like to write an email to the doctor.' },
      { speaker: 'Eva', cz: 'Tak pojď, koupíme ti ho! Pomůžu ti.', en: 'So come on, we will buy it for you! I will help you.' }
    ],
    vocab: {
      tech: [
        { cz: 'počítač', en: 'computer' },
        { cz: 'mobil', en: 'mobile phone' },
        { cz: 'zpráva', en: 'message' },
        { cz: 'klávesnice', en: 'keyboard' },
        { cz: 'obrazovka', en: 'screen / monitor' },
        { cz: 'volat', en: 'to call' },
        { cz: 'stáhnout', en: 'to download' }
      ]
    },
    grammar: {
      dative: [
        { question: 'Telefonuju ______.', options: ['doktor', 'doktora', 'doktorovi', 'doktorem'], correct: 2, explanation: '"volat / telefonovat" requires the Dative case ("doktorovi").' },
        { question: 'Koupím dárek ______.', options: ['maminku', 'mamince', 'maminka', 'maminkou'], correct: 1, explanation: 'Feminine nouns ending in -a take -ce/-e in the Dative ("mamince").' },
        { question: 'Dám to ______.', options: ['Petr', 'Petra', 'Petrem', 'Petrovi'], correct: 3, explanation: 'Masculine animate names usually take -ovi in the Dative.' },
        { question: 'Píšu e-mail ______.', options: ['kamarádovi', 'kamarád', 'kamaráda', 'kamarádem'], correct: 0, explanation: '"psát komu" (to write to someone) takes the Dative.' }
      ]
    },
    insights: [
      {
        title: "The Dative Case (Indirect Object)",
        content: [
          "The Dative case is used for the receiver of an action (To whom? For whom?).",
          "It is used with verbs like: dát (to give), psát (to write to), telefonovat (to call someone).",
          "Masculine animate usually takes -ovi (doktor -> doktorovi). Feminine -a changes to -ce or -e (maminka -> mamince)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'tech-dialogue', title: 'Buying a Phone', desc: 'Discussing technology.', icon: 'Smartphone', color: 'cyan' },
      { type: 'vocab', id: 'tech', title: 'Electronics', desc: 'Computers, internet, and phones.', icon: 'Monitor', color: 'blue' },
      { type: 'matching', id: 'tech', title: 'Match: Tech', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'dative', title: 'The Dative Case', desc: 'To whom? For whom?', icon: 'BookOpen', color: 'purple' }
    ]
  },
  16: {
    id: 16,
    title: "Lesson 16: Móda včera a dnes",
    subtitle: "Fashion yesterday and today",
    description: "Clothing, fashion, and expressing likes and dislikes.",
    dialogue: [
      { speaker: 'Marina', cz: 'Líbí se mi tohle červené tričko. Co myslíš?', en: 'I like this red t-shirt. What do you think?' },
      { speaker: 'Tom', cz: 'Je hezké, ale ty modré kalhoty jsou lepší.', en: 'It is nice, but those blue trousers are better.' },
      { speaker: 'Marina', cz: 'Já nerada nosím kalhoty. Radši mám sukně.', en: 'I don\'t like wearing trousers. I prefer skirts.' },
      { speaker: 'Tom', cz: 'Tak si zkus tyhle letní šaty. Sluší ti.', en: 'Then try on this summer dress. It suits you.' },
      { speaker: 'Marina', cz: 'Ty šaty se mi líbí! Co myslíš?', en: 'I like this dress! What do you think?' },
      { speaker: 'Tom', cz: 'Já mám rád sportovní oblečení, ale tobě to sluší.', en: 'I like sporty clothes, but it suits you.' },
      { speaker: 'Marina', cz: 'Děkuju! A ta černá bunda se ti nelíbí?', en: 'Thanks! And you don\'t like that black jacket?' },
      { speaker: 'Tom', cz: 'Není špatná. Dobře, jdeme platit!', en: 'It is not bad. Alright, let\'s go pay!' }
    ],
    vocab: {
      clothes: [
        { cz: 'oblečení', en: 'clothing / clothes' },
        { cz: 'tričko', en: 't-shirt' },
        { cz: 'kalhoty', en: 'trousers / pants' },
        { cz: 'boty', en: 'shoes' },
        { cz: 'bunda', en: 'jacket' },
        { cz: 'sukně', en: 'skirt' },
        { cz: 'šaty', en: 'dress' }
      ]
    },
    grammar: {
      likes: [
        { question: '______ se mi tvoje nová bunda.', options: ['Mám', 'Líbí', 'Chutná', 'Jsem'], correct: 1, explanation: '"Líbit se" is used for finding something visually pleasing or nice.' },
        { question: '______ rád sportuju.', options: ['Jsem', 'Líbí', 'Mám', 'Dělám'], correct: 2, explanation: '"Mít rád + verb" is used to express enjoying an activity.' },
        { question: 'Ta sukně se ______ moc líbí.', options: ['ona', 'ji', 'jí', 'je'], correct: 2, explanation: '"Líbit se" requires the Dative pronoun. "jí" means "to her".' },
        { question: '______ mi to české pivo.', options: ['Líbí', 'Mám', 'Jsem', 'Chutná'], correct: 3, explanation: '"Chutnat" is specifically used for liking the taste of food or drinks.' }
      ]
    },
    insights: [
      {
        title: "Líbit se vs. Mít rád vs. Chutnat",
        content: [
          "Mít rád: To like a person, thing, or activity broadly. (Mám rád kávu. Mám tě rád).",
          "Líbit se: To find something visually pleasing or nice. Uses the Dative! (Ten film se mi líbí = That movie is pleasing TO ME).",
          "Chutnat: Used specifically for liking the TASTE of food or drink. (Ta káva mi chutná = That coffee tastes good TO ME)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'fashion-dialogue', title: 'Shopping', desc: 'Buying clothes and giving opinions.', icon: 'MessageCircle', color: 'rose' },
      { type: 'vocab', id: 'clothes', title: 'Clothing', desc: 'What we wear.', icon: 'Shirt', color: 'cyan' },
      { type: 'matching', id: 'clothes', title: 'Match: Fashion', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'likes', title: 'Expressing Likes', desc: 'Mít rád, líbit se, chutnat.', icon: 'Heart', color: 'emerald' }
    ]
  },
  17: {
    id: 17,
    title: "Lesson 17: Stěhujeme se",
    subtitle: "We're moving",
    description: "Moving vocabulary, trades, and the Instrumental case.",
    dialogue: [
      { speaker: 'Tom', cz: 'Zítra se stěhujeme do nového bytu. Potřebujeme pomoc.', en: 'Tomorrow we are moving to a new flat. We need help.' },
      { speaker: 'Petr', cz: 'Jasně, přijedu s mým autem. Máte hodně krabic?', en: 'Sure, I will arrive with my car. Do you have a lot of boxes?' },
      { speaker: 'Tom', cz: 'Ano, a nábytek je velmi těžký. Budeme stěhovat i skříň.', en: 'Yes, and the furniture is very heavy. We will also move the wardrobe.' },
      { speaker: 'Petr', cz: 'Neboj se, s Davidem to zvládneme.', en: 'Don\'t worry, with David we will manage it.' },
      { speaker: 'Tom', cz: 'Skříň musíme nést s kamarádem Davidem.', en: 'We have to carry the wardrobe with our friend David.' },
      { speaker: 'Petr', cz: 'A jak pojedete? Autobusem, nebo autem?', en: 'And how will you go? By bus or by car?' },
      { speaker: 'Tom', cz: 'Pojedeme autem. A ty můžeš přijet s Evou, ne?', en: 'We will go by car. And you can come with Eva, right?' },
      { speaker: 'Petr', cz: 'Jasně. Uvidíme se zítra před domem!', en: 'Sure. We will see each other tomorrow in front of the house!' }
    ],
    vocab: {
      moving: [
        { cz: 'stěhovat se', en: 'to move (houses)' },
        { cz: 'krabice', en: 'box' },
        { cz: 'nábytek', en: 'furniture' },
        { cz: 'těžký', en: 'heavy' },
        { cz: 'klíče', en: 'keys' },
        { cz: 'malíř', en: 'painter' },
        { cz: 'opravář', en: 'repairman' }
      ]
    },
    grammar: {
      instrumental: [
        { question: 'Jdu do kina s ______.', options: ['Petr', 'Petra', 'Petrovi', 'Petrem'], correct: 3, explanation: 'The preposition "s" (with) requires the Instrumental case ("Petrem").' },
        { question: 'Píšu domácí úkol ______.', options: ['pero', 'perem', 'peru', 'pera'], correct: 1, explanation: 'When using a tool/instrument (with a pen), use the Instrumental case.' },
        { question: 'Mluvím s ______.', options: ['maminka', 'maminku', 'maminkou', 'mamince'], correct: 2, explanation: 'Feminine nouns ending in -a take -ou in the Instrumental ("maminkou").' },
        { question: 'Rád cestuju ______.', options: ['vlak', 'vlaku', 'vlakem', 'vlaky'], correct: 2, explanation: 'Traveling by a vehicle uses the Instrumental without a preposition ("vlakem").' }
      ]
    },
    insights: [
      {
        title: "The Instrumental Case",
        content: [
          "The Instrumental case answers the questions: With whom? With what? (S kým? S čím?).",
          "It is used after the preposition 's/se' (with) or standalone when talking about tools/transport.",
          "Masculine/Neuter nouns take -em (s Petrem). Feminine nouns take -ou (s maminkou)."
        ]
      },
      {
        title: "Transport (No Preposition)",
        content: [
          "When you travel BY a vehicle, use the Instrumental case WITHOUT the preposition 's'.",
          "Correct: Jedu vlakem (I go by train).",
          "Incorrect: Jedu s vlakem."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'moving-dialogue', title: 'Moving Day', desc: 'Asking for help to move.', icon: 'Truck', color: 'blue' },
      { type: 'vocab', id: 'moving', title: 'Trades & Moving', desc: 'Boxes, furniture, and workers.', icon: 'Box', color: 'cyan' },
      { type: 'matching', id: 'moving', title: 'Match: Moving', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'instrumental', title: 'Instrumental Case', desc: 'With whom? With what?', icon: 'Users', color: 'purple' }
    ]
  },
  18: {
    id: 18,
    title: "Lesson 18: Etapy života",
    subtitle: "Life stages",
    description: "Life events, relationships, and the Locative case.",
    dialogue: [
      { speaker: 'Eva', cz: 'Můj dědeček se narodil v roce 1950.', en: 'My grandfather was born in 1950.' },
      { speaker: 'Petr', cz: 'To byl zajímavý život. Kde studoval a pracoval?', en: 'That was an interesting life. Where did he study and work?' },
      { speaker: 'Eva', cz: 'Studoval v Praze a pak se oženil s mojí babičkou.', en: 'He studied in Prague and then he married my grandmother.' },
      { speaker: 'Petr', cz: 'Často o něm mluvíš. Musel to být skvělý člověk.', en: 'You talk about him often. He must have been a great person.' },
      { speaker: 'Eva', cz: 'Studoval v Praze a pracoval v nemocnici. Byl doktor.', en: 'He studied in Prague and worked in a hospital. He was a doctor.' },
      { speaker: 'Petr', cz: 'A v kolika letech šel do důchodu?', en: 'And at what age did he retire?' },
      { speaker: 'Eva', cz: 'V šedesáti. Pak žil na vesnici a pečoval o zahradu.', en: 'At sixty. Then he lived in a village and took care of the garden.' },
      { speaker: 'Petr', cz: 'To byl krásný život.', en: 'That was a beautiful life.' }
    ],
    vocab: {
      life: [
        { cz: 'narodit se', en: 'to be born' },
        { cz: 'dítě', en: 'child' },
        { cz: 'dospělý', en: 'adult' },
        { cz: 'život', en: 'life' },
        { cz: 'svatba', en: 'wedding' },
        { cz: 'oženit se / vdát se', en: 'to get married' },
        { cz: 'zemřít / umřít', en: 'to die' }
      ]
    },
    grammar: {
      locativeO: [
        { question: 'Mluvíme o ______.', options: ['život', 'životě', 'životu', 'životem'], correct: 1, explanation: 'The preposition "o" (about) requires the Locative case ("životě").' },
        { question: 'Čtu zajímavou knihu o ______.', options: ['Praha', 'Prahu', 'Prahou', 'Praze'], correct: 3, explanation: 'Feminine nouns like Praha shift to Praze in the Locative.' },
        { question: 'Často přemýšlím o ______.', options: ['škola', 'školu', 'škole', 'školou'], correct: 2, explanation: '"Přemýšlet o" (to think about) takes the Locative ("škole").' },
        { question: 'Je to krásný film o ______.', options: ['lásce', 'láska', 'lásku', 'láskou'], correct: 0, explanation: '"láska" (love) changes to "lásce" in the Locative case.' }
      ]
    },
    insights: [
      {
        title: "The Locative Case with 'O'",
        content: [
          "In Lesson 10 we learned the Locative case is used for location (v Praze). It is also used after the preposition 'o' (about).",
          "Verbs that trigger this: mluvit o (to speak about), číst o (to read about), přemýšlet o (to think about)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'life-dialogue', title: 'Biography', desc: 'Talking about someone\'s life.', icon: 'MessageCircle', color: 'emerald' },
      { type: 'vocab', id: 'life', title: 'Life Stages', desc: 'From birth to adulthood.', icon: 'Baby', color: 'cyan' },
      { type: 'matching', id: 'life', title: 'Match: Life', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'locativeO', title: 'Locative with "O"', desc: 'Talking "about" things.', icon: 'BookOpen', color: 'rose' }
    ]
  },
  19: {
    id: 19,
    title: "Lesson 19: Rodiče a děti",
    subtitle: "Parents and children",
    description: "Family rules, dos and don'ts, and the Imperative.",
    dialogue: [
      { speaker: 'Maminka', cz: 'Petře, uklid si pokoj a udělej si domácí úkol!', en: 'Petr, clean your room and do your homework!' },
      { speaker: 'Petr', cz: 'Ale mami, já se dívám na televizi.', en: 'But mom, I am watching television.' },
      { speaker: 'Maminka', cz: 'Nedívej se na televizi a jdi se učit!', en: 'Don\'t watch television and go study!' },
      { speaker: 'Petr', cz: 'Dobře, už jdu. A nezlob se!', en: 'Alright, I\'m going. And don\'t be angry!' },
      { speaker: 'Maminka', cz: 'A nezapomeň si vyčistit zuby!', en: 'And don\'t forget to brush your teeth!' },
      { speaker: 'Petr', cz: 'Mami, prosím! Všechno dělám!', en: 'Mom, please! I am doing everything!' },
      { speaker: 'Maminka', cz: 'Tak pojď, uděláme to spolu. Pomoz mi v kuchyni.', en: 'So come on, we will do it together. Help me in the kitchen.' },
      { speaker: 'Petr', cz: 'Dobře. Ale zítra si budu hrát!', en: 'Alright. But tomorrow I will play!' },
      { speaker: 'Maminka', cz: 'Tak dobře. Buď hodný!', en: 'Alright then. Be good!' }
    ],
    vocab: {
      parenting: [
        { cz: 'uklidit', en: 'to clean up' },
        { cz: 'pomáhat', en: 'to help' },
        { cz: 'zlobit', en: 'to be naughty / to annoy' },
        { cz: 'křičet', en: 'to shout / to yell' },
        { cz: 'chovat se', en: 'to behave' },
        { cz: 'dávat pozor', en: 'to pay attention / to watch out' }
      ]
    },
    grammar: {
      imperative: [
        { question: 'Ty spíš? -> ______!', options: ['Spi', 'Spíš', 'Spíme', 'Spíte'], correct: 0, explanation: 'The imperative for "ty" is formed by dropping the ending. "Spi!" means "Sleep!"' },
        { question: 'Díváš se na televizi? -> ______ se na televizi!', options: ['Nedívej', 'Nedívá', 'Nedívejte', 'Dívat'], correct: 0, explanation: 'The negative imperative uses the prefix "ne-". "Nedívej se" means "Don\'t watch".' },
        { question: 'Jdeme domů? -> ______ domů!', options: ['Jdeme', 'Pojďme', 'Jděte', 'Pojďte'], correct: 1, explanation: '"Pojďme" is the irregular imperative for "my" (Let\'s go).' },
        { question: 'Píšete úkol? -> ______ ten úkol!', options: ['Pište', 'Píšete', 'Piš', 'Píše'], correct: 0, explanation: '"Pište" is the imperative for "vy" (Write!).' }
      ]
    },
    insights: [
      {
        title: "The Imperative Mood (Commands)",
        content: [
          "Use the imperative to give orders or advice. It exists for Ty (you), Vy (you formal/plural), and My (Let's).",
          "Negative commands simply add 'ne-' to the beginning of the imperative word (e.g. Nedívej se! = Don't look!)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'parenting-dialogue', title: 'Clean your room!', desc: 'Commands and family rules.', icon: 'MessageCircle', color: 'rose' },
      { type: 'vocab', id: 'parenting', title: 'Dos & Don\'ts', desc: 'Verbs for behavior and chores.', icon: 'AlertCircle', color: 'cyan' },
      { type: 'matching', id: 'parenting', title: 'Match: Verbs', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'imperative', title: 'The Imperative', desc: 'Giving orders and suggestions.', icon: 'BookOpen', color: 'blue' }
    ]
  },
  20: {
    id: 20,
    title: "Lesson 20: Vaříme a vážíme",
    subtitle: "Cooking and weighing",
    description: "Recipes, quantities, and the Partitive Genitive.",
    dialogue: [
      { speaker: 'Eva', cz: 'Co budeme dneska vařit?', en: 'What will we cook today?' },
      { speaker: 'Petr', cz: 'Uděláme palačinky. Máme všechno?', en: 'We will make pancakes. Do we have everything?' },
      { speaker: 'Eva', cz: 'Potřebujeme litr mléka a půl kila mouky.', en: 'We need a liter of milk and half a kilo of flour.' },
      { speaker: 'Petr', cz: 'A kolik cukru?', en: 'And how much sugar?' },
      { speaker: 'Eva', cz: 'Dvě stě gramů cukru.', en: 'Two hundred grams of sugar.' },
      { speaker: 'Petr', cz: 'A kolik vajec? Tři, nebo čtyři?', en: 'And how many eggs? Three or four?' },
      { speaker: 'Eva', cz: 'Tři vejce stačí. A přidej trochu soli.', en: 'Three eggs are enough. And add a bit of salt.' },
      { speaker: 'Petr', cz: 'A kolik palačinek z toho bude?', en: 'And how many pancakes will that make?' },
      { speaker: 'Eva', cz: 'Tak deset. To stačí pro nás dva! Já už mám hlad.', en: 'About ten. That is enough for the two of us! I am already hungry.' }
    ],
    vocab: {
      cooking: [
        { cz: 'vařit', en: 'to cook' },
        { cz: 'krájet', en: 'to cut / slice' },
        { cz: 'mouka', en: 'flour' },
        { cz: 'cukr', en: 'sugar' },
        { cz: 'sůl', en: 'salt' },
        { cz: 'gram', en: 'gram' },
        { cz: 'litr', en: 'liter' }
      ]
    },
    grammar: {
      partitiveGenitive: [
        { question: 'Potřebuju litr ______.', options: ['mléko', 'mléka', 'mlékem', 'mléku'], correct: 1, explanation: 'Quantities like "litr" require the Genitive case ("mléka").' },
        { question: 'Koupím 200 gramů ______.', options: ['cukr', 'cukru', 'cukrem', 'cukrem'], correct: 1, explanation: 'Weights like "gramů" require the following noun to be in the Genitive ("cukru").' },
        { question: 'Dám si kousek ______.', options: ['dort', 'dortu', 'dortem', 'dorty'], correct: 1, explanation: '"Kousek" (a piece) requires the Genitive ("dortu").' },
        { question: 'Kolik ______ potřebujeme?', options: ['voda', 'vodu', 'vody', 'vodou'], correct: 2, explanation: '"Kolik" (how much) requires the Genitive plural or uncountable singular ("vody").' }
      ]
    },
    insights: [
      {
        title: "The Partitive Genitive (Quantities)",
        content: [
          "When talking about measurements, weights, or portions, the substance being measured MUST be in the Genitive case.",
          "Think of it like the English word 'of'.",
          "Kousek dortu (A piece OF cake). Litr vody (A liter OF water). Gram cukru (A gram OF sugar)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'cooking-dialogue', title: 'Following a Recipe', desc: 'Asking for amounts and ingredients.', icon: 'ChefHat', color: 'emerald' },
      { type: 'vocab', id: 'cooking', title: 'Cooking & Baking', desc: 'Kitchen verbs and weights.', icon: 'Scale', color: 'cyan' },
      { type: 'matching', id: 'cooking', title: 'Match: Cooking', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'partitiveGenitive', title: 'Partitive Genitive', desc: 'How to express quantities.', icon: 'BookOpen', color: 'purple' }
    ]
  },
  21: {
    id: 21,
    title: "Lesson 21: Máme rádi zvířata",
    subtitle: "We like animals",
    description: "Pets, zoo animals, and Masculine Animate plurals.",
    dialogue: [
      { speaker: 'Tom', cz: 'Máš nějaké domácí zvíře?', en: 'Do you have any pets (domestic animals)?' },
      { speaker: 'Marina', cz: 'Ano, mám doma psa a kočku. A ty?', en: 'Yes, I have a dog and a cat at home. And you?' },
      { speaker: 'Tom', cz: 'Nemám, ale chtěl bych mít koně. Mám moc rád zvířata.', en: 'I don\'t, but I would like to have a horse. I love animals.' },
      { speaker: 'Marina', cz: 'Já taky. Zítra jdeme do zoo podívat se na slony a ptáky.', en: 'Me too. Tomorrow we are going to the zoo to look at the elephants and birds.' },
      { speaker: 'Tom', cz: 'Sloni jsou úžasní! A mají tam taky lvi a medvědi?', en: 'Elephants are amazing! And do they also have lions and bears there?' },
      { speaker: 'Marina', cz: 'Ano, mají lvy, medvědy a taky krokodýly.', en: 'Yes, they have lions, bears, and also crocodiles.' },
      { speaker: 'Tom', cz: 'Kluci z mého kurzu říkali, že tam mají taky tukány.', en: 'The guys from my course said they also have toucans there.' },
      { speaker: 'Marina', cz: 'To bude super výlet! Vezmi si fotoaparát.', en: 'It will be a great trip! Take your camera.' }
    ],
    vocab: {
      animals: [
        { cz: 'zvíře / zvířata', en: 'animal / animals' },
        { cz: 'pes', en: 'dog' },
        { cz: 'kočka', en: 'cat' },
        { cz: 'pták', en: 'bird' },
        { cz: 'kůň', en: 'horse' },
        { cz: 'ryba', en: 'fish' },
        { cz: 'slon', en: 'elephant' },
        { cz: 'krokodýl', en: 'crocodile' }
      ]
    },
    grammar: {
      animatePlural: [
        { question: 'To jsou hezcí ______.', options: ['pes', 'psi', 'psy', 'psů'], correct: 1, explanation: 'The masculine animate nominative plural of "pes" is "psi".' },
        { question: 'V zoo jsou sloni a ______.', options: ['krokodýl', 'krokodýly', 'krokodýli', 'krokodýlové'], correct: 2, explanation: 'The masculine animate nominative plural of "krokodýl" is "krokodýli".' },
        { question: 'Moji ______ jsou velmi chytří.', options: ['pták', 'ptáci', 'ptáky', 'ptákovi'], correct: 1, explanation: 'Consonant mutation occurs here: "pták" becomes "ptáci" in the plural.' },
        { question: 'Češi jsou velmi ______ lidé.', options: ['dobří', 'dobrý', 'dobré', 'dobrým'], correct: 0, explanation: 'Adjectives modifying masculine animate plurals also change. "dobrý" -> "dobří".' }
      ]
    },
    insights: [
      {
        title: "Masculine Animate Plurals (Ma)",
        content: [
          "Masculine Animate nouns (living things like men and animals) have a special ending in the plural nominative: usually -i or -ové.",
          "When this ending is added, it often forces a consonant mutation! K changes to C. H changes to Z.",
          "Pták (bird) -> Ptáci (birds)."
        ]
      },
      {
        title: "Adjective Match",
        content: [
          "Adjectives modifying these nouns also change to an -í ending, overriding the usual -ý.",
          "Dobrý pes -> Dobří psi."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'animals-dialogue', title: 'Pets & Zoo', desc: 'Talking about animals.', icon: 'PawPrint', color: 'rose' },
      { type: 'vocab', id: 'animals', title: 'Animals', desc: 'Common domestic and wild animals.', icon: 'PawPrint', color: 'cyan' },
      { type: 'matching', id: 'animals', title: 'Match: Animals', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'animatePlural', title: 'Ma Plurals', desc: 'Nominative plural for animate nouns.', icon: 'BookOpen', color: 'blue' }
    ]
  },
  22: {
    id: 22,
    title: "Lesson 22: Mluvíme o práci",
    subtitle: "Talking about work",
    description: "Job interviews, professions, and the pronoun 'svůj'.",
    dialogue: [
      { speaker: 'Manažer', cz: 'Dobrý den, vítejte na pohovoru.', en: 'Hello, welcome to the interview.' },
      { speaker: 'Kandidát', cz: 'Dobrý den, těší mě. Tady je můj životopis.', en: 'Hello, nice to meet you. Here is my CV.' },
      { speaker: 'Manažer', cz: 'Proč chcete pracovat v naší firmě?', en: 'Why do you want to work in our company?' },
      { speaker: 'Kandidát', cz: 'Hledám novou práci a chci využít své zkušenosti.', en: 'I am looking for a new job and want to use my experience.' },
      { speaker: 'Manažer', cz: 'Můžete mi říct něco o svých předchozích pracích?', en: 'Can you tell me something about your previous jobs?' },
      { speaker: 'Kandidát', cz: 'Ve své poslední práci jsem vedl malý tým.', en: 'In my last job I led a small team.' },
      { speaker: 'Manažer', cz: 'Dobře. Ozveme se vám do týdne.', en: 'Good. We will get back to you within a week.' },
      { speaker: 'Kandidát', cz: 'Děkuji. Těším se na vaši odpověď!', en: 'Thank you. I look forward to your reply!' }
    ],
    vocab: {
      work: [
        { cz: 'práce', en: 'work / job' },
        { cz: 'pohovor', en: 'interview' },
        { cz: 'životopis', en: 'resume / CV' },
        { cz: 'kolega / kolegyně', en: 'colleague' },
        { cz: 'šéf', en: 'boss' },
        { cz: 'plat', en: 'salary' },
        { cz: 'zkušenost', en: 'experience' }
      ]
    },
    grammar: {
      svuj: [
        { question: 'Petr miluje ______ manželku.', options: ['jeho', 'svou / svoji', 'mu', 'moje'], correct: 1, explanation: 'When the subject possesses the object, use the reflexive "svůj/svá/své" (svou).' },
        { question: 'Já čtu ______ knihu.', options: ['její', 'tvoji', 'svou', 'jeho'], correct: 2, explanation: 'I am reading MY OWN book, so we use "svou".' },
        { question: 'Eva zapomněla ______ klíče.', options: ['její', 'své', 'ji', 'svém'], correct: 1, explanation: 'Eva forgot HER OWN keys. Plural accusative of svůj is "své".' },
        { question: 'Máme rádi ______ práci.', options: ['naši / svou', 'váš', 'jejich', 'můj'], correct: 0, explanation: 'For 1st person plural, both "naši" and "svou" are acceptable.' }
      ]
    },
    insights: [
      {
        title: "The Pronoun 'Svůj' (One's Own)",
        content: [
          "If the subject of the sentence is also the possessor of the object, Czechs use the reflexive possessive pronoun 'svůj' (svá, své) instead of his, her, their, or my.",
          "Petr miluje svou manželku. (Petr loves HIS OWN wife).",
          "If you said 'Petr miluje jeho manželku', it would mean Petr loves ANOTHER MAN'S wife!"
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'work-dialogue', title: 'Job Interview', desc: 'Answering interview questions.', icon: 'MessageCircle', color: 'blue' },
      { type: 'vocab', id: 'work', title: 'At the Office', desc: 'Workplace and career vocabulary.', icon: 'Briefcase', color: 'emerald' },
      { type: 'matching', id: 'work', title: 'Match: Work', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'svuj', title: 'Pronoun "Svůj"', desc: 'Using the reflexive possessive.', icon: 'BookOpen', color: 'rose' }
    ]
  },
  23: {
    id: 23,
    title: "Lesson 23: Kultura a my",
    subtitle: "Culture and us",
    description: "Arts, theater, and ordinal numbers.",
    dialogue: [
      { speaker: 'Petr', cz: 'Půjdeme zítra večer do divadla?', en: 'Shall we go to the theater tomorrow evening?' },
      { speaker: 'Eva', cz: 'Ano, to je skvělý nápad! Máš už lístky?', en: 'Yes, that is a great idea! Do you already have tickets?' },
      { speaker: 'Petr', cz: 'Koupil jsem je včera. Sedíme v první řadě.', en: 'I bought them yesterday. We are sitting in the first row.' },
      { speaker: 'Eva', cz: 'Paráda. Musím si vzít nějaké elegantní šaty.', en: 'Awesome. I have to wear an elegant dress.' },
      { speaker: 'Petr', cz: 'Představení začíná v sedm. Sedíme v první řadě, na pátém místě.', en: 'The show starts at seven. We are sitting in the first row, in the fifth seat.' },
      { speaker: 'Eva', cz: 'To je skvělé! Je to poprvé, co sedím v první řadě.', en: 'That is great! It is the first time I am sitting in the first row.' },
      { speaker: 'Petr', cz: 'Jak se ti líbilo to představení?', en: 'How did you like the show?' },
      { speaker: 'Eva', cz: 'Mně se to líbilo! Pojďme zase, třeba příští týden.', en: 'I liked it! Let\'s go again, maybe next week.' }
    ],
    vocab: {
      culture: [
        { cz: 'divadlo', en: 'theatre' },
        { cz: 'kino', en: 'cinema' },
        { cz: 'film', en: 'film / movie' },
        { cz: 'výstava', en: 'exhibition' },
        { cz: 'lístek / vstupenka', en: 'ticket' },
        { cz: 'spisovatel', en: 'writer' },
        { cz: 'hudba', en: 'music' }
      ]
    },
    grammar: {
      ordinals: [
        { question: '1. lekce = ______ lekce.', options: ['jeden', 'první', 'prvního', 'prvním'], correct: 1, explanation: '"první" means "first".' },
        { question: 'Bydlím ve ______ patře (2.).', options: ['dva', 'druhý', 'druhém', 'dvě'], correct: 2, explanation: 'Locative case of "druhý" is "druhém" (in the second floor).' },
        { question: '3. den = ______ den.', options: ['tři', 'třetí', 'třetím', 'třech'], correct: 1, explanation: '"třetí" means "third".' },
        { question: 'Čekám tu už ______ hodinu (4.).', options: ['čtyři', 'čtvrtý', 'čtvrtou', 'čtvrté'], correct: 2, explanation: 'Accusative case of feminine "čtvrtá" is "čtvrtou".' }
      ]
    },
    insights: [
      {
        title: "Ordinal Numbers (1st, 2nd, 3rd)",
        content: [
          "Ordinal numbers behave exactly like standard adjectives. They take endings based on the gender and case of the noun.",
          "1st: První. 2nd: Druhý. 3rd: Třetí. 4th: Čtvrtý.",
          "When written as a digit, Czech uses a period (.) after the number, just like English uses 'st', 'nd', or 'rd'. E.g., '1. lekce' = 'First lesson'."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'culture-dialogue', title: 'At the Theatre', desc: 'Planning a cultural night out.', icon: 'Ticket', color: 'purple' },
      { type: 'vocab', id: 'culture', title: 'Arts & Culture', desc: 'Words for entertainment.', icon: 'Ticket', color: 'cyan' },
      { type: 'matching', id: 'culture', title: 'Match: Culture', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'ordinals', title: 'Ordinal Numbers', desc: 'First, second, third...', icon: 'BookOpen', color: 'blue' }
    ]
  },
  24: {
    id: 24,
    title: "Lesson 24: Česko krok za krokem",
    subtitle: "The Czech Republic step by step",
    description: "Monuments, sightseeing, and the relative pronoun 'který'.",
    dialogue: [
      { speaker: 'Tom', cz: 'Praha je úžasná. Je tady tolik památek!', en: 'Prague is amazing. There are so many monuments here!' },
      { speaker: 'Marina', cz: 'To ano. Viděl jsi už Pražský hrad?', en: 'Yes indeed. Have you already seen the Prague Castle?' },
      { speaker: 'Tom', cz: 'Ještě ne. Ale byl jsem na Karlově mostě, který je nádherný.', en: 'Not yet. But I was on the Charles Bridge, which is beautiful.' },
      { speaker: 'Marina', cz: 'Zítra můžeme jet na Karlštejn. To je hrad, který postavil Karel IV.', en: 'Tomorrow we can go to Karlštejn. It is a castle which Charles IV built.' },
      { speaker: 'Tom', cz: 'A co ta katedrála, která stojí na hradě?', en: 'And what about the cathedral that stands on the castle?' },
      { speaker: 'Marina', cz: 'To je katedrála svatého Víta, kterou začali stavět ve 14. století.', en: 'That is St. Vitus Cathedral, which they started to build in the 14th century.' },
      { speaker: 'Tom', cz: 'A ten orloj, který je na Staroměstském náměstí, je nádherný!', en: 'And the astronomical clock, which is on the Old Town Square, is magnificent!' },
      { speaker: 'Marina', cz: 'Praha je město, které má tisíce příběhů. A to je teprve začátek!', en: 'Prague is a city that has thousands of stories. And that is just the beginning!' }
    ],
    vocab: {
      monuments: [
        { cz: 'památka', en: 'monument / landmark' },
        { cz: 'hrad', en: 'castle' },
        { cz: 'zámek', en: 'chateau / palace' },
        { cz: 'kostel', en: 'church' },
        { cz: 'most', en: 'bridge' },
        { cz: 'město', en: 'city / town' },
        { cz: 'vesnice', en: 'village' }
      ]
    },
    grammar: {
      ktery: [
        { question: 'To je ten muž, ______ hledáme.', options: ['která', 'který', 'kterého', 'kterému'], correct: 2, explanation: 'Direct object (accusative masculine animate) -> kterého (whom).' },
        { question: 'Kde je ta kniha, ______ jsem včera četl?', options: ['který', 'která', 'kterou', 'kterým'], correct: 2, explanation: 'Accusative feminine -> kterou (which).' },
        { question: 'To je ten dům, ______ se mi líbí.', options: ['který', 'která', 'které', 'kterého'], correct: 0, explanation: 'Nominative masculine inanimate -> který (which).' },
        { question: 'Líbí se mi to auto, ______ tam stojí.', options: ['který', 'která', 'kterou', 'které'], correct: 3, explanation: 'Nominative neuter -> které (which).' }
      ]
    },
    insights: [
      {
        title: "The Relative Pronoun 'Který' (Who/Which/That)",
        content: [
          "'Který' links two sentences together. It acts like an adjective, so it declines to match the gender and case of its role in the SECOND sentence.",
          "Example: To je hrad, který postavil Karel IV. (That is the castle WHICH Charles IV built).",
          "Example: To je ten muž, kterého hledáme. (That is the man WHOM we are looking for - Accusative)."
        ]
      }
    ],
    modules: [
      { type: 'insights', id: 'insights', title: 'Insights & Tips', desc: 'Read this first! Rules & tips.', icon: 'Lightbulb', color: 'orange' },
      { type: 'dialogue', id: 'sightseeing-dialogue', title: 'Sightseeing', desc: 'Discussing Czech landmarks.', icon: 'Map', color: 'emerald' },
      { type: 'vocab', id: 'monuments', title: 'Landmarks', desc: 'Castles, cities, and bridges.', icon: 'Map', color: 'blue' },
      { type: 'matching', id: 'monuments', title: 'Match: Landmarks', desc: 'Match Czech to English.', icon: 'Gamepad2', color: 'indigo' },
      { type: 'grammar', id: 'ktery', title: 'Pronoun "Který"', desc: 'Who, which, and that.', icon: 'BookOpen', color: 'rose' }
    ]
  }
};

