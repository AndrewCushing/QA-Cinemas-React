import React, { Component } from 'react';
import './ContactComponent.css';

class EMail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };


    handleHome = event => {

        this.props.history.push('/Contact');
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };

    render() {
        return (<>
                <h1>Email</h1>

                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Return</button>

                </div>
            </>
        )
    }
}

export default EMail