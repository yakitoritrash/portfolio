import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/kumablog', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const Uptimekumablog = () => {
    return (
        <div className="blog-container">
            <h1>Setting Up Uptime Kuma on Linode.</h1>
            <h2>Summary</h2>
            <p>
            In this project, I set up an Uptime Kuma server on a Linode instance to monitor the uptime and performance of several websites. Additionally, I configured the server to send notifications to a Discord channel, ensuring that I receive real-time alerts about any downtime or performance issues. This setup helps in maintaining the reliability and availability of the monitored websites.
            </p>           
            <h2>Project Details</h2>
            <p>
            Uptime Kuma is a self-hosted monitoring tool that allows you to track the uptime and performance of your websites and services. By hosting Uptime Kuma on a Linode server, I can leverage its capabilities to monitor multiple websites and receive notifications via Discord using a webhook. This setup is particularly useful for ensuring the reliability and availability of critical web services.            </p>   
            <h2>Steps Involved</h2>
            <ul>
                <li>Set up a Linode Server.</li>
                <div className='images'>
                    <img className='img' src={getImage('1.png')} alt='linode_homepage' />
                    <img className='img' src={getImage('2.png')} alt='brewing' />
                    <img className='img' src={getImage('3.png')} alt='lish-console' />
                </div>
                <li>Configure Uptime Kuma</li>
                <div className='images'>
                    <img className='img' src={getImage('4.png')} alt='kuma_homescreen' />
                    <img className='img' src={getImage('5.png')} alt='kumapage' />
                    <img className='img' src={getImage('6.png')} alt='luma-setup' />
                    <img className='img' src={getImage('7.png')} alt='added-monitor' />
                </div>
                <li>Set Up Discord Notifications</li>
                <div className='images'>
                   <img className='img' src={getImage('8.png')} alt='discord-webhook' />
                   <img className='img' src={getImage('9.png')} alt='test' />
                   <img className='img' src={getImage('10.png')} alt='tes_notification' />
                </div>
            </ul>
            <h2>Conclusion</h2>
            <p>
            By setting up Uptime Kuma on a Linode server and connecting it to my Discord channel via a webhook, I created a powerful monitoring system that keeps me informed about the uptime and performance of my websites. This setup enhances my productivity and ensures I never miss critical updates, regardless of where I am.</p>
        </div>
    );
};

export default Uptimekumablog;