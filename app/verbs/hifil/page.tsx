// app/verbs/hifil/page.tsx
export default function HifilPage() {
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
                    href="#hifil-verb"
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
                    The Infinitive Exceptions
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
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="hifil-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Hifil (הִפְעִיל) – The Causative Active Pattern
              </h1>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Hifil binyan
                  </span>{" "}
                  is
                  <span className="font-semibold"> always active</span> and
                  typically carries a
                  <span className="font-semibold"> causative</span> sense: “to
                  cause/make/enable someone to do X.”
                </p>
                <div className="p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    Pronunciation hint: the 3rd person masculine singular past
                    form of Hifil is
                    <span className="font-semibold"> הִפְעִיל (hif’il)</span>.
                    This pattern&apos;s{" "}
                    <span className="font-semibold">niqqud</span> (vowels) —{" "}
                    <i>hiriq</i> under the ה and <i>hiriq-yod</i> toward the end
                    — is the “template” people reference when they say it
                    follows the “<span className="font-semibold">hifi</span>{" "}
                    sound”.
                  </p>
                </div>
              </div>
            </section>

            {/* Infinitive */}
            <section id="infinitive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Infinitive (שם הפועל)
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Hifil infinitives are formed by:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    Placing <span className="font-semibold">ל</span> +{" "}
                    <span className="font-semibold">ה</span> (lamed + hey)
                    <span className="mx-1">before</span> the first root letter.
                  </li>
                  <li>
                    Inserting a <span className="font-semibold">י</span> (yod)
                    <span className="mx-1">before</span> the third root letter.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-3">
                  Example (root <span className="font-semibold">ז־מ־ן</span>):{" "}
                  <span className="font-semibold" dir="rtl">
                    לְהַזְמִין
                  </span>{" "}
                  (<i>lehazmin</i>) — “to invite / to order”.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-gray-700">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Part
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Build
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Result
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Meaning
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Prefix</td>
                        <td className="border px-4 py-2">
                          ל + ה + <span dir="rtl">זמן</span>
                        </td>
                        <td className="border px-4 py-2" dir="rtl">
                          לְהַ<span className="underline">ז</span>מ
                          <span className="underline">ין</span>
                        </td>
                        <td className="border px-4 py-2">
                          “to …” + Hifil frame
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Insert י</td>
                        <td className="border px-4 py-2">
                          Place <span className="font-semibold">י</span> before
                          the 3rd letter (נ)
                        </td>
                        <td className="border px-4 py-2" dir="rtl">
                          לְהַזְמִין
                        </td>
                        <td className="border px-4 py-2">
                          “to invite / to order”
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                  When the root begins with{" "}
                  <span className="font-semibold">י</span>, that initial yod is
                  <span className="font-semibold"> replaced by ו</span> in the
                  Hifil infinitive (after{" "}
                  <span className="font-semibold">לה־</span>).
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="rtl">
                    לְהוֹסִיף (<span className="font-semibold">lehosif</span>) —
                    from יסף
                  </li>
                </ul>

                {/* 2) Root starts with Nun */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  2) Root starts with נ (nun)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root begins with{" "}
                  <span className="font-semibold">נ</span>, the nun is
                  <span className="font-semibold"> dropped</span> in the Hifil
                  infinitive.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="rtl">
                    לְהַכִּיר (<span className="font-semibold">lehakir</span>) —
                    from נכר
                  </li>
                </ul>

                {/* 3) Middle letter is Yod */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  3) Middle letter is י (yod)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If the middle root letter is already{" "}
                  <span className="font-semibold">י</span>, you do
                  <span className="font-semibold">
                    {" "}
                    not add an additional י
                  </span>{" "}
                  before the third root letter.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="rtl">
                    לְהָבִין (<span className="font-semibold">lehavin</span>) —
                    from בין (middle = י)
                  </li>
                </ul>

                {/* 4) Middle letter is Vav */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  4) Middle letter is ו (vav)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If the middle root letter is{" "}
                  <span className="font-semibold">ו</span>, it is
                  <span className="font-semibold"> removed</span> in the Hifil
                  infinitive.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li dir="rtl">
                    לְהָכִין (<span className="font-semibold">lehachin</span>) —
                    from כון (middle ו dropped)
                  </li>
                </ul>

                {/* 5) Root ends with Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  5) Root ends with ה (hey)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When the root ends in <span className="font-semibold">ה</span>
                  , no extra <span className="font-semibold">י</span> is added.
                  Instead, the final <span className="font-semibold">ה</span> is
                  <span className="font-semibold"> replaced by ו + ת</span>.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li dir="rtl">
                    לְהַרְשׁוֹת (
                    <span className="font-semibold">leharshot</span>) — from רשה
                    (→ ו + ת)
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
                  Hifil present tense forms are built in a consistent way:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    They{" "}
                    <span className="font-semibold">always begin with מ</span>{" "}
                    (mem).
                  </li>
                  <li>
                    A <span className="font-semibold">י</span> (yod) appears
                    before the third root letter, just like in the infinitive.
                  </li>
                  <li>
                    For the{" "}
                    <span className="font-semibold">feminine singular</span>, a{" "}
                    <span className="font-semibold">ה</span> (hey) is added at
                    the end.
                  </li>
                  <li>
                    The <span className="font-semibold">masculine plural</span>{" "}
                    ends in <span className="font-semibold">ים</span> (-im).
                  </li>
                  <li>
                    The <span className="font-semibold">feminine plural</span>{" "}
                    ends in <span className="font-semibold">ות</span> (-ot).
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Example with the root{" "}
                  <span className="font-semibold">פ־ס־ק</span> → “to stop / to
                  interrupt”:
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
                          מַפְסִיק
                        </td>
                        <td className="border px-4 py-2">Mafsik</td>
                        <td className="border px-4 py-2">He stops</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Singular</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מַפְסִיקָה
                        </td>
                        <td className="border px-4 py-2">Mafsika</td>
                        <td className="border px-4 py-2">She stops</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Masculine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מַפְסִיקִים
                        </td>
                        <td className="border px-4 py-2">Mafsikim</td>
                        <td className="border px-4 py-2">They (m.) stop</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Feminine Plural</td>
                        <td className="border px-4 py-2" dir="rtl">
                          מַפְסִיקוֹת
                        </td>
                        <td className="border px-4 py-2">Mafsikot</td>
                        <td className="border px-4 py-2">They (f.) stop</td>
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
