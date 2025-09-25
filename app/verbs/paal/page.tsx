// app/verbs/paal/page.tsx
export default function PaalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section id="paal-verb" className="mb-12 scroll-mt-20">
          <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Paal (פעל) – The Simple Active Verb
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            The <span className="font-semibold text-blue-700">Paal binyan</span>{" "}
            is the simplest and most basic of all Hebrew verb patterns. Paal
            verbs are always <span className="font-semibold">active</span>, and
            they usually describe simple actions such as meeting, closing,
            eating, or going.
          </p>

          {/* Infinitive explanation */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              The Infinitive (שם הפועל)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To form the infinitive in Paal, place a{" "}
              <span className="font-semibold">ל</span> (lamed, “to”) before the
              first letter of the root, and insert a{" "}
              <span className="font-semibold">ו</span> (vav) between the second
              and third letters:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → לִפְגּוֹשׁ (
                <span className="font-semibold">Lifgosh</span>) – to meet
              </li>
              <li dir="ltr">
                Root: סגר → לִסְגוֹר (
                <span className="font-semibold">Lisgor</span>) – to close
              </li>
            </ul>
          </div>

          {/* Exceptions */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Exceptions in Paal Infinitives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most Paal infinitives follow the rule above, but these four common
              patterns differ:
            </p>

            {/* 1. Yod at the beginning */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              1. Root starting with Yod (י)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              After adding ל (lamed), the initial י (yod) is dropped and a{" "}
              <span className="font-semibold">ת</span> (tav) is added at the
              end:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: ישב → לָשֶׁבֶת (
                <span className="font-semibold">Lashevet</span>) – to sit
              </li>
              <li dir="ltr">
                Root: ירד → לָרֶדֶת (
                <span className="font-semibold">Laredet</span>) – to go down
              </li>
            </ul>

            {/* 2. Yod in the middle */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              2. Yod (י) in the middle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Only ל (lamed) is added before the root; no ו (vav) is inserted:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: שיר → לָשִׁיר (
                <span className="font-semibold">Lashir</span>) – to sing
              </li>
              <li dir="ltr">
                Root: שים → לָשִׂים (
                <span className="font-semibold">Lasim</span>) – to put
              </li>
            </ul>

            {/* 3. Vav in the middle */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              3. Vav (ו) in the middle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Again, only ל (lamed) is placed before the root:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: בוא → לָבוֹא (<span className="font-semibold">Lavo</span>)
                – to come
              </li>
              <li dir="ltr">
                Root: גור → לָגוּר (<span className="font-semibold">Lagur</span>
                ) – to live
              </li>
            </ul>

            {/* 4. Hey at the end */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              4. Hey (ה) at the end
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Add ל (lamed) before the root, and replace the final ה with{" "}
              <span className="font-semibold">ו</span> +{" "}
              <span className="font-semibold">ת</span>:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: בכה → לִבְכּוֹת (
                <span className="font-semibold">Livkot</span>) – to cry
              </li>
              <li dir="ltr">
                Root: בנה → לִבְנוֹת (
                <span className="font-semibold">Livnot</span>) – to build
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
