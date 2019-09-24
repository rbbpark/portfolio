import React, {Component} from 'react';
import './Home.css'

import Particles from 'react-particles-js';

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
                        <a href="https://www.linkedin.com/in/rbpark/"><i className="fab fa-linkedin-in"/></a>
                        <a href="#"><i className="far fa-file-pdf"/></a>
                    </div>
                </div>
                <Particles className='particleBg' params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "edge",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}/>
                <a className='downArrow' href="#project-section"><i className="fas fa-arrow-circle-down"/></a>
            </div>
        );
    }
}

export default Home;
