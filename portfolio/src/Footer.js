import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className='footertext' >&copy; {new Date().getFullYear()} kushagra. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;