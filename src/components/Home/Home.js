import React, { Component } from 'react';
import './Home.css'
import profilePic from '../../res/profile.png'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className='navBar'>
                    <a href='#'>Projects</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                </div>

                <div className="homeContent">
                    <div className='profilePicWrapper'>
                        <img className='profilePic' alt='profilePic' src={profilePic}/>
                    </div>

                    <h1>Hi, I'm Robby Park.</h1>

                    <div className='socialLinks'>
                        <a href="#"><i className="far fa-envelope"/></a>
                        <a href="#"><i className="fab fa-github"/></a>
                        <a href="#"><i className="fab fa-linkedin-in"/></a>
                        <a href="#"><i className="far fa-file-pdf"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
