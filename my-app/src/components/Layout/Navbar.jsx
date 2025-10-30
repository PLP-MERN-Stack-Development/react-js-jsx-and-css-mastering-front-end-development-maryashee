// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">PLP Task Manager</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Tasks
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              About
            </a>
          </li>
        </ul>

        {/* Theme Switcher */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
