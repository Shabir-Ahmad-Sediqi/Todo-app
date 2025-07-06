import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    username: "Shabir Ahmad",
    email: "shabir@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 p-6">
      <motion.div
        className="max-w-4xl mx-auto rounded-2xl bg-white/60 backdrop-blur-md shadow-xl p-6 border border-blue-300"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Header */}
        <motion.div className="flex items-center space-x-6 mb-8" variants={fadeUp}>
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full ring-4 ring-blue-400 shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900">{user.username}</h2>
            <p className="text-blue-600">{user.email}</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div className="flex space-x-6 border-b border-blue-300 mb-6" variants={fadeUp}>
          {["profile", "settings", "security"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize pb-2 font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "text-blue-800 border-b-2 border-blue-600"
                  : "text-blue-400 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div variants={fadeUp}>
          {activeTab === "profile" && (
            <div>
              <label className="block text-blue-700 mb-1">Username</label>
              <input
                className="w-full p-3 rounded-md bg-white border border-blue-200 mb-4 focus:outline-blue-500"
                defaultValue={user.username}
              />
              <label className="block text-blue-700 mb-1">Email</label>
              <input
                className="w-full p-3 rounded-md bg-white border border-blue-200 focus:outline-blue-500"
                defaultValue={user.email}
              />
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <label className="block text-blue-700 mb-1">Bio</label>
              <textarea
                className="w-full p-3 rounded-md bg-white border border-blue-200 h-28 focus:outline-blue-500"
                placeholder="Tell us about yourself..."
              />
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-200">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <label className="block text-blue-700 mb-1">New Password</label>
              <input
                type="password"
                className="w-full p-3 rounded-md bg-white border border-blue-200 mb-4 focus:outline-blue-500"
                placeholder="Enter new password"
              />
              <label className="block text-blue-700 mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 rounded-md bg-white border border-blue-200 focus:outline-blue-500"
                placeholder="Confirm password"
              />
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition duration-200">
                Update Password
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
