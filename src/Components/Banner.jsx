import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerSlider from '../Utils/BannerSlider';



const Banner = () => {
    const slide1 = {
        title: "Where Every Stay is a VIP Experience",
        subTitle: "Feel like royalty with LuxeStay. We offer more than just a stay—experience top-notch services, exquisite surroundings, and unmatched attention. Your journey begins here."
    };

    const slide2 = {
        title: "Step Into Luxury, Stay in Style",
        subTitle: "Discover comfort and sophistication with LuxeStay. Enjoy breathtaking views, world-class amenities, and personalized travel experiences tailored for you."
    };

    const slide3 = {
        title: "Unveil the World’s Best Stays with LuxeStay",
        subTitle: "Find premium hotels in top destinations. From relaxing getaways to adventurous trips, LuxeStay promises unforgettable experiences, just for you."
    };

    const slide4 = {
        title: "Your Gateway to Unmatched Comfort & Luxury",
        subTitle: "Travel in style with LuxeStay. Enjoy elegantly designed rooms, premium amenities, and world-class hospitality for an extraordinary experience."
    };



    return (
        <div className="w-full h-[66vh]  overflow-hidden">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-slider1 bg-cover bg-no-repeat bg-center bg-[rgba(0,0,0,0.5)] bg-blend-overlay'><BannerSlider data={slide1}></BannerSlider></SwiperSlide>
                <SwiperSlide className='bg-slider2 bg-cover bg-no-repeat bg-center bg-[rgba(0,0,0,0.5)] bg-blend-overlay'><BannerSlider data={slide2}></BannerSlider></SwiperSlide>
                <SwiperSlide className='bg-slider3 bg-cover bg-no-repeat bg-center bg-[rgba(0,0,0,0.5)] bg-blend-overlay'><BannerSlider data={slide3}></BannerSlider></SwiperSlide>
                <SwiperSlide className='bg-slider4 bg-cover bg-no-repeat bg-center bg-[rgba(0,0,0,0.5)] bg-blend-overlay'><BannerSlider data={slide4}></BannerSlider></SwiperSlide>
                <SwiperSlide className='bg-slider5 bg-cover bg-no-repeat bg-center bg-[rgba(0,0,0,0.5)] bg-blend-overlay'><BannerSlider data={slide4}></BannerSlider></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
