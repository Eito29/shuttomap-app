import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b text-center from-blue-50 to-white">
      <p>
        Google マップからShutto保存<br />
        かんたん機能で、らくらく整理
      </p>

      <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        無料ではじめる
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
