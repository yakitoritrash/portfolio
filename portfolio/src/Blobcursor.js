import React, { useEffect } from 'react';
import './Blobcursor.css';

const Blobcursor = () => {
    useEffect(() => {
        const blob = document.getElementById("blob");

        const handlePointerMove = (event) => {
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`,
            }, { duration: 3000, fill: 'forwards'});

        };

        document.addEventListener('pointermove', handlePointerMove);

        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <>
            <div id="blob"></div>
            <div id = "blur"></div>
        </>
    );

};

export default Blobcursor;