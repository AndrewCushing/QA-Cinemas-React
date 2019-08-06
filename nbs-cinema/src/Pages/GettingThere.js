import React, { Component } from 'react';
import LunaMap from '../component/LunaMap';
import Media from "react-bootstrap/Media";
import { DirectionsJumbotron } from "../component/DirectionsJumbotron";
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
        return (<div>
                <DirectionsJumbotron/>

                <Media>
                    <div>
                        <LunaMap

                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"}
                            loadingElement={<div style={{ height: "100%" }} />}
                            containerElement={<div style={{ height: "400px", width: "550px" }} />}
                            mapElement={<div style={{ height: "100%" }} />}
                        />
                    </div>
                    <Media.Body style={divStyle}>

                        <img src={ ("/luna_building.jpg") } alt="luna_building" style={divStyle} Transformation height="350" width="550" crop="fill" effect="sepia" radius="20" />
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
            </div>
        )
    }
}


export default GettingThere;