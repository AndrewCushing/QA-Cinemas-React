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

componentDidMount() {
    document.getElementById("check").style.display = 'none';
    
}

  handlenameChange = e => {
    this.setState({ name: e.target.value }, () => console.log('name:', this.state.name));
    document.getElementById("check").style.display = '';
    if(e.target.value == ""){
      document.getElementById("check").style.display = 'none';
    }
    localStorage.setItem("name", this.state.name);
  };

    handleHome = event => {

        this.props.history.push("/p_confirm");
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };
    render() {
      
        return (<>
       
        <div>
                           <br/>
                <Jumbotron>
  <h1>Payment </h1>
  <p>
    To book your tickets please enter your <b><em>full name </em></b>below:
  </p>
  <p>Total: £{fromurl}</p>
  <p>
  <h2>
  {this.props.receipt_url}
  </h2>
  <div>
<br/>
  <Form.Control id="inputt" type="text" placeholder="Enter full name" value={this.props.name} required minlength="6" maxlength="50" onChange={this.handlenameChange}
        aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      />
  <br />
     
  <div id = "check">
            <Checkout
            name={"Luna Cinemas"}
            description={"Movie Booking"}
            image={"https://static.tumblr.com/nljhkjv/z0Jlpk23i/logo"}
            amount={1}
          />
          </div>
          </div>
  </p>
</Jumbotron>
    </div>
               
            </>
        )
    }
}

let pathArray = window.location.pathname.split('/');
let fromurl = parseFloat(pathArray[2]);


let key = 'cost';
localStorage.setItem(key, (fromurl)*100);

export default Payment;

