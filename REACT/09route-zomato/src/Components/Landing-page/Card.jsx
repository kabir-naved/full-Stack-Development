import React from 'react'

function Card() {
  return (
    <div className='container m-auto lg:pr-14 lg:pl-14'>
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="/public/RICE1.webp" alt="Order Online" className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Order Online</h2>
                <p>Stay home and order to your doorstep</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="/public/DINNING1.webp" alt="Dining" className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Dining</h2>
                <p>View the city's favourite dining venues</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src="/public/EVENTS1.jpeg" alt="Live Events" className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Live Events</h2>
                <p>Discover India's best events & concerts</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Card
