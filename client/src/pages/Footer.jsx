"use client";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Footer() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleScroll = (event, targetId, path) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    setActivePath(path); // Update active path when clicking
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-black/90 rounded-md mt-4 text-white py-8 sm:py-16 px-4 sm:px-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
        {/* Contact Info */}
        <div className="space-y-4 text-center sm:text-left">
          <motion.p
            className="flex items-center space-x-3 text-base sm:text-[10px] justify-center sm:justify-start"
            whileHover={{ scale: 1.02, rotate: 0.1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <FaEnvelope className="text-red-500 text-2xl" />
            <a
              href="mailto:krishnaKondapalli18@gmail.com"
              className="hover:text-blue-500 transition"
            >
              krishnaKondapalli18@gmail.com
            </a>
          </motion.p>
          <motion.p
            className="flex items-center space-x-3 text-base sm:text-[10px] justify-center sm:justify-start"
            whileHover={{ scale: 1.02, rotate: 0.1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <FaPhone className="text-green-500 text-[15px]" />
            <a
              href="tel:+917330698242"
              className="hover:text-blue-500 transition"
            >
              +91 7330698242
            </a>
          </motion.p>
        </div>

        {/* Social Icons */}
        <motion.div className="flex space-x-6 justify-center">
          <motion.a
            href="http://www.linkedin.com/in/krishna-kondapalli-5a5426177"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
          >
            <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800 transition" />
          </motion.a>
          <motion.a
            href="https://github.com/krishnakondaplli"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
          >
            <FaGithub className="text-gray-800 text-3xl hover:text-gray-600 transition" />
          </motion.a>
          <motion.a
            href="https://twitter.com/krishkr77580140"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="rounded-full"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/twitterx--v1.png"
              alt="twitterx--v1"
            />
            {/* <FaTwitter className="text-blue-400 text-3xl hover:text-blue-600 transition" /> */}
          </motion.a>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:text-[15px] space-y-2 items-center sm:items-end font-bold text-gray-400">
          <motion.a
            href="/"
            onClick={(e) => handleScroll(e, "home", "/")}
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            onClick={(e) => handleScroll(e, "about", "/about")}
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
          <motion.a
            href="/works"
            onClick={(e) => handleScroll(e, "works", "/works")}
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="/contact"
            onClick={(e) => handleScroll(e, "contact", "/contact")}
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-gray-400 text-sm">
        © 2025 Krishna Kondapalli. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
