"use client";
import React, { useState } from "react";

const joinUsLink = "https://forms.gle/L3oGiB5EwVTTJmZ9A";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full z-10 flex items-center justify-between p-6 bg-white container mx-auto">
        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto">
          <a href="/">
            <img src="/logo.png" alt="Logo" width={128} height={64} />
          </a>
        </div>

        {/* Navigation menu for larger screens */}
        <div className="hidden md:flex space-x-8 text-2xl font-semibold">
          <a href="/" className="text-red-400 hover:text-red-600">
            Home
          </a>
          <a href="/news" className="text-red-400 hover:text-red-600">
            News
          </a>
          <a href="/tips" className="text-red-400 hover:text-red-600">
            Life in Japan
          </a>
          <a href="/about" className="text-red-400 hover:text-red-600">
            About Us
          </a>
          <a
            href={joinUsLink}
            target="_blank"
            className="text text-blue-700 hover:text-blue-900"
          >
            Join Us
          </a>
        </div>
      </nav>

      {/* Floating button for smaller screens */}
      <button
        className="fixed top-5 right-5 h-12 w-12 rounded-full z-20 bg-blue-500 text-white flex items-center justify-center md:hidden"
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
        <div className="fixed top-20 right-5 w-64 bg-white shadow-md p-5 rounded-lg z-20 md:hidden">
          <a
            href="/"
            className="block py-1 text-red-400 hover:text-red-600 text-2xl"
          >
            Home
          </a>
          <a
            href="/news"
            className="block py-1 text-red-400 hover:text-red-600 text-2xl"
          >
            News
          </a>
          <a
            href="/tips"
            className="block py-1 text-red-400 hover:text-red-600 text-2xl"
          >
            Life in Japan
          </a>
          <a
            href="/about"
            className="block py-1 text-red-400 hover:text-red-600 text-2xl"
          >
            About Us
          </a>
          <a
            href={joinUsLink}
            target="_blank"
            className="block py-1 text-blue-700 hover:text-blue-900 text-2xl"
          >
            Join Us
          </a>
        </div>
      )}
    </>
  );
}
