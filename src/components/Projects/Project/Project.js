import React, {Component} from 'react';
import './Project.css'
import projectImg from '../../../res/project_placeholder.jpg'

class Project extends Component {
    render() {
        return (
            <div className="Project">
                <img alt='projectImg' src={projectImg}/>
                <div className='projectContent'>
                    <h2>Product Title</h2>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                    </p>
                        <div className='projectLinks'>
                            <a href="#"><i className="fas fa-external-link-alt"/></a>
                            <a href="#"><i className="fab fa-github"/></a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Project;
