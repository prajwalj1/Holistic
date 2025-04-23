import React from "react";
import Image from "next/image";

const Purpose = () => {
  return (
    <div className="font-sans flex flex-col items-center text-center p-8">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Our Purpose
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
        
        {/* Left Side - Purpose Text */}
        <div className="text-left w-full md:w-1/2 flex items-center">
          <p className="text-gray-600 text-justify max-w-lg">
            Universal Health Care (UHC) aims to provide **accessible, affordable, and high-quality healthcare**  
            for individuals of all backgrounds. Our mission is to eliminate barriers to medical treatment, ensuring that  
            every person receives the **care, dignity, and support** they deserve.  
            <br /><br />
            Through innovative medical practices, holistic healing approaches, and a patient-centered philosophy,  
            UHC is dedicated to **enhancing lives through compassionate and structured care**. Whether addressing  
            neuropsychiatric conditions, chronic diseases, or general healthcare needs, our purpose is to make  
            healthcare **effective, accessible, and transformative** for all.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/purpose.png"
            alt="Universal Health Care"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Purpose;