import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-cyan-400 leading-tight"
        >
          Save your data storage here.
        </motion.h1>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-gray-300 max-w-xl"
        >
          Insignia is a data storage area that has been tested for security, so
          you can store your data here safely.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <button className="cursor-pointer text-white shadow-xl shadow-[0_25px_50px_-12px_#000] px-4 py-2 rounded-full font-medium">
            Learn more
          </button>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex-1"
      >
        <img
          src="/assets/hero.png"
          alt="servers"
          className="w-full max-w-md hidden md:block"
        />
      </motion.div>
    </section>
  );
}
