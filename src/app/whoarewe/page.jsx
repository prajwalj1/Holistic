import React from "react";
import { FaSearch } from "react-icons/fa";

const ImagesWithIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {[1, 2, 3, 4, 5].map((image, index) => (
        <div
          key={index}
          className="relative w-60 h-40 sm:w-72 sm:h-48 lg:w-80 lg:h-56 bg-gray-200 rounded overflow-hidden"
          style={{
            backgroundImage: `url('/images/pic${image}.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Search Icon */}
          <FaSearch className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full cursor-pointer" />

          {/* Objective Text */}
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-white text-sm px-2 py-1">
            <p>Picture {image} Objective</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesWithIcons;