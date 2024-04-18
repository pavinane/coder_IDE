// ErrorWarningComponent.js
"use client";
const ErrorWarningComponent = ({ errors, warnings }) => {
  return (
    <div>
      <h2>Errors:</h2>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <h2>Warnings:</h2>
      <ul>
        {warnings.map((warning, index) => (
          <li key={index}>{warning}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorWarningComponent;
