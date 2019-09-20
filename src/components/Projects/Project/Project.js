import React, {Component} from 'react';
import './Project.css'
import projectImg from '../../../res/project_placeholder.jpg'

class Project extends Component {

    // renders a working link
    // disables link if empty string
    renderGitUrl(url) {
        if(url.length === 0) {  // empty string
            return <a className="linkDisabled"><i className="fab fa-github disabledLink"/></a>;
        } else {
            return <a href={url}><i className="fab fa-github"/></a>;
        }
    }

    // renders a working link
    // disables link if empty string
    renderDemoUrl(url) {
        if(url.length === 0) {  // empty string
            return <a className="linkDisabled"><i className="fas fa-external-link-alt"/></a>
        } else {
            return <a href={url}><i className="fas fa-external-link-alt"/></a>
        }
    }

    renderTech(items) {
        if(items) {
            return (
                <ul>
                    {items.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="Project">
                <img alt='projectImg' src={projectImg}/>
                <div className='projectContent'>
                    <h2>{this.props.title}</h2>
                    {this.renderTech(this.props.tech)}
                    <p>{this.props.desc}</p>
                        <div className='projectLinks'>
                            {this.renderDemoUrl(this.props.demoUrl)}
                            {this.renderGitUrl(this.props.gitUrl)}
                        </div>
                </div>
            </div>
        );
    }
}

export default Project;
