import React from 'react';
import './Navbar.css'
import logo from "./assets/images/logo.png"
import { Link as RouterLink} from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='logo'>
                <RouterLink to= "/"><img src = {logo} alt = "Logo" className='logo.png' /></RouterLink>
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