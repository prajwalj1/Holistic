import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="font-sans">
      {/* Image Section */}
      <div className="relative mb-4">
        <img
          src="/images/contact.jpg"
          alt="Contact Us Visual"
          className="w-full h-[350px] rounded-lg"
        />
        {/* Overlay Breadcrumb Navigation */}
        <nav className="absolute bottom-4 right-4 bg-opacity-70 bg-white p-2 rounded-md text-sm">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>{" "}
          &gt; <span className="text-gray-500">Vacancy</span>
        </nav>
      </div>

      {/* Vacancy Content */}
         {/* Contact Section */}
         <div className="text-center">
                <h2 className="font-bold text-red-600 text-2xl mb-10 mt-4">Vacancy Announcement
                </h2>
                <p className="text-gray-500 text-base mb-10"> 
                 "At the moment, there are no vacancies available"




                </p>
            </div>
    </div>
  );
};

export default page;