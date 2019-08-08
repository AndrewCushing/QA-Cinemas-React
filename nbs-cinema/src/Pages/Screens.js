import React, { Component } from "react";
import {ScreenJumbotron} from "../component/ScreenJumbotron";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import '../styles/style.css';

class Screens extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };
    handleStandard = (event) => {

        this.props.history.push("/standardscreen");
    };
    handleDuluxe = (event) => {

        this.props.history.push("/deluxescreen");
    };
    render() {
        var divStyle = {
            padding: "20px",
            margin: "0px"
        };
        return (<div>
                <ScreenJumbotron/>
                <br/>
                <Media>
                    <img src={ ("/standardscreenimage.jpg") } alt="standdardscreen" style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
                    <Media.Body>
                        <br/>
                        <h2>Standard Screens</h2>

                        <p className={"ScreenDesc"} id="myP">
                            The sights and sounds, the hushed conversation, the great anticipation.
                            Then, it’s just about you and the screen. Bathed in bright lights,
                            sitting in utter darkness, feeling as though you could reach out
                            and be part of the action. And it’s not over when the lights come up.
                            Great experiences linger with you; they become part of who you are and
                            it’s this escape from daily life that keeps us coming back for more… and more.
                        </p>
                        <p>
                            <Button className={"ScreenSelector"} variant="primary" onClick={this.handleStandard}>Standard Screens</Button>
                        </p>
                    </Media.Body>
                </Media>
                <br/>
                <Media>
                    <img src={ ("/deluxescreenimage.jpg") } alt="deluxescreen" style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
                    <Media.Body>
                        <br/>
                        <h2>Deluxe Screens</h2>

                        <p className={"ScreenDesc"}>
                            We believe the best entertainment deserves the best quality picture.
                            That’s why the majority of our screens are equipped with Sony 4K digital projectors,
                            giving you a viewing experience that’s so super sharp you’ll feel like it’s you
                            fighting the bad guys, not Bond. With four times the resolution of HD home TVs and
                            more than four times detail than regular cinema projectors, it means brighter colours,
                            more contrast and a picture that’s always crystal clear, no matter where you sit.
                        </p>
                        <p>
                            <Button className={"ScreenSelector"} variant="primary" onClick={this.handleDuluxe}>Deluxe Screens</Button>
                        </p>
                    </Media.Body>
                </Media>
                <br/>
                <br/>
                <br/>
            </div>

        )
    }
}

export default Screens