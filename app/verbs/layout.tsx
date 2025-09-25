// app/verbs/layout.tsx
import Link from "next/link";
import type { ReactNode } from "react";

const verbTypes = [
  { href: "/verbs/paal", label: "Paal", description: "Simple active verbs" },
  { href: "/verbs/piel", label: "Piel", description: "Intensive active verbs" },
  {
    href: "/verbs/hifil",
    label: "Hifil",
    description: "Causative active verbs",
  },
  { href: "/verbs/hitpael", label: "Hitpael", description: "Reflexive verbs" },
  {
    href: "/verbs/hufal",
    label: "Hufal",
    description: "Causative passive verbs",
  },
  {
    href: "/verbs/pual",
    label: "Pual",
    description: "Intensive passive verbs",
  },
  { href: "/verbs/nifal", label: "Nifal", description: "Simple passive verbs" },
];

export default function VerbsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 text-center">
          Hebrew Verb Types (Binyanim)
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Explore the seven Hebrew verb patterns
        </p>

        {/* Grid visible on EVERY verbs page */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {verbTypes.map((verb) => (
            <Link
              key={verb.href}
              href={verb.href}
              className="block bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {verb.label}
              </h2>
              <p className="text-gray-600">{verb.description}</p>
            </Link>
          ))}
        </div>

        {/* Child page content (paal/piel/…) */}
        {children}
      </div>
    </div>
  );
}
