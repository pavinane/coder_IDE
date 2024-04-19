import React, { useState } from "react";
import {
  MdFolder,
  MdInsertDriveFile,
  MdCreate,
  MdDelete,
} from "react-icons/md";

const FolderStructure = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

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

  //   const handleEditFolder = (index) => {
  //     const folderName = prompt("Enter new folder name:");
  //     if (
  //       folderName &&
  //       selectedFolder !== null &&
  //       selectedFolder >= 0 &&
  //       selectedFolder < folders.length &&
  //       index >= 0 &&
  //       index < folders[selectedFolder].folders.length
  //     ) {
  //       const updatedFolders = [...folders];
  //       updatedFolders[selectedFolder].folders[index].name = folderName;
  //       setFolders(updatedFolders);
  //     }
  //   };

  //   const handleDeleteFolder = (index) => {
  //       console.log("index", index);
  //       if (selectedFolder !== null) {
  //           const updatedFolders = [...folders];
  //           updatedFolders[selectedFolder].folders.splice(index, 1);
  //           setFolders(updatedFolders);
  //         }
  //     };

  const handleEditFolder = (folder) => {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
      const updatedFolders = folders.map((f) =>
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
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[selectedFolder].files.splice(index, 1);
    setFolders(updatedFolders);
  };

  const handleToggleFolder = (index) => {
    if (selectedFolder === index) {
      setSelectedFolder(null);
    } else {
      setSelectedFolder(index);
    }
  };

  const handleCreateSubFolder = (index) => {
    const folderName = prompt("Enter subfolder name:");
    if (folderName) {
      const updatedFolders = [...folders];
      updatedFolders[index].folders.push({
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
      updatedFolders[index].files.push({ name: fileName });
      setFolders(updatedFolders);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded">
      <div className="flex justify-between items-center mb-4 border-b-2">
        <div className="text-md font-bold ">Folders & Files</div>
        <div>
          <button
            onClick={handleCreateFolder}
            className="  text-white font-bold  rounded mr-2"
          >
            <MdFolder size={16} />
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
        {folders.map((item, index) => (
          <li key={index}>
            <div
              className={`cursor-pointer flex items-center justify-between

               ${
                 selectedFolder === index
                   ? "bg-blue-700 p-1 rounded-sm mb-2 "
                   : ""
               }

              `}
              onClick={() => handleToggleFolder(index)}
            >
              {item.isFile ? <MdInsertDriveFile /> : <MdFolder />}
              <span className="ml-2">{item.name}</span>
              {!item.isFile && (
                <div className="flex gap-4">
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
                {item.folders.map((folder, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between gap-10">
                        <MdFolder /> {folder.name}
                      </div>
                      <div>
                        <button
                          onClick={() => handleEditFolder(subIndex)}
                          className="text-blue-500"
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
                {item.files.map((file, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between gap-10">
                        <MdInsertDriveFile /> {file.name}
                      </div>
                      <div>
                        <button
                          onClick={() => handleEditFile(subIndex)}
                          className="text-blue-500"
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
