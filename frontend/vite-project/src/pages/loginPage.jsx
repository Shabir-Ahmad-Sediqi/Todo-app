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
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        {errorMsg && (
            <p className='text-red-400 text-sm text-center mb-4'>{errorMsg}</p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
