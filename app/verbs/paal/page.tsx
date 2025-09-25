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

          {/* Present tense */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              The Present Tense (הווה)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Paal, the present tense is formed directly from the root with
              specific endings depending on gender and number.
            </p>

            {/* Masculine Singular */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              Masculine Singular
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A ו (vav) is introduced between the first and second letters of
              the root:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → פּוֹגֵשׁ (
                <span className="font-semibold">Pogesh</span>) – he meets
              </li>
              <li dir="ltr">
                Root: סגר → סוֹגֵר (<span className="font-semibold">Soger</span>
                ) – he closes
              </li>
            </ul>

            {/* Feminine Singular */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              Feminine Singular
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Formed from the masculine singular with an added{" "}
              <span className="font-semibold">ת</span> (tav) at the end:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → פּוֹגֶשֶׁת (
                <span className="font-semibold">Pogeshet</span>) – she meets
              </li>
              <li dir="ltr">
                Root: סגר → סוֹגֶרֶת (
                <span className="font-semibold">Sogeret</span>) – she closes
              </li>
            </ul>

            {/* Masculine Plural */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              Masculine Plural
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Formed from the masculine singular with{" "}
              <span className="font-semibold">ים</span> (<i>-im</i>) at the end:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → פּוֹגְשִׁים (
                <span className="font-semibold">Pogshim</span>) – they (m.) meet
              </li>
              <li dir="ltr">
                Root: סגר → סוֹגְרִים (
                <span className="font-semibold">Sogrim</span>) – they (m.) close
              </li>
            </ul>

            {/* Feminine Plural */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              Feminine Plural
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Formed from the masculine singular, but instead of{" "}
              <span className="font-semibold">ים</span> (<i>-im</i>), the ending{" "}
              <span className="font-semibold">וֹת</span> (<i>-ot</i>) is used:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → פּוֹגְשׁוֹת (
                <span className="font-semibold">Pogshot</span>) – they (f.) meet
              </li>
              <li dir="ltr">
                Root: סגר → סוֹגְרוֹת (
                <span className="font-semibold">Sogrot</span>) – they (f.) close
              </li>
            </ul>

            {/* Note about Paal uniqueness */}
            <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
              <p className="text-gray-700 leading-relaxed">
                Only <span className="font-semibold">Paal verbs</span> begin the
                present tense directly with the first letter of their root.
                Verbs in other binyanim typically begin with{" "}
                <span className="font-semibold">מ</span> (mem) or{" "}
                <span className="font-semibold">נ</span> (nun).
              </p>
            </div>
          </div>

          {/* Present tense exceptions */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Exceptions in the Present Tense
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some roots do not follow the usual present tense rules. The main
              exceptions occur with roots that contain י (yod) in the middle,
              roots with ו (vav) in the middle, or roots that end in ה (hey).
            </p>

            {/* 1. Yod in the middle */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              1. Yod (י) in the middle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The middle י (yod) of the root is eliminated in the present tense.
              In the feminine singular, an additional{" "}
              <span className="font-semibold">ה</span> (hey) is added at the
              end.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: שיר → שָׁר (<span className="font-semibold">Shar</span>) –
                he sings
              </li>
              <li dir="ltr">
                Root: שיר → שָׁרָה (<span className="font-semibold">Shara</span>
                ) – she sings
              </li>
              <li dir="ltr">
                Root: שיר → שָׁרִים / שָׁרוֹת (
                <span className="font-semibold">Sharim / Sharot</span>) – they
                sing
              </li>
              <li dir="ltr">
                Root: שים → שָׂם (<span className="font-semibold">Sam</span>) –
                he puts
              </li>
              <li dir="ltr">
                Root: שים → שָׂמָה (<span className="font-semibold">Sama</span>)
                – she puts
              </li>
              <li dir="ltr">
                Root: שים → שָׂמִים / שָׂמוֹת (
                <span className="font-semibold">Samim / Samot</span>) – they put
              </li>
            </ul>

            {/* 2. Vav in the middle */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              2. Vav (ו) in the middle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The ו (vav) in the middle of the root is removed in the present
              tense. In the feminine singular, a{" "}
              <span className="font-semibold">ה</span> (hey) is added at the
              end.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: טוס → טָס (<span className="font-semibold">Tas</span>) –
                he flies
              </li>
              <li dir="ltr">
                Root: טוס → טָסָה (<span className="font-semibold">Tasa</span>)
                – she flies
              </li>
              <li dir="ltr">
                Root: טוס → טָסִים / טָסוֹת (
                <span className="font-semibold">Tasim / Tasot</span>) – they fly
              </li>
              <li dir="ltr">
                Root: גור → גָּר (<span className="font-semibold">Gar</span>) –
                he lives
              </li>
              <li dir="ltr">
                Root: גור → גָּרָה (<span className="font-semibold">Gara</span>)
                – she lives
              </li>
              <li dir="ltr">
                Root: גור → גָּרִים / גָּרוֹת (
                <span className="font-semibold">Garim / Garot</span>) – they
                live
              </li>
            </ul>

            {/* 3. Hey at the end */}
            <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
              3. Hey (ה) at the end
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When the root ends in ה, a{" "}
              <span className="font-semibold">ו</span> (vav) is placed between
              the first and second letters of the root. For the plural forms,
              the final ה is deleted and replaced with{" "}
              <span className="font-semibold">ים</span> (-im) or{" "}
              <span className="font-semibold">וֹת</span> (-ot) as usual.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li dir="ltr">
                Root: קנה → קוֹנֶה (<span className="font-semibold">Kone</span>)
                – he buys
              </li>
              <li dir="ltr">
                Root: קנה → קוֹנָה (<span className="font-semibold">Kona</span>)
                – she buys
              </li>
              <li dir="ltr">
                Root: קנה → קוֹנִים / קוֹנוֹת (
                <span className="font-semibold">Konim / Konot</span>) – they buy
              </li>
              <li dir="ltr">
                Root: בנה → בּוֹנֶה (<span className="font-semibold">Bone</span>
                ) – he builds
              </li>
              <li dir="ltr">
                Root: בנה → בּוֹנָה (<span className="font-semibold">Bona</span>
                ) – she builds
              </li>
              <li dir="ltr">
                Root: בנה → בּוֹנִים / בּוֹנוֹת (
                <span className="font-semibold">Bonim / Bonot</span>) – they
                build
              </li>
            </ul>
          </div>

          {/* Past tense */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              The Past Tense (עבר)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Hebrew, the name of each binyan serves as a guide to the vowels
              used in the{" "}
              <span className="font-semibold">
                3rd person masculine singular past tense
              </span>{" "}
              of its verbs. For Paal (פעל), the pattern is shown in the word{" "}
              <span className="font-semibold">פָּעַל</span> (paʿal), with a{" "}
              <span className="font-semibold">קמץ</span> (kamatz) under the
              first letter פ and a <span className="font-semibold">פתח</span>{" "}
              (patach) under the middle letter ע.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              This vowel structure guides how the root is vocalized in the past
              tense. Let’s look at two examples:
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li dir="ltr">
                Root: פגש → פָּגַשׁ (
                <span className="font-semibold">Pagash</span>) – he met
              </li>
              <li dir="ltr">
                Root: סגר → סָגַר (<span className="font-semibold">Sagar</span>)
                – he closed
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Both verbs follow the same vowel pattern from פָּעַל: the first
              syllable takes a kamatz, and the second syllable takes a patach.
              This makes the past tense form predictable for regular Paal verbs.
            </p>
          </div>

          {/* Past tense full conjugation */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Paal Past Tense Conjugation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In the past tense, each subject pronoun has its own distinctive
              ending. The 3rd person masculine singular form (הוּא – “he”) is
              considered the
              <span className="font-semibold"> root form</span>, since it does
              not change from the base pattern.
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li dir="ltr">
                <span className="font-semibold">אני</span> (ani, “I”) → ends
                with <span className="font-semibold">תי</span> (<i>-ti</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">אתה</span> (ata, “you m.s.”) →
                ends with <span className="font-semibold">תָ</span> (<i>-ta</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">את</span> (at, “you f.s.”) →
                ends with <span className="font-semibold">תְ</span> (<i>-t</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">הוא</span> (hu, “he”) →
                unchanged (root form)
              </li>
              <li dir="ltr">
                <span className="font-semibold">היא</span> (hi, “she”) → adds{" "}
                <span className="font-semibold">ה</span> (<i>-ah</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">אנחנו</span> (anachnu, “we”) →
                ends with <span className="font-semibold">נוּ</span> (<i>-nu</i>
                )
              </li>
              <li dir="ltr">
                <span className="font-semibold">אתם</span> (atem, “you m.pl.”) →
                ends with <span className="font-semibold">תֶם</span> (
                <i>-tem</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">אתן</span> (aten, “you f.pl.”) →
                ends with <span className="font-semibold">תֶן</span> (
                <i>-ten</i>)
              </li>
              <li dir="ltr">
                <span className="font-semibold">הם / הן</span> (hem/hen, “they”)
                → ends with <span className="font-semibold">וּ</span> (<i>-u</i>
                )
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-6 mb-4">
              Let’s use the root <span className="font-semibold">למד</span>{" "}
              (Lamad – “he learned”) as our example to see how these endings
              attach in the past tense:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Person
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
                    <td className="border border-gray-300 px-4 py-2">
                      1st sg. (אני)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמַדְתִּי
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lamadti
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      I learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      2nd sg. m. (אַתָּה)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמַדְתָּ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lamadtá
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      You (m.s.) learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      2nd sg. f. (אַתְּ)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמַדְתְּ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Lamadt</td>
                    <td className="border border-gray-300 px-4 py-2">
                      You (f.s.) learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      3rd sg. m. (הוּא)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">לָמַד</td>
                    <td className="border border-gray-300 px-4 py-2">Lamad</td>
                    <td className="border border-gray-300 px-4 py-2">
                      He learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      3rd sg. f. (הִיא)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמְדָה
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Lamda</td>
                    <td className="border border-gray-300 px-4 py-2">
                      She learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      1st pl. (אֲנַחְנוּ)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמַדְנוּ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lamadnu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      We learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      2nd pl. m. (אַתֶּם)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לְמַדְתֶּם
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lamadtém
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      You (m.pl.) learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      2nd pl. f. (אַתֵּן)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לְמַדְתֶּן
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lamadtén
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      You (f.pl.) learned
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      3rd pl. (הֵם / הֵן)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      לָמְדוּ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Lamdu</td>
                    <td className="border border-gray-300 px-4 py-2">
                      They learned
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
