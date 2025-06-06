import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Page3.css';

const Page3 = () => {
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

        const heading = document.querySelector(".works-title");
        if (heading) {
            heading.onmouseover = handleMouseOver;
        }

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
        };

    }, []);

    const cardRefs = useRef([]);
    const navigate = useNavigate();  // Initialize useNavigate

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleCardClick = (path) => {
        navigate(path);  // Redirect to the path passed
    };

    useEffect(() => {
        const currentCards = [...cardRefs.current]; // Create a copy of the current value

        currentCards.forEach(card => {
            if (card) {
                card.addEventListener("mousemove", handleOnMouseMove);
            }
        });

        return () => {
            currentCards.forEach(card => {
                if (card) {
                    card.removeEventListener("mousemove", handleOnMouseMove);
                }
            });
        };
    }, []);

    const cardsData = [
        {
            title: "Security & Networking Projects",
            description: "Explore my portfolio of networking projects, showcasing expertise in protocols, system configurations, and secure network architectures.",
            path: "/network"  // Path to the new page
        },
        {
            title: "Cloud Projects",
            description: "Delve into my cloud computing initiatives, including scalable deployments, server management, and cloud-based solutions.",
            path: "/cloud" // You can add other paths
        },
        {
            title: "Development & Design Projects",
            description: "Browse through a collection of my design works, blending creativity with technical skills to craft unique and user-centered experiences.",
            path: "/design"
        }
    ];

    return (
        <section className="page3" id = "works">
            <h1 className="works-title" data-value="MY WORK.">MY WORK.</h1>
            <div className="tiles">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        ref={(el) => cardRefs.current[index] = el} // Assign refs to each card
                        onClick={() => handleCardClick(card.path)} // Handle click event
                    >
                        <div className="card-border"></div>
                        <div className="card-content"></div>
                        <div className="card-title">{card.title}</div>
                        <div className="card-description">{card.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Page3;