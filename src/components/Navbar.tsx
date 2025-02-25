"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Utility to add active state style
  const activeClass = "text-[#538e53] font-bold ";
  const defaultClass = "text-[#2b2b2b] hover:text-[#538e53]";

  return (
    <nav className="bg-[#f1f1f1] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Image src="/Adminlogo.png" alt="arrow" width={60} height={40} />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className={pathname === "/" ? activeClass : defaultClass}>
            Home
          </a>
          <a
            href="/about"
            className={pathname === "/about" ? activeClass : defaultClass}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={pathname === "/contact" ? activeClass : defaultClass}
          >
            Contact Us
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="/signin"
            className="text-[#457a45] px-3 py-1 rounded hover:bg-[#457a45]"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-[#CCE5CC] text-white px-3 py-1 rounded hover:bg-[#CCE5CC]"
          >
            Get Started
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#2b2b2b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-[#538e53] p-4`}
      >
        <div className="space-y-2">
          <a
            href="/"
            className={`block py-2 ${
              pathname === "/" ? activeClass : "text-[#2b2b2b]"
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`block py-2 ${
              pathname === "/about" ? activeClass : "text-[#2b2b2b]"
            }`}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={`block py-2 ${
              pathname === "/contact" ? activeClass : "text-[#2b2b2b]"
            }`}
          >
            Contact Us
          </a>
        </div>
        <div className="mt-4 space-y-2">
          <a
            href="/signin"
            className="block text-[#457a45] px-3 py-1 rounded hover:bg-[#457a45] text-center"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block bg-[#CCE5CC] text-white px-3 py-1 rounded hover:bg-[#CCE5CC] text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
