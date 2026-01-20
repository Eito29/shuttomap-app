import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shuttoマップ - Googleマップと連携してよく使う場所を管理できるサービス",
  description: "Googleマップと連携してよく使う場所を管理できるサービス「Shutto（シュット）マップ」。 よく行く場所を簡単に登録・整理し、アクセスしやすくします。無料で使える便利なツールです。",
  openGraph: {
    images: ["https://bolt.new/static/og_default.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://bolt.new/static/og_default.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}