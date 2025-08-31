import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="text-blue-950 md:mx-30 my-10 pb-10 text-center space-y-5"
    >
      {/* Headings */}
      <motion.h3
        style={{ fontFamily: "Golco" }}
        className="text-1"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h3>

      <motion.h1
        className="tagline"
        style={{ fontFamily: "Golco" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Your Trusted Partner in Growth.
      </motion.h1>

      {/* Content Section */}
      <div className="mt-10 flex justify-between flex-col md:flex-row gap-5">
        {/* Text */}
        <motion.p
          className="p-4 text-center md:text-justify md:w-[50%] bg-white rounded shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <strong>SidConstruction</strong>, a proud division of Siddharth Group,
          stands at the forefront of modern construction solutions. We
          specialize in delivering high-quality residential, commercial, and
          infrastructure projects that blend innovative design with
          uncompromising craftsmanship. From meticulous planning and precise
          engineering to on-time execution, every project reflects our
          commitment to durability, functionality, and aesthetic appeal.
          <br />
          Guided by the values of integrity, transparency, and customer
          satisfaction, SidConstruction has become a trusted name for clients
          seeking not just buildings, but lasting landmarks. Whether it’s
          shaping urban skylines, developing community spaces, or building the
          foundations for tomorrow, SidConstruction is here to turn visions into
          reality one project at a time.
        </motion.p>

        {/* Video */}
        <motion.div
          className="md:w-[50%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video
            className="aspect-video rounded shadow-lg"
            src="/About.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
