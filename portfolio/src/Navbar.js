import React, { useState } from 'react';
import './Navbar.css';
import logo from "./assets/images/logo.png";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutClick = () => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => scrollToSection("about-section"), 100);
        } else {
            scrollToSection("about-section");
        }
    };

    const handleWorksClick = () => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => scrollToSection("works"), 100);
        } else {
            scrollToSection("works");
        }
    };

    const handleResumeClick = () => {
        window.open('/assets/files/myresume.pdf', '_blank');
    };

    const handleContactClick = () => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => scrollToSection("Contact"), 100);
        } else {
            scrollToSection("Contact");
        }
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <RouterLink to="https://kushagradwivedi.tech"><img src={logo} alt="Logo" className='logo.png' /></RouterLink>
            </div>

            {/* Hamburger for small screens */}
            <div className='hamburger' onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Default nav links */}
            <ul className='nav-links'>
                <li><span onClick={handleAboutClick} className='whitetext'>about</span></li>
                <li><span onClick={handleWorksClick} className='whitetext'>works</span></li>
                <li><span onClick={handleResumeClick} className='whitetext'>résumè</span></li>
                <li><span onClick={handleContactClick} className="orangetext">contact</span></li>
            </ul>

            {/* Mobile nav links */}
            <ul className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
                <li><span onClick={handleAboutClick} className='whitetext'>about</span></li>
                <li><span onClick={handleWorksClick} className='whitetext'>works</span></li>
                <li><span onClick={handleResumeClick} className='whitetext'>résumè</span></li>
                <li><span onClick={handleContactClick} className="orangetext">contact</span></li>
            </ul>
        </nav>
    );
}

export default Navbar;
