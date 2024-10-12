// import './Everydayphotoshop.css'


import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/malwareblog', false, /\.(png|jpe?g|svg)$/);

// // Function to get the image by name
// const getImage = (imageName) => {
//     return images(`./${imageName}`);
// };

const Everydayphotoshop = () => {
    return (
        <div className="blog-container">
            <h1>Malware Analysis Lab with Isolated Virtual Network Setup.</h1>
            <h2>Summary</h2>
            <p>
                In this project, I created a secure malware analysis environment by setting up two virtual machines (VMs): a Windows 10 VM that I converted into FLARE VM and a REMnux VM. The two VMs were isolated from external networks, only allowing communication between them via a custom virtual network configuration. The REMnux VM was configured as the DNS server for the FLARE VM. This setup enabled safe and controlled malware analysis by ensuring that the malware within the FLARE VM couldn't communicate with anything beyond the isolated virtual network.
            </p>
            {/* <h2>Project Details</h2>
            <p>
                The primary goal of this project was to create a controlled environment for analyzing malware without risking the security of the external network. By isolating the VMs, I ensured that any malicious activity would be contained within the virtual network.
            </p>
            <h2>Steps Involved</h2>
            <ul>
                <li className='list'>Set up a Windows 10 VM and converted it into a FLARE VM.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('2.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('3.png')} alt='firewall-off' />
                    <img className='img' src={getImage('4.png')} alt='windefender' />
                    <img className='img' src={getImage('5.png')} alt='script' />
                    <img className='img' src={getImage('6.png')} alt='process' />
                    <img className='img' src={getImage('13.png')} alt='flare-vm' />
                </div>
                <li>Set up a REMnux VM for malware analysis tools.</li>
                <div className='images'>
                   <img className='img' src={getImage('7.png')} alt='remnux' />
                </div>

                <li>Configured a custom virtual network to isolate the VMs from external networks.</li>
                <div className='images'>
                   <img className='img' src={getImage('8.png')} alt='adapter' />
                   <img className='img' src={getImage('9.png')} alt='DHCP' />
                </div>
                <li>Configured the REMnux VM as the DNS server for the FLARE VM.</li>
                <div className='images'>
                    <img className='img' src={getImage('10.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('11.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('12.png')} alt='firewall-off' />
                    <img className='img' src={getImage('14.png')} alt='windefender' />
                    <img className='img' src={getImage('15.png')} alt='script' />
                    <img className='img' src={getImage('16.png')} alt='process' />
                </div>
                <li>Tested the setup to ensure that the FLARE VM could only communicate with the REMnux VM.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>
                This setup provides a safe and controlled environment for malware analysis, allowing for in-depth examination of malicious software without the risk of it spreading to other systems. The isolated virtual network ensures that any communication attempts by the malware are contained within the lab environment.
            </p> */}
        </div>
    );
};

export default Everydayphotoshop;