import React, {Component} from 'react';
import './Contact.css';
import ScrollableAnchor from "react-scrollable-anchor";

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className='contactContent'>
                    <ScrollableAnchor id={'contact-section'}>
                        <h1>Get In Touch</h1>
                    </ScrollableAnchor>
                    <p>
                        I'm currently available for opportunities in developer roles in the Bay Area. Please leave a message, and thanks for checking out my site!
                    </p>
                    <a href='#'>Contact</a>
                </div>
            </div>
        );
    }
}

export default Contact;
