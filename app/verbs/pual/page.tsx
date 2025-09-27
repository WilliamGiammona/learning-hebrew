// app/verbs/pual/page.tsx
export default function PualPage() {
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
                    href="#pual-verb"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Overview
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
                    href="#past-tense-exceptions"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Past Tense — Exceptions
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="pual-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Pual (פֻּעַל) – The Passive Counterpart to Piel
              </h1>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Pual binyan
                  </span>{" "}
                  is the <span className="font-semibold">passive</span>{" "}
                  counterpart of <span className="font-semibold">Piel</span>.
                  Where Piel is typically intensive or causative (e.g. “to
                  bless”), Pual means “to be X’ed” in the passive sense (e.g.
                  “to be blessed”).
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Pual verbs do not have an{" "}
                  <span className="font-semibold">infinitive</span> or an{" "}
                  <span className="font-semibold">imperative</span>. Their main
                  usage is in the{" "}
                  <span className="font-semibold">present tense</span>, where
                  they often function like{" "}
                  <span className="font-semibold">adjectives</span>.
                </p>
              </div>
            </section>

            {/* Present Tense */}
            <section id="present-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Present Tense (הווה)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The present tense in Pual is widely used as an{" "}
                  <span className="font-semibold">adjective</span>. The pattern
                  is built by placing a <span className="font-semibold">מ</span>{" "}
                  (mem) before the root and inserting a{" "}
                  <span className="font-semibold">ו</span> (vav) between the
                  first and second letters. Endings vary by gender and number.
                </p>

                {/* Masculine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mem prefix + vav between 1st and 2nd letters:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ברך → מְבוֹרָךְ (
                    <span className="font-semibold">Mevorach</span>) – blessed
                    (m.s.)
                  </li>
                </ul>

                {/* Feminine Singular */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Singular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Same as masculine singular, with{" "}
                  <span className="font-semibold">ת</span> (tav) added at the
                  end:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ברך → מְבוֹרָכָת (
                    <span className="font-semibold">Mevorachat</span>) – blessed
                    (f.s.)
                  </li>
                </ul>

                {/* Masculine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Masculine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mem + vav pattern, ending with{" "}
                  <span className="font-semibold">ים</span> (-im):
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ברך → מְבוֹרָכִים (
                    <span className="font-semibold">Mevorachim</span>) – blessed
                    (m.pl.)
                  </li>
                </ul>

                {/* Feminine Plural */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  Feminine Plural
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mem + vav pattern, ending with{" "}
                  <span className="font-semibold">וֹת</span> (-ot):
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li dir="ltr">
                    Root: ברך → מְבוֹרָכוֹת (
                    <span className="font-semibold">Mevorachot</span>) – blessed
                    (f.pl.)
                  </li>
                </ul>
              </div>
            </section>

            {/* Present Tense — Exceptions */}
            <section
              id="present-tense-exceptions"
              className="mb-12 scroll-mt-20"
            >
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Present Tense — Exceptions
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  When the root ends with{" "}
                  <span className="font-semibold">ה</span> (hey), Pual behaves
                  like <span className="font-semibold">Piel</span> in the
                  singular: there is{" "}
                  <span className="font-semibold">no spelling difference</span>
                  between masculine and feminine—only the{" "}
                  <span className="font-semibold">niqqud</span>
                  (vowels) distinguishes them.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example root <span className="font-semibold">נ־ק־ה</span> (“to
                  clean” → Pual: “to be cleaned”):{" "}
                  <span className="font-semibold">מְנוּקֶה</span> /
                  <span className="font-semibold"> מְנוּקָה</span>.
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
                        <td className="border px-4 py-2" dir="rtl">
                          מְנוּקֶה
                        </td>
                        <td className="border px-4 py-2">Menuké</td>
                        <td className="border px-4 py-2">cleaned (m.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מְנוּקֶה
                        </td>
                        <td className="border px-4 py-2">Menuká</td>
                        <td className="border px-4 py-2">cleaned (f.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מְנוּקִים
                        </td>
                        <td className="border px-4 py-2">Menukím</td>
                        <td className="border px-4 py-2">cleaned (m.pl.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מְנוּקוֹת
                        </td>
                        <td className="border px-4 py-2">Menukót</td>
                        <td className="border px-4 py-2">cleaned (f.pl.)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Plural note:</span> In the
                    plurals, the final
                    <span className="font-semibold"> ה</span> of the root{" "}
                    <em>disappears</em> and the normal plural endings attach →{" "}
                    <span className="font-semibold" dir="rtl">
                      ־ים
                    </span>{" "}
                    (m.) /{" "}
                    <span className="font-semibold" dir="rtl">
                      ־וֹת
                    </span>{" "}
                    (f.):
                    <span className="ml-1 font-semibold" dir="rtl">
                      מְנוּקִים / מְנוּקוֹת
                    </span>
                    . The <span className="font-semibold">מ</span>…
                    <span className="font-semibold">ו</span> pattern remains.
                  </p>
                </div>
              </div>
            </section>

            {/* Past Tense */}
            <section id="past-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Past Tense (עבר)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In Pual, the past tense is formed like in Piel, but with one
                  crucial difference: instead of inserting a{" "}
                  <span className="font-semibold">י</span> (yod) after the first
                  root letter, Pual uses a{" "}
                  <span className="font-semibold">ו</span> (vav). The same
                  past-tense endings apply as in other binyanim.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with the root{" "}
                  <span className="font-semibold">ברך</span> →
                  <span className="font-semibold"> בּוֹרַךְ</span> (“was
                  blessed”):
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
                        <td className="border px-4 py-2">אני</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְתִּי
                        </td>
                        <td className="border px-4 py-2">Borachti</td>
                        <td className="border px-4 py-2">I was blessed</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְתָּ
                        </td>
                        <td className="border px-4 py-2">Borachta</td>
                        <td className="border px-4 py-2">
                          You (m.s.) were blessed
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְתְּ
                        </td>
                        <td className="border px-4 py-2">Boracht</td>
                        <td className="border px-4 py-2">
                          You (f.s.) were blessed
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">הוא</td>
                        <td
                          className="border px-4 py-2 font-semibold"
                          dir="rtl"
                        >
                          בּוֹרַךְ
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Borach
                        </td>
                        <td className="border px-4 py-2">He was blessed</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרְכָה
                        </td>
                        <td className="border px-4 py-2">Borchá</td>
                        <td className="border px-4 py-2">She was blessed</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְנוּ
                        </td>
                        <td className="border px-4 py-2">Borachnu</td>
                        <td className="border px-4 py-2">We were blessed</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְתֶּם
                        </td>
                        <td className="border px-4 py-2">Borachtem</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) were blessed
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרַכְתֶּן
                        </td>
                        <td className="border px-4 py-2">Borachten</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) were blessed
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          בּוֹרְכוּ
                        </td>
                        <td className="border px-4 py-2">Borchu</td>
                        <td className="border px-4 py-2">They were blessed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Past Tense — Exceptions */}
            <section id="past-tense-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Past Tense — Exceptions
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  For Pual roots that end in{" "}
                  <span className="font-semibold">ה</span> (hey), the past tense
                  shows special spelling changes:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">
                      3rd person masculine singular
                    </span>{" "}
                    — keeps the final ה.
                  </li>
                  <li>
                    <span className="font-semibold">
                      3rd person feminine singular
                    </span>{" "}
                    — inserts a <span className="font-semibold">ת</span> (tav)
                    before the final ה.
                  </li>
                  <li>
                    <span className="font-semibold">3rd person plural</span> —
                    drops the final ה, no replacement.
                  </li>
                  <li>
                    <span className="font-semibold">All other forms</span> —
                    also drop the final ה.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with the root{" "}
                  <span className="font-semibold">נ־ק־ה</span> (“to clean” →
                  Pual: “was cleaned”):
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
                        <td className="border px-4 py-2">אני</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּיתִי
                        </td>
                        <td className="border px-4 py-2">Nukíti</td>
                        <td className="border px-4 py-2">I was cleaned</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּיתָ
                        </td>
                        <td className="border px-4 py-2">Nukíta</td>
                        <td className="border px-4 py-2">
                          You (m.s.) were cleaned
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּיתְ
                        </td>
                        <td className="border px-4 py-2">Nukít</td>
                        <td className="border px-4 py-2">
                          You (f.s.) were cleaned
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2 font-semibold">הוא</td>
                        <td
                          className="border px-4 py-2 font-semibold"
                          dir="rtl"
                        >
                          נֻקָּה
                        </td>
                        <td className="border px-4 py-2 font-semibold">Nuká</td>
                        <td className="border px-4 py-2">He was cleaned</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקְּתָה
                        </td>
                        <td className="border px-4 py-2">Nuk’tá</td>
                        <td className="border px-4 py-2">She was cleaned</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּינוּ
                        </td>
                        <td className="border px-4 py-2">Nukínu</td>
                        <td className="border px-4 py-2">We were cleaned</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּיתֶם
                        </td>
                        <td className="border px-4 py-2">Nukitém</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) were cleaned
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקִּיתֶן
                        </td>
                        <td className="border px-4 py-2">Nukitén</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) were cleaned
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נֻקּוּ
                        </td>
                        <td className="border px-4 py-2">Nukú</td>
                        <td className="border px-4 py-2">They were cleaned</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Summary:</span> Only the 3rd
                    person masculine singular keeps the{" "}
                    <span className="font-semibold">ה</span>. The 3rd person
                    feminine singular adds{" "}
                    <span className="font-semibold">ת</span> before it. In all
                    other persons—including the plural—the{" "}
                    <span className="font-semibold">ה</span> is dropped.
                  </p>
                </div>
              </div>
            </section>

            {/* Future Tense */}
            <section id="future-tense" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Future Tense (עתיד)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In Pual, future forms use the standard{" "}
                  <span className="font-semibold">אֵיתָ"ן (EITaN)</span>{" "}
                  prefixes (א / ת / י / נ), and a literal{" "}
                  <span className="font-semibold">וּ</span> is inserted between
                  the first and second letters of the root. Example root:{" "}
                  <span className="font-semibold">ב־ק־ר</span> → “to be
                  visited”.
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
                        <td className="border px-4 py-2">אני</td>
                        <td className="border px-4 py-2" dir="rtl">
                          אֲבוּקַּר
                        </td>
                        <td className="border px-4 py-2">Avukar</td>
                        <td className="border px-4 py-2">I will be visited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תְּבוּקַּר
                        </td>
                        <td className="border px-4 py-2">Tevukar</td>
                        <td className="border px-4 py-2">
                          You (m.s.) will be visited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תְּבוּקְּרִי
                        </td>
                        <td className="border px-4 py-2">Tevukri</td>
                        <td className="border px-4 py-2">
                          You (f.s.) will be visited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          יְבוּקַּר
                        </td>
                        <td className="border px-4 py-2">Yevukar</td>
                        <td className="border px-4 py-2">He will be visited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תְּבוּקַּר
                        </td>
                        <td className="border px-4 py-2">Tevukar</td>
                        <td className="border px-4 py-2">
                          She will be visited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נְבוּקַּר
                        </td>
                        <td className="border px-4 py-2">Nevukar</td>
                        <td className="border px-4 py-2">We will be visited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תְּבוּקְּרוּ
                        </td>
                        <td className="border px-4 py-2">Tevukru</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) will be visited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תְּבוּקְּרוּ
                        </td>
                        <td className="border px-4 py-2">Tevukru</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) will be visited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          יְבוּקְּרוּ
                        </td>
                        <td className="border px-4 py-2">Yevukru</td>
                        <td className="border px-4 py-2">
                          They will be visited
                        </td>
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
