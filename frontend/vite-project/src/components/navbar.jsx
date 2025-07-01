import { Link } from "react-router-dom";
import { Logout } from "../services/authserveces";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

    const handleLogout = async () => {
    try {
        const result = await Logout();
        navigate("/login")
        setTimeout(() => {
            window.alert(result.msg);
        }, 500);
    } catch (error) {
        window.alert(error.response?.data?.msg || "Logout failed");
    }
    };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">
          <Link to="/">MyApp</Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/login" className="hover:text-purple-400 transition">Login</Link>
          <Link to="/signup" className="hover:text-purple-400 transition">Signup</Link>
          <Link to="/profile" className="hover:text-purple-400 transition">Profile</Link>
          <button onClick={handleLogout} className="hover:text-purple-400 transition">
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
