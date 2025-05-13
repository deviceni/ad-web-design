"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function NorwegianVirtualTours() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-600 via-white to-[#00ffd7] bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Virtuelle turer
        </motion.h1>

        <motion.section
          className="max-w-3xl mx-auto text-left text-zinc-300 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Hva er virtuelle turer?
          </h2>
          <p className="mb-4">
            Virtuelle turer er oppslukende, interaktive opplevelser som lar
            brukere utforske virkelige steder fra hvor som helst. Enten du viser
            frem eiendommer, arrangementssteder eller fasiliteter, skaper
            virtuelle turer en profesjonell og engasjerende måte å knytte
            kontakt med publikum på.
          </p>
          <p className="mb-4">
            Jeg kan også laste opp din virtuelle tur til Google Street View, noe
            som betyr at plassen din blir oppdagbar direkte fra Google Maps.
            Dette hjelper med å bygge troverdighet og forbedrer din online
            tilstedeværelse, noe som bidrar til bedre prestasjoner i Googles
            søkeresultater.
          </p>
          <p className="mb-4">
            For eiendomsmeglere kan virtuelle turer spare verdifull tid — det er
            ikke nødvendig å plage eiendomseieren for hver interessert visning.
            Potensielle kjøpere kan først utforske plassen online, noe som fører
            til mer kvalifisert interesse og færre unødvendige besøk.
          </p>
          <p className="font-semibold text-white mt-6">
            Det er på tide å vokse virksomheten din — virtuelt.
          </p>
        </motion.section>

        <div className="text-center mt-16 relative z-10">
          <Link
            href="/no#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Få et forslag
          </Link>
        </div>

        <motion.section
          className="mt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Utvalgte virtuelle omvisninger
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="https://hoteletopark.hu/wp-content/uploads/sites/214/vt/data/index.htm"
              target="_blank"
              className="block bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-blue-400 transition"
            >
              <Image
                src="/IMG_20231109_110128_00_merged_copy.jpeg"
                alt="Hotel Virtual Tour Preview"
                width={500}
                height={300}
                className="rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                Virtuell omvisning av hotell
              </h3>
              <p className="text-zinc-400 text-sm">
                Klikk for å se en virtuell omvisning av et hotell.
              </p>
            </a>
            <div className="block bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-blue-400 transition">
              <video controls className="rounded mb-4 w-full">
                <source src="/real-estate-tour.mp4" type="video/mp4" />
                Nettleseren din støtter ikke videotaggen.
              </video>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                Virtuell omvisning av eiendom
              </h3>
              <p className="text-zinc-400 text-sm">
                Klikk for å se en virtuell omvisning av leiligheten med
                3D-modell.
              </p>
            </div>
            <a
              href="https://tour.cutlergyor.com/"
              target="_blank"
              className="block bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-blue-400 transition"
            >
              <Image
                src="/gym.jpeg"
                alt="Gym Virtual Tour Preview"
                width={500}
                height={300}
                className="rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                Virtuell omvisning av treningssenter
              </h3>
              <p className="text-zinc-400 text-sm">
                Klikk for å se en virtuell omvisning av et treningssenter.
              </p>
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
