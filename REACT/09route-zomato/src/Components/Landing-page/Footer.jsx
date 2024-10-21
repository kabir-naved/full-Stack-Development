import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#F8F8F8] container m-auto'>
         <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex justify-between">
                
                <div className="text-lg font-bold text-gray-700">
                    <img className='w-28' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
                </div>

              
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India Flag" className="w-5 h-5"/>
                        <span>India</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1">
                        <span>English</span>
                    </button>
                </div>
            </div>

          
            <div className="grid grid-cols-5 gap-8 mt-8 text-sm text-gray-600">
               
                <div>
                    <h3 className="font-semibold mb-2">About Zomato</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Who We Are</Link></li>
                        <li><Link href="#" className="hover:underline">Blog</Link></li>
                        <li><Link href="#" className="hover:underline">Work With Us</Link></li>
                        <li><Link href="#" className="hover:underline">Investor Relations</Link></li>
                        <li><Link href="#" className="hover:underline">Report Fraud</Link></li>
                        <li><Link href="#" className="hover:underline">Press Kit</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="font-semibold mb-2">Zomaverse</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Zomato</Link></li>
                        <li><Link href="#" className="hover:underline">Blinkit</Link></li>
                        <li><Link href="#" className="hover:underline">Feeding India</Link></li>
                        <li><Link href="#" className="hover:underline">Hyperpure</Link></li>
                        <li><Link href="#" className="hover:underline">Zomato Live</Link></li>
                        <li><Link href="#" className="hover:underline">Zomaland</Link></li>
                        <li><Link href="#" className="hover:underline">Weather Union</Link></li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="font-semibold mb-2">For Restaurants</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Partner With Us</Link></li>
                        <li><Link href="#" className="hover:underline">Apps For You</Link></li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="font-semibold mb-2">Learn More</h3>
                    <ul>
                        <li><Link href="#" className="hover:underline">Privacy</Link></li>
                        <li><Link href="#" className="hover:underline">Security</Link></li>
                        <li><Link href="#" className="hover:underline">Terms</Link></li>
                        <li><Link href="#" className="hover:underline">Sitemap</Link></li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="font-semibold mb-2">Social Links</h3>
                    <div className="flex space-x-4 mb-4">
                        <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-linkedin"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-youtube"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-black"><i className="fab fa-facebook"></i></Link>
                    </div>
                    <div className="space-y-2">
                        <Link href="#" className="block">
                            <img src="/public/APP-STORE1.webp" alt="App Store" className="w-32"/>
                        </Link>
                        <Link href="#" className="block">
                            <img src="/public/GOOGLE-PLAY1.webp" alt="Google Play" className="w-32"/>
                        </Link>
                    </div>
                </div>
            </div>

           
            <div className="mt-8 text-xs text-gray-500 text-center">
                By continuing past this page, you agree to our <Link href="#" className="hover:underline">Terms of Service</Link>, <Link href="#" className="hover:underline">Cookie Policy</Link>, <Link href="#" className="hover:underline">Privacy Policy</Link> and <Link href="#" className="hover:underline">Content Policies</Link>. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer