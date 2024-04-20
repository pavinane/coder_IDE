import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosInformationCircle } from "react-icons/io";
import { FaFlag } from "react-icons/fa";

function CountIssue() {
  const [activeCurrentFile, setActiveCurrentFile] = useState(true);
  const [activeFullProject, setActiveFullProject] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleCurrentFileClick = () => {
    setActiveCurrentFile(true);
    setActiveFullProject(false);
    setSelectedIssue(null);
    setSelectedBlock(null);
  };

  const handleFullProjectClick = () => {
    setActiveCurrentFile(false);
    setActiveFullProject(true);
    setSelectedIssue(null);
    setSelectedBlock(null);
  };

  const handleIssueClick = (issue) => {
    // setSelectedIssue(issue);
    // setSelectedBlock(null);
    if (selectedIssue === issue) {
      setSelectedIssue(null); // Close the selected issue if already open
    } else {
      setSelectedIssue(issue); // Open the selected issue
      setSelectedBlock(null); // Close any selected block
    }
  };

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  return (
    <div className="p-4 flex gap-2 flex-col ">
      {selectedBlock ? (
        <div>
          <div className="flex items-center mb-2">
            <p className="text-[12px] text-[#5d677d] cursor-pointer">
              Count of Issue / &nbsp;
            </p>
            <span
              className="text-[12px] text-[#5d677d] cursor-pointer"
              onClick={() => setSelectedBlock(null)}
            >
              {" "}
              {selectedIssue?.name.length > 10
                ? selectedIssue?.name.slice(0, 10) + "..."
                : selectedIssue?.name}
              /
            </span>{" "}
            <span className=" text-white text-[12px]  cursor-pointer">
              {" "}
              &nbsp;
              {selectedIssue?.name}
            </span>
          </div>

          <div className="bg-[#1e232b] p-3 rounded-sm">
            <div className="flex items-center gap-2 justify-between">
              <FaCircle color={`${selectedBlock.color}`} />
              <h1 className="text-2xl border-r-2 border-[#5d677d] w-16">
                {selectedBlock.num}
              </h1>
              <p className="text-[#5d677d] font-normal text-md">
                {selectedBlock?.name.length > 20
                  ? selectedBlock?.name.slice(0, 20) + "..."
                  : selectedBlock?.name}
              </p>
            </div>
          </div>
        </div>
      ) : selectedIssue ? (
        <>
          <div className="border-b-2 border-[#5d677d] pb-2">
            <p
              className="text-sm text-[#5d677d] cursor-pointer"
              onClick={() => setSelectedIssue(null)}
            >
              Count of Issue / &nbsp;{" "}
              <span className="text-white "> {selectedIssue.name}</span>
            </p>
          </div>
          <div className="bg-[#1e232b] p-3 rounded-sm">
            <div className="flex items-center gap-2 justify-between">
              <FaCircle color={`${selectedIssue.color}`} />
              <h1 className="text-2xl border-r-2 border-[#5d677d] w-16">
                {selectedIssue.num}
              </h1>
              <p className="text-[#5d677d] font-normal text-md">
                {selectedIssue.name}
              </p>
            </div>
          </div>
          {selectedIssue && selectedBlock === null && (
            <div
              className=" rounded-sm mt-4"
              style={{ maxHeight: "400px", overflow: "auto" }}
            >
              <p className="text-sm text-[#fff] border-b-2 border-[#5d677d] pb-2 ">
                List of Issues :
              </p>
              {selectedIssue.blocks.map((block, index) => (
                <div
                  key={block.id}
                  onClick={() => handleBlockClick(block)}
                  className="cursor-pointer flex items-center justify-between px-2 py-4 rounded-md mt-2 bg-[#374151] text-[#e5e7eb] "
                >
                  <p className="text-sm border-r-2 border-[#5d677d] w-full">
                    # {index} &nbsp;
                    {block.name}
                  </p>
                  <IoIosArrowForward size={20} />
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <input type="checkbox" className=" w-4" />
            <p>Exclude Dependencies</p>
          </div>
        </>
      ) : (
        <>
          <div className="border-b-2 border-[#5d677d] pb-2 text-md">
            Count Of Issues
          </div>
          <div className="bg-[#1e232b] p-2 rounded-sm flex justify-between text-center mt-4">
            <button
              onClick={handleCurrentFileClick}
              className={`w-32 ${
                activeCurrentFile
                  ? "bg-[#1479f6] p-2 rounded-sm font-medium"
                  : "text-[#5d677d]"
              }`}
            >
              Current File
            </button>
            <button
              onClick={handleFullProjectClick}
              className={`w-32 ${
                activeFullProject
                  ? "bg-[#1479f6] p-2 rounded-sm"
                  : "text-[#5d677d]"
              }`}
            >
              Full Project
            </button>
          </div>
        </>
      )}

      {!selectedIssue && (
        <div className="flex flex-col gap-2 border-b-2 border-[#5d677d] pb-2">
          {issueNum
            ?.filter((item) => !selectedIssue || item === selectedIssue)
            .map((item) => (
              <div
                key={item.name}
                onClick={() => handleIssueClick(item)}
                className={`cursor-pointer bg-[#1e232b] p-3 rounded-sm ${
                  selectedIssue && item !== selectedIssue ? "hidden" : ""
                }`}
              >
                <div className="flex items-center gap-2 justify-between">
                  <FaCircle color={`${item.color}`} />
                  <h1 className="text-2xl border-r-2 border-[#5d677d] w-16">
                    {item.num}
                  </h1>
                  <p className="text-[#5d677d] font-normal text-md">
                    {item.name}
                  </p>
                  <IoIosArrowForward size={20} />
                </div>
              </div>
            ))}
        </div>
      )}

      {selectedBlock !== null && (
        <div>
          <div className="bg-[#1e232b] p-2">
            <div className=" border-b-2 border-[#5d677d] mb-4">
              <div>
                <div>
                  <h1 className="text-[#1479f6] text-sm">Description</h1>
                </div>
                <p className="text-[12px] mt-2">
                  Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod
                  tpor incididunt ut labo et dolore magna aliqua. Ut enim ad
                  minim veniam, is nostrud exercitation ullamco lris nisi ut
                  aliquip. Consectetur adiiscing elit, se do eiusmod tempor
                  indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet
                  ectr ig elit, sed do eiusmod tempor ididunt utio labore et
                  dolore magna aliqua. Lorem ipsum dolor sit amet, consec ascing
                  elit, sed do eiusmod tpor incididunt ut labo et dolore magna
                  aliqua.
                </p>
              </div>
              <div className="m-2">
                <div>
                  <h1 className="text-[#1479f6] text-sm">Remediation:</h1>
                </div>
                <p className="text-[12px] mt-2">
                  Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod
                  tpor incididunt ut labo et dolore magna aliqua. Ut enim ad
                  minim veniam, is nostrud exercitation ullamco lris nisi ut
                  aliquip. Consectetur adiiscing elit, se do eiusmod tempor
                  indidut ut lbore et ore magna aliqua.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 items-center mb-2 ">
              <button
                onClick={handleFullProjectClick}
                className="w-40 
                   bg-[#1479f6] p-2 rounded-sm"
              >
                Auto Fix Code
              </button>
              <div className="border-2 p-2 border-red-600">
                <FaFlag color="red" />
              </div>
            </div>
          </div>
          <p className="text-sm p-2 flex items-center gap-2">
            <IoIosInformationCircle color="#fff" />
            Changes done in the code can be undone.
          </p>
        </div>
      )}
    </div>
  );
}

const issueNum = [
  {
    color: "#5480f7",
    num: 446,
    name: "Total Issue Found",
    blocks: [
      { id: 1, name: "Block 1", color: "#5480f7" },
      { id: 2, name: "Block 2", color: "#5480f7" },
      {
        id: 4,
        name: "Hic odit tempora molestiae earum quibusdam error dolorem quidem culpa tempore perspiciatis",
        color: "#ed494a",
      },
      {
        id: 4,
        name: "Hic odit tempora molestiae earum quibusdam error dolorem quidem",
        color: "#ed494a",
      },
      {
        id: 4,
        name: "culpa tempore perspiciatis beatae minus illo,",
        color: "#ed494a",
      },
      {
        id: 4,
        name: "  tenetur maxime corrupti provident vero laborum expedita",
        color: "#ed494a",
      },
    ],
  },
  {
    color: "#ed494a",
    num: 108,
    name: "High Severity Issue",
    blocks: [
      {
        id: 3,
        name: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        color: "#ed494a",
      },
    ],
  },

  {
    color: "#fad166",
    num: 143,
    name: "Medium Severity Issue",
    blocks: [
      { id: 5, name: "Block 5", color: "#fad166" },
      { id: 6, name: "Block 6", color: "#fad166" },
    ],
  },
  {
    color: "#61d7a1",
    num: 0,
    name: "Low Severity Issue",
    blocks: [
      { id: 7, name: "Block 7", color: "#61d7a1" },
      { id: 8, name: "Block 8", color: "#61d7a1" },
    ],
  },
  {
    color: "#e567f9",
    num: 16,
    name: "Information Issue",
    blocks: [
      { id: 9, name: "Block 9", color: "#e567f9" },
      { id: 10, name: "Block 10", color: "#e567f9" },
    ],
  },
  {
    color: "#66e3f4",
    num: 16,
    name: "Optimization Issue",
    blocks: [
      { id: 11, name: "Block 11", color: "#66e3f4" },
      { id: 12, name: "Block 12", color: "#66e3f4" },
    ],
  },
];

export default CountIssue;
