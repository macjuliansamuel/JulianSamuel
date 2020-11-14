import React from 'react'
import { motion } from 'framer-motion'
import "./Home.css"

export default function Home() {
    return (
        <motion.section className="home-section" initial = {{x : 100}} animate = {{x: 0}} exit = {{x: -100}} >
            <h1 style = {{justifyContent: "center", marginLeft: "50vw"}}>Home</h1>
        </motion.section>
    )
}
