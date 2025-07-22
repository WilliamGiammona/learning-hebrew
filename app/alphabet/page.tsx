//app/alphabet/page.tsx

import Image from "next/image";

const Alphabet = () => {
  const sections = [
    { id: "formal-letters", title: "Formal Letters" },
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
            <section id="formal-letters" className="mb-12 scroll-mt-20">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
                  The Hebrew Alphabet
                </h1>
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

                {/* Hebrew Alphabet Chart */}
                <div className="mt-8">
                  <div className="relative w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                    <Image
                      src="/images/alphabet/formal-alphabet.png"
                      alt="Hebrew Alphabet Chart"
                      width={1200}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>

                  <p className="text-sm text-gray-600 text-center mt-3">
                    The 22 letters of the Hebrew alphabet with their names and
                    forms
                  </p>
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
