"use client";
import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditer = ({ folder }) => {
  return (
    <div>
      <Editor
        height="90vh"
        // className="min-h-screen"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
        // onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditer;
