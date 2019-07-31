import React, { Component } from "react";
import LunaMap from "./LunaMap";
import Media from "react-bootstrap/Media";

class GettingThere extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        var divStyle = {
            padding: "10px",
            margin: "0px"
          };
        return (<>
        <br/>
                <h1>Getting Here</h1>
                <br/>
      
                <Media>
                <div>
                <LunaMap
				doctors={this.props.doctors} 
				googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAabpOtTthNBBAvmMH1U6fl7jmdCEkdRp8&v=3.exp&libraries=geometry,drawing,places"}
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "400px", width: "600px" }} />}
				mapElement={<div style={{ height: "100%" }} />}
			/>
                </div>
  <Media.Body style={divStyle}>
  
  <img src={ require("../images/luna_building.jpg") } style={divStyle} Transformation height="350" width="450" crop="fill" effect="sepia" radius="20" />
    <br/>
    <br/>
    <h4>Address:</h4>
    <h5>Whittingham Dr, Wroughton, Swindon SN4 0QJ</h5>
    <br/>
    <h4>Directions from bus/train stations</h4>
    <br/>
    <h4>Parking</h4>
  </Media.Body>
</Media>
                <br/>
                <br/>
                <br/>
            </>
        )
    }
}


export default GettingThere;