"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import Menus, { menusList } from "./menus";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };
  return (
    <div className="text-white w-full">
      <div className="bg-[#191d23] flex  w-full items-center rounded-sm">
        <div className="w-60 p-2 flex justify-center ">
          <Image src={logo} alt="Picture of the author" className="w-36" />
        </div>

        <div className="menus justify-items-end border-r border-l p-4 border-[#2b2f35] w-full">
          <Menus activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
        </div>

        <div className="w-60 p-2 flex justify-center ">
          <p>user</p>
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
