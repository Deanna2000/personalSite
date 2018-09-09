import React, { Component } from 'react';
import './Home.css';
import NavBar from '../Dashboard/NavBar/NavBar';
import Title from '../Dashboard/Title/Title';
import About from '../Dashboard/About/About';
import Projects from '../Dashboard/Projects/Projects';
import Experience from '../Dashboard/Experience/Experience';
import Social from './Social'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
			<NavBar />
        </div>
        <section className="titleSection" id="titleSection">
			<Title />
        </section>
        <section className="aboutSection" id="aboutSection">
			<About />
        </section>
        <section className="projectsSection" id="projectsSection">
			<Projects />
        </section>
		<div className="experienceSection" id="experienceSection">
			<Experience />
        </div>
		<div className="contactSection" id="contactSection">
        </div>
        <div className="footer">
			<p>@2018 Deanna Vickers</p>
			<p>Connect with me</p>
         	<Social />
		</div>
      </div>
    );
  }
}

export default Home;