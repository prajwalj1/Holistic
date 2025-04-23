"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(""); // Tracks the active breadcrumb

  useEffect(() => {
    // Automatically set breadcrumb based on a specific logic
    setActiveTestimonial("Tika Khatiwoda, Akron, USA"); // Default testimonial, this can be dynamic
  }, []); // Runs on component mount

  return (
    <div className="font-sans">
      {/* Image Section */}
      <div className="relative mb-4">
        <img
          src="/images/contact.jpg"
          alt="Contact Us Visual"
          className="w-full h-[350px] rounded-lg object-cover"
        />

        {/* Overlay Container */}
        <div className="absolute bottom-6 right-4 flex flex-col items-end bg-opacity-70 p-3 rounded-md shadow-lg">
          <span className="text-3xl font-bold text-red-600">Blog</span>

          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="text-sm mt-2">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link href="/testimonail" className="text-blue-500 hover:underline">
              Testimonial
            </Link>
            {activeTestimonial && (
              <>
                {" "}
                &gt; <span className="text-gray-500">{activeTestimonial}</span>{" "}
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Testimonial for Reejesh Gautam */}
      <h2 className="text-xl font-bold text-red-600 mb-4 text-center">
      Tika Khatiwoda – Future Psychiatric & Neurological Healthcare Visionary
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
        "My name is Tika Khatiwoda, and I am currently pursuing my MBBS degree in India..."
        </p>
        <p className="text-gray-700 mt-2">
        "My dedication to this field stems from my deep commitment to providing holistic, patient-centered care..."
        </p>
      </div>

    </div>
  );
};

export default Page;