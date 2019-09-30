import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Projects.css'
import Project from './Project/Project'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <ScrollableAnchor id={'project-section'}>
                    <h1>Projects</h1>
                </ScrollableAnchor>
                <div className='projectsWrapper'>
                    {this.renderProject(
                        'Movie Recommender',
                        'A machine learning movie recommender system deployed as a web app with JS and Node.',
                        'http://www.robbypark.com/movies',
                        'https://github.com/robbypark/movie_recommender',
                        ['JavaScript', 'Node', 'Python', 'Machine Learning'],
                    )}

                    {this.renderProject(
                        'InstaClone',
                        'An Instagram clone built with Android and Firebase.',
                        '',
                        'https://github.com/robbypark/InstaClone',
                        ['Java', 'Android', 'Firebase'],
                        'pic_instaclone.png'
                    )}

                    {this.renderProject(
                        'Simple Weather',
                        'A multi-screen weather Android app.',
                        '',
                        'https://github.com/robbypark/SimpleWeather2',
                        ['Java', 'Android', 'Location Services', 'Weather API'],
                        'pic_weather.png'
                    )}

                    {this.renderProject(
                        'Idle Idea',
                        'An idea tracking app. Deployed to the Google Play Store.',
                        '',
                        'https://github.com/robbypark/IdleIdea',
                        ['Java', 'Android', 'SQLite', 'MVP', 'Play Store'],
                        'pic_idle.png'
                    )}

                    {this.renderProject(
                        'Warcraft 2 Map Editor',
                        'A Software Engineering course project built by eight students. Closed source, but here is the manual. Was fun to make!',
                        '',
                        '',
                        ['Java', 'Swing', 'File I/O', 'Restful API'],
                        'pic_wc2.png'
                    )}

                </div>
            </div>
        );
    }

    renderProject(title, desc, demoUrl, gitUrl, tech, imgSrc = 'placeholder.png') {
        let props = {
            title: title,
            desc: desc,
            demoUrl: demoUrl,
            gitUrl: gitUrl,
            tech: tech,
            imgSrc: imgSrc,
        };
        return (
            <Project {...props}/>
        )
    }
}

export default Projects;
