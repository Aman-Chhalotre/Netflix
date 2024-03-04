import React, { useState, useEffect } from 'react'


function Hero_Banner() {
    const [background, setBackground] = useState('')
    const [logo,setLogo] = useState('')
    

    const Netflix_URL = "https://netflix-data.p.rapidapi.com"
    const Netflix_opations = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4bf8d30d9msh1e7246fbd087156p1f9b27jsnf3b579728372',
            'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
    };
    const Omdb_url = 'https://online-movie-database.p.rapidapi.com';
    const Omdb_Opations = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4bf8d30d9msh1e7246fbd087156p1f9b27jsnf3b579728372',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    // useEffect(() => {
    
        
    //     try {
    //        fetch(Netflix_URL + '/search/?query=.', Netflix_opations)
  
    //         .then((response) => {
    //           return response.json()
    //         })
    //         .then((result) => {
    //           const randomKey = Math.floor(Math.random() * 50)
    //           const detailObject = result.titles[randomKey]
    //           const videoId = detailObject.jawSummary.videoId
    //           const title = detailObject.jawSummary.title
    //           const logoImage = detailObject.jawSummary.logoImage.url
    //             setLogo(logoImage)
              
    //           fetch(Omdb_url + `/title/find?q=${title}`, Omdb_Opations)
    //             .then((response) => {
    //               return response.json()
    //             })
    //             .then((val) => {
    //               const imdbId = val?.results[0].id
    //               const imdbIdArray = imdbId.split("/")
    //               fetch(Omdb_url + `/title/get-videos?tconst=${imdbIdArray[2]}`, Omdb_Opations)
    //                 .then((response) => {
    //                   return response.json()
    //                 })
    //                 .then((val) => {
    //                   const videoId = val?.resource.videos[1].id
    //                   const videoIdArray = videoId.split("/")
    //                   fetch(Omdb_url + `/title/get-video-playback?viconst=${videoIdArray[2]}`, Omdb_Opations)
    //                     .then((response) => {
    //                       return response.json()
    //                     })
    //                     .then((val) => {
    //                       const videoUrl = val?.resource.encodings[1].playUrl
    //                       setBackground(videoUrl)
    //                     })
    //                 })
    //                 .catch((err) => {
    //                   console.log(err)
    //                 })
    //                 .catch((err) => {
    //                   console.log(err)
    //                 })
  
    //             })
    //             .catch((err) => {
    //               console.log(err)
    //             })
  
    //         })
    //     } catch (error) {
    //       console.error(error);
    //     }
   
  
    // }, [])

    return (
        <>
            <div id='home_banner' className="h-[100%] w-[100%] relative ">
                <video src={background} alt="" className=' sm:max-h-[90vh] sm:w-[100vw] md:object-none object-fill' autoPlay muted />
                {/* <img src={df} alt="" className=' h-[100vh] w-full object-cover'/> */}
                <div className='h-[100px] w-full absolute bottom-0 left-0  bg-gradient-to-b from-[#14141400] via-[#14141477] to-[#141414] '></div>
                <div className='lg:text-5xl sm:text-3xl font-bold text-white absolute md:top-[200px] sm:top-[100px] top-[80px] left-[50px]'>
                    <img src={logo} alt="" className='lg:h-[120px] sm:h-[80px] h-[50px]'/>
                </div>
            </div>
        </>
    )
}

export default Hero_Banner