import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/awsopenvpnblog', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const Awsvpn = () => {
    return (
        <div className="blog-container">
            <h1>Setting Up a Secure OpenVPN Server on AWS.</h1>
            <h2>Summary</h2>
            <p>
            The primary goal of this project was to establish a secure and encrypted communication channel for remote access to internal network resources. By leveraging AWS and OpenVPN, I was able to create a robust VPN solution that ensures data privacy and security.
            </p>
            <h2>Project Details</h2>
            <p>
            The project involved several key steps to set up the OpenVPN server on AWS:
            </p>
            <ul>
            <li>Set up a Windows 10 VM and converted it into a FLARE VM.</li>
                <li>Launching an EC2 Instance: I started by launching an EC2 instance on AWS. I chose an appropriate instance type and Amazon Machine Image (AMI) that supports OpenVPN installation.</li>
                <li>Configuring Security Groups: To allow VPN traffic, I configured the security groups associated with the EC2 instance. This involved opening the necessary ports for OpenVPN (typically UDP port 1194) and ensuring that only trusted IP addresses could access the server.</li>
                <li>Installing OpenVPN: Once the EC2 instance was up and running, I connected to it via SSH and installed OpenVPN. This involved updating the package repository and installing the OpenVPN package using the package manager.</li>
                <li>Configuring OpenVPN: After installation, I configured OpenVPN by generating the necessary encryption keys and certificates. I also set up the server configuration file to define the VPN parameters, such as the network range for VPN clients and the encryption settings.</li>
                <li>Starting the OpenVPN Service: With the configuration in place, I started the OpenVPN service and ensured it was running correctly. I also configured the service to start automatically on system boot.</li>
                <li>Client Configuration: To connect to the VPN, I generated client configuration files and distributed them to the users. These files included the necessary certificates and keys for secure authentication.</li>
            </ul>
            <h2>Steps Involved</h2>
            <ul>
                <li>Launch an EC2 Instance: Choose an appropriate instance type and AMI.
                <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='awsec2' />
                </div>
                </li>
                <li>Configure Security Groups: Open UDP port 1194 and restrict access to trusted IP addresses.</li>
                <li>Install OpenVPN: Update the package repository and install OpenVPN.</li>
                <div className='images'>
                    <img className='img' src={getImage('2.png')} alt='openvpnsetup' />
                    <img className='img' src={getImage('3.png')} alt='openvpn' />
                </div>
                <li>Configure OpenVPN: Generate encryption keys and certificates, and set up the server configuration file.</li>
                <div className='images'>
                    <img className='img' src={getImage('4.png')} alt='vpnmanage' />
                    <img className='img' src={getImage('5.png')} alt='vpndownload' />
                </div>
                <li>Start the OpenVPN Service: Start the service and configure it to start on boot.</li>
                <div className='images'>
                    <img className='img' src={getImage('6.png')} alt='vpn' />
                </div>
                <li>Client Configuration: Generate and distribute client configuration files.</li>
                <div className='images'>
                    <img className='img' src={getImage('7.png')} alt='test' />
                </div>

            </ul>
            <h2>Conclusion</h2>
            <p>
            Setting up a secure OpenVPN server on AWS provides a reliable and encrypted connection for remote access to internal network resources. This setup ensures that data transmitted over the internet is protected from potential eavesdroppers, maintaining privacy and security. By following the steps outlined in this project, you can create a robust VPN solution that meets your remote access needs.
            </p>
        </div>
    );
};

export default Awsvpn;