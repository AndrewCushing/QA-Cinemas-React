import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Jumbotron} from "./Jumbotron";

class HomeComponent extends Component {
    state = {
    };
    componentDidMount() {

    };


    render() {
        return (
            <div>
                <Jumbotron/>
                <div className="Carousel">


                    <Carousel
                        className={"carousel"}
                        controls = {true}
                        fade = {true}
                        interval = {4000}
                        wrap = {true}
                        indicators = {false}

                    >
                        <Carousel.Item>
                            <img
                                className="CaroImg"
                                src="/luna_building.jpg"
                                alt="cinema"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="CaroImg"
                                src="/Spider.jpg"
                                alt="Spiderman: Far from home poster"
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="CaroImg"
                                src="/UpcomingFilmsImages/Goodboys.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>


                    </Carousel>
                </div>
            </div>
        )
    }
}

export default HomeComponent