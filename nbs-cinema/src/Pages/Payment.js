import React, { Component } from "react";
import Checkout from "./Checkout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import receipt_url from "./Checkout";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import style from "./paymentsstyle.css";


// let total = 0;
// var cos = document.createElement("cost");
// var number=document.getElementById("cost").value;  

// function myFunction(total) {
//   return <Greetings total = "10000"/>;
// }

// let cost = "1000";







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
  <h1>Payment</h1>
  <p>
    To book your tickets please enter your <b><em>full name </em></b>below:
  </p>
  <p id = "cost">1000</p>
  <p>{this.props.test}</p>
  <p>
  <h2>
  {this.props.receipt_url}
  </h2>
  <div>
<br/>
  <Form.Control id = "inputt" type="text" placeholder="Enter full name" value={this.props.name} required minlength="6" maxlength="50" onChange={this.handlenameChange}
        aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      />
  <br />
     
  <div id = "check">
            <Checkout
            name={"Luna Cinemas"}
            description={"Ordered Reservation"}
            image={"https://static.tumblr.com/nljhkjv/z0Jlpk23i/logo"}
            amount={1}
          />
          </div>
          </div>
  </p>
</Jumbotron>
<br/>          

    <div id="namee">
    
    {/* <h2> Name: {this.state.name } </h2> */}
    <br/>
    
        
    </div>
                </div>
            </>
        )
    }
}


  // function create(props) {
  //       const total = document.getElementById('cost').innerHTML;
  //       // cost = total.value;

      
  //   }






      let key = 'cost';
      localStorage.setItem(key, 2000);




  
export default Payment