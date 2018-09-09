// import React, { Component } from 'react';
// import './Contact.css';


// class Contact extends Component {
// 	constructor(props) {
//         super(props);

//         // Set initial values for form fields and event listeners
//         this.state = {
//             fName: '',
//             lName: '',
//             email: '',
//             comment: '',
// 			onClick: false,
// 			date: '',
//         }
//     };



//     // Submit a comment
//     submitComment = (evt) => {
//         evt.preventDefault();
//         if (this.state.email.length > 0) {
//             fetch("http://localhost:5001/comments", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.comment, date: ''})
//             })

// 		// Verify the form was saved and present success message

// 		} else {
//             alert("Please fill in all the fields to send a comment to me.")
//         }
//     }


// 	// Functions for event listeners
//     handleFirstNameChange = (evt) => {
// 		this.setState({ fName: evt.target.value })
//     }

//     handleLastNameChange = (evt) => {
// 		this.setState({ lName: evt.target.value })
// 	}

// 	handleEmailChange = (evt) => {
// 		this.setState({ email: evt.target.value })
// 	}

// 	handleCommentChange = (evt) => {
// 		this.setState({ comment: evt.target.value })
// 	}

//     // Login and Registration forms
//     render() {

//         if (this.state.shouldDashboardBeDisplayed) {
//             return <Redirect to='/mycollection' />
//         }
//         return (

//             <div className="loginView">
//                 <form className="loginForm">
//                     <div className="loginFields">
//                         <div className="loginFieldsWrapper">
//                             <input className="loginInputField" type="email" id="email" value={this.state.email || ''} onChange={this.handleEmailChange} placeholder="Email" />
//                             <input className="loginInputField" type="password" id="password" value={this.state.password || ''} onChange={this.handlePasswordChange} placeholder="Password" />
//                         </div>
//                         <button className="signIn" value="Sign In" onClick={this.validateForm}>Sign In</button>
//                     </div>
//                     <div className="registerFields">
//                         <div className="registerFieldsWrapper">
//                             <input type="text" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder="First Name" />
//                             <input type="text" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder="Last Name" />
//                         </div>
//                         <button className="signUp" value="Sign Up" onClick={this.addUser}>Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }



// export default LoginRegisterUser;

// render() {

// 	return (

// 		<div className="contactSectionContainer">
// 		<div className="contactText">
// 		<h1>Get in Touch!</h1>
// 		</div>
// 		</div>
// 	);
// }
// }


// export default Contact;
