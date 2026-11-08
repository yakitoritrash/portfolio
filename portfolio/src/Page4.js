import React, { useEffect } from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaBluesky } from "react-icons/fa6";

const Page4 = () => {
    useEffect(() => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const handleMouseOver = (event) => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                }) 
                
                .join(""); 


                if (iterations >= 15 ) clearInterval(interval);
                    
                    
                iterations += 1 / 3;    
            }, 30);

        };

        const heading = document.querySelector(".Heading");
        if (heading) {
            heading.onmouseover = handleMouseOver;
        }
        let observer;
        if (heading && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    handleMouseOver({ target: heading });
                    observer.disconnect();
                }
            }, { threshold: 0.65 });
            observer.observe(heading);
        }

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
            if (observer) observer.disconnect();
        };

    }, []);

    return (
        <section>
            <div className="Contact_Page" id="Contact">
                <div className="LeftPage">
                    <div className="TopLeft">
                        <h1 className="Heading" data-value= "Let's Connect.">Let's Connect.</h1>
                        <p className="subtitle">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                    </div>
                    <div className="BottomLeft">
                        <div className="up">
                            <h2 className="SubHeading">E-mail:</h2>
                            <a className="subtitle email-link" href="mailto:kushagra.finn@gmail.com">kushagra.finn@gmail.com</a>
                        </div>
                        <div className="down">
                            <h2 className="SubHeading">Socials:</h2>
                                <div className="social-icons">
                                    <a href="https://bsky.app/profile/yakitoritrash.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                                        <FaBluesky className="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kushagra-dwivedi-672371205" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                    </a>
                                    <a href="https://github.com/yakitoritrash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="icon" />
                                    </a>
                                    <a href="https://www.youtube.com/@yakitoritrash-e5w" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                        <FontAwesomeIcon icon={faYoutube} className="icon" />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Page4;
