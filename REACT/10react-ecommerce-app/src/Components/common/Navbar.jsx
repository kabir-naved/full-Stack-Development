import React, { useState } from "react";
import logo from "/Online shoping logo-Photoroom (1).png";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-roboto bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-[1270px] mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 h-12 md:w-40 md:h-[70px]" />
          </div>

          {/* Search Bar (hidden on small screens) */}
          <div className="hidden md:flex flex-1 mx-4 justify-center">
            <button className="bg-[#F8F8F8] flex items-center border w-full max-w-[600px] border-gray-300 rounded-2xl py-1 px-2">
              <select className="text-gray-600 rounded-l-md p-3 bg-transparent border-r outline-none">
                <option>All Categories</option>
                <option>Fruits & Vegetables</option>
                <option>Bakery</option>
                <option>Beverages</option>
              </select>
              <input
                type="text"
                className="w-full border-none p-2 outline-none bg-transparent"
                placeholder="Search for more than 20,000 products"
              />
              <IoIosSearch size={35} className="text-gray-500 ml-2" />
            </button>
          </div>

          {/* Login and Cart */}
          <div className="flex items-center space-x-4">
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800">
              Login
            </button>

            {/* Shopping Cart with Dynamic Count */}
            <div className="relative flex items-center hover:bg-yellow-400 active:bg-yellow-500 p-2 rounded">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 4m0 0h14m-2-4l2 4m-5 6a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">
                {cartCount}
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Nav Links */}
      <nav className="bg-gray-100 py-2">
        <div className="max-w-[1270px] mx-auto flex items-center justify-center px-4">
          <div className={`flex-col space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-5 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <NavLink to="/" className="text-gray-600">Women</NavLink>
            <NavLink to="#" className="text-gray-600">Men</NavLink>
            <NavLink to="#" className="text-gray-600">Kids</NavLink>
            <NavLink to="#" className="text-gray-600">Accessories</NavLink>
            <NavLink to="#" className="text-gray-600">Pages</NavLink>
            <NavLink to="#" className="text-gray-600">Brand</NavLink>
            <NavLink to="#" className="text-gray-600">Sale</NavLink>
            <NavLink to="#" className="text-gray-600">Blog</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
