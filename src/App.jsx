import React, { useRef } from "react";
import Home from "./Home";
import Section from "./Section";
import About from "./About";
import { services, projects } from "./data";
import Why from "./Why";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./App.css";
import ChatWidget from "./ChatWidget";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const App = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });
  }, { scope: wrapperRef });

  return (
    <>

      {/* GSAP ScrollSmoother wrapper */}
      <div id="smooth-wrapper" ref={wrapperRef}>
      <Navbar />

        <div id="smooth-content" ref={contentRef}>
          <Home id="Home" />

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Section
              id="services"
              title="Our Services"
              tagline="Building Excellence, Delivering Trust."
              services={services}
            />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <About id="About" />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Section
              id="projects"
              title="Projects"
              kind="project"
              tagline="Turning Blueprints Into Landmarks."
              services={projects}
            />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Why />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Testimonial />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Footer id="contact" className="bg-amber-500" />
          </motion.div>
        </div>
        <ChatWidget/>
      </div>
    </>
  );
};

export default App;
