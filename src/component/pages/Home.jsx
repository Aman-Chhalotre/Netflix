import React, { useEffect, useState } from 'react';
import Hero_Banner from '../HeroBanner/Hero_Banner';
import NetflixCarousel from '../carausal/NetflixCarousel.jsx';
import useFetch from '../../hooks/useFetch.js';
import useData from '../../context/DataContext.js';



function Home() {
  
  const {fetchDataFromOmdbApi} = useFetch()
  const {netflixData} = useData()
  const [shows,setShows] = useState()
  const [movies,setMovies] = useState()
  const [adventure,setAdventure] = useState()
  

  useEffect(()=>{

    function getDetials(){
      
      fetchDataFromOmdbApi('/title/v2/find',{
        title: 'game of',
        titleType: 'movies',
        
      });

      const kids = netflixData?.titles.filter(obj => {
        return obj.jawSummary.genres[0].name.includes("Kids");
      });
      const shows = netflixData?.titles.filter((obj) => {
        return obj.summary.type === "show"
      })
      setShows(shows)
      const movies = netflixData?.titles.filter((obj) => {
        return obj.summary.type === "movie"
      })
      setMovies(movies)
      const adventureMovies = []
      movies?.map((object)=>{
        object.jawSummary.genres.map((obj)=>{
          if(obj.name.includes("Adventure")){
            adventureMovies.push(obj)
          }
        })
        setAdventure(adventureMovies)
      })

    }
    getDetials()
},[])
     



  return (
    <>
      <div className='h-auto w-full bg-[#141414] lg:px-10 px-0'>
        <Hero_Banner />
        <NetflixCarousel sliderTitle={'Movies'} data={movies}></NetflixCarousel>
        <NetflixCarousel sliderTitle={'TV Series'} data={shows}></NetflixCarousel>
        <NetflixCarousel sliderTitle={'Adventure Movies'} data={adventure}></NetflixCarousel>
      </div>

    </>
  )

}
export default Home;