import React, {Component} from 'react';
import './Project.css'

class Project extends Component {

    render() {
        return (
            <div className="Project">
                <img alt='projectImg' src={require('../../../res/' + this.props.imgSrc)}/>
                <div className='projectContent'>
                    <h2>{this.props.title}</h2>
                    {this.renderTech(this.props.tech)}
                    {this.renderDesc(this.props.desc)}
                        <div className='projectLinks'>
                            {this.renderDemoUrl(this.props.demoUrl)}
                            {this.renderGitUrl(this.props.gitUrl)}
                        </div>
                </div>
            </div>
        );
    }

    // small hack to get url working for one project
    renderDesc(desc) {
        if(desc.includes('manual')){
            let arr = desc.split('manual');
            return (
                <p>
                    {arr[0]}
                    <a href='files/ecs160manual.pdf'>
                    {'manual'}
                    </a>
                    {arr[1]}
                </p>
            )
        }
        return (
            <p>
                {desc}
            </p>
        )
    }

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

    // input must be an array
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
}

export default Project;
