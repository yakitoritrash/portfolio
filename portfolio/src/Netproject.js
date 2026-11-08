import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowUpRight } from "react-icons/bs";
import './Netproject.css';

const Netproject = () => {
    const navigate = useNavigate();
    const cardsData = [
        { title: 'Malware Analysis Lab with Isolated Virtual Network Setup', description: "In this project, I created a secure malware analysis environment by setting up two virtual machines (VMs): a Windows 10 VM that I converted into FLARE VM and a REMnux VM. The two VMs were isolated from external networks, only allowing communication between them via a custom virtual network configuration. The REMnux VM was configured as the DNS server for the FLARE VM. This setup enabled safe and controlled malware analysis by ensuring that the malware within the FLARE VM couldn't communicate with anything beyond the isolated virtual network.", path: '/malware-analysis-lab' },
        { title: 'Setting Up a Secure OpenVPN Server on AWS', description: 'In this project, I set up a secure OpenVPN server on Amazon Web Services (AWS) to provide a reliable and encrypted connection for remote access. The setup involved launching an EC2 instance, configuring security groups to allow VPN traffic, and installing and configuring OpenVPN on the server. This setup ensures secure and private communication over the internet, protecting data from potential eavesdroppers and providing remote access to internal network resources.', path: '/aws-openvpn' },
        { title: 'Network Ping Utility Web App', description: 'In this project, I developed a web application using the Bottle framework in Python. The application allows users to input an IP address or domain name via the URL, and the app performs a ping operation to provide detailed information about the address. This tool is useful for network diagnostics and monitoring, offering a simple and intuitive interface for users to check the reachability and response time of networked devices.', path: 'https://github.com/yakitoritrash/ping_project' },
        { title: 'Multi-Ping Utility Web App', description: 'In this project, I extended the functionality of the Network Ping Utility Web App to allow users to input multiple IP addresses or domain names via the URL. The application performs simultaneous ping operations on all the provided addresses and returns detailed information for each. This tool is useful for network diagnostics and monitoring, offering a convenient way to check the reachability and response time of multiple networked devices at once.', path: 'https://github.com/yakitoritrash/multi_ping' },
        { title: 'Setting Up Active Directory Domain Services with Windows Server in a Virtualized Environment', description: 'In this project, I configured Active Directory Domain Services (AD DS) on Windows Server 2019 to manage user authentication and resource access within a virtualized environment. The setup included establishing a Domain Controller (DC) with DHCP and DNS services, along with a Windows 10 client connected to the domain. This configuration enables centralized management of users and devices, ensuring secure and efficient access to network resources.', path: '/active-directory' },
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
        } else {
            // Navigate to internal route
            navigate(`/blog${card.path}`);
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
                <h1 className="network-title">SECURITY & NETWORKING.</h1>
            </div>
            <div className="tiles">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        ref={(el) => (cardRefs.current[index] = el)} // Assign refs to each card
                        onClick={() => handleCardClick(card)} // Pass the full card object
                        onMouseMove={(e) => handleMouseMove(e, index)} // Update mouse position on hover
                    >
                        <div className="card-border"></div>
                        <div className="card-content"></div>
                        <div className="card-title">{card.title}</div>
                        <div className="card-description">{card.description}</div>
                        {(card.title === "Network Ping Utility Web App" || card.title === "Multi-Ping Utility Web App") && (
                            <BsArrowUpRight className="go-to-link-icon" />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Netproject;
