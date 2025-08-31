import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard"; // ✅ imported as component

const Section = (props) => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section
      id={props.id}
      className="text-blue-950 lg:mx-30 my-10 pb-10 text-center space-y-5"
    >
      <h3 style={{ fontFamily: "Golco" }} className="text-1">
        {props.title}
      </h3>
      <h1 className="tagline" style={{ fontFamily: "Golco" }}>
        {props.tagline}
      </h1>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {props.services.slice(0, 3).map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onView={setActiveFeature}  // ✅ now handled by parent
          />
        ))}
      </div>

      {/* Explore More button */}
      {props.kind === "project" && (
        <NavLink
          to="./projects"
          className="bg-[#fba700c6] hover:bg-amber-500 p-2 rounded border-2 border-amber-500 text-center text-white font-bold"
        >
          Explore More
        </NavLink>
      )}

      {/* Popup Modal */}
<AnimatePresence>
  {activeFeature && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-lg"
        onClick={() => setActiveFeature(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl p-6 w-[95%] md:w-[850px] max-h-[90vh] overflow-y-auto z-10"
      >
        {/* Project Image */}
        <img
          src={activeFeature.image}
          alt={activeFeature.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Header */}
        <div className="mt-4 text-left">
          <h3 className="font-oswald text-2xl text-amber-700 font-bold">
            {activeFeature.name}
          </h3>
          <p className="text-sm text-gray-500 italic">
            Construction Project • {activeFeature.location || "Location TBD"}
          </p>
        </div>

        {/* Description */}
        <p className="font-roboto text-gray-700 mt-4 leading-relaxed text-justify">
          {activeFeature.description ||
            "This construction project aims to deliver high-quality infrastructure using modern building technologies. It emphasizes sustainability, safety, and timely completion, making it a benchmark in contemporary construction work."}
        </p>

        {/* Extra Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          <div>
            <h4 className="font-bold text-gray-800">Client</h4>
            <p className="text-gray-600">
              {activeFeature.client || "ABC Developers Pvt. Ltd."}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Location</h4>
            <p className="text-gray-600">
              {activeFeature.location || "Pune, India"}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Duration</h4>
            <p className="text-gray-600">
              {activeFeature.duration || "Jan 2024 – Dec 2025"}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Status</h4>
            <p className="text-gray-600">
              {activeFeature.status || "Ongoing"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => setActiveFeature(null)}
            className="px-4 py-2 cursor-pointer bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Section;
