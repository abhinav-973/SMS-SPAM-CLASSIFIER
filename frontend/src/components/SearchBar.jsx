import React from "react";
import axios from "axios";
import { useState } from "react";

function SearchBar({ setResult }) {
  const [enterMail, setEnterMail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!enterMail.trim()) return;

    try {
      setLoading(true);

      const response = await axios.post("http://127.0.0.1:8000/predict", {
        text: enterMail,
      });

      setResult(response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-4 border border-gray-100"
      >
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Enter email message here..."
            value={enterMail}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-gray-700"
            onChange={(e) => setEnterMail(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition duration-200 shadow-md cursor-pointer"
        >
          Analyze Email
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
