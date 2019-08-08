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
            margin: "0px",
            color: "white"
           
        };
        return (<div>
                <DirectionsJumbotron/>

                <Media>
                    <div>
                        <LunaMap

                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyCLj0XrOEudf7cnPvu4TRVNKTHmXSkiPk0&v=3.exp&libraries=geometry,drawing,places"}
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
                        <h4>Parking</h4>
                        <h5>There are plenty of parking spaces at the cinema.</h5>
                    </Media.Body>
                </Media>

                <h2>Directions from bus/train stations</h2>
                <br/>
<a href="https://moovitapp.com/?to=Alexandra%20House&tll=51.51253_-1.76825&from=Leigh%20Delamere%20Eastbound%20Motorway%20Services%20(Moto)&fll=51.511688_-2.158799&ref=1&poiType=egnsite&customerId=4908&metroId=2106&lang=en-gb">
                <img src={ ("/DirectionsImages/1.png") } alt="luna_building" Transformation height="100" width="400" />
                </a>
                <br/>
                <a href="https://moovitapp.com/?from=Swindon%20Bus%20Station&to=Alexandra%20House&fll=51.563803_-1.783213&tll=51.51253_-1.76825&customerId=4908&ref=1&poiType=egnsite&metroId=2106&lang=en-gb">
                <img src={ ("/DirectionsImages/2.png") } alt="luna_building" Transformation height="100" width="400" />
                </a>
                 <br/>
                <a href="https://moovitapp.com/?from=Swindon&to=Alexandra%20House&fll=51.566299_-1.783557&tll=51.51253_-1.76825&customerId=4908&ref=1&poiType=egnsite&metroId=2106&lang=en-gb">
                <img src={ ("/DirectionsImages//3.png") } alt="luna_building" Transformation height="100" width="400" />
                </a>

                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}


export default GettingThere;