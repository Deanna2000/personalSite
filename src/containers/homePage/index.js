import React, { Component } from 'react';
import './Home.css';
import NavBar from '../Dashboard/NavBar/NavBar';
import Title from '../Dashboard/Title/Title';
import About from '../Dashboard/About/About';
import Projects from '../Dashboard/Projects/Projects';
import Experience from '../Dashboard/Experience/Experience';
import Contact from '../Dashboard/Contact/Contact';
import Social from './Social'
import CarouselWidget from './CarouselWidget'

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
			{/* <Contact /> */}
        </div>
        <div className="footer">
		<div className="connectWithMe">
			<p>@2018 Deanna Vickers</p>
			<p>Connect with me</p>
         	<Social />
			</div>
			 <div className="carouselFooter">
			<CarouselWidget />
			</div>
		</div>
      </div>
    );
  }
}

export default Home;