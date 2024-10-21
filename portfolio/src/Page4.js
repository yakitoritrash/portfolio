import React, { useEffect } from "react";
import emailjs from 'emailjs-com';
import './Page4.css';
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram } from "react-icons/fa";

const Page4 = () => {

    useEffect(() => {

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const handleMouseOver = (event) => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                }) 
                
                .join(""); 


                if (iterations >= 15 ) clearInterval(interval);
                    
                    
                iterations += 1 / 3;    
            }, 30);

        };

        const heading = document.querySelector(".Heading");
        if (heading) {
            heading.onmouseover = handleMouseOver;
        }

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
        };

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_2a2cpfh', 'template_vdde7ef', event.target, 'Vnf7MkENFzWYifli-')
            .then((result) => {
                console.log(result.text);
                alert('Message sent!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <section id = "Contact">
            <div className="Contact_Page">
                <div className="LeftPage">
                    <div className="TopLeft">
                        <h1 className="Heading" data-value= "Let's Connect.">Let's Connect.</h1>
                        <p className="subtitle">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                    </div>
                    <div className="BottomLeft">
                        <div className="up">
                            <h2 className="SubHeading">E-mail:</h2>
                            <p className="subtitle">kushagra.finn@gmail.com</p>
                        </div>
                        <div className="down">
                            <h2 className="SubHeading">Socials:</h2>
                                <div className="social-icons">
                                    <a href = "https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="icon" />
                                    </a>
                                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                                    </a> */}
                                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                                    </a> */}
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className="icon" />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="RightPage">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="from_name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="from_email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Page4;