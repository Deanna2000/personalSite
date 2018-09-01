import React, { Component } from 'react';
// import LoginRegisterUser from './register_login/LoginRegisterUser.js'
import './Home.css';
import fbicon from '../../components/IMAGES/facebookicon.png';
import twicon from '../../components/IMAGES/twittericon.png';
import pinteresticon from '../../components/IMAGES/pinteresticon.png';
import linkicon from '../../components/IMAGES/linkedinicon.png';
import NavBar from '../Dashboard/NavBar/NavBar';
import Title from '../Dashboard/Title/Title';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
			<NavBar />
        </div>
        <div className="titleSection">
			<Title />
        </div>
        <div className="secondSection">
        </div>
        <div className="thirdSection">
        </div>
		<div className="fourthSection">
        </div>
		<div className="fifthSection">
        </div>
        <div className="footer">
          <p>@2018 Borrow App  </p>
          <p>Follow us on social media</p>
          <img className="socialicon" alt="fbicon" src={fbicon} />
          <img className="socialicon" alt="twicon" src={twicon} />
          <img className="socialicon" alt="pinteresticon" src={pinteresticon} />
          <img className="socialicon" alt="liicon" src={linkicon} />
        </div>
      </div>
    );
  }
}

export default Home;