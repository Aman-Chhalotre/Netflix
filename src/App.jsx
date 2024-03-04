
import { useState, useEffect } from 'react'
import './App.css'
import Layout from './component/layout/Layout'
import Login_Register from './component/login_register/Login_Register'
import { useSelector, useDispatch } from 'react-redux'
import { DataContextProvider } from './context/DataContext'


function App() {
  const [value, setValue] = useState(false)
  const [netflixData, setNetflixData] = useState(null)
  const [omdbData, setOmdbData] = useState(null)


  return (
    <>
      <div>
        {(value) ?
          <Login_Register></Login_Register>
          :
          <DataContextProvider value={{netflixData, setNetflixData, omdbData, setOmdbData}}>
            <Layout></Layout>
          </DataContextProvider>
        }
      </div>


    </>
  )
}

export default App
