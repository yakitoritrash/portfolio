import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Netproject.css';
import { BsArrowUpRight } from "react-icons/bs";

const Designproject = () => {
    const navigate = useNavigate();
    const cardsData = [
        { title: 'Everyday Photoshop', description: "In this project, I challenged myself to design a new poster every day using Adobe Photoshop. Each poster was unique, exploring different themes, styles, and techniques. This daily practice helped me improve my design skills, experiment with various tools and effects in Photoshop, and build a diverse portfolio of creative work. The project not only enhanced my proficiency in Photoshop but also fostered creativity and consistency in my design process.", path: '/everyday-photoshop' },
        { title: 'Personal Portfolio', description: 'In this project, I designed and developed my personal portfolio website from scratch using React, Framer Motion. The project highlights my proficiency in modern web development practices, with a focus on clean design, responsiveness, and smooth user experience. The portfolio serves as a showcase for my work and projects.', path: 'https://kushagradwivedi.tech/' },
        { title: 'Network Ping Utility Web App', description: 'In this project, I developed a web application using the Bottle framework in Python. The application allows users to input an IP address or domain name via the URL, and the app performs a ping operation to provide detailed information about the address. This tool is useful for network diagnostics and monitoring, offering a simple and intuitive interface for users to check the reachability and response time of networked devices.', path: 'https://github.com/yakitoritrash/ping_project' },
        { title: 'Multi-Ping Utility Web App', description: 'In this project, I extended the functionality of the Network Ping Utility Web App to allow users to input multiple IP addresses or domain names via the URL. The application performs simultaneous ping operations on all the provided addresses and returns detailed information for each. This tool is useful for network diagnostics and monitoring, offering a convenient way to check the reachability and response time of multiple networked devices at once.', path: 'https://github.com/yakitoritrash/multi_ping' },
        { title: 'Flight Management Web App', description: 'In this project, I built a flight management web application using Django and SQLite. The application allows users to manage flight schedules, book tickets, and view flight details. The backend is powered by Django, and the database is managed using SQLite, providing a lightweight and efficient solution for managing flight data.', path: 'https://github.com/yakitoritrash/airline' },        
        { title: 'Etch A Sketch Game', description: 'In this project, I developed an Etch A Sketch-like game using JavaScript. The game allows users to draw on a grid, and they can change the grid size to create more detailed or larger drawings. This project demonstrates my skills in JavaScript and DOM manipulation.', path: 'https://yakitoritrash.github.io/etch-a-sketch/' },
        { title: 'Currency Exchange Web App', description: 'In this project, I developed a currency exchange web application using JavaScript. The application allows users to input a currency code and fetch the latest exchange rate for USD to the specified currency using the CurrencyAPI. This project demonstrates my skills in JavaScript, API integration, and DOM manipulation.', path: 'https://yakitoritrash.github.io/currency/' },
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to handle card click
    const handleCardClick = (card) => {
        if (card.path.startsWith('http')) {
            // Open external link (e.g., GitHub)
            window.open(card.path, '_blank');
        } else { navigate(`/blog${card.path}`);
        }
    };

    // Function to update mouse position on hover
    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <>  
            <div className="network">
                <h1 className="network-title">DESIGN & DEVELOPMENT.</h1>
            </div>
            <div className="tiles">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        ref={(el) => (cardRefs.current[index] = el)} // Assign refs to each card
                        onClick={() => handleCardClick(card)} // Handle click event
                        onMouseMove={(e) => handleMouseMove(e, index)} // Update mouse position on hover
                    >
                        <div className="card-border"></div>
                        <div className="card-content"></div>
                        <div className="card-title">{card.title}</div>
                        <div className="card-description">{card.description}</div>
                        {(card.title === "Network Ping Utility Web App" || card.title === "Personal Portfolio" || card.title === "Multi-Ping Utility Web App" || card.title === "Flight Management Web App" || card.title === "Etch A Sketch Game" || card.title === "Currency Exchange Web App") && (
                            <BsArrowUpRight className="go-to-link-icon" />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Designproject;