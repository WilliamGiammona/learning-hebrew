// app/verbs/piel/page.tsx
export default function PielPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto md:max-w-6xl">
        <div className="md:flex md:gap-8">
          {/* Table of Contents - Sticky on md+ */}
          <aside className="hidden md:block md:w-64 shrink-0">
            <nav className="sticky top-20 bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="#piel-verb"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#piel-sound"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    How Piel Affects Sound
                  </a>
                </li>
                <li>
                  <a
                    href="#infinitive"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    The Infinitive (שם הפועל)
                  </a>
                </li>
                <li>
                  <a
                    href="#infinitive-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Infinitive Exceptions
                  </a>
                </li>
                <li>
                  <a
                    href="#present-tense"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Present Tense (הווה)
                  </a>
                </li>
                <li>
                  <a
                    href="#present-tense-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Present Tense Exceptions
                  </a>
                </li>
                <li>
                  <a
                    href="#past-tense"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Past Tense (עבר)
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="piel-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Piel (פִּעֵל) - Intensive/Iterative Active Verb
              </h1>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Piel binyan
                  </span>{" "}
                  is
                  <span className="font-semibold"> always active</span>. It
                  often expresses an
                  <span className="font-semibold"> intensive</span> or{" "}
                  <span className="font-semibold">
                    iterative/causative-like
                  </span>{" "}
                  nuance compared with
                  <span className="font-semibold"> Paal</span>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  When a root exists in both Paal and Piel,{" "}
                  <span className="font-semibold">
                    Piel tends to be the comparative/intensive
                  </span>
                  . Example with the root{" "}
                  <span className="font-semibold">קפץ</span>:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    <span className="font-semibold">Paal:</span> לִקְפּוֹץ — “to
                    jump”
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">Piel:</span> לְקַפֵּץ — “to
                    bounce”
                  </li>
                </ul>
              </div>
            </section>

            {/* Piel sound */}
            <section id="piel-sound" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  How Piel Affects Sound
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In Piel, the{" "}
                  <span className="font-semibold">
                    middle root letter is doubled
                  </span>
                  (marked by a dagesh), creating a stronger sound and a
                  characteristic vowel pattern. This is why you&amp;ll hear
                  forms like <span className="font-semibold">דִּבֵּר</span> (
                  <i>diber</i>, “he spoke” from{" "}
                  <span className="font-semibold">דבר</span>) and{" "}
                  <span className="font-semibold">בִּקֵּר</span> (<i>biker</i>,
                  “he visited” from <span className="font-semibold">בקר</span>).
                </p>
              </div>
            </section>

            {/* Infinitive */}
            <section id="infinitive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Infinitive (שם הפועל)
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To form the{" "}
                  <span className="font-semibold">Piel infinitive</span>, place{" "}
                  <span className="font-semibold">ל</span> (lamed, “to”) before
                  the Piel stem of the root:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    דיבר → <span className="font-semibold">לְדַבֵּר</span> (
                    <span className="font-semibold">ledaber</span>) — to speak
                  </li>
                  <li dir="ltr">
                    שילם → <span className="font-semibold">לְשַׁלֵּם</span> (
                    <span className="font-semibold">leshalem</span>) — to pay
                  </li>
                </ul>
              </div>
            </section>

            {/* Infinitive exceptions */}
            <section id="infinitive-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Infinitive Exceptions (Piel)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Four common patterns adjust the Piel infinitive spelling and
                  sound:
                  <span className="font-semibold">
                    {" "}
                    (1) Yod as 1st root letter
                  </span>
                  ,
                  <span className="font-semibold">
                    {" "}
                    (2) Yod as 2nd root letter
                  </span>
                  ,
                  <span className="font-semibold">
                    {" "}
                    (3) Vav as 2nd root letter
                  </span>
                  , and
                  <span className="font-semibold"> (4) final Hey</span>.
                </p>

                {/* 1 + 2: Yod first/second letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  1) Yod as 1st letter · 2) Yod as 2nd letter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After adding <span className="font-semibold">ל</span> before
                  the root, the{" "}
                  <span className="font-semibold">
                    existing י (yod) in the root is doubled
                  </span>{" "}
                  in the Piel stem (you’ll see/feel a strengthened “y” sound).
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    <span className="font-semibold">Root starts with י</span> —
                    ייצג → <span className="font-semibold">לְיַצֵּג</span> (
                    <span className="font-semibold">leyatseg</span>) — “to
                    represent”
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">Yod in the middle</span> —
                    חייג → <span className="font-semibold">לְחַיֵּג</span> (
                    <span className="font-semibold">lechayeg</span>) — “to dial”
                  </li>
                </ul>

                {/* 3: Vav as 2nd letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  3) Vav as 2nd letter of the root
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When the middle letter is{" "}
                  <span className="font-semibold">ו</span> (vav), in Piel it is{" "}
                  <span className="font-semibold">replaced by a doubled י</span>{" "}
                  (י״י) in the stem.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    חייב (historically with a “w/y” glide) →{" "}
                    <span className="font-semibold">לְחַיֵּב</span> (
                    <span className="font-semibold">lechayev</span>) — “to
                    obligate”
                  </li>
                </ul>

                {/* 4: Final Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  4) Root ends with ה (Hey)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Final <span className="font-semibold">ה</span> is replaced by{" "}
                  <span className="font-semibold">ו + ת</span> (→{" "}
                  <span className="font-semibold">וֹת</span>) in the infinitive.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    נקה → <span className="font-semibold">לְנַקּוֹת</span> (
                    <span className="font-semibold">lenakot</span>) — “to clean”
                  </li>
                  <li dir="ltr">
                    שנה → <span className="font-semibold">לְשַׁנּוֹת</span> (
                    <span className="font-semibold">leshanot</span>) — “to
                    change”
                  </li>
                </ul>
              </div>
            </section>
            {/* Present Tense */}
            <section id="present-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Present Tense (הווה)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In Hebrew, the{" "}
                  <span className="font-semibold">present tense</span> for verbs
                  in{" "}
                  <span className="font-semibold">
                    all binyanim except Paal and Nifal
                  </span>{" "}
                  begins with the letter{" "}
                  <span className="font-semibold">מ</span> (mem).
                </p>

                {/* Masculine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add <span className="font-semibold">מ</span> at the start of
                  the root.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: דבר → <span className="font-semibold">מְדַבֵּר</span>{" "}
                    (<i>medaber</i>) — he speaks
                  </li>
                  <li dir="ltr">
                    Root: סדר → <span className="font-semibold">מְסַדֵּר</span>{" "}
                    (<i>mesader</i>) — he arranges
                  </li>
                </ul>

                {/* Feminine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add <span className="font-semibold">מ</span> at the start, and{" "}
                  <span className="font-semibold">ת</span> (<i>-et</i>) at the
                  end.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    מְדַבֵּר → <span className="font-semibold">מְדַבֶּרֶת</span>{" "}
                    (<i>medaberet</i>) — she speaks
                  </li>
                  <li dir="ltr">
                    מְסַדֵּר → <span className="font-semibold">מְסַדֶּרֶת</span>{" "}
                    (<i>mesaderet</i>) — she arranges
                  </li>
                </ul>

                {/* Masculine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add <span className="font-semibold">מ</span> at the start, and{" "}
                  <span className="font-semibold">ים</span> (<i>-im</i>) at the
                  end.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    מְדַבֵּר →{" "}
                    <span className="font-semibold">מְדַבְּרִים</span> (
                    <i>medabrim</i>) — they (m.) speak
                  </li>
                  <li dir="ltr">
                    מְסַדֵּר →{" "}
                    <span className="font-semibold">מְסַדְּרִים</span> (
                    <i>mesadrim</i>) — they (m.) arrange
                  </li>
                </ul>

                {/* Feminine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add <span className="font-semibold">מ</span> at the start, and{" "}
                  <span className="font-semibold">וֹת</span> (<i>-ot</i>) at the
                  end.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    מְדַבֵּר →{" "}
                    <span className="font-semibold">מְדַבְּרוֹת</span> (
                    <i>medabrot</i>) — they (f.) speak
                  </li>
                  <li dir="ltr">
                    מְסַדֵּר →{" "}
                    <span className="font-semibold">מְסַדְּרוֹת</span> (
                    <i>mesadrot</i>) — they (f.) arrange
                  </li>
                </ul>
              </div>
            </section>

            {/* Present Tense Exceptions */}
            <section
              id="present-tense-exceptions"
              className="mb-12 scroll-mt-20"
            >
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Present Tense Exceptions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In Piel, the main exception in the present tense occurs when
                  the{" "}
                  <span className="font-semibold">root ends in ה (hey)</span>.
                </p>

                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Normally, a <span className="font-semibold">ת</span> (tav) is
                  added at the end to form the feminine singular. However, with
                  roots ending in <span className="font-semibold">ה</span>,{" "}
                  <span className="font-semibold">no tav is added</span>.
                  Instead, the form is identical to the masculine singular.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    נקה → <span className="font-semibold">מְנַקֶּה</span> (
                    <i>menake</i> /<i>menaka</i>) — he/she cleans
                  </li>
                  <li dir="ltr">
                    שנה → <span className="font-semibold">מְשַׁנֶּה</span> (
                    <i>meshane</i> /<i>meshana</i>) — he/she changes
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  Plural Forms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In the plural, the final{" "}
                  <span className="font-semibold">ה</span> of the root is{" "}
                  <span className="font-semibold">dropped</span> before the
                  standard plural endings (
                  <span className="font-semibold">ים</span> or{" "}
                  <span className="font-semibold">וֹת</span>) are attached.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    נקה →{" "}
                    <span className="font-semibold">מְנַקִּים / מְנַקּוֹת</span>{" "}
                    (<i>menakim / menakot</i>) — they clean
                  </li>
                  <li dir="ltr">
                    שנה →{" "}
                    <span className="font-semibold">
                      מְשַׁנִּים / מְשַׁנוֹת
                    </span>{" "}
                    (<i>meshanim / meshanot</i>) — they change
                  </li>
                </ul>
              </div>
            </section>

            {/* Piel – Past Tense */}
            <section id="past-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Past Tense (עבר) – Piel
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In <span className="font-semibold">Piel</span>, the past tense
                  of the{" "}
                  <span className="font-semibold">
                    3rd person masculine singular
                  </span>{" "}
                  (the “root form”) is built by inserting a{" "}
                  <span className="font-semibold">י</span> (yod) between the
                  first and second letters of the root (in modern full
                  spelling), and doubling the middle consonant sound (you’ll
                  often see a dagesh in pointed texts). For example:
                  <span className="ml-1 font-semibold">דיבר</span> (<i>diber</i>
                  ), <span className="font-semibold">ביקר</span> (<i>biker</i>).
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The personal endings in the past tense are the same pattern
                  you already know:
                </p>

                <ul className="list-disc list-inside mt-2 mb-4 text-gray-700">
                  <li>
                    <span className="font-semibold">אני</span> (ani, “I”) →{" "}
                    <span className="font-semibold">-תי</span> (<i>-ti</i>)
                  </li>
                  <li>
                    <span className="font-semibold">אתה</span> (ata, “you m.s.”)
                    → <span className="font-semibold">-תָ</span> (<i>-ta</i>)
                  </li>
                  <li>
                    <span className="font-semibold">את</span> (at, “you f.s.”) →{" "}
                    <span className="font-semibold">-תְ</span> (<i>-t</i>)
                  </li>
                  <li>
                    <span className="font-semibold">הוּא</span> (hu, “he”) →{" "}
                    <span className="font-semibold">unchanged</span> (root form)
                  </li>
                  <li>
                    <span className="font-semibold">הִיא</span> (hi, “she”) →{" "}
                    <span className="font-semibold">-ה</span> (<i>-ah</i>)
                  </li>
                  <li>
                    <span className="font-semibold">אנחנו</span> (anachnu, “we”)
                    → <span className="font-semibold">-נוּ</span> (<i>-nu</i>)
                  </li>
                  <li>
                    <span className="font-semibold">אתם</span> (atem, “you
                    m.pl.”) → <span className="font-semibold">-תֶם</span> (
                    <i>-tem</i>)
                  </li>
                  <li>
                    <span className="font-semibold">אתן</span> (aten, “you
                    f.pl.”) → <span className="font-semibold">-תֶן</span> (
                    <i>-ten</i>)
                  </li>
                  <li>
                    <span className="font-semibold">הם / הן</span> (hem/hen,
                    “they”) → <span className="font-semibold">-וּ</span> (
                    <i>-u</i>)
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Now let’s conjugate <span className="font-semibold">דבר</span>{" "}
                  in Piel:
                  <span className="font-semibold ml-1">דיבר</span> (“he spoke”)
                  as the base.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew (ktiv maleh)
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Pronunciation
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Meaning
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">1st sg. (אני)</td>
                        <td className="border px-4 py-2">דיברתי</td>
                        <td className="border px-4 py-2">Dibárti</td>
                        <td className="border px-4 py-2">I spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">דיברת</td>
                        <td className="border px-4 py-2">Dibárta</td>
                        <td className="border px-4 py-2">You (m.s.) spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">דיברת</td>
                        <td className="border px-4 py-2">Dibárt</td>
                        <td className="border px-4 py-2">You (f.s.) spoke</td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא) – Root Form
                        </td>
                        <td className="border px-4 py-2 font-semibold">דיבר</td>
                        <td className="border px-4 py-2 font-semibold">
                          Dibér
                        </td>
                        <td className="border px-4 py-2">He spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">דיברה</td>
                        <td className="border px-4 py-2">Dibrá</td>
                        <td className="border px-4 py-2">She spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">דיברנו</td>
                        <td className="border px-4 py-2">Dibárnu</td>
                        <td className="border px-4 py-2">We spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">דיברתם</td>
                        <td className="border px-4 py-2">Dibártem</td>
                        <td className="border px-4 py-2">You (m.pl.) spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">דיברתן</td>
                        <td className="border px-4 py-2">Dibárten</td>
                        <td className="border px-4 py-2">You (f.pl.) spoke</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">דיברו</td>
                        <td className="border px-4 py-2">Dibru</td>
                        <td className="border px-4 py-2">They spoke</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
