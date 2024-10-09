import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Netproject.css';

const Netproject = () => {
    const navigate = useNavigate();
    const cardsData = [
        { title: 'Malware Analysis Lab with Isolated Virtual Network Setup', description: "In this project, I created a secure malware analysis environment by setting up two virtual machines (VMs): a Windows 10 VM that I converted into FLARE VM and a REMnux VM. The two VMs were isolated from external networks, only allowing communication between them via a custom virtual network configuration. The REMnux VM was configured as the DNS server for the FLARE VM. This setup enabled safe and controlled malware analysis by ensuring that the malware within the FLARE VM couldn't communicate with anything beyond the isolated virtual network.", path: '/malware' },
        { title: 'Cloud Networking', description: 'Explore cloud networking solutions.', path: '/cloud-networking' },
        { title: 'Firewall Setup', description: 'Set up a firewall for protection.', path: '/firewall-setup' },
        { title: 'Network Security', description: 'Learn about securing networks.', path: '/network-security' },
        { title: 'Cloud Networking', description: 'Explore cloud networking solutions.', path: '/cloud-networking' },
        { title: 'Firewall Setup', description: 'Set up a firewall for protection.', path: '/firewall-setup' },
        { title: 'Network Security', description: 'Learn about securing networks.', path: '/network-security' },
        { title: 'Cloud Networking', description: 'Explore cloud networking solutions.', path: '/cloud-networking' },
        { title: 'Firewall Setup', description: 'Set up a firewall for protection.', path: '/firewall-setup' },
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to handle card click
    const handleCardClick = (path) => {
        navigate(`/blog${path}`);
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
                <h1 className="network-title">SECURITY & NETWORKING.</h1>
            </div>
            <div className="tiles">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        ref={(el) => (cardRefs.current[index] = el)} // Assign refs to each card
                        onClick={() => handleCardClick(card.path)} // Handle click event
                        onMouseMove={(e) => handleMouseMove(e, index)} // Update mouse position on hover
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