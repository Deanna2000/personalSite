import '../../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import Home from '../homePage/index'
import './App.css';
import About from '../Dashboard/About/About'
import Projects from '../Dashboard/Projects/Projects'


// Sets up the main view and the routing to main app urls
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path= {process.env.PUBLIC_URL + "/"} component={Home}/>
            <Route path= {process.env.PUBLIC_URL + "/about"} component={About}/>
            <Route path= {process.env.PUBLIC_URL +"/projects"} component={Projects}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
