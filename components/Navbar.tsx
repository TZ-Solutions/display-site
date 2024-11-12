"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set background color when user scrolls past 10px
      if (currentScrollY > 10) {
        controls.start({ backgroundColor: "rgba(0, 0, 0, 1)" });
      } else {
        controls.start({ backgroundColor: "rgba(0, 0, 0, 0)" });
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // Scrolling down
        controls.start({ y: "-100%" }); // Hide navbar
      } else {
        // Scrolling up
        controls.start({ y: "0%" }); // Show navbar
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, prevScrollY]);

  return (
    <motion.nav
      animate={controls}
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)", y: "0%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 text-white z-50"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-semibold">TZSOLUTIONS</span>
      </div>

      {/* Right Links */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <div className="text-sm hover:text-gray-300 transition-colors">Log In</div>
        </Link>
        <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
