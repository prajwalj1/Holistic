import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const HeaderBody = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-screen relative"
      style={{ backgroundImage: "url('/images/pic.png')" }}
    >
      {/* Overlay Text */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-zinc-900 text-2xl md:text-4xl font-bold text-center px-4">
          Your Universal Premiere Care Journey Starts Here
        </h1>
      </div>

      {/* Icons Section */}
      <div className="absolute bottom-0 left-0 w-full bg-red-500 text-white flex flex-wrap justify-around items-center py-4">
        {/* Email Icon */}
        <div className="flex items-center space-x-2 md:space-x-4 w-1/2 md:w-auto mb-2 md:mb-0">
          <FaEnvelope className="text-xl md:text-3xl" />
          <div>
            <span className="text-sm md:text-base font-semibold">Email Us</span>
            <div className="text-xs md:text-sm text-gray-200">universalpremiercare@gmail.com</div>
          </div>
        </div>

        {/* Location Icon */}
        <div className="flex items-center space-x-2 md:space-x-4 w-1/2 md:w-auto mb-2 md:mb-0">
          <FaMapMarkerAlt className="text-xl md:text-3xl" />
          <div>
            <span className="text-sm md:text-base font-semibold">Our Location</span>
            <div className="text-xs md:text-sm text-gray-200">Herisberg, US</div>
          </div>
        </div>

        {/* Call Us Icon */}
        <div className="flex items-center space-x-2 md:space-x-4 w-1/2 md:w-auto mb-2 md:mb-0">
          <FaPhoneAlt className="text-xl md:text-3xl" />
          <div>
            <span className="text-sm md:text-base font-semibold">Call Us</span>
            <div className="text-xs md:text-sm text-gray-200">+1 814-351-2527</div>
          </div>
        </div>

        {/* Office Hours Icon */}
        <div className="flex items-center space-x-2 md:space-x-4 w-1/2 md:w-auto mb-2 md:mb-0">
          <FaClock className="text-xl md:text-3xl" />
          <div>
            <span className="text-sm md:text-base font-semibold">Office Hours</span>
            <div className="text-xs md:text-sm text-gray-200">9:00 AM - 5:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBody;