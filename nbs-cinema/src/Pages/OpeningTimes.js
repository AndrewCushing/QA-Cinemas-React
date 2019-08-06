import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class OpeningTimes extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (<>
<br/>
               
  <h1>Opening Hours</h1>
 <hr />
<br/>
            <br/>
                <Table striped bordered hover variant="light">
  <thead>
    <tr>
      
      <th>Opening Hours</th>
      <th>Open 🚪 </th>
      <th>Closed 😴 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Monday</td>
      <td>12pm</td>
      <td>11pm</td>
    </tr>
    <tr>
      
    <td>Tuesday</td>
      
      <td>12pm</td>
      <td>11pm</td>
    </tr>
    <tr>
    <td>Wendsday</td>
    <td>12pm</td>
      <td>11pm</td>
    </tr>
    <tr>
    <td>Thursday</td>
    <td>12pm</td>
      <td>11pm</td>
    </tr>
    <tr>
    <td>Friday</td>
    <td>12pm</td>
      <td>2am</td>
    </tr>
    <tr>
    <td>Saturday</td>
    <td>12pm</td>
      <td>2am</td>
    </tr>
    <tr>
    <td>Sunday</td>
    <td>12pm</td>
      <td>2am</td>
    </tr>
  </tbody>
</Table>

            </>
        )
    }
}

export default OpeningTimes;