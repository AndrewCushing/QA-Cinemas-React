import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import '../styles/style.css';


class DeluxeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    handleStandard = (event) => {

        this.props.history.push("/standardscreen");
    };

    render() {
        var divStyle = {
            padding: "20px",
            margin: "0px"
        };
        return (<>

                <div>
                    <br/>
                    <Jumbotron>
                        <h1>Deluxe Screen</h1>
                        <p>
                            Here we have information about the Deluxe screen. Also we have Standard screens, click below to find out more.
                        </p>
                        <p>
                            <Button className={"ScreenSelector"} variant="primary" onClick={this.handleStandard}>Standard Screens</Button>
                        </p>
                    </Jumbotron>
                    <br/>
                    <Media>
                        <img src={ ("/deluxescreen.png") } alt="deluxescreen" style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
                        <Media.Body>
                            <br/>
                            <h2>Never Before Experienced</h2>

                            <p className={"ScreenDesc"} id="myP">
                                Every seat on every row in our Luna cinemas has been expertly designed so
                                you can relax and recline during your film. With less seats and more
                                personal space, you"ll have a more immersive experience with every visit.
                                Now every seat is the best in the house, it’s time to experience films
                                way they were meant to be seen. With pitch-perfect Dolby Atmospheric sound
                                and flawless 4K projection, the film becomes breathtakingly real.
                            </p>

                        </Media.Body>
                    </Media>
                    <br/>
                    <Media>
                        <img src={ ("/deluxescreenimage.jpg") } alt="deluxescreen" style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
                        <Media.Body>
                            <br/>
                            <h2>Premium Comfort</h2>

                            <p className={"ScreenDesc"}>
                                Every seat on every row in your cinema has been expertly designed so you can
                                relax and recline during your film. With luxury reclining seats that have
                                at least three times more leg room than standard seats, what more could you want?

                                Every seat also features its own personal table, so you can graze or feast with new
                                snacks and treats in comfort, allowing you to truly immerse yourself in the moment
                                and escape into film.
                            </p>

                        </Media.Body>
                    </Media>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </>
        )
    }
}
export default DeluxeScreen;