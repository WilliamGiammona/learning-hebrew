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
          </main>
        </div>
      </div>
    </div>
  );
}
