"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import CodeEditer from "../components/CodeEditer";
import FolderStructure from "../components/FolderStructure";
import { MdClose } from "react-icons/md";
import CountIssue from "../components/CountIssue";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";

function AlAudit() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    index: null,
    item: null,
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const [showCountIssue, setShowCountIssue] = useState(true);
  const [showFolderStructure, setShowFolderStructure] = useState(true);

  const handleToggleFolder = (index, item) => {
    setSelectedFolder({ index, item });
    setSelectedFiles([]);
    setActiveFile(null);
  };

  const handleToggleFile = (file) => {
    if (
      activeFile === file
      // && selectedFiles.includes(file)
    ) {
      // setSelectedFiles(selectedFiles.filter((f) => f !== file));
      setActiveFile(null);
    } else {
      // setSelectedFiles([...selectedFiles, file]);
      setActiveFile(file);
    }
  };

  const handleRemoveFile = (file) => {
    setSelectedFiles(selectedFiles.filter((f) => f !== file));
  };

  const handleToggleCountIssue = () => {
    setShowCountIssue((prevState) => !prevState);
  };

  const handleToggleFolderStructure = () => {
    setShowFolderStructure((prevState) => !prevState);
  };
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
            {showFolderStructure && (
              <div className="bg-[#0d0f11] w-1/2 rounded-sm">
                <FolderStructure
                  folders={folders}
                  setFolders={setFolders}
                  selectedFolder={selectedFolder.index}
                  setSelectedFolder={handleToggleFolder}
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </div>
            )}

            <div className="bg-[#1e232b] w-full rounded-sm relative">
              <div
                className=" absolute -left-2 top-2/3 z-10 bg-[#1479f6] p-1"
                onClick={handleToggleFolderStructure}
              >
                {showFolderStructure === true ? (
                  <LuArrowLeftToLine />
                ) : (
                  <LuArrowRightToLine />
                )}
              </div>
              <div
                className=" absolute -right-2 top-2/3 z-10 bg-[#1479f6] p-1"
                onClick={handleToggleCountIssue}
              >
                {showCountIssue === true ? (
                  <LuArrowRightToLine />
                ) : (
                  <LuArrowLeftToLine />
                )}
              </div>
              <div>
                <ul className="flex  ">
                  {selectedFiles.map((file, index) => (
                    <li
                      key={index}
                      className={`border-r-2 border-[#5d677d] p-2 flex  w-40 cursor-pointer justify-evenly items-center 
                      ${
                        activeFile === file
                          ? "bg-[#1479f6]  rounded-sm  text-white"
                          : "text-[#5d677d]"
                      }
                      `}
                      onClick={() => handleToggleFile(file)}
                    >
                      <span>{file}</span>
                      <MdClose
                        className="cursor-pointer"
                        onClick={() => handleRemoveFile(file)}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {selectedFolder.index !== null &&
              selectedFolder.index < folders.length ? (
                <CodeEditer
                  fileName={activeFile || selectedFolder.item?.name}
                />
              ) : (
                <div className="min-h-screen text-center p-2 ">
                  Ready to Write code
                </div>
              )}
            </div>

            {showCountIssue && (
              <div className="bg-[#0d0f11] w-1/2 rounded-sm">
                <CountIssue />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AlAudit;
