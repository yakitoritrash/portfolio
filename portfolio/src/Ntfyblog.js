import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/ntfyblog', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const NtfyBlog = () => {
    return (
        <div className="blog-container">
            <h1>Setting up ntfy on Linode.</h1>
            <h2>Summary</h2>
            <p>
            In this project, I set up ntfy, a simple and powerful notification service, on a Linode server and connected it to my Android device. This setup allows me to receive real-time notifications from my terminal directly on my Android device, enhancing my workflow and ensuring I never miss important updates.</p>
            <h2>Project Details</h2>
            <p>
            ntfy is a lightweight notification service that supports various platforms, including Android. By hosting ntfy on a Linode server using Docker, I can leverage its capabilities to send notifications from my terminal to my Android device. This setup is particularly useful for monitoring long-running processes, receiving alerts, and staying updated on important events.</p>   
            <h2>Steps Involved</h2>
            <ul>
                <li>Set up a Linode Server.</li>
                <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='linode_homepage' />
                    <img className='img' src={getImage('2.png')} alt='brewing' />
                    <img className='img' src={getImage('3.png')} alt='lish-console' />
                    <img className='img' src={getImage('4.png')} alt='ssh-console' />
                </div>
                <li>Deploy ntfy Using Docker</li>
                <div className='images'>
                    <img className='img' src={getImage('5.png')} alt='docker-cmd' />
                </div>
                <li>Install ntfy App on Android:</li>
                <div className='images'>
                   <img className='img' src={getImage('6.jpg')} alt='app_ntfy' />
                   <img className='img' src={getImage('7.jpg')} alt='app_setup' />
                </div>
                <li>Send Notifications from Terminal</li>
                <div className='images'>
                    <img className='img' src={getImage('8.png')} alt='wassup-message' />
                    <img className='img' src={getImage('9.jpg')} alt='notificationpush' />
                    <img className='img' src={getImage('10.png')} alt='update-get' />
                    <img className='img' src={getImage('11.jpg')} alt='updatenotification' />
                </div>
            </ul>
            <h2>Conclusion</h2>
            <p>
            By setting up ntfy on a Linode server using Docker and connecting it to my Android device, I created a powerful notification system that keeps me informed about important events from my terminal. This setup enhances my productivity and ensures I never miss critical updates, regardless of where I am.</p>
        </div>
    );
};

export default NtfyBlog;