import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="youremail@gmail.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="••••••••"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {isLogin && (
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          )}
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline ml-1"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate("/")}
            className="w-1/2 bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-600 text-white font-semibold py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
