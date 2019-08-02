import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactComponent.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };


    handleHome = event => {

        this.props.history.push('/home');
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };

    /*handleEmail = event => {
        this.props.history.push('/email');
    }
*/
    render() {
        return (<div>

                <h1>Contact</h1>
                    <div className="ContactAdd">
                        <h4> Address </h4>
                        <h6> Alexandra House </h6>
                        <h6> Whittingham Dr </h6>
                        <h6> Wroughton</h6>
                        <h6> Swindon </h6>
                        <h6> SN4 0QJ </h6>
                    </div>
                <br/>
                <div className="EmailAdd">

                    <h4>Email </h4>
                    <Link to={"/email"}>
                    <button className={'emailButton'}>Email Luna Cinemas</button>
                    </Link>


                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Contact