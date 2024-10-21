import { useEffect } from 'react';
import './Footer.css';

const Footer = () => {

    const letters = "abcdefghijklmnopqrstuvwxyz";
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


            if (iterations >= 50) clearInterval(interval);
                
                
            iterations += 1 / 3;    
        }, 20);

    };

    useEffect(() => {
        const heading = document.querySelector(".footertext");
        if (heading) {
            heading.dataset.value = heading.innerText;
            heading.onmouseover = handleMouseOver;
        }

        return () => {
            if (heading) {
                heading.onmouseover = null;
            }
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className='footertext' data-value= "kushagra. All rights reserved.">&copy; {new Date().getFullYear()} kushagra. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;