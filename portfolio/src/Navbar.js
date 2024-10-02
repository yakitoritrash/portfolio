import React from 'react';
import './Navbar.css'
import logo from "./assets/images/logo.png"

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='logo'>
                <a href="#home"><img src = {logo} alt = "Logo" className='logo.png' /></a>
            </div>
            <ul className='nav-links'>
                <li><a href="#about" className='whitetext'>about</a></li>
                <li><a href="#works" className='whitetext'>works</a></li>
                <li><a href="#resume" className='whitetext'>résumè</a></li>
                <li><a href="#contact" className="orangetext">contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;