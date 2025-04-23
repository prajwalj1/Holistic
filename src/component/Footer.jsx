import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 px-4">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl" />
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-sm text-gray-300">Akron, US</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl" />
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-sm text-gray-300">+1 814-351-2527</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-sm text-gray-300">universalpremiercare@gmail.com</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-xl" />
              <h3 className="text-lg font-semibold">Follow Us</h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Find Us on the Map</h3>
            <div className="h-40 sm:h-48 bg-gray-600 rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.818801162295!2d-81.51900938462455!3d41.08144477929356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836c8ea9264e021%3A0x9a30c8ed62047c36!2sAkron%2C%20OH%2C%20USA!5e0!3m2!1sen!2sus!4v1610122437002!5m2!1sen!2sus"
                title="Akron Location"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-zinc-1001">
            Copyright © 2024 Universal Premier Care. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;