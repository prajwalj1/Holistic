"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeService = () => {
  return (
    <div className="font-sans flex flex-col bg-zinc-50 items-center text-center p-8">
      {/* Welcome Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Welcome to Our Home Services
      </motion.h1>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        
        {/* Left Side - Residential Care & Beneficiaries */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-left space-y-4 w-full md:w-1/3"
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-blue-700">🏡 24/7 Residential Care</span>
          </div>
          <p className="text-gray-600">
            Our universal healthcare facility provides round-the-clock residential services, ensuring safety, medical supervision, and assistance for individuals with cognitive and physical disabilities.
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <span className="text-2xl font-bold text-green-700">👥 Beneficiaries</span>
          </div>
          <p className="text-gray-600">
            Universal Health Care (UHS) serves elderly individuals, patients with neuropsychiatric conditions, disabled individuals, and those needing long-term care in a safe and structured environment.
          </p>
        </motion.div>

        {/* Centered Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center w-full md:w-1/3"
        >
          <Image
            src="/images/home.jpg"
            alt="Home Service"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side - Objectives & Strategy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 w-full md:w-1/3 text-left md:text-right mt-6 md:mt-0"
        >
          <div className="flex items-center justify-start md:justify-end space-x-3">
            <span className="text-2xl font-bold text-orange-700">🎯 Objectives</span>
          </div>
          <p className="text-gray-600">
            UHS aims to offer holistic and specialized medical care, ensuring dignity, comfort, and innovative healthcare solutions for those needing long-term support.
          </p>
          <div className="flex items-center justify-start md:justify-end space-x-3 mt-4">
            <span className="text-2xl font-bold text-purple-700">📊 Strategy</span>
          </div>
          <p className="text-gray-600">
            Universal Health Care employs a patient-centered approach, integrating modern medical research, rehabilitation therapies, and compassionate caregiving to improve overall well-being.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeService;