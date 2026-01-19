import { Sparkles, FolderTree, Link2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: 'シンプルな操作画面',
      description:
        '保存したい場所にカテゴリーを設定するだけのシンプルな操作方法で、あなた独自の管理が簡単にできます。',
    },
    {
      icon: FolderTree,
      title: 'かんたんカテゴリー分け',
      description:
        'Googleマップでは出来なかった、独自のカテゴリーを追加・設定することができます。これによりたくさんの保存場所を整理して見つけることができます。',
    },
    {
      icon: Link2,
      title: 'Googleマップと連携',
      description:
        'Googleマップの共有からアプリを開くことで、場所を自動で保存することが可能。保存後もワンクリックでGoogleマップへ移動することができます。',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            場所の管理を、もっとスマートに。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
