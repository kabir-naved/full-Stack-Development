import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-6xl mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Trending Products
          </h2>
          <div className="space-x-4 text-sm">
            <Link
              href="#"
              className="text-yellow-500 font-semibold border-b-2 border-yellow-500"
            >
              All
            </Link>
            <Link href="#" className="text-gray-500 hover:text-yellow-500">
              Fruits & Veges
            </Link>
            <Link href="#" className="text-gray-500 hover:text-yellow-500">
              Juices
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?banana"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
              30% OFF
            </span>
            <img
              src="https://source.unsplash.com/100x100/?snack"
              alt="Product Image"
              className="my-2 mx-auto"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              Sunstar Fresh Melon Juice
            </h3>
            <p className="text-xs text-gray-500">
              1 Unit •{" "}
              <span className="text-yellow-500">
                4.5 <i className="fas fa-star"></i>
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900">$18.00</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-1">
                <button className="text-gray-500">-</button>
                <span className="px-2 text-gray-700">1</span>
                <button className="text-gray-500">+</button>
              </div>
              <button className="text-sm text-blue-500">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
