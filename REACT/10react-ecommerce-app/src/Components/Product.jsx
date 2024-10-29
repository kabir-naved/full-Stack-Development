import React from "react";

function Product() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-6xl mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Best selling products
          </h2>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            View All Categories <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {/* Product Card */}
          {Array(12).fill().map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                15% OFF
              </span>
              <img
                src="https://source.unsplash.com/100x100/?fruit"
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
                <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-100 py-12">
        <div className="max-w-4xl mx-auto flex items-center px-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Get <span className="text-yellow-500">25% Discount</span> on your
              first purchase
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              amet, metus, sit massa posuere maecenas.
            </p>
          </div>
          <form className="w-1/2 flex flex-col space-y-4 ml-8">
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:border-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:border-gray-400"
            />
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Subscribe to the newsletter
            </label>
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Product;
