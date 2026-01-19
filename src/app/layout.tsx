import type { Metadata } from "next";
import "./globals.css"; // index.css の中身をここに移したもの

export const metadata: Metadata = {
  title: "Google Maps Location Management Top Page",
  description: "Shuttoマップの説明文など",
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