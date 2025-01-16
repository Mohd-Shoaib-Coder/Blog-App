

import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-row mt-10 bg-black text-white h-[55px] w-full  bottom-0"> {/* Updated: Added 'w-full' and 'fixed bottom-0' to make the footer stick at the bottom */}
      
      <ul className="flex flex-row gap-4 pl-10">
        <a href="/home" className="font-normal">Home</a>
        <a href="/about" className="font-normal">About US</a>
        <a href="/contact" className="font-normal">Contact Us</a>
      </ul>

      <p className="font-normal">
        All Rights Reserved.
      </p>

      <div className="flex justify-center items-center flex-row gap-5 pr-10">
        <FaGithub className="h-6 w-6" />
        <BsTwitterX className="h-6 w-6" />
      </div>
      
    </div>
  );
}

export default Footer;












