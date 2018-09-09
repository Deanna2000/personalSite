import React, { Component } from 'react';
import "./About.css";
import fun1 from '../../../components/IMAGES/funstuff1.png'
import fun2 from '../../../components/IMAGES/funstuff2.png'
import fun3 from '../../../components/IMAGES/funstuff3.png'



class FunStuffDetail extends Component {

	render() {
		return (
			<div >
			<div className="funStuffModal">
				<img className="funStuffToDo" alt="Doing Fun Stuff" src={ fun1 }/>
				<img className="funStuffIMake" alt="Making Stuff" src={ fun2 }/>
				<img className="funStuffIMake" alt="Making More Fun Stuff" src={ fun3 }/>

				<h3>Fun Stuff!</h3>
				<p>During my free time I tend to focus on things that challenge me mentally and physically. I have a penchant for DIY projects and I also love to cook, bake, sing and spend a lot of time outside hiking or biking.
				<br/>
				Follow my <a className="linkcolor" href="https://www.instagram.com/deannaz000/">instagram account</a> to see more about my adventuring and creating. </p>
				</div>
			</div>
		);
	}
}

export default FunStuffDetail;