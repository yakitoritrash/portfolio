import React from "react";
import "./Page2.css";
import resumephoto from "../src/assets/images/photo.jpg";


const Page2 = () => {
    return(
        <div className="pagemainsection">
            <div className="photo">
            <img src = {resumephoto} alt = "Photo" className='resumephoto' />
            </div>
            <div className="aboutme">
            <h1 className="photo-title">ABOUT ME</h1>
            <p className="about-description">Currently, I am a student at VIT Bhopal, India. Pursuing an integrated masters in Cybersecurity. Whilst, I have an interest for what I am studying, I have a passion for designing and development and have previously freelanced as a graphic and ui/ux designer.</p>
            <div className="callme">
                <p className="whiteme">Want to work together?</p>
                <a href="contact" className="orangeme">Drop me a line.</a>
            </div>
            </div>
        </div>
    );
}

export default Page2;