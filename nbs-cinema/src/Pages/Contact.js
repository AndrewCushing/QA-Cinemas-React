import React, { Component } from 'react';
import { ContactJumbotron } from "../component/ContactJumbotron";

import '../styles/ContactComponent.css';
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    handleEmailSubmit = event => {

        this.props.history.push('/email');
    };

    render() {
        return (<div>
                <ContactJumbotron/>
            <h1>Contact</h1>
            <div className="EmailAdd">
                <h4> Address </h4>
                <h6> Alexandra House </h6>
                <h6> Whittingham Dr </h6>
                <h6> Wroughton</h6>
                <h6> Swindon </h6>
                <h6> SN4 0QJ </h6>
            </div>
            <br/>
            <div className="EmailAdd">
                <h3>Email </h3>
                 <button className="emailButton" id="emailButton" type="submit"
                        onClick={this.handleEmailSubmit}>Email Luna Cinemas</button>
            </div>
            </div>
        )
    }
}

export default Contact