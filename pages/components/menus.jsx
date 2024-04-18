// components/Menus.js
import React from "react";

function Menus({ activeMenu, handleMenuClick }) {
  return (
    <div>
      <ul className="flex gap-10 justify-end">
        {MenusList.map((item, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(index, item.href)}
            className={`cursor-pointer hover:text-[#1479f6] hover:border-b-2 hover:border-[#1479f6] ${
              activeMenu === index
                ? "text-[#1479f6] border-b-2 border-[#1479f6] "
                : "text-[#5D677D]"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menus;

export const MenusList = [
  {
    name: "Al Audit",
    href: "/",
  },
  {
    name: "Manual Audit",
    href: "/manualaudit",
  },
  {
    name: "RedTeam",
    href: "/redteam",
  },
  {
    name: "Monitor",
    href: "/monitor",
  },
  {
    name: "Incident Response",
    href: "/incidentresponse",
  },
];
