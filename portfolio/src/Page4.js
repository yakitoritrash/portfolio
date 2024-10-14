import React from "react";
import emailjs from 'emailjs-com';
import './Page4.css';
import Footer from "./Footer";

const Page4 = () => {
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
                        <h1 className="Heading">Let's Connect.</h1>
                        <p className="subtitle">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                    </div>
                    <div className="BottomLeft">
                        <div className="up">
                            <h2 className="SubHeading">E-mail</h2>
                            <p className="subtitle">kushagra.finn@gmail.com</p>
                        </div>
                        <div className="down">
                            <h2 className="SubHeading">Socials</h2>
                            <p className="subtitle">I am open to any leads and contacts</p>
                        </div>
                    </div>
                </div>
                <div className="RightPage">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
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