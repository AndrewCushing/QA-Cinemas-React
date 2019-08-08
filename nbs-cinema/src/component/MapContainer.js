import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './MapContainer.css';

const FB = '/F&B.jpg';
const Chiquto = '/Chiquto.jpg';
const HW = '/Hall&Woodhouse.jpg';
const PizzaHut = '/PizzaHut.jpg';
const Nandos = '/Nandos.jpg';
const Fratellos = '/Fratellos.jpg';
const Logo = '/luna_building.jpg';

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
        return (<div>
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
                            pic={FB}
                            position={{ lat: 51.571289, lng: -1.757105 }} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Hall & Woodhouse">Hall & Woodhouse</a>}
                            pic={HW}
                            position={{ lat: 51.562495, lng: -1.798083}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Chiquto">Chiquto</a>}
                            pic={Chiquto}
                            position={{ lat: 51.571112, lng: -1.757373 }} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Fratello's">Fratello's</a>}
                            pic={Fratellos}
                            position={{ lat: 51.558364, lng: -1.779836}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Pizza Hut">Pizza Hut</a>}
                            pic={PizzaHut}
                            position={{ lat: 51.570463, lng: -1.755474}} />
                        <Marker
                            onClick={this.onMarkerClick.bind(this)}
                            name={<a href="#Nando's">Nando's</a>}
                            pic={Nandos}
                            position={{ lat: 51.557893, lng: -1.780524}} />


                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                                <h5>{this.state.selectedPlace.address}</h5>

                                <img alt="selectedPic" width="200" src={this.state.selectedPlace.pic} />
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}



export default GoogleApiWrapper(
    () => ({

            apiKey: ('AIzaSyBRZ03wenxHfPXdMNkiySal3yn8RzXS208')
        }
    ))(MapContainer)