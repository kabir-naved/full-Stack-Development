import React from "react";

function Service() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center bg-white py-4 shadow-md">
        <div className="flex items-center mx-4">
          <i className="fas fa-shipping-fast text-blue-500 text-xl mr-2"></i>
          <div>
            <p className="font-semibold text-gray-800">Free shipping</p>
            <p className="text-gray-500 text-sm">When you spend $80 or more</p>
          </div>
        </div>

        <div className="border-l border-gray-300 h-12 mx-2"></div>

        <div className="flex items-center mx-4">
          <i className="fas fa-comments text-blue-500 text-xl mr-2"></i>
          <div>
            <p className="font-semibold text-gray-800">We are available 24/7</p>
            <p className="text-gray-500 text-sm">
              Need help? Contact us anytime
            </p>
          </div>
        </div>

        <div className="border-l border-gray-300 h-12 mx-2"></div>

        <div className="flex items-center mx-4">
          <i className="fas fa-undo-alt text-blue-500 text-xl mr-2"></i>
          <div>
            <p className="font-semibold text-gray-800">Satisfied or return</p>
            <p className="text-gray-500 text-sm">Easy 30-day return policy</p>
          </div>
        </div>

        <div className="border-l border-gray-300 h-12 mx-2"></div>

        <div className="flex items-center mx-4">
          <i className="fas fa-credit-card text-blue-500 text-xl mr-2"></i>
          <div>
            <p className="font-semibold text-gray-800">100% secure payments</p>
            <p className="text-gray-500 text-sm">
              Visa, Mastercard, Stripe, PayPal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
