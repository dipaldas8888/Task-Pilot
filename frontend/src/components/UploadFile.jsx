import { useState } from "react";
import { FiUploadCloud, FiFileText } from "react-icons/fi";

export const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    console.log("Uploading:", file);
  };

  return (
    <div className="col-span-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
      {/* HEADER */}
      <h2 className="text-xl font-bold text-white mb-6">⬆ Upload CSV File</h2>

      {/* DROP ZONE */}
      <label className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 transition bg-gray-900">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <FiUploadCloud className="text-4xl text-blue-500 mb-3" />

          <p className="mb-2 text-sm text-gray-400">
            <span className="font-semibold text-white">Click to upload</span> or
            drag & drop
          </p>

          <p className="text-xs text-gray-500">CSV files only</p>
        </div>

        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* SELECTED FILE */}
      {file && (
        <div className="flex items-center gap-3 mt-4 bg-gray-900 p-3 rounded-lg border border-gray-700">
          <FiFileText className="text-blue-400 text-xl" />
          <p className="text-sm text-gray-300">{file.name}</p>
        </div>
      )}

      {/* BUTTON */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold shadow-md"
        >
          Upload File
        </button>
      </div>
    </div>
  );
};
