import React, { Component } from 'react';
import { DiscussionJumbotron } from "../component/DiscussionJumbotron";
class Discussion extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (<div>
                <DiscussionJumbotron/>
            </div>
        )
    }
}

export default Discussion