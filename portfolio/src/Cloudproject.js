import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Netproject.css';

const CloudProject = () => {
    const navigate = useNavigate();
    const cardsData = [
        { title: 'Setting Up a Secure OpenVPN Server on AWS', description: 'In this project, I set up a secure OpenVPN server on Amazon Web Services (AWS) to provide a reliable and encrypted connection for remote access. The setup involved launching an EC2 instance, configuring security groups to allow VPN traffic, and installing and configuring OpenVPN on the server. This setup ensures secure and private communication over the internet, protecting data from potential eavesdroppers and providing remote access to internal network resources.', path: '/aws-openvpn' },
        { title: 'Setting up ntfy on Linode', description: 'In this project, I set up ntfy, a simple and powerful notification service, on a Linode server and connected it to my Android device. This setup allows me to receive real-time notifications from my terminal directly on my Android device, enhancing my workflow and ensuring I never miss important updates.', path: '/ntfy-setup' },
        { title: 'Setting Up Uptime Kuma on Linode', description: 'In this project, I set up an Uptime Kuma server on a Linode instance to monitor the uptime and performance of several websites. Additionally, I configured the server to send notifications to a Discord channel, ensuring that I receive real-time alerts about any downtime or performance issues. This setup helps in maintaining the reliability and availability of the monitored websites.', path: '/uptime-kuma-setup' },
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
                <h1 className="network-title">CLOUD.</h1>
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

export default CloudProject;