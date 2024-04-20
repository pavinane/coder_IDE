import React, { useState } from "react";
import {
  MdFolder,
  MdInsertDriveFile,
  MdCreate,
  MdDelete,
} from "react-icons/md";

import { FaRegFolderClosed } from "react-icons/fa6";
// import { BiSolidLeftArrow } from "react-icons/bi";

const FolderStructure = ({
  folders,
  setFolders,
  selectedFolder,
  setSelectedFolder,
  selectedFiles,
  setSelectedFiles,
}) => {
  // const [folders, setFolders] = useState([]);
  // const [selectedFolder, setSelectedFolder] = useState(null);

  const handleCreateFolder = () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      setFolders([...folders, { name: folderName, folders: [], files: [] }]);
    }
  };

  const handleCreateFile = () => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      setFolders([...folders, { name: fileName, isFile: true }]);
    }
  };

  const handleEditFolder = (folder) => {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
      const updatedFolders = folders?.map((f) =>
        f === folder ? { ...f, name: folderName } : f
      );
      setFolders(updatedFolders);
      setSelectedFolder({ ...folder, name: folderName });
    }
  };

  const handleDeleteFolder = (folder) => {
    const updatedFolders = folders.filter((f) => f !== folder);
    setFolders(updatedFolders);
    setSelectedFolder(null);
  };

  const handleEditFile = (index) => {
    const fileName = prompt("Enter new file name:");
    if (fileName) {
      const updatedFolders = [...folders];
      updatedFolders[selectedFolder].files[index].name = fileName;
      setFolders(updatedFolders);
      setSelectedFolder(updatedFolders[selectedFolder].files[index].name);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFolders = [...folders];
    setSelectedFolder(updatedFolders[selectedFolder].files[index].name);
    updatedFolders[selectedFolder].files.splice(index, 1);
    setFolders(updatedFolders);
  };

  // const handleToggleFolder = (index) => {
  //   if (selectedFolder === index) {
  //     setSelectedFolder(null);
  //   } else {
  //     setSelectedFolder(index);
  //   }
  // };

  const handleCreateSubFolder = (index) => {
    const folderName = prompt("Enter subfolder name:");
    if (folderName) {
      const updatedFolders = [...folders];
      updatedFolders[index].folders?.push({
        name: folderName,
        folders: [],
        files: [],
      });
      setFolders(updatedFolders);
    }
  };

  const handleCreateSubFile = (index) => {
    const fileName = prompt("Enter subfile name:");
    if (fileName) {
      const updatedFolders = [...folders];
      updatedFolders[index].files?.push({ name: fileName });
      setFolders(updatedFolders);
    }
  };

  const handleToggleFolder = (index) => {
    if (selectedFolder === index) {
      setSelectedFolder(null);
    } else {
      setSelectedFolder(index);
    }
  };

  const handleToggleFile = (file) => {
    if (selectedFiles.includes(file)) {
      setSelectedFiles(selectedFiles.filter((f) => f !== file));
    } else {
      setSelectedFiles([...selectedFiles, file]);
    }
  };

  return (
    <div className="p-4 bg-[#13161a] text-white rounded h-[100%]">
      <div className="flex justify-between items-center mb-4 border-b-2 border-[#5d677d] pb-2">
        <div className="text-md font-bold ">Folders & Files</div>
        <div>
          <button
            onClick={handleCreateFolder}
            className="  text-white font-bold  rounded mr-2"
          >
            <FaRegFolderClosed size={16} />
          </button>
          <button
            onClick={handleCreateFile}
            className="  text-white font-bold  rounded"
          >
            <MdInsertDriveFile size={16} />
          </button>
        </div>
      </div>
      <ul>
        {folders?.map((item, index) => (
          <li key={index}>
            <div
              className={`cursor-pointer flex items-center
               ${
                 selectedFolder === index
                   ? "text-[#1479f6] p-1 rounded-sm mb-2  font-semibold "
                   : ""
               }

              `}
              onClick={() => handleToggleFolder(index)}
            >
              <>
                {item.isFile ? (
                  <MdInsertDriveFile />
                ) : (
                  <div className="flex items-center">
                    <FaRegFolderClosed />
                    <span className="ml-2">{item.name}</span>
                  </div>
                )}
              </>

              {!item.isFile && (
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => handleEditFolder(index)}
                    className="text-white"
                  >
                    <MdCreate size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteFolder(index)}
                    className="text-white"
                  >
                    <MdDelete size={16} />
                  </button>
                </div>
              )}
            </div>
            {selectedFolder === index && (
              <ul>
                {item.folders?.map((folder, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between gap-10">
                        <MdFolder /> {folder.name}
                      </div>
                      <div>
                        <button
                          onClick={() => handleEditFolder(subIndex)}
                          className="text-[#1479f6] "
                        >
                          <MdCreate />
                        </button>
                        <button
                          onClick={() => handleDeleteFolder(subIndex)}
                          className="text-red-500"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
                {item.files?.map((file, subIndex) => (
                  <li key={subIndex}>
                    <div
                      className={`cursor-pointer flex items-center justify-between ${
                        selectedFiles.includes(file.name)
                          ? "text-[#1479f6] p-1 rounded-sm mb-2 bg-[#111e2c] font-semibold"
                          : ""
                      }`}
                      onClick={() => handleToggleFile(file.name)}
                    >
                      <div className="flex  items-center justify-center gap-10">
                        <MdInsertDriveFile /> <span>{file.name}</span>
                      </div>

                      <div>
                        <button
                          onClick={() => handleEditFile(subIndex)}
                          className="text-white"
                        >
                          <MdCreate />
                        </button>
                        <button
                          onClick={() => handleDeleteFile(subIndex)}
                          className="text-red-500"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
                <li className="flex gap-2 justify-between">
                  <button onClick={() => handleCreateSubFolder(index)}>
                    Add Subfolder
                  </button>
                  <button onClick={() => handleCreateSubFile(index)}>
                    Add Subfile
                  </button>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderStructure;
