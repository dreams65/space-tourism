import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import './../Crew/crew.css';
import { motion } from "framer-motion";


const Crew = (props) => {
    const [count, setCount] = useState(0);
    const [roleText, setRoleText] = useState(props.data[0].role);
    const [nameText, setNameText] = useState(props.data[0].name);
    const [bioText, setBioText] = useState(props.data[0].bio);
    const [image, setImage] = useState(props.data[0].images.webp);
    const [isActive, setIsActive] = useState({active: 'commander'});

    const handleChange = (e) => {

        setIsActive({ active: e.target.id });

        if (e.target.id === 'commander'){
            setRoleText(props.data[0].role);
            setNameText(props.data[0].name);
            setBioText(props.data[0].bio);
            setImage(props.data[0].images.webp);
        }
        if (e.target.id === 'specialist'){
            setRoleText(props.data[1].role);
            setNameText(props.data[1].name);
            setBioText(props.data[1].bio);
            setImage(props.data[1].images.webp);
        }
        if (e.target.id === 'pilot'){
            setRoleText(props.data[2].role);
            setNameText(props.data[2].name);
            setBioText(props.data[2].bio);
            setImage(props.data[2].images.webp);
        }
        if (e.target.id === 'engineer'){
            setRoleText(props.data[3].role);
            setNameText(props.data[3].name);
            setBioText(props.data[3].bio);
            setImage(props.data[3].images.webp);
        }

        
    }
    

    return (
        <>
            <Header/>
            <section className="crew">
                <div className="crew__row">
                    <div className="container">
                        <p className="crew__heading destination__heading heading-5"><span>02</span>Meet your crew</p>
                       <div className="mobile-wrapper">
                       <div className="crew__wrapper">
                            <motion.div className="crew__info"
                                key={nameText}
                                initial={{y: 70, opacity: 0 }}
                                animate={{y: 0, opacity: 1}}
                                transition={{ duration: 1 }}
                            >
                                <p className="role subheading-1">{roleText}</p>
                                <h2 className="name heading-3">{nameText}</h2>
                                <p className="bio body-text">
                                    {bioText}
                                </p>
                            </motion.div>
                            <div className="slider-navigate">
                                <button className={"slider-dots" + (isActive.active === "commander" ? ' active' : '')} id='commander' onClick={handleChange}></button>
                                <button className={"slider-dots"  + (isActive.active === "specialist" ? ' active' : '')} id='specialist' onClick={handleChange}></button>
                                <button className={"slider-dots"  + (isActive.active === "pilot" ? ' active' : '')} id='pilot' onClick={handleChange}></button>
                                <button className={"slider-dots"  + (isActive.active === "engineer" ? ' active' : '')} id='engineer' onClick={handleChange}></button>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <motion.img className="crew__img" src={image} alt={nameText}
                                key={image}
                                initial={{x: 70, opacity: 0 }}
                                animate={{x: 0, opacity: 1}}
                                transition={{ duration: 1 }}
                            />
                        </div>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crew;