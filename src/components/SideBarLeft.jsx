import React from "react";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const SidBarLeft = () => {
  return (
    <div className="flex flex-col gap-9 pt-10 ml-6 items-center justify-center">
     <span className="text-3xl w-12 h-12 bg-gray-300 rounded-[48%] flex items-center justify-center">
        <MdHome />
      </span>
      <span className="text-3xl"><FaUser /></span>
      <span className="text-3xl"><FaMessage /></span>
      <span className="text-3xl"><FaGraduationCap /></span>
      <span className="text-3xl"><FaClock /></span>
      <span className="text-3xl"><IoMdSettings /></span>
    </div>
  );
};
