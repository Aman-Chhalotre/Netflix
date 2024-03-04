import React from 'react'
import Hero_Banner from '../HeroBanner/Hero_Banner'
import NetflixCarousel from '../carausal/NetflixCarousel'
import slide from '../../assets/images/slide.jpg'
import tvshow from '../../assets/images/tvshow.jpg'
import trendingnow from '../../assets/images/trendingnow.jpg'

function Movies() {
  return (
    <>
      <div className='h-full w-full bg-[#141414] lg:px-10 px-0'>
        <Hero_Banner/>
        <NetflixCarousel sliderTitle={'Trending Movies'} image={tvshow}></NetflixCarousel>
        <NetflixCarousel sliderTitle={'English Movies'} image={slide}></NetflixCarousel>
        <NetflixCarousel sliderTitle={'TV Series'} image={trendingnow}></NetflixCarousel>
      </div>
    </>
  )
}

export default Movies