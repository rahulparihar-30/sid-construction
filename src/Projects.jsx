import React, { useState,useEffect } from "react";
import { projects } from "./data";
import Navbar from "./Navbar";
import ServiceCard from "./ServiceCard"; // ✅ use ServiceCard component
import { motion, AnimatePresence } from "framer-motion";


const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [activeFeature, setActiveFeature] = useState(null);

  // Get unique categories from projects
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
   useEffect(() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);
  // Apply filter
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <>
      <Navbar />
      <section id="projects" className="w-full">
        {/* Hero Image + Tagline */}
        <div className="w-full h-60 md:h-70 relative bg-black">
          <img
            src={`skyscrapers.jpg`}
            className="w-full h-full object-cover opacity-50"
            alt="Projects banner"
            loading="eager"
          />
          <h3
            style={{ fontFamily: "Golco" }}
            className=" text-white font-semibold text-center absolute inset-0 flex items-center justify-center px-4 text-lg md:text-2xl"
          >
            Foundations of Trust, Towers of Excellence.
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="grid place-items-center mt-5 px-3">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded transition-colors ${
                  filter === cat
                    ? "bg-amber-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } cursor-pointer`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl justify-items-center">
            {filteredProjects.map((project, index) => (
              <ServiceCard
                key={index}
                service={project}
                onView={setActiveFeature}
              />
              // ✅ Using the same ServiceCard as in Section
            ))}
          </div>
        </div>
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
    </>
  );
};

export default Projects;
