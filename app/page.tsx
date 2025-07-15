export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Learning Hebrew
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your journey to mastering Hebrew starts here
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Jewish History
            </h2>
            <p className="text-gray-600">
              Explore the rich history and heritage of the Jewish people
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Judaism History
            </h2>
            <p className="text-gray-600">
              Learn about the development and traditions of Judaism
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Hebrew Verbs
            </h2>
            <p className="text-gray-600">
              Master Hebrew verb conjugations and tenses
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Hebrew Nouns
            </h2>
            <p className="text-gray-600">
              Build your vocabulary with essential Hebrew nouns
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Hebrew Adjectives
            </h2>
            <p className="text-gray-600">
              Learn descriptive words and their gender agreements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
