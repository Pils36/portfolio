import React, { useState } from 'react';
import myCv from '../assets/cv/latest_cv.pdf';
function About() {
    const developmentYear = 2018;
    const professionalYear = 2019;
    const newYear = new Date().getFullYear();

    // eslint-disable-next-line
    const [proYear, setProYear] = useState(newYear - professionalYear);

    // eslint-disable-next-line
    const [devYear, setDevYear] = useState(newYear - developmentYear);
    return (
        <div className="ds-about-section">
            <div className="container">
                <section>
                    <h2 className="ds-heading">About Me</h2>
                    <p>I am a versatile and goal driven back-end web developer with over {devYear} years of work experience in the software development industry and about {proYear} years of professional work experience with Back-end Languages like Nodejs, Expressjs, PHP, Laravel, MongoDB. Having developed up to 10 enterprise applications housing the back-end to App store, Play store and web with thousands of users. I write robust object oriented code with clean architecture, implement restful APIs, native APIs and Libraries. I have the ability to understand and creatively interpret user’s stories for an optimized application, I am flexible, creative and with an innovative and team-oriented mindset.</p>
                    <div className="ds-button-sec text-center">
                        <a href={myCv} className="ds-button" target="_blank" rel="noreferrer">Download Resume</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;