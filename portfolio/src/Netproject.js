import React, { useRef } from 'react';
import './Netproject.css';

const Netproject = () => {
    // Example card data
    const cardsData = [
        { title: 'Network Security', description: 'Learn about securing networks.', path: '/network-security' },
        { title: 'Cloud Networking', description: 'Explore cloud networking solutions.', path: '/cloud-networking' },
        { title: 'Firewall Setup', description: 'Set up a firewall for protection.', path: '/firewall-setup' },
    ];

    // Create a ref for each card
    const cardRefs = useRef([]);

    // Function to handle card click
    const handleCardClick = (path) => {
        console.log(`Navigating to: ${path}`);
        // Implement navigation logic here, for example:
        // history.push(path);
    };

    return (
        <>
            <div className="network">
                <h1 className="network-title">SECURITY & NETWORKING.</h1>
            </div>
            <div className="tiles">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        ref={(el) => (cardRefs.current[index] = el)} // Assign refs to each card
                        onClick={() => handleCardClick(card.path)} // Handle click event
                    >
                        <div className="card-border"></div>
                        <div className="card-content"></div>
                        <div className="card-title">{card.title}</div>
                        <div className="card-description">{card.description}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Netproject;
