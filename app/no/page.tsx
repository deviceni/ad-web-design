"use client";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Improved email validation: checks format and common domain typos, allows real custom domains
const isValidEmail = (email: string) => {
  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!basicFormat) return false;

  const domain = email.split("@")[1]?.toLowerCase() || "";
  const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com"];

  // Block common typo domains
  const typoDomains = [
    "gma.com",
    "gmai.com",
    "gamil.com",
    "gmaill.com",
    "gmil.com",
    "gmal.com",
    "gmial.com",
    "yaho.com",
    "yhoo.com",
    "ahoo.com",
    "yhaoo.com",
    "hotmial.com",
    "hotmal.com",
    "hotmil.com",
  ];

  if (typoDomains.includes(domain)) {
    return false;
  }

  if (allowedDomains.includes(domain)) {
    return true;
  }

  // Allow other custom domains if they have a valid structure
  const domainParts = domain.split(".");
  return (
    domainParts.length >= 2 && domainParts.every((part) => part.length > 1)
  );
};

export default function Home() {
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "invalid-email"
  >("idle");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    document.title = "AD WEB Design | Full-Stack Development & Virtual Tours";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />

      {/* Hero section */}
      <div className="pt-56 pb-24 text-center px-4">
        {" "}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-40 leading-tight bg-gradient-to-r from-pink-600 via-white to-[#00ffd7] bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Velkommen til
          <span className="block">AD WEB Design</span>
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-xl mx-auto mt-32 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Moderne nettsteder og interaktive virtuelle turer
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 hover:shadow-pink-500/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Få et forslag
        </motion.a>
      </div>

      {/* About section */}
      <section
        id="about"
        className="relative text-center text-white py-20 px-4 mt-28"
        style={{
          // backgroundImage: "url('/hex-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="relative max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Om meg
          </motion.h2>
          <motion.p
            className="text-zinc-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I dag handler alt om teknologi – og alle er på nettet. Jeg hjelper
            bedrifter med å skape meningsfulle forbindelser med mennesker
            gjennom moderne, høyytelses nettsteder og immersive virtuelle turer.{" "}
            <br className="hidden md:block" />
            <br />
            Jeg grunnla AD WEB Design for å lage unike digitale opplevelser som
            bygger bro mellom selskaper og deres kunder. Med verktøy som React,
            Next.js og Tailwind CSS, kombinerer jeg moderne design og kraftig
            teknologi for å hjelpe merkevaren din til å skille seg ut.
          </motion.p>
          <div className="flex justify-center mt-10">
            <Image
              src="/Profile.png"
              alt="Hi, I am Adam"
              className="w-24 h-24 md:w-32 md:h-32 shadow-lg"
              width={128}
              height={128}
            />
          </div>
          <motion.p
            className="text-zinc-300 text-lg leading-relaxed mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            &quot;Hei, jeg er Adam! La meg hjelpe deg med å bygge drømme
            hjemmesiden din.&quot;
          </motion.p>
        </div>
      </section>

      {/* Services section */}
      <section
        id="services"
        className="max-w-4xl mx-auto mt-20 px-4 text-center scroll-mt-28"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tjenester
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Link href="/no/web">
            <motion.div
              className="cursor-pointer bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 hover:border-blue-300 transition-all duration-300"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2 text-blue-300">
                Webutvikling
              </h3>
              <p className="text-zinc-300">
                Egendefinerte nettsteder med moderne design, bygget med React,
                Next.js, Node.js og MongoDB.
              </p>
            </motion.div>
          </Link>

          <Link href="/no/virtual">
            <motion.div
              className="cursor-pointer bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 hover:border-blue-300 transition-all duration-300"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2 text-blue-300">
                Virtuelle turer
              </h3>
              <p className="text-zinc-300">
                Interaktive 360° virtuelle opplevelser for eiendommer, steder og
                bedrifter.
              </p>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className="relative text-center text-white py-20 px-4 scroll-mt-28 mt-28"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> */}
        <div className="relative">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ffd7] rounded-full filter blur-3xl opacity-20 animate-float-delay pointer-events-none"></div>
          <div className="relative max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Kontakt / Få et tilbud
            </motion.h2>
            <motion.p
              className="text-zinc-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Send meg en melding om prosjektet ditt, så tar jeg kontakt med deg
              snart!
            </motion.p>
            <form
              className="space-y-4"
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                console.log("Submit triggered");
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name")?.toString() ?? "";
                const email = formData.get("email")?.toString() ?? "";
                const message = formData.get("message")?.toString() ?? "";

                if (!isValidEmail(email)) {
                  setEmailError(true);
                  setStatus("invalid-email");
                  return;
                }

                setEmailError(false);

                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, message, lang: "no" }),
                });

                if (response.ok) {
                  setStatus("success");
                  form.reset();
                  setTimeout(() => setStatus("idle"), 5000);
                } else {
                  setStatus("error");
                }
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Ditt navn"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Din e-post"
                className={`w-full p-3 bg-zinc-800 border rounded-xl text-white ${
                  emailError ? "border-red-500" : "border-zinc-700"
                }`}
                required
              />
              <textarea
                name="message"
                placeholder="Din melding"
                rows={5}
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white"
                required
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl text-lg transition-all duration-300"
              >
                Send melding
              </button>
              {status === "success" && (
                <motion.div
                  className="flex items-center justify-center mt-4 text-green-400 gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg font-semibold">
                    Meldingen ble sendt!
                  </span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.p
                  className="text-red-500 text-center font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ❌ Noe gikk galt. Vennligst prøv igjen.
                </motion.p>
              )}
              {status === "invalid-email" && (
                <motion.p
                  className="text-red-400 text-center font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ❗ Vennligst oppgi en gyldig e-postadresse.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </section>
      <footer className="text-center text-zinc-500 text-sm py-8">
        © {new Date().getFullYear()} AD WEB Design. All rights reserved.
      </footer>
    </main>
  );
}
