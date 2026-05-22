"use client";
import React, { useState } from "react";
import Link from "next/link";

const joinUsLink = "https://forms.gle/L3oGiB5EwVTTJmZ9A";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Reduced vertical padding slightly (py-3) to balance the smaller logo */}
      <nav className="relative max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-3 bg-white z-10">
        {/* Logo Container */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <a href="/" className="transition-opacity hover:opacity-90">
            {/* Changed width from 128 to 96, and height from 64 to 48 */}
            <img src="/logo.png" alt="Logo" width={96} height={48} />
          </a>
        </div>

        {/* Navigation menu for larger screens */}
        <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
          <Link href="/" className="text-red-400 hover:text-red-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/news" className="text-red-400 hover:text-red-600 transition-colors duration-200">
            News
          </Link>
          <Link
            href="/life-in-japan"
            className="text-red-400 hover:text-red-600 transition-colors duration-200"
          >
            Life in Japan
          </Link>
          <Link href="/about" className="text-red-400 hover:text-red-600 transition-colors duration-200">
            About Us
          </Link>
          <a
            href={joinUsLink}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Student Survey
          </a>
        </div>
      </nav>

      {/* Floating button for smaller screens */}
      <button
        className="fixed top-4 right-4 h-12 w-12 rounded-full z-30 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center md:hidden shadow-lg active:scale-95 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu for smaller screens */}
      {isOpen && (
        <div className="fixed top-20 right-4 w-64 bg-white shadow-xl border border-gray-100 p-5 rounded-xl z-20 md:hidden">
          <a
            href="/"
            className="block py-2 text-red-400 hover:text-red-600 text-xl font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="/news"
            className="block py-2 text-red-400 hover:text-red-600 text-xl font-medium transition-colors"
          >
            News
          </a>
          <a
            href="/life-in-japan"
            className="block py-2 text-red-400 hover:text-red-600 text-xl font-medium transition-colors"
          >
            Life in Japan
          </a>
          <a
            href="/about"
            className="block py-2 text-red-400 hover:text-red-600 text-xl font-medium transition-colors"
          >
            About Us
          </a>
          <a
            href={joinUsLink}
            target="_blank"
            className="block py-2 text-blue-600 hover:text-blue-800 text-xl font-medium transition-colors"
          >
            Student Survey
          </a>
        </div>
      )}
    </>
  );
}