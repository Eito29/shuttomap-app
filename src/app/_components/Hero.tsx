import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Google マップから
            <span className="text-blue-600">Shutto</span>保存
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-10">
            かんたん機能で、らくらく整理
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            無料ではじめる
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-16 relative">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">アプリデモ画面</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
