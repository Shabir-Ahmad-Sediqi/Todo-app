import React from "react";
import { Signup } from "../services/authserveces";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // prevents page from reloading

    try {
      const data = await Signup(username, email, password);
      navigate("/");
    } catch (error) {
      const msg =
        error.response?.data?.msg ||
        (Array.isArray(error.response?.data)
          ? error.response.data[0]?.msg
          : "Signup failed");
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-blue-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-400/30 relative overflow-hidden">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 blur-lg opacity-25 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center drop-shadow-lg tracking-wide">
            Create an Account
          </h2>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          <form className="space-y-5" onSubmit={handleSubmitForm}>
            <div>
              <label className="block text-sm text-blue-300 mb-1">Username</label>
              <input
                type="text"
                placeholder="Your username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-blue-950 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
            </div>

            <div>
              <label className="block text-sm text-blue-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-blue-950 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
            </div>

            <div>
              <label className="block text-sm text-blue-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-blue-950 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-blue-200 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline text-blue-400 hover:text-blue-200 transition"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
