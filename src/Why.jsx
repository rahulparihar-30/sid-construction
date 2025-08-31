import React from "react";
import { reasons } from "./data";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <section className="text-blue-950 text-center lg:mx-30 space-y-5">
      {/* Heading */}
      <motion.h3
        style={{ fontFamily: "Golco" }}
        className="text-1"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Us
      </motion.h3>

      <motion.h1
        className="tagline text-amber-500"
        style={{ fontFamily: "Golco" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Quality, Commitment, and Excellence in Every Step.
      </motion.h1>

      {/* Reasons Grid */}
      <div className="md:place-items-center md:grid md:grid-cols-2 my-10 justify-center items-center space-y-5 p-10">
        {reasons.map((reason, i) => {
          const Logo = reason.logo;
          return (
            <motion.div
              key={i}
              className="bg-white flex text-left gap-6 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Logo fontSize="large" className="text-amber-500 flex-shrink-0" />
              <div className="lg:w-[400px]">
                <span className="text-amber-500 font-bold">
                  {reason.reason}
                </span>
                <p className="text-sm md:text-base mt-1">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Why;
