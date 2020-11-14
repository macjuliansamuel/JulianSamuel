import React from 'react'

import {motion} from "framer-motion"
import "./Work.css"

export default function Work() {
    return (
        <motion.section className="home-section" initial = {{x : 100}} animate = {{x: 0}} exit = {{x: -100}}>
            <h1 style = {{justifyContent: "center", marginLeft: "50vw"}}> Work </h1>
        </motion.section>
    )
}
