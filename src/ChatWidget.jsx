import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaChevronDown,
  FaPhone
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

import { IoChatbubbleOutline } from "react-icons/io5";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const buttons = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp className="text-white text-xl" />,
      bg: "bg-green-600 hover:bg-green-700",
      link: "https://wa.me/919876543210",
      angle: -90,
    },
    {
      id: "phone",
      icon: <BsTelephone className="text-white text-xl" />,
      bg: "bg-amber-700 hover:bg-amber-800",
      link: "tel:+919876543210",
      angle: -135,
    },
    {
      id: "email",
      icon: <FaEnvelope className="text-white text-xl" />,
      bg: "bg-amber-700 hover:bg-amber-800",
      link: "mailto:example@gmail.com",
      angle: -180,
    },
  ];

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {open &&
          buttons.map((btn, index) => {
            const radius = 80; // distance from main button
            const x = radius * Math.cos((btn.angle * Math.PI) / 180);
            const y = radius * Math.sin((btn.angle * Math.PI) / 180);

            return (
              <motion.a
                key={btn.id}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${btn.bg} transition-colors duration-300 absolute bottom-0 right-0`}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                exit={{ opacity: 0, x: 0, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Keep the icon upright by negating rotation */}
                <div className="flex items-center justify-center w-full h-full">
                  {btn.icon}
                </div>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Main Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-700 hover:bg-amber-800 text-white shadow-lg transition-colors duration-300 relative z-10"
      >
        {open ? <FaChevronDown /> : <IoChatbubbleOutline fontSize={30} />}
      </button>
    </div>
  );
}
