import React, { useEffect } from "react";
import './Hero.css';

const Hero = () => {

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

        const heading = document.querySelector(".hero-title");
        if (heading) {
            heading.onmouseover = handleMouseOver;
        }

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
        };

    }, []);

    return(
        <section className="hero">
            <h1 className="HEROTITLETITLE">HEY, I AM</h1>
            <h1 className="hero-title" data-value = "KUSHAGRA.">KUSHAGRA.</h1> 
            <p className="hero-description">A software engineer and IT specialist. I like what I do. I am currently open to work. :O</p>
        </section>
    );
};

export default Hero;
