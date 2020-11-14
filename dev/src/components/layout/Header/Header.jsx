import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import {motion} from 'framer-motion'

import "./Header.css"

export default function Header() {
    return (

        <section className="navbar" >
            <div className="container">
                <div className="logo-wrapper">
                    Julien
                </div>
                <div className="nav-links">
                    <div className="nav-item">
                        <Link to="/">
                        Home
                        </Link>
                    </div>
                    <div className="nav-item">
                    <Link to="/work">
                        Work
                        </Link>
                    </div>
                    <div className="nav-item">
                        About
                    </div>
                    <div className="nav-item">
                        Resume
                    </div>

                </div>
            </div>
        </section>
    )
}

