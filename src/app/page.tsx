"use client"; // ヘッダーやFAQでuseStateなどを使う場合はこれが必要

import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Problems from "@/app/_components/Problems";
import Features from "@/app/_components/Features";
import HowToUse from "@/app/_components/HowToUse";
import FAQ from "@/app/_components/FAQ";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <HowToUse />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}