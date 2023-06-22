import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-white">
      {/* Logo */}
      <a href='/'>
        <img src="/logo.jpg" alt="Logo" width={128} height={64} />
      </a>

      {/* Navigation menu for larger screens */}
      <div className="hidden md:flex space-x-12 text-4xl font-semibold">
        <a href="/"className="text-red-400 hover:text-red-600">Home</a>
        <a href="/news"className="text-red-400 hover:text-red-600">News</a>
        <a href="/tips"className="text-red-400 hover:text-red-600">Life in Japan</a>
        <a href="/about"className="text-red-400 hover:text-red-600">About Us</a>
        <a href="https://forms.gle/UYriTnL1JzHnPzyU6" className="text text-blue-700 hover:text-blue-900">Join Us</a>
      </div>

      {/* Dropdown menu button for smaller screens */}
      <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block py-1 text-red-400 hover:text-red-600 text-2xl">Home</a>
          <a href="/news" className="block py-1 text-red-400 hover:text-red-600 text-2xl">News</a>
          <a href="/tips" className="block py-1 text-red-400 hover:text-red-600 text-2xl">Life in Japan</a>
          <a href="/about" className="block py-1 text-red-400 hover:text-red-600 text-2xl">About Us</a>
          <a href="https://forms.gle/UYriTnL1JzHnPzyU6" className="block py-1 text-blue-700 hover:text-blue-900 text-2xl">Join Us</a>
        </div>
      )}
    </nav>
  );
}
