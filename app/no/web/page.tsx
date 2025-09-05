"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function NorwegianWebPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>

      <Navbar />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-600 via-white to-[#00ffd7] bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Webutvikling
        </motion.h1>

        <motion.section
          className="max-w-3xl mx-auto text-left text-zinc-300 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvorfor nettsider er viktige
          </h2>
          <p className="mb-4">
            I dagens verden er nettsiden din ofte ditt første inntrykk. Enten du
            er en liten lokal bedrift eller et globalt merke, hjelper en flott
            nettside deg med å nå folk, bygge troverdighet og konvertere
            besøkende til kunder.
          </p>
          <p className="mb-4">
            Jeg bygger nettsider skreddersydd for dine mål — fra moderne,
            responsive landingssider og bedriftsporteføljer til
            netthandelsbutikker og tilpassede webapplikasjoner.
          </p>
          <p className="mb-4">
            Du kan velge mellom rene minimalistiske design, dristige kreative
            stiler, eller stilige bedriftsoppsett — alle bygget med ytelse,
            tilgjengelighet og mobilvennlighet i tankene.
          </p>
          <p className="font-semibold text-white mt-6">
            En nettside er ikke bare design — det er ditt digitale håndtrykk. La
            oss gjøre det sterkt.
          </p>
        </motion.section>

        <div className="text-center mt-16 mb-24 relative z-10">
          <Link
            href="/no#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Få et forslag
          </Link>
        </div>
        <motion.section
          className="max-w-5xl mx-auto text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Virksomheter som har vist meg tillit
          </h2>
          <p className="mb-4">
            Bedrifter jeg har samarbeidet med på webprosjekter
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
