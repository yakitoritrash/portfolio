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

    const closeMenu = () => {
        setMenuOpen(false); // Close the menu after clicking a link
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close the menu when a section is clicked
        }
    };

    const handleAboutClick = () => {
        if (location.pathname !== "/") {
            navigate("/#about", { replace: true });
            setTimeout(() => scrollToSection("about-section"), 100);
        } else {
            scrollToSection("about-section");
        }
    };

    const handleWorksClick = () => {
        if (location.pathname !== "/") {
            navigate("/#work", { replace: true });
            setTimeout(() => scrollToSection("works"), 100);
        } else {
            scrollToSection("works");
        }
    };

    const handleResumeClick = () => {
        window.open(`${process.env.PUBLIC_URL}/assets/files/myresume.pdf`, '_blank');
        closeMenu(); // Close the menu after clicking resume link
    };

    const handleContactClick = () => {
        if (location.pathname !== "/") {
            navigate("/#contact", { replace: true });
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
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Default nav links */}
            <ul className='nav-links'>
                <li><a onClick={handleAboutClick} className='whitetext'>about</a></li>
                <li><a onClick={handleWorksClick} className='whitetext'>work</a></li>
                <li><a onClick={handleResumeClick} className='whitetext'>résumè</a></li>
                <li><a onClick={handleContactClick} className="orangetext">contact</a></li>
            </ul>

            {/* Mobile nav links */}
            <ul className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
                <li><span onClick={handleAboutClick} className='whitetext'>about</span></li>
                <li><span onClick={handleWorksClick} className='whitetext'>work</span></li>
                <li><span onClick={handleResumeClick} className='whitetext'>résumè</span></li>
                <li><span onClick={handleContactClick} className="orangetext">contact</span></li>
            </ul>
        </nav>
    );
};

export default Navbar;
