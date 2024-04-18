"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import Menus, { menusList } from "./menus";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };
  const style = "avataaars"; // Style of the avatar
  const seed = Math.random().toString(36).substring(2, 15); // Random seed for variation

  // Generate the URL for the random avatar image
  //   const avatarUrl = `https://avatars.dicebear.com/api/${style}/${seed}.svg`;

  const avatarUrl1 = `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}`;
  return (
    <div className="text-white w-full">
      <div className="bg-[#191d23] flex  w-full items-center rounded-sm">
        <div className="w-60 p-2 flex justify-center ">
          <Image src={logo} alt="Picture of the author" className="w-36" />
        </div>

        <div className="menus justify-items-end border-r border-l p-4 border-[#2b2f35] w-full">
          <Menus activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
        </div>

        <div className="w-80 p-2 flex justify-around items-center ">
          <div className="w-12 h-12 p-2 flex justify-center bg-white rounded-full ">
            <CustomImageLoader src={avatarUrl1} width={20} height={20} />
          </div>
          <h1>PaviNanE</h1>
          <div className="arrow">
            <IoIosArrowDown className="text-[#5D677D] text-md w-10 h-6 " />
          </div>
        </div>
      </div>
      {/* Render content based on the activeMenu */}
      {activeMenu !== null && (
        <div className="mt-4 p-4 bg-gray-200">
          {menusList[activeMenu].name} content here
        </div>
      )}
    </div>
  );
}

export default Header;

const CustomImageLoader = ({ src, width, height }) => {
  return <img src={src} width={width} height={height} className="w-8 h-8" />;
};
