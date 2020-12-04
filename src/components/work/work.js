import './work.css';
import SectionHeading from '../section-heading/sectionheading';
import Gig from '../gig/gig';
import { useState } from 'react';

function Work() {
    const mywork = [
        {
            index: 0,
            heading: 'COVID-19 Automation script for live update',
            text: 'A simple python automation script for COVID-19 that scraps few sites for the data and triggers an email to the list of people signed up for.',
            tools: ['python', 'Automation', 'AWS']
        },
        {
            index: 1,
            heading: 'Using AI for More Accurate COVID-19 Forecasting',
            text: 'Used different Machine learning models to predict the forecast of COVID-19 in United States. I have used Linear Regression, Support Vector Machines(SVM), and Bayesian Ridge Regression for the forecast.',
            tools: ['python', 'Machine Learning']
        },
        {
            index: 2,
            heading: 'Personal Website - Vesion 1',
            text: 'A Static HTML page to showcase my skills and expertise. Built with pure HTML, CSS, Canvas, & JavaScript. I have used the power of PWA and built this web app work offline.',
            tools: ['HTML', 'CSS', 'Javascript', 'PWA']
        },
        {
            index: 3,
            heading: 'Personal Website - Vesion 2',
            text: 'My first portfolio website. Designed and developed using Figma and React. ',
            tools: ['HTML', 'CSS', 'React', 'Figma']
        }
    ]
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.work');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 200 - window.innerHeight < 0 && !view) setView(true);
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
                            mywork.map((work, index) => {
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