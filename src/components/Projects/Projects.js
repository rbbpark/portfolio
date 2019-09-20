import React, {Component} from 'react';
import './Projects.css'
import Project from './Project/Project'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h1>Projects</h1>
                <div className='projectsWrapper'>
                    {this.renderProject(
                        'Movie Recommender',
                        'A machine learning movie recommender system deployed as a web app with JS and Node.',
                        'http://www.robbypark.com/movies',
                        'https://github.com/robbypark/movie_recommender',
                        ['JavaScript', 'Node', 'Python', 'Machine Learning']
                    )}

                    {this.renderProject(
                        'InstaClone',
                        'An Instagram clone built with Android and Firebase.',
                        '',
                        'https://github.com/robbypark/InstaClone',
                        ['Java', 'Android', 'Firebase']
                    )}

                    {this.renderProject(
                        'Simple Weather',
                        'A multi-screen weather Android app.',
                        '',
                        'https://github.com/robbypark/SimpleWeather2',
                        ['Java', 'Android', 'Location Services', 'Weather API']
                    )}

                    {this.renderProject(
                        'PlaceHolder',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        '',
                        '',
                        ['Java', 'Android', 'Location Services', 'Weather API']
                    )}

                    {this.renderProject(
                        'PlaceHolder',
                        '',
                        '',
                        '',
                        ['Java', 'Android', 'Location Services', 'Weather API']
                    )}

                </div>
            </div>
        );
    }

    renderProject(title, desc, demoUrl, gitUrl, tech) {
        let props = {
            title: title,
            desc: desc,
            demoUrl: demoUrl,
            gitUrl: gitUrl,
            tech: tech,
        };
        return (
            <Project {...props}/>
        )
    }
}

export default Projects;
