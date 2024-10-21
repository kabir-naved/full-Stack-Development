import React from 'react'

function Localities() {
  return (
    <div className='container m-auto'>
      <div className="container mx-auto py-10 px-5">
        <h1 className="md:text-6xl text-3xl font-semibold text-center mb-6">
          Popular localities in and around <span className="text-red-600">Patna</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Fraser Road Area</h2>
            <p className="text-sm text-gray-600">137 places</p>
          </div>
          
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Golambar</h2>
            <p className="text-sm text-gray-600">201 places</p>
          </div>
        
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Sri Krishnapuri</h2>
            <p className="text-sm text-gray-600">199 places</p>
          </div>
          
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Kankarbagh</h2>
            <p className="text-sm text-gray-600">518 places</p>
          </div>
          
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Patliputra Colony</h2>
            <p className="text-sm text-gray-600">226 places</p>
          </div>
          
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Lodipur</h2>
            <p className="text-sm text-gray-600">57 places</p>
          </div>
        
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Khajpura</h2>
            <p className="text-sm text-gray-600">298 places</p>
          </div>
        
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-medium">Kidwaipuri</h2>
            <p className="text-sm text-gray-600">109 places</p>
          </div>
        
          <div className="locality-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
            <a href="#" className="text-blue-600 text-lg">See more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Localities
