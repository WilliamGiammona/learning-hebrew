// app/religious-history/page.tsx
import React from "react";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "abraham", title: "Abraham" },
  { id: "twelve-tribes", title: "Twelve Tribes of Israel" },
  { id: "egyptian-slavery", title: "Egyptian Slavery & Exodus" },
  { id: "moses", title: "Moses" },
  { id: "torah", title: "Giving of the Torah" },
  { id: "into-israel", title: "Conquest & Settlement" },
  { id: "twelve-tribes-divided", title: "Tribal Period & Judges" },
  { id: "philistines", title: "Philistines" },
  { id: "saul", title: "King Saul" },
  { id: "civil-war", title: "Civil War & Succession" },
  { id: "king-david", title: "King David" },
  { id: "solomon", title: "King Solomon" },
  { id: "two-states-samaritans", title: "Split Kingdom & Samaritans" },
  { id: "tanach", title: "Tanach (Hebrew Bible)" },
  { id: "assyrian-invasion", title: "Assyrian Invasion" },
  { id: "babylonian-captivity", title: "Babylonian Exile" },
  { id: "return-to-israel", title: "Return & Second Temple" },
  { id: "macedon", title: "Persia to Macedon (Alexander)" },
  { id: "hasmonean-kingdom", title: "Hasmonean Kingdom" },
  { id: "pompey", title: "Rome: Pompey & Client Kings" },
  { id: "herod", title: "Herod the Great" },
  { id: "jesus-3-sects", title: "Second Temple Sects" },
  { id: "first-revolt", title: "Great Revolt (66–73 CE)" },
  { id: "bar-kochba-revolt", title: "Bar Kokhba Revolt (132–135 CE)" },
  { id: "ashk-seph-miz-eth", title: "Jewish Diasporas" },
  { id: "yehuda-hanasi", title: "Yehuda HaNasi & Mishnah" },
  { id: "karaite-jews", title: "Karaite Judaism" },
  { id: "two-talmuds", title: "Two Talmuds" },
  { id: "sephardic-jews", title: "Sephardic Golden Age" },
  { id: "maimonides", title: "Maimonides (Rambam)" },
  { id: "kabbalah", title: "Kabbalah & Safed" },
  { id: "shulchan-aruch", title: "Shulchan Aruch" },
  { id: "ashkenazi-power", title: "Ashkenazi Centers" },
  { id: "hasidic", title: "Hasidic Movement" },
  { id: "litvish", title: "Mitnagdim / Litvish" },
  { id: "rabbi-kook", title: "Rabbi Kook & Religious Zionism" },
  { id: "rabbi-kahane", title: "Rabbi Kahane" },
  { id: "ovadia-yosef", title: "Rabbi Ovadia Yosef" },
  { id: "modern-israel", title: "Modern Israel" },
];

export default function JewishHistory() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto lg:flex lg:gap-8">
        {/* TOC */}
        <aside className="lg:w-72 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 lg:sticky lg:top-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">
              Jewish History — A Concise Guide
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A streamlined tour through the religious and historical journey of
              the Jewish people — from the Patriarchs and the Temple periods to
              Diaspora cultures and the modern State of Israel.
            </p>
          </header>

          {/* Overview */}
          <section id="overview" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jewish history intertwines a people, a land (Israel), and a
                covenantal faith (Judaism). Core themes include: revelation
                (Torah), Temple and sacrifice, rabbinic scholarship, dispersions
                and returns, and a persistent cultural-religious identity
                expressed in law (Halacha), language (Hebrew), and communal
                life.
              </p>
            </div>
          </section>

          {/* Abraham */}
          <section id="abraham" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">Abraham</h2>
              <p className="text-gray-700 leading-relaxed">
                Abraham, from Ur (Mesopotamia), is called by God to journey to
                Canaan. He is the first to enter into a covenant promising land
                and descendants. He fathers{" "}
                <span className="font-semibold">Isaac</span> (ancestral line of
                the Jewish people) and{" "}
                <span className="font-semibold">Ishmael</span>. The Jewish
                tradition traces its covenantal story through Abraham → Isaac →
                Jacob.
              </p>
            </div>
          </section>

          {/* Twelve Tribes */}
          <section id="twelve-tribes" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Twelve Tribes of Israel
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Jacob (Israel) has twelve sons, founding tribes bearing their
                names: Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher,
                Issachar, Zebulun, Joseph (Ephraim & Manasseh), and Benjamin.
                These tribes form the social-religious fabric of ancient Israel.
              </p>
            </div>
          </section>

          {/* Egyptian Slavery & Exodus */}
          <section id="egyptian-slavery" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Egyptian Slavery & Exodus
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A famine leads Jacob&apos;s family to Egypt; over generations,
                Israelites are enslaved. The Exodus — led by Moses — becomes
                Judaism&apos;s founding tale of liberation and divine
                redemption, memorialized annually at Passover.
              </p>
            </div>
          </section>

          {/* Moses */}
          <section id="moses" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">Moses</h2>
              <p className="text-gray-700 leading-relaxed">
                Moses leads Israel out of Egypt, mediates the covenant at Sinai,
                and establishes Israel&apos;s legal-religious order. His brother
                Aaron serves as High Priest, inaugurating the priestly (Cohen)
                line.
              </p>
            </div>
          </section>

          {/* Torah */}
          <section id="torah" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Giving of the Torah
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Torah (Five Books of Moses) is given at Sinai, forming the
                core of Jewish law, narrative, and theology. It anchors Jewish
                life through commandments (mitzvot) and covenantal ethics.
              </p>
            </div>
          </section>

          {/* Conquest & Settlement */}
          <section id="into-israel" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Conquest & Settlement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Under Joshua, Israelites enter and settle Canaan. Tribal
                territories are apportioned, with Levi serving priestly roles
                across cities instead of holding a territorial portion.
              </p>
            </div>
          </section>

          {/* Judges */}
          <section id="twelve-tribes-divided" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Tribal Period & Judges
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Before kingship, charismatic leaders (“Judges”) arise to defend
                Israel and restore justice. This period highlights cycles of
                crisis, repentance, and deliverance.
              </p>
            </div>
          </section>

          {/* Philistines */}
          <section id="philistines" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Philistines
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A powerful coastal people, often in conflict with Israel during
                the Judges and early monarchy. The David-Goliath tale epitomizes
                this rivalry.
              </p>
            </div>
          </section>

          {/* Saul */}
          <section id="saul" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                King Saul
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Israel&apos;s first king. His reign unifies tribes against
                external threats but ends tragically, paving the way for
                David&apos;s ascent.
              </p>
            </div>
          </section>

          {/* Civil War */}
          <section id="civil-war" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Civil War & Succession
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Transition from Saul&apos;s house to David involves turmoil and
                brief internal conflict; David consolidates rule from Jerusalem.
              </p>
            </div>
          </section>

          {/* David */}
          <section id="king-david" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                King David
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Establishes Jerusalem as political and spiritual capital, brings
                the Ark, composes Psalms by tradition, and forges a dynasty
                central to messianic hopes.
              </p>
            </div>
          </section>

          {/* Solomon */}
          <section id="solomon" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                King Solomon
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Builds the First Temple, expands learning and trade. His later
                policies burden the people, contributing to the later split.
              </p>
            </div>
          </section>

          {/* Split Kingdom */}
          <section id="two-states-samaritans" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Split Kingdom & Samaritans
              </h2>
              <p className="text-gray-700 leading-relaxed">
                After Solomon, the kingdom divides: Israel (north) and Judah
                (south). The Samaritans emerge with related yet distinct
                traditions centered on Mount Gerizim.
              </p>
            </div>
          </section>

          {/* Tanach */}
          <section id="tanach" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Tanach (Hebrew Bible)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The canon comprises Torah (Law), Nevi&apos;im (Prophets), and
                Ketuvim (Writings). It preserves Israel&apos;s covenantal
                narrative, law, prophecy, and wisdom.
              </p>
            </div>
          </section>

          {/* Assyrian */}
          <section id="assyrian-invasion" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Assyrian Invasion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Assyria conquers the northern kingdom (722 BCE). The “Ten Lost
                Tribes” are exiled; Judah survives longer, centered in
                Jerusalem.
              </p>
            </div>
          </section>

          {/* Babylon */}
          <section id="babylonian-captivity" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Babylonian Exile
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Babylon destroys the First Temple (586 BCE) and exiles elites to
                Babylon. Prophets (e.g., Jeremiah, Ezekiel) reinterpret covenant
                in exile.
              </p>
            </div>
          </section>

          {/* Return */}
          <section id="return-to-israel" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Return & Second Temple
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Under Persian edicts (Cyrus), exiles return, rebuild the Temple,
                and renew communal life (Ezra-Nehemiah). The Second Temple era
                begins.
              </p>
            </div>
          </section>

          {/* Macedon */}
          <section id="macedon" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Persia to Macedon (Alexander)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Alexander the Great spreads Hellenistic culture. Jewish
                communities navigate Greek influence while maintaining Torah
                observance.
              </p>
            </div>
          </section>

          {/* Hasmoneans */}
          <section id="hasmonean-kingdom" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Hasmonean Kingdom
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Maccabean revolt resists forced Hellenization; the Temple is
                rededicated (Hanukkah). A brief independent dynasty follows.
              </p>
            </div>
          </section>

          {/* Rome: Pompey */}
          <section id="pompey" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Rome: Pompey & Client Kings
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rome asserts control (63 BCE). Judea becomes a client kingdom,
                later a province.
              </p>
            </div>
          </section>

          {/* Herod */}
          <section id="herod" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Herod the Great
              </h2>
              <p className="text-gray-700 leading-relaxed">
                An Idumean client-king famed for massive building projects,
                including a grand renovation of the Second Temple.
              </p>
            </div>
          </section>

          {/* Sects */}
          <section id="jesus-3-sects" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Second Temple Sects
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pharisees (proto-rabbinic), Sadducees (priestly/Temple-focused),
                Essenes (ascetic communities), and others represent diverse
                approaches to law, Temple, and sectarian purity.
              </p>
            </div>
          </section>

          {/* Great Revolt */}
          <section id="first-revolt" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Great Revolt (66-73 CE)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A major uprising against Rome culminates in the destruction of
                the Second Temple (70 CE). Judaism pivots from Temple worship to
                Torah prayer community under rabbinic leadership.
              </p>
            </div>
          </section>

          {/* Bar Kokhba */}
          <section id="bar-kochba-revolt" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Bar Kokhba Revolt (132-135 CE)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A final, fierce rebellion leads to devastation, bans on Jewish
                presence in Jerusalem, and the renaming of Judea to “Syria
                Palaestina.”
              </p>
            </div>
          </section>

          {/* Diasporas */}
          <section id="ashk-seph-miz-eth" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Jewish Diasporas
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Over centuries, distinct communities develop:{" "}
                <span className="font-semibold">Ashkenazi</span>{" "}
                (Central/Eastern Europe),{" "}
                <span className="font-semibold">Sephardi</span> (Iberia &
                Mediterranean), <span className="font-semibold">Mizrahi</span>{" "}
                (Middle East), and{" "}
                <span className="font-semibold">Ethiopian</span> Jewry — each
                with liturgy, melodies, customs, and scholarship.
              </p>
            </div>
          </section>

          {/* Yehuda HaNasi */}
          <section id="yehuda-hanasi" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Yehuda HaNasi & the Mishnah
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Around 200 CE, Rabbi Yehuda HaNasi compiles the{" "}
                <span className="font-semibold">Mishnah</span>, organizing Oral
                Law into tractates — a cornerstone of rabbinic Judaism.
              </p>
            </div>
          </section>

          {/* Karaites */}
          <section id="karaite-jews" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Karaite Judaism
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Emerging in the early medieval period, Karaites accept the
                Hebrew Bible as supreme and reject the binding authority of the
                Oral Law as codified in the Talmud.
              </p>
            </div>
          </section>

          {/* Two Talmuds */}
          <section id="two-talmuds" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Two Talmuds
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rabbinic discourse on the Mishnah is compiled in two Talmuds:{" "}
                <span className="font-semibold">Jerusalem</span> (Eretz Yisrael)
                and <span className="font-semibold">Babylonian</span> — the
                latter becoming dominant in Halacha.
              </p>
            </div>
          </section>

          {/* Sephardic Golden Age */}
          <section id="sephardic-jews" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Sephardic Golden Age
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In medieval Spain and the Islamic world, Jewish poetry,
                philosophy, science, and Halacha flourish, interacting with
                Arabic and Greek thought.
              </p>
            </div>
          </section>

          {/* Maimonides */}
          <section id="maimonides" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Maimonides (Rambam)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rabbi Moshe ben Maimon (1138-1204) codifies law in{" "}
                <span className="font-semibold">Mishneh Torah</span> and bridges
                faith and reason in{" "}
                <span className="font-semibold">Guide for the Perplexed</span>,
                shaping Jewish law and philosophy.
              </p>
            </div>
          </section>

          {/* Kabbalah */}
          <section id="kabbalah" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Kabbalah & Safed
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mystical traditions, crystallized around the{" "}
                <span className="font-semibold">Zohar</span> and later in
                16th-century Safed (e.g., the Ari), influence prayer, ethics,
                and spirituality.
              </p>
            </div>
          </section>

          {/* Shulchan Aruch */}
          <section id="shulchan-aruch" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Shulchan Aruch
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rabbi Yosef Karo&apos;s 16th-century code becomes a central
                Halachic reference, with glosses by Rabbi Moshe Isserles (Rema)
                integrating Ashkenazi practice.
              </p>
            </div>
          </section>

          {/* Ashkenazi Centers */}
          <section id="ashkenazi-power" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Ashkenazi Centers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From medieval Rhineland to Poland-Lithuania and beyond,
                yeshivot, responsa, and communal autonomy shape Ashkenazi life
                (alongside persecutions and resilience).
              </p>
            </div>
          </section>

          {/* Hasidic */}
          <section id="hasidic" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Hasidic Movement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                18th-century Eastern Europe: a pietistic revival (Baal Shem Tov)
                emphasizes joy, prayer, and spiritual leadership by rebbes;
                diverse dynasties arise.
              </p>
            </div>
          </section>

          {/* Litvish */}
          <section id="litvish" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Mitnagdim / Litvish
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rabbinic leaders emphasize intellectual Talmud study, halachic
                rigor, and yeshiva culture — contesting Hasidism while also
                enriching Jewish learning.
              </p>
            </div>
          </section>

          {/* Rabbi Kook */}
          <section id="rabbi-kook" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Rabbi Kook & Religious Zionism
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Rav Avraham Yitzhak HaKohen Kook synthesizes Jewish nationalism
                and spirituality, viewing the return to the Land as religiously
                redemptive.
              </p>
            </div>
          </section>

          {/* Rabbi Kahane */}
          <section id="rabbi-kahane" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Rabbi Kahane
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A controversial figure advocating militant Jewish defense and
                nationalism; his ideology sparked intense debate within Israeli
                and Diaspora society.
              </p>
            </div>
          </section>

          {/* Ovadia Yosef */}
          <section id="ovadia-yosef" className="mb-10 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Rabbi Ovadia Yosef
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Former Sephardi Chief Rabbi of Israel, prolific decisor of
                Halacha, and founder of Shas movement — central to shaping
                contemporary Sephardi practice.
              </p>
            </div>
          </section>

          {/* Modern Israel */}
          <section id="modern-israel" className="mb-2 scroll-mt-24">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Modern Israel
              </h2>
              <p className="text-gray-700 leading-relaxed">
                19th-20th-century Zionism leads to the State of Israel (1948).
                Jewish life today spans a sovereign homeland and a global
                Diaspora, with vibrant religious, cultural, and scholarly
                renewal.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
