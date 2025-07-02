import { Link, useNavigate } from 'react-router-dom';
import { LoginIn } from '../services/authserveces';
import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      await LoginIn(email, password);
      navigate('/');
    } catch (error) {
      const msg = error.response?.data?.msg || 'Login Failed';
      setErrorMsg(msg);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-blue-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-400/30 relative overflow-hidden">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 blur-lg opacity-25 animate-pulse"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center drop-shadow-lg tracking-wide">
            Login
          </h2>

          {errorMsg && (
            <p className="text-red-400 text-sm text-center mb-4">{errorMsg}</p>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-blue-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-blue-950 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-blue-300 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-blue-950  text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-blue-200 mt-4 text-center">
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="underline text-blue-400 hover:text-blue-200 transition"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
