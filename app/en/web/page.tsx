"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function WebPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <Navbar />
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-600 via-white to-[#00ffd7] bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Web Development
        </motion.h1>

        <div className="relative">
          {/* Floating bubbles */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float pointer-events-none"></div>
          <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay pointer-events-none"></div>

          <motion.section
            className="max-w-3xl mx-auto text-left text-zinc-300 mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Websites Matter
            </h2>
            <p className="mb-4">
              In today’s world, your website is often your first impression.
              Whether you are a small local business or a global brand, a great
              website helps you reach people, build credibility, and convert
              visitors into customers.
            </p>
            <p className="mb-4">
              I build websites tailored to your goals — from modern, responsive
              landing pages and company portfolios to e-commerce stores and
              custom web applications.
            </p>
            <p className="mb-4">
              You can choose from clean minimalist designs, bold creative
              styles, or sleek corporate layouts — all built with performance,
              accessibility, and mobile-friendliness in mind.
            </p>
            <p className="font-semibold text-white mt-6">
              A website isn’t just design — it’s your digital handshake. Let’s
              make it strong.
            </p>
          </motion.section>
        </div>

        <div className="text-center mt-16 mb-24">
          <Link
            href="/en#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Get a Proposal
          </Link>
        </div>

        <motion.section
          className="max-w-5xl mx-auto text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Trusted By</h2>
          <p className="mb-4">Companies I’ve worked with on web projects</p>

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
