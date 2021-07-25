import './work.css';
import SectionHeading from '../section-heading/sectionheading';
import Gig from '../gig/gig';
import { useState } from 'react';
import content from '../../content';

function Work() {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.work');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <section className="work">
            <div className="container sm-container">
                <div className="work-top">
                    <div className={`work-head flex ${view ? 'elementFadeup': 'zero-opac'}`}>
                        <SectionHeading heading="My Work" text="Some things I've built"/>
                    </div>
                    <div className="work-cont">
                        {
                            content.mywork.map((work, index) => {
                                return <Gig key={index} work={work}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;