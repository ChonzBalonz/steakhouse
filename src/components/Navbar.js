import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-80 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        //...
        <Link
          to="/"
          className="text-3xl font-extrabold text-red-500 tracking-wider font-heading"
        >
          SizzleSteakHouse
        </Link>
        ... //
        <div className="flex items-center space-x-6">
          {/* Menu Button */}
          <Link to="/menu">
            <button className="bg-white text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
              Our Menu
            </button>
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c-4.043 0-4.544.018-6.14.09C4.542 2.176 3.166 2.628 2.176 3.62c-.99.99-.998 2.37-1.084 3.99C1.008 9.225 1 9.727 1 12.28c0 2.553.008 3.054.092 4.65.086 1.62.536 3 1.526 3.99.99.99 2.37.998 3.99 1.084 1.597.072 2.097.09 6.14.09 4.043 0 4.544-.018 6.14-.09 1.62-.086 3-.536 3.99-1.526.99-.99.998-2.37 1.084-3.99.072-1.597.09-2.097.09-6.14s-.018-4.544-.09-6.14c-.086-1.62-.536-3-1.526-3.99-.99-.99-2.37-.998-3.99-1.084-1.597-.072-2.097-.09-6.14-.09zM12 4.168c3.92 0 4.364.015 5.9.088 1.4.063 2.296.365 2.78.85s.787 1.38.85 2.78c.073 1.537.088 1.98.088 5.9s-.015 4.364-.088 5.9c-.063 1.4-.365 2.296-.85 2.78s-1.38.787-2.78.85c-1.537.073-1.98.088-5.9.088s-4.364-.015-5.9-.088c-1.4-.063-2.296-.365-2.78-.85s-.787-1.38-.85-2.78c-.073-1.537-.088-1.98-.088-5.9s.015-4.364.088-5.9c.063-1.4.365-2.296.85-2.78s1.38-.787 2.78-.85c1.537-.073 1.98-.088 5.9-.088zM12 8.27a3.72 3.72 0 100 7.44 3.72 3.72 0 000-7.44zM12 14a2 2 0 110-4 2 2 0 010 4zm5.5-6.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
