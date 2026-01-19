import { HelpCircle, ListX, FileQuestion } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: HelpCircle,
      title: '使い方がよくわからない',
      description:
        '便利な機能があることは分かっているけど、使いこなせる自信がないので「お気に入り」などが活用できていない。',
    },
    {
      icon: ListX,
      title: '整理できない保存済みリスト',
      description:
        'Googleマップの「行ってみたい」リストが無限に増え続け、本当に必要なときにフィルター機能がなくて困る。',
    },
    {
      icon: FileQuestion,
      title: '詳細がわからない',
      description:
        '覚えておきたくて保存したはずなのに、「なぜ」保存したのかが忘れてしまって不明な保存が増えてしまっている。',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            保存機能のお悩みを解決
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>

              <div className="mb-4">
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
