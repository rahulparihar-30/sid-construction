import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-500 text-white pt-10 pb-3 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:text-center">
        {/* Company Info */}
        <div>
          <img
            src="/logo.png"
            alt="Siddharth Group Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm md:text-left">
            S. No, AP81, 83, N Main Rd, near Hard Rock Cafe, Koregaon Park
            Annexe, Mundhwa, Pune, Maharashtra 411036
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="flex justify-center sm:justify-start items-center gap-2">
              <Mail size={16} /> sidharthgroups@gmail.com
            </p>
            <p className="flex  sm:justify-start items-center gap-2">
              <Phone size={16} /> +91-88053608977
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Construction</li>
            <li>Agriculture</li>
            <li>Finance</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Overview</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-semibold mb-3">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li>Construction</li>
            <li>Agriculture</li>
            <li>Finance</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* Policies & Socials */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>

          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-6 pt-4 text-center text-xs sm:text-sm">
        <p>
          © 2025 Siddharth Group. All Rights Reserved. <br className="sm:hidden" />
          Company Registration No.: SG/IND/2020/4582
        </p>
      </div>
    </footer>
  );
}
