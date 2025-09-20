import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-amber-800/95 backdrop-blur-md shadow-md text-amber-100 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <a to="/" className="w-10 h-10 cursor-pointer">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              className="w-15 h-15 rounded mb-3"
              alt="Agritech Solutions"
            />
          </a>
          <p className="text-sm leading-relaxed">
            S. No, AP81, 83, N Main Rd, near Hard Rock Cafe, Koregaon Park
            Annexe, Mundhwa, Pune, Maharashtra 411036
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-amber-300" />
              sidharthgroups@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-amber-300" />
              +91-88053608977
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-amber-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-amber-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold text-amber-300 mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-amber-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold text-amber-300 mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-amber-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-amber-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-amber-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-400">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-amber-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700 mt-8 pt-4 text-center text-xs sm:text-sm text-amber-200">
        <p>© 2025 Siddharth Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
