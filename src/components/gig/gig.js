import './gig.css';
import CubeSolid from '../../assets/cube-solid';
import Github from '../../assets/github';
import { useState } from 'react';

function Gig({ work }) {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector(`#gig-${work.index}`);
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <article id={`gig-${work.index}`} className={`gig ${view ? `elementFadeup${work.index%3 !== 0 ? '-' + work.index : ''}` : 'zero-opac'}`}>
            <div className="gig-top">
                <div className="gig-links">
                    <CubeSolid />
                    <div className="pointer"><Github width="20px"/></div>
                </div>
                <div className="gig-content">
                    <h1 className="gig-heading">
                        {work.heading}
                    </h1>
                    <p className="gig-text">
                        {work.text}
                    </p>
                </div>
            </div>
            <div className="gig-tech">
                {work.tools.map((tool, index) => {
                    return <p key={index}>{tool}</p>
                })}
            </div>
        </article>
    );
}

export default Gig;