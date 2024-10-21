import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 30); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-text">{progress}%</div>
        </div>
    );
};

export default Loading;