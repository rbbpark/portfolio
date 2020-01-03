import React, {Component} from 'react';
import './Home.css'

import Particles from 'react-particles-js';

import params from './particlesParams'
import profilePic from '../../res/profile.png'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className='navBar'>
                    <a href='#project-section'>Projects</a>
                    <a href='#about-section'>About</a>
                    <a href='#contact-section'>Contact</a>
                </div>

                <div className="homeContent">
                    <div className='profilePicWrapper'>
                        <img className='profilePic' alt='profilePic' src={profilePic}/>
                    </div>

                    <h1>Hi, I'm Robby Park 👋</h1>
                    <h2>I like to build things.</h2>

                    <div className='socialLinks'>
                        <a href="mailto:rbbpark@gmail.com"><i className="far fa-envelope"/></a>
                        <a href="https://github.com/robbypark"><i className="fab fa-github"/></a>
                        <a href="https://www.linkedin.com/in/robbypark/"><i className="fab fa-linkedin-in"/></a>
                        <a href="files/robby_park_resume.pdf"><i className="far fa-file-pdf"/></a>
                    </div>
                </div>
                <Particles className='particleBg' params={params}/>
                <a className='downArrow' href="#project-section"><i className="fas fa-arrow-circle-down"/></a>
            </div>
        );
    }
}

export default Home;
