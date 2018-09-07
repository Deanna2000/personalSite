import '../../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import Home from '../homePage/index'
import './App.css';
import About from '../Dashboard/About/About'
import Projects from '../Dashboard/Projects/Projects'


// Sets up the main view and the routing to main app urls
class App extends React.Component {
  render() {
    return (
	<ParallaxProvider>
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
        </div>
        </Router>
      </div>
	  </ParallaxProvider>
    );
  }
}

export default App;
