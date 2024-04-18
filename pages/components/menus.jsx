import React from "react";

function Menus({ activeMenu, handleMenuClick }) {
  return (
    <div>
      <ul className="flex gap-10 justify-end">
        {menusList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleMenuClick(index)} // Pass the index to the handleMenuClick function
              className={`cursor-pointer hover:text-blue-500 hover:border-b-2 hover:border-blue-500  ${
                activeMenu === index
                  ? "text-blue-500 border-b-2 border-blue-500 "
                  : "text-[#5D677D]"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menus;

export const menusList = [
  {
    name: "Al Audit",
  },
  {
    name: "Manual Audit",
  },
  {
    name: "RedTeam",
  },
  {
    name: "Monitor",
  },
  {
    name: "Incident Response",
  },
];
