import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setFadeOut(true);
                    setTimeout(() => {
                        if (onComplete) {
                            onComplete();
                        }
                    }, 500); // Match this duration with the CSS transition duration
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 30); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-text">{progress}%</div>
        </div>
    );
};

export default Loading;