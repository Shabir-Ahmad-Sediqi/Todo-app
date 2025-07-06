import React from 'react';
import { motion } from 'framer-motion';

function Button({ onClick, children, className = '', ...props }) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-3 py-1 rounded text-white bg-purple-600 hover:bg-purple-700 transition ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
