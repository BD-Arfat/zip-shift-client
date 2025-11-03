import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-40 px-6 rounded-t-3xl">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/zHxhNmRC/Group-3.png"
            alt="Profast Logo"
            className="w-28 "
          />
        </div>

        {/* Tagline */}
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Divider */}
        <div className="border-t border-dotted border-gray-700 my-6" />

        {/* Menu Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm md:text-base font-medium">
          <li className="hover:text-lime-400 cursor-pointer transition">Services</li>
          <li className="hover:text-lime-400 cursor-pointer transition">Coverage</li>
          <li className="hover:text-lime-400 cursor-pointer transition">About Us</li>
          <li className="hover:text-lime-400 cursor-pointer transition">Pricing</li>
          <li className="hover:text-lime-400 cursor-pointer transition">Blog</li>
          <li className="hover:text-lime-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* Divider */}
        <div className="border-t border-dotted border-gray-700 my-6" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 text-gray-400 text-lg">
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-white transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-white transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} Profast. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
