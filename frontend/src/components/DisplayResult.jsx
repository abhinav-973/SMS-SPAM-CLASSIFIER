import React from "react";

function DisplayResult({ result }) {
  if (!result) return null;

  const isSpam = result.prediction === "Spam";

  return (
    <div className="flex justify-center px-4 mt-8">
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-lg p-6 text-center border transition-all duration-300 
        ${
          isSpam
            ? "bg-red-50 border-red-200"
            : "bg-green-50 border-green-200"
        }`}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Prediction Result
        </h2>

        <p
          className={`text-3xl font-bold ${
            isSpam ? "text-red-600" : "text-green-600"
          }`}
        >
          {result.prediction}
        </p>

        <p className="mt-2 text-gray-600">
          Confidence: {(result.confidence * 100).toFixed(2)}%
        </p>

        <div
          className={`mt-4 h-1 w-24 mx-auto rounded-full ${
            isSpam
              ? "bg-gradient-to-r from-red-500 to-pink-500"
              : "bg-gradient-to-r from-green-500 to-emerald-400"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default DisplayResult;
