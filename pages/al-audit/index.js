"use client";

import React from "react";
import Layout from "../components/Layout";
import ErrorWarningComponent from "../components/ErrorWarning";
// import "monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.css";
import CodeEditer from "../components/CodeEditer";
import FolderStructure from "../components/FolderStructure";

function AlAudit() {
  const folders = [
    {
      name: "Folder 1",
      files: ["File 1", "File 2", "File 3"],
    },
    {
      name: "Folder 2",
      files: ["File 4", "File 5"],
    },
  ];

  const code = `function hello() {
    console.log('Hello, world!');
  }`;

  const errors = ["Error 1", "Error 2"];
  const warnings = ["Warning 1", "Warning 2"];
  return (
    <Layout>
      <div className=" p-4 bg-[#191d23] min-h-screen rounded-sm ">
        <div className="flex justify-between items-center border-b-2 border-[#2b2f35] pb-4">
          <h1 className="text-2xl">Sample Project</h1>
          <div className="two-cards flex justify-around w-80">
            <button className="bg-[#1479f6] text-white p-2 rounded-sm w-36">
              Audit Now
            </button>
            <button className="text-[#1479f6] bg-[#152c46] p-2 rounded-sm w-36">
              {" "}
              Option
            </button>
          </div>
        </div>
        <div>
          <div className="flex mt-4 justify-between gap-2 max-h-screen ">
            <div className="bg-[#0d0f11] w-96 rounded-sm">
              <FolderStructure />
            </div>
            <div className="bg-[#0d0f11] w-full rounded-sm">
              <CodeEditer code={code} />
            </div>
            <div className="bg-[#0d0f11] w-68 rounded-sm">
              {/* <ErrorWarningComponent errors={errors} warnings={warnings} /> */}
              <FolderStructure />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AlAudit;
