import { Link } from "react-router-dom";
import { Logout } from "../services/authserveces";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const MotionLink = motion(
  forwardRef((props, ref) => <Link ref={ref} {...props} />)
);

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await Logout();
      navigate("/login");
      setTimeout(() => {
        window.alert(result.msg);
      }, 500);
    } catch (error) {
      window.alert(error.response?.data?.msg || "Logout failed");
    }
  };

  const hoverEffect = {
    scale: 1.1,
    color: "#60A5FA",
    transition: { type: "spring", stiffness: 300 },
  };

  const logoutHover = {
    scale: 1.1,
    color: "#F87171",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <nav className="bg-white/60 backdrop-blur-md border-b border-blue-300 shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent tracking-wide drop-shadow-md">
          <Link to="/">MyApp</Link>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 mt-3 sm:mt-0 text-lg font-medium text-blue-900">
          <MotionLink
            to="/"
            className="cursor-pointer"
            whileHover={hoverEffect}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </MotionLink>
          <MotionLink
            to="/login"
            className="cursor-pointer"
            whileHover={hoverEffect}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </MotionLink>
          <MotionLink
            to="/signup"
            className="cursor-pointer"
            whileHover={hoverEffect}
            whileTap={{ scale: 0.95 }}
          >
            Signup
          </MotionLink>
          <MotionLink
            to="/profile"
            className="cursor-pointer"
            whileHover={hoverEffect}
            whileTap={{ scale: 0.95 }}
          >
            Profile
          </MotionLink>

          <motion.button
            onClick={handleLogout}
            className="cursor-pointer font-medium text-red-600 bg-transparent border-none outline-none"
            whileHover={logoutHover}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
