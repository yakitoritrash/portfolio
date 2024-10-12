import React from 'react';
import './Navbar.css';
import logo from "./assets/images/logo.png";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const sectionPosition = section.getBoundingClientRect();
            const isInViewport = sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight;

            if (!isInViewport) {
                scroll.scrollTo(section.offsetTop - 100, {
                    duration: 500,
                    smooth: true,
                });
            }
        } else {
            // Retry after a short delay if the section is not found
            setTimeout(() => scrollToSection(sectionId), 100);
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

    return (
        <nav className='navbar'>
            <div className='logo'>
                <RouterLink to="/"><img src={logo} alt="Logo" className='logo.png' /></RouterLink>
            </div>
            <ul className='nav-links'>
                <li><span onClick={handleAboutClick} className='whitetext'>about</span></li>
                <li><span onClick={handleWorksClick} className='whitetext'>works</span></li>
                <li><span onClick={handleResumeClick} className='whitetext'>résumè</span></li>
                <li><RouterLink to="/#contact" className="orangetext">contact</RouterLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
