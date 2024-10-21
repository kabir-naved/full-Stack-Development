import React from 'react'

function Login() {
  return (
    <div className='bg-[#FFFBF7]'>
  <main className="container mx-auto p-6 flex flex-col lg:flex-row justify-around items-center mt-12">
    
    <div className="mb-10 lg:mb-0 hidden lg:block">
      <img src="\public\LOGIN1.webp" alt="Zomato App Preview" className="w-full max-w-md"/>
    </div>

    
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold mb-4">Get the Zomato App</h1>
      <p className="text-gray-600 mb-6">We will send you a link, open it on your phone to download the app.</p>

      
      <div className="flex justify-center lg:justify-start space-x-6 mb-4">
        <label className="flex items-center">
          <input type="radio" name="contact_method" value="email" className="mr-2"/>
          <span>Email</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="contact_method" value="phone" className="mr-2"/>
          <span>Phone</span>
        </label>
      </div>

    
      <div className="mb-4">
        <input type="text" id="contact" placeholder="Enter your email or phone" className="w-full max-w-md p-3 border border-gray-300 rounded-md outline-red-500" />
        <p className="text-sm text-red-500 mt-1">Enter your email id</p>
      </div>

      
      <button className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-md cursor-not-allowed" disabled>
        Share App Link
      </button>

      
      <div className="flex justify-center lg:justify-start space-x-4 mt-6">
        <a href="#" className="block">
          <img className='w-36' src="/public/GOOGLE-PLAY1.webp" alt="Google Play Store"/>
        </a>
        <a href="#" className="block">
          <img className='w-36' src="/public/APP-STORE1.webp" alt="Apple App Store"/>
        </a>
      </div>
    </div>
  </main>       
    </div>
  )
}

export default Login






