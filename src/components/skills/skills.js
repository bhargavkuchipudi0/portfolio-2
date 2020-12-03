import './skills.css';
import SectionHeading from '../section-heading/sectionheading';
import { useEffect, useState } from 'react';

function Skills() {
    const [view, setView] = useState(false);
    function isInViewPort() {
        const ele = document.querySelector('.skills');
        const rect = ele.getBoundingClientRect();
        if (rect.y + 200 - window.innerHeight < 0 && !view) setView(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', isInViewPort);
    });
    return (
        <section className="skills">
            <div className="container sm-container">
                <div className="skills-cont">
                    <div className={`flex ${view ? 'elementFadeup' : 'zero-opac'}`}>
                        <SectionHeading heading="Skills" text="Few technologies I've been working with" />
                    </div>
                    <div className="skills-table-cont">
                        <p className={view ? 'elementFadeup-1' : 'zero-opac'}>
                            Here are few thechnologies, frameworks, and programming languages I’ve been working recently :
                        </p>
                        <div className={`skills-table flex ${view ? 'elementFadeup-2' : 'zero-opac'}`}>
                            <table className="table-cont">
                                <thead>
                                    <tr>
                                        <th>Languages</th>
                                        <th>Frameworks</th>
                                        <th>Tools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>Angular</td>
                                        <td>Bash/Shell</td>
                                    </tr>
                                    <tr>
                                        <td>Python</td>
                                        <td>React</td>
                                        <td>Git & Github</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>Vue</td>
                                        <td>Chrome DevTools</td>
                                    </tr>
                                    <tr>
                                        <td>CSS/Sass</td>
                                        <td>Node.js</td>
                                        <td>Postman</td>
                                    </tr>
                                    <tr>
                                        <td>SQL</td>
                                        <td>Bootstrap</td>
                                        <td>MongoDB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;