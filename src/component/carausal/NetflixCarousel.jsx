

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './NetflixCarousel.css'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);

const NetflixCarousel = ({ sliderTitle, data }) => {
    return (
        <>
            <div className='sm:h-[200px] h-[150px] max-w-[100vw] ps-10 '>
                <h1 className='text-lg font-medium text-white mb-2'>{sliderTitle}</h1>
                <Swiper

                    slidesPerView={2}
                    spaceBetween={4}
                    navigation={true}
                    breakpoints={{
                        440: {
                            slidesPerView: 2.5,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                    }}

                    className="mySwiper"
                >
                    
                    
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm ' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt="" className=' sm:h-[130px] h-[100px] rounded-sm' draggable='false' />
                    </SwiperSlide>
                
                    

                </Swiper>
            </div>

        </>

    );
};

export default NetflixCarousel;
