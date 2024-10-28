import React from "react";
import logo from "/Online shoping logo-Photoroom (1).png";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaAmazon,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 ">
      <div className="max-w-[1270px] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-40 h-[70px]" />
            </div>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800"
              >
                <FaAmazon />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Ultras</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Our Journals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Affiliate Programme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Ultras Press
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Customer Service
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Cookie Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Delivery Information
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Customer Service
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Cookie Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Delivery Information
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Subscribe Us
            </h2>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-l-md border border-gray-300 text-gray-800 focus:outline-none focus:border-gray-500"
                required
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-600 text-sm">
          <p>© 2023 Foodmart. All rights reserved.</p>
          <p>
            Free HTML Template by{" "}
            <a href="#" className="text-gray-800 hover:underline">
              TemplatesJungle
            </a>{" "}
            Distributed by{" "}
            <a href="#" className="text-gray-800 hover:underline">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
