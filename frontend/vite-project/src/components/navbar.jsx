import { Link } from "react-router-dom";
import { Logout } from "../services/authserveces";
import { useNavigate } from "react-router-dom";

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

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white px-6 py-4 shadow-xl border-b border-blue-700/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent tracking-wide drop-shadow-md">
          <Link to="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 mt-3 sm:mt-0 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Signup
          </Link>
          <Link
            to="/profile"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="hover:text-red-400 transition duration-200 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
