"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import CodeEditer from "../components/CodeEditer";
import FolderStructure from "../components/FolderStructure";

function AlAudit() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    index: null,
    item: null,
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleToggleFolder = (index, item) => {
    setSelectedFolder({ index, item });
    setSelectedFiles([]);
  };

  // const handleToggleFile = (file) => {
  //   if (selectedFiles.includes(file)) {
  //     setSelectedFiles(selectedFiles.filter((f) => f !== file));
  //   } else {
  //     setSelectedFiles([...selectedFiles, file]);
  //   }
  // };

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
              Option
            </button>
          </div>
        </div>
        <div>
          <div className="flex mt-4 justify-between gap-2 max-h-screen ">
            <div className="bg-[#0d0f11] w-96 rounded-sm">
              <FolderStructure
                folders={folders}
                setFolders={setFolders}
                selectedFolder={selectedFolder.index}
                setSelectedFolder={handleToggleFolder}
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
              />
            </div>
            <div className="bg-[#0d0f11] w-full rounded-sm">
              <div>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file}</li>
                  ))}
                </ul>
              </div>
              {selectedFolder.index !== null &&
                selectedFolder.index < folders.length && (
                  <CodeEditer fileName={selectedFolder.item?.name} />
                )}
            </div>
            <div className="bg-[#0d0f11] w-96 rounded-sm">
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
