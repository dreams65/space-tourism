import React from "react";
import Header from '../../components/Header/Header'
import './../Home/home.css'
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {

    return (

        <>
            <Header />
            <section className="hero">
                <div className="container">
                    <div className="hero__row">
                        <div className="hero-wrapper">
                            <p className="heading-5">SO, YOU WANT TO TRAVEL TO</p>
                            <h1 className="hero__title heading-1">SPACE</h1>
                            <p className="body-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                        <NavLink className="main-btn" to="/Destination"
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{ duration: 1 }}
                                
                        >EXPLORE</NavLink>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home