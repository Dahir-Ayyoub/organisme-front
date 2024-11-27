import React, { useState, useRef } from "react";

function ImportForm({ onClose }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("text/") && !selectedFile.type.startsWith("application/")) {
        setError("Please select a text or application file (e.g., CSV, JSON).");
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }
    setError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      console.log("File content:", fileContent);
      // Your file processing and data update logic here
      onClose();
    };
    reader.readAsText(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Import Data</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
  <label htmlFor="fileInput" className="block text-gray-700 font-bold mb-2">
    Select File
  </label>
  <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2"> {/*Added relative positioning*/}
    <input
      type="file"
      id="fileInput"
      ref={fileInputRef}
      onChange={handleFileChange}
      className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer" />
    {file && (
      <span className="text-gray-600 truncate"> {/* Truncate long filenames */}
        {file.name}
      </span>
    )}
    <span className="ml-auto text-gray-500"> {/* Placeholder text */}
      Click to select file...
    </span>
  </div>
  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
</div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded"
              disabled={!file}
            >
              Import
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ImportForm;