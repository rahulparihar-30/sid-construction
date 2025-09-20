import React from "react";
import { comments } from "./data";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";

const Testimonial = () => {
  const card = (testimonial, index) => {
    return (
      <motion.div
        key={index}
        className="bg-white text-blue-900 text-justify shadow-xl shadow-gray-300 
        w-[300px] sm:w-[250px] xs:w-[200px] min-w-[200px] 
        border-amber-500 border-2 rounded flex flex-col space-y-5 mt-5 p-4 
        flex-shrink-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <FormatQuoteIcon fontSize="large" className="text-amber-500 font-bold" />
        <p className="break-words text-sm sm:text-base">{testimonial.comment}</p>
        <div className="credits flex gap-3 sm:gap-5 items-center">
          <img
            src={testimonial.pic}
            className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full"
            alt="profile"
            loading="lazy"
          />
          <div className="flex flex-col text-left">
            <span className="text-amber-500 text-sm sm:text-xl font-bold">
              {testimonial.name}
            </span>
            <span className="text-[10px] sm:text-[12px]">{testimonial.location}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="testimonial" className="md:mx-30 text-center place-items-center space-y-5 mb-10 px-4 sm:px-6 lg:px-12">
      <motion.h3
        className="text-blue-900 text-xl sm:text-2xl font-oswald font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h3>

      <motion.h1
        className="tagline text-amber-500 text-base sm:text-lg md:text-xl"
        style={{ fontFamily: "Golco" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stories of Trust, Success, and Partnership.
      </motion.h1>

      {/* Scrolling container */}
      <div className="overflow-hidden relative w-full h-full" id="test-carousel">
        {/* Right scroll */}
        <motion.div
          className="flex gap-4 sm:gap-6 flex-nowrap"
          id="left"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </motion.div>

        {/* Left scroll */}
        <motion.div
          className="flex gap-4 sm:gap-6 flex-nowrap mt-6"
          id="right"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
