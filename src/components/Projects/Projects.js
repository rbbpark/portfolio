import React, { Component } from 'react';
import './Projects.css'
import Project from './Project/Project'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h1>Projects</h1>
                <div className='projectsWrapper'>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                    <Project></Project>
                </div>
            </div>
        );
    }
}

export default Projects;
