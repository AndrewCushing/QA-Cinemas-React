import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../styles/HomeComponent.css';
import {Jumbotron} from "./Jumbotron";

class HomeComponent extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Jumbotron/>
                <Carousel
                    className={"carousel"}
                    controls = {true}
                    fade = {true}
                    interval = {3000}
                    wrap = {true}
                    indicators = {false}

                >
                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/luna_building.jpg"
                            alt="External image of our cinema"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/SpiderMan.jpg"
                            alt="Spiderman: Far from home poster"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/ToyStory4.jpg"
                            alt="Toy Story 4"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/GeminiMan.jpg"
                            alt="Gemini Man"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/ZombieLand2.jpg"
                            alt="ZombieLand 2"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/AngelHasFallen.png"
                            alt="Angel Has Fallen"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/angrybirds2.jpg"
                            alt="Angry Birds 2"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/MaleficentMistressofEvil.jpg"
                            alt="Maleficent: Mistress of Evil"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/CarouselPics/FastAndFurious.jpg"
                            alt="Fast & Furious: Hobbs & Shaw"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

export default HomeComponent