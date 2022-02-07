import { Link } from "gatsby"
import * as React from "react"
import MobileBarLinks from "./MobileBarLinks"
import { useState } from "react"

const Bar = ({ location }) => {
    const getRoutes = require("../Routes/GetRoutes")
    const routes = getRoutes.default()
    const currentLink = "/" + decodeURI(location.pathname.slice(1, -1)) + "/"
    const [mobileBar, setMobileBar] = useState(false)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" className="m-5" href="/">
                    <h3 class="nav-link" className="text-white">Buh.guru</h3>
                </a>
                <button
                    onClick={() => { mobileBar ? setMobileBar(false) : setMobileBar(true) }}
                    class="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
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
            {mobileBar && (
                <MobileBarLinks />
            )}
        </nav >


    )
}

export default Bar