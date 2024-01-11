"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import Image from "next/image";
import { Products } from "@/data/products";


export const Slider = () => {
  return (
    <>
    <div className="text-black  bg-brown border border-white/90 rounded-xl ">
       <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
        
      >
        {
            Products.map((prod)=>(
                <div key={prod.title} className="rounded-md shadow ">
                    <SwiperSlide>
                        <div>
                            <Image src={prod.img} alt="product image" width={100} height={100} className="rounded-xl p-3"/>
                        </div>
                        <div className="flex flex-col">
                        <p className="font-bold text-black text-xl">{prod.title}</p>
                        <p className="text-sm">{prod.des}</p>
                        <p className="font-semibold">{prod.price}</p>
                        </div>
                    </SwiperSlide>
                </div>
            ))
        }
      </Swiper>
    
    </div>
  </>
  )
}

