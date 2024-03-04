import { useEffect, useState } from "react";
import useData from "../context/DataContext";


const useFetch = () => {
    const {omdbData,setOmdbData,netflixData,setNetflixData} = useData()
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    // setLoading("loading...")
    // setData(null)
    // setError(null)

    // fetchDataFromNetflixApi(url)
    //     .then((res) => {
    //         setLoading(false)
    //         setData(res)
    //     })
    //     .catch((err) => {
    //         setLoading(false)
    //         setError("Something went wrong!")
    //     });

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
     const fetchDataFromNetflixApi = async (url, params) => {
        try {
           await fetch(Netflix_URL + url, Netflix_opations, params)
           .then((response)=>{
               return response.json()
           })
           .then((data)=>{
               setNetflixData(data)
           })
        } catch (err) {
          console.log(err)
          return err
        }
      }


      const fetchDataFromOmdbApi = async (url, params) => {
        try {
          await fetch(Omdb_url + url, Omdb_Opations, params)
          .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setOmdbData(data)
        })
        } catch (err) {
          console.log(err)
          return err
        }
      }



    return  {fetchDataFromNetflixApi, fetchDataFromOmdbApi, netflixData, omdbData, loading, error };
}

export default useFetch;