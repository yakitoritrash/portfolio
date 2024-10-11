import React from 'react';
import './Navbar.css';
import logo from "./assets/images/logo.png";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        if (location.pathname !== "/") {
            navigate("/#about-section");
        } else {
            scroll.scrollTo(document.getElementById("about-section").offsetTop, {
                duration: 500,
                smooth: true,
                offset: 1500
            });
        }
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <RouterLink to="/"><img src={logo} alt="Logo" className='logo.png' /></RouterLink>
            </div>
            <ul className='nav-links'>
                <li><span onClick={handleAboutClick} className='whitetext'>about</span></li>
                <li><RouterLink to="/#works" className='whitetext'>works</RouterLink></li>
                <li><RouterLink to="/#resume" className='whitetext'>résumè</RouterLink></li>
                <li><RouterLink to="/#contact" className="orangetext">contact</RouterLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;