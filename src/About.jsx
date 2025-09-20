import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="text-blue-950 md:mx-30 my-10 pb-10 text-center space-y-5"
    >
      {/* Headings */}
      <motion.h3
        className="text-1 font-oswald text-2xl font-bold"
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
      <div className="flex flex-col m-5 md:flex-row items-stretch justify-center gap-1 md:gap-6 ">
  {/* Paragraph */}
  <motion.p
    className="flex-1 p-4 text-left md:text-justify text-base md:text-xl 
               leading-relaxed   bg-white/80 backdrop-blur-2xl 
               rounded shadow-md flex items-center min-h-[350px]"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <span>
      <strong>Sid Construction</strong>, a proud division of Siddharth Group,
      stands at the forefront of modern construction solutions. We specialize in
      delivering high-quality residential, commercial, and infrastructure
      projects that blend innovative design with uncompromising craftsmanship.
      From meticulous planning and precise engineering to on-time execution,
      every project reflects our commitment to durability, functionality, and
      aesthetic appeal.
      <br />
      Guided by the values of integrity, transparency, and customer satisfaction,
      SidConstruction has become a trusted name for clients seeking not just
      buildings, but lasting landmarks. Whether it’s shaping urban skylines,
      developing community spaces, or building the foundations for tomorrow,
      SidConstruction is here to turn visions into reality one project at a time.
    </span>
  </motion.p>

  {/* Video */}
  <motion.div
    className="flex-1 flex items-center min-h-[350px]"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <video
      className="w-full h-full object-cover rounded shadow-lg"
      src={`About.mp4`}
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
