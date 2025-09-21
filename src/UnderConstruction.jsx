import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const UnderConstruction = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Optional: Auto-show when component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={22} />
            </button>

            {/* Content */}
            <h2 className="text-2xl font-bold text-amber-700 mb-3">
              🚧 Site Under Construction
            </h2>
            <p className="text-gray-600 mb-6">
              We’re working hard to bring you something amazing.  
              Please check back soon!
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="bg-amber-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-amber-700 transition-all"
            >
              Got It
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UnderConstruction;
