import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
