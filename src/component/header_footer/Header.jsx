import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function Header() {

  const [showInput, setShowInput] = useState(false)
  const [query,setQuery] = useState('')

  const navigate = useNavigate()

  const { fetchDataFromOmdbApi} = useFetch("")
  
  const searchQueryHandler = (event)=> {
    if(event.key === 'Enter' && query.length > 0){
      fetchDataFromOmdbApi(`/auto-complete?q=${query}`)
       
        navigate(`search_result`)
        setQuery('')
      
    }
  }

  return (
    <>

      <nav className='h-16 w-[100%] lg:px-10 px-5 flex  items-center justify-between text-white sticky-top absolute bg-gradient-to-t from-[#14141410] via-[#000000a8] to-[#000000d8] ' >
        <div className='w-[70%] flex items-center justify-between gap-4'>
          <Link to="/">
            <img src={logo} alt="" className='sm:h-[25px] h-[1em]' />
          </Link>
          <div className=' w-[100%] md:flex items-center lg:gap-[5%] gap-[3%] sm:text-[70%] lg:text-[90%] hidden '>
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'font-bold' : 'font-normal'} text-white`}>Home</NavLink>
            <NavLink to='/TV_Shows' className={({ isActive }) => `${isActive ? 'font-bold' : 'font-normal'} text-white`}>TV Shows</NavLink>
            <NavLink to='/Movies' className={({ isActive }) => `${isActive ? 'font-bold' : 'font-normal'} text-white`}>Movies</NavLink>
            <NavLink to='/New&Popular' className={({ isActive }) => `${isActive ? 'font-bold' : 'font-normal'} text-white`}>New & Popular</NavLink>
            <NavLink to='/My_List' className={({ isActive }) => `${isActive ? 'font-bold' : 'font-normal'} text-white`}>My List</NavLink>
          </div>
        </div>
        <div className=' w-[30%] flex items-center justify-end gap-3 '>

          <div className=' flex '>
            <i className={`fa-solid fa-magnifying-glass text-lg cursor-pointer ${(showInput) ? "bg-black p-[6px] px-[5px] duration-500" : 'bg-transparent duration-500'}`} onClick={() => { setShowInput(!showInput) }}></i>
            <input
             type="text"
             value={query}
             placeholder='Title, people, genres'
             className={`${(showInput) ? 'w-48 duration-500 p-2' : 'w-0 duration-500'}  bg-black`}
             onKeyUp={searchQueryHandler} onChange={(e)=>{setQuery(e.target.value)}}/>
          </div>

          <h1 className='sm:text-sm text-xs font-medium'>Children</h1>
          <i className="fa-regular fa-bell sm:text-lg text-sm"></i>
          <i className="fa-regular fa-user sm:text-xl text-xs"></i>
        </div>
      </nav>

    </>
  )
}

export default Header