import React, { Component } from 'react';
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
        return (<>
            <h1>Contact Us</h1>
            <div className="EmailAdd">
                <h3> Address </h3>
                <h5> Alexandra House </h5>
                <h5> Whittingham Dr </h5>
                <h5> Wroughton</h5>
                <h5> Swindon </h5>
                <h5> SN4 0QJ </h5>
            </div>
            <br/>
            <div className="EmailAdd">
                <h3>Email </h3>
                 <button className="emailButton" id="emailButton" type="submit"
                        onClick={this.handleEmailSubmit}>Email Luna Cinemas</button>
            </div>
            </>
        )
    }
}

export default Contact