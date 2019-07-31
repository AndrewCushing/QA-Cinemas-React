import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import show from "react-bootstrap/Alert";
import setShow from "react-bootstrap/Alert";
import useState from "react-bootstrap/Alert";

function AlertDismissible() {
  const [show, setShow] = useState(true);
}

class notfound extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    handleHome = event => {

        this.props.history.push("/home");
    };

    render() {
        var divStyle = {
            padding: "20px",
            margin: "0px"
          };
        return (<>
    
                <div>
                <br/>
                <br/>
      <Alert show={show} variant="danger">
        <Alert.Heading>Opps! Something went wrong...</Alert.Heading>
        <p>
          Page not found. See the console for technical details.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={this.handleHome} variant="outline-danger">
            Go Home
          </Button>
        </div>
        
      </Alert>
            <img src={ require("../images/compass-3_2.gif") } style={divStyle} Transformation height="330" width="450" crop="fill" />
      


      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
</div>
            </>
        );
    }
}
export default notfound;