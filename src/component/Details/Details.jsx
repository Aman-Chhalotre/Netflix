import React from 'react'
import banner from '../../assets/images/login_page_banner.jpg'
import tv_show from '../../assets/images/tvshow.jpg'


function Details() {
  return (
    <>
      <div className='h-full w-full flex justify-center pt-5'>

        <div className='h-full lg:w-[850px] sm:w-[600px] w-[400px] sm:mx-0 mx-[10px] bg-[#181818] rounded relative text-gray-300'>
          <button className='absolute h-12 w-12 bg-[#181818] text-xl rounded-full right-2 top-2'><i className="fa-solid fa-x"></i></button>
          <img src={banner} alt="" className='object-cover rounded-t-md opacity-[10% 10%]' />
          <span id='shade' className='h-[100px] w-[100%] absolute mt-[-100px]  bg-gradient-to-b from-[#18181800] via-[#181818d3] to-[#181818] '></span>
          <div className='sm:px-5 px-3'>
            <div className='min-h-[200px] w-full mt-[3] flex justify-between'>
              <div className='h-full w-[55%] flex flex-col gap-2 '>
                <span className='flex gap-2'>
                  <h1 id='release_year' className='sm:text-lg text-sm font-medium text-gray-400'>2023</h1>
                  <h1 id='playback_time' className='sm:text-lg text-sm text-gray-400 font-medium'>2h 40m</h1>
                </span>
                <h1 id='genres' className='sm:text-sm text-xs font-medium'>suicide, tobacco use, violence</h1>
                <h1 id='description' className='sm:text-base text-sm font-medium'>When his friends in Punjab struggle to clear the immigration process, an ex-soldier guides them on a risky journey to enter the UK without permission.</h1>
              </div>
              <div className='h-full w-[40%] flex flex-col gap-2'>
                <h1 id='cast' className='font-medium sm:text-sm text-xs'><span className='text-gray-500 font-normal'>Cast:</span> Shah Rukh Khan, Taapsee Pannu, Boman Irani, more</h1>
                <h1 id='genres' className='font-medium sm:text-sm text-xs'><span className='text-gray-500 font-normal'>Genres:</span> Hindi-Languge Movies, Bollywood Mobies, Romantic Comedies</h1>
              </div>
            </div>
            <div id='moreLikeThis' className='h-full w-full'>
              <h1 className='text-2xl font-bold mb-4 text-center'>More Like This</h1>
              <div className=' flex flex-wrap gap-3'>
                <div className='h-[350px] sm:w-[230px] w-[90%] bg-[#2F2F2F] rounded'>
                  <img src={tv_show} alt="" className='rounded-t' />
                  <div className='p-2'>
                    <h1 id='release_date' className='font-bold text-lg'>2023</h1>
                    <h1 className='text-sm font-semibold mt-3'>After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>


      </div>
    </>
  )
}

export default Details