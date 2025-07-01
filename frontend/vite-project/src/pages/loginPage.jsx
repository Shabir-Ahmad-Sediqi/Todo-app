import { Link, useNavigate } from 'react-router-dom';
import { LoginIn } from '../services/authserveces';
import { useState } from 'react';

function LoginPage() {
    
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errorMsg, setErrorMsg] = useState("")
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('');

    try{
        await LoginIn(email, password)
        navigate("/")
    }catch(error){
        const msg = error.response?.data?.msg || "Login Failed"
        setErrorMsg(msg)
    }
};

   return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-purple-500/30 relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur opacity-30 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-md">
            Login
          </h2>

          {errorMsg && (
            <p className="text-red-400 text-sm text-center mb-4">{errorMsg}</p>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-purple-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/5 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-purple-300 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-white/5 text-white border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-purple-200 mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline text-purple-400 hover:text-purple-200">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
