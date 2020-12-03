import './footer.css';
import { useEffect, useState } from 'react';

function Footer() {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.footer');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 200 - window.innerHeight < 0 && !view) setView(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', isInViewPort);
    });
    return (
        <footer className="footer">
            <div className="container">
                <div className="foot-cont flex">
                    <h1 className={view ? 'elementFadeup' : 'zero-opac'}>Thankyou for scrolling so far!</h1>
                    <p  className={view ? 'elementFadeup-1' : 'zero-opac'}>What next?</p>
                    <h2  className={view ? 'elementFadeup-2' : 'zero-opac'}>Let's get in touch.</h2>
                    <button  className={`default-btn ${view ? 'elementFadeup-2' : 'zero-opac'}`}> Say Hello!</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;