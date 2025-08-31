import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigations = ["Home", "Projects", "About", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-2 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-amber-500 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Brand logo */}
        <NavLink to="/" className="flex items-center">
          <img
            className="brand-icon rounded-sm w-12 h-12"
            src="/logo.png"
            alt="Logo"
          />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 font-medium lg:font-bold">
          {navigations.map((navigation) => (
            <li
              key={navigation}
              className="hover:text-amber-600 transition-colors"
            >
              <a href={`#${navigation}`}>{navigation}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-amber-500 text-white rounded-lg shadow-lg">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navigations.map((navigation) => (
              <li
                key={navigation}
                className="hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                <a href={`#${navigation}`}>{navigation}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
