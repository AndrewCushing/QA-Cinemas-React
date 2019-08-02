import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";

class StandardScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    };
    // scrollToBottom = () => {
    //     window.scrollTo(0,document.body.scrollHeight);
    //   }

    handleDuluxe = (event) => {

        this.props.history.push("/deluxescreen");
    };

    handleHome = (event) => {

        this.props.history.push("/home");
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
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
  <h1>Standard Screen</h1>
  <p>
    Here we have infromation about the Standard screen. Also we have Duluxe screens, click below to find out more.
  </p>
  <p>
    <Button variant="primary" onClick={this.handleDuluxe}>Deluxe Screens</Button>
  </p>
</Jumbotron>
<br/>
<Media>
  <img src={ require("../images/standardscreen.png") } style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
  <Media.Body>
      <br/>
    <h5>Amazing Experiences..</h5>
    
    <p id="myP">
    The sights and sounds, the hushed conversation, the great anticipation. Then, it’s just about you and the screen. Bathed in bright lights, sitting in utter darkness, feeling as though you could reach out and be part of the action. And it’s not over when the lights come up. Great experiences linger with you; they become part of who you are and it’s this escape from daily life that keeps us coming back for more… and more. 
    </p>
    
  </Media.Body>
</Media>
<br/>
<Media>
  <img src={ require("../images/standardscreenimage.jpg") } style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
  <Media.Body>
  <br/>
    <h5>Why our screens..</h5>
    
    <p>
    We believe the best entertainment deserves the best quality picture. That’s why the majority of our screens are equipped with Sony 4K digital projectors, giving you a viewing experience that’s so super sharp you’ll feel like it’s you fighting the bad guys, not Bond. With four times the resolution of HD home TVs and more than four times detail than regular cinema projectors, it means brighter colours, more contrast and a picture that’s always crystal clear, no matter where you sit.
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

export default StandardScreen;