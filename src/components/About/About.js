import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className='aboutSection'>
                    <h2>About</h2>
                    <div className='aboutText'>
                        <p>
                            Hi, I'm Robby Park! I am a recent college grad majoring in Computer Science from UC Davis.
                        </p>

                        <p>
                            I'm passionate about building cool products that make people's lives easier.
                            Based in San Jose, I am currently working at an internship at BlackBerry developing Android and
                            iOS apps.
                        </p>

                        <p>
                            I'm interested in learning as much as I can about developing high quality, scalable
                            software. Outside of work, I like to spend my time exploring the Bay Area, gaming, and drawing.
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
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Bootstrap</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>Linux</li>
                        <li>Jira</li>
                        <li>Jenkins</li>
                        <li>Android</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
