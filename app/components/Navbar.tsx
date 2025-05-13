"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en"; // Detect the current language from the first part of the path

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur text-white px-6 py-4 flex justify-between items-center">
      <Link href={`/${currentLang === "en" ? "" : currentLang}`}>
        <span className="text-xl font-bold">
          <span className="text-pink-500">A</span>
          <span className="text-[#00ffd7]">D</span> WEB Design
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm md:text-base items-center">
        <li>
          <Link
            href={`/${currentLang === "en" ? "" : currentLang}#services`} // Correct handling of anchor links for English
            className="hover:text-pink-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLang === "en" ? "" : currentLang}#contact`} // Correct handling of anchor links for English
            className="hover:text-pink-400"
          >
            Contact
          </Link>
        </li>
        <li className="relative ml-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-pink-400 focus:outline-none"
            title="Change language"
            aria-label="Toggle language menu"
          >
            <Globe className="w-5 h-5 text-zinc-400" />
          </button>

          {/* Language Switcher Dropdown */}
          <div
            className={`absolute right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded shadow-md text-sm w-24 z-50 ${menuOpen ? "block" : "hidden"}`}
          >
            <ul>
              <li>
                <Link
                  href={`/${currentLang === "en" ? "" : "en"}`} // For English, go to `/`, for others use `/en`
                  className={`block px-4 py-2 hover:bg-zinc-800 ${currentLang === "en" ? "font-bold text-pink-400" : ""}`}
                >
                  EN
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang === "hu" ? "" : "hu"}`} // Dynamically switch to Hungarian
                  className={`block px-4 py-2 hover:bg-zinc-800 ${currentLang === "hu" ? "font-bold text-pink-400" : ""}`}
                >
                  HU
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang === "no" ? "" : "no"}`} // Dynamically switch to Norwegian
                  className={`block px-4 py-2 hover:bg-zinc-800 ${currentLang === "no" ? "font-bold text-pink-400" : ""}`}
                >
                  NO
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white"
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? (
            <span className="w-6 h-6">X</span>
          ) : (
            <span className="w-6 h-6">☰</span> // Burger icon
          )}
        </button>

        {/* Mobile Menu Items */}
        <div
          className={`absolute top-16 right-0 bg-black/80 text-white w-full py-4 px-6 transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-4">
            <li>
              <Link
                href={`/${currentLang === "en" ? "" : currentLang}#services`}
                className="hover:text-pink-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang === "en" ? "" : currentLang}#contact`}
                className="hover:text-pink-400"
              >
                Contact
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-zinc-400" />
              <div className="space-x-2">
                <Link
                  href={currentLang === "en" ? "/" : "/"} // For English, go to `/`, for others use `/en`
                  className={`text-sm hover:text-pink-400 ${currentLang === "en" ? "font-bold text-pink-400" : ""}`}
                >
                  EN
                </Link>
                <Link
                  href={`/${currentLang === "hu" ? "" : "hu"}`}
                  className={`text-sm hover:text-pink-400 ${currentLang === "hu" ? "font-bold text-pink-400" : ""}`}
                >
                  HU
                </Link>
                <Link
                  href={`/${currentLang === "no" ? "" : "no"}`}
                  className={`text-sm hover:text-pink-400 ${currentLang === "no" ? "font-bold text-pink-400" : ""}`}
                >
                  NO
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
