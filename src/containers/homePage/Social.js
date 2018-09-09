import React, { Component } from 'react';
import instaicon from '../../components/IMAGES/instagramicon.png';
import twicon from '../../components/IMAGES/twittericon.png';
import pinteresticon from '../../components/IMAGES/pinteresticon.png';
import linkicon from '../../components/IMAGES/linkedinicon.png';
import ghicon from '../../components/IMAGES/githubicon.png';
import './Home.css';


class Social extends Component {
  render() {

    return (

		<div className="social">

			<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/deanna2000"><img className="socialicon" alt="twicon" src={twicon} /></a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/deannavickers/"><img className="socialicon" alt="pinteresticon" src={pinteresticon} /></a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deannavickers/"><img className="socialicon" alt="liicon" src={linkicon} /></a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/deannaz000/"><img className="socialicon" alt="instaicon" src={instaicon} /></a>
			<a target="_blank" rel="noopener noreferrer" href="https://www.github.com/deanna2000/"><img className="socialicon" alt="ghicon" src={ghicon} /></a>

	  </div>
    );
  }
}

export default Social;