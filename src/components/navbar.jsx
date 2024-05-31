import React from "react";

import grazleLogo from "@/assets/grazle-logo.png";
import profile from "../assets/profile.jpeg";

import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white h-[70px] shadow-sm flex items-center">
      <div className="w-[240px] flex justify-center items-center">
        <Image src={grazleLogo} className="scale-[0.35] mt-[10px]" />
      </div>
      <div className="flex-1 flex justify-between items-center px-[22px]">
        <div>
          <p className="text-[16px] font-[600] leading-[24px]">
            Hello, Johny Haulas
          </p>
          <p className="text-[13px] font-[400] leading-[19.5px] text-[#777777]">
            Welcome Back
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoIosNotificationsOutline className="bg-gray-200 rounded-[5px] h-[23px] w-[23px] p-1" />
          <p className="text-[14px] font-[500]">Johny Haulas</p>
          <div className="w-[40px] h-[40px] rounded-[9px] bg-gray-200">
            <Image src={profile} className="rounded-[9px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;