"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

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

        {/* 
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              Project One
            </h2>
            <p className="text-zinc-300">
              A responsive website built with Next.js, React, and Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              Project Two
            </h2>
            <p className="text-zinc-300">
              A custom CMS dashboard with user login and dynamic content
              editing.
            </p>
          </motion.div>
        </div>
        */}
      </div>
    </main>
  );
}
