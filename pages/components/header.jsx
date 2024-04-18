"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import Menus, { MenusList } from "./Menus";
import { IoIosArrowDown } from "react-icons/io";
import Breadcrumbs from "./BreadCrumb";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const [activeMenu, setActiveMenu] = useState(0);

  const router = useRouter();
  const handleMenuClick = (index, href) => {
    setActiveMenu(index);
    router.push(href);
  };
  const style = "avataaars"; // Style of the avatar
  const seed = Math.random().toString(36).substring(2, 15); // Random seed for variation

  // Generate the URL for the random avatar image

  const avatarUrl1 = `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}}`; // need to change seed

  const breadcrumbs = [
    { text: "AlAudit", href: "/" },
    // { text: "AlAudit", href: "/al-audit" },
    { text: "Project", href: "/al-audit/project" },
  ];
  return (
    <div className=" w-full">
      <div className="bg-[#191d23] flex  w-full items-center rounded-sm">
        <div className="w-56 p-2 flex justify-center ">
          <Link href="/">
            <Image src={logo} alt="Picture of the author" className="w-32" />
          </Link>
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

      <Breadcrumbs items={breadcrumbs} />
      {/* Render content based on the activeMenu */}
      {/* {activeMenu !== null && (
        <div className="mt-4 p-4 bg-gray-200">
          {MenusList[activeMenu].name} content here
        </div>
      )} */}
    </div>
  );
}

export default Header;

const CustomImageLoader = ({ src, width, height }) => {
  return <img src={src} width={width} height={height} className="w-8 h-8" />;
};
