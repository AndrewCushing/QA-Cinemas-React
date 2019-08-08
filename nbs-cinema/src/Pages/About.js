import React, { Component } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AboutJumbotron} from "../component/AboutJumbotron";

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  };

  handleContact = (event) => {

    this.props.history.push("/Contact");
  };

  render() {
    return (<div>
        <AboutJumbotron/>
      <CardGroup style={{ margin: 25 }}>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/Andy.png")} alt="Andy 'Back End' 'GitMaster' 'Integrator' Cushing" />
          <Card.Body>
            <Card.Title>Andy 'Back End' 'GitMaster' 'Integrator' Cushing</Card.Title>
            <Card.Text>
    I built the vast majority of the back end, the booking system and much of the functionality in the front end which involves calling the back end.
        I didn’t do any of the styling as I’m allergic to CSS and bootstrap.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/arun.png")} alt= "Ahrooran 'Mr React'" />
          <Card.Body>
            <Card.Title>Arun 'Mr React'</Card.Title>
            <Card.Text>
    The majority of work I did was the front-end, building multiple pages, as well as focusing on building the payments journey.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/BenAvatar.png")}  alt="Ben 'The Front-Ender' Tinson"/>
          <Card.Body>
            <Card.Title>Ben 'The Front-Ender' Tinson</Card.Title>
            <Card.Text>
    Specialises in Design, colouring, gradients and popping buttons. Also partial to a caiprinha on a hot day.
      </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup style={{ margin: 25 }}>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/Carl.png")} alt="Carl 'I will make it responsive' Stuart" />
          <Card.Body>
            <Card.Title>Carl 'I will make it responsive' Stuart</Card.Title>
            <Card.Text>
    From the start I made it my mission to ensure the website was responsive and in working condition, even if did mean kissing goodbye to sleeping before midnight each day. Next mission, to go cold turkey on double espressos!
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/DaleAvatar.png")} alt="Dale 'Mr Selenium' Thompson-Cox" />
          <Card.Body>
            <Card.Title>Dale 'Mr Selenium' Thompson-Cox</Card.Title>
            <Card.Text>
    Worked on the design of the site through Balsamiq and automated testing using Selenium. Supported "Back End" by working on the Initialiser (provision of data). Mostly just asked "GitMaster" for help though.
      </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/IanAvatar.png")} alt="Ian 'Scrum Master' Armstrong"/>
          <Card.Body>
            <Card.Title>Ian 'Scrum Master' Armstrong</Card.Title>
            <Card.Text>
    As the senior member of the team, I took charge of the standups and subsequently the became the Scrum Master.
        I have acted as a guide in the Agile process based on my working experience.
        I set in place the front end frame work and this has informed the build.
        I looked at every aspect of the journey and made contributions in each area. Ensured the team regularly met to discuss issues and designs.
        Took on each challenge - and there were many - and saw these opportunities to their natural conclusion.
      </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Card style={{ margin: 25 }}>
        <Card.Body>
          <Card.Title>What to find out more?</Card.Title>
          <Card.Text>
            Thank you for taking your time to look at our cinema website. To find out more, get in touch.
    </Card.Text>
          <Button type="submit" onClick={this.handleContact} variant="primary" id={"ContactSub_btn"}>Contact Us</Button>
        </Card.Body>
      </Card>
    </div>
    )
  }
}
export default About;