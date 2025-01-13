"use client";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-green-700 text-white shadow-lg hidden md:block">
      <div className="container mx-auto flex items-center h-16 justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img
            className="h-16"
            src="/logo.png"
            alt="Logo"
          />
          <span className="ml-4 uppercase font-black text-white">
            SmartCity<br />
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6 font-semibold text-base lg:text-lg">
            <li className="hover:text-green-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-green-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-green-300">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="hover:text-green-300">
              <a href="#services">Services</a>
            </li>
          </ul>

          {/* Authentication Section */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.username}</span>
              <button
                onClick={logout}
                className="border border-white rounded-full font-bold px-6 py-2 hover:bg-white hover:text-green-700 transition duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className="border border-white rounded-full font-bold px-6 py-2 hover:bg-white hover:text-green-700 transition duration-300"
              >
                <a href="/login">Log In</a>
              </button>
              <button
                className="border border-white rounded-full font-bold px-6 py-2 hover:bg-white hover:text-green-700 transition duration-300"
              >
                <a href="/signup">Sign In</a>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
