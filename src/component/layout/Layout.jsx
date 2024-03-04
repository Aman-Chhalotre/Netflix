import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header_footer/Header'
import Footer from '../header_footer/Footer'

function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </>
    )
}

export default Layout