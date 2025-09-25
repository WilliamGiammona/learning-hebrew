// app/verbs/layout.tsx
"use client";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import type { ReactNode } from "react";

export default function VerbsLayout({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments(); // [] on /verbs, ["paal"] on /verbs/paal, etc.
  const isIndex = segments.length === 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Shared content only on child pages */}
        {!isIndex && (
          <>
            {/* Title + Chart */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 mb-10">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Seven Hebrew Verb Patterns (Binyanim)
              </h2>
              <div className="mt-8">
                <div className="relative w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                  <Image
                    src="/images/verbs/seven-verbs.png"
                    alt="Diagram of the seven Hebrew verb patterns (binyanim), showing active and passive branches"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Root explanation */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                The Root (שורש)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hebrew verbs are built from a{" "}
                <span className="font-semibold">three-letter root</span> (שורש,{" "}
                <i>shoresh</i>). Dictionaries list verbs in the{" "}
                <span className="font-semibold">
                  3rd person masculine singular past tense
                </span>
                . For example:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                <li dir="ltr">
                  Root: פגש → פָּגַשׁ (
                  <span className="font-semibold">Pagash</span>) – “he met”
                </li>
                <li dir="ltr">
                  Root: סגר → סָגַר (
                  <span className="font-semibold">Sagar</span>) – “he closed”
                </li>
              </ul>
            </div>

            {/* Usual exceptions */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-10">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Usual Exceptions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In many verb groups, certain roots do not follow the standard
                pattern. This is especially common when the root:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                <li>Has י (Yod) in the middle</li>
                <li>Has ו (Vav) in the middle</li>
                <li>Ends with ה (Hey)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                These cases often require special forms that differ from the
                usual construction rules.
              </p>
            </div>
          </>
        )}

        {/* Child page content */}
        {children}
      </div>
    </div>
  );
}
