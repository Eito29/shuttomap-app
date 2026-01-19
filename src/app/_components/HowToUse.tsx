import { Smartphone, Share2, Save } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      number: '1',
      icon: Smartphone,
      title: 'アプリを「ホーム画面」へ追加',
      description: 'Webブラウザからホーム画面に追加するだけで準備完了',
    },
    {
      number: '2',
      icon: Share2,
      title: 'Googleマップ「共有」からアプリを選択',
      description: '気になる場所を見つけたら共有ボタンからShuttoを選択',
    },
    {
      number: '3',
      icon: Save,
      title: '内容を確認して「保存」これだけで完了！',
      description: 'カテゴリーを選んで保存するだけのかんたん操作',
    },
  ];

  return (
    <section id="how-to-use" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            使い方はたったの３ステップ
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
