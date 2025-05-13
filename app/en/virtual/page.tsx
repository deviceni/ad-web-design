"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function VirtualPortfolio() {
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
          Virtual Tours
        </motion.h1>

        {/* Section with Background Bubbles */}
        <div className="relative">
          {/* Floating Bubbles */}
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
              What Are Virtual Tours?
            </h2>
            <p className="mb-4">
              Virtual tours are immersive, interactive experiences that allow
              users to explore real-world spaces from anywhere. Whether you are
              showcasing real estate, event venues, or facilities, virtual tours
              create a professional and engaging way to connect with your
              audience.
            </p>
            <p className="mb-4">
              I can also upload your virtual tour to Google Street View, which
              means your space becomes discoverable directly from Google Maps.
              This helps build credibility and enhances your online presence,
              contributing to stronger performance in Google search results.
            </p>
            <p className="mb-4">
              For real estate agents, virtual tours can save valuable time —
              there’s no need to bother the property owner for every interested
              viewer. Prospective buyers can explore the space online first,
              leading to more qualified interest and fewer unnecessary visits.
            </p>
            <p className="font-semibold text-white mt-6">
              It’s time to grow your business — virtually.
            </p>
          </motion.section>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/en#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Get a Proposal
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
            Featured Virtual Tours
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
                Hotel Virtual Tour
              </h3>
              <p className="text-zinc-400 text-sm">
                Click to view virtual tour of a hotel.
              </p>
            </a>
            <div className="block bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-blue-400 transition">
              <video controls className="rounded mb-4 w-full">
                <source src="/real-estate-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                Real Estate Virtual Tour
              </h3>
              <p className="text-zinc-400 text-sm">
                Click to view apartment virtual tour with 3D model.
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
                Gym Virtual Tour
              </h3>
              <p className="text-zinc-400 text-sm">
                Click to view virtual tour of a gym.
              </p>
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
