import React from 'react'

function Button({ onClick, children, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded text-white bg-purple-600 hover:bg-purple-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
