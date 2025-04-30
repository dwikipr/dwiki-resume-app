"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TbMenu3 } from "react-icons/tb";

interface HeadersProps {
  data: ResumeData;
}

const Headers: React.FC<HeadersProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row p-8 justify-between w-full">
      <div className="flex flex-row items-center gap-4">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <p className="font-semibold underline">dwiki.prsty@gmail.com</p>
      </div>
      <div className="relative">
        <button
          id="menu-btn"
          className="block focus:outline-none cursor-pointer bg-white rounded-full py-2 px-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <TbMenu3 size={24} color="black" />
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Headers;
