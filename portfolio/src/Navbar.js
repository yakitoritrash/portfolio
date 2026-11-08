import React, { useState } from 'react';
import './Navbar.css';
import logo from "./assets/images/logo.png";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false); // Close the menu after clicking a link
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const block = window.matchMedia('(max-width: 700px)').matches ? 'start' : 'center';
            section.scrollIntoView({ behavior: 'smooth', block, inline: 'center' });
            closeMenu(); // Close the menu when a section is clicked
        }
    };

    const handleAboutClick = () => {
        navigate("/#about", { replace: true });
        scrollToSection("about-section");
        closeMenu();
    };

    const handleWorksClick = () => {
        navigate("/#work", { replace: true });
        scrollToSection("works");
        closeMenu();
    };

    const handleResumeClick = () => {
        window.open(`${process.env.PUBLIC_URL}/assets/files/myresume.pdf`, '_blank');
        closeMenu(); // Close the menu after clicking resume link
    };

    const handleContactClick = () => {
        navigate("/#contact", { replace: true });
        scrollToSection("Contact");
        closeMenu();
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <RouterLink to="/" aria-label="Home"><img src={logo} alt="Kushagra home" className='logo-image' /></RouterLink>
            </div>

            {/* Hamburger for small screens */}
            <button type="button" className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            {/* Default nav links */}
            <ul className='nav-links'>
                <li><button onClick={handleAboutClick} className='whitetext nav-button'>about</button></li>
                <li><button onClick={handleWorksClick} className='whitetext nav-button'>work</button></li>
                <li><button onClick={handleResumeClick} className='whitetext nav-button'>résumè</button></li>
                <li><button onClick={handleContactClick} className="orangetext nav-button">contact</button></li>
            </ul>

            {/* Mobile nav links */}
            <ul className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
                <li><button onClick={handleAboutClick} className='whitetext'>about</button></li>
                <li><button onClick={handleWorksClick} className='whitetext'>work</button></li>
                <li><button onClick={handleResumeClick} className='whitetext'>résumé</button></li>
                <li><button onClick={handleContactClick} className="orangetext">contact</button></li>
            </ul>
        </nav>
    );
};
// hi?
export default Navbar;
