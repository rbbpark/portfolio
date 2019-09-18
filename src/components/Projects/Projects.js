import React, { Component } from 'react';
import './Projects.css'
import Project from './Project/Project'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h1>Projects</h1>
                <div className='projectsWrapper'>
                    {this.renderProject('Movie Recommender', 'A movie recommender.', '', '')}
                    {this.renderProject('InstaClone', 'An Instagram clone built with Android and Firebase.', '', '')}
                    {this.renderProject('Simple Weather', 'A multi-screen weather Android app.', '', '')}

                    {this.renderProject('Placeholder', 'A multi-screen weather Android app.', '', '')}
                    {this.renderProject('Placeholder', 'A multi-screen weather Android app.', '', '')}
                    {this.renderProject('Placeholder', 'A multi-screen weather Android app.', '', '')}

                </div>
            </div>
        );
    }

    renderProject(title, desc, demoUrl, gitUrl) {
        let props = {
            title: title,
            desc: desc,
            demoUrl: demoUrl,
            gitUrl: gitUrl
        };
        return (
            <Project {...props}/>
        )
    }
}

export default Projects;
