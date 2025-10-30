// src/components/Button.jsx
import React from "react";

function Button({ label, variant = "primary", onClick }) {
  const baseStyle =
    "px-4 py-2 rounded font-semibold text-white transition-colors";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
