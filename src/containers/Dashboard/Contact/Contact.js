import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);

        // Set initial values for form fields and event listeners
        this.state = {
            fName: '',
            lName: '',
            email: '',
            comment: '',
			onClick: false,
			date: '',
        }
    };


    // Submit a comment
    submitComment = (evt) => {
        evt.preventDefault();
        if (this.state.email.length > 0) {
            fetch("http://localhost:5001/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.comment, date: ''})
            })

		alert("Thanks for your message. I'll get back to you soon!")
		this.handleSubmit()

		} else {
            alert("Please fill in all the fields to send a comment to me.")
        }
    }


	// Functions for event listeners
	handleSubmit(evt){
		this.setState({fName: ''})
		this.setState({lName: ''})
		this.setState({email: ''})
		this.setState({comment: ''})
		}

    handleFirstNameChange = (evt) => {
		this.setState({ fName: evt.target.value })
    }

    handleLastNameChange = (evt) => {
		this.setState({ lName: evt.target.value })
	}

	handleEmailChange = (evt) => {
		this.setState({ email: evt.target.value })
	}

	handleCommentChange = (evt) => {
		this.setState({ comment: evt.target.value })
	}

    // Comment Form
    render() {

        return (

            <div className="contactView">
                <form onSubmit={this.handleSubmit} ref="form" className="contactForm">
                    <div className="contactFields">
                        <div className="contactFieldsWrapper">
						<h1>Get in Touch!</h1>
							<input className="contactInputField" type="fName" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder="First Name" />
							<input className="contactInputField" type="lName" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder="Last Name" />
                            <input className="contactInputField" type="email" id="email" value={this.state.email || ''} onChange={this.handleEmailChange} placeholder="Email" />
                            <input className="contactInputField" type="comment" id="comment" value={this.state.comment || ''} onChange={this.handleCommentChange} placeholder="Comment" />
                        <button className="submit" type="submit" value="Submit" onClick={this.submitComment}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



export default Contact;
