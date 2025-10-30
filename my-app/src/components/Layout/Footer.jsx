// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>

        <ul className="flex gap-4 mt-2 sm:mt-0">
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
