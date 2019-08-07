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
          <Card.Img variant="top" src={require("../images/Avatars/Andy.png")} />
          <Card.Body>
            <Card.Title>Andy</Card.Title>
            <Card.Text>
              This page is about the team that created the
      site and is an area to provide credits and a way for the team to sign its work.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/arun.png")} />
          <Card.Body>
            <Card.Title>Arun</Card.Title>
            <Card.Text>
              This page is about the team that created the
site and is an area to provide credits and a way for the team to sign its work.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/BenAvatar.png")} />
          <Card.Body>
            <Card.Title>Ben</Card.Title>
            <Card.Text>
              This page is about the team that created the
      site and is an area to provide credits and a way for the team to sign its work.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
      </CardGroup>



      <CardGroup style={{ margin: 25 }}>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/Carl.png")} />
          <Card.Body>
            <Card.Title>Carl</Card.Title>
            <Card.Text>
              This page is about the team that created the
              site and is an area to provide credits and a way for the team to sign its work.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/DaleAvatar.png")} />
          <Card.Body>
            <Card.Title>Dale</Card.Title>
            <Card.Text>
              This page is about the team that created the
              site and is an area to provide credits and a way for the team to sign its work.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../images/Avatars/IanAvatar.png")} />
          <Card.Body>
            <Card.Title>Ian</Card.Title>
            <Card.Text>
              This page is about the team that created the
              site and is an area to provide credits and a way for the team to sign its work.
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Twitter handle o Email address o Blog, company website, etc.</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Card style={{ margin: 25 }}>
        <Card.Body>
          <Card.Title>What to find out more?</Card.Title>
          <Card.Text>
            Thank you for taking your time to look at our cinema website. To find out more, get in touch.
    </Card.Text>
          <Button type="submit" onClick={this.handleContact} variant="primary">Contact Us</Button>
        </Card.Body>
      </Card>
    </div>
    )
  }
}
export default About;