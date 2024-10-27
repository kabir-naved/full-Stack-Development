import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



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
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[570px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default Banner;
