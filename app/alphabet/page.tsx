//app/alphabet/page.tsx

import Image from "next/image";

const Alphabet = () => {
  const sections = [
    { id: "block-script", title: "Block Script" },
    { id: "vowels", title: "Vowels" },
    { id: "cursive", title: "Cursive" },
    { id: "numbers", title: "Numbers" },
    { id: "ancient-hebrew", title: "Ancient Hebrew" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:w-64 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 lg:sticky lg:top-20">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
              The Hebrew Alphabet
            </h1>

            <section id="block-script" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                  Block Script
                </h2>
                <div className="prose prose-lg mx-auto text-center">
                  <p className="text-gray-700 leading-relaxed">
                    Hebrew is read from{" "}
                    <span className="font-semibold text-blue-700">
                      right to left
                    </span>{" "}
                    and consists of{" "}
                    <span className="font-semibold text-blue-700">
                      22 letters
                    </span>
                    . Each letter has a name and a numerical value.
                  </p>
                </div>

                <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800">←</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Reading Direction
                      </div>
                    </div>
                    <div className="text-center px-6">
                      <div className="text-3xl font-bold text-blue-800">22</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Letters Total
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800">
                        א-ת
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Alef to Tav
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historical Context */}
                <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Historical Note:</span> The
                    alphabet shown below is the Aramaic-derived script that
                    replaced the original Paleo-Hebrew (K&apos;tav Ivri) during
                    the Babylonian captivity in the 6th century B.C. This
                    script, adopted by the returning exiles, became the basis
                    for the modern Hebrew script used today, commonly referred
                    to as
                    <b> Block Script</b> (K&apos;tav Ashuri).
                  </p>
                </div>

                {/* Hebrew Alphabet Chart */}
                <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4 text-center">
                  Block Script
                </h2>
                <div className="mt-8">
                  <div className="relative w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                    <Image
                      src="/images/alphabet/formal-alphabet.png"
                      alt="Hebrew Alphabet Chart"
                      width={1200}
                      height={400}
                      className="w-full h-auto"
                      priority
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-3">
                    The 22 letters of the Hebrew alphabet with their names and
                    forms
                  </p>
                </div>
                {/* Variations callout */}
                <div className="mt-10">
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-blue-800 text-center">
                      Letters with Variations (7)
                    </h3>
                    <p className="mt-2 text-center text-gray-700">
                      In addition to the standard 22 letters, Hebrew has{" "}
                      <span className="font-semibold text-blue-700">
                        five “final” forms
                      </span>{" "}
                      used only at the end of a word, and{" "}
                      <span className="font-semibold text-blue-700">
                        two letters
                      </span>{" "}
                      whose pronunciation changes with a dot (dagesh) or dot
                      placement.
                    </p>

                    {/* Final forms */}
                    <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4">
                      <h4 className="text-lg font-semibold text-amber-900">
                        Final Forms (אותיות סופיות) — used at word end
                      </h4>
                      <ul
                        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
                        aria-label="Final forms grid"
                      >
                        {/* Kaf */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Kaf
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            ך <span className="mx-1 text-gray-400">/</span> כ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Regular / Final
                          </div>
                        </li>
                        {/* Mem */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Mem
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            ם <span className="mx-1 text-gray-400">/</span> מ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Regular / Final
                          </div>
                        </li>
                        {/* Nun */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Nun
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            ן <span className="mx-1 text-gray-400">/</span> נ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Regular / Final
                          </div>
                        </li>
                        {/* Peh */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Peh
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            ף <span className="mx-1 text-gray-400">/</span> פ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Regular / Final
                          </div>
                        </li>
                        {/* Tzadi */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Tzadi
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            ץ <span className="mx-1 text-gray-400">/</span> צ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Regular / Final
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Dot / hard–soft variations */}
                    <div className="mt-6 rounded-lg border border-indigo-200 bg-indigo-50/60 p-4">
                      <h4 className="text-lg font-semibold text-indigo-900">
                        Dot Variations (דגש / נקודה)
                      </h4>
                      <p className="mt-1 text-sm text-gray-700">
                        A dot (dagesh) can change pronunciation; for{" "}
                        <span className="font-medium">Bet</span> it marks hard
                        “b” vs. soft “v”. For{" "}
                        <span className="font-medium">Shin</span>, the dot
                        position (right vs. left) gives “sh” vs. “s”.
                      </p>
                      <ul
                        className="mt-4 grid gap-3 sm:grid-cols-2"
                        aria-label="Dot variations grid"
                      >
                        {/* Bet / Vet */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Bet / Vet
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            בּ <span className="mx-1 text-gray-400">/</span> ב
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            v (no dot) / b (with dot)
                          </div>
                        </li>
                        {/* Shin / Sin */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Shin / Sin
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            שׁ <span className="mx-1 text-gray-400">/</span> שׂ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            “s” (left dot) / “sh” (right dot)
                          </div>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                      Tip: You&apos;ll often see the five final forms only at
                      the end of a word, while the dagesh/dot variations can
                      appear anywhere and affect pronunciation.
                    </p>
                  </div>
                </div>
                {/* Aleph section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-purple-800 text-center">
                      Aleph (א)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      The first letter of the Hebrew alphabet,{" "}
                      <span className="font-semibold text-purple-700">
                        Aleph, (א)
                      </span>
                      , is unique because it is{" "}
                      <span className="italic">silent</span> on its own. Its
                      sound depends on the{" "}
                      <span className="font-semibold">vowel mark</span> placed
                      with it. Aleph often serves as a{" "}
                      <span className="font-medium">“carrier”</span> for vowels
                      rather than producing a consonant sound by itself. So its
                      sound is entirely determined by the vowel that accompanies
                      it. We will learn the voewls in the next section.
                    </p>
                  </div>
                </div>
                {/* Bet section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-indigo-800 text-center">
                      Bet (ב)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-indigo-700">
                        Bet (ב),
                      </span>
                      is one letter with two pronunciations: with a dot (
                      <span className="font-medium">dagesh</span>) it’s a hard
                      “b” sound (
                      <span dir="rtl" className="font-mono">
                        בּ
                      </span>
                      ), and without the dot it’s a soft “v” sound (
                      <span dir="rtl" className="font-mono">
                        ב
                      </span>
                      ). Unlike Aleph, Bet always represents a consonant; the
                      vowel sound comes from the vowel marks around it.
                    </p>

                    {/* Two-variant cards */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Bet with dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          With dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          בּ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Pronounced “b”
                        </div>
                        <div className="mt-3 rounded-md bg-indigo-50 border border-indigo-100 p-3 text-sm">
                          <div className="font-medium text-gray-700">
                            Examples
                          </div>
                          <ul className="mt-1 space-y-1 text-gray-700">
                            <li>
                              <span dir="rtl" className="font-mono">
                                בַּיִת
                              </span>{" "}
                              — <span className="italic">bayit</span> (“house”)
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Vet without dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          No dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          ב
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Pronounced “v” (Vet)
                        </div>
                        <div className="mt-3 rounded-md bg-indigo-50 border border-indigo-100 p-3 text-sm">
                          <div className="font-medium text-gray-700">
                            Examples
                          </div>
                          <ul className="mt-1 space-y-1 text-gray-700">
                            <li>
                              <span dir="rtl" className="font-mono">
                                אָב
                              </span>{" "}
                              — <span className="italic">av</span> (“father”)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Quick notes */}
                    <div className="mt-6 rounded-lg border border-indigo-100 bg-white p-4">
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                          The presence/absence of the dot (
                          <span className="font-medium">dagesh</span>) is what
                          changes “b” ↔ “v”.
                        </li>
                        <li>
                          Bet has{" "}
                          <span className="font-medium">no final form</span>{" "}
                          (unlike Kaf, Mem, Nun, Peh, Tzadi).
                        </li>
                        <li>
                          You’ll often meet{" "}
                          <span className="font-medium">בּ</span> at the start
                          of words and
                          <span className="font-medium"> ב</span> between
                          vowels, but always read the actual dotting in the
                          text.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="vowels" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Vowels
                </h2>
                <p className="text-gray-700">Content coming soon...</p>
              </div>
            </section>

            <section id="cursive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Cursive
                </h2>
                <p className="text-gray-700">Content coming soon...</p>
              </div>
            </section>

            <section id="numbers" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Numbers
                </h2>
                <p className="text-gray-700">Content coming soon...</p>
              </div>
            </section>

            <section id="ancient-hebrew" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Ancient Hebrew
                </h2>
                <p className="text-gray-700">Content coming soon...</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
