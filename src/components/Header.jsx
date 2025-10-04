import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#262626]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/round-logo.png" className="w-[60px] h-[60px]" />
          <div className="text-cyan-400 font-bold text-lg">Insignia</div>
        </div>

        <div className="flex gap-[20px]">
          <nav className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#help" className="hover:text-cyan-400">
              Help
            </a>
            <a href="#features" className="hover:text-cyan-400">
              Features
            </a>
            <a href="#signup" className="hover:text-cyan-400">
              Sign Up
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex gap-2 cursor-pointer text-cyan-400 shadow-xl shadow-[0_25px_50px_-12px_#000] px-4 py-2 rounded-full font-medium">
              Request Demo
              <ArrowRight className="w-[20px] text-[#dd45dd]" />
            </button>
            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen((o) => !o)}
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="md:hidden overflow-hidden"
      >
        <div className="px-6 pb-4 flex flex-col gap-3">
          <a href="#about" className="text-gray-300">
            About
          </a>
          <a href="#help" className="text-gray-300">
            Help
          </a>
          <a href="#features" className="text-gray-300">
            Features
          </a>
          <a href="#signup" className="text-gray-300">
            Sign Up
          </a>
          <button className="bg-cyan-400 text-black px-3 py-2 rounded-full mt-2">
            Request Demo
          </button>
        </div>
      </motion.div>
    </header>
  );
}
