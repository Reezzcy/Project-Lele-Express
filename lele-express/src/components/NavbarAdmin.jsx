// src/components/NavbarAdmin.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleLihatPeta, toggleEditJadwal, toggleEditKereta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="text-white text-lg">Lele Express</div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <button onClick={toggleEditJadwal} className="text-white focus:outline-none">Edit Jadwal</button>
          <button onClick={toggleEditKereta} className="text-white focus:outline-none">Edit Kereta</button>
          <button onClick={toggleLihatPeta} className="text-white focus:outline-none">Lihat Peta</button>
          <Link to="/" className="text-white focus:outline-none">Logout</Link>
          {/* Other menu items */}
        </div>
      </nav>
      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-64 h-full bg-white p-4 z-50">
            <button onClick={toggleSidebar} className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="mt-4">
              <ul className="space-y-4">
                <li className="mb-6"><button onClick={toggleEditJadwal} className="text-black focus:outline-none">Edit Jadwal</button></li>
                <li className="mb-6"><button onClick={toggleEditKereta} className="text-black focus:outline-none">Edit Kereta</button></li>
                <li className="mb-6"><button onClick={toggleLihatPeta} className="text-black focus:outline-none">Lihat Peta</button></li>
                <li className="mb-6"><Link to="/" className="text-black focus:outline-none">Logout</Link></li>
                {/* Other menu items */}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
