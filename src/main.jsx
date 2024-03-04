import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
import Home from './component/pages/Home.jsx'
import Details from './component/Details/Details.jsx'
import Search_Result from './component/Search_Result/Search_Result.jsx'
import TV_shows from './component/pages/TV_shows.jsx'
import Movies from './component/pages/Movies.jsx'
import New_and_popular from './component/pages/New_and_Popular.jsx'
import PageNotFound from './component/pages/PageNotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='details' element={<Details />} />
      <Route path='search_result' element={<Search_Result />} />
      <Route path='tv_shows' element={<TV_shows />} />
      <Route path='movies' element={<Movies />} />
      <Route path='new_and_popular' element={<New_and_popular />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
