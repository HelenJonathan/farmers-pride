"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Utility to add active state style
  const activeClass = "text-[#538e53] font-bold";
  const defaultClass = "text-[#2b2b2b] hover:text-[#538e53]";

  return (
    <>
      <nav className="bg-[#f1f1f1] p-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/Adminlogo.png"
                alt="Agritech Logo"
                width={60}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={pathname === "/" ? activeClass : defaultClass}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? activeClass : defaultClass}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? activeClass : defaultClass}
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/signin"
              className="text-[#457a45] px-4 py-2 rounded hover:bg-[#457a45] hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#538e53] text-white px-4 py-2 rounded hover:bg-[#457a45] transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#2b2b2b] p-2 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image src="/element-3.png" alt="Menu" width={25} height={25} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#538e53] z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
        style={{ paddingTop: "80px" }}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            <Link
              href="/"
              className={`text-2xl py-3 ${
                pathname === "/"
                  ? "text-white font-bold"
                  : "text-white hover:text-[#CCE5CC]"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-2xl py-3 ${
                pathname === "/about"
                  ? "text-white font-bold"
                  : "text-white hover:text-[#CCE5CC]"
              } transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-2xl py-3 ${
                pathname === "/contact"
                  ? "text-white font-bold"
                  : "text-white hover:text-[#CCE5CC]"
              } transition-colors duration-200`}
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-auto mb-10 space-y-4 w-full max-w-xs mx-auto">
            <Link
              href="/signin"
              className="block text-center text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#538e53] transition-colors duration-300 w-full"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block text-center bg-white text-[#538e53] px-6 py-3 rounded-md hover:bg-[#CCE5CC] hover:text-white transition-colors duration-300 w-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Add padding to the page content to prevent it from being hidden under the fixed navbar */}
      <div className="pt-[72px]"></div>
    </>
  );
};

export default Navbar;
