"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function HungarianWebPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
      <Navbar />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 leading-tight pb-1 bg-gradient-to-r from-pink-600 via-white to-[#00ffd7] bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Webfejlesztés
        </motion.h1>

        <motion.section
          className="max-w-3xl mx-auto text-left text-zinc-300 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Miért fontosak a weboldalak
          </h2>
          <p className="mb-4">
            Manapság a weboldalad gyakran az első benyomásod. Akár egy kis helyi
            vállalkozás vagy globális márka vagy, egy nagyszerű weboldal segít
            elérni az embereket, hitelességet építeni, és látogatókat vásárlókká
            alakítani.
          </p>
          <p className="mb-4">
            Weboldalakat építek, amelyek a céljaidhoz vannak igazítva — a
            modern, reszponzív céges portfólióktól kezdve a webáruházakig és
            egyedi webalkalmazásokig.
          </p>
          <p className="mb-4">
            Választhatsz letisztult minimalista designok, merész kreatív
            stílusok, vagy elegáns vállalati elrendezések közül — mindet a
            teljesítmény, hozzáférhetőség és mobilbarát kialakítás
            figyelembevételével építem.
          </p>
          <p className="font-semibold text-white mt-6">
            Egy weboldal nem csupán dizájn — ez a digitális kézfogásod az
            ügyféllel. Tegyük erőssé!
          </p>
        </motion.section>

        <div className="text-center mt-16 mb-24 relative z-10">
          <Link
            href="/hu#contact" // Updated to include the language path
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Kérj ajánlatot
          </Link>
        </div>

        <motion.section
          className="max-w-5xl mx-auto text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Bizalmat szavaztak nekem
          </h2>
          <p className="mb-4">
            Cégek, akikkel webfejlesztési projektekben dolgoztam együtt
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
            <Link href="https://gyorietokc.hu" target="_blank">
              <Image
                src="/gyori_audi_eto_kc.png"
                alt="Győri ETO KC"
                className="mx-auto h-12 opacity-70 hover:opacity-100 transition"
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
