import './Everydayphotoshop.css'

// import './MalwareBlog.css';
import React, { useEffect, useState } from 'react';

// Create a context for the images
const images = require.context('./assets/images/everydayphotoshop', false, /\.(png|jpe?g|svg)$/);

// Function to get the image by name
const getImage = (imageName) => {
    return images(`./${imageName}`);
};

const Everydayphotoshop = () => {
    const posterFiles = ['1.jpg', '2.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '6.jpg', '5.jpg', '3.jpg', '4.jpg', '11.jpg', '14.jpg', '13.jpg', '12.jpg'];
    const [activePoster, setActivePoster] = useState(null);

    const showPrevious = () => setActivePoster((current) => (current - 1 + posterFiles.length) % posterFiles.length);
    const showNext = () => setActivePoster((current) => (current + 1) % posterFiles.length);

    useEffect(() => {
        if (activePoster === null) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' || event.key.toLowerCase() === 'q') setActivePoster(null);
            if (event.key === 'ArrowLeft') setActivePoster((current) => (current - 1 + posterFiles.length) % posterFiles.length);
            if (event.key === 'ArrowRight') setActivePoster((current) => (current + 1) % posterFiles.length);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activePoster]);

    return (
    <section>
        <div className="blog-container">
            <h1>Everyday Photoshop.</h1>
            <h2>Summary</h2>
            <p>
            In this project, I challenged myself to design a new poster every day using Adobe Photoshop. Each poster was unique, exploring different themes, styles, and techniques. This daily practice helped me improve my design skills, experiment with various tools and effects in Photoshop, and build a diverse portfolio of creative work. The project not only enhanced my proficiency in Photoshop but also fostered creativity and consistency in my design process.            </p>
        </div>
        <div className='imagelist' aria-label="Poster gallery">
                {posterFiles.map((file, index) => (
                    <button
                        className="poster-item"
                        key={file}
                        type="button"
                        onClick={() => setActivePoster(index)}
                        aria-label={`Open poster ${index + 1} of ${posterFiles.length}`}
                    >
                        <img className='photoshopimages' src={getImage(file)} alt={`Poster ${index + 1}`} loading="lazy" />
                    </button>
                ))}
            </div>
        {activePoster !== null && (
            <div className="poster-viewer" role="presentation" onClick={() => setActivePoster(null)}>
                <div className="poster-viewer-panel" role="dialog" aria-modal="true" aria-label={`Poster ${activePoster + 1} of ${posterFiles.length}`} onClick={(event) => event.stopPropagation()}>
                    <div className="poster-viewer-bar">
                        <span>~/posters/{String(activePoster + 1).padStart(2, '0')}.jpg</span>
                        <button type="button" className="poster-control" onClick={() => setActivePoster(null)} aria-label="Close poster viewer">[ q ] close</button>
                    </div>
                    <img className="poster-viewer-image" src={getImage(posterFiles[activePoster])} alt={`Poster ${activePoster + 1}`} />
                    <div className="poster-viewer-nav">
                        <button type="button" className="poster-control" onClick={showPrevious}>[ ← ] prev</button>
                        <span>{String(activePoster + 1).padStart(2, '0')} / {String(posterFiles.length).padStart(2, '0')}</span>
                        <button type="button" className="poster-control" onClick={showNext}>next [ → ]</button>
                    </div>
                </div>
            </div>
        )}
    </section>
    );
};

export default Everydayphotoshop;
