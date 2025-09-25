// app/verbs/paal/page.tsx
export default function PaalPage() {
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
                    href="#paal-verb"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Overview
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
                    Exceptions in Infinitives
                  </a>
                </li>
                <li>
                  <a
                    href="#present-tense"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    The Present Tense (הווה)
                  </a>
                </li>
                <li>
                  <a
                    href="#present-exceptions"
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
                    The Past Tense (עבר)
                  </a>
                </li>
                <li>
                  <a
                    href="#past-conjugation"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Past Conjugation (למד)
                  </a>
                </li>
                <li>
                  <a
                    href="#past-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Past Tense Exceptions
                  </a>
                </li>
                <li>
                  <a
                    href="#future-tense"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Future Tense
                  </a>
                </li>
                <li>
                  <a
                    href="#future-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Future Tense Exceptions
                  </a>
                </li>
                <li>
                  <a
                    href="#imperative"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Imperative (ציווי)
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <section id="paal-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Paal (פעל) – The Simple Active Verb
              </h1>

              <p className="text-gray-700 leading-relaxed mb-6">
                The{" "}
                <span className="font-semibold text-blue-700">Paal binyan</span>{" "}
                is the simplest and most basic of all Hebrew verb patterns. Paal
                verbs are always <span className="font-semibold">active</span>,
                and they usually describe simple actions such as meeting,
                closing, eating, or going.
              </p>
            </section>

            {/* Infinitive explanation */}
            <section id="infinitive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Infinitive (שם הפועל)
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To form the infinitive in Paal, place a{" "}
                  <span className="font-semibold">ל</span> (lamed, “to”) before
                  the first letter of the root, and insert a{" "}
                  <span className="font-semibold">ו</span> (vav) between the
                  second and third letters:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → לִפְגּוֹשׁ (
                    <span className="font-semibold">Lifgosh</span>) – to meet
                  </li>
                  <li dir="ltr">
                    Root: סגר → לִסְגוֹר (
                    <span className="font-semibold">Lisgor</span>) – to close
                  </li>
                </ul>
              </div>
            </section>

            {/* Exceptions (Infinitives) */}
            <section id="infinitive-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Exceptions in Paal Infinitives
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most Paal infinitives follow the rule above, but these four
                  common patterns differ:
                </p>

                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  1. Root starting with Yod (י)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After adding ל (lamed), the initial י (yod) is dropped and a{" "}
                  <span className="font-semibold">ת</span> (tav) is added at the
                  end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ישב → לָשֶׁבֶת (
                    <span className="font-semibold">Lashevet</span>) – to sit
                  </li>
                  <li dir="ltr">
                    Root: ירד → לָרֶדֶת (
                    <span className="font-semibold">Laredet</span>) – to go down
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  2. Yod (י) in the middle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Only ל (lamed) is added before the root; no ו (vav) is
                  inserted:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: שיר → לָשִׁיר (
                    <span className="font-semibold">Lashir</span>) – to sing
                  </li>
                  <li dir="ltr">
                    Root: שים → לָשִׂים (
                    <span className="font-semibold">Lasim</span>) – to put
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  3. Vav (ו) in the middle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Again, only ל (lamed) is placed before the root:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: בוא → לָבוֹא (
                    <span className="font-semibold">Lavo</span>) – to come
                  </li>
                  <li dir="ltr">
                    Root: גור → לָגוּר (
                    <span className="font-semibold">Lagur</span>) – to live
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  4. Hey (ה) at the end
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add ל (lamed) before the root, and replace the final ה with{" "}
                  <span className="font-semibold">ו</span> +{" "}
                  <span className="font-semibold">ת</span>:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: בכה → לִבְכּוֹת (
                    <span className="font-semibold">Livkot</span>) – to cry
                  </li>
                  <li dir="ltr">
                    Root: בנה → לִבְנוֹת (
                    <span className="font-semibold">Livnot</span>) – to build
                  </li>
                </ul>
              </div>
            </section>

            {/* Present tense */}
            <section id="present-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Present Tense (הווה)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In Paal, the present tense is formed directly from the root
                  with specific endings depending on gender and number.
                </p>

                {/* Masculine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A ו (vav) is introduced between the first and second letters
                  of the root:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → פּוֹגֵשׁ (
                    <span className="font-semibold">Pogesh</span>) – he meets
                  </li>
                  <li dir="ltr">
                    Root: סגר → סוֹגֵר (
                    <span className="font-semibold">Soger</span>) – he closes
                  </li>
                </ul>

                {/* Feminine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Formed from the masculine singular with an added{" "}
                  <span className="font-semibold">ת</span> (tav) at the end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → פּוֹגֶשֶׁת (
                    <span className="font-semibold">Pogeshet</span>) – she meets
                  </li>
                  <li dir="ltr">
                    Root: סגר → סוֹגֶרֶת (
                    <span className="font-semibold">Sogeret</span>) – she closes
                  </li>
                </ul>

                {/* Masculine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Formed from the masculine singular with{" "}
                  <span className="font-semibold">ים</span> (<i>-im</i>) at the
                  end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → פּוֹגְשִׁים (
                    <span className="font-semibold">Pogshim</span>) – they (m.)
                    meet
                  </li>
                  <li dir="ltr">
                    Root: סגר → סוֹגְרִים (
                    <span className="font-semibold">Sogrim</span>) – they (m.)
                    close
                  </li>
                </ul>

                {/* Feminine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Formed from the masculine singular, but instead of{" "}
                  <span className="font-semibold">ים</span> (<i>-im</i>), the
                  ending <span className="font-semibold">וֹת</span> (<i>-ot</i>)
                  is used:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → פּוֹגְשׁוֹת (
                    <span className="font-semibold">Pogshot</span>) – they (f.)
                    meet
                  </li>
                  <li dir="ltr">
                    Root: סגר → סוֹגְרוֹת (
                    <span className="font-semibold">Sogrot</span>) – they (f.)
                    close
                  </li>
                </ul>

                {/* Note about Paal uniqueness */}
                <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    Only <span className="font-semibold">Paal verbs</span> begin
                    the present tense directly with the first letter of their
                    root. Verbs in other binyanim typically begin with{" "}
                    <span className="font-semibold">מ</span> (mem) or{" "}
                    <span className="font-semibold">נ</span> (nun).
                  </p>
                </div>
              </div>
            </section>

            {/* Present tense exceptions */}
            <section id="present-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Exceptions in the Present Tense
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some roots do not follow the usual present tense rules. The
                  main exceptions occur with roots that contain י (yod) in the
                  middle, roots with ו (vav) in the middle, or roots that end in
                  ה (hey).
                </p>

                {/* 1. Yod in the middle */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  1. Yod (י) in the middle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The middle י (yod) of the root is eliminated in the present
                  tense. In the feminine singular, an additional{" "}
                  <span className="font-semibold">ה</span> (hey) is added at the
                  end.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: שיר → שָׁר (
                    <span className="font-semibold">Shar</span>) – he sings
                  </li>
                  <li dir="ltr">
                    Root: שיר → שָׁרָה (
                    <span className="font-semibold">Shara</span>) – she sings
                  </li>
                  <li dir="ltr">
                    Root: שיר → שָׁרִים / שָׁרוֹת (
                    <span className="font-semibold">Sharim / Sharot</span>) –
                    they sing
                  </li>
                  <li dir="ltr">
                    Root: שים → שָׂם (<span className="font-semibold">Sam</span>
                    ) – he puts
                  </li>
                  <li dir="ltr">
                    Root: שים → שָׂמָה (
                    <span className="font-semibold">Sama</span>) – she puts
                  </li>
                  <li dir="ltr">
                    Root: שים → שָׂמִים / שָׂמוֹת (
                    <span className="font-semibold">Samim / Samot</span>) – they
                    put
                  </li>
                </ul>

                {/* 2. Vav in the middle */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  2. Vav (ו) in the middle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The ו (vav) in the middle of the root is removed in the
                  present tense. In the feminine singular, a{" "}
                  <span className="font-semibold">ה</span> (hey) is added at the
                  end.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: טוס → טָס (<span className="font-semibold">Tas</span>)
                    – he flies
                  </li>
                  <li dir="ltr">
                    Root: טוס → טָסָה (
                    <span className="font-semibold">Tasa</span>) – she flies
                  </li>
                  <li dir="ltr">
                    Root: טוס → טָסִים / טָסוֹת (
                    <span className="font-semibold">Tasim / Tasot</span>) – they
                    fly
                  </li>
                  <li dir="ltr">
                    Root: גור → גָּר (<span className="font-semibold">Gar</span>
                    ) – he lives
                  </li>
                  <li dir="ltr">
                    Root: גור → גָּרָה (
                    <span className="font-semibold">Gara</span>) – she lives
                  </li>
                  <li dir="ltr">
                    Root: גור → גָּרִים / גָּרוֹת (
                    <span className="font-semibold">Garim / Garot</span>) – they
                    live
                  </li>
                </ul>

                {/* 3. Hey at the end */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  3. Hey (ה) at the end
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When the root ends in ה, a{" "}
                  <span className="font-semibold">ו</span> (vav) is placed
                  between the first and second letters of the root. For the
                  plural forms, the final ה is deleted and replaced with{" "}
                  <span className="font-semibold">ים</span> (-im) or{" "}
                  <span className="font-semibold">וֹת</span> (-ot) as usual.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: קנה → קוֹנֶה (
                    <span className="font-semibold">Kone</span>) – he buys
                  </li>
                  <li dir="ltr">
                    Root: קנה → קוֹנָה (
                    <span className="font-semibold">Kona</span>) – she buys
                  </li>
                  <li dir="ltr">
                    Root: קנה → קוֹנִים / קוֹנוֹת (
                    <span className="font-semibold">Konim / Konot</span>) – they
                    buy
                  </li>
                  <li dir="ltr">
                    Root: בנה → בּוֹנֶה (
                    <span className="font-semibold">Bone</span>) – he builds
                  </li>
                  <li dir="ltr">
                    Root: בנה → בּוֹנָה (
                    <span className="font-semibold">Bona</span>) – she builds
                  </li>
                  <li dir="ltr">
                    Root: בנה → בּוֹנִים / בּוֹנוֹת (
                    <span className="font-semibold">Bonim / Bonot</span>) – they
                    build
                  </li>
                </ul>
              </div>
            </section>

            {/* Past tense */}
            <section id="past-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Past Tense (עבר)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In Hebrew, the name of each binyan serves as a guide to the
                  vowels used in the{" "}
                  <span className="font-semibold">
                    3rd person masculine singular past tense
                  </span>{" "}
                  of its verbs. For Paal (פעל), the pattern is shown in the word{" "}
                  <span className="font-semibold">פָּעַל</span> (paʿal), with a{" "}
                  <span className="font-semibold">קמץ</span> (kamatz) under the
                  first letter פ and a{" "}
                  <span className="font-semibold">פתח</span> (patach) under the
                  middle letter ע.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  This vowel structure guides how the root is vocalized in the
                  past tense. Let’s look at two examples:
                </p>

                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    Root: פגש → פָּגַשׁ (
                    <span className="font-semibold">Pagash</span>) – he met
                  </li>
                  <li dir="ltr">
                    Root: סגר → סָגַר (
                    <span className="font-semibold">Sagar</span>) – he closed
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Both verbs follow the same vowel pattern from פָּעַל: the
                  first syllable takes a kamatz, and the second syllable takes a
                  patach. This makes the past tense form predictable for regular
                  Paal verbs.
                </p>
              </div>
            </section>

            {/* Past tense full conjugation */}
            <section id="past-conjugation" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Paal Past Tense Conjugation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In the past tense, each subject pronoun has its own
                  distinctive ending. The 3rd person masculine singular form
                  (הוּא – “he”) is considered the
                  <span className="font-semibold"> root form</span>, since it
                  does not change from the base pattern.
                </p>

                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    <span className="font-semibold">אני</span> (ani, “I”) → ends
                    with <span className="font-semibold">תי</span> (<i>-ti</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">אתה</span> (ata, “you m.s.”)
                    → ends with <span className="font-semibold">תָ</span> (
                    <i>-ta</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">את</span> (at, “you f.s.”) →
                    ends with <span className="font-semibold">תְ</span> (
                    <i>-t</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">הוא</span> (hu, “he”) →
                    unchanged (root form)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">היא</span> (hi, “she”) →
                    adds <span className="font-semibold">ה</span> (<i>-ah</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">אנחנו</span> (anachnu, “we”)
                    → ends with <span className="font-semibold">נוּ</span> (
                    <i>-nu</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">אתם</span> (atem, “you
                    m.pl.”) → ends with{" "}
                    <span className="font-semibold">תֶם</span> (<i>-tem</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">אתן</span> (aten, “you
                    f.pl.”) → ends with{" "}
                    <span className="font-semibold">תֶן</span> (<i>-ten</i>)
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">הם / הן</span> (hem/hen,
                    “they”) → ends with{" "}
                    <span className="font-semibold">וּ</span> (<i>-u</i>)
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                  Let’s use the root <span className="font-semibold">למד</span>{" "}
                  (Lamad – “he learned”) as our example to see how these endings
                  attach in the past tense:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border border-gray-300 px-4 py-2">
                          1st sg. (אני)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמַדְתִּי
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadti
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          I learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמַדְתָּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadtá
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (m.s.) learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd sg. f. (אַתְּ)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמַדְתְּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadt
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (f.s.) learned
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא) – Root Form
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          לָמַד
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Lamad
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          He learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          3rd sg. f. (הִיא)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמְדָה
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamda
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          She learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמַדְנוּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadnu
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          We learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לְמַדְתֶּם
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadtém
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (m.pl.) learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לְמַדְתֶּן
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamadtén
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (f.pl.) learned
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָמְדוּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lamdu
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          They learned
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Past tense exceptions */}
            <section id="past-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Past Tense Exceptions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Three common root patterns behave differently in the past
                  tense: a{" "}
                  <span className="font-semibold">yod (י) in the middle</span>,
                  a <span className="font-semibold">vav (ו) in the middle</span>
                  , and a{" "}
                  <span className="font-semibold">hey (ה) at the end</span>.
                </p>

                {/* 1) Yod in the middle – שיר */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-3">
                  1) Yod (י) in the middle — שיר
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The middle <span className="font-semibold">י</span> is
                  deleted. As a result, the{" "}
                  <span className="font-semibold">present</span> and{" "}
                  <span className="font-semibold">past</span> of{" "}
                  <span className="font-semibold">
                    3rd person masculine singular
                  </span>{" "}
                  are identical: <span className="font-semibold">שָׁר</span>{" "}
                  (“he sings/he sang”).
                </p>

                {/* Present mini-table for SHAR */}
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Tense
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Form
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Pronunciation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="border border-gray-300 px-4 py-2"
                          rowSpan={5}
                        >
                          Present
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Infinitive
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          לָשִׁיר
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Lashir
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Masculine sg.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          שָׁר
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Shar
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Feminine sg.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          שָׁרָה
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Shara
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Masculine pl.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          שָׁרִים
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Sharim
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Feminine pl.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          שָׁרוֹת
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Sharot
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Past table for SHAR */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">שַׁרְתִּי</td>
                        <td className="border px-4 py-2">Sharti</td>
                        <td className="border px-4 py-2">I sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">שַׁרְתָּ</td>
                        <td className="border px-4 py-2">Sharta</td>
                        <td className="border px-4 py-2">You (m.s.) sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">שַׁרְתְּ</td>
                        <td className="border px-4 py-2">Shart</td>
                        <td className="border px-4 py-2">You (f.s.) sang</td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא) – Root-like
                        </td>
                        <td className="border px-4 py-2 font-semibold">שָׁר</td>
                        <td className="border px-4 py-2 font-semibold">Shar</td>
                        <td className="border px-4 py-2">He sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">שָׁרָה</td>
                        <td className="border px-4 py-2">Shara</td>
                        <td className="border px-4 py-2">She sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">שַׁרְנוּ</td>
                        <td className="border px-4 py-2">Sharnu</td>
                        <td className="border px-4 py-2">We sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">שַׁרְתֶּם</td>
                        <td className="border px-4 py-2">Shartem</td>
                        <td className="border px-4 py-2">You (m.pl.) sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">שַׁרְתֶּן</td>
                        <td className="border px-4 py-2">Sharten</td>
                        <td className="border px-4 py-2">You (f.pl.) sang</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">שָׁרוּ</td>
                        <td className="border px-4 py-2">Sharu</td>
                        <td className="border px-4 py-2">They sang</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 2) Vav in the middle – טוס */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-3">
                  2) Vav (ו) in the middle — טוס
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The middle <span className="font-semibold">ו</span> is
                  removed. Like the yod case, the{" "}
                  <span className="font-semibold">present</span> and{" "}
                  <span className="font-semibold">past</span> of{" "}
                  <span className="font-semibold">
                    3rd person masculine singular
                  </span>{" "}
                  are identical: <span className="font-semibold">טָס</span> (“he
                  flies/he flew”).
                </p>

                {/* Past table for TAS */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">טַסְתִּי</td>
                        <td className="border px-4 py-2">Tasti</td>
                        <td className="border px-4 py-2">I flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">טַסְתָּ</td>
                        <td className="border px-4 py-2">Tasta</td>
                        <td className="border px-4 py-2">You (m.s.) flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">טַסְתְּ</td>
                        <td className="border px-4 py-2">Tast</td>
                        <td className="border px-4 py-2">You (f.s.) flew</td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא)
                        </td>
                        <td className="border px-4 py-2 font-semibold">טָס</td>
                        <td className="border px-4 py-2 font-semibold">Tas</td>
                        <td className="border px-4 py-2">He flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">טָסָה</td>
                        <td className="border px-4 py-2">Tasa</td>
                        <td className="border px-4 py-2">She flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">טַסְנוּ</td>
                        <td className="border px-4 py-2">Tasnu</td>
                        <td className="border px-4 py-2">We flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">טַסְתֶּם</td>
                        <td className="border px-4 py-2">Tastem</td>
                        <td className="border px-4 py-2">You (m.pl.) flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">טַסְתֶּן</td>
                        <td className="border px-4 py-2">Tasten</td>
                        <td className="border px-4 py-2">You (f.pl.) flew</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">טָסוּ</td>
                        <td className="border px-4 py-2">Tasu</td>
                        <td className="border px-4 py-2">They flew</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 3) Hey at the end – קנה */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-3">
                  3) Hey (ה) at the end — קנה
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root ends with{" "}
                  <span className="font-semibold">ה</span>:
                  <br />•{" "}
                  <span className="font-semibold">
                    3rd person feminine singular
                  </span>{" "}
                  adds <span className="font-semibold">ת</span> before the ה →
                  e.g. <span className="font-semibold">קָנְתָה</span> (
                  <i>
                    kan<span className="underline">t</span>a
                  </i>
                  ) “she bought”.
                  <br />•{" "}
                  <span className="font-semibold">3rd person plural</span>{" "}
                  replaces the ה with <span className="font-semibold">ו</span> →{" "}
                  <span className="font-semibold">קָנוּ</span> (kanu) “they
                  bought”.
                  <br />• For all other past forms, the ה is generally replaced
                  by <span className="font-semibold">י</span> in the spelling
                  (the{" "}
                  <span className="font-semibold">
                    3rd person masculine singular
                  </span>{" "}
                  root form
                  <span className="mx-1">קָנָה</span> does not change).
                </p>

                {/* Past table for KANA */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">קָנִיתִי</td>
                        <td className="border px-4 py-2">Kaniti</td>
                        <td className="border px-4 py-2">I bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">קָנִיתָ</td>
                        <td className="border px-4 py-2">Kanita</td>
                        <td className="border px-4 py-2">You (m.s.) bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">קָנִיתְ</td>
                        <td className="border px-4 py-2">Kanit</td>
                        <td className="border px-4 py-2">You (f.s.) bought</td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא) – Root Form
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          קָנָה
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Kanah
                        </td>
                        <td className="border px-4 py-2">He bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">קָנְתָה</td>
                        <td className="border px-4 py-2">Kanta</td>
                        <td className="border px-4 py-2">She bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">קָנִינוּ</td>
                        <td className="border px-4 py-2">Kaninu</td>
                        <td className="border px-4 py-2">We bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">קְנִיתֶם</td>
                        <td className="border px-4 py-2">K’nitem</td>
                        <td className="border px-4 py-2">You (m.pl.) bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">קְנִיתֶן</td>
                        <td className="border px-4 py-2">K’niten</td>
                        <td className="border px-4 py-2">You (f.pl.) bought</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">קָנוּ</td>
                        <td className="border px-4 py-2">Kanu</td>
                        <td className="border px-4 py-2">They bought</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Future tense */}
            <section id="future-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Future Tense (עתיד)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In Hebrew, the future tense is built using special{" "}
                  <span className="font-semibold">prefixes</span> attached to
                  the root. These prefixes are remembered by the acronym{" "}
                  <span className="font-semibold">אֶתָ״ן (Eitan)</span> —
                  <span className="font-semibold">Aleph</span>,{" "}
                  <span className="font-semibold">Tav</span>,{" "}
                  <span className="font-semibold">Yod</span>,{" "}
                  <span className="font-semibold">Nun</span>. Each prefix marks
                  a different subject pronoun.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Lets use the root <span className="font-semibold">סגר </span>
                  (Sagar - “to close”) as our example. The infinitive is{" "}
                  <span className="font-semibold">לִסְגוֹר</span> (lisgor). In
                  the future tense, we attach the appropriate prefix to form
                  words like <span className="font-semibold">אֶסְגוֹר</span>{" "}
                  (esgor - “I will close”).
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">אֶסְגוֹר</td>
                        <td className="border px-4 py-2">Esgor</td>
                        <td className="border px-4 py-2">I will close</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">תִּסְגוֹר</td>
                        <td className="border px-4 py-2">Tisgor</td>
                        <td className="border px-4 py-2">
                          You (m.s.) will close
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">תִּסְגְּרִי</td>
                        <td className="border px-4 py-2">Tisgri</td>
                        <td className="border px-4 py-2">
                          You (f.s.) will close
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 ">3rd sg. m. (הוּא)</td>
                        <td className="border px-4 py-2 ">יִסְגוֹר</td>
                        <td className="border px-4 py-2 ">Yisgor</td>
                        <td className="border px-4 py-2">He will close</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">תִּסְגוֹר</td>
                        <td className="border px-4 py-2">Tisgor</td>
                        <td className="border px-4 py-2">She will close</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">נִסְגוֹר</td>
                        <td className="border px-4 py-2">Nisgor</td>
                        <td className="border px-4 py-2">We will close</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">תִּסְגְּרוּ</td>
                        <td className="border px-4 py-2">Tisgeru</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) will close
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">תִּסְגֹּרְנָה</td>
                        <td className="border px-4 py-2">Tisgorna</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) will close
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">יִסְגְּרוּ</td>
                        <td className="border px-4 py-2">Yisgeru</td>
                        <td className="border px-4 py-2">They will close</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Future tense exceptions */}
            <section id="future-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Future Tense Exceptions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Two common patterns affect how the future tense is formed in
                  Paal: roots that{" "}
                  <span className="font-semibold">start with י (yod)</span> and
                  roots that{" "}
                  <span className="font-semibold">end with ה (hey)</span>.
                </p>

                {/* 1) Root starts with Yod – ישב */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-3">
                  1) Root starts with י (yod) — ישב
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When the root begins with{" "}
                  <span className="font-semibold">י</span>, that initial yod of
                  the root is <span className="font-semibold">dropped</span> in
                  the future, because the person prefix already provides the
                  needed letter (from the אֶתָ״ן prefixes: א / ת / י / נ).
                  Example with <span className="font-semibold">יָשַׁב</span>{" "}
                  (“he sat”): the future forms use only the prefix letter (no
                  double yod).
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">אֵשֵׁב</td>
                        <td className="border px-4 py-2">Eshev</td>
                        <td className="border px-4 py-2">I will sit</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">תֵּשֵׁב</td>
                        <td className="border px-4 py-2">Teshev</td>
                        <td className="border px-4 py-2">
                          You (m.s.) will sit
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">תֵּשְׁבִי</td>
                        <td className="border px-4 py-2">Teshvi</td>
                        <td className="border px-4 py-2">
                          You (f.s.) will sit
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא)
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          יֵשֵׁב
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Yeshev
                        </td>
                        <td className="border px-4 py-2">He will sit</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">תֵּשֵׁב</td>
                        <td className="border px-4 py-2">Teshev</td>
                        <td className="border px-4 py-2">She will sit</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">נֵשֵׁב</td>
                        <td className="border px-4 py-2">Neshev</td>
                        <td className="border px-4 py-2">We will sit</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">תֵּשְׁבוּ</td>
                        <td className="border px-4 py-2">Teshvu</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) will sit
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">תֵּשֹׁבְנָה</td>
                        <td className="border px-4 py-2">Teshovna</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) will sit
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">יֵשְׁבוּ</td>
                        <td className="border px-4 py-2">Yeshvu</td>
                        <td className="border px-4 py-2">They will sit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 2) Root ends with Hey – קנה */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-3">
                  2) Root ends with ה (hey) — קנה
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For roots ending with <span className="font-semibold">ה</span>
                  , the final hey is{" "}
                  <span className="font-semibold">dropped</span> in several
                  future forms: specifically for{" "}
                  <span className="font-semibold">אַתְּ (you f.s.)</span>,
                  <span className="font-semibold">
                    {" "}
                    אַתֶּם / אַתֵּן (you pl.)
                  </span>
                  , and
                  <span className="font-semibold"> הֵם / הֵן (they)</span>. You
                  will see endings like{" "}
                  <span className="font-semibold">-י</span> (-i) and{" "}
                  <span className="font-semibold">-וּ</span> (-u) attach after
                  the drop. Below is the full picture with{" "}
                  <span className="font-semibold">קנה</span>
                  (“to buy”).
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Person
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Pronunciation
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Note
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">1st sg. (אני)</td>
                        <td className="border px-4 py-2">אֶקְנֶה</td>
                        <td className="border px-4 py-2">Ekné</td>
                        <td className="border px-4 py-2">Hey retained</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border px-4 py-2">תִּקְנֶה</td>
                        <td className="border px-4 py-2">Tikné</td>
                        <td className="border px-4 py-2">Hey retained</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2nd sg. f. (אַתְּ)</td>
                        <td className="border px-4 py-2">תִּקְנִי</td>
                        <td className="border px-4 py-2">Tikní</td>
                        <td className="border px-4 py-2">
                          Hey dropped → -י (-i)
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא)
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          יִקְנֶה
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Yikné
                        </td>
                        <td className="border px-4 py-2">Root form (future)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3rd sg. f. (הִיא)</td>
                        <td className="border px-4 py-2">תִּקְנֶה</td>
                        <td className="border px-4 py-2">Tikné</td>
                        <td className="border px-4 py-2">Hey retained</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border px-4 py-2">נִקְנֶה</td>
                        <td className="border px-4 py-2">Nikné</td>
                        <td className="border px-4 py-2">Hey retained</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border px-4 py-2">תִּקְנוּ</td>
                        <td className="border px-4 py-2">Tiknú</td>
                        <td className="border px-4 py-2">
                          Hey dropped → -וּ (-u)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border px-4 py-2">תִּקְנוּ</td>
                        <td className="border px-4 py-2">Tiknú</td>
                        <td className="border px-4 py-2">
                          Hey dropped → -וּ (-u)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border px-4 py-2">יִקְנוּ</td>
                        <td className="border px-4 py-2">Yiknú</td>
                        <td className="border px-4 py-2">
                          Hey dropped → -וּ (-u)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Imperative */}
            <section id="imperative" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Imperative (ציווי)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The imperative in Hebrew is derived from the{" "}
                  <span className="font-semibold">infinitive</span> form of the
                  verb. It gives commands or instructions (“Close!”).
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  To form the imperative:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <span className="font-semibold">Masculine Singular:</span>{" "}
                    Drop the <span className="font-semibold">ל</span> (lamed)
                    from the infinitive.
                  </li>
                  <li>
                    <span className="font-semibold">Feminine Singular:</span>{" "}
                    Start from the masculine singular form and add{" "}
                    <span className="font-semibold">י</span> (<i>-i</i>) at the
                    end.
                  </li>
                  <li>
                    <span className="font-semibold">Plural:</span> Start from
                    the masculine singular form and add{" "}
                    <span className="font-semibold">וּ</span> (<i>-u</i>).
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Let’s use the root <span className="font-semibold">סגר</span>
                  (“to close”) with its infinitive{" "}
                  <span className="font-semibold">לִסְגוֹר</span> (lisgor).
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Form
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Hebrew
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
                        <td className="border px-4 py-2">Masculine Singular</td>
                        <td className="border px-4 py-2">סְגוֹר</td>
                        <td className="border px-4 py-2">Sgor</td>
                        <td className="border px-4 py-2">Close! (m.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2">סִגְרִי</td>
                        <td className="border px-4 py-2">Sigri</td>
                        <td className="border px-4 py-2">Close! (f.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Plural</td>
                        <td className="border px-4 py-2">סִגְרוּ</td>
                        <td className="border px-4 py-2">Sigru</td>
                        <td className="border px-4 py-2">Close! (pl.)</td>
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
