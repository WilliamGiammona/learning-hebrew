// app/verbs/nifal/page.tsx
export default function NifalPage() {
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
                    href="#nifal-verb"
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
            <section id="nifal-verb" className="mb-12 scroll-mt-20">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Nifal (נפעל) – The Passive / Medial Counterpart to Paal
              </h1>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed">
                  The{" "}
                  <span className="font-semibold text-blue-700">
                    Nifal binyan
                  </span>{" "}
                  is the primary <span className="font-semibold">passive</span>{" "}
                  (and often reflexive/“middle”) counterpart of{" "}
                  <span className="font-semibold">Paal</span>. Where Paal
                  typically means “to do X,” Nifal often means “to be X’ed” or
                  “to get/become X.” For example, “to close” (Paal) versus “to
                  be closed” (Nifal).
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
                  In Nifal, the infinitive is formed by placing the sequence{" "}
                  <span className="font-semibold">להי</span> before the root.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li dir="ltr">
                    Root: <span className="font-semibold">כנס</span> →{" "}
                    <span className="font-semibold">להיכנס</span> (
                    <i>lehikanes</i>) – “to enter”
                  </li>
                  <li dir="ltr">
                    Root: <span className="font-semibold">שאר</span> →{" "}
                    <span className="font-semibold">להישאר</span> (
                    <i>lehishe&apos;er</i>) – “to remain/stay”
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
