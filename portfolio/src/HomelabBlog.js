import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/homelab', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const HomeLabBlog = () => {
    return (
        <div className="blog-container">
            <h1>Setting Up a HomeLab with Ubuntu Server and Cloudflare Zero Trust.</h1>
            <h2>Summary</h2>
            <p>
                In this project, I repurposed an old laptop to create a HomeLab running Ubuntu Server with multiple services like Samba network storage, Jellyfin, Uptime Kuma, and Vaultwarden. Using Cloudflare Zero Trust, I integrated these services with my personal domain for secure remote access.
            </p>
            <h2>Project Details</h2>
            <p>
                The primary goal of this project was to create a versatile and accessible HomeLab environment that could be accessed remotely and securely. By leveraging Cloudflare Zero Trust, I ensured that the services running on the HomeLab could be accessed from anywhere, even when not on the local network.
            </p>
            <h2>Steps Involved</h2>
            <ul>
                <li className='list'>Set up Ubuntu Server on an old laptop.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('ubuntu-server.png')} alt='ubuntu-server' />
                </div>
                <li>Installed and configured Samba for network storage.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('samba.png')} alt='samba' />
                </div>
                <li>Set up Jellyfin for media streaming.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('jellyfin.png')} alt='jellyfin' />
                </div>
                <li>Deployed Uptime Kuma for monitoring service uptime.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('uptime-kuma.png')} alt='uptime-kuma' />
                </div>
                <li>Configured Vaultwarden for secure password management.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('vaultwarden.png')} alt='vaultwarden' />
                </div>
                <li>Integrated all services with Cloudflare Zero Trust for secure remote access.
                </li>
                <div className='images'>
                    <img className='img' src={getImage('cloudflare-zero-trust.png')} alt='cloudflare-zero-trust' />
                </div>
            </ul>
            <h2>Conclusion</h2>
            <p>
                This HomeLab setup provides a robust and secure environment for running various services, accessible from anywhere via Cloudflare Zero Trust. It demonstrates the versatility of using an old laptop to create a powerful and accessible HomeLab.
            </p>
        </div>
    );
};

export default HomeLabBlog;