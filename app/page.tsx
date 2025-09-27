// app/page.tsx
import Link from "next/link";

export default function Home() {
  const cards = [
    // Site sections
    {
      title: "Jewish History",
      href: "/jewish-history",
      desc: "Explore the rich history and heritage of the Jewish people",
    },
    {
      title: "Alphabet (Alef-Bet)",
      href: "/alphabet",
      desc: "Learn the Hebrew letters, vowels (niqqud), and handwriting tips",
    },

    // 7 Binyanim
    {
      title: "Paal (פעל)",
      href: "/verbs/paal",
      desc: "Simple active verbs: core actions and common roots",
    },
    {
      title: "Nifal (נפעל)",
      href: "/verbs/nifal",
      desc: "Passive / middle voice counterpart to Paal",
    },
    {
      title: "Piel (פיעל)",
      href: "/verbs/piel",
      desc: "Intensive/causative nuance; rich present-tense usage",
    },
    {
      title: "Pual (פֻּעַל)",
      href: "/verbs/pual",
      desc: "Passive counterpart of Piel; adjectival participles",
    },
    {
      title: "Hifil (הִפְעִיל)",
      href: "/verbs/hifil",
      desc: "Causative active verbs; productive modern patterns",
    },
    {
      title: "Hufal (הֻפְעַל)",
      href: "/verbs/hufal",
      desc: "Passive counterpart of Hifil; formal/rare forms",
    },
    {
      title: "Hitpael (הִתְפַּעֵל)",
      href: "/verbs/hitpael",
      desc: "Reflexive/middle verbs; actions done to oneself",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Learning Hebrew
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your journey to mastering Hebrew starts here
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map(({ title, href, desc }) => (
            <Link
              key={href}
              href={href}
              className="group block bg-white rounded-lg shadow-md border border-gray-200 p-6 text-left transition hover:shadow-lg hover:border-blue-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2 group-hover:text-blue-800">
                {title}
              </h2>
              <p className="text-gray-600">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
