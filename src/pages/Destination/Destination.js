import React from "react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import '../Destination/destination.css';


import { useState } from "react";

const Destination = (props) => {
    const [img, setImg] = useState(props.data[0].images.webp);
    const [title, setTitle] = useState(props.data[0].name);
    const [articles, setArticles] = useState(props.data[0].description);
    const [distance, setDistance] = useState(props.data[0].distance);
    const [travel, setTravel] = useState(props.data[0].travel);
    const [isActive, setIsActive] = useState({ active: 'moon' });

    function tab(e) {
        setIsActive({ active: e.target.id });

        if (e.target.id === 'moon') {
            setImg(props.data[0].images.webp);
            setTitle(props.data[0].name);
            setArticles(props.data[0].description);
            setDistance(props.data[0].distance);
            setTravel(props.data[0].travel);
        }

        if (e.target.id === 'mars') {
            setImg(props.data[1].images.webp);
            setTitle(props.data[1].name);
            setArticles(props.data[1].description);
            setDistance(props.data[1].distance);
            setTravel(props.data[1].travel);
        }

        if (e.target.id === 'europa') {
            setImg(props.data[2].images.webp);
            setTitle(props.data[2].name);
            setArticles(props.data[2].description);
            setDistance(props.data[2].distance);
            setTravel(props.data[2].travel);
        }

        if (e.target.id === 'titan') {
            setImg(props.data[3].images.webp);
            setTitle(props.data[3].name);
            setArticles(props.data[3].description);
            setDistance(props.data[3].distance);
            setTravel(props.data[3].travel);
        }
    }


    return (
        <>
            <Header />
            <section className="destination">
                <div className="container">
                    <div className="destination__row">
                        <p className="destination__heading heading-5"><span>01</span>Pick your destination</p>
                        <div className="destination__tab-wrapper">
                                <motion.img className="planet-img" src={img} alt="moon"
                                    key={img}
                                    initial={{x: '-100%', y: '30%', scale: 0.5}}
                                    animate={{x: 0, y: 0, scale: 1}}
                                    transition={{ duration: 1 }}

                                />
                                <div className="destination__tab">
                                    <div className="destination__navigate">
                                        <button className={'destination__tab-btn subheading-3' + (isActive.active === "moon" ? ' active' : '')} id="moon" onClick={tab}>Moon</button>
                                        <button className={'destination__tab-btn subheading-3' + (isActive.active === "mars" ? ' active' : '')} id="mars" onClick={tab}>Mars</button>
                                        <button className={'destination__tab-btn subheading-3' + (isActive.active === "europa" ? ' active' : '')} id="europa" onClick={tab}>Europa</button>
                                        <button className={'destination__tab-btn subheading-3' + (isActive.active === "titan" ? ' active' : '')} id="titan" onClick={tab}>Titan</button>
                                    </div>
                                    <h1 className="destination__title heading-2">
                                        {title}
                                    </h1>
                                    <p className="destination__paragraph body-text">
                                        {articles}
                                    </p>
                                    <hr className="destination__divider" />
                                    <div className="destination__travel-info">
                                        <div className="distance">
                                            <span className="distance__heading subheading-2">AVG. DISTANCE</span>
                                            <p className="distance__info subheading-1">{distance}</p>
                                        </div>
                                        <div className="travel-time">
                                            <span className="travel-time__heading subheading-2">Est. travel time</span>
                                            <p className="travel-time__info subheading-1">{travel}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination;