import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/zHxhNmRC/Group-3.png"
            alt="Profast Logo"
            className="w-20 h-8"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li className="hover:text-lime-600 cursor-pointer">Services</li>
          <li className="hover:text-lime-600 cursor-pointer">Coverage</li>
          <li className="hover:text-lime-600 cursor-pointer">About Us</li>
          <li className="hover:text-lime-600 cursor-pointer">Pricing</li>
          <li className="hover:text-lime-600 cursor-pointer">Be a Rider</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600 transition">
            Be a Rider
          </button>
        </div>

        {/* Mobile Menu Button with Animation */}
        <motion.button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <FiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 shadow-md origin-top"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
              <li className="hover:text-lime-600 cursor-pointer">Services</li>
              <li className="hover:text-lime-600 cursor-pointer">Coverage</li>
              <li className="hover:text-lime-600 cursor-pointer">About Us</li>
              <li className="hover:text-lime-600 cursor-pointer">Pricing</li>
              <li className="hover:text-lime-600 cursor-pointer">Be a Rider</li>
              <div className="flex flex-col items-center space-y-2 pt-2">
                <button className="w-32 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  Sign In
                </button>
                <button className="w-32 px-4 py-2 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600 transition">
                  Be a Rider
                </button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
