import React from "react";
import { SiReact } from "react-icons/si"; 
import { FaShippingFast, FaComments, FaUndoAlt, FaCreditCard } from "react-icons/fa";

function Service() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="flex flex-col justify-center items-center bg-white p-4 shadow-lg rounded-lg max-w-5xl mx-auto space-y-4">
        
      
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between w-full">
          {/* Free Shipping */}
          <div className="flex items-center mx-4 space-x-3 hover:bg-blue-100 transition duration-300 p-2 rounded-md w-full sm:w-auto">
            <FaShippingFast className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Free Shipping</p>
              <p className="text-gray-500 text-sm">When you spend $80 or more</p>
            </div>
          </div>

          {/* Available 24/7 */}
          <div className="flex items-center mx-4 space-x-3 hover:bg-blue-100 transition duration-300 p-2 rounded-md w-full sm:w-auto">
            <FaComments className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Available 24/7</p>
              <p className="text-gray-500 text-sm">Need help? Contact us anytime</p>
            </div>
          </div>

          {/* Return */}
          <div className="flex items-center mx-4 space-x-3 hover:bg-blue-100 transition duration-300 p-2 rounded-md w-full sm:w-auto">
            <FaUndoAlt className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Satisfied or Return</p>
              <p className="text-gray-500 text-sm">Easy 30-day return policy</p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex items-center mx-4 space-x-3 hover:bg-blue-100 transition duration-300 p-2 rounded-md w-full sm:w-auto">
            <FaCreditCard className="text-blue-500 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Secure Payments</p>
              <p className="text-gray-500 text-sm">Visa, Mastercard, Stripe, PayPal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
