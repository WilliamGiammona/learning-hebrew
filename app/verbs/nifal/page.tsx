// app/verbs/nifal/page.tsx
export default function NifalPage() {
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
                    href="#nifal-verb"
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
                    Infinitive — Exceptions
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
                    href="#present-tense-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Present Tense — Exceptions
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="nifal-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Nifal (נפעל) – The Passive / Medial Counterpart to Paal
              </h1>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Nifal binyan
                  </span>{" "}
                  is the primary <span className="font-semibold">passive</span>{" "}
                  (and often reflexive/“middle”) counterpart of{" "}
                  <span className="font-semibold">Paal</span>. Where Paal
                  typically means “to do X,” Nifal often means “to be X’ed” or
                  “to get/become X.” For example, “to close” (Paal) versus “to
                  be closed” (Nifal).
                </p>
              </div>
            </section>

            {/* Infinitive */}
            <section id="infinitive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Infinitive (שם הפועל)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In Nifal, the infinitive is formed by placing the sequence{" "}
                  <span className="font-semibold">להי</span> before the root.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li dir="ltr">
                    Root: <span className="font-semibold">כנס</span> →{" "}
                    <span className="font-semibold">להיכנס</span> (
                    <i>lehikanes</i>) – “to enter”
                  </li>
                  <li dir="ltr">
                    Root: <span className="font-semibold">שאר</span> →{" "}
                    <span className="font-semibold">להישאר</span> (
                    <i>lehishe&apos;er</i>) – “to remain/stay”
                  </li>
                </ul>
              </div>
            </section>

            {/* Infinitive — Exceptions */}
            <section id="infinitive-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Infinitive — Exceptions
                </h2>

                {/* 1) Root starts with Yod */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  1) Root starts with י (yod)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root starts with{" "}
                  <span className="font-semibold">י</span>, that initial yod is
                  <span className="font-semibold">
                    {" "}
                    replaced with a double ו
                  </span>{" "}
                  (וו) in the Nifal infinitive spelling.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li dir="ltr">
                    Root: <span className="font-semibold">ילד</span> →{" "}
                    <span className="font-semibold">להיוולד</span> (
                    <i>
                      lehi<span className="underline">valed</span>
                    </i>
                    ) – “to be born”
                  </li>
                </ul>

                {/* 2) Root ends with Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  2) Root ends with ה (hey)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root ends in <span className="font-semibold">ה</span>
                  , that final hey is
                  <span className="font-semibold"> replaced by ו + ת</span> in
                  the Nifal infinitive.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li dir="ltr">
                    Root: <span className="font-semibold">בנה</span> →{" "}
                    <span className="font-semibold">להיבנות</span> (
                    <i>lehibanot</i>) – “to be built”
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
                  In Nifal, the present tense is formed by placing a{" "}
                  <span className="font-semibold">נ</span> (nun) at the
                  beginning of the root. From this base, endings are added
                  depending on gender and number.
                </p>

                {/* Masculine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add a <span className="font-semibold">נ</span> (nun) to the
                  front of the root:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: כנס → נִכְנָס (
                    <span className="font-semibold">Nichnas</span>) – he enters
                  </li>
                  <li dir="ltr">
                    Root: שאר → נִשְׁאָר (
                    <span className="font-semibold">Nish&apos;ar</span>) – he
                    remains
                  </li>
                </ul>

                {/* Feminine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add a <span className="font-semibold">נ</span> (nun) at the
                  front and <span className="font-semibold">ת</span> (tav) at
                  the end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: כנס → נִכְנֶסֶת (
                    <span className="font-semibold">Nichneset</span>) – she
                    enters
                  </li>
                  <li dir="ltr">
                    Root: שאר → נִשְׁאֶרֶת (
                    <span className="font-semibold">Nisheret</span>) – she
                    remains
                  </li>
                </ul>

                {/* Masculine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add a <span className="font-semibold">נ</span> (nun) at the
                  front and <span className="font-semibold">ים</span> (
                  <i>-im</i>) at the end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: כנס → נִכְנָסִים (
                    <span className="font-semibold">Nichnasim</span>) – they
                    (m.) enter
                  </li>
                  <li dir="ltr">
                    Root: שאר → נִשְׁאָרִים (
                    <span className="font-semibold">Nish&apos;arim</span>) –
                    they (m.) remain
                  </li>
                </ul>

                {/* Feminine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Add a <span className="font-semibold">נ</span> (nun) at the
                  front and <span className="font-semibold">וֹת</span> (
                  <i>-ot</i>) at the end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: כנס → נִכְנָסוֹת (
                    <span className="font-semibold">Nichnasot</span>) – they
                    (f.) enter
                  </li>
                  <li dir="ltr">
                    Root: שאר → נִשְׁאֲרוֹת (
                    <span className="font-semibold">Nish&apos;arot</span>) –
                    they (f.) remain
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
                  Present Tense — Exceptions
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  While most Nifal present tense verbs are formed regularly with
                  a <span className="font-semibold">נ</span> (nun) at the front,
                  there are two common exceptions:
                </p>

                {/* 1) Root starts with Yod */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  1) Root starts with י (Yod)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root begins with{" "}
                  <span className="font-semibold">י</span> (yod), that letter is
                  replaced with a <span className="font-semibold">ו</span> (vav)
                  in the present tense.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ילד → נוֹלָד (
                    <span className="font-semibold">Nolad</span>) – he is born
                  </li>
                  <li dir="ltr">
                    Root: ילד → נוֹלֶדֶת (
                    <span className="font-semibold">Noledet</span>) – she is
                    born
                  </li>
                  <li dir="ltr">
                    Root: ילד → נוֹלָדִים (
                    <span className="font-semibold">Noladim</span>) – they (m.)
                    are born
                  </li>
                  <li dir="ltr">
                    Root: ילד → נוֹלָדוֹת (
                    <span className="font-semibold">Noladot</span>) – they (f.)
                    are born
                  </li>
                </ul>

                {/* 2) Root ends with Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  2) Root ends with ה (Hey)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root ends in <span className="font-semibold">ה</span>
                  , it is replaced with a{" "}
                  <span className="font-semibold">י</span> (yod) in certain
                  forms: the{" "}
                  <span className="font-semibold">feminine singular</span>,{" "}
                  <span className="font-semibold">masculine plural</span>, and{" "}
                  <span className="font-semibold">feminine plural</span>.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ראה → נִרְאֶה (
                    <span className="font-semibold">Nir&apos;eh</span>) – he is
                    seen
                  </li>
                  <li dir="ltr">
                    Root: ראה → נִרְאִית (
                    <span className="font-semibold">Nir&apos;it</span>) – she is
                    seen
                  </li>
                  <li dir="ltr">
                    Root: ראה → נִרְאִים (
                    <span className="font-semibold">Nir&apos;im</span>) – they
                    (m.) are seen
                  </li>
                  <li dir="ltr">
                    Root: ראה → נִרְאִיוֹת (
                    <span className="font-semibold">Nir&apos;iyot</span>) – they
                    (f.) are seen
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
                  In Nifal, the past tense is built by placing a prefixed{" "}
                  <span className="font-semibold">נִ־</span> (nun with{" "}
                  <i>hiriq</i>) in front of the root and then attaching the
                  standard Hebrew past endings. Think of the base (3rd person
                  masculine singular) pattern as{" "}
                  <span className="font-semibold">נִפְעַל</span>.
                </p>

                <div className="p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded mb-6">
                  <p className="text-gray-700 font-semibold mb-3">
                    Past-tense endings (same as Paal):
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-gray-700">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-3 py-2 text-left">
                            Person
                          </th>
                          <th className="border border-gray-300 px-3 py-2 text-left">
                            Ending
                          </th>
                          <th className="border border-gray-300 px-3 py-2 text-left">
                            Hebrew
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-3 py-2">אני</td>
                          <td className="border px-3 py-2">-ti</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־תי
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">אתה</td>
                          <td className="border px-3 py-2">-ta</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־תָ
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">את</td>
                          <td className="border px-3 py-2">-t</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־תְ
                          </td>
                        </tr>
                        <tr className="bg-indigo-50">
                          <td className="border px-3 py-2 font-semibold">
                            הוא
                          </td>
                          <td className="border px-3 py-2 font-semibold">—</td>
                          <td
                            className="border px-3 py-2 font-semibold"
                            dir="rtl"
                          >
                            (ללא סיומת)
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">היא</td>
                          <td className="border px-3 py-2">-ah</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־ה
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">אנחנו</td>
                          <td className="border px-3 py-2">-nu</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־נוּ
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">אתם</td>
                          <td className="border px-3 py-2">-tem</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־תֶּם
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">אתן</td>
                          <td className="border px-3 py-2">-ten</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־תֶּן
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">הם/הן</td>
                          <td className="border px-3 py-2">-u</td>
                          <td className="border px-3 py-2" dir="rtl">
                            ־וּ
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with the root{" "}
                  <span className="font-semibold">כנס</span> (“to enter” →{" "}
                  <span className="font-semibold">להיכנס</span>): the base
                  3rd-masc-singular past is{" "}
                  <span className="font-semibold">נִכְנַס</span> (<i>Nichnas</i>
                  ).
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
                          נִכְנַסְתִּי
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnás­ti
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          I entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd sg. m. (אַתָּה)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנַסְתָּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnás­ta
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (m.s.) entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd sg. f. (אַתְּ)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנַסְתְּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnást
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (f.s.) entered
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          3rd sg. m. (הוּא) – Root Form
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          נִכְנַס
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                          Nichnás
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          He entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          3rd sg. f. (הִיא)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנְסָה
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnesá
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          She entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          1st pl. (אֲנַחְנוּ)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנַסְנוּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnásnu
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          We entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd pl. m. (אַתֶּם)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנַסְתֶּם
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnastém
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (m.pl.) entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          2nd pl. f. (אַתֵּן)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנַסְתֶּן
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnastén
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          You (f.pl.) entered
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          3rd pl. (הֵם / הֵן)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          נִכְנְסוּ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          Nichnesú
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          They entered
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Spelling note:</span>{" "}
                    Without vowels, both past (נכנס – “entered”) and present
                    m.s. (נכנס – “enters”) look the same. Context (or niqqud)
                    disambiguates: past{" "}
                    <span className="font-semibold">נִכְנַס</span> vs. present{" "}
                    <span className="font-semibold">נִכְנָס</span>.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
