import React, { Component } from 'react';
import MapContainer from './MapContainer';


class GettingThere extends Component {

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
        return (
                <MapContainer/>
        )
    }
}

export default GettingThere