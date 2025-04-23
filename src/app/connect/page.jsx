import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex justify-end items-center pr-4 bg-blue-500">
      <div className="space-x-2 p-1 flex">
        <FaFacebook className="text-amber-50 text-3xl" />
        <FaLinkedin className="text-amber-50 text-3xl" />
      </div>
    </div>
  )
}

export default page