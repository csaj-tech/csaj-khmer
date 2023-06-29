import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title }) {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      <main className="md:pt-48">{children}</main>

      {isVisible && 
        <div onClick={scrollToTop} className="fixed bottom-24 right-5 bg-blue-500 text-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
          ↑
        </div>
      }

      <Footer />
    </>
  );
}
