import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import show from "react-bootstrap/Alert";
import setShow from "react-bootstrap/Alert";
import useState from "react-bootstrap/Alert";
import Jumbotron from "react-bootstrap/Jumbotron";

function AlertDismissible() {
    const [show, setShow] = useState(true);
}

class notfound extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleHome = (event) => {
        this.props.history.push("/home");
    };

    render() {
        return (<>
                <div>
                    <Jumbotron>
                        <h1>Opps!  Something went wrong...</h1>
                        <h3 style={{color:"black"}}>
                            Page not found. See the console for technical details.
                        </h3>
                        <br/>
                        <br/>
                        <div className="d-flex justify-content-center">
                            <Button onClick={this.handleHome} variant="outline-danger">
                                Go Home
                            </Button>
                        </div>
                        <img src={ ("/compass-3_2.gif") } height="330" width="450" crop="fill" />
                    </Jumbotron>
                    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                </div>
            </>
        );
    }
}
export default notfound;