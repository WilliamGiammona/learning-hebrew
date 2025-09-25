// app/verbs/paal/page.tsx
import Image from "next/image";

export default function VerbPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section id="paal-verb" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">PAAL VERB</h2>
            {/* Chart */}
            <div className="mt-8">
              <div className="relative w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                <Image
                  src="/images/verbs/seven-verbs.png"
                  alt="Diagram of the seven Hebrew verb binyanim, showing active and passive patterns"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
