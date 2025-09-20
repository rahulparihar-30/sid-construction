import React from "react";
import { reasons } from "./data";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <section className="text-blue-950 text-center lg:mx-30 space-y-5 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <motion.h3
        className="text-xl sm:text-2xl font-oswald font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Us
      </motion.h3>

      <motion.h1
        className="tagline text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl"
        style={{ fontFamily: "Golco" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Quality, Commitment, and Excellence in Every Step.
      </motion.h1>

      {/* Reasons Grid */}
      <div className="grid gap-6 my-10 md:grid-cols-2 place-items-stretch">
        {reasons.map((reason, i) => {
          const Logo = reason.logo;
          return (
            <motion.div
              key={i}
              className="bg-white flex text-left gap-4 sm:gap-6 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-md md:max-w-lg h-full"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Logo fontSize="large" className="text-amber-500 flex-shrink-0" />
              <div className="flex flex-col justify-between w-full">
                <span className="text-amber-500 font-bold block text-sm sm:text-base">
                  {reason.reason}
                </span>
                <p className="text-xs sm:text-sm md:text-base mt-1 leading-relaxed flex-grow">
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
