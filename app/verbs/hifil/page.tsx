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
          </main>
        </div>
      </div>
    </div>
  );
}
