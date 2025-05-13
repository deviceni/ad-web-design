"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function HungarianVirtualTours() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* Floating bubbles background */}
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
          Virtuális Túrák
        </motion.h1>

        <motion.section
          className="max-w-3xl mx-auto text-left text-zinc-300 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Mi a virtuális túra?
          </h2>
          <p className="mb-4">
            A virtuális túrák magával ragadó, interaktív élményeket kínálnak,
            amelyek lehetővé teszik a felhasználók számára, hogy bárhonnan
            felfedezzék a valós helyeket. Akár ingatlanokat,
            rendezvényhelyszíneket vagy létesítményeket mutatsz be, a virtuális
            túrák professzionális és vonzó módot kínálnak a közönségeddel való
            kapcsolódásra.
          </p>
          <p className="mb-4">
            A virtuális túrádat feltölthetem a Google Street View-ra is, ami azt
            jelenti, hogy a helyed közvetlenül a Google Térképről válik
            felfedezhetővé. Ez segít a hitelesség építésében és javítja az
            online jelenlétet, hozzájárulva a jobb teljesítményhez a Google
            keresési találatokban.
          </p>
          <p className="mb-4">
            Ingatlanközvetítők számára a virtuális túrák értékes időt
            takaríthatnak meg — nem szükséges minden érdeklődő megtekintéséhez
            zavarni az ingatlan tulajdonosát. A potenciális vásárlók először
            online felfedezhetik a helyet, ami több kvalifikált érdeklődést és
            kevesebb felesleges látogatást eredményez.
          </p>
          <p className="font-semibold text-white mt-6">
            Itt az idő, hogy növeld a vállalkozásodat — virtuálisan.
          </p>
        </motion.section>

        <div className="text-center mt-16">
          <Link
            href="/hu#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Kérj ajánlatot
          </Link>
        </div>

        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Kiemelt virtuális túrák
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
                Szállodai virtuális túra
              </h3>
              <p className="text-zinc-400 text-sm">
                Kattints a szálloda virtuális túrájának megtekintéséhez.
              </p>
            </a>
            <div className="block bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-blue-400 transition">
              <video controls className="rounded mb-4 w-full">
                <source src="/real-estate-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                Ingatlan virtuális túra
              </h3>
              <p className="text-zinc-400 text-sm">
                Kattints a lakás virtuális túrájának és 3D modelljének
                megtekintéséhez.
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
                Edzőterem virtuális túra
              </h3>
              <p className="text-zinc-400 text-sm">
                Kattints az edzőterem virtuális túrájának megtekintéséhez.
              </p>
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
