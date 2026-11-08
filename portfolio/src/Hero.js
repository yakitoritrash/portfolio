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
            <p className="hero-kicker">~/about — software developer</p>
            <h1 className="HEROTITLETITLE">HEY, I'M</h1>
            <h1 className="hero-title" data-value = "KUSHAGRA.">KUSHAGRA.</h1>
            <p className="hero-description">I like to build stuff :0</p>
        </section>
    );
};

export default Hero;
