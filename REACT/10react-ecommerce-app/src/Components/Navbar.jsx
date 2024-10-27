import React, { useState } from "react";
import logo from "/Online shoping logo-Photoroom (1).png";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="">
      <div className="font-roboto bg-gray-50 text-gray-800">
        <header className="bg-white shadow-sm py-4">
          <div className="max-w-[1270px] mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-40 h-[70px]" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-4 flex justify-center">
              <button className="bg-[#F8F8F8] flex items-center border w-[600px] border-gray-300 rounded-2xl py-2 px-2">
                <select className="text-gray-600 rounded-l-md p-3 bg-transparent border-r">
                  <option>All Categories</option>
                  <option>Fruits & Vegetables</option>
                  <option>Bakery</option>
                  <option>Beverages</option>
                </select>
                <input
                  type="text"
                  className="w-full border-none p-3 outline-none bg-transparent"
                  placeholder="Search for more than 20,000 products"
                />
                <IoIosSearch size={50} className="text-gray-500 ml-2" />
              </button>
            </div>

            {/* Login and Cart */}
            <div className="flex items-center space-x-4">
              {/* Login Button */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800">
                Login
              </button>

              {/* Shopping Cart with Dynamic Count */}
              <div className="relative flex items-center hover:bg-yellow-400 active:bg-yellow-500  p-2 rounded">
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
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 ">
                  {cartCount}
                </span>
              </div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 py-2">
          <div className="max-w-[1270px] mx-auto flex items-center justify-center px-4 space-x-5">
            <div className="flex items-center space-x-10">
              <NavLink to="/" className="text-gray-600">
                Women
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Men
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Kids
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Accessories
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Pages
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Brand
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Sale
              </NavLink>
              <NavLink to="#" className="text-gray-600">
                Blog
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
