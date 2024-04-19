import React from "react";
import Link from "next/link";

function Breadcrumbs({ items }) {
  return (
    <div className="text-gray-500 p-2">
      {items?.map((item, index) => (
        <span key={index}>
          <Link href={item.href} className="text-gray-500">
            {item.text}
          </Link>
          {index < items.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
