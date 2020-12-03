import './about.css';
import MyImage from '../../assets/my-image.png';
import SectionHeading from '../section-heading/sectionheading';
import { useEffect, useState } from 'react';

function About() {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.about');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 200 - window.innerHeight < 0 && !view) setView(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', isInViewPort);
    });
    return (
        <section className="about">
            <div className="container">
                <div className="about-cont">
                    <div className={`flex ${view ? 'elementFadeup' : 'zero-opac'}`}>
                        <SectionHeading heading="About Me" text="Hard work doesn't bother me. I actually like it."/>
                    </div>
                    <div className="about-sec">
                        <div className={`about-right ${view ? 'elementFadeup' : 'zero-opac'}`}>
                            <p>
                                Hello! I’m Bhargav Kuchipudi, a full stack web developer based in Detroit, MI.
                            </p>
                            <p>
                                I am a graduate student persuing Masters in Computer Science <span className="green">@ Central Michigan University</span>, I combine my education with 3 years of experience as front-end web developer.
                            </p>
                            <p>
                                I love applying responsive design principle and watching my web pages shrink into mobile screens. It's oddly satisfying.
                            </p>
                            <p>
                                When I am not coding or pushing pixels, you'll find me in the gym, playing Badminton, or Vollyball.
                            </p>
                        </div>
                        <div className="about-left flex">
                            <div className="image-holder">
                                <img className={`my-image ${view ? 'elementFadeup-1' : 'zero-opac'}`} src={MyImage} alt="about me picutre"/>
                                <div className={view ? "square" : null}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;