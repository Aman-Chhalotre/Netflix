import { createContext, useContext } from "react";

export const DataContext = createContext({
    omdbData:null,
    setOmdbData:()=>{},
    netflixData:null,
    setNetflixData:()=>{}
})

export const DataContextProvider = DataContext.Provider

export default function useData(){
    return useContext(DataContext)
}