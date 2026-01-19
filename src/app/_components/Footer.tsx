import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Shutto MAP</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Google マップからの場所保存を、もっとスマートに。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            <a
              href="#terms"
              className="hover:text-white transition-colors"
            >
              利用規約
            </a>
            <a
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2026 Shutto MAP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
