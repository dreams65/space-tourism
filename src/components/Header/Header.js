import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from '../../assets/shared/logo.svg';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
           <div className="header__row">
           <a href="/" className="header__brand">
                <img className="header__logo" src={logo} alt="" />
            </a>
            <span className="header__divider"/>
            <div className="header-wrapper">
                <nav className={"header__nav" + (isOpen === false ? '' : ' active')}>
                    <ul className="header__nav-items">
                        <li className="header__nav-item">
                            <NavLink className="header__nav-link" to="/"><span>00</span> Home</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className="header__nav-link" to="/Destination"><span>01</span> Destination</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className="header__nav-link" to="/Crew"><span>02</span> Crew</NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className="header__nav-link" to="/Technology"><span>03</span> Technology</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="burger__btn" onClick={handleClick}>
                <span className={"burger__btn-line" + (isOpen === false ? '' : ' active')}></span>
            </button>
           </div>
        </header>
    )
}

export default Header;