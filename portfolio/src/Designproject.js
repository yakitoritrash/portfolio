import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Netproject.css';
import { BsArrowUpRight } from "react-icons/bs";

const Designproject = () => {
    const navigate = useNavigate();
    const cardsData = [
        { title: 'Everyday Photoshop', description: "In this project, I challenged myself to design a new poster every day using Adobe Photoshop. Each poster was unique, exploring different themes, styles, and techniques. This daily practice helped me improve my design skills, experiment with various tools and effects in Photoshop, and build a diverse portfolio of creative work. The project not only enhanced my proficiency in Photoshop but also fostered creativity and consistency in my design process.", path: '/everyday-photoshop' },
        { title: 'Personal Portfolio', description: 'In this project, I designed and developed my personal portfolio website from scratch using React, Framer Motion. The project highlights my proficiency in modern web development practices, with a focus on clean design, responsiveness, and smooth user experience. The portfolio serves as a showcase for my work and projects..', path: '/' },
        { title: 'Network Ping Utility Web App', description: 'In this project, I developed a web application using the Bottle framework in Python. The application allows users to input an IP address or domain name via the URL, and the app performs a ping operation to provide detailed information about the address. This tool is useful for network diagnostics and monitoring, offering a simple and intuitive interface for users to check the reachability and response time of networked devices.', path: 'https://github.com/yakitoritrash/ping_project' },
        { title: 'Multi-Ping Utility Web App', description: 'In this project, I extended the functionality of the Network Ping Utility Web App to allow users to input multiple IP addresses or domain names via the URL. The application performs simultaneous ping operations on all the provided addresses and returns detailed information for each. This tool is useful for network diagnostics and monitoring, offering a convenient way to check the reachability and response time of multiple networked devices at once.', path: 'https://github.com/yakitoritrash/multi_ping' },
        { title: 'Setting Up a Secure OpenVPN Server on AWS', description: 'In this project, I set up a secure OpenVPN server on Amazon Web Services (AWS) to provide a reliable and encrypted connection for remote access. The setup involved launching an EC2 instance, configuring security groups to allow VPN traffic, and installing and configuring OpenVPN on the server. This setup ensures secure and private communication over the internet, protecting data from potential eavesdroppers and providing remote access to internal network resources.', path: '/aws-openvpn' },        
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
                        {(card.title === "Network Ping Utility Web App" || card.title === "Personal Portfolio" || card.title === "Multi-Ping Utility Web App") && (
                            <BsArrowUpRight className="go-to-link-icon" />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Designproject;