import { useEffect, useState } from 'react';
import './experience.css';
import SectionHeading from '../section-heading/sectionheading';

function Experience() {
    const [button, toggleButton] = useState('cmu');
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.experience');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 200 - window.innerHeight < 0 && !view) setView(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', isInViewPort);
    });
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
                                <li><button className={button === 'cmu' ? "button-active" : null} onClick={() => { toggleButton('cmu') }}>CMU</button></li>
                                <li><button className={button === 'techolution' ? "button-active" : null} onClick={() => { toggleButton('techolution') }}>Techolution</button></li>
                                <li><button className={button === 'asteriisc' ? "button-active" : null} onClick={() => { toggleButton('asteriisc') }}>Asteriisc</button></li>
                            </ul>
                        </div>
                        <div className="exp-cont-main">
                            <div className={button === 'cmu' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Research Assistant <span className="green">@ Central Michigan University</span></p>
                                <p className="exp-cont-date">January 2020 - present</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Tasked to research on topics and issues as delegated by the Head of the Department of Computer Science.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developed a text-mining program to classify, clean and visualize large datasets.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Python, React, Node.js.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Working with Linux and high-performance computing.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={button === 'techolution' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Front End developer <span className="green">@ Techolution</span></p>
                                <p className="exp-cont-date">June 2018 - July 2019</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Designing and developing full-stack applications across multiple platforms using modern industryadopted languages and frameworks.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developing cross-browser and multi-browser compatible web pages AngularJS and NodeJS.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developing REST architecture-based web services to facilitate communication between client and
                                            servers by writing application-level code to interact with APIs.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Involving in intense User Interface (UI) operations and client-side validations.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={button === 'asteriisc' ? "exp-cont-sec" : "display-none"}>
                                <p className="exp-head">Web developer <span className="green">@ Asteriisc Technologies</span></p>
                                <p className="exp-cont-date">November 2017 - May 2018</p>
                                <ul className="exp-cont-list">
                                    <li>
                                        <p>
                                            Converting mock-ups into mobile first responsive web pages using HTML, CSS, JavaScript.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Developing REST architectures with HTTP standards, API best practices, web security, authentication,
                                            and building scalable solutions.
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness
                                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Creating the automation scripts using Python for testing various applications.
                                            </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;