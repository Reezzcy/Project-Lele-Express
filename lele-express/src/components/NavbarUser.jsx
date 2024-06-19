import React, { useState } from 'react';

const NavBar = () => {
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
          <a href="#" className="text-white">Edit Profil</a>
          <a href="#" className="text-white">Liat jadwal</a>
          <a href="#" className="text-white">Riwayat transaksi</a>
          <a href="#" className="text-white">Lihat Peta</a>
          <a href="#" className="text-white">Logout</a>
        </div>
      </nav>
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
            <nav className="mt-4 space-y-4">
              <a href="#" className="block py-2 px-4 text-black hover:bg-gray-200">Edit Profil</a>
              <a href="#" className="block py-2 px-4 text-black hover:bg-gray-200">Liat jadwal</a>
              <a href="#" className="block py-2 px-4 text-black hover:bg-gray-200">Riwayat transaksi</a>
              <a href="#" className="block py-2 px-4 text-black hover:bg-gray-200">Lihat Peta</a>
              <a href="#" className="block py-2 px-4 text-black hover:bg-gray-200">Logout</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
