"use client"
// components/Hero.tsx
import {useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const [isSticky, setIsSticky] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
          // Check if the floating navbar has reached the top
          const scrollTop = window.scrollY;
          const heroHeight = document.getElementById("hero-content")?.offsetHeight || 0;
          
          if (scrollTop >= heroHeight - 60) { // Adjust threshold as needed
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <section id="hero-content"className="relative h-[150vh] flex flex-col items-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Wrapper for all content */}
      <div className="flex flex-col items-center gap-10 w-full h-full justify-evenly">

        {/* Hero Content */}
        <div className="text-white space-y-6 mt-40">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-gray-300"
          >
            Websites
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl font-bold"
          >
            The leader in <br /> website design
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
        
        {/* Floating Navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isSticky ? 0 : [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={`flex space-x-4 bg-black bg-opacity-60 px-8 py-4 rounded-full text-white z-50 ${
          isSticky ? "fixed top-0 w-full justify-center" : ""
        }`}
        style={{
          backgroundColor: isSticky ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)",
          borderRadius: isSticky ? "0" : "1.5rem",
          boxShadow: isSticky ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Link href="#design-intelligence">
          <div className="hover:text-gray-300">Design Intelligence</div>
        </Link>
        <Link href="#creative-tools">
          <div className="hover:text-gray-300">Creative Tools</div>
        </Link>
        <Link href="#seo-analytics">
          <div className="hover:text-gray-300">SEO & Analytics</div>
        </Link>
        <Link href="#get-started">
          <div className="hover:text-gray-300">Get Started</div>
        </Link>
      </motion.div>

        {/* Project Display */}
        <div className="h-3/6 w-5/6 fill-black bg-black rounded-2xl"></div>
      </div>
    </section>
  );
}
