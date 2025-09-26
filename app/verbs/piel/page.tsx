// app/verbs/piel/page.tsx
export default function PielPage() {
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
                    href="#piel-verb"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#piel-sound"
                    className="block px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700"
                  >
                    How Piel Affects Sound
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
                    Infinitive Exceptions
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Overview */}
            <section id="piel-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Piel (פִּעֵל) - Intensive/Iterative Active Verb
              </h1>

              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Piel binyan
                  </span>{" "}
                  is
                  <span className="font-semibold"> always active</span>. It
                  often expresses an
                  <span className="font-semibold"> intensive</span> or{" "}
                  <span className="font-semibold">
                    iterative/causative-like
                  </span>{" "}
                  nuance compared with
                  <span className="font-semibold"> Paal</span>, and is sometimes
                  described as “casual” in modern usage when its the frequent,
                  everyday form.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  When a root exists in both Paal and Piel,{" "}
                  <span className="font-semibold">
                    Piel tends to be the comparative/intensive
                  </span>
                  . Example with the root{" "}
                  <span className="font-semibold">קפץ</span>:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    <span className="font-semibold">Paal:</span> לִקְפּוֹץ — “to
                    jump”
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">Piel:</span> לְקַפֵּץ — “to
                    bounce”
                  </li>
                </ul>
              </div>
            </section>

            {/* Piel sound */}
            <section id="piel-sound" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  How Piel Affects Sound
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In Piel, the{" "}
                  <span className="font-semibold">
                    middle root letter is doubled
                  </span>
                  (marked by a dagesh), creating a stronger sound and a
                  characteristic vowel pattern. This is why you’ll hear forms
                  like <span className="font-semibold">דִּבֵּר</span> (
                  <i>diber</i>, “he spoke” from{" "}
                  <span className="font-semibold">דבר</span>) and{" "}
                  <span className="font-semibold">בִּקֵּר</span> (<i>biker</i>,
                  “he visited” from <span className="font-semibold">בקר</span>).
                </p>
              </div>
            </section>

            {/* Infinitive */}
            <section id="infinitive" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  The Infinitive (שם הפועל)
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To form the{" "}
                  <span className="font-semibold">Piel infinitive</span>, place{" "}
                  <span className="font-semibold">ל</span> (lamed, “to”) before
                  the Piel stem of the root:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li dir="ltr">
                    דיבר → <span className="font-semibold">לְדַבֵּר</span> (
                    <span className="font-semibold">ledaber</span>) — to speak
                  </li>
                  <li dir="ltr">
                    שילם → <span className="font-semibold">לְשַׁלֵּם</span> (
                    <span className="font-semibold">leshalem</span>) — to pay
                  </li>
                </ul>
              </div>
            </section>

            {/* Infinitive exceptions */}
            <section id="infinitive-exceptions" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Infinitive Exceptions (Piel)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Four common patterns adjust the Piel infinitive spelling and
                  sound:
                  <span className="font-semibold">
                    {" "}
                    (1) Yod as 1st root letter
                  </span>
                  ,
                  <span className="font-semibold">
                    {" "}
                    (2) Yod as 2nd root letter
                  </span>
                  ,
                  <span className="font-semibold">
                    {" "}
                    (3) Vav as 2nd root letter
                  </span>
                  , and
                  <span className="font-semibold"> (4) final Hey</span>.
                </p>

                {/* 1 + 2: Yod first/second letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-2 mb-2">
                  1) Yod as 1st letter · 2) Yod as 2nd letter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After adding <span className="font-semibold">ל</span> before
                  the root, the{" "}
                  <span className="font-semibold">
                    existing י (yod) in the root is doubled
                  </span>{" "}
                  in the Piel stem (you’ll see/feel a strengthened “y” sound).
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    <span className="font-semibold">Root starts with י</span> —
                    ייצג → <span className="font-semibold">לְיַצֵּג</span> (
                    <span className="font-semibold">leyatseg</span>) — “to
                    represent”
                  </li>
                  <li dir="ltr">
                    <span className="font-semibold">Yod in the middle</span> —
                    חייג → <span className="font-semibold">לְחַיֵּג</span> (
                    <span className="font-semibold">lechayeg</span>) — “to dial”
                  </li>
                </ul>

                {/* 3: Vav as 2nd letter */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  3) Vav as 2nd letter of the root
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When the middle letter is{" "}
                  <span className="font-semibold">ו</span> (vav), in Piel it is{" "}
                  <span className="font-semibold">replaced by a doubled י</span>{" "}
                  (י״י) in the stem.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    חייב (historically with a “w/y” glide) →{" "}
                    <span className="font-semibold">לְחַיֵּב</span> (
                    <span className="font-semibold">lechayev</span>) — “to
                    obligate”
                  </li>
                </ul>

                {/* 4: Final Hey */}
                <h3 className="text-xl font-semibold text-indigo-700 mt-6 mb-2">
                  4) Root ends with ה (Hey)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Final <span className="font-semibold">ה</span> is replaced by{" "}
                  <span className="font-semibold">ו + ת</span> (→{" "}
                  <span className="font-semibold">וֹת</span>) in the infinitive.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li dir="ltr">
                    נקה → <span className="font-semibold">לְנַקּוֹת</span> (
                    <span className="font-semibold">lenakot</span>) — “to clean”
                  </li>
                  <li dir="ltr">
                    שנה → <span className="font-semibold">לְשַׁנּוֹת</span> (
                    <span className="font-semibold">leshanot</span>) — “to
                    change”
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
