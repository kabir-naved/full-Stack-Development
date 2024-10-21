import React from 'react'
import { Link } from 'react-router-dom'

function Collection() {
  return (
    <div>
        <div className="container mx-auto p-8">
        
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="md:text-6xl text-4xl font-bold">Collections</h1>
                <p className="text-lg text-gray-600">Explore curated lists of top restaurants, cafes, pubs, and bars in Patna, based on trends</p>
            </div>
            <Link href="#" className="text-red-500 hover:underline font-medium">All collections in Patna &rarr;</Link>
        </div>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/public/GREAT-CAFE1.webp" alt="13 Great Cafes" className="w-full h-full object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">13 Great Cafes</h2>
                    <p className="text-gray-500">13 Places</p>
                </div>
            </div>

           
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="\public\LUXURY-DINNING1.webp" alt="5 Best Luxury Dining Places" className="w-full h-full object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">5 Best Luxury Dining Places</h2>
                    <p className="text-gray-500">7 Places</p>
                </div>
            </div>

           
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="\public\LOCAL-FAV1.webp" alt="14 North Indian Delicacies" className="w-full h-full object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">14 North Indian Delicacies</h2>
                    <p className="text-gray-500">13 Places</p>
                </div>
            </div>

            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="\public\NORTH-INDIAN1.webp" alt="12 Local Favourite Places" className="w-full h-full object-cover"/>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">12 Local Favourite Places</h2>
                    <p className="text-gray-500">9 Places</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Collection