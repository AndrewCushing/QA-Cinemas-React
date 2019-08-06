import React, { Component } from 'react';
import {ContactJumbotron} from "../component/ContactJumbotron";
import { ScrumJumbotron } from "../component/ScrumJumbotron";
class Scrum extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (<div>
                <ScrumJumbotron/>

            </div>
        )
    }
}

export default Scrum