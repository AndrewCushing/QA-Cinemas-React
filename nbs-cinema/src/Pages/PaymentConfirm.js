import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";


class Payment extends React.Component{
  state = {
    name: ""
  };
    handleHome = (event) => {

        this.props.history.push("/home");
    };
    render() {

      var userId = localStorage.getItem("name");
      
        return (<>
        <div>
                           <br/>
                <Jumbotron>
                
  <h2>Confirmation of Payment</h2>
  <br/>
  <h2>{`Thank you ${userId} for your business`}</h2>
  <br/>
  <Button onClick={this.handleHome} variant="outline-success">
            Go Home
          </Button>
</Jumbotron>
  
</div>
            </>
        )
    }
}

export default Payment;