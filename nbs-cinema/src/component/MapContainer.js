import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import Logo from '../images/luna_building.jpg';

import './MapContainer.css';


export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };



    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });


    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (<>
                <div name="mapContainer" className="mapContainer" style={this.props.style || {}}>
                    <Map className="mapStyle"
                         google={this.props.google}
                         zoom={13}
                         initialCenter={{ lat: 51.5716896, lng: -1.756816 }}
                    >
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={'Luna Cinemas'}
                            pic={Logo}

                        />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Frankie & Benny's">Frankie & Benny's</a>}
                            pic={'https://www.foodanddrinkguides.co.uk/sites/default/files/Frankies%20IMG_1100.JPG'}
                            position={{ lat: 51.571289, lng: -1.757105 }} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Hall & Woodhouse">Hall & Woodhouse</a>}
                            address={""}
                            pic={'https://lh5.googleusercontent.com/p/AF1QipNxNoeortnxZOUQq0MU0nTwNChA0aT5dpud09Mx=w408-h272-k-no'}
                            position={{ lat: 51.562495, lng: -1.798083}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Chiquto">Chiquto</a>}
                            address={""}
                            pic={'https://lh5.googleusercontent.com/p/AF1QipPjvGdDioDve4180bjY_JtO1PX-1H1nGLY7Wi2R=w426-h240-k-no'}
                            position={{ lat: 51.571112, lng: -1.757373 }} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Los Gatos">Los Gatos</a>}
                            address={""}
                            pic={'https://lh5.googleusercontent.com/p/AF1QipOYCwyovSzFyChM7v1rf5MGSo8LHFGjpZCKuP5Z=w408-h306-k-no'}
                            position={{ lat: 51.552257, lng: -1.776920}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Pizza Hut">Pizza Hut</a>}
                            address={""}
                            pic={'https://www.insidermedia.com/uploads/news/Pizza_Hut_Swindon.jpg'}
                            position={{ lat: 51.570463, lng: -1.755474}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Nando's">Nando's</a>}
                            address={""}
                            pic={'https://lh5.googleusercontent.com/p/AF1QipOgpvFkPSfO7cgfJEAwoN987_wSvK_OQUkHSsjf=w408-h306-k-no'}
                            position={{ lat: 51.557893, lng: -1.780524}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Rios Brazil">Rios Brazil</a>}
                            address={""}
                            pic={'https://media-cdn.tripadvisor.com/media/photo-s/02/fb/62/6e/rios-brazil.jpg'}
                            position={{ lat: 51.562868, lng: -1.787196}} />


                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                                <h5>{this.state.selectedPlace.address}</h5>

                                <img width="200" src={this.state.selectedPlace.pic} />
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </>
        );
    }
}



export default GoogleApiWrapper(
    () => ({

            apiKey: ('API KEY')
        }
    ))(MapContainer)