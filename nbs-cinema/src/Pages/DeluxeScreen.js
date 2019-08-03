import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";


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
    Here we have infromation about the Deluxe screen. Also we have Standard screens, click below to find out more.
  </p>
  <p>
    <Button variant="primary" onClick={this.handleStandard}>Standard Screens</Button>
  </p>
</Jumbotron>
<br/>
<Media>
  <img src={ require("../images/deluxescreen.png") } style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
  <Media.Body>
  <br/>
    <h5>This is cinema like you’ve never experienced before</h5>
    
    <p id="myP">
    Every seat on every row in our Luna cinemas has been expertly designed so you can relax and recline during your film. With less seats and more personal space, you"ll have a more immersive experience with every visit.  

Now every seat is the best in the house, it’s time to experience films the way they were meant to be seen. With pitch-perfect Dolby Atmos sound and flawless 4K projection, the film becomes breathtakingly real.
    </p>
    
  </Media.Body>
</Media>
<br/>
<Media>
  <img src={ require("../images/deluxescreenimage.jpg") } style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
  <Media.Body>
  <br/>
    <h5>Premium Comfort</h5>
    
    <p>
    Every seat on every row in your cinema has been expertly designed so you can relax and recline during your film. With luxury reclining seats that have at least three times more leg room than standard seats, what more could you want?

Every seat also features its own personal table, so you can graze or feast with new snacks and treats in comfort, allowing you to truly immerse yourself in the moment and escape into film.
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