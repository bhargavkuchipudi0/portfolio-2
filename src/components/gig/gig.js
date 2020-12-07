import './gig.css';
import { CubeSolid, Link, GitHub } from '../../assets/svg';
import { useState } from 'react';

function Gig({ work }) {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector(`#gig-${work.index}`);
        const rect = ele.getBoundingClientRect();
        if (rect.y + 100 - window.innerHeight < 0 && !view) setView(true);
    }
    const openLink = function(link) {
        window.open(link, '_blank');
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <article id={`gig-${work.index}`} className={`gig ${view ? `elementFadeup${work.index % 3 !== 0 ? '-' + work.index%3 : ''}` : 'zero-opac'}`}>
            <div className="gig-top">
                <div className="gig-links">
                    <CubeSolid />
                    {
                        work.type === 'publication' ? (
                        <p className="publication">Publication</p>
                        ) : null
                    }
                    {
                        work.type === 'publication' ? (
                        <div className="pointer" onClick={() => {openLink(work.link)}}><Link width="20px" /></div>
                        ) : <div className="pointer" onClick={() => {openLink(work.link)}}><GitHub width="20px" /></div>
                    }
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