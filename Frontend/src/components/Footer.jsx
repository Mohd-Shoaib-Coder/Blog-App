import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full py-4 px-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <a href="/home" className="font-normal hover:underline">Home</a>
          <a href="/about" className="font-normal hover:underline">About Us</a>
          <a href="/contact" className="font-normal hover:underline">Contact Us</a>
        </ul>

        {/* Center Text */}
        <p className="font-normal text-sm text-center">All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="h-5 w-5 hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <BsTwitterX className="h-5 w-5 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
