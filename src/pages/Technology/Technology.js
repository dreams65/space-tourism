import React, { useState } from "react";
import Header from "../../components/Header/Header";
import './../Technology/technology.css'
import { motion } from "framer-motion";

const Technology = (props) => {

    const [isActive, setIsActive] = useState({ active: '1' });
    const [title, setTitle] = useState(props.data[0].name);
    const [text, setText] = useState(props.data[0].description);
    const [image, setImage] = useState(props.data[0].images.portrait)

    const slider = (e) => {
        setIsActive({ active: e.target.id });

        if (e.target.id == 1) {
            setTitle(props.data[0].name)
            setText(props.data[0].description)
            setImage(props.data[0].images.portrait)
        }

        if (e.target.id == 2) {
            setTitle(props.data[1].name)
            setText(props.data[1].description)
            setImage(props.data[1].images.portrait)
        }

        if (e.target.id == 3) {
            setTitle(props.data[2].name)
            setText(props.data[2].description)
            setImage(props.data[2].images.portrait)
        }
    }

    return (
        <>
            <Header />
            <section className="technology">
                <div className="container">
                    <div className="technology__row">
                        <p className="technology__heading  destination__heading heading-5"><span>03</span>SPACE LAUNCH 101</p>
                        <motion.img className="technology__mobile-img" src={image}
                            key={image}
                            initial={{ x: '100%'}}
                            animate={{ x: 0}}
                            transition={{ duration: 1 }}

                        />
                        <div className="technology__wrapper">
                        <div className="technology__controls">
                            <button className={"slider-btn slider-btn-controls" + (isActive.active === "1" ? ' active' : '')} id='1' onClick={slider}>1</button>
                            <button className={"slider-btn slider-btn-controls" + (isActive.active === "2" ? ' active' : '')} id='2' onClick={slider}>2</button>
                            <button className={"slider-btn slider-btn-controls" + (isActive.active === "3" ? ' active' : '')} id='3' onClick={slider}>3</button>
                        </div>
                        <motion.div className="technology__article"
                            key={title}
                            initial={{ y: '100%', scale: 0.5 }}
                            animate={{ y: 0, scale: 1 }}
                            transition={{ duration: 1 }}

                        >
                            <span className="technology__terminology subheading-3">THE TERMINOLOGY…</span>
                            <h2 className="technology__title heading-3">{title}</h2>
                            <p className="technology__text body-text">{text}</p>
                        </motion.div>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <motion.img className="technology__image" src={image} alt={title}
                        key={image}
                        initial={{ y: '60%', scale: 0.5 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </section>
        </>
    )
}

export default Technology;