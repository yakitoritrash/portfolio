import React, { useEffect, useRef } from "react";
import './Page3.css';

const Page3 = () => {
    const cardRefs = useRef([]);

    const handleOnMouseMove = e => {
        const {currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        
        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }

    useEffect(() => {
        cardRefs.current.forEach(card => {
            if (card) {
                card.addEventListener("mousemove", handleOnMouseMove);
            }
        });

        // Cleanup event listeners when component unmounts
        return () => {
            cardRefs.current.forEach(card => {
                if (card) {
                    card.removeEventListener("mousemove", handleOnMouseMove);
                }
            });
        };
    }, []);

    const cardsData = [
        {
            title: "Networking Projects",
            description: "Explore my portfolio of networking projects, showcasing expertise in protocols, system configurations, and secure network architectures."
        },
        {
            title: "Cloud Projects",
            description: "Delve into my cloud computing initiatives, including scalable deployments, server management, and cloud-based solutions."
        },
        {
            title: "Design Projects",
            description: "Browse through a collection of my design works, blending creativity with technical skills to craft unique and user-centered experiences."
        }
    ];



    return(

        <section className="page3">
        <h1 className="works-title">MY WORKS.</h1>
        <div className="tiles">
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className="card"
                    ref={(el) => cardRefs.current[index] = el} // Assign refs to each card
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