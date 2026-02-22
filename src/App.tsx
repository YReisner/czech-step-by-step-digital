import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MapPin, 
  MessageCircle, 
  Coffee, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Trophy,
  Home,
  Star,
  Compass,
  Train,
  Play,
  Lock,
  Unlock,
  Utensils,
  Users,
  Clock,
  Calendar,
  History,
  Globe,
  Building,
  Box,
  Activity,
  Heart,
  CalendarPlus,
  Store,
  Plane,
  Gift,
  Wand2,
  CloudSun,
  ThermometerSun,
  Trees,
  Umbrella,
  Sparkles,
  Monitor,
  Smartphone,
  Shirt,
  Truck,
  Baby,
  AlertCircle,
  ChefHat,
  PawPrint,
  Scale,
  Briefcase,
  Ticket,
  Map,
  Lightbulb,
  Gamepad2,
  Volume2
} from 'lucide-react';

// --- DATA STRUCTURE REFACOR: GROUPED BY LESSON ---

const ICONS = { MessageCircle, MapPin, Coffee, BookOpen, Compass, Train, Utensils, Users, Clock, Calendar, History, Globe, Building, Box, Activity, Heart, CalendarPlus, Store, Plane, Gift, Wand2, CloudSun, ThermometerSun, Trees, Umbrella, Sparkles, Monitor, Smartphone, Shirt, Truck, Baby, AlertCircle, ChefHat, PawPrint, Scale, Briefcase, Ticket, Map, Lightbulb, Gamepad2 };
const COLORS = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'group-hover:border-blue-200', hoverText: 'text-blue-600' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'group-hover:border-emerald-200', hoverText: 'text-emerald-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'group-hover:border-orange-200', hoverText: 'text-orange-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'group-hover:border-purple-200', hoverText: 'text-purple-600' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'group-hover:border-rose-200', hoverText: 'text-rose-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'group-hover:border-cyan-200', hoverText: 'text-cyan-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'group-hover:border-indigo-200', hoverText: 'text-indigo-600' }
};

const COURSE_DATA = {
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
      { speaker: 'Eva', cz: 'Aha, to je zajímavé. Co děláte?', en: 'Ah, that is interesting. What do you do?' }
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
      { speaker: 'Pán', cz: 'Musíte jít zpátky a pak doleva.', en: 'You must go back and then to the left.' }
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
      { speaker: 'Petr', cz: 'Děkujeme. Zaplatím. Zvlášť.', en: 'Thank you. I will pay. Separately.' }
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
      { speaker: 'Eva', cz: 'Jmenuju se Eva Hanušová. Je mi 24 let.', en: 'My name is Eva Hanušová. I am 24 years old.' },
      { speaker: 'Eva', cz: 'Jsem učitelka, pracuju v jazykové škole a učím češtinu.', en: 'I am a teacher, I work in a language school and teach Czech.' },
      { speaker: 'Eva', cz: 'Můj tatínek se jmenuje Josef. Je mu 55 let.', en: 'My dad\'s name is Josef. He is 55 years old.' },
      { speaker: 'Eva', cz: 'Moje maminka se jmenuje Irena. Je jí 50 let.', en: 'My mum\'s name is Irena. She is 50 years old.' },
      { speaker: 'Eva', cz: 'Mám mladšího bratra a starší sestru.', en: 'I have a younger brother and an older sister.' }
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
      { speaker: 'Marina', cz: 'Ne, začíná až v jedenáct. Ještě máme čas na kávu.', en: 'No, it doesn\'t start until eleven. We still have time for coffee.' }
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
      { speaker: 'Eva', cz: 'Tom šel k doktorovi a Marina šla do práce.', en: 'Tom went to the doctor and Marina went to work.' }
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
      { speaker: 'Petr', cz: 'Tak dobře. A koupíme i dvě křesla.', en: 'Alright. And we will also buy two armchairs.' }
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
      { speaker: 'Eva', cz: 'Fajn. A co v neděli? Pojedeme někam na výlet?', en: 'Great. And what about Sunday? Shall we go somewhere on a trip?' }
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
      { speaker: 'Doktorka', cz: 'Otevřete ústa... Řekněte á.', en: 'Open your mouth... Say ah.' }
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
      { speaker: 'Marina', cz: 'Ano, hned vedle domu mám lékárnu, pekárnu a potraviny.', en: 'Yes, right next to the house I have a pharmacy, bakery, and grocery store.' }
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
      { speaker: 'Tom', cz: 'Na letišti jsme zjistili, že se ztratil můj kufr.', en: 'At the airport we found out my suitcase got lost.' }
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
      { speaker: 'Eva', cz: 'Děti věří, že dárky nosí Ježíšek.', en: 'Children believe that baby Jesus brings the presents.' }
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
      { speaker: 'Tom', cz: 'Ano, včera bylo hůř než dneska.', en: 'Yes, yesterday was worse than today.' }
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
      { speaker: 'Eva', cz: 'Věř mi, internet v mobilu je super. Ukážu ti to.', en: 'Trust me, internet on the mobile is great. I will show you.' }
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
      { speaker: 'Tom', cz: 'Tak si zkus tyhle letní šaty. Sluší ti.', en: 'Then try on this summer dress. It suits you.' }
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
      { speaker: 'Petr', cz: 'Neboj se, s Davidem to zvládneme.', en: 'Don\'t worry, with David we will manage it.' }
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
      { speaker: 'Petr', cz: 'Často o něm mluvíš. Musel to být skvělý člověk.', en: 'You talk about him often. He must have been a great person.' }
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
      { speaker: 'Petr', cz: 'Dobře, už jdu. A nezlob se!', en: 'Alright, I\'m going. And don\'t be angry!' }
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
      { speaker: 'Eva', cz: 'Dvě stě gramů cukru.', en: 'Two hundred grams of sugar.' }
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
      { speaker: 'Marina', cz: 'Já taky. Zítra jdeme do zoo podívat se na slony a ptáky.', en: 'Me too. Tomorrow we are going to the zoo to look at the elephants and birds.' }
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
      { speaker: 'Kandidát', cz: 'Hledám novou práci a chci využít své zkušenosti.', en: 'I am looking for a new job and want to use my experience.' }
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
      { speaker: 'Eva', cz: 'Paráda. Musím si vzít nějaké elegantní šaty.', en: 'Awesome. I have to wear an elegant dress.' }
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
      { speaker: 'Marina', cz: 'Zítra můžeme jet na Karlštejn. To je hrad, který postavil Karel IV.', en: 'Tomorrow we can go to Karlštejn. It is a castle which Charles IV built.' }
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
        { question: 'Líbí se mi to auto, ______ tam stojí.', options: ['který', 'která', 'kterou', 'které'], correct: 2, explanation: 'Nominative neuter -> které (which).' }
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

// --- COMPONENTS ---

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    outline: "border-2 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600",
    ghost: "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
  };
  
  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', onClick = undefined, ...rest }: any) => (
  <div onClick={onClick} {...rest} className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden ${className} ${onClick ? 'cursor-pointer' : ''}`}>
    {children}
  </div>
);

// --- MAIN APP COMPONENT ---

const HomeScreen = ({ unlockedLessons, setActiveLesson, setCurrentView }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <header className="mb-12 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">Choose Your Lesson</h1>
      <p className="text-slate-500 text-lg">Follow the path to master the Czech language, step by step.</p>
    </header>

    <div className="max-w-3xl mx-auto space-y-6 relative">
      {/* Connecting line behind cards */}
      <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-1 bg-slate-200 -translate-x-1/2 z-0 hidden md:block"></div>

      {Object.values(COURSE_DATA).map((lesson, index) => {
        const isUnlocked = unlockedLessons.includes(lesson.id);
        const isEven = index % 2 !== 0;

        return (
          <div key={lesson.id} className={`relative z-10 flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Node */}
            <div className={`hidden md:flex w-16 h-16 rounded-full border-4 border-white shadow-md items-center justify-center font-bold text-xl
              ${isUnlocked ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
              {isUnlocked ? lesson.id : <Lock size={20} />}
            </div>

            {/* Lesson Card */}
            <Card 
              onClick={() => {
                if(isUnlocked) {
                  setActiveLesson(lesson.id);
                  setCurrentView('dashboard');
                }
              }}
              className={`flex-1 w-full md:w-auto p-6 transition-all duration-300
                ${isUnlocked ? 'hover:shadow-xl cursor-pointer hover:-translate-y-1 hover:border-blue-200' : 'opacity-75 grayscale'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isUnlocked ? 'text-blue-500' : 'text-slate-400'}`}>
                    Chapter {lesson.id}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">{lesson.title}</h3>
                  <h4 className="text-lg font-medium text-slate-500 italic">"{lesson.subtitle}"</h4>
                </div>
                {!isUnlocked && <Lock className="text-slate-300" />}
                {isUnlocked && <Unlock className="text-blue-300" />}
              </div>
              <p className="text-slate-600">{lesson.description}</p>
              
              {isUnlocked && (
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Enter Lesson <ChevronRight size={20} />
                </div>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  </div>
);

const Dashboard = ({ activeLesson, setCurrentView, setCurrentModule }) => {
  const lesson = COURSE_DATA[activeLesson];
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <Button variant="ghost" onClick={() => setCurrentView('home')} className="!px-0 !py-1 mb-4 text-blue-600 hover:text-blue-700 hover:bg-transparent">
            <ChevronRight size={20} className="rotate-180" /> Back to Chapters
          </Button>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">{lesson.title}</h1>
          <p className="text-slate-500 mt-2 text-lg">{lesson.subtitle}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {lesson.modules.map((mod, i) => {
          const Icon = ICONS[mod.icon] || Star;
          const theme = COLORS[mod.color];

          return (
            <Card key={i} className={`hover:shadow-xl transition-shadow cursor-pointer group ${theme.border}`}>
              <div className="p-6 h-full flex flex-col justify-between" onClick={() => { 
                setCurrentModule(mod.id); 
                setCurrentView(mod.type); 
              }}>
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${theme.bg} ${theme.text}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-slate-500">{mod.desc}</p>
                </div>
                <div className={`mt-8 flex items-center font-semibold transition-transform group-hover:translate-x-2 ${theme.hoverText}`}>
                  Start <ChevronRight size={20} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const LLM_INSIGHTS: Record<number, string> = {
  1: "Welcome to Czech! The verb 'být' (to be) is your best friend. A common mistake beginners make is overusing pronouns. In English, we say 'I am', 'You are'. In Czech, 'jsem' already means 'I am'. Saying 'Já jsem' sounds emphatic, like 'I am the one who is'. Also, don't worry too much about pronunciation at first, just remember that 'j' is pronounced like 'y' in 'yes', so 'jsem' sounds a bit like 'ysem' (or even 'sem' in casual speech).",
  2: "The jít/jet distinction is a classic hurdle! Think of 'jít' as using your own two legs, and 'jet' as letting wheels (or an engine) do the work. If you're on a bike, you use 'jet'. If you're walking a bike, you use 'jít'. A fun tip: 'jít' sounds short and snappy, like footsteps. 'jet' sounds a bit like 'jet engine' (well, almost!).",
  3: "The Accusative case is your 'Target' case. When you order food, the food is the target of your action. A quick hack for beginners: if a feminine word ends in '-a' (like káva), change it to '-u' (kávu) when you order it. 'Dám si kávu'. For masculine inanimate (like sýr) and neuter (like pivo), don't change anything! 'Dám si pivo'. It's that simple to start.",
  4: "Expressing age with the Dative case ('Je mi 24 let') literally translates to 'It is 24 years to me'. This reflects a broader Slavic concept where things 'happen to' you rather than you 'being' them. Also, notice how 'můj' (my) changes based on the gender of the family member, not your gender. A male and female speaker will both say 'můj bratr' and 'moje sestra'.",
  5: "Modal verbs (chtít, muset, moct, umět) are incredibly powerful because they let you express complex thoughts while only conjugating ONE verb. The second verb stays in the infinitive (ending in -t). If you learn the conjugations of these four verbs, you can say almost anything by just slapping an infinitive on the end! E.g., 'Chci jíst' (I want to eat), 'Musím jít' (I must go).",
  6: "The Czech past tense is like a puzzle with two pieces: the 'l-form' of the action verb, and the 'být' helper verb. The biggest trap for English speakers is the 3rd person (he/she/it). In English, we say 'He was doing'. In Czech, you drop the helper verb entirely for the 3rd person! Just 'On dělal'. It feels weird to leave out the 'is/was' equivalent, but you'll get used to it!",
  7: "The 2, 3, 4 plural rule is unique to Slavic languages. Think of 2, 3, and 4 as a 'small group' that gets a special ending (usually similar to the singular). Once you hit 5, it becomes a 'large quantity' and takes the Genitive plural (which we'll learn later). For now, just remember that 1, 2, 3, and 4 are special friends that play by their own rules.",
  8: "The future tense of imperfective verbs is super easy: just learn the future of 'být' (budu, budeš, bude...) and add the infinitive. But watch out for motion verbs! 'Půjdu' (I will walk) and 'Pojedu' (I will drive) are single words. Why? Because motion is so fundamental that it gets its own streamlined future forms. Don't say 'budu jít'—it sounds like 'I will be in the process of walking' and is rarely used.",
  9: "Why do 'oko' and 'ucho' have such weird plurals ('oči', 'uši')? It's a remnant of the 'dual' case from Old Slavic, used specifically for things that come in pairs! Also, when you're at the doctor, remember the difference between 'Bolí mě...' (It hurts me - Accusative) and 'Je mi...' (I feel - Dative). 'Bolí mě hlava' vs 'Je mi špatně'.",
  10: "The Genitive case is the 'Case of Separation and Origin'. Prepositions like 'z' (out of) and 'od' (away from) naturally take the Genitive. But it's also used for 'do' (into). Why? Think of 'do' as reaching the boundary of something. A great way to practice Genitive is to look around your room and say 'Jsem blízko...' (I am near...) and change the ending of the object.",
  11: "The difference between 'jít' (short/one-time) and 'chodit' (long/repeated) is a classic aspect of Slavic languages. Think of 'jít' as an arrow pointing to a specific destination right now. Think of 'chodit' as a squiggly line representing a habit or a round trip. 'Jdu do kina' = I am on my way to the cinema now. 'Chodím do kina' = I go to the cinema regularly.",
  12: "The reflexive passive with 'se' is incredibly common in Czech. It's the ultimate way to avoid taking responsibility! Instead of saying 'We eat carp', you say 'Kapr se jí' (Carp eats itself / Carp is eaten). It shifts the focus entirely to the action and the object, making it perfect for describing traditions, rules, or general facts.",
  13: "The conditional 'bych, bys, by' might look intimidating, but it's actually very regular. It's just a particle added to the past tense 'l-form'. The most important thing is the word order: the 'bych' particle MUST be in the second logical position in the sentence. 'Já bych chtěl...' or 'Chtěl bych...'. Master this, and you'll sound incredibly polite and fluent!",
  14: "When comparing things, the suffixes '-ší' and '-ější' can cause some consonant mutations (like 'h' changing to 'ž' in drahý -> dražší). Don't stress too much about memorizing every mutation; learn the most common ones (dobrý/lepší, špatný/horší, velký/větší, malý/menší) and the rest will start to sound natural over time.",
  15: "The Dative case is the 'Giving' case. It's all about the recipient. Verbs like 'dát' (give), 'pomoct' (help), and 'telefonovat' (call) all take the Dative because you are directing an action TO someone. A handy trick: if you can insert 'to' or 'for' in English (e.g., 'I give [to] him', 'I call [to] him'), it's likely Dative in Czech.",
  16: "The trio of 'mít rád', 'líbit se', and 'chutnat' is a classic stumbling block. Think of it this way: 'Mít rád' is an active choice (I actively like this person/hobby). 'Líbit se' is passive and visual (This thing is pleasing to my eyes). 'Chutnat' is passive and gustatory (This food is pleasing to my tongue). Mastering these three will instantly make you sound more native.",
  17: "The Instrumental case is the 'Tool' case. You use it when you do something WITH a tool or WITH a person. The endings are quite distinct: '-em' for masculine/neuter and '-ou' for feminine. It's one of the most satisfying cases to use because the '-em' and '-ou' sounds give a nice rhythm to the sentence. 'Jedu vlakem s bratrem' (I go by train with my brother).",
  18: "The Locative case is the only case that is NEVER used without a preposition. It's the 'Location' case (v, na) and the 'Topic' case (o - about). The endings often cause consonant mutations (Praha -> v Praze). A tip: if a word ends in '-a', it almost always changes to '-e' or '-ě' in the Locative.",
  19: "The Imperative is formed by chopping off the ending of the 3rd person plural. But honestly, the easiest way to learn it is just to memorize the common ones: 'Pojď!' (Come!), 'Dívej se!' (Look!), 'Poslouchej!' (Listen!). Notice how the plural/formal adds '-te': 'Pojďte!', 'Dívejte se!'. It's very systematic.",
  20: "The Partitive Genitive is used whenever you have a 'container' or a 'measurement' of something. 'Šálek kávy' (a cup of coffee), 'kilo jablek' (a kilo of apples). It's exactly like the English 'of'. Once you grasp this, ordering at a deli or reading a recipe becomes a breeze.",
  21: "Masculine Animate plurals are notorious for their consonant mutations (k->c, h->z, ch->š, r->ř). 'Kluk' becomes 'kluci'. 'Pták' becomes 'ptáci'. Why? Because the '-i' ending historically softened the preceding consonant. It's a quirk of pronunciation that became a grammatical rule. Embrace the weirdness!",
  22: "The reflexive possessive 'svůj' is a beautiful feature of Czech. It removes ambiguity. In English, 'He kissed his wife' could technically mean he kissed someone else's wife! In Czech, 'Políbil svou ženu' means it was definitely his own wife. If you said 'Políbil jeho ženu', there would be drama. Always use 'svůj' when the subject owns the object.",
  23: "Ordinal numbers (první, druhý, třetí) decline exactly like adjectives. The only tricky one is 'první' and 'třetí', which are 'soft' adjectives (they end in '-í' for all genders in the nominative). 'Druhý' and 'čtvrtý' are 'hard' adjectives (they change to '-á' and '-é'). Just treat them like normal adjectives and you'll be fine.",
  24: "'Který' is the glue that holds complex sentences together. The secret to 'který' is that it looks back at the noun it refers to for its GENDER, but it looks forward to its own clause for its CASE. 'To je ten muž (masculine), kterého (accusative - whom) vidím.' It takes practice, but it's the key to speaking in flowing paragraphs rather than short, choppy sentences."
};

const InsightsViewer = ({ activeLesson, setCurrentView }: any) => {
  const insights = (COURSE_DATA as any)[activeLesson].insights;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
           <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">LESSON {activeLesson} INSIGHTS</span>
      </div>

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-orange-100 text-orange-500 p-3 rounded-2xl">
            <Lightbulb size={32} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">Tips & Rules</h2>
        </div>

        {insights.map((insight: any, idx: number) => (
          <Card key={idx} className="p-6 md:p-8 bg-white border-l-4 border-l-orange-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{insight.title}</h3>
            <div className="space-y-4">
              {insight.content.map((paragraph: string, pIdx: number) => (
                <p key={pIdx} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        ))}

        {LLM_INSIGHTS[activeLesson] && (
          <Card className="p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-l-purple-500 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-200 text-purple-700 p-2 rounded-xl">
                  <Wand2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">LLM general insights - mistakes are possible</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {LLM_INSIGHTS[activeLesson]}
              </p>
            </div>
          </Card>
        )}

        <div className="mt-8 flex justify-end">
          <Button onClick={() => setCurrentView('dashboard')} className="w-full md:w-auto">
            Got it! Return to Lesson <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Flashcards = ({ activeLesson, currentModule, setCurrentView, setPoints }) => {
  const words = COURSE_DATA[activeLesson].vocab[currentModule];
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleNext = (knewIt) => {
    if (knewIt) setPoints(p => p + 10);
    setIsFlipped(false);
    
    setTimeout(() => {
      setIndex(prev => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          setCompleted(true);
          return prev;
        }
      });
    }, 150);
  };

  if (completed) {
    return (
      <div className="max-w-3xl mx-auto py-8 animate-in fade-in duration-500">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 text-center">Vocabulary Summary</h2>
            <p className="text-slate-500 mt-2 text-center">Here are the words you just practiced.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 md:px-6 font-semibold w-1/2">Czech</th>
                  <th className="p-4 md:px-6 font-semibold w-1/2 border-l border-slate-200">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {words.map((word, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:px-6 text-lg font-bold text-slate-800">{word.cz}</td>
                    <td className="p-4 md:px-6 text-lg text-slate-600 border-l border-slate-100">{word.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <Button onClick={() => setCurrentView('dashboard')} className="w-full sm:w-auto">
              Return to Lesson
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="text-slate-500 font-medium">Card {index + 1} of {words.length}</span>
      </div>

      <div className="relative h-80 w-full perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front of card (Czech) */}
          <div className={`absolute inset-0 bg-white rounded-3xl shadow-lg border-2 border-blue-100 flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'hidden' : 'flex'}`}>
             <span className="uppercase tracking-widest text-blue-400 font-bold text-sm mb-4">Czech</span>
             <h2 className="text-5xl font-extrabold text-slate-800 text-center px-4">{words[index].cz}</h2>
             <p className="text-slate-400 mt-8 text-sm flex items-center gap-2"><RotateCcw size={16}/> Tap to flip</p>
          </div>

          {/* Back of card (English) */}
          <div className={`absolute inset-0 bg-indigo-600 rounded-3xl shadow-lg flex flex-col items-center justify-center backface-hidden ${!isFlipped ? 'hidden' : 'flex'}`}>
             <span className="uppercase tracking-widest text-indigo-300 font-bold text-sm mb-4">English</span>
             <h2 className="text-5xl font-extrabold text-white text-center px-4">{words[index].en}</h2>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="flex gap-4 mt-8 justify-center animate-in slide-in-from-bottom-4 fade-in">
          <Button variant="outline" onClick={(e) => { e.stopPropagation(); handleNext(false); }} className="w-40 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300">
            <XCircle size={20} /> Needs Practice
          </Button>
          <Button onClick={(e) => { e.stopPropagation(); handleNext(true); }} className="w-40 bg-emerald-500 hover:bg-emerald-600 text-white">
            <CheckCircle2 size={20} /> Got it!
          </Button>
        </div>
      )}
    </div>
  );
};

const MatchingGame = ({ activeLesson, currentModule, setCurrentView, setPoints }) => {
  const words = COURSE_DATA[activeLesson].vocab[currentModule];
  const [tiles, setTiles] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [mismatchIds, setMismatchIds] = useState([]);
  const [mistakes, setMistakes] = useState({}); // Track mistakes by word index
  const [completed, setCompleted] = useState(false);
  const [perfectBonus, setPerfectBonus] = useState(false);

  useEffect(() => {
    // Generate tiles for both languages
    const newTiles = [];
    words.forEach((word, index) => {
      newTiles.push({ id: `cz-${index}`, text: word.cz, lang: 'cz', index });
      newTiles.push({ id: `en-${index}`, text: word.en, lang: 'en', index });
    });

    // Shuffle the tiles (Fisher-Yates)
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }
    
    setTiles(newTiles);

    // Initialize mistakes tracking
    const initialMistakes = {};
    words.forEach((_, i) => initialMistakes[i] = 0);
    setMistakes(initialMistakes);
  }, [words]);

  useEffect(() => {
    if (completed) {
      const values = Object.values(mistakes) as number[];
      const totalMistakes = values.reduce((a, b) => a + b, 0);
      if (totalMistakes === 0) {
        setPerfectBonus(true);
        setPoints(p => p + 20); // Award perfect bonus
      }
    }
  }, [completed, mistakes, setPoints]);

  const handleTileClick = (tile) => {
    // Prevent interaction if locked, already matched, or already selected
    if (matchedIndices.includes(tile.index) || selectedIds.includes(tile.id) || mismatchIds.length > 0) return;

    const newSelected = [...selectedIds, tile.id];
    setSelectedIds(newSelected);

    if (newSelected.length === 2) {
      const tile1 = tiles.find(t => t.id === newSelected[0]);
      const tile2 = tile;

      if (tile1.index === tile2.index) {
        // Match found!
        setMatchedIndices(prev => {
          const updated = [...prev, tile1.index];
          if (updated.length === words.length) {
            setTimeout(() => setCompleted(true), 800);
          }
          return updated;
        });
        setSelectedIds([]);
        setPoints(p => p + 5); // +5 XP per pair
      } else {
        // Mismatch found
        setMismatchIds([tile1.id, tile2.id]);
        setMistakes(prev => ({
          ...prev,
          [tile1.index]: prev[tile1.index] + 1,
          [tile2.index]: prev[tile2.index] + 1
        }));
        
        setTimeout(() => {
          setSelectedIds([]);
          setMismatchIds([]);
        }, 600);
      }
    }
  };

  const getTileState = (tile) => {
    if (matchedIndices.includes(tile.index)) return 'bg-emerald-100 text-emerald-700 border-emerald-300 opacity-40 scale-95 pointer-events-none shadow-none';
    if (mismatchIds.includes(tile.id)) return 'bg-rose-100 text-rose-700 border-rose-400 animate-shake';
    if (selectedIds.includes(tile.id)) return 'bg-indigo-100 text-indigo-700 border-indigo-400 scale-105 ring-4 ring-indigo-50';
    return 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-slate-50 hover:scale-105';
  };

  if (completed) {
    return (
      <div className="max-w-3xl mx-auto py-8 animate-in fade-in duration-500">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <Gamepad2 size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 text-center">Game Complete!</h2>
            {perfectBonus && (
              <div className="mt-4 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 animate-bounce">
                <Star size={18} fill="currentColor" /> Perfect Bonus! +20 XP
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 md:px-6 font-semibold w-2/5">Czech</th>
                  <th className="p-4 md:px-6 font-semibold w-2/5 border-l border-slate-200">English</th>
                  <th className="p-4 md:px-6 font-semibold w-1/5 border-l border-slate-200 text-center">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {words.map((word, i) => {
                  const mistakeCount = mistakes[i] || 0;
                  return (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 md:px-6 font-bold text-slate-800">{word.cz}</td>
                      <td className="p-4 md:px-6 text-slate-600 border-l border-slate-100">{word.en}</td>
                      <td className="p-4 md:px-6 border-l border-slate-100 text-center">
                        {mistakeCount === 0 ? (
                          <span className="text-emerald-500 font-bold flex items-center justify-center gap-1 text-sm"><Star size={14} fill="currentColor"/> Perfect</span>
                        ) : (
                          <span className="text-rose-500 font-semibold text-sm">{mistakeCount} Mistake{mistakeCount > 1 ? 's' : ''}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <Button onClick={() => setCurrentView('dashboard')} className="w-full sm:w-auto">
              Return to Lesson
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-2deg); }
          75% { transform: translateX(5px) rotate(2deg); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
      
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
          <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">MATCHING GAME</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {tiles.map(tile => (
          <button
            key={tile.id}
            onClick={() => handleTileClick(tile)}
            className={`p-4 md:p-6 min-h-[100px] flex items-center justify-center text-center rounded-2xl font-bold text-lg md:text-xl transition-all duration-200 border-2 shadow-sm ${getTileState(tile)}`}
          >
            {tile.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const GrammarQuiz = ({ activeLesson, currentModule, setCurrentView, setPoints }) => {
  const questions = COURSE_DATA[activeLesson].grammar[currentModule];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (i) => {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    if (i === questions[index].correct) {
      setScore(s => s + 1);
      setPoints(p => p + 25);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
          <Trophy size={48} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-8 text-lg">You scored {score} out of {questions.length}.</p>
        <Button onClick={() => setCurrentView('dashboard')}>Return to Lesson</Button>
      </div>
    );
  }

  const q = questions[index];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
           <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <div className="flex gap-2">
          {questions.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i === index ? 'bg-purple-600 ring-4 ring-purple-100' : i < index ? 'bg-purple-300' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <Card className="p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center leading-relaxed">
          {q.question}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.options.map((opt, i) => {
            let btnClass = "border-2 border-slate-200 text-slate-700 bg-white hover:border-purple-400 hover:bg-purple-50";
            if (showResult) {
              if (i === q.correct) btnClass = "bg-emerald-500 border-emerald-500 text-white";
              else if (i === selected) btnClass = "bg-rose-500 border-rose-500 text-white";
              else btnClass = "border-slate-200 text-slate-400 opacity-50 bg-slate-50";
            }

            return (
              <button 
                key={i} 
                disabled={showResult}
                onClick={() => handleAnswer(i)}
                className={`p-5 text-xl font-semibold rounded-2xl transition-all duration-300 ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {selected === q.correct ? <CheckCircle2 className="text-emerald-500" size={24}/> : <XCircle className="text-rose-500" size={24}/>}
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-1 ${selected === q.correct ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {selected === q.correct ? 'Správně! (Correct!)' : 'Špatně! (Incorrect!)'}
                </h4>
                <p className="text-slate-600">{q.explanation}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
               <Button onClick={handleNext}>Next Question <ChevronRight size={20}/></Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

const DialogueViewer = ({ activeLesson, setCurrentView, setPoints }) => {
  const dialogueData = COURSE_DATA[activeLesson].dialogue;
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const updateVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.onvoiceschanged = updateVoices;
    updateVoices();
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const getGender = (name) => {
    const femaleNames = ['Eva', 'Marina', 'Paní', 'Doktorka', 'Adéla', 'Maminka', 'Irena', 'Babička', 'Kolegyně'];
    const maleNames = ['Tom', 'Thomas', 'Pán', 'Číšník', 'Petr', 'Josef', 'David', 'Manažer', 'Kandidát', 'Dědeček', 'Kolega'];
    
    if (femaleNames.includes(name)) return 'female';
    if (maleNames.includes(name)) return 'male';
    return 'neutral';
  };

  const speak = (text, speaker) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Re-fetch voices if they aren't loaded yet
    let currentVoices = voices;
    if (currentVoices.length === 0) {
      currentVoices = window.speechSynthesis.getVoices();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'cs-CZ';
    utterance.rate = 0.9; // Slightly slower for better clarity
    
    const gender = getGender(speaker);
    const czechVoices = currentVoices.filter(v => 
      v.lang.toLowerCase().startsWith('cs') || 
      v.lang.toLowerCase().includes('czech')
    );
    
    if (czechVoices.length > 0) {
      // Default to the first Czech voice
      let selectedVoice = czechVoices[0];

      if (gender === 'female') {
        // Look for female-sounding names or labels
        const femaleVoice = czechVoices.find(v => {
          const name = v.name.toLowerCase();
          return name.includes('female') || 
                 name.includes('iveta') || 
                 name.includes('zuzana') || 
                 name.includes('vlasta') ||
                 name.includes('eliska') ||
                 name.includes('adela');
        });
        if (femaleVoice) selectedVoice = femaleVoice;
      } else if (gender === 'male') {
        // Look for male-sounding names or labels
        const maleVoice = czechVoices.find(v => {
          const name = v.name.toLowerCase();
          return name.includes('male') || 
                 name.includes('jakub') || 
                 name.includes('filip') || 
                 name.includes('jan') || 
                 name.includes('marek') ||
                 name.includes('antonin') ||
                 name.includes('jiri');
        });
        if (maleVoice) selectedVoice = maleVoice;
      }
      
      utterance.voice = selectedVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="!px-3">
           <ChevronRight size={24} className="rotate-180" /> Back
        </Button>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide">LESSON {activeLesson}</span>
      </div>

      <Card className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
          <MessageCircle className="text-blue-500" size={32} />
          <h2 className="text-2xl font-bold text-slate-800">Dialogue Reader</h2>
        </div>

        <div className="space-y-6">
          {dialogueData.map((line, i) => {
            const isUser1 = i % 2 === 0; // Simple toggle for avatar layout
            return (
              <div key={i} className={`flex gap-4 ${isUser1 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg
                  ${isUser1 ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                  {line.speaker[0]}
                </div>
                <div className={`max-w-[80%] p-5 rounded-3xl group relative
                  ${isUser1 ? 'bg-slate-50 rounded-tl-none' : 'bg-blue-50 rounded-tr-none'}`}>
                  <div className="flex justify-between items-start gap-2">
                    <span className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">{line.speaker}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); speak(line.cz, line.speaker); }}
                      className="p-1.5 rounded-full hover:bg-white/50 text-slate-400 hover:text-blue-500 transition-colors"
                      title="Listen"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <p className="text-lg font-medium text-slate-800 mb-1">{line.cz}</p>
                  
                  {/* English translation hidden until hover */}
                  <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-3">
                    <p className="text-sm text-slate-500 italic border-t border-slate-200/60 pt-2">"{line.en}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-indigo-50 p-6 rounded-2xl flex items-center justify-between">
          <div className="text-indigo-800 font-medium flex items-center gap-2">
             <CheckCircle2 size={20}/> You completed the dialogue!
          </div>
          <Button onClick={() => { setPoints(p => p + 50); setCurrentView('dashboard'); }} variant="secondary">
            Finish (+50 XP)
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, dashboard, vocab, grammar, dialogue, insights, matching
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [points, setPoints] = useState(0);
  const [unlockedLessons, setUnlockedLessons] = useState(Array.from({ length: 24 }, (_, i) => i + 1)); // Unlocking all 24 lessons!

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeLesson]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-200">
      
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
            <div className="bg-blue-600 text-white p-2 rounded-xl">
               <BookOpen size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 hidden sm:block">
              CZECH<span className="text-blue-600 font-black">STEP</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-sm border border-amber-200 mr-2">
              <Trophy size={16} className="text-amber-500" />
              {points} XP
            </div>
            <Button variant="ghost" onClick={() => setCurrentView('home')} className="!px-3 !py-2 rounded-lg">
              <Home size={20} className="text-slate-500" />
            </Button>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center font-bold text-slate-500">
              U
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {currentView === 'home' && <HomeScreen unlockedLessons={unlockedLessons} setActiveLesson={setActiveLesson} setCurrentView={setCurrentView} />}
        {currentView === 'dashboard' && <Dashboard activeLesson={activeLesson} setCurrentView={setCurrentView} setCurrentModule={setCurrentModule} />}
        {currentView === 'insights' && <InsightsViewer activeLesson={activeLesson} setCurrentView={setCurrentView} />}
        {currentView === 'vocab' && <Flashcards activeLesson={activeLesson} currentModule={currentModule} setCurrentView={setCurrentView} setPoints={setPoints} />}
        {currentView === 'matching' && <MatchingGame activeLesson={activeLesson} currentModule={currentModule} setCurrentView={setCurrentView} setPoints={setPoints} />}
        {currentView === 'grammar' && <GrammarQuiz activeLesson={activeLesson} currentModule={currentModule} setCurrentView={setCurrentView} setPoints={setPoints} />}
        {currentView === 'dialogue' && <DialogueViewer activeLesson={activeLesson} setCurrentView={setCurrentView} setPoints={setPoints} />}
      </main>

    </div>
  );
}