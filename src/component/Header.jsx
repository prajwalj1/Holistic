"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hasScrolled && currentScrollY > 10) {
        setShowHeader(false);
        setHasScrolled(true);
        setTimeout(() => setShowHeader(true), 300); // flash disappear
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
        hasScrolled
          ? showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-12"
          : "opacity-100"
      }`}
    >
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image
            src="/images/NeuralBudegt.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-xl">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar / Nav Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex md:items-center md:bg-transparent md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <a href="/" className="text-lg font-medium hover:text-blue-600">
              Home
            </a>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-blue-600"
            >
              Services
            </Link>

            <div className="relative group">
              <a href="#" className="text-lg font-medium hover:text-blue-600">
                About <span className="ml-1">&#9662;</span>
              </a>
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                <ul className="p-4">
                  <li className="py-1 hover:text-red-600">
                    <Link href="/about/goals">Our Goals</Link>
                  </li>
                  <li className="py-1 hover:text-red-600">
                    <a href="/about/services">Our Services</a>
                  </li>
                  <li className="py-1 hover:text-red-600">
                    <a href="/elders">Our Elders</a>
                  </li>
                  <li className="py-1 hover:text-red-600">
                    <a href="/team">Our Team</a>
                  </li>
                  <li className="py-1 hover:text-red-600">
                    <a href="/accommodation">Our Accommodation</a>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="/contact-us"
              className="text-lg font-medium hover:text-blue-600"
            >
              Contact Us
            </a>
            <a
              href="/gallery"
              className="text-lg font-medium hover:text-blue-600"
            >
              Gallery
            </a>
            <Link
              href="/vacancy"
              className="text-lg font-medium hover:text-blue-600"
            >
              Vacancy
            </Link>
            <Link
              href="/testimonail"
              className="text-lg font-medium hover:text-blue-600"
            >
              Testimonial
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
