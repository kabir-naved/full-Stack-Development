import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Banner() {
  const images = [
    '/public/BANNER-11.jpg',
    '/public/BANNER-21.jpg',
    '/public/BANNER-31.jpg',
    '/public/BANNER-41.jpg',
    '/public/BANNER-51.jpg',
    '/public/BANNER-61.jpg',
  ];

  return (
    <>
      {/* Single Image for Small Screens */}
      <div className="relative w-full h-[300px] md:hidden">
        <img src={images[0]} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        <div className="absolute bottom-10 left-10 text-white space-y-4 max-w-md">
          <h2 className="text-2xl font-bold">Discover Our Latest Collection</h2>
          <p className="text-base">Shop now for exclusive discounts and new arrivals!</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">Explore Now</button>
        </div>
      </div>

      {/* Swiper Carousel for Medium Screens and Up */}
      <div className="relative w-full h-[570px] hidden md:block">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                <div className="absolute bottom-10 left-10 text-white space-y-4 max-w-md">
                  <h2 className="text-3xl font-bold">Discover Our Latest Collection</h2>
                  <p className="text-lg">Shop now for exclusive discounts and new arrivals!</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">Explore Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute top-1/2 -left-5 transform -translate-y-1/2 text-white p-2 hover:text-gray-300">
            <IoChevronBack size={24} />
          </button>
          <button className="swiper-button-next absolute top-1/2 -right-5 transform -translate-y-1/2 text-white p-2 hover:text-gray-300">
            <IoChevronForward size={24} />
          </button>
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
