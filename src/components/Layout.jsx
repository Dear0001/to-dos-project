import React from "react";
import { Navbar } from "./Navbar";
import { SidBarLeft } from "./SideBarLeft";
import { Content } from "./Content";
import { SidebarRight } from "./SidebarRight";
import { BsThreeDots } from "react-icons/bs";

export const Layout = () => {
  return (
    <div className="bg-wrapper container-width text-black-800 rounded-[35px]">
      <Navbar />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1 w-full">
          <SidBarLeft />
        </div>
        <div className="col-span-7 bg-gray-200 rounded-[20px] w-full m-2 px-5 h-[620px] max-h-[700px] overflow-y-scroll example">
          <Content />
        </div>
        <div className="col-span-4">
          <div className="flex justify-between mx-5 mt-4 mb-2 text-center">
            <h3 className="mb-2 text-cente text-[14px] font-bold">Clients Messages</h3>
            <BsThreeDots className="mt-2" />
          </div>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};
