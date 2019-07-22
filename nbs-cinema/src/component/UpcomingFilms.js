import React, { Component } from 'react';

class UpcomingFilms extends Component {

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

    render() {
        return (<>
                <h1>New Releases</h1>
                <p>Films that have not been released yet</p>

                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
            </>
        )
    }
}

export default UpcomingFilms