import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-purple-500/30 relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur opacity-30 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-md">
            Create an Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-purple-300 mb-1">Username</label>
              <input
                type="text"
                placeholder="Your username"
                className="w-full px-4 py-2 bg-white/5 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm text-purple-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-white/5 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm text-purple-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-white/5 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-purple-200 mt-4 text-center">
            Already have an account? <a href="/login" className="underline text-purple-400 hover:text-purple-200">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
