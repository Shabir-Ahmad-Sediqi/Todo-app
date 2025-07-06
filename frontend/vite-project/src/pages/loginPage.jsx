import { Link, useNavigate } from 'react-router-dom';
import { LoginIn } from '../services/authserveces';
import { useState } from 'react';
import { motion } from 'framer-motion';

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

  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-blue-300 rounded-3xl p-8 shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back 👋
        </motion.h2>

        {errorMsg && (
          <motion.p
            className="text-red-600 text-sm text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {errorMsg}
          </motion.p>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label htmlFor="email" className="block text-blue-800 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-blue-800 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Login
          </motion.button>
        </motion.form>

        <motion.p
          className="text-sm text-blue-700 mt-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Don’t have an account?{' '}
          <Link
            to="/signup"
            className="underline text-blue-600 hover:text-blue-800 transition"
          >
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default LoginPage;
