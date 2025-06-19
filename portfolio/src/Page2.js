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
            <h1 className="photo-title" data-value= "ABOUT ME.">ABOUT ME.</h1>
            <p className="about-description">I'm a software engineer with a strong interest in cybersecurity, currently pursuing an integrated Master’s degree in Cybersecurity at VIT Bhopal (final year).

My background blends secure systems, software development, and problem-solving — whether it’s writing efficient backend code, working with networks, or understanding how systems behave under the hood. I enjoy building reliable software and thinking critically about security, performance, and design.

Cybersecurity is a core part of how I approach technology. I'm particularly interested in areas like system security, intrusion detection, and creating tools that are both effective and dependable.</p>
                <div className="callme">
                    <p className="whiteme">Want to work together?</p>
                    <a href="contact" className="orangeme" onClick={handleContactClick}>Drop me a line.</a>
                </div>
            </div>
        </section>
    );
}

export default Page2;
