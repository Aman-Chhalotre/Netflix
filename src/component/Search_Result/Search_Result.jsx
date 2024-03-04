import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import useFetch from '../../hooks/useFetch'

SwiperCore.use([Navigation]);


function Search_Result() {

  const { omdbData } = useFetch("")
 const searchResult = omdbData?.d.filter((obj) => {
    return obj.i && obj.i.imageUrl
});
console.log(searchResult)
  return (
    <>
      <div className='h-auto w-full lg:px-10 px-0 pt-20'>
        <div className='sm:h-[200px] h-[150px] max-w-[100vw] px-5 '>
          <Swiper

            slidesPerView={5}
            spaceBetween={0}
            navigation={false}
            

            className="mySwiper"
          >
            {
              searchResult?.map((obj) =>
                <SwiperSlide >
                  <img src={obj?.i.imageUrl} alt="" className=' sm:h-[200px] h-[150px] rounded-sm' draggable='false' />
                </SwiperSlide>
              )
            }
            

          </Swiper>
        </div>

      </div>
    </>
  )
}

export default Search_Result