import React, {Component} from 'react';
import './App.css';
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <Projects/>
                <About/>
                <Contact/>

                <div className='footer'>
                    <p>Made with React</p>
                </div>
            </div>
        );
    }
}

export default App;
