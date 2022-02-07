import { Link } from "gatsby"
import * as React from "react"
import * as windows1251 from 'windows-1251'
import { useState } from 'react'

const Bar = ({ location }) => {
    const getRoutes = require("../Routes/GetRoutes")
    const routes = getRoutes.default()
    const windows1251Link = "/" + decodeURI(location.pathname.slice(1, -1)) + "/"
    const [doRenderMobile, setDoRenderMobile] = useState()

    return (
        // <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded" style={{ backgroundColor: '#25274D', fontFamily: "Helvetica" }}>
        //     <div class="container flex flex-wrap justify-between items-center mx-auto">
        //         <Link to="/" class="flex">
        //             <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Buh.guru</span>
        //         </Link>
        //         <button
        //             onClick={() => { setDoRenderMobile(true) }}
        //             data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        //             <span class="sr-only">Open main menu</span>
        //             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        //             <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button>
        //         <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        //             <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-4 md:text-sm md:font-medium">
        //                 {routes.map((route) => {
        //                     return (
        //                         <li style={{
        //                             color: windows1251Link === route.link ? '#AAABB8' : 'white',
        //                             fontWeight: "bold", fontSize: "15px"
        //                         }}>
        //                             <Link to={route.link} >
        //                                 <p >{route.title}</p>
        //                             </Link>
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" href="/"><p>Buh.guru</p></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        {routes.map((route) => {
                            return (
                                <li class="nav-item">
                                    <Link to={route.link} class="nav-link">
                                        <p class="nav-link">{route.title}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav >


    )
}

export default Bar