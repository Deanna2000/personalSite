import React, { Component } from 'react';
import './NavBar.css';
import { nav } from 'react-bootstrap';
import logo from '../../../components/IMAGES/deannalogolarge.png';


class NavBar extends Component {




  render() {


      return (

        <nav className="navbar navbar-default">
          <div className="container-fluid navContainer">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
			  <a href="/home">
              <img className="logo" alt="logo" src={logo} />
			  </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbarStyle">
                <li><a href="/about">About</a></li>
                <li ><a href="/projects">Projects </a></li>
                <li><a href="/experience" >Experience</a></li>
                <li><a href="/contact" >Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }


export default NavBar;