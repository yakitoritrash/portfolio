import './MalwareBlog.css';
import React from 'react';

const Awsvpn = () => {
    return (
        <div className="blog-container">
            <h1>Setting Up a Secure OpenVPN Server on AWS.</h1>
            <h2>Summary</h2>
            <p>
                In this project, I created a secure malware analysis environment by setting up two virtual machines (VMs): a Windows 10 VM that I converted into FLARE VM and a REMnux VM. The two VMs were isolated from external networks, only allowing communication between them via a custom virtual network configuration. The REMnux VM was configured as the DNS server for the FLARE VM. This setup enabled safe and controlled malware analysis by ensuring that the malware within the FLARE VM couldn't communicate with anything beyond the isolated virtual network.
            </p>
            <h2>Project Details</h2>
            <p>
                The primary goal of this project was to create a controlled environment for analyzing malware without risking the security of the external network. By isolating the VMs, I ensured that any malicious activity would be contained within the virtual network.
            </p>
            <h2>Steps Involved</h2>
            <ul>
                <li>Set up a Windows 10 VM and converted it into a FLARE VM.</li>
                <li>Set up a REMnux VM for malware analysis tools.</li>
                <li>Configured a custom virtual network to isolate the VMs from external networks.</li>
                <li>Configured the REMnux VM as the DNS server for the FLARE VM.</li>
                <li>Tested the setup to ensure that the FLARE VM could only communicate with the REMnux VM.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>
                This setup provides a safe and controlled environment for malware analysis, allowing for in-depth examination of malicious software without the risk of it spreading to other systems. The isolated virtual network ensures that any communication attempts by the malware are contained within the lab environment.
            </p>
        </div>
    );
};

export default Awsvpn;