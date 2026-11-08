import React, { useEffect } from "react";
import "./Page2.css";
import resumephoto from "../src/assets/images/photo.jpg";
import { useNavigate, useLocation} from "react-router-dom";


const Page2 = () => {

    const navigate = useNavigate();
    const location = useLocation();

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


                if (iterations >= 9) clearInterval(interval);
                    
                    
                iterations += 1 / 3;    
            }, 30);

        };



        const heading = document.querySelector(".photo-title");
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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        if (location.pathname !== "/") {
            navigate("/#contact", { replace: true });
            setTimeout(() => scrollToSection("Contact"), 100);
        } else {
            navigate("#contact", { replace: true });
            scrollToSection("Contact");
        }
    };

    return(
        <section id="about-section" className="pagemainsection">
            <div className="photo">
            <img src = {resumephoto} alt = "me:)" className='resumephoto' />
            </div>
            <div className="aboutme">
            <h1 className="photo-title" data-value= "ABOUT ME.">ABOUT ME.</h1>
            <p className="about-description">I'm a software developer at Kizora Software, where I've been working since March 2026. I recently completed my integrated Master's degree in Cybersecurity at VIT Bhopal.

I enjoy building useful software and understanding how systems behave under the hood. My interests span application development, networking, and cybersecurity, with a soft spot for clean setups and dependable tools.</p>
                <div className="callme">
                    <p className="whiteme">Want to work together?</p>
                    <a href="contact" className="orangeme" onClick={handleContactClick}>Drop me a line.</a>
                </div>
            </div>
        </section>
    );
}

export default Page2;
