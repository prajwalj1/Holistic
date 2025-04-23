"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const Page = () => {
  return (
    <div className="font-sans">
      {/* Image Section */}
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/contact.jpg"
          alt="Contact Us Visual"
          className="w-full h-[350px] rounded-lg"
        />

        {/* Overlay Breadcrumb Navigation */}
        <motion.nav
          className="absolute bottom-4 right-4 bg-opacity-70 bg-white p-2 rounded-md text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>{" "}
          &gt; <span className="text-gray-500">Our Services</span>
        </motion.nav>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="font-bold text-center text-red-600 text-3xl mb-5.5 mt-4">
          Our Services
        </h2>
      </motion.div>

      {/* Our Services Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Left Portion: Basic Service */}
        <div>
          <h3 className="font-bold text-red-600 text-xl mb-3">Our Basic Service</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Providing educational mental health resources.</li>
            <li>Organizing community mental health workshops.</li>
            <li>Offering stress management techniques.</li>
            <li>Guided mindfulness and meditation sessions.</li>
            <li>Creating personalized wellness plans.</li>
            <li>Anonymous peer support forums.</li>
            <li>Promoting workplace mental health awareness.</li>
            <li>Providing digital journaling tools.</li>
            <li>Goal-setting and tracking for personal growth.</li>
            <li>Connecting users with global mental health resources.</li>
          </ul>
        </div>

        {/* Right Portion: Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/images/home.jpg" // Replace with your actual image path
            alt="Basic Service Visual"
            className="rounded-lg shadow-lg w-full h-auto max-w-[300px]"
          />
        </motion.div>
      </motion.div>

      {/* Residential Health and Social Service Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* Left Portion: Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <img
            src="/images/home.jpg" // Replace with your actual image path
            alt="Residential Service Visual"
            className="rounded-lg shadow-lg w-full h-auto max-w-[300px]"
          />
        </motion.div>

        {/* Right Portion: Explanation */}
        <div>
          <h3 className="font-bold text-red-600 text-xl mb-3">
            Residential Health and Social Services
          </h3>
          <p className="text-gray-700">
            Universal Health Care (UHS) is dedicated to offering comprehensive
            residential health and social services. These include assistance
            with housing for mental wellness patients, fostering community
            connections, and promoting social inclusion through structured
            programs. Our goal is to support individuals in leading fulfilling
            lives by addressing their psychological, emotional, and social
            needs in a supportive environment.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;