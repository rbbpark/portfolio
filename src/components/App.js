import React, {Component} from 'react';
import './App.css';
import { configureAnchors } from 'react-scrollable-anchor'

import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

// Offset all anchors by a fixed amount and scroll more quickly than the default 400ms
configureAnchors({offset: -60, scrollDuration: 400});

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <Projects/>
                <About/>
                <Contact/>

                <div className='footer'>
                    <p>Made by me with JS and React</p>
                </div>
            </div>
        );
    }
}

export default App;
