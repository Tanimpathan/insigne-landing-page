import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

export default function DataStorage() {
  return (
    <section id="data" className="max-w-6xl mx-auto">
      <Card>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden md:block flex-1"
        >
          <img
            src="/src/assets/server.png"
            alt="phone"
            className="mx-auto md:ml-auto"
          />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-400">
            We are a high-level data storage bank
          </h3>
          <p className="mt-5 text-gray-300 max-w-lg">
            The place to access your various data at any time through the
            internet and carry it with security and integrity and simplecity.{" "}
            <br /> This is very flexible storage area that has a very high level
            of security. To enter your account to access data you must enter
            your password and then you can access all of your data.
          </p>
        </div>
      </Card>
    </section>
  );
}
