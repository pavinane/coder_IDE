// FolderStructureComponent.js
"use client";
import React, { useState } from "react";
import { TbFolderPlus } from "react-icons/tb";
import { LuFilePlus2 } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const FolderStructure = () => {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  const handleCreateFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      setFolders([
        ...folders,
        { name: folderName, isOpen: false, folders: [], files: [] },
      ]);
    }
  };

  const handleCreateFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      setFiles([...files, { name: fileName }]);
    }
  };

  const handleToggleFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
    setFolders(updatedFolders);
  };

  const handleCreateSubFolder = (index) => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      const updatedFolders = [...folders];
      updatedFolders[index].folders.push({
        name: folderName,
        isOpen: false,
        folders: [],
        files: [],
      });
      setFolders(updatedFolders);
    }
  };

  const handleCreateSubFile = (index) => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      const updatedFolders = [...folders];
      updatedFolders[index].files.push({ name: fileName });
      setFolders(updatedFolders);
    }
  };

  //   const handleCreateFolder = () => {
  //     const folderName = prompt('Enter folder name:');
  //     if (folderName) {
  //       setFolders([...folders, { name: folderName, isOpen: false, folders: [], files: [] }]);
  //     }
  //   };

  //   const handleCreateFile = () => {
  //     const fileName = prompt('Enter file name:');
  //     if (fileName) {
  //       setFiles([...files, { name: fileName }]);
  //     }
  //   };

  const handleDeleteFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders.splice(index, 1);
    setFolders(updatedFolders);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleEditFolder = (index) => {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
      const updatedFolders = [...folders];
      updatedFolders[index].name = folderName;
      setFolders(updatedFolders);
    }
  };

  //   const handleEditFile = (index) => {
  //     const fileName = prompt("Enter new file name:");
  //     if (fileName) {
  //       const updatedFiles = [...files];
  //       updatedFiles[index].name = fileName;
  //       setFiles(updatedFiles);
  //     }
  //   };

  const handleEditFile = (index) => {
    const fileName = prompt("Enter new file name:");
    if (fileName && index >= 0 && index < files.length) {
      const updatedFiles = files.map((file, i) => {
        if (i === index) {
          return { ...file, name: fileName };
        }
        return file;
      });
      setFiles(updatedFiles);
    }
  };

  return (
    <div className=" p-4 bg-[#0d0f11] rounded-sm">
      <div className=" border-b-2  border-[#2b2f35] mb-2 pb-2 flex items-center justify-between">
        <div className="text-md">Folders & Files</div>
        <button
          onClick={handleCreateFolder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        >
          <TbFolderPlus />
        </button>
        <button
          onClick={handleCreateFile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-2"
        >
          <LuFilePlus2 />
        </button>
      </div>

      <ul>
        {folders.map((folder, index) => (
          <li key={index}>
            <div
              onClick={() => handleToggleFolder(index)}
              className="flex justify-between"
            >
              {folder.isOpen ? "▼" : "►"} {folder.name}
              <div>
                <button onClick={() => handleEditFolder(index)}>
                  <MdOutlineDriveFileRenameOutline />
                </button>
                <button onClick={() => handleDeleteFolder(index)}>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
            {folder.isOpen && (
              <ul>
                <li>
                  <button onClick={() => handleCreateSubFolder(index)}>
                    Create Subfolder
                  </button>
                  <button onClick={() => handleCreateSubFile(index)}>
                    Create Subfile
                  </button>
                </li>
                {folder.folders.map((subFolder, subIndex) => (
                  <li key={subIndex}>
                    <div onClick={() => handleToggleFolder(subIndex)}>
                      {subFolder.isOpen ? "▼" : "►"} {subFolder.name}
                      <button onClick={() => handleEditFolder(subIndex)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteFolder(subIndex)}>
                        Delete
                      </button>
                    </div>
                    {subFolder.isOpen && (
                      <ul>
                        <li>
                          <button
                            onClick={() => handleCreateSubFolder(subIndex)}
                          >
                            Create Subfolder
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleCreateSubFile(subIndex)}>
                            Create Subfile
                          </button>
                        </li>
                        {subFolder.folders.map((subSubFolder, subSubIndex) => (
                          <li key={subSubIndex}>
                            <div>{subSubFolder.name}</div>
                            <button onClick={() => handleEditFolder(subIndex)}>
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteFolder(subIndex)}
                            >
                              Delete
                            </button>
                          </li>
                        ))}
                        {subFolder.files.map((subFile, subFileIndex) => (
                          <li key={subFileIndex}>
                            <div>{subFile.name}</div>
                            <button onClick={() => handleEditFile(fileIndex)}>
                              Edit
                            </button>
                            <button onClick={() => handleDeleteFile(fileIndex)}>
                              Delete
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {folder.files.map((file, fileIndex) => (
                  <li key={fileIndex}>
                    <div>{file.name}</div>
                    <button onClick={() => handleEditFile(fileIndex)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteFile(fileIndex)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {files.map((file, index) => (
          <li key={index}>
            <div>{file.name}</div>
            <button onClick={() => handleEditFile(fileIndex)}>Edit</button>
            <button onClick={() => handleDeleteFile(fileIndex)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderStructure;
