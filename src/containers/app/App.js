import '../../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import Home from '../homePage/index'
import './App.css';
import About from '../Dashboard/About/DisplayAboutView'
import MyCollection from '../Dashboard/Items/DisplayItems'


// Sets up the main view and the routing to main app urls
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/mycollection" component={MyCollection}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
