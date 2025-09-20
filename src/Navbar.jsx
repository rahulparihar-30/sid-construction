import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, target) => {
    e.preventDefault();

    const section = document.querySelector(target);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.innerHeight - section.offsetHeight) / 2; // center align

      gsap.to(window, {
        duration: 1.2,
        scrollTo: y - offset, // 👈 perfect center
        ease: "power2.inOut",
      });
    }
  };

  const handleMobileLinkClick = (e, target) => {
    handleScrollTo(e, target);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        menuOpen
          ? "bg-amber-700/95 backdrop-blur-md shadow-md"
          : scrolled
          ? "bg-amber-700/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* 👇 THIS IS THE CORRECTED LINE 👇 */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a to="/" className="w-11 h-11 cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            className="w-full h-full rounded"
            alt="Agritech Solutions"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {["home", "projects", "about", "contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              onClick={(e) => handleScrollTo(e, `#${item}`)}
              className="relative inline-block transition-colors hover:text-amber-300
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                        after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-amber-50/95 backdrop-blur shadow-md px-6 py-4 space-y-4 text-amber-700 font-sans">
          {["home", "projects", "about", "contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              onClick={(e) => handleMobileLinkClick(e, `#${item}`)}
              className="block relative transition-colors hover:text-amber-700
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                        after:bg-amber-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
