// Interactive grammar data for each lesson's Insights section.
// Replaces the old LLM_INSIGHTS with structured, visually rich content.

// ── Type Definitions ──────────────────────────────────────────────

export interface ConjugationData {
  type: 'conjugation';
  title: string;
  description?: string;
  columns: { header: string; subheader?: string }[];
  rows: { person: string; forms: string[] }[];
  tabs?: { label: string; columns: { header: string; subheader?: string }[]; rows: { person: string; forms: string[] }[] }[];
  tip?: string;
  examples?: { cz: string; en: string; highlight?: string }[];
}

export interface DeclensionData {
  type: 'declension';
  title: string;
  description?: string;
  caseName: string;
  columns: { header: string; subheader?: string }[];
  rows: { label: string; forms: { word: string; ending: string }[] }[];
  pluralColumns?: { header: string; subheader?: string }[];
  pluralRows?: { label: string; forms: { word: string; ending: string }[] }[];
  adjectiveRows?: { label: string; forms: { word: string; ending: string }[] }[];
  pluralAdjectiveRows?: { label: string; forms: { word: string; ending: string }[] }[];
  prepositions?: string[];
  examples?: { cz: string; en: string; highlight?: string }[];
}

export interface ComparisonData {
  type: 'comparison';
  title: string;
  description?: string;
  panels: {
    heading: string;
    color: string;
    definition: string;
    keyForms?: string[];
    examples: { cz: string; en: string }[];
    whenToUse?: string;
    conjugation?: { columns: { header: string; subheader?: string }[]; rows: { person: string; forms: string[] }[] };
  }[];
  tip?: string;
}

export interface PatternData {
  type: 'pattern';
  title: string;
  description?: string;
  rule: string;
  items: {
    label?: string;
    examples: { cz: string; en: string; highlight?: string }[];
  }[];
  exceptions?: { cz: string; en: string }[];
  tip?: string;
}

export type GrammarInsight = ConjugationData | DeclensionData | ComparisonData | PatternData;

// ── Lesson Data ───────────────────────────────────────────────────

export const GRAMMAR_INSIGHTS: Record<number, GrammarInsight[]> = {

  // ── LESSON 1: Verb "být" ────────────────────────────────────────
  1: [{
    type: 'conjugation',
    title: 'Verb "být" (to be) — Present Tense',
    columns: [{ header: 'být', subheader: 'to be' }],
    rows: [
      { person: 'Já', forms: ['jsem'] },
      { person: 'Ty', forms: ['jsi'] },
      { person: 'On / Ona / Ono', forms: ['je'] },
      { person: 'My', forms: ['jsme'] },
      { person: 'Vy', forms: ['jste'] },
      { person: 'Oni / Ony / Ona', forms: ['jsou'] },
    ],
    tip: 'Pronouns are usually dropped. "Jsem student" is more natural than "Já jsem student". Use the pronoun only for emphasis.',
    examples: [
      { cz: 'Jsem z Austrálie.', en: 'I am from Australia.', highlight: 'Jsem' },
      { cz: 'Odkud jste?', en: 'Where are you from? (formal)', highlight: 'jste' },
    ],
  }],

  // ── LESSON 2: Jít vs Jet ────────────────────────────────────────
  2: [{
    type: 'comparison',
    title: 'Jít vs. Jet — Two Ways to "Go"',
    panels: [
      {
        heading: 'Jít (on foot)',
        color: 'emerald',
        definition: 'Movement using your own legs — walking.',
        keyForms: ['jdu', 'jdeš', 'jde', 'jdeme', 'jdete', 'jdou'],
        examples: [
          { cz: 'Jdu do obchodu.', en: 'I am walking to the shop.' },
          { cz: 'Musíte jít rovně.', en: 'You must go straight (on foot).' },
        ],
        whenToUse: 'Walking, hiking, strolling — any movement on foot.',
        conjugation: {
          columns: [{ header: 'jít', subheader: 'to walk' }],
          rows: [
            { person: 'Já', forms: ['jdu'] },
            { person: 'Ty', forms: ['jdeš'] },
            { person: 'On / Ona', forms: ['jde'] },
            { person: 'My', forms: ['jdeme'] },
            { person: 'Vy', forms: ['jdete'] },
            { person: 'Oni', forms: ['jdou'] },
          ],
        },
      },
      {
        heading: 'Jet (by vehicle)',
        color: 'blue',
        definition: 'Movement using wheels or an engine — driving, riding.',
        keyForms: ['jedu', 'jedeš', 'jede', 'jedeme', 'jedete', 'jedou'],
        examples: [
          { cz: 'Jedu autobusem.', en: 'I am going by bus.' },
          { cz: 'Jedeme na výlet.', en: 'We are going on a trip.' },
        ],
        whenToUse: 'Car, bus, train, bike, metro — any vehicle.',
        conjugation: {
          columns: [{ header: 'jet', subheader: 'to drive/ride' }],
          rows: [
            { person: 'Já', forms: ['jedu'] },
            { person: 'Ty', forms: ['jedeš'] },
            { person: 'On / Ona', forms: ['jede'] },
            { person: 'My', forms: ['jedeme'] },
            { person: 'Vy', forms: ['jedete'] },
            { person: 'Oni', forms: ['jedou'] },
          ],
        },
      },
    ],
    tip: 'If you are on a bicycle, use "jet" (jedu na kole). If you are pushing the bicycle and walking, use "jít"!',
  }],

  // ── LESSON 3: Accusative Case ───────────────────────────────────
  3: [{
    type: 'declension',
    title: 'The Accusative Case — Direct Object',
    description: 'The accusative answers "Koho? Co?" (Whom? What?) and is used for the direct object of a verb.',
    caseName: 'Accusative',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'student', ending: '' },
          { word: 'sýr', ending: '' },
          { word: 'polévka', ending: '-a' },
          { word: 'pivo', ending: '-o' },
        ],
      },
      {
        label: 'Accusative',
        forms: [
          { word: 'studenta', ending: '-a' },
          { word: 'sýr', ending: '= Nom' },
          { word: 'polévku', ending: '-u' },
          { word: 'pivo', ending: '= Nom' },
        ],
      },
    ],
    adjectiveRows: [
      {
        label: 'Adj. Nom',
        forms: [
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrá', ending: '-á' },
          { word: 'dobré', ending: '-é' },
        ],
      },
      {
        label: 'Adj. Acc',
        forms: [
          { word: 'dobrého', ending: '-ého' },
          { word: 'dobrý', ending: '= Nom' },
          { word: 'dobrou', ending: '-ou' },
          { word: 'dobré', ending: '= Nom' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'studenti', ending: '-i' },
          { word: 'sýry', ending: '-y' },
          { word: 'polévky', ending: '-y' },
          { word: 'piva', ending: '-a' },
        ],
      },
      {
        label: 'Acc. Pl.',
        forms: [
          { word: 'studenty', ending: '-y' },
          { word: 'sýry', ending: '= Nom' },
          { word: 'polévky', ending: '= Nom' },
          { word: 'piva', ending: '= Nom' },
        ],
      },
    ],
    pluralAdjectiveRows: [
      {
        label: 'Adj. Nom Pl.',
        forms: [
          { word: 'dobří', ending: '-í' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrá', ending: '-á' },
        ],
      },
      {
        label: 'Adj. Acc Pl.',
        forms: [
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '= Nom' },
          { word: 'dobré', ending: '= Nom' },
          { word: 'dobrá', ending: '= Nom' },
        ],
      },
    ],
    prepositions: ['na (onto/for)', 'pro (for)', 'za (behind/for)', 'o (about)', 'v / ve (into)'],
    examples: [
      { cz: 'Dám si bramborovou polévku.', en: 'I\'ll have potato soup.', highlight: 'bramborovou polévku' },
      { cz: 'Vidím dobrého studenta.', en: 'I see a good student.', highlight: 'dobrého studenta' },
      { cz: 'Chci černé pivo.', en: 'I want a dark beer.', highlight: 'černé pivo' },
    ],
  }],

  // ── LESSON 4: Possessive Pronouns ───────────────────────────────
  4: [{
    type: 'pattern',
    title: 'Possessive Pronouns',
    rule: 'Possessive pronouns match the GENDER of the thing possessed, NOT the gender of the speaker.',
    items: [
      {
        label: 'My (1st person)',
        examples: [
          { cz: 'můj bratr', en: 'my brother (masculine)', highlight: 'můj' },
          { cz: 'moje / má sestra', en: 'my sister (feminine)', highlight: 'moje' },
          { cz: 'moje / mé auto', en: 'my car (neuter)', highlight: 'moje' },
        ],
      },
      {
        label: 'Your (2nd person)',
        examples: [
          { cz: 'tvůj bratr', en: 'your brother', highlight: 'tvůj' },
          { cz: 'tvoje / tvá sestra', en: 'your sister', highlight: 'tvoje' },
          { cz: 'tvoje / tvé auto', en: 'your car', highlight: 'tvoje' },
        ],
      },
      {
        label: 'His / Her (3rd person)',
        examples: [
          { cz: 'jeho bratr / sestra / auto', en: 'his brother / sister / car', highlight: 'jeho' },
          { cz: 'její bratr / sestra / auto', en: 'her brother / sister / car', highlight: 'její' },
        ],
      },
      {
        label: 'Our / Your (pl.) / Their',
        examples: [
          { cz: 'náš bratr / naše sestra / naše auto', en: 'our brother / sister / car', highlight: 'náš' },
          { cz: 'váš bratr / vaše sestra / vaše auto', en: 'your (pl.) brother / sister / car', highlight: 'váš' },
          { cz: 'jejich bratr / sestra / auto', en: 'their brother / sister / car', highlight: 'jejich' },
        ],
      },
    ],
    tip: '3rd person forms "jeho" (his), "její" (her), and "jejich" (their) NEVER change endings — they stay the same regardless of the noun\'s gender or case.',
  }],

  // ── LESSON 5: Modal Verbs ───────────────────────────────────────
  5: [{
    type: 'conjugation',
    title: 'Modal Verbs — Conjugation',
    description: 'Modal verbs are combined with an infinitive. Only the modal conjugates; the main verb stays as-is.',
    columns: [
      { header: 'chtít', subheader: 'to want' },
      { header: 'muset', subheader: 'must / have to' },
      { header: 'moct', subheader: 'can / be able' },
      { header: 'umět', subheader: 'know how to' },
      { header: 'smět', subheader: 'may / be allowed' },
    ],
    rows: [
      { person: 'Já', forms: ['chci', 'musím', 'můžu / mohu', 'umím', 'smím'] },
      { person: 'Ty', forms: ['chceš', 'musíš', 'můžeš', 'umíš', 'smíš'] },
      { person: 'On / Ona', forms: ['chce', 'musí', 'může', 'umí', 'smí'] },
      { person: 'My', forms: ['chceme', 'musíme', 'můžeme', 'umíme', 'smíme'] },
      { person: 'Vy', forms: ['chcete', 'musíte', 'můžete', 'umíte', 'smíte'] },
      { person: 'Oni', forms: ['chtějí', 'musí / musejí', 'můžou / mohou', 'umějí / umí', 'smějí / smí'] },
    ],
    tip: 'The second verb ALWAYS stays in the infinitive: "Chci spát" (I want to sleep), "Musím jít" (I must go). "Smět" is used for permission: "Tady se nesmí kouřit" (Smoking is not allowed here).',
    examples: [
      { cz: 'Chci spát.', en: 'I want to sleep.', highlight: 'Chci' },
      { cz: 'Umíš mluvit česky?', en: 'Do you know how to speak Czech?', highlight: 'Umíš' },
      { cz: 'Tady nesmíte fotit.', en: 'You are not allowed to take photos here.', highlight: 'nesmíte' },
    ],
  }],

  // ── LESSON 6: Past Tense ────────────────────────────────────────
  6: [{
    type: 'conjugation',
    title: 'Past Tense — l-form + být',
    description: 'Drop -t from the infinitive, add -l (masc.) / -la (fem.) / -lo (neut.) / -li (plural). Combine with the present tense of "být".',
    columns: [
      { header: 'dělat → dělal', subheader: 'to do (masc.)' },
      { header: 'dělat → dělala', subheader: 'to do (fem.)' },
    ],
    rows: [
      { person: 'Já', forms: ['dělal jsem', 'dělala jsem'] },
      { person: 'Ty', forms: ['dělal jsi', 'dělala jsi'] },
      { person: 'On / Ona', forms: ['dělal ∅', 'dělala ∅'] },
      { person: 'My', forms: ['dělali jsme', 'dělaly jsme'] },
      { person: 'Vy', forms: ['dělali jste', 'dělaly jste'] },
      { person: 'Oni / Ony', forms: ['dělali ∅', 'dělaly ∅'] },
    ],
    tabs: [
      {
        label: 'Neuter & Plural',
        columns: [
          { header: 'dělat → dělalo', subheader: 'to do (neuter)' },
          { header: 'dělat → dělali/y/a', subheader: 'to do (plural)' },
        ],
        rows: [
          { person: 'Ono (neuter)', forms: ['dělalo ∅', '—'] },
          { person: 'My (Ma / F / N)', forms: ['—', 'dělali / dělaly / dělala jsme'] },
          { person: 'Vy (Ma / F / N)', forms: ['—', 'dělali / dělaly / dělala jste'] },
          { person: 'Oni / Ony / Ona', forms: ['—', 'dělali / dělaly / dělala ∅'] },
        ],
      },
      {
        label: 'Irregular Verbs',
        columns: [
          { header: 'jít → šel', subheader: 'to go (walk)' },
          { header: 'moct → mohl', subheader: 'can / be able' },
          { header: 'jíst → jedl', subheader: 'to eat' },
        ],
        rows: [
          { person: 'On', forms: ['šel', 'mohl', 'jedl'] },
          { person: 'Ona', forms: ['šla', 'mohla', 'jedla'] },
          { person: 'Ono', forms: ['šlo', 'mohlo', 'jedlo'] },
          { person: 'Oni', forms: ['šli', 'mohli', 'jedli'] },
        ],
      },
    ],
    tip: '3rd person (on/ona/oni) DROPS the auxiliary verb entirely! Just say "On dělal", NOT "On je dělal". The auxiliary (jsem, jsi, jsme, jste) must be in the 2nd position.',
    examples: [
      { cz: 'Včera jsem byl doma.', en: 'Yesterday I was at home.', highlight: 'jsem byl' },
      { cz: 'Marina šla do práce.', en: 'Marina went to work.', highlight: 'šla' },
    ],
  }],

  // ── LESSON 7: Plurals 2, 3, 4 ──────────────────────────────────
  7: [{
    type: 'pattern',
    title: 'Plurals after Numbers 2, 3, 4',
    rule: 'Numbers 2, 3, 4 take the NOMINATIVE PLURAL. Numbers 5+ take the GENITIVE PLURAL (learned later).',
    items: [
      {
        label: 'Masculine Inanimate',
        examples: [
          { cz: 'dva pokoje', en: 'two rooms', highlight: 'pokoje' },
          { cz: 'tři byty', en: 'three flats', highlight: 'byty' },
          { cz: 'čtyři stoly', en: 'four tables', highlight: 'stoly' },
        ],
      },
      {
        label: 'Masculine Animate',
        examples: [
          { cz: 'dva studenti', en: 'two students', highlight: 'studenti' },
          { cz: 'tři doktoři', en: 'three doctors', highlight: 'doktoři' },
          { cz: 'čtyři kluci', en: 'four boys', highlight: 'kluci' },
        ],
      },
      {
        label: 'Feminine',
        examples: [
          { cz: 'dvě židle', en: 'two chairs', highlight: 'židle' },
          { cz: 'tři koupelny', en: 'three bathrooms', highlight: 'koupelny' },
          { cz: 'čtyři knihy', en: 'four books', highlight: 'knihy' },
        ],
      },
      {
        label: 'Neuter',
        examples: [
          { cz: 'dvě křesla', en: 'two armchairs', highlight: 'křesla' },
          { cz: 'čtyři okna', en: 'four windows', highlight: 'okna' },
          { cz: 'tři města', en: 'three cities', highlight: 'města' },
        ],
      },
    ],
    tip: 'The numbers 1 and 2 also change by gender! Masculine: jeden/dva. Feminine: jedna/dvě. Neuter: jedno/dvě.',
  }],

  // ── LESSON 8: Future Tense ──────────────────────────────────────
  8: [{
    type: 'conjugation',
    title: 'Future Tense',
    description: 'Regular verbs: budu + infinitive. Motion verbs have irregular one-word futures.',
    columns: [
      { header: 'budu + dělat', subheader: 'regular' },
      { header: 'jít → půjdu', subheader: 'walk (future)' },
      { header: 'jet → pojedu', subheader: 'drive (future)' },
      { header: 'letět → poletím', subheader: 'fly (future)' },
    ],
    rows: [
      { person: 'Já', forms: ['budu dělat', 'půjdu', 'pojedu', 'poletím'] },
      { person: 'Ty', forms: ['budeš dělat', 'půjdeš', 'pojedeš', 'poletíš'] },
      { person: 'On / Ona', forms: ['bude dělat', 'půjde', 'pojede', 'poletí'] },
      { person: 'My', forms: ['budeme dělat', 'půjdeme', 'pojedeme', 'poletíme'] },
      { person: 'Vy', forms: ['budete dělat', 'půjdete', 'pojedete', 'poletíte'] },
      { person: 'Oni', forms: ['budou dělat', 'půjdou', 'pojedou', 'poletí'] },
    ],
    tip: 'Never say "budu jít" or "budu jet"! Motion verbs use their own prefixed future forms (pů-, po-).',
    examples: [
      { cz: 'Zítra budu pracovat.', en: 'Tomorrow I will work.', highlight: 'budu pracovat' },
      { cz: 'Večer půjdeme do kina.', en: 'In the evening we will go to the cinema.', highlight: 'půjdeme' },
      { cz: 'V létě poletíme do Řecka.', en: 'In summer we will fly to Greece.', highlight: 'poletíme' },
    ],
  }],

  // ── LESSON 9: Irregular Plurals + Pain ──────────────────────────
  9: [{
    type: 'pattern',
    title: 'Irregular Body Plurals & Expressing Pain',
    rule: 'Paired body parts have irregular plurals from the ancient "dual" case. Pain uses two different cases.',
    items: [
      {
        label: 'Irregular Plurals (Dual Remnants)',
        examples: [
          { cz: 'oko → oči', en: 'eye → eyes', highlight: 'oči' },
          { cz: 'ucho → uši', en: 'ear → ears', highlight: 'uši' },
          { cz: 'ruka → ruce', en: 'hand/arm → hands/arms', highlight: 'ruce' },
          { cz: 'noha → nohy', en: 'leg/foot → legs/feet', highlight: 'nohy' },
          { cz: 'koleno → kolena', en: 'knee → knees', highlight: 'kolena' },
          { cz: 'rameno → ramena', en: 'shoulder → shoulders', highlight: 'ramena' },
        ],
      },
      {
        label: 'Expressing Pain — Accusative (Bolí mě...)',
        examples: [
          { cz: 'Bolí mě hlava.', en: 'My head hurts. (lit: The head hurts me)', highlight: 'mě' },
          { cz: 'Bolí mě v krku.', en: 'My throat hurts.', highlight: 'mě' },
          { cz: 'Bolí mě zuby.', en: 'My teeth hurt.', highlight: 'mě' },
          { cz: 'Bolí ho záda.', en: 'His back hurts.', highlight: 'ho' },
        ],
      },
      {
        label: 'Expressing Feeling — Dative (Je mi...)',
        examples: [
          { cz: 'Je mi špatně.', en: 'I feel sick. (lit: It is bad to me)', highlight: 'mi' },
          { cz: 'Je mi dobře.', en: 'I feel well.', highlight: 'mi' },
          { cz: 'Je mi zima.', en: 'I\'m cold.', highlight: 'mi' },
          { cz: 'Je mi horko.', en: 'I\'m hot.', highlight: 'mi' },
        ],
      },
    ],
    tip: '"Bolí mě..." (Accusative) = something specific hurts. "Je mi..." (Dative) = a general feeling or state.',
  }],

  // ── LESSON 10: Genitive Case ────────────────────────────────────
  10: [{
    type: 'declension',
    title: 'The Genitive Case — Origin & Location',
    description: 'The genitive answers "Koho? Čeho?" (Of whom? Of what?) and is used with many prepositions.',
    caseName: 'Genitive',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'doktor', ending: '' },
          { word: 'obchod', ending: '' },
          { word: 'škola', ending: '-a' },
          { word: 'nádraží', ending: '-í' },
        ],
      },
      {
        label: 'Genitive',
        forms: [
          { word: 'doktora', ending: '-a' },
          { word: 'obchodu', ending: '-u' },
          { word: 'školy', ending: '-y' },
          { word: 'nádraží', ending: '-í' },
        ],
      },
    ],
    adjectiveRows: [
      {
        label: 'Adj. Nom',
        forms: [
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrá', ending: '-á' },
          { word: 'dobré', ending: '-é' },
        ],
      },
      {
        label: 'Adj. Gen',
        forms: [
          { word: 'dobrého', ending: '-ého' },
          { word: 'dobrého', ending: '-ého' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrého', ending: '-ého' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'doktoři', ending: '-i' },
          { word: 'obchody', ending: '-y' },
          { word: 'školy', ending: '-y' },
          { word: 'nádraží', ending: '-í' },
        ],
      },
      {
        label: 'Gen. Pl.',
        forms: [
          { word: 'doktorů', ending: '-ů' },
          { word: 'obchodů', ending: '-ů' },
          { word: 'škol', ending: '-∅' },
          { word: 'nádraží', ending: '-í' },
        ],
      },
    ],
    pluralAdjectiveRows: [
      {
        label: 'Adj. Nom Pl.',
        forms: [
          { word: 'dobří', ending: '-í' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrá', ending: '-á' },
        ],
      },
      {
        label: 'Adj. Gen Pl.',
        forms: [
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
        ],
      },
    ],
    prepositions: ['z / ze (from)', 'do (to/into)', 'u (at/by)', 'od (from)', 'blízko (near)', 'vedle (next to)'],
    examples: [
      { cz: 'Jdu do školy.', en: 'I go to school.', highlight: 'školy' },
      { cz: 'Bydlím blízko nádraží.', en: 'I live near the station.', highlight: 'nádraží' },
      { cz: 'Jsem u doktora.', en: 'I am at the doctor\'s.', highlight: 'doktora' },
    ],
  }],

  // ── LESSON 11: Short vs Long Motion Verbs ──────────────────────
  11: [{
    type: 'comparison',
    title: 'Short vs. Long Verbs of Motion',
    description: 'Czech distinguishes one-time/specific motion from repeated/habitual motion.',
    panels: [
      {
        heading: 'Short (One-time / Specific)',
        color: 'rose',
        definition: 'A single trip to a specific destination right now or at a specific time.',
        keyForms: ['jít (walk)', 'jet (drive)', 'letět (fly)'],
        examples: [
          { cz: 'Zítra jedu do Prahy.', en: 'Tomorrow I\'m going to Prague.' },
          { cz: 'Dneska jdu do kina.', en: 'Today I\'m going to the cinema.' },
        ],
        whenToUse: 'One direction, one time, specific destination.',
        conjugation: {
          columns: [
            { header: 'jít', subheader: 'walk' },
            { header: 'jet', subheader: 'drive' },
            { header: 'letět', subheader: 'fly' },
          ],
          rows: [
            { person: 'Já', forms: ['jdu', 'jedu', 'letím'] },
            { person: 'Ty', forms: ['jdeš', 'jedeš', 'letíš'] },
            { person: 'On / Ona', forms: ['jde', 'jede', 'letí'] },
            { person: 'My', forms: ['jdeme', 'jedeme', 'letíme'] },
            { person: 'Vy', forms: ['jdete', 'jedete', 'letíte'] },
            { person: 'Oni', forms: ['jdou', 'jedou', 'letí'] },
          ],
        },
      },
      {
        heading: 'Long (Repeated / Habitual)',
        color: 'violet',
        definition: 'A regular, repeated action or a round trip (there and back).',
        keyForms: ['chodit (walk)', 'jezdit (drive)', 'létat (fly)'],
        examples: [
          { cz: 'Každý den chodím do školy.', en: 'Every day I walk to school.' },
          { cz: 'Často jezdím na kole.', en: 'I often ride my bike.' },
        ],
        whenToUse: 'Habitual, repeated, round-trip, or general ability.',
        conjugation: {
          columns: [
            { header: 'chodit', subheader: 'walk' },
            { header: 'jezdit', subheader: 'drive' },
            { header: 'létat', subheader: 'fly' },
          ],
          rows: [
            { person: 'Já', forms: ['chodím', 'jezdím', 'létám'] },
            { person: 'Ty', forms: ['chodíš', 'jezdíš', 'létáš'] },
            { person: 'On / Ona', forms: ['chodí', 'jezdí', 'létá'] },
            { person: 'My', forms: ['chodíme', 'jezdíme', 'létáme'] },
            { person: 'Vy', forms: ['chodíte', 'jezdíte', 'létáte'] },
            { person: 'Oni', forms: ['chodí', 'jezdí', 'létají'] },
          ],
        },
      },
    ],
    tip: 'Prefixes change the direction: při- (arrival: přijet), od- (departure: odjet), vy- (exit: vyjet).',
  }],

  // ── LESSON 12: Reflexive Passive ────────────────────────────────
  12: [{
    type: 'pattern',
    title: 'The Reflexive Passive with "se"',
    rule: 'To say "something is done" without specifying who does it, use the 3rd person verb + "se".',
    items: [
      {
        label: 'How to form it',
        examples: [
          { cz: 'Kapr se jí na Vánoce.', en: 'Carp is eaten at Christmas.', highlight: 'se jí' },
          { cz: 'Vánoce se slaví tři dny.', en: 'Christmas is celebrated for three days.', highlight: 'se slaví' },
          { cz: 'Tady se mluví česky.', en: 'Czech is spoken here.', highlight: 'se mluví' },
        ],
      },
      {
        label: 'Word order: "se" in 2nd position',
        examples: [
          { cz: 'Na Silvestra se pije šampaňské.', en: 'Champagne is drunk on New Year\'s Eve.', highlight: 'se pije' },
          { cz: 'Jak se to řekne česky?', en: 'How do you say that in Czech?', highlight: 'se' },
        ],
      },
      {
        label: 'Rules & prohibitions',
        examples: [
          { cz: 'Tady se nesmí kouřit.', en: 'Smoking is not allowed here.', highlight: 'se nesmí' },
          { cz: 'Jak se to píše?', en: 'How is that written?', highlight: 'se' },
          { cz: 'To se nedělá!', en: 'That\'s not done! (That\'s inappropriate!)', highlight: 'se nedělá' },
        ],
      },
    ],
    tip: 'The reflexive passive is extremely common in Czech — it\'s used for traditions, rules, signs, and general statements.',
  }],

  // ── LESSON 13: Conditional Mood ─────────────────────────────────
  13: [{
    type: 'conjugation',
    title: 'The Conditional Mood (Would)',
    description: 'Combine the past tense l-form with the conditional particle. The particle must be in the 2nd position.',
    columns: [
      { header: 'Particle', subheader: 'conditional' },
      { header: 'Example (dělat)', subheader: 'would do' },
      { header: 'Kdyby... (If...)', subheader: 'když + particle' },
    ],
    rows: [
      { person: 'Já', forms: ['bych', 'dělal/a bych', 'kdybych'] },
      { person: 'Ty', forms: ['bys', 'dělal/a bys', 'kdybys'] },
      { person: 'On / Ona', forms: ['by', 'dělal/a by', 'kdyby'] },
      { person: 'My', forms: ['bychom', 'dělali bychom', 'kdybychom'] },
      { person: 'Vy', forms: ['byste', 'dělali byste', 'kdybyste'] },
      { person: 'Oni', forms: ['by', 'dělali by', 'kdyby'] },
    ],
    tabs: [
      {
        label: 'Negative Conditional',
        columns: [
          { header: 'Negative', subheader: 'would not do' },
          { header: 'Kdyby ne... (If not...)', subheader: 'condition' },
        ],
        rows: [
          { person: 'Já', forms: ['nedělal/a bych', 'kdybych nedělal/a'] },
          { person: 'Ty', forms: ['nedělal/a bys', 'kdybys nedělal/a'] },
          { person: 'On / Ona', forms: ['nedělal/a by', 'kdyby nedělal/a'] },
          { person: 'My', forms: ['nedělali bychom', 'kdybychom nedělali'] },
          { person: 'Vy', forms: ['nedělali byste', 'kdybyste nedělali'] },
          { person: 'Oni', forms: ['nedělali by', 'kdyby nedělali'] },
        ],
      },
    ],
    tip: 'The conditional particle follows 2nd position rules, just like "jsem/jsi" in past tense. "Chtěl bych..." (I would like...) is the most polite way to order or request.',
    examples: [
      { cz: 'Chtěl bych kávu.', en: 'I would like a coffee.', highlight: 'bych' },
      { cz: 'Kdybych měl čas, šel bych do kina.', en: 'If I had time, I would go to the cinema.', highlight: 'Kdybych' },
    ],
  }],

  // ── LESSON 14: Comparative & Superlative ────────────────────────
  14: [
    {
      type: 'pattern',
      title: 'Comparing Adjectives & Superlatives',
      rule: 'Comparative: add -ší or -ější/-ejší to the stem. Superlative: add nej- prefix to the comparative.',
      items: [
        {
          label: 'Regular comparatives',
          examples: [
            { cz: 'starý → starší → nejstarší', en: 'old → older → oldest', highlight: 'starší' },
            { cz: 'krásný → krásnější → nejkrásnější', en: 'beautiful → more beautiful → most beautiful', highlight: 'krásnější' },
            { cz: 'chytrý → chytřejší → nejchytřejší', en: 'smart → smarter → smartest', highlight: 'chytřejší' },
          ],
        },
        {
          label: 'Irregular comparatives (must memorize!)',
          examples: [
            { cz: 'dobrý → lepší → nejlepší', en: 'good → better → best', highlight: 'lepší' },
            { cz: 'špatný → horší → nejhorší', en: 'bad → worse → worst', highlight: 'horší' },
            { cz: 'velký → větší → největší', en: 'big → bigger → biggest', highlight: 'větší' },
            { cz: 'malý → menší → nejmenší', en: 'small → smaller → smallest', highlight: 'menší' },
            { cz: 'dlouhý → delší → nejdelší', en: 'long → longer → longest', highlight: 'delší' },
          ],
        },
      ],
      tip: 'For adverbs: dobře → líp/lépe (better), špatně → hůř/hůře (worse). Use "než" for "than": "Tom je starší než Petr."',
    },
    {
      type: 'declension',
      title: 'Comparative Adjective Declension',
      description: 'Comparative adjectives (starší, lepší, etc.) decline like soft adjectives — the same pattern for all genders.',
      caseName: 'Soft Adj. Pattern',
      columns: [
        { header: 'Ma', subheader: 'Masc. Animate' },
        { header: 'Mi', subheader: 'Masc. Inanimate' },
        { header: 'F', subheader: 'Feminine' },
        { header: 'N', subheader: 'Neuter' },
      ],
      rows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'starší', ending: '-í' },
            { word: 'starší', ending: '-í' },
            { word: 'starší', ending: '-í' },
            { word: 'starší', ending: '-í' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'staršího', ending: '-ího' },
            { word: 'starší', ending: '= Nom' },
            { word: 'starší', ending: '= Nom' },
            { word: 'starší', ending: '= Nom' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'staršího', ending: '-ího' },
            { word: 'staršího', ending: '-ího' },
            { word: 'starší', ending: '-í' },
            { word: 'staršího', ending: '-ího' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'staršímu', ending: '-ímu' },
            { word: 'staršímu', ending: '-ímu' },
            { word: 'starší', ending: '-í' },
            { word: 'staršímu', ending: '-ímu' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'starším', ending: '-ím' },
            { word: 'starším', ending: '-ím' },
            { word: 'starší', ending: '-í' },
            { word: 'starším', ending: '-ím' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'starším', ending: '-ím' },
            { word: 'starším', ending: '-ím' },
            { word: 'starší', ending: '-í' },
            { word: 'starším', ending: '-ím' },
          ],
        },
      ],
      examples: [
        { cz: 'Mluvím se starším bratrem.', en: 'I\'m talking to an older brother. (Instrumental)', highlight: 'starším' },
        { cz: 'Bydlím ve větším městě.', en: 'I live in a bigger city. (Locative)', highlight: 'větším' },
      ],
    },
  ],

  // ── LESSON 15: Dative Case ──────────────────────────────────────
  15: [{
    type: 'declension',
    title: 'The Dative Case — Indirect Object',
    description: 'The dative answers "Komu? Čemu?" (To whom? To what?) and marks the receiver of an action.',
    caseName: 'Dative',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F (-a)', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'doktor', ending: '' },
          { word: 'počítač', ending: '' },
          { word: 'maminka', ending: '-a' },
          { word: 'město', ending: '-o' },
        ],
      },
      {
        label: 'Dative',
        forms: [
          { word: 'doktorovi', ending: '-ovi' },
          { word: 'počítači', ending: '-i' },
          { word: 'mamince', ending: '-ce' },
          { word: 'městu', ending: '-u' },
        ],
      },
    ],
    adjectiveRows: [
      {
        label: 'Adj. Nom',
        forms: [
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrá', ending: '-á' },
          { word: 'dobré', ending: '-é' },
        ],
      },
      {
        label: 'Adj. Dat',
        forms: [
          { word: 'dobrému', ending: '-ému' },
          { word: 'dobrému', ending: '-ému' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrému', ending: '-ému' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'doktoři', ending: '-i' },
          { word: 'počítače', ending: '-e' },
          { word: 'maminky', ending: '-y' },
          { word: 'města', ending: '-a' },
        ],
      },
      {
        label: 'Dat. Pl.',
        forms: [
          { word: 'doktorům', ending: '-ům' },
          { word: 'počítačům', ending: '-ům' },
          { word: 'maminkám', ending: '-ám' },
          { word: 'městům', ending: '-ům' },
        ],
      },
    ],
    pluralAdjectiveRows: [
      {
        label: 'Adj. Nom Pl.',
        forms: [
          { word: 'dobří', ending: '-í' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrá', ending: '-á' },
        ],
      },
      {
        label: 'Adj. Dat Pl.',
        forms: [
          { word: 'dobrým', ending: '-ým' },
          { word: 'dobrým', ending: '-ým' },
          { word: 'dobrým', ending: '-ým' },
          { word: 'dobrým', ending: '-ým' },
        ],
      },
    ],
    prepositions: ['k / ke (towards)', 'díky (thanks to)', 'kvůli (because of)', 'proti (against)'],
    examples: [
      { cz: 'Telefonuju doktorovi.', en: 'I am calling the doctor.', highlight: 'doktorovi' },
      { cz: 'Koupím dárek mamince.', en: 'I will buy a present for mum.', highlight: 'mamince' },
      { cz: 'Dám to Petrovi.', en: 'I will give it to Petr.', highlight: 'Petrovi' },
    ],
  }],

  // ── LESSON 16: Expressing Likes ─────────────────────────────────
  16: [{
    type: 'comparison',
    title: 'Three Ways to Say "I Like"',
    panels: [
      {
        heading: 'Mít rád',
        color: 'rose',
        definition: 'Active, broad liking — people, hobbies, things in general.',
        keyForms: ['Mám rád/a...'],
        examples: [
          { cz: 'Mám rád kávu.', en: 'I like coffee.' },
          { cz: 'Mám tě rád/a.', en: 'I love you.' },
        ],
        whenToUse: 'General preference. "I like X as a concept."',
        conjugation: {
          columns: [{ header: 'mít rád', subheader: 'to like (masc. / fem.)' }],
          rows: [
            { person: 'Já', forms: ['Mám rád / ráda'] },
            { person: 'Ty', forms: ['Máš rád / ráda'] },
            { person: 'On / Ona', forms: ['Má rád / ráda'] },
            { person: 'My', forms: ['Máme rádi / rády'] },
            { person: 'Vy', forms: ['Máte rádi / rády'] },
            { person: 'Oni / Ony', forms: ['Mají rádi / rády'] },
          ],
        },
      },
      {
        heading: 'Líbit se',
        color: 'violet',
        definition: 'Passive, visual/aesthetic — something pleases you. Uses DATIVE.',
        keyForms: ['... se mi líbí'],
        examples: [
          { cz: 'Líbí se mi ten film.', en: 'I like that movie. (it pleases me)' },
          { cz: 'Ta sukně se jí líbí.', en: 'She likes that skirt.' },
        ],
        whenToUse: 'Visual appeal, aesthetic reaction. "X is pleasing to me."',
        conjugation: {
          columns: [{ header: 'líbit se', subheader: '... pleases (dative person)' }],
          rows: [
            { person: 'Mně (to me)', forms: ['... se mi líbí'] },
            { person: 'Tobě (to you)', forms: ['... se ti líbí'] },
            { person: 'Jemu / Jí', forms: ['... se mu/jí líbí'] },
            { person: 'Nám (to us)', forms: ['... se nám líbí'] },
            { person: 'Vám (to you pl.)', forms: ['... se vám líbí'] },
            { person: 'Jim (to them)', forms: ['... se jim líbí'] },
          ],
        },
      },
      {
        heading: 'Chutnat',
        color: 'amber',
        definition: 'Specifically for TASTE — food and drink only. Uses DATIVE.',
        keyForms: ['... mi chutná'],
        examples: [
          { cz: 'Chutná mi to pivo.', en: 'I like that beer. (it tastes good to me)' },
          { cz: 'Nechutná mi to.', en: 'I don\'t like the taste of it.' },
        ],
        whenToUse: 'Food and drink only. "X tastes good to me."',
        conjugation: {
          columns: [{ header: 'chutnat', subheader: '... tastes good to (dative person)' }],
          rows: [
            { person: 'Mně (to me)', forms: ['... mi chutná / chutnají'] },
            { person: 'Tobě (to you)', forms: ['... ti chutná / chutnají'] },
            { person: 'Jemu / Jí', forms: ['... mu/jí chutná / chutnají'] },
            { person: 'Nám (to us)', forms: ['... nám chutná / chutnají'] },
            { person: 'Vám (to you pl.)', forms: ['... vám chutná / chutnají'] },
            { person: 'Jim (to them)', forms: ['... jim chutná / chutnají'] },
          ],
        },
      },
    ],
    tip: 'Notice that "líbit se" and "chutnat" flip the sentence structure: the thing you like is the SUBJECT, and YOU are in the dative case.',
  }],

  // ── LESSON 17: Instrumental Case ────────────────────────────────
  17: [{
    type: 'declension',
    title: 'The Instrumental Case — With Whom / What',
    description: 'The instrumental answers "S kým? S čím?" (With whom? With what?) and describes tools, companions, and transport.',
    caseName: 'Instrumental',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'bratr', ending: '' },
          { word: 'vlak', ending: '' },
          { word: 'maminka', ending: '-a' },
          { word: 'pero', ending: '-o' },
        ],
      },
      {
        label: 'Instrumental',
        forms: [
          { word: 'bratrem', ending: '-em' },
          { word: 'vlakem', ending: '-em' },
          { word: 'maminkou', ending: '-ou' },
          { word: 'perem', ending: '-em' },
        ],
      },
    ],
    adjectiveRows: [
      {
        label: 'Adj. Nom',
        forms: [
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrá', ending: '-á' },
          { word: 'dobré', ending: '-é' },
        ],
      },
      {
        label: 'Adj. Ins',
        forms: [
          { word: 'dobrým', ending: '-ým' },
          { word: 'dobrým', ending: '-ým' },
          { word: 'dobrou', ending: '-ou' },
          { word: 'dobrým', ending: '-ým' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'bratři', ending: '-i' },
          { word: 'vlaky', ending: '-y' },
          { word: 'maminky', ending: '-y' },
          { word: 'pera', ending: '-a' },
        ],
      },
      {
        label: 'Ins. Pl.',
        forms: [
          { word: 'bratry', ending: '-y' },
          { word: 'vlaky', ending: '-y' },
          { word: 'maminkami', ending: '-ami' },
          { word: 'pery', ending: '-y' },
        ],
      },
    ],
    pluralAdjectiveRows: [
      {
        label: 'Adj. Nom Pl.',
        forms: [
          { word: 'dobří', ending: '-í' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrá', ending: '-á' },
        ],
      },
      {
        label: 'Adj. Ins Pl.',
        forms: [
          { word: 'dobrými', ending: '-ými' },
          { word: 'dobrými', ending: '-ými' },
          { word: 'dobrými', ending: '-ými' },
          { word: 'dobrými', ending: '-ými' },
        ],
      },
    ],
    prepositions: ['s / se (with)', 'před (in front of)', 'za (behind)', 'nad (above)', 'pod (under)', 'mezi (between)'],
    examples: [
      { cz: 'Jdu do kina s Petrem.', en: 'I\'m going to the cinema with Petr.', highlight: 's Petrem' },
      { cz: 'Píšu perem.', en: 'I write with a pen.', highlight: 'perem' },
      { cz: 'Jedu vlakem.', en: 'I go by train.', highlight: 'vlakem' },
    ],
  }],

  // ── LESSON 18: Locative Case ────────────────────────────────────
  18: [{
    type: 'declension',
    title: 'The Locative Case — Location & "About"',
    description: 'The locative is the ONLY case that never appears without a preposition. It answers "O kom? O čem?" (About whom/what?) and "Kde?" (Where?).',
    caseName: 'Locative',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'doktor', ending: '' },
          { word: 'život', ending: '' },
          { word: 'Praha', ending: '-a' },
          { word: 'město', ending: '-o' },
        ],
      },
      {
        label: 'Locative',
        forms: [
          { word: 'doktorovi', ending: '-ovi' },
          { word: 'životě', ending: '-ě' },
          { word: 'Praze', ending: '-e' },
          { word: 'městě', ending: '-ě' },
        ],
      },
    ],
    adjectiveRows: [
      {
        label: 'Adj. Nom',
        forms: [
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrý', ending: '-ý' },
          { word: 'dobrá', ending: '-á' },
          { word: 'dobré', ending: '-é' },
        ],
      },
      {
        label: 'Adj. Loc',
        forms: [
          { word: 'dobrém', ending: '-ém' },
          { word: 'dobrém', ending: '-ém' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrém', ending: '-ém' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'doktoři', ending: '-i' },
          { word: 'životy', ending: '-y' },
          { word: 'školy', ending: '-y' },
          { word: 'města', ending: '-a' },
        ],
      },
      {
        label: 'Loc. Pl.',
        forms: [
          { word: 'doktorech', ending: '-ech' },
          { word: 'životech', ending: '-ech' },
          { word: 'školách', ending: '-ách' },
          { word: 'městech', ending: '-ech' },
        ],
      },
    ],
    pluralAdjectiveRows: [
      {
        label: 'Adj. Nom Pl.',
        forms: [
          { word: 'dobří', ending: '-í' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobré', ending: '-é' },
          { word: 'dobrá', ending: '-á' },
        ],
      },
      {
        label: 'Adj. Loc Pl.',
        forms: [
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
          { word: 'dobrých', ending: '-ých' },
        ],
      },
    ],
    prepositions: ['v / ve (in)', 'na (on/at)', 'o (about)', 'po (after/around)', 'při (during)'],
    examples: [
      { cz: 'Bydlím v Praze.', en: 'I live in Prague.', highlight: 'Praze' },
      { cz: 'Mluvíme o životě.', en: 'We talk about life.', highlight: 'životě' },
      { cz: 'Čtu knihu o lásce.', en: 'I\'m reading a book about love.', highlight: 'lásce' },
    ],
  }],

  // ── LESSON 19: Imperative Mood ──────────────────────────────────
  19: [{
    type: 'conjugation',
    title: 'The Imperative Mood — Commands',
    description: 'Imperatives exist for Ty (informal), Vy (formal/plural), and My (let\'s). Add ne- for negative commands.',
    columns: [
      { header: 'dělat', subheader: 'to do' },
      { header: 'psát', subheader: 'to write' },
      { header: 'mluvit', subheader: 'to speak' },
      { header: 'jít', subheader: 'to go' },
    ],
    rows: [
      { person: 'Ty!', forms: ['Dělej!', 'Piš!', 'Mluv!', 'Jdi! / Pojď!'] },
      { person: 'Vy!', forms: ['Dělejte!', 'Pište!', 'Mluvte!', 'Jděte! / Pojďte!'] },
      { person: 'My!', forms: ['Dělejme!', 'Pišme!', 'Mluvme!', 'Pojďme!'] },
    ],
    tabs: [
      {
        label: 'More Irregular Verbs',
        columns: [
          { header: 'říct', subheader: 'to say' },
          { header: 'vzít', subheader: 'to take' },
          { header: 'být', subheader: 'to be' },
        ],
        rows: [
          { person: 'Ty!', forms: ['Řekni!', 'Vezmi!', 'Buď!'] },
          { person: 'Vy!', forms: ['Řekněte!', 'Vezměte!', 'Buďte!'] },
          { person: 'My!', forms: ['Řekněme!', 'Vezměme!', 'Buďme!'] },
        ],
      },
    ],
    tip: 'Negative: just add "Ne-" → "Nedělej!" (Don\'t do it!), "Nemluv!" (Don\'t talk!). "Pojď/Pojďte/Pojďme" is the special imperative of "jít" meaning "Come! / Let\'s go!"',
    examples: [
      { cz: 'Uklid si pokoj!', en: 'Clean your room!', highlight: 'Uklid' },
      { cz: 'Nedívej se na televizi!', en: 'Don\'t watch TV!', highlight: 'Nedívej' },
      { cz: 'Pojďme domů!', en: 'Let\'s go home!', highlight: 'Pojďme' },
    ],
  }],

  // ── LESSON 20: Partitive Genitive ───────────────────────────────
  20: [{
    type: 'declension',
    title: 'The Partitive Genitive — Quantities',
    description: 'When measuring or portioning something, the substance must be in the Genitive case. Think "a piece OF cake" — the "of" signals Genitive.',
    caseName: 'Genitive (partitive)',
    columns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    rows: [
      {
        label: 'Nominative',
        forms: [
          { word: 'kamarád', ending: '' },
          { word: 'cukr', ending: '' },
          { word: 'mouka', ending: '-a' },
          { word: 'mléko', ending: '-o' },
        ],
      },
      {
        label: 'Genitive',
        forms: [
          { word: 'kamaráda', ending: '-a' },
          { word: 'cukru', ending: '-u' },
          { word: 'mouky', ending: '-y' },
          { word: 'mléka', ending: '-a' },
        ],
      },
    ],
    pluralColumns: [
      { header: 'Ma', subheader: 'Masc. Animate' },
      { header: 'Mi', subheader: 'Masc. Inanimate' },
      { header: 'F', subheader: 'Feminine' },
      { header: 'N', subheader: 'Neuter' },
    ],
    pluralRows: [
      {
        label: 'Nom. Pl.',
        forms: [
          { word: 'kamarádi', ending: '-i' },
          { word: 'cukry', ending: '-y' },
          { word: 'mouky', ending: '-y' },
          { word: 'mléka', ending: '-a' },
        ],
      },
      {
        label: 'Gen. Pl.',
        forms: [
          { word: 'kamarádů', ending: '-ů' },
          { word: 'cukrů', ending: '-ů' },
          { word: 'mouk', ending: '-∅' },
          { word: 'mlék', ending: '-∅' },
        ],
      },
    ],
    examples: [
      { cz: 'Potřebuju litr mléka.', en: 'I need a liter of milk.', highlight: 'mléka' },
      { cz: 'Koupím 200 gramů cukru.', en: 'I\'ll buy 200 grams of sugar.', highlight: 'cukru' },
      { cz: 'Dám si kousek dortu.', en: 'I\'ll have a piece of cake.', highlight: 'dortu' },
      { cz: 'Kolik vody potřebujeme?', en: 'How much water do we need?', highlight: 'vody' },
    ],
  }],

  // ── LESSON 21: Masculine Animate Plurals ────────────────────────
  21: [{
    type: 'declension',
    title: 'Masculine Animate Plurals — Consonant Mutations',
    description: 'Living masculine nouns (men, animals) take special nominative plural endings that trigger consonant changes.',
    caseName: 'Nominative Plural',
    columns: [
      { header: 'Singular', subheader: 'Nominative' },
      { header: 'Plural', subheader: 'Nominative' },
      { header: 'Mutation', subheader: 'consonant change' },
    ],
    rows: [
      {
        label: 'k → c',
        forms: [
          { word: 'kluk', ending: '-k' },
          { word: 'kluci', ending: '-ci' },
          { word: 'k → c', ending: '' },
        ],
      },
      {
        label: 'h → z',
        forms: [
          { word: 'druh', ending: '-h' },
          { word: 'druzi', ending: '-zi' },
          { word: 'h → z', ending: '' },
        ],
      },
      {
        label: 'ch → š',
        forms: [
          { word: 'Čech', ending: '-ch' },
          { word: 'Češi', ending: '-ši' },
          { word: 'ch → š', ending: '' },
        ],
      },
      {
        label: 'r → ř',
        forms: [
          { word: 'doktor', ending: '-r' },
          { word: 'doktoři', ending: '-ři' },
          { word: 'r → ř', ending: '' },
        ],
      },
      {
        label: 't → ť',
        forms: [
          { word: 'student', ending: '-t' },
          { word: 'studenti', ending: '-ti' },
          { word: 't → ť', ending: '' },
        ],
      },
      {
        label: 'd → ď',
        forms: [
          { word: 'soused', ending: '-d' },
          { word: 'sousedi', ending: '-di' },
          { word: 'd → ď', ending: '' },
        ],
      },
      {
        label: '-ové ending',
        forms: [
          { word: 'pán', ending: '' },
          { word: 'pánové', ending: '-ové' },
          { word: '(no mutation)', ending: '' },
        ],
      },
    ],
    examples: [
      { cz: 'To jsou hezcí psi.', en: 'Those are nice dogs.', highlight: 'hezcí psi' },
      { cz: 'Ptáci zpívají.', en: 'The birds are singing.', highlight: 'Ptáci' },
      { cz: 'Češi jsou milí lidé.', en: 'Czechs are nice people.', highlight: 'Češi' },
      { cz: 'Studenti čekají na autobus.', en: 'Students are waiting for the bus.', highlight: 'Studenti' },
    ],
  }],

  // ── LESSON 22: Reflexive Possessive "svůj" ──────────────────────
  22: [
    {
      type: 'pattern',
      title: 'The Reflexive Possessive "Svůj"',
      rule: 'When the SUBJECT of the sentence possesses the OBJECT, use "svůj/svá/své" instead of jeho/její/můj etc.',
      items: [
        {
          label: 'Correct — svůj (own)',
          examples: [
            { cz: 'Petr miluje svou manželku.', en: 'Petr loves his (own) wife.', highlight: 'svou' },
            { cz: 'Čtu svou knihu.', en: 'I\'m reading my (own) book.', highlight: 'svou' },
            { cz: 'Eva zapomněla své klíče.', en: 'Eva forgot her (own) keys.', highlight: 'své' },
          ],
        },
        {
          label: 'Different meaning — jeho/její',
          examples: [
            { cz: 'Petr miluje jeho manželku.', en: 'Petr loves HIS (another man\'s!) wife.', highlight: 'jeho' },
            { cz: 'Eva čte její knihu.', en: 'Eva reads HER (another woman\'s) book.', highlight: 'její' },
          ],
        },
      ],
      tip: '"Svůj" declines like "můj": svůj (M), svá/svoji (F), své/svoji (N), svého/svou/své (Acc), etc. It removes ambiguity that exists in English!',
    },
    {
      type: 'declension',
      title: 'Full Declension of "Svůj"',
      description: '"Svůj" follows the same pattern as "můj/tvůj". Here is the full table across cases.',
      caseName: 'Svůj Declension',
      columns: [
        { header: 'Ma', subheader: 'Masc. Animate' },
        { header: 'Mi', subheader: 'Masc. Inanimate' },
        { header: 'F', subheader: 'Feminine' },
        { header: 'N', subheader: 'Neuter' },
      ],
      rows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'svůj', ending: '-ůj' },
            { word: 'svůj', ending: '-ůj' },
            { word: 'svá / svoje', ending: '-á' },
            { word: 'své / svoje', ending: '-é' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'svého', ending: '-ého' },
            { word: 'svůj', ending: '= Nom' },
            { word: 'svou / svoji', ending: '-ou' },
            { word: 'své / svoje', ending: '= Nom' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'svého', ending: '-ého' },
            { word: 'svého', ending: '-ého' },
            { word: 'své', ending: '-é' },
            { word: 'svého', ending: '-ého' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'svému', ending: '-ému' },
            { word: 'svému', ending: '-ému' },
            { word: 'své', ending: '-é' },
            { word: 'svému', ending: '-ému' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'svém', ending: '-ém' },
            { word: 'svém', ending: '-ém' },
            { word: 'své', ending: '-é' },
            { word: 'svém', ending: '-ém' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'svým', ending: '-ým' },
            { word: 'svým', ending: '-ým' },
            { word: 'svou', ending: '-ou' },
            { word: 'svým', ending: '-ým' },
          ],
        },
      ],
      pluralColumns: [
        { header: 'Ma Pl.', subheader: 'Masc. Animate' },
        { header: 'Mi/F/N Pl.', subheader: 'Other genders' },
      ],
      pluralRows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'svoji / své', ending: '-í/-é' },
            { word: 'své / svá / svoje', ending: '-é/-á' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'své', ending: '-é' },
            { word: 'své / svá / svoje', ending: '-é/-á' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'svých', ending: '-ých' },
            { word: 'svých', ending: '-ých' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'svým', ending: '-ým' },
            { word: 'svým', ending: '-ým' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'svých', ending: '-ých' },
            { word: 'svých', ending: '-ých' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'svými', ending: '-ými' },
            { word: 'svými', ending: '-ými' },
          ],
        },
      ],
      examples: [
        { cz: 'Mluvil o svém životě.', en: 'He talked about his (own) life. (Locative)', highlight: 'svém' },
        { cz: 'Jela se svými dětmi.', en: 'She went with her (own) children. (Instrumental)', highlight: 'svými' },
      ],
    },
  ],

  // ── LESSON 23: Ordinal Numbers ──────────────────────────────────
  23: [
    {
      type: 'pattern',
      title: 'Ordinal Numbers (1st, 2nd, 3rd...)',
      rule: 'Ordinal numbers decline like adjectives. When written as digits, Czech uses a period: "1." = first.',
      items: [
        {
          label: 'Key ordinals (1–10)',
          examples: [
            { cz: '1. = první', en: 'first (soft adjective: -í)', highlight: 'první' },
            { cz: '2. = druhý', en: 'second (hard adjective: -ý/-á/-é)', highlight: 'druhý' },
            { cz: '3. = třetí', en: 'third (soft adjective: -í)', highlight: 'třetí' },
            { cz: '4. = čtvrtý', en: 'fourth', highlight: 'čtvrtý' },
            { cz: '5. = pátý', en: 'fifth', highlight: 'pátý' },
            { cz: '10. = desátý', en: 'tenth', highlight: 'desátý' },
          ],
        },
        {
          label: 'Ordinals 11–20',
          examples: [
            { cz: '11. = jedenáctý', en: 'eleventh', highlight: 'jedenáctý' },
            { cz: '12. = dvanáctý', en: 'twelfth', highlight: 'dvanáctý' },
            { cz: '15. = patnáctý', en: 'fifteenth', highlight: 'patnáctý' },
            { cz: '20. = dvacátý', en: 'twentieth', highlight: 'dvacátý' },
            { cz: '100. = stý', en: 'hundredth', highlight: 'stý' },
          ],
        },
        {
          label: 'They decline like adjectives',
          examples: [
            { cz: 'Sedíme v první řadě.', en: 'We sit in the first row. (Locative)', highlight: 'první' },
            { cz: 'Bydlím ve druhém patře.', en: 'I live on the second floor. (Locative)', highlight: 'druhém' },
            { cz: 'Čekám tu čtvrtou hodinu.', en: 'I\'ve been waiting for the fourth hour. (Accusative)', highlight: 'čtvrtou' },
          ],
        },
      ],
      tip: '"První" and "třetí" are soft adjectives (ending -í for all genders in Nom). "Druhý", "čtvrtý", etc. are hard adjectives (change to -á/-é for feminine/neuter).',
    },
    {
      type: 'declension',
      title: 'Ordinal Declension: Hard vs. Soft',
      description: 'Hard ordinals (druhý) decline like "dobrý". Soft ordinals (první, třetí) decline like comparative adjectives.',
      caseName: 'Hard vs Soft',
      columns: [
        { header: 'Hard: druhý (M)', subheader: '2nd (masc.)' },
        { header: 'Hard: druhá (F)', subheader: '2nd (fem.)' },
        { header: 'Soft: první (M)', subheader: '1st (masc.)' },
        { header: 'Soft: první (F)', subheader: '1st (fem.)' },
      ],
      rows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'druhý', ending: '-ý' },
            { word: 'druhá', ending: '-á' },
            { word: 'první', ending: '-í' },
            { word: 'první', ending: '-í' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'druhého/druhý', ending: '-ého/-ý' },
            { word: 'druhou', ending: '-ou' },
            { word: 'prvního/první', ending: '-ího/-í' },
            { word: 'první', ending: '-í' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'druhého', ending: '-ého' },
            { word: 'druhé', ending: '-é' },
            { word: 'prvního', ending: '-ího' },
            { word: 'první', ending: '-í' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'druhému', ending: '-ému' },
            { word: 'druhé', ending: '-é' },
            { word: 'prvnímu', ending: '-ímu' },
            { word: 'první', ending: '-í' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'druhém', ending: '-ém' },
            { word: 'druhé', ending: '-é' },
            { word: 'prvním', ending: '-ím' },
            { word: 'první', ending: '-í' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'druhým', ending: '-ým' },
            { word: 'druhou', ending: '-ou' },
            { word: 'prvním', ending: '-ím' },
            { word: 'první', ending: '-í' },
          ],
        },
      ],
      examples: [
        { cz: 'Na prvním místě je Petr.', en: 'In first place is Petr.', highlight: 'prvním' },
        { cz: 'Jdu do druhého patra.', en: 'I\'m going to the second floor.', highlight: 'druhého' },
      ],
    },
  ],

  // ── LESSON 24: Relative Pronoun "který" ─────────────────────────
  24: [
    {
      type: 'pattern',
      title: 'The Relative Pronoun "Který" (Who/Which/That)',
      rule: 'GENDER comes from the noun it refers to. CASE comes from its role in the subordinate clause.',
      items: [
        {
          label: 'Gender from the noun',
          examples: [
            { cz: 'To je ten muž, který...', en: 'That is the man who... (masculine)', highlight: 'který' },
            { cz: 'To je ta kniha, která...', en: 'That is the book which... (feminine)', highlight: 'která' },
            { cz: 'To je to auto, které...', en: 'That is the car which... (neuter)', highlight: 'které' },
          ],
        },
        {
          label: 'Case from the clause role',
          examples: [
            { cz: 'Muž, kterého vidím...', en: 'The man whom I see... (Accusative)', highlight: 'kterého' },
            { cz: 'Žena, které telefonuju...', en: 'The woman to whom I\'m calling... (Dative)', highlight: 'které' },
            { cz: 'Hrad, který postavil Karel IV.', en: 'The castle which Charles IV built. (Nominative)', highlight: 'který' },
          ],
        },
      ],
      tip: 'Think of "který" as two steps: 1) Look LEFT to find the noun\'s gender. 2) Look RIGHT to find the case from the clause. "Který" is the key to building complex, flowing sentences.',
    },
    {
      type: 'declension',
      title: 'Full Declension of "Který"',
      description: '"Který" declines like a hard adjective (like "dobrý"). Here is the complete table.',
      caseName: 'Který Declension',
      columns: [
        { header: 'Ma', subheader: 'Masc. Animate' },
        { header: 'Mi', subheader: 'Masc. Inanimate' },
        { header: 'F', subheader: 'Feminine' },
        { header: 'N', subheader: 'Neuter' },
      ],
      rows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'který', ending: '-ý' },
            { word: 'který', ending: '-ý' },
            { word: 'která', ending: '-á' },
            { word: 'které', ending: '-é' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'kterého', ending: '-ého' },
            { word: 'který', ending: '= Nom' },
            { word: 'kterou', ending: '-ou' },
            { word: 'které', ending: '= Nom' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'kterého', ending: '-ého' },
            { word: 'kterého', ending: '-ého' },
            { word: 'které', ending: '-é' },
            { word: 'kterého', ending: '-ého' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'kterému', ending: '-ému' },
            { word: 'kterému', ending: '-ému' },
            { word: 'které', ending: '-é' },
            { word: 'kterému', ending: '-ému' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'kterém', ending: '-ém' },
            { word: 'kterém', ending: '-ém' },
            { word: 'které', ending: '-é' },
            { word: 'kterém', ending: '-ém' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'kterým', ending: '-ým' },
            { word: 'kterým', ending: '-ým' },
            { word: 'kterou', ending: '-ou' },
            { word: 'kterým', ending: '-ým' },
          ],
        },
      ],
      pluralColumns: [
        { header: 'Ma Pl.', subheader: 'Masc. Animate' },
        { header: 'Mi/F/N Pl.', subheader: 'Other genders' },
      ],
      pluralRows: [
        {
          label: 'Nom.',
          forms: [
            { word: 'kteří', ending: '-í' },
            { word: 'které / která', ending: '-é/-á' },
          ],
        },
        {
          label: 'Acc.',
          forms: [
            { word: 'které', ending: '-é' },
            { word: 'které / která', ending: '-é/-á' },
          ],
        },
        {
          label: 'Gen.',
          forms: [
            { word: 'kterých', ending: '-ých' },
            { word: 'kterých', ending: '-ých' },
          ],
        },
        {
          label: 'Dat.',
          forms: [
            { word: 'kterým', ending: '-ým' },
            { word: 'kterým', ending: '-ým' },
          ],
        },
        {
          label: 'Loc.',
          forms: [
            { word: 'kterých', ending: '-ých' },
            { word: 'kterých', ending: '-ých' },
          ],
        },
        {
          label: 'Ins.',
          forms: [
            { word: 'kterými', ending: '-ými' },
            { word: 'kterými', ending: '-ými' },
          ],
        },
      ],
      examples: [
        { cz: 'Lidé, kteří bydlí v Praze...', en: 'People who live in Prague...', highlight: 'kteří' },
        { cz: 'Kniha, o které mluvíš...', en: 'The book you\'re talking about...', highlight: 'které' },
      ],
    },
  ],
};
