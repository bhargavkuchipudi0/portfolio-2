import { useState } from 'react';
import './experience.css';
import SectionHeading from '../section-heading/sectionheading';
import content from '../../content';

function Experience() {
    const experience = content.experience;
    const [button, toggleButton] = useState('Walmart');
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.experience');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 150 - window.innerHeight < 0 && !view) setView(true);
    }
    window.addEventListener('scroll', isInViewPort);
    return (
        <section className="experience">
            <div className="container sm-container">
                <div className="exp-cont">
                    <div className={`flex ${view ? 'elementFadeup' : 'zero-opac'}`}>
                        <SectionHeading heading="Experience" text="Where I've worked" />
                    </div>
                    <div className={`exp-bot flex ${view ? 'elementFadeup-1' : 'zero-opac'}`}>
                        <div className="exp-list flex">
                            <ul>
                                {
                                    experience.map((expObj, index) => (
                                        <li key={index}>
                                            <button className={`exp-btn ${button === expObj.companyName ? "button-active" : null}`} onClick={() => { toggleButton(expObj.companyName) }}>{expObj.companyName}</button>
                                        </li> 
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="exp-cont-main">
                        {
                            experience.map((expObj, index) => (
                                <div className={button === expObj.companyName ? "exp-cont-sec" : "display-none"} key={index}>
                                    <p className="exp-head">{expObj.designation} &emsp;<span className="green">{`@ ${expObj.companyFullName}`}</span></p>
                                    <p className="exp-cont-date">{expObj.duration}</p>
                                    <ul className="exp-cont-list">
                                        {
                                            expObj.duties.map((duty, dutyIndex) => (
                                                <li key={`d${dutyIndex}`}>
                                                    <p>
                                                        {duty}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;