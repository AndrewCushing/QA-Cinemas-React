import React, { Component } from "react";
import Checkout from "./Checkout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import receipt_url from "./Checkout";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import style from "../styles/paymentsstyle.css";


class Payment extends React.Component{
  state = {
    
    name: ""

  };
    
    handleHome = (event) => {

        this.props.history.push("/home");
    };

    render() {
        
        return (<>
        
        <div>
        
                           <br/>
                <Jumbotron>
  <h2>Confirmation of Payment</h2>
  <p>
    Thank you for your business.
  </p>
  <Button onClick={this.handleHome} variant="outline-success">
            Go Home
          </Button>
</Jumbotron>
  
</div>
            </>
        )
    }
}

export default Payment