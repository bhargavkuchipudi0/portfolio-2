import './footer.css';
import { useState } from 'react';

function Footer() {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.footer');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    function getInTouch() {
        window.open('https://www.linkedin.com/in/bhargav-kuchipudi-389036b6/', '_blank');
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <footer className="footer">
            <div className="container">
                <div className="foot-cont flex">
                    <h1 className={view ? 'elementFadeup' : 'zero-opac'}>Thankyou for scrolling so far!</h1>
                    <p  className={view ? 'elementFadeup-1' : 'zero-opac'}>What next?</p>
                    <h2  className={view ? 'elementFadeup-2' : 'zero-opac'}>Let's get in touch.</h2>
                    <button  className={`default-btn ${view ? 'elementFadeup-2' : 'zero-opac'}`} onClick={() => {getInTouch()}}>Get in touch</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;