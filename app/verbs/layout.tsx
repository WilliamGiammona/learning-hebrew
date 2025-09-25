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
      <div className="max-w-6xl mx-auto">
        {/* Only show title + chart on child pages */}
        {!isIndex && (
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
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
        )}

        {/* Child page content (paal/piel/hifil/…) */}
        {children}
      </div>
    </div>
  );
}
