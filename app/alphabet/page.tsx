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
                      used only at the end of a word, and letters whose
                      pronunciation can change with a dot:{" "}
                      <span className="font-semibold text-blue-700">Bet</span>,{" "}
                      <span className="font-semibold text-blue-700">Kaf</span>,{" "}
                      <span className="font-semibold text-blue-700">Peh</span>{" "}
                      (via <span className="font-semibold">dagesh</span>), and{" "}
                      <span className="font-semibold text-blue-700">Shin</span>{" "}
                      (via dot placement).
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
                        A dot (<span className="font-medium">dagesh</span>) can
                        change pronunciation: for{" "}
                        <span className="font-medium">Bet</span> it marks “b”
                        vs. “v”, for <span className="font-medium">Kaf</span> it
                        marks “k” vs. “kh” (as in
                        <i> loch</i>), and for{" "}
                        <span className="font-medium">Peh</span> it marks “p”
                        vs. “f”. <span className="font-medium">Shin</span> uses
                        a dot above the letter (right vs. left) to give “sh” vs.
                        “s”.
                      </p>
                      <ul
                        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
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

                        {/* Kaf / Khaf */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Kaf / Khaf
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            כּ <span className="mx-1 text-gray-400">/</span> כ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            kh (no dot) / k (with dot)
                          </div>
                        </li>

                        {/* Pe / Fe */}
                        <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                          <div className="text-xs uppercase tracking-wide text-gray-500">
                            Peh / Fe
                          </div>
                          <div dir="rtl" className="mt-2 text-4xl leading-none">
                            פּ <span className="mx-1 text-gray-400">/</span> פ
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            f (no dot) / p (with dot)
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

                      <p className="mt-3 text-xs text-gray-600">
                        Note: The final forms <span dir="rtl">ך</span> and{" "}
                        <span dir="rtl">ף</span> do not take a dagesh—so
                        they&apos;re always “kh” and “f”.
                      </p>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                      Tip: You&apos;ll only see the five final forms only at the
                      end of a word, while the dagesh/dot variations can appear
                      anywhere and affect pronunciation.
                    </p>
                  </div>
                </div>

                {/* Same Sounds section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-teal-800 text-center">
                      Same Sounds (Common Pronunciations)
                    </h3>
                    <p className="mt-2 text-center text-gray-700 max-w-2xl mx-auto">
                      In modern Israeli Hebrew, several different letters can
                      share the{" "}
                      <span className="font-semibold">same sound</span>. Below
                      are common pairs you’ll hear pronounced alike in everyday
                      speech.
                    </p>

                    <ul
                      className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      aria-label="Same sounds grid"
                    >
                      {/* Aleph & Ayin */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Aleph &amp; Ayin
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          א <span className="mx-1 text-gray-400">/</span> ע
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both silent; vowel “carriers”.
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          (*Ayin has a distinct sound in some traditions.)
                        </div>
                      </li>

                      {/* Vav & Bet (no dagesh) */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Vav &amp; Bet (no dagesh)
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          ו <span className="mx-1 text-gray-400">/</span> ב
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both pronounced “v”.
                        </div>
                      </li>

                      {/* Khet & Khaf (no dagesh) */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Khet &amp; Khaf (no dagesh)
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          ח <span className="mx-1 text-gray-400">/</span> כ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both pronounced “kh” (like in <i>loch</i>).
                        </div>
                      </li>

                      {/* Tav & Tet */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Tav &amp; Tet
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          ת <span className="mx-1 text-gray-400">/</span> ט
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both pronounced “t”.
                        </div>
                      </li>

                      {/* Kaf (with dagesh) & Qof */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Kaf (with dagesh) &amp; Qof
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          כּ <span className="mx-1 text-gray-400">/</span> ק
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both pronounced “k”.
                        </div>
                      </li>

                      {/* Shin (left dot) & Samekh */}
                      <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          Shin (left dot) &amp; Samekh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          שׂ <span className="mx-1 text-gray-400">/</span> ס
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Both pronounced “s”.
                        </div>
                      </li>
                    </ul>

                    <p className="mt-4 text-xs text-gray-600 text-center">
                      Note: Historical/other traditions may distinguish some of
                      these sounds (e.g., ע or ק), but modern Israeli Hebrew
                      typically merges them as shown.
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
                      </div>

                      {/* Bet without dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          No dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl leading-none">
                          ב
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Pronounced “v”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gimel section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-emerald-800 text-center">
                      Gimel (ג)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Represents a hard “g” as in <i>go</i>. In modern Hebrew
                      it’s consistently “g”; older or foreign-influenced
                      variants are rare in everyday Israeli usage.
                    </p>
                  </div>
                </div>

                {/* Dalet section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-amber-800 text-center">
                      Dalet (ד)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “d” as in <i>dog</i>. Modern Hebrew does not
                      distinguish a “th” sound for Dalet.
                    </p>
                  </div>
                </div>

                {/* He section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-rose-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-rose-800 text-center">
                      He (ה)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      A breathy “h” sound. At the end of words it can be silent
                      and serve as a vowel marker in spelling.
                    </p>
                  </div>
                </div>

                {/* Vav section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-cyan-800 text-center">
                      Vav (ו)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Consonant “v”. In pointed text it also functions as a
                      vowel letter indicating “o” or “u” when marked with the
                      appropriate dots.
                    </p>
                  </div>
                </div>

                {/* Zayin section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-fuchsia-800 text-center">
                      Zayin (ז)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “z” as in <i>zoo</i>.
                    </p>
                  </div>
                </div>

                {/* Khet section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-stone-200 bg-gradient-to-br from-stone-50 via-white to-stone-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-stone-800 text-center">
                      Khet (ח)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      A guttural “kh” (like the German <i>Bach</i> or Scottish{" "}
                      <i>loch</i>). In modern Hebrew this sound matches Khaf
                      without a dagesh.
                    </p>
                  </div>
                </div>

                {/* Tet section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-lime-200 bg-gradient-to-br from-lime-50 via-white to-lime-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-lime-800 text-center">
                      Tet (ט)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “t”. In modern Hebrew it sounds the same as
                      Tav.
                    </p>
                  </div>
                </div>

                {/* Yod section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-sky-800 text-center">
                      Yod (י)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Consonant “y”. It also serves as a vowel letter indicating
                      an “i” sound in pointed text or standard spelling
                      conventions.
                    </p>
                  </div>
                </div>

                {/* Kaf / Khaf section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-yellow-800 text-center">
                      Kaf / Khaf (כ / ך)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-yellow-700">
                        Kaf (כּ)
                      </span>{" "}
                      with a dot (dagesh) is “k.” Without the dot,{" "}
                      <span className="font-semibold text-yellow-700">
                        Khaf (כ)
                      </span>{" "}
                      is a “kh” sound. Kaf also has a{" "}
                      <span className="font-medium">final form</span> (ך) used
                      only at the end of words.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {/* Kaf with dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          With dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          כּ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “k” sound
                        </div>
                      </div>

                      {/* Khaf without dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          No dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          כ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “kh” sound
                        </div>
                      </div>

                      {/* Final Kaf */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Final form
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          ך
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Used at word end
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lamed section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-indigo-800 text-center">
                      Lamed (ל)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “l” as in <i>light</i>.
                    </p>
                  </div>
                </div>

                {/* Mem section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-amber-800 text-center">
                      Mem (מ / ם)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-amber-700">
                        Mem (מ)
                      </span>{" "}
                      represents the sound “m”. It also has a{" "}
                      <span className="font-medium">final form</span> (ם), which
                      appears only at the end of words.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Regular Mem */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Regular
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          מ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “m” sound
                        </div>
                      </div>

                      {/* Final Mem */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Final
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          ם
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Used at word end
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nun section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-teal-800 text-center">
                      Nun (נ / ן)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-teal-700">
                        Nun (נ)
                      </span>{" "}
                      is the consonant “n”. It has a{" "}
                      <span className="font-medium">final form</span> (ן) used
                      only at the end of words. As with all Hebrew consonants,
                      the vowel you hear comes from the vowel marks around it.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Regular Nun */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Regular
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          נ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “n” sound
                        </div>
                      </div>

                      {/* Final Nun */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Final
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          ן
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Used at word end
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Samekh section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-emerald-800 text-center">
                      Samekh (ס)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “s”. In modern Hebrew it matches the “s” of
                      Shin with a left dot.
                    </p>
                  </div>
                </div>

                {/* Ayin section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-zinc-800 text-center">
                      Ayin (ע)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Silent in modern Israeli Hebrew and functions as a vowel
                      carrier; some traditions pronounce it as a distinct
                      guttural.
                    </p>
                  </div>
                </div>

                {/* Peh / Feh section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-rose-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-rose-800 text-center">
                      Peh / Feh (פ / ף)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-rose-700">
                        Peh (פּ)
                      </span>{" "}
                      with a dot (dagesh) is “p.” Without the dot,{" "}
                      <span className="font-semibold text-rose-700">
                        Feh (פ)
                      </span>{" "}
                      is “f.” Peh also has a{" "}
                      <span className="font-medium">final form</span> (ף) used
                      at the end of words.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {/* Peh with dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          With dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          פּ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “p” sound
                        </div>
                      </div>

                      {/* Feh without dagesh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          No dagesh
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          פ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “f” sound
                        </div>
                      </div>

                      {/* Final Peh */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Final form
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          ף
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Used at word end
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tzadi section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-cyan-800 text-center">
                      Tzadi (צ / ץ)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-cyan-700">
                        Tzadi (צ)
                      </span>{" "}
                      is pronounced “ts” (as in <i>cats</i>). It has a{" "}
                      <span className="font-medium">final form</span> (ץ) used
                      only at the end of words. The consonant stays “ts”; vowel
                      sounds come from the vowel marks that accompany it.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Regular Tzadi */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Regular
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          צ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “ts” sound
                        </div>
                      </div>

                      {/* Final Tzadi */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Final
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          ץ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Used at word end
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qof section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-purple-800 text-center">
                      Qof (ק)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “k” in modern Hebrew, like Kaf with dagesh.
                      Historical pronunciations may differ by tradition.
                    </p>
                  </div>
                </div>

                {/* Resh section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-800 text-center">
                      Resh (ר)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      The Hebrew “r”. In Israeli Hebrew it’s typically a uvular
                      or tapped “r” depending on speaker and context.
                    </p>
                  </div>
                </div>

                {/* Shin / Sin section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-blue-800 text-center">
                      Shin / Sin (שׁ / שׂ)
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      <span className="font-semibold text-blue-700">
                        Shin (שׁ)
                      </span>{" "}
                      is pronounced “sh,” while{" "}
                      <span className="font-semibold text-blue-700">
                        Sin (שׂ)
                      </span>{" "}
                      is pronounced “s.” The dot’s placement — right for Shin,
                      left for Sin — determines the sound.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Shin (right dot) */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Right dot
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          שׁ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “sh” sound
                        </div>
                      </div>

                      {/* Sin (left dot) */}
                      <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                        <div className="text-xs uppercase text-gray-500">
                          Left dot
                        </div>
                        <div dir="rtl" className="mt-2 text-4xl">
                          שׂ
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          “s” sound
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tav section */}
                <div className="mt-10">
                  <div className="rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-neutral-800 text-center">
                      Tav (ת)
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                      Pronounced “t” in modern Hebrew; there is no “th” contrast
                      in contemporary Israeli pronunciation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="vowels" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Vowels
                </h2>

                {/* Intro */}
                <p className="text-gray-700 max-w-3xl">
                  In pointed Hebrew (<span className="font-medium">niqqud</span>
                  ), vowels are written with small marks around/below
                  consonants. Below are the common sets for the{" "}
                  <span className="font-semibold text-blue-700">
                    “ah”
                  </span> and{" "}
                  <span className="font-semibold text-blue-700">“eh”</span>{" "}
                  sounds.
                </p>

                {/* ====== “Ah” family ====== */}
                <h3 className="mt-8 text-2xl font-bold text-blue-800 text-center">
                  “Ah” Vowels
                </h3>
                <p className="text-gray-700 text-center">
                  Kamatz, Patach, and Khataf Patach
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {/* Kamatz */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                    <h4 className="text-xl font-bold text-amber-900 text-center">
                      Kamatz — ָ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Usually a full/long “ah”.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אָ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Kamatz
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אָב
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          שָׁלוֹם
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      <span className="font-semibold">Note:</span>{" "}
                      <span className="italic">Kamatz Qatan</span>
                      &nbsp;(rare in modern beginner texts) sounds like “o”.
                      Here we treat Kamatz as “ah”.
                    </p>
                  </div>

                  {/* Patach */}
                  <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5">
                    <h4 className="text-xl font-bold text-rose-900 text-center">
                      Patach — ַ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A short, clear “ah”.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אַ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Patach
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אַבָּא
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          בַּיִת
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Khataf Patach */}
                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/60 p-5">
                    <h4 className="text-xl font-bold text-cyan-900 text-center">
                      Khataf Patach — ֲ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A very short/reduced “ah”, most often under gutturals: א ה
                      ח ע.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֲ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Khataf Patach
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          הֲיֵשׁ
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          עֲבוֹדָה
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      In some modern prints, it may appear like a plain sheva;
                      pronunciation stays a quick “ah”.
                    </p>
                  </div>
                </div>

                {/* Ah visual comparison */}
                <div className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50/60 p-6">
                  <h5 className="text-lg font-semibold text-indigo-900 text-center">
                    “Ah” Vowels at a Glance
                  </h5>
                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-3"
                    aria-label="Ah vowels comparison grid"
                  >
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Kamatz
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אָ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Full “ah”
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Patach
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אַ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Short “ah”
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Khataf Patach
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֲ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Very short “ah”
                      </div>
                    </li>
                  </ul>
                </div>

                {/* ====== “Eh” family ====== */}
                <h3 className="mt-12 text-2xl font-bold text-blue-800 text-center">
                  “Eh” Vowels
                </h3>
                <p className="text-gray-700 text-center">
                  Segol, Tsere, and Khataf Segol
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {/* Segol */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <h4 className="text-xl font-bold text-emerald-900 text-center">
                      Segol — ֶ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Short “eh” (like in <i>bed</i>).
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֶ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Segol
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          מֶלֶךְ
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          סֶפֶר
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Tsere */}
                  <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-5">
                    <h4 className="text-xl font-bold text-sky-900 text-center">
                      Tsere — ֵ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Long “e/eh” (often like English “ay” in <i>they</i>).
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֵ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Tsere
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אֵם
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          עֵץ
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      Often spelled with a helper{" "}
                      <span className="font-medium">י</span> (tsere-yod) in
                      unpointed text.
                    </p>
                  </div>

                  {/* Khataf Segol */}
                  <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
                    <h4 className="text-xl font-bold text-violet-900 text-center">
                      Khataf Segol — ֱ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Very short/reduced “eh”, typically under gutturals: א ה ח
                      ע.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֱ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Khataf Segol
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אֱמֶת
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          אֱלֹהִים
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      Like other “khataf” vowels, it’s a reduced vowel; some
                      prints simplify it visually.
                    </p>
                  </div>
                </div>

                {/* Eh visual comparison */}
                <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50/60 p-6">
                  <h5 className="text-lg font-semibold text-teal-900 text-center">
                    “Eh” Vowels at a Glance
                  </h5>
                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-3"
                    aria-label="Eh vowels comparison grid"
                  >
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Segol
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֶ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Short “eh”
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Tsere
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֵ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Long “e/eh”
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Khataf Segol
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֱ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Very short “eh”
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    Spelling in unpointed text varies; beginners should learn
                    the <span className="font-medium">sound first</span>, then
                    common spellings (e.g., tsere-yod).
                  </p>
                </div>

                {/* ====== “Ee” family ====== */}
                <h3 className="mt-12 text-2xl font-bold text-blue-800 text-center">
                  “Ee” Vowel
                </h3>
                <p className="text-gray-700 text-center">
                  Hiriq (also spelled{" "}
                  <span className="italic">Chirik/Hiriq</span>; you wrote
                  “Kheerek”) makes the{" "}
                  <span className="font-semibold text-blue-700">“ee”</span>{" "}
                  sound. Learn these two forms and you’re set.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {/* Hiriq (ִ) */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <h4 className="text-xl font-bold text-emerald-900 text-center">
                      Hiriq — ִ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A single dot <span className="font-semibold">under</span>{" "}
                      the consonant = “ee”.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אִ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Hiriq
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אִם
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          מִן
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Hiriq + Yod (ִי) */}
                  <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-5">
                    <h4 className="text-xl font-bold text-indigo-900 text-center">
                      Hiriq + Yod — ִי
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Hiriq followed by a{" "}
                      <span className="font-semibold">Yod</span> (with no vowel)
                      — the common way to spell long “ee” in everyday text.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        On Aleph + Yod
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אִי
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Hiriq + Yod
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          עִיר
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          שִׁיר
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      In unpointed spelling, the “ee” is usually written with{" "}
                      <span className="font-medium">י</span>.
                    </p>
                  </div>
                </div>

                {/* Ee quick glance */}
                <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50/60 p-6">
                  <h5 className="text-lg font-semibold text-teal-900 text-center">
                    “Ee” at a Glance
                  </h5>
                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-2"
                    aria-label="Ee vowels comparison grid"
                  >
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Hiriq
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אִ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        EE under the letter
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Hiriq + Yod
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אִי
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        EE + helper Yod
                      </div>
                    </li>
                  </ul>
                </div>
                {/* ====== “O” family ====== */}
                <h3 className="mt-12 text-2xl font-bold text-blue-800 text-center">
                  “O” Vowels
                </h3>
                <p className="text-gray-700 text-center">
                  These vowels make the{" "}
                  <span className="font-semibold text-blue-700">“o”</span>{" "}
                  sound:
                  <span className="font-medium"> Kholam Ḥaser</span> (dot only),
                  <span className="font-medium"> Kholam Male</span> (dot on
                  Vav), and
                  <span className="font-medium"> Khataf Kamatz</span> (ֳ).
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {/* Kholam Haser (ֹ) */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                    <h4 className="text-xl font-bold text-amber-900 text-center">
                      Kholam Ḥaser — ֹ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A single dot placed{" "}
                      <span className="font-semibold">above-left</span> of the
                      consonant = “o”.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֹ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Kholam Ḥaser
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          לֹא
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          חֹק
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Kholam Male (וֹ) */}
                  <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-5">
                    <h4 className="text-xl font-bold text-indigo-900 text-center">
                      Kholam Male — וֹ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Dot placed above a{" "}
                      <span dir="rtl" className="font-semibold">
                        ו
                      </span>{" "}
                      (Vav). This is the most common “o” spelling in everyday
                      Hebrew.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Vav with dot
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        וֹ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Vav + Kholam Male
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          קוֹל
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          דוֹד
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          חוֹל
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      In unpointed text, this is usually written with just a
                      plain ו.
                    </p>
                  </div>

                  {/* Khataf Kamatz (ֳ) */}
                  <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-5">
                    <h4 className="text-xl font-bold text-teal-900 text-center">
                      Khataf Kamatz — ֳ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A very short/reduced “o”, used mostly under gutturals (א,
                      ה, ח, ע).
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֳ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Khataf Kamatz
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          אֳנִיָּה
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          חֳלִי
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      Like other <span className="font-medium">khataf</span>{" "}
                      vowels, it’s a reduced form. In everyday speech, it’s
                      heard simply as a quick “o”.
                    </p>
                  </div>
                </div>

                {/* O quick glance */}
                <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50/60 p-6">
                  <h5 className="text-lg font-semibold text-purple-900 text-center">
                    “O” at a Glance
                  </h5>
                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-3"
                    aria-label="O vowels comparison grid"
                  >
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Kholam Ḥaser
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֹ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Dot above letter
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Kholam Male
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        וֹ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Dot on Vav
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Khataf Kamatz
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֳ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Quick “o” under guttural
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    Helpful to distinguish from{" "}
                    <span className="font-medium">Shuruk/Qubutz</span> (“u/oo”).
                  </p>
                </div>

                {/* ====== “U / OO” family ====== */}
                <h3 className="mt-12 text-2xl font-bold text-blue-800 text-center">
                  “OO” Vowels
                </h3>
                <p className="text-gray-700 text-center">
                  These make the{" "}
                  <span className="font-semibold text-blue-700">“oo”</span>{" "}
                  sound:
                  <span className="font-medium"> Shuruk</span> (dot in{" "}
                  <span dir="rtl">וּ</span>) and
                  <span className="font-medium"> Qubutz</span> (ֻ under the
                  letter).
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {/* Shuruk (ּו) */}
                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/60 p-5">
                    <h4 className="text-xl font-bold text-cyan-900 text-center">
                      Shuruk — וּ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      A dot <span className="font-semibold">inside</span> the{" "}
                      <span dir="rtl">ו</span> (Vav) = “oo”. This is the most
                      common “u” in everyday spelling.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Vav with dot
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        וּ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">Shuruk</div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          שׁוּק
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          לוּלָב
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      In unpointed text, this sound is usually written with a
                      plain <span dir="rtl">ו</span>.
                    </p>
                  </div>

                  {/* Qubutz (ֻ) */}
                  <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
                    <h4 className="text-xl font-bold text-violet-900 text-center">
                      Qubutz — ֻ
                    </h4>
                    <p className="mt-2 text-gray-700 text-sm text-center">
                      Three diagonal dots{" "}
                      <span className="font-semibold">under</span> the consonant
                      = “u/oo”.
                    </p>
                    <div className="mt-4 rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Symbol on Aleph
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֻ
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Aleph + Qubutz
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">
                      <div className="font-medium">Examples:</div>
                      <ul className="list-disc ms-5 mt-1 space-y-1">
                        <li dir="rtl" className="text-lg leading-none">
                          שֻׁלְחָן
                        </li>
                        <li dir="rtl" className="text-lg leading-none">
                          סֻכָּר
                        </li>
                      </ul>
                    </div>
                    <p className="mt-3 text-xs text-gray-600">
                      Functionally the same sound as Shuruk; Qubutz appears
                      under the letter rather than in a Vav.
                    </p>
                  </div>
                </div>

                {/* U quick glance */}
                <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50/60 p-6">
                  <h5 className="text-lg font-semibold text-teal-900 text-center">
                    “OO” at a Glance
                  </h5>
                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-2"
                    aria-label="U vowels comparison grid"
                  >
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Shuruk
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        וּ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Dot inside Vav
                      </div>
                    </li>
                    <li className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Qubutz
                      </div>
                      <div dir="rtl" className="mt-1 text-4xl leading-none">
                        אֻ
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Three dots below
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    Quick check: <span className="font-medium">וּ</span> is
                    Shuruk (on Vav); <span className="font-medium">ֻ</span> is
                    Qubutz (under a letter).
                  </p>
                </div>

                {/* ====== Shva ====== */}
                <h3 className="mt-12 text-2xl font-bold text-blue-800 text-center">
                  Shva
                </h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto">
                  The <span className="font-semibold text-blue-700">Shva</span>{" "}
                  is two vertical dots under a letter. It can be either{" "}
                  <span className="font-medium">silent (Shva Nach)</span> or{" "}
                  <span className="font-medium">pronounced “eh” (Shva Na)</span>
                  .
                  <br />
                  Usually Shva is silent, but below are the four cases where it
                  makes the "eh" sound.
                </p>

                <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/60 p-6">
                  <h4 className="text-lg font-bold text-amber-900 text-center">
                    When is Shva pronounced “eh”?
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    Shva makes an <span className="font-semibold">“eh”</span>{" "}
                    sound in these common cases:
                  </p>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Case 1 */}
                    <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        At start of word
                      </div>
                      <div dir="rtl" className="mt-2 text-3xl leading-none">
                        בְּרֵאשִׁית
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        “bereshit” = in the beginning
                      </div>
                    </li>
                    {/* Case 2 */}
                    <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        After a prefix
                      </div>
                      <div dir="rtl" className="mt-2 text-3xl leading-none">
                        וּרְאֵה
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        “u-re&amp;eh” = and see
                      </div>
                    </li>
                    {/* Case 3 */}
                    <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        Under dagesh letter
                      </div>
                      <div dir="rtl" className="mt-2 text-3xl leading-none">
                        לַמְּדֵנִי
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        “lammedeni” = teach me
                      </div>
                    </li>
                    {/* Case 4 */}
                    <li className="rounded-lg bg-white border border-gray-200 p-4 text-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        First of double letters
                      </div>
                      <div dir="rtl" className="mt-2 text-3xl leading-none">
                        הַלְלוּיָהּ
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        “halleluyah”
                      </div>
                    </li>
                  </ul>
                </div>
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
