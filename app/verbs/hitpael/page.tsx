// app/verbs/hitpael/page.tsx
export default function HitpaelPage() {
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
                    href="#hitpael-verb"
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
            <section id="hitpael-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Hitpael (הִתְפָּעֵל) – Reflexive / Middle Verbs
              </h1>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">Hitpael</span>{" "}
                  binyan typically expresses{" "}
                  <span className="font-semibold">reflexive</span> or{" "}
                  <span className="font-semibold">middle</span> actions (“to do
                  X to/for oneself,” “to become X,” etc.). Common meanings
                  include getting ready, getting dressed, washing oneself,
                  registering, and so on.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hitpael verbs are their own pattern and, in modern usage, are
                  often treated as having{" "}
                  <span className="font-semibold">
                    no separate active or passive counterpart
                  </span>
                  . Many Hitpael verbs conceptually relate to actions that a
                  person performs on themselves or that happen internally.
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
                  To form the infinitive in Hitpael, add{" "}
                  <span className="font-semibold">ל</span> (lamed),{" "}
                  <span className="font-semibold">ה</span> (hey), and{" "}
                  <span className="font-semibold">ת</span> (tav) before the root
                  — i.e., the fixed sequence{" "}
                  <span className="font-semibold">להת־</span> (lehit-), followed
                  by the root in the Hitpael template:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li dir="ltr">
                    Root: <span className="font-semibold">חתנ</span> →{" "}
                    <span className="font-semibold" dir="rtl">
                      להִתְחַתֵּן
                    </span>{" "}
                    (<i>lehitḥaten</i>) – “to get married”
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    You can think of Hitpael infinitives as{" "}
                    <span className="font-semibold">להת־ + root</span>. Other
                    common examples:
                    <span className="ml-2" dir="rtl">
                      להִתְרַחֵץ
                    </span>{" "}
                    (to wash oneself),
                    <span className="ml-2" dir="rtl">
                      להִתְלַבֵּשׁ
                    </span>{" "}
                    (to get dressed),
                    <span className="ml-2" dir="rtl">
                      להִתְקַדֵּם
                    </span>{" "}
                    (to advance).
                  </p>
                </div>
              </div>
            </section>

            {/* Infinitive — Exceptions */}
            <section id="infinitive-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Infinitive — Exceptions
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Most Hitpael infinitives use the fixed prefix{" "}
                  <span className="font-semibold">להת־</span>. In a few root
                  patterns, the spelling/shape of the infinitive shifts as
                  follows:
                </p>

                {/* 1) Root starts with Yod */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  1) Root starts with י (yod) — extra י is added
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When the root begins with{" "}
                  <span className="font-semibold">י</span>, an extra{" "}
                  <span className="font-semibold">י</span> appears after the
                  prefix.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להתייבש
                    </span>{" "}
                    (<i>lehityabesh</i>) — “to dry oneself”
                  </li>
                </ul>

                {/* 2) Vav is the 2nd root letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  2) ו (vav) as the middle root letter — last letter doubles
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If the second root letter is{" "}
                  <span className="font-semibold">ו</span>, the last root letter
                  is doubled in writing.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להתגורר
                    </span>{" "}
                    (<i>lehitgorer</i>) — “to reside”
                  </li>
                </ul>

                {/* 3) Yod is the middle root letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  3) י (yod) as the middle root letter — doubled
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When <span className="font-semibold">י</span> is the second
                  root letter, it behaves as doubled in the pattern.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להתגייס
                    </span>{" "}
                    (<i>lehitgayes</i>, “to mobilize/enlist”)
                  </li>
                </ul>

                {/* 4) Root ends with Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  4) Root ends with ה (hey) — replace with ו + ת
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If the root ends in <span className="font-semibold">ה</span>,
                  the final <span className="font-semibold">ה</span> is replaced
                  by <span className="font-semibold">ו</span> +{" "}
                  <span className="font-semibold">ת</span> in the infinitive.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להתגלות
                    </span>{" "}
                    (<i>lehitgalot</i>) — “to be revealed / to reveal oneself”
                  </li>
                </ul>

                {/* 5) Root starts with Zayin */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  5) Root starts with ז (zayin) — prefix becomes להזד־
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  With initial <span className="font-semibold">ז</span>, the
                  Hitpael prefix assimilates to{" "}
                  <span className="font-semibold">הזד־</span>, followed by the
                  last two root letters.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להזדרק
                    </span>{" "}
                    (<i>lehizdarek</i>)
                  </li>
                </ul>

                {/* 6) Root starts with Shin */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  6) Root starts with ש (shin) — prefix becomes להשת־
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  With initial <span className="font-semibold">ש</span>, the
                  prefix appears as <span className="font-semibold">השת־</span>,
                  followed by the last two root letters.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להשתעל
                    </span>{" "}
                    (<i>lehishtael</i> ≈{" "}
                    <i>
                      lehishta<span className="underline">ʔ</span>el
                    </i>
                    , “to cough”)
                  </li>
                </ul>

                {/* 7) Root starts with Samech */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  7) Root starts with ס (samech) — prefix becomes להסת־
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  With initial <span className="font-semibold">ס</span>, the
                  prefix appears as <span className="font-semibold">הסת־</span>,
                  followed by the last two root letters.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להסתכל
                    </span>{" "}
                    (<i>lehistakel</i>) — “to look”
                  </li>
                </ul>

                {/* 8) Root starts with Tsadi */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
                  8) Root starts with צ (tsadi) — prefix becomes להצט־
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  With initial <span className="font-semibold">צ</span>, the
                  Hitpael prefix appears as{" "}
                  <span className="font-semibold">הצט־</span>, followed by the
                  last two root letters.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="ltr">
                    Example:{" "}
                    <span className="font-semibold" dir="rtl">
                      להצטער
                    </span>{" "}
                    (<i>lehitzta&apos;er</i>) — “to feel sorry / regret”
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
                  In Hitpael, the present tense is formed by adding{" "}
                  <span className="font-semibold">מ</span> (mem) and{" "}
                  <span className="font-semibold">ת</span> (tav) in front of the
                  root. The ending then changes depending on gender and number:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">Masculine Singular</span> —
                    prefix <span className="font-semibold">מת־</span>.
                  </li>
                  <li>
                    <span className="font-semibold">Feminine Singular</span> —
                    prefix <span className="font-semibold">מת־</span> and add{" "}
                    <span className="font-semibold">ת</span> at the end.
                  </li>
                  <li>
                    <span className="font-semibold">Masculine Plural</span> —
                    prefix <span className="font-semibold">מת־</span> and add{" "}
                    <span className="font-semibold">ים</span> (<i>-im</i>) at
                    the end.
                  </li>
                  <li>
                    <span className="font-semibold">Feminine Plural</span> —
                    prefix <span className="font-semibold">מת־</span> and add{" "}
                    <span className="font-semibold">ות</span> (<i>-ot</i>) at
                    the end.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with root <span className="font-semibold">ס־כ־ל</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    מִסְתַּכֵּל
                  </span>{" "}
                  (“to look / observe”):
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
                          מִסְתַּכֵּל
                        </td>
                        <td className="border px-4 py-2">Mistakel</td>
                        <td className="border px-4 py-2">He looks</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִסְתַּכֶּלֶת
                        </td>
                        <td className="border px-4 py-2">Mistaqelet</td>
                        <td className="border px-4 py-2">She looks</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִסְתַּכְּלִים
                        </td>
                        <td className="border px-4 py-2">Mistaklim</td>
                        <td className="border px-4 py-2">They (m.) look</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִסְתַּכְּלוֹת
                        </td>
                        <td className="border px-4 py-2">Mistaklot</td>
                        <td className="border px-4 py-2">They (f.) look</td>
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
                  For Hitpael verbs whose root ends in{" "}
                  <span className="font-semibold">ה</span> (hey), the following
                  changes occur:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">Feminine singular</span> —
                    no <span className="font-semibold">ת</span> is added. The
                    only difference between masculine and feminine singular is
                    in the <span className="font-semibold">nikud</span>.
                  </li>
                  <li>
                    <span className="font-semibold">Plurals</span> — the final{" "}
                    <span className="font-semibold">ה</span> is dropped.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with root <span className="font-semibold">נ־ש־ה</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    מִתְנַשֶּׂה
                  </span>{" "}
                  (“to act superior”):
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
                          מִתְנַשֶּׂה
                        </td>
                        <td className="border px-4 py-2">Mitnaseh</td>
                        <td className="border px-4 py-2">He acts superior</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִתְנַשָּׂה
                        </td>
                        <td className="border px-4 py-2">Mitnasah</td>
                        <td className="border px-4 py-2">She acts superior</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִתְנַשִּׂים
                        </td>
                        <td className="border px-4 py-2">Mitnasim</td>
                        <td className="border px-4 py-2">
                          They (m.) act superior
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מִתְנַשּׂוֹת
                        </td>
                        <td className="border px-4 py-2">Mitnasot</td>
                        <td className="border px-4 py-2">
                          They (f.) act superior
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
                  In Hitpael, the past tense is formed by adding{" "}
                  <span className="font-semibold">ה</span> (hey) and{" "}
                  <span className="font-semibold">ת</span> (tav) before the root
                  — giving the prefix <span className="font-semibold">הת־</span>
                  . Standard past tense suffixes are then added:
                  <span className="font-semibold"> -תי</span> (ani),{" "}
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
                  Example with root <span className="font-semibold">א־ה־ב</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    התאהב
                  </span>{" "}
                  (“to fall in love”):
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
                          הִתְאַהַבְתִּי
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavti</td>
                        <td className="border px-4 py-2">I fell in love</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהַבְתָּ
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavta</td>
                        <td className="border px-4 py-2">
                          You (m.s.) fell in love
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהַבְתְּ
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavt</td>
                        <td className="border px-4 py-2">
                          You (f.s.) fell in love
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהֵב
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahev</td>
                        <td className="border px-4 py-2">He fell in love</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהֲבָה
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavah</td>
                        <td className="border px-4 py-2">She fell in love</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהַבְנוּ
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavnu</td>
                        <td className="border px-4 py-2">We fell in love</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהַבְתֶּם
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavtem</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) fell in love
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהַבְתֶּן
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavten</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) fell in love
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְאַהֲבוּ
                        </td>
                        <td className="border px-4 py-2">Hit&apos;ahavu</td>
                        <td className="border px-4 py-2">They fell in love</td>
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
                  For Hitpael verbs whose root ends in{" "}
                  <span className="font-semibold">ה</span> (hey), the past tense
                  endings trigger special changes:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    <span className="font-semibold">1st &amp; 2nd persons</span>{" "}
                    — replace <span className="font-semibold">ה</span> with{" "}
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
                  Example with root <span className="font-semibold">נ־ס־ה</span>{" "}
                  →
                  <span className="font-semibold" dir="rtl">
                    התנסה
                  </span>{" "}
                  (“experienced”):
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
                          הִתְנַסִּיתִי
                        </td>
                        <td className="border px-4 py-2">Hitnasiti</td>
                        <td className="border px-4 py-2">I experienced</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתה</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסִּיתָ
                        </td>
                        <td className="border px-4 py-2">Hitnasita</td>
                        <td className="border px-4 py-2">
                          You (m.s.) experienced
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">את</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסִּיתְ
                        </td>
                        <td className="border px-4 py-2">Hitnasit</td>
                        <td className="border px-4 py-2">
                          You (f.s.) experienced
                        </td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="border px-4 py-2">הוא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסָּה
                        </td>
                        <td className="border px-4 py-2">Hitnasah</td>
                        <td className="border px-4 py-2">He experienced</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">היא</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסְּתָה
                        </td>
                        <td className="border px-4 py-2">Hitnastah</td>
                        <td className="border px-4 py-2">She experienced</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אנחנו</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסִּינוּ
                        </td>
                        <td className="border px-4 py-2">Hitnasinu</td>
                        <td className="border px-4 py-2">We experienced</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתם</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסִּיתֶם
                        </td>
                        <td className="border px-4 py-2">Hitnasitem</td>
                        <td className="border px-4 py-2">
                          You (m.pl.) experienced
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">אתן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסִּיתֶן
                        </td>
                        <td className="border px-4 py-2">Hitnasiten</td>
                        <td className="border px-4 py-2">
                          You (f.pl.) experienced
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">הם / הן</td>
                        <td className="border px-4 py-2" dir="rtl">
                          הִתְנַסּוּ
                        </td>
                        <td className="border px-4 py-2">Hitnasu</td>
                        <td className="border px-4 py-2">They experienced</td>
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
