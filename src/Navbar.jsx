import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo et titre */}
      <div className="flex items-center space-x-3">
        {/* Remplacez '/logo.png' par le chemin vers votre logo */}
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-gray-800">Centre de Formation</h1>
      </div>

      {/* Zone de recherche et icônes */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="relative">
          <FaBell className="text-2xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <button>
          <FaUserCircle className="text-3xl text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;