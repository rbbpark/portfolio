import React, {Component} from 'react';
import './About.css'
import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component {
    render() {
        return (
            <div className="About">

                <ScrollableAnchor id={'about-section'}>
                    <a className='floatingAnchor'/>
                </ScrollableAnchor>

                <div className='aboutSection'>
                    <h2>About Me</h2>
                    <div className='aboutText'>
                        <p>
                            Hi, I'm Robby Park. I'm a recent college grad majoring in Computer Science from UC Davis.
                        </p>

                        <p>
                            I'm passionate about building cool products that make people's lives easier. Based in San Jose, I am currently working at an internship at BlackBerry developing secure mobile apps.
                        </p>

                        <p>
                             I'm eager to learn as much as I can about developing high quality, scalable
                            software. Outside of work, I like to spend my time exploring the Bay Area, gaming, and <a href='artwork'>drawing.</a>
                        </p>
                    </div>
                </div>

                <div className='skillsSection'>
                    <h2>Skills</h2>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript (ES6+)</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Bootstrap</li>
                        <li>Android</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>Linux</li>
                        <li>Jira</li>
                        <li>Jenkins</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default About;
