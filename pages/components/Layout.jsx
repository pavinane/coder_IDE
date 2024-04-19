import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-[#0d0f11] flex h-full flex-col items-center justify-between p-2">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}

export default Layout;
