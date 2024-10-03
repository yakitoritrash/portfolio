import React from "react";
import "./Page2.css";
import resumephoto from "../src/assets/images/resumephoto1.jpg"


const Section2 = () => {
    return(
        <div className="pagemainsection">
            <div className="photo">
            <img src = {resumephoto} alt = "Photo" className='resumephoto' />
            </div>
            <div className="aboutme">
            <h1 className="photo-title">ABOUT ME</h1>
            <p className="hero-description">A freelancing front end developer & graphic and web</p>
            <p className="hero-description1">designer, with a love for designing. I am currently</p>
            <p className="hero-description1">open and working for clients.</p>
            </div>
        </div>
    );
}