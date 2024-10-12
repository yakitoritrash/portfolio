import './Everydayphotoshop.css'

// import './MalwareBlog.css';
import React from 'react';

// Create a context for the images
const images = require.context('./assets/images/everydayphotoshop', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const Everydayphotoshop = () => {
    return (
    <section>
        <div className="blog-container">
            <h1>Everyday Photoshop.</h1>
            <h2>Summary</h2>
            <p>
            In this project, I challenged myself to design a new poster every day using Adobe Photoshop. Each poster was unique, exploring different themes, styles, and techniques. This daily practice helped me improve my design skills, experiment with various tools and effects in Photoshop, and build a diverse portfolio of creative work. The project not only enhanced my proficiency in Photoshop but also fostered creativity and consistency in my design process.            </p>
        </div>
        <div className='imagelist'>
                <img className='photoshopimages' src={getImage('1.jpg')} alt='antivirus-off' />
                <img className='photoshopimages'src={getImage('2.jpg')} alt='antivirus-disable' />
                <img className='photoshopimages'src={getImage('7.jpg')} alt='firewall-off' />
                <img className='photoshopimages' src={getImage('8.jpg')} alt='windefender' />
                <img className='photoshopimages' src={getImage('9.jpg')} alt='script' />
                <img className='photoshopimages' src={getImage('10.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('6.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('5.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('3.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('4.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('11.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('14.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('13.jpg')} alt='process' />
                <img className='photoshopimages' src={getImage('12.jpg')} alt='process' />
            </div>
    </section>
    );
};

export default Everydayphotoshop;