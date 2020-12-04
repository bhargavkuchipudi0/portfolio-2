import './work.css';
import SectionHeading from '../section-heading/sectionheading';
import Gig from '../gig/gig';
import { useState } from 'react';

function Work() {
    const mywork = [
        {
            index: 0,
            heading: 'Adversarial machine learning for spam filters',
            text: 'Using natural language processing (NLP) and Baysian model as an example, we developed and tested three invasive techniques, i.e., synonym replacement, ham word injection and spam word spacing. ',
            tools: ['Python', 'Machine Learning', 'Latex', 'ARES Conference', 'ACM Proceedings'],
            link: 'https://dl.acm.org/doi/abs/10.1145/3407023.3407079',
            type: 'publication'
        },
        {
            index: 1,
            heading: 'Personal Website - Vesion 1',
            text: 'A Static HTML page to showcase my skills and expertise. Built with pure HTML, CSS, Canvas, & JavaScript. I have used the power of PWA and built this web app work offline.',
            tools: ['HTML', 'CSS', 'Javascript', 'PWA'],
            link: 'https://github.com/bhargavkuchipudi0/portfolio-0286',
            type: 'personal'
        },
        {
            index: 2,
            heading: 'Personal Website - Vesion 2',
            text: 'My first portfolio website. Designed and developed using Figma and React. ',
            tools: ['React', 'HTML', 'CSS', 'Figma'],
            link: 'https://github.com/bhargavkuchipudi0/portfolio-2',
            type: 'personal'
        },
        {
            index: 3,
            heading: 'Fast News Now',
            text: 'This is a front end application built with React JS using Newsapi.org developer api. I have integrated the filter module to search betweeen different categories and sources (CNN, BBC NEws, ESPN, The Hindu, etc..,).',
            tools: ['React', 'Newsapi', 'HTML', 'CSS'],
            link: 'https://github.com/bhargavkuchipudi0/fastnewsnow',
            type: 'personal'
        },
        {
            index: 4,
            heading: 'COVID-19 Automation script for live update',
            text: 'A simple python automation script for COVID-19 that scraps few sites for the data and triggers an email to the list of people signed up for.',
            tools: ['Python', 'Automation', 'AWS'],
            link: 'https://github.com/bhargavkuchipudi0/COVID-19-automation-script',
            type: 'personal'
        },
        {
            index: 5,
            heading: 'Using AI for More Accurate COVID-19 Forecasting',
            text: 'Used different Machine learning models to predict the forecast of COVID-19 in United States. I have used Linear Regression, Support Vector Machines(SVM), and Bayesian Ridge Regression for the forecast.',
            tools: ['Python', 'Machine Learning'],
            link: 'https://www.linkedin.com/posts/bhargav-kuchipudi-389036b6_machineabrlearning-predictiveanalytics-stayhomesaveslives-activity-6656622775802925056-hS9c',
            type: 'personal'
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