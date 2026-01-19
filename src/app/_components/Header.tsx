"use client";

import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Shutto MAP</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Shuttoマップとは
            </a>
            <a href="#how-to-use" className="text-gray-700 hover:text-blue-600 transition-colors">
              使い方
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              よくある質問
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
              新規登録
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ログイン
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <a
              href="#about"
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shuttoマップとは
            </a>
            <a
              href="#how-to-use"
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              使い方
            </a>
            <a
              href="#faq"
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <button className="px-5 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
                新規登録
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium">
                ログイン
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
