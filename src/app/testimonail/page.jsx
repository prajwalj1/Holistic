"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [expandedReejesh, setExpandedReejesh] = useState(false);
  const [expandedPrajwal, setExpandedPrajwal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState("");
  const isExpanded = expandedReejesh || expandedPrajwal; // Track if any section is expanded

  return (
    <div className="font-sans">
      {/* Image Section */}
      <div className="relative mb-4">
        <img
          src="/images/contact.jpg"
          alt="Contact Us Visual"
          className="w-full h-[350px] rounded-lg"
        />

        {/* Overlay Container for Blog & Breadcrumb - Show Blog Only When Expanded */}
        <div className="absolute bottom-6 right-4 flex flex-col items-end bg-opacity-8 p-3 rounded-md">
          {isExpanded && (
            <span className="text-3xl font-bold text-red-600">Blog</span>
          )}

          {/* Breadcrumb Navigation */}
          <nav className="text-sm">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>{" "}
            &gt; <Link href="/testimonial" className="text-blue-500 hover:underline">
              Testimonial
            </Link>
            {activeTestimonial && (
              <> &gt; <span className="text-gray-500">{activeTestimonial}</span> </>
            )}
          </nav>
        </div>
      </div>

      {/* Testimonial for Reejesh Gautam */}
      <h2 className="text-xl font-bold text-red-600  mb-4 text-center">
        Reejesh Gautam – CEO, Universal Health Care, Akron, USA
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          "With a strong foundation in biochemistry from Idaho State University, Reejesh Gautam has dedicated his career..."
        </p>
        {!expandedReejesh && (
          <button
            onClick={() => {
              setExpandedReejesh(true);
              setActiveTestimonial("Reejesh Gautam, Akron, USA");
            }}
            className="mt-2 text-blue-600 hover:underline focus:outline-none"
          >
            Read More
          </button>
        )}
        {expandedReejesh && (
          <>
            <p className="text-gray-700 mt-2">
              "Based in Akron, Ohio, he has over five years of experience in supporting individuals with complex healthcare needs..."
            </p>
            <div className="mt-4">
              <Link href="/testimonail/about-reejesh">
                <button className="text-blue-600 hover:underline font-medium">
                  Learn More About Reejesh Gautam →
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Testimonial for Prajwal Gautam */}
      <h2 className="text-xl font-bold text-red-600 mb-4 text-center">
        Tika Khatiwoda – Future Psychiatric & Neurological Healthcare Visionary
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-700">
          "My name is Tika Khatiwoda, and I am currently pursuing my MBBS degree in India..."
        </p>
        {!expandedPrajwal && (
          <button
            onClick={() => {
              setExpandedPrajwal(true);
              setActiveTestimonial("Tika Khatiwoda, Akron, USA");
            }}
            className="mt-2 text-blue-600 hover:underline focus:outline-none"
          >
            Read More
          </button>
        )}
        {expandedPrajwal && (
          <>
            <p className="text-gray-700 mt-2">
              "My dedication to this field stems from my deep commitment to providing holistic, patient-centered care..."
            </p>
            <div className="mt-4">
              <Link href="/testimonail/about-tika">
                <button className="text-blue-600 hover:underline font-medium">
                  Learn More About Tika Khatiwoda →
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;``

