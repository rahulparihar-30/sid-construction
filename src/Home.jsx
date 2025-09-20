import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen" id="Home">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={`cover-vid.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-[80%] lg:w-[40%] p-5 text-center lg:text-left">
        <h3 className="font-oswald text-lg lg:text-xl mb-4">
          <span className="bg-amber-700 px-2 py-1 rounded">#1</span>{" "}
          Construction Company in the City
        </h3>

        <h1 className="text-4xl lg:text-7xl font-amarante font-bold mb-6 leading-tight">
          From Dream <span className="text-amber-400">To Reality</span>
        </h1>

        <p className="text-base lg:text-lg font-oswald font-light mb-8 leading-relaxed">
          We transform ideas into structures that last. With expert planning,
          skilled execution, and a commitment to quality, Siddharth Group brings
          your vision to life one project at a time.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            id="whatsapp"
            className="flex items-center gap-2 bg-green-700 px-6 py-3 rounded shadow-lg hover:bg-green-800 transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            <WhatsAppIcon /> Chat Now
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-700 text-3xl"
        >
          ↓
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
