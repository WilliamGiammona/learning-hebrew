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
          </main>
        </div>
      </div>
    </div>
  );
}
