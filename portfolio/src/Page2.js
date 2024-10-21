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

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
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
            <h1 className="photo-title" data-value= "ABOUT ME">ABOUT ME.</h1>
            <p className="about-description">A passionate and dedicated IT Specialist and front-end developer currently pursuing an integrated master's degree in Cybersecurity at VIT Bhopal, India. My journey in the tech world has been fueled by a deep interest in cybersecurity, design, and development, and I am always eager to explore new opportunities and collaborations.</p>
                <div className="callme">
                    <p className="whiteme">Want to work together?</p>
                    <a href="contact" className="orangeme" onClick={handleContactClick}>Drop me a line.</a>
                </div>
            </div>
        </section>
    );
}

export default Page2;