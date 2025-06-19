import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
//  const images = require.context('./assets/images/malwareblog', false, /\.(png|jpe?g|svg)$/);
//
//  // Function to get the image by name
//  const getImage = (imageName) => {
//      return images(`./${imageName}`);
//  };

const Activedirectoryblog = () => {
    return (
        <div className="blog-container">
            <h1>Setting Up Active Directory Domain Services with Windows Server 2019 in a Virtualized Environment.</h1>
            <h2>Summary</h2>
            <p>
            In this blog, I set up a Windows Server 2019 Domain Controller (DC) and a Windows 10 client within a virtualized environment. Using VirtualBox and VMware, I created an internal network with Active Directory Domain Services (AD DS), DHCP, and RAS/NAT to simulate a real-world environment. This project demonstrates how to configure a small, self-contained network for testing or educational purposes.
            </p>
            <h2>Project Details</h2>
            <p>
            The primary goal was to set up a domain network where the Windows Server 2019 machine acts as the Domain Controller, DNS server, and DHCP server. Additionally, I used a Windows 10 client, which connects to the DC for network services.
            </p>
            <h2>Steps Involved</h2>
            <ul>
                <li className='list'>Install Active Directory Domain Services (AD DS): On the Windows Server 2019 machine, I installed the AD DS role to configure the server as a Domain Controller. The domain name used for this project was mydomain.com.
                </li>
                {/* <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('2.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('3.png')} alt='firewall-off' />
                    <img className='img' src={getImage('4.png')} alt='windefender' />
                    <img className='img' src={getImage('5.png')} alt='script' />
                    <img className='img' src={getImage('6.png')} alt='process' />
                    <img className='img' src={getImage('13.png')} alt='flare-vm' />
                </div> */}
                <li>Next, I set up the DHCP role on the DC to assign IP addresses within the range 172.16.0.100 to 172.16.0.200 to clients on the internal network.

The DHCP scope was configured with the default gateway as 172.16.0.1 (the DC).
DNS server set to 172.16.0.1.
</li>
                {/* <div className='images'>
                   <img className='img' src={getImage('7.png')} alt='remnux' />
                </div> */}

                <li>To allow internet access for the internal network, I configured Routing and Remote Access (RAS) with Network Address Translation (NAT) on the DC:

External NIC: Connected to the home router, providing internet access to the DC.
Internal NIC: Connected to the internal network with NAT enabled, allowing client machines to access the internet through the DC.</li>
                {/* <div className='images'>
                   <img className='img' src={getImage('8.png')} alt='adapter' />
                   <img className='img' src={getImage('9.png')} alt='DHCP' />
                </div> */}
                {/* <li>Configured the REMnux VM as the DNS server for the FLARE VM.</li>
                <div className='images'>
                    <img className='img' src={getImage('10.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('11.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('12.png')} alt='firewall-off' />
                    <img className='img' src={getImage('14.png')} alt='windefender' />
                    <img className='img' src={getImage('15.png')} alt='script' />
                    <img className='img' src={getImage('16.png')} alt='process' />
                </div>
                <li>Tested the setup to ensure that the FLARE VM could only communicate with the REMnux VM.</li> */}
            </ul>
            <h2>Final Testing</h2>
            <ul>
                <li className='list'>Install Active Directory Domain Services (AD DS): On the Windows Server 2019 machine, I installed the AD DS role to configure the server as a Domain Controller. The domain name used for this project was mydomain.com.
                </li>
                {/* <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('2.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('3.png')} alt='firewall-off' />
                    <img className='img' src={getImage('4.png')} alt='windefender' />
                    <img className='img' src={getImage('5.png')} alt='script' />
                    <img className='img' src={getImage('6.png')} alt='process' />
                    <img className='img' src={getImage('13.png')} alt='flare-vm' />
                </div> */}
                <li>Joining the Domain: After configuring the DC, I logged into the Windows 10 client, changed the DNS settings to point to the DC (172.16.0.1), and successfully joined the mydomain.com domain.
</li>
                {/* <div className='images'>
                   <img className='img' src={getImage('7.png')} alt='remnux' />
                </div> */}

                <li>DHCP Functionality: I confirmed that the Windows 10 client obtained an IP address from the DHCP server on the DC. It was assigned an IP within the scope range, and the default gateway and DNS server settings were also correct.

</li>
<li>Internet Access: Despite being on an internal network, the client machine was able to access the internet through the DC using NAT.



</li>
                {/* <div className='images'>
                   <img className='img' src={getImage('8.png')} alt='adapter' />
                   <img className='img' src={getImage('9.png')} alt='DHCP' />
                </div> */}
                {/* <li>Configured the REMnux VM as the DNS server for the FLARE VM.</li>
                <div className='images'>
                    <img className='img' src={getImage('10.png')} alt='antivirus-off' />
                    <img className='img' src={getImage('11.png')} alt='antivirus-disable' />
                    <img className='img' src={getImage('12.png')} alt='firewall-off' />
                    <img className='img' src={getImage('14.png')} alt='windefender' />
                    <img className='img' src={getImage('15.png')} alt='script' />
                    <img className='img' src={getImage('16.png')} alt='process' />
                </div>
                <li>Tested the setup to ensure that the FLARE VM could only communicate with the REMnux VM.</li> */}
            </ul>
            <h2>Conclusion</h2>
            <p>
            This project provided a hands-on experience in configuring a domain network using Windows Server 2019 and Windows 10 in a virtual environment. The setup included key technologies like AD DS, DHCP, DNS, and NAT, which are critical in managing enterprise-level networks. This environment serves as a foundational platform for learning and testing network configurations in an isolated and controlled manner.

</p>
        </div>
    );
};

export default Activedirectoryblog;
