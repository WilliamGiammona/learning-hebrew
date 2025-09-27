// app/verbs/hufal/page.tsx
export default function HufalPage() {
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
                    href="#hufal-verb"
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
                <li>
                  <a
                    href="#future-tense"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    The Future Tense (עתיד)
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="hufal-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Hufal (הֻפְעַל) – The Passive Counterpart to Hifil
              </h1>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Hufal binyan
                  </span>{" "}
                  is the passive partner of{" "}
                  <span className="font-semibold">Hifil</span>. Where Hifil is
                  always <span className="font-semibold">active</span> (“to
                  cause/make X”), Hufal expresses{" "}
                  <span className="font-semibold">being caused</span> or{" "}
                  <span className="font-semibold">having something done</span>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Like Pual, Hufal has{" "}
                  <span className="font-semibold">no infinitive</span> and{" "}
                  <span className="font-semibold">no imperative</span>. You’ll
                  mostly meet it in the{" "}
                  <span className="font-semibold">past</span>,{" "}
                  <span className="font-semibold">present</span>, and{" "}
                  <span className="font-semibold">future</span> tenses.
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
                  In Hufal, present tense forms are built by adding{" "}
                  <span className="font-semibold">מ</span> (mem) and{" "}
                  <span className="font-semibold">ו</span> (vav) to the front of
                  the root. Then attach endings by gender/number:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">Masculine Singular</span> —{" "}
                    <span className="font-semibold">מ + ו</span> before the
                    root.
                  </li>
                  <li>
                    <span className="font-semibold">Feminine Singular</span> —{" "}
                    <span className="font-semibold">מ + ו</span> before the
                    root, plus a <span className="font-semibold">ת</span> at the
                    end.
                  </li>
                  <li>
                    <span className="font-semibold">Masculine Plural</span> —{" "}
                    <span className="font-semibold">מ + ו</span> before the
                    root, plus <span className="font-semibold">ים</span>.
                  </li>
                  <li>
                    <span className="font-semibold">Feminine Plural</span> —{" "}
                    <span className="font-semibold">מ + ו</span> before the
                    root, plus <span className="font-semibold">וֹת</span>.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example root <span className="font-semibold">פ־ס־ק</span> →
                  passive idea “is/are stopped”:
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
                          מוּפְסָק
                        </td>
                        <td className="border px-4 py-2">Mufsak</td>
                        <td className="border px-4 py-2">is stopped (m.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּפְסֶקֶת
                        </td>
                        <td className="border px-4 py-2">Mufseket</td>
                        <td className="border px-4 py-2">is stopped (f.s.)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּפְסָקִים
                        </td>
                        <td className="border px-4 py-2">Mufsakim</td>
                        <td className="border px-4 py-2">
                          are stopped (m.pl.)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּפְסָקוֹת
                        </td>
                        <td className="border px-4 py-2">Mufsakot</td>
                        <td className="border px-4 py-2">
                          are stopped (f.pl.)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                  For Hufal roots that end with{" "}
                  <span className="font-semibold">ה</span> (hey):
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">Feminine singular</span> —{" "}
                    <u>no</u> <span className="font-semibold">ת</span> is added.
                    The masculine and feminine singular have the{" "}
                    <span className="font-semibold">same spelling</span>; only
                    the <span className="font-semibold">nikud</span> (vowels)
                    differs.
                  </li>
                  <li>
                    In the <span className="font-semibold">plurals</span>, the
                    final <span className="font-semibold">ה</span> is{" "}
                    <span className="font-semibold">dropped</span>.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with <span className="font-semibold">מוּרְשֶׁה</span>{" "}
                  / <span className="font-semibold">מוּרְשָׁה</span> (“is
                  authorized / permitted”):
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
                          מוּרְשֶׁה
                        </td>
                        <td className="border px-4 py-2">Mursheh</td>
                        <td className="border px-4 py-2">
                          is authorized (m.s.)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּרְשָׁה
                        </td>
                        <td className="border px-4 py-2">Murshah</td>
                        <td className="border px-4 py-2">
                          is authorized (f.s.)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּרְשִׁים
                        </td>
                        <td className="border px-4 py-2">Murshim</td>
                        <td className="border px-4 py-2">
                          are authorized (m.pl.)
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מוּרְשׁוֹת
                        </td>
                        <td className="border px-4 py-2">Murshot</td>
                        <td className="border px-4 py-2">
                          are authorized (f.pl.)
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  In Hufal, past tense forms are built by adding{" "}
                  <span className="font-semibold">ה</span> (hey) and{" "}
                  <span className="font-semibold">ו</span> (vav) before the
                  root. From this base, the standard past tense suffixes are
                  attached: <span className="font-semibold">-תי</span> (ani),{" "}
                  <span className="font-semibold">-תָ</span> (ata),{" "}
                  <span className="font-semibold">-תְּ</span> (at),{" "}
                  <span className="font-semibold">-ה</span> (hu),{" "}
                  <span className="font-semibold">-ה</span> (hi),{" "}
                  <span className="font-semibold">-נוּ</span> (anachnu),{" "}
                  <span className="font-semibold">-תם</span> (atem),{" "}
                  <span className="font-semibold">-תן</span> (aten),{" "}
                  <span className="font-semibold">-וּ</span> (hem/hen).
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with root <span className="font-semibold">ז־מ־ן</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    הֻזְמַן
                  </span>{" "}
                  (“was invited”):
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
                          הוּזְמַנְתִּי
                        </td>
                        <td className="border px-4 py-2">Huzmánti</td>
                        <td className="border px-4 py-2">I was invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַנְתָּ
                        </td>
                        <td className="border px-4 py-2">Huzmanta</td>
                        <td className="border px-4 py-2">
                          You (m.s.) were invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַנְתְּ
                        </td>
                        <td className="border px-4 py-2">Huzmant</td>
                        <td className="border px-4 py-2">
                          You (f.s.) were invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Huzmán</td>
                        <td className="border px-4 py-2">He was invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמְנָה
                        </td>
                        <td className="border px-4 py-2">Huzmená</td>
                        <td className="border px-4 py-2">She was invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַנּוּ
                        </td>
                        <td className="border px-4 py-2">Huzmánu</td>
                        <td className="border px-4 py-2">We were invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַנְתֶּם
                        </td>
                        <td className="border px-4 py-2">Huzmantem</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) were invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמַנְתֶּן
                        </td>
                        <td className="border px-4 py-2">Huzmanten</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) were invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּזְמְנוּ
                        </td>
                        <td className="border px-4 py-2">Huzmenu</td>
                        <td className="border px-4 py-2">They were invited</td>
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
                  For Hufal verbs whose root ends in{" "}
                  <span className="font-semibold">ה</span> (hey), the past tense
                  endings trigger special changes:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">1st and 2nd persons</span> —
                    replace <span className="font-semibold">ה</span> with{" "}
                    <span className="font-semibold">י</span>.
                  </li>
                  <li>
                    <span className="font-semibold">
                      3rd person feminine singular
                    </span>{" "}
                    — add <span className="font-semibold">ת</span> before the{" "}
                    <span className="font-semibold">ה</span>.
                  </li>
                  <li>
                    <span className="font-semibold">3rd person plural</span> —
                    drop the <span className="font-semibold">ה</span>.
                  </li>
                  <li>
                    <span className="font-semibold">
                      3rd person masculine singular
                    </span>{" "}
                    — keeps the final <span className="font-semibold">ה</span>.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with root <span className="font-semibold">ר־ש־ה</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    הוּרְשָׁה
                  </span>{" "}
                  (“was permitted”):
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
                          הוּרְשֵׁיתִי
                        </td>
                        <td className="border px-4 py-2">Hurshéiti</td>
                        <td className="border px-4 py-2">I was permitted</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשֵׁיתָ
                        </td>
                        <td className="border px-4 py-2">Hurshéita</td>
                        <td className="border px-4 py-2">
                          You (m.s.) were permitted
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשֵׁיתְ
                        </td>
                        <td className="border px-4 py-2">Hurshéit</td>
                        <td className="border px-4 py-2">
                          You (f.s.) were permitted
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשָׁה
                        </td>
                        <td className="border px-4 py-2">Hurshah</td>
                        <td className="border px-4 py-2">He was permitted</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשְׁתָה
                        </td>
                        <td className="border px-4 py-2">Hurshtah</td>
                        <td className="border px-4 py-2">She was permitted</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשֵׁינוּ
                        </td>
                        <td className="border px-4 py-2">Hurshéinu</td>
                        <td className="border px-4 py-2">We were permitted</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשֵׁיתֶם
                        </td>
                        <td className="border px-4 py-2">Hurshéitem</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) were permitted
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשֵׁיתֶן
                        </td>
                        <td className="border px-4 py-2">Hurshéiten</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) were permitted
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הוּרְשׁוּ
                        </td>
                        <td className="border px-4 py-2">Hurshu</td>
                        <td className="border px-4 py-2">
                          They were permitted
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  In Hufal, future tense forms are built with the{" "}
                  <span className="font-semibold">אֵיתָן (EITaN)</span>{" "}
                  prefixes: <span className="font-semibold">א</span> (ani),{" "}
                  <span className="font-semibold">ת</span>{" "}
                  (ata/at/atem/aten/hi),{" "}
                  <span className="font-semibold">י</span> (hu/hem/hen),{" "}
                  <span className="font-semibold">נ</span> (anachnu). A{" "}
                  <span className="font-semibold">ו</span> (vav) is placed
                  before the root.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with root <span className="font-semibold">ז־מ־ן</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    אוּזְמַן
                  </span>{" "}
                  (“I will be invited”):
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
                          אוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Uzmán</td>
                        <td className="border px-4 py-2">I will be invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Tuzmán</td>
                        <td className="border px-4 py-2">
                          You (m.s.) will be invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תוּזְמְנִי
                        </td>
                        <td className="border px-4 py-2">Tuzméni</td>
                        <td className="border px-4 py-2">
                          You (f.s.) will be invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          יוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Yuzmán</td>
                        <td className="border px-4 py-2">He will be invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Tuzmán</td>
                        <td className="border px-4 py-2">
                          She will be invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          נוּזְמַן
                        </td>
                        <td className="border px-4 py-2">Nuzmán</td>
                        <td className="border px-4 py-2">We will be invited</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תוּזְמְנוּ
                        </td>
                        <td className="border px-4 py-2">Tuzménu</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) will be invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          תוּזְמַנָּה
                        </td>
                        <td className="border px-4 py-2">Tuzmaná</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) will be invited
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          יוּזְמְנוּ
                        </td>
                        <td className="border px-4 py-2">Yuzménu</td>
                        <td className="border px-4 py-2">
                          They will be invited
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Note:</span> As in other
                    binyanim, the{" "}
                    <span className="font-semibold">feminine plural</span> forms
                    (
                    <span dir="rtl" className="font-semibold">
                      -נָה
                    </span>
                    ) are rare in Modern Hebrew, and most speakers prefer to use
                    the common plural <span className="font-semibold">-וּ</span>{" "}
                    forms instead.
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
