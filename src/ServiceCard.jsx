import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, onView }) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      className="cursor-pointer card relative w-[300px] h-[400px] border-4 border-amber-600 bg-black overflow-hidden rounded"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      initial={{ opacity: 0, y: 50 }}   // 👈 start hidden
      whileInView={{ opacity: 1, y: 0 }} // 👈 animate when in view
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // 👈 subtle zoom on hover
    >
      {/* Background Image */}
      <motion.img
        loading="lazy"
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover brightness-50"
        whileHover={{ scale: 1.1 }} // 👈 image zooms in slightly on hover
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <motion.div
        className="absolute left-1/2 bottom-6 transform -translate-x-1/2 
                   text-amber-50 space-y-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 style={{ fontFamily: "Golco" }} className="text-[20px]">
          {service.name}
        </h3>

        {/* Description */}
        {service.description ? (
          <motion.p
            className="text-[10px]"
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>
        ) : (
          <p className="text-[10px]" style={{ fontFamily: "Golco" }}>
            {service.location}
          </p>
        )}

        {/* View Button */}
        {service.id && (
          <motion.button
            onClick={() => onView && onView(service)}
            className="p-2 px-10 text-center border-2 border-amber-300 
                       bg-[#ffc247ad] hover:bg-amber-300 cursor-pointer rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
