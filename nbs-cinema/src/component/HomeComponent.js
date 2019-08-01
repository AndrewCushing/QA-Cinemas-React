import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeComponent.css';



class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome to Luna Cinemas </h1>
                <h5> “One tiny hop for bird, one giant flight for cinema” </h5>
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
                            src="/images/CurrentFilmImages/Lionking.jpg"
                            alt="Slide Coming Soon"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/CurrentFilmImages/Spider.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/CurrentFilmImages/Toystory.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/CurrentFilmImages/Yesterday.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/UpcomingFilmsImages/GeminiMan.png"
                            alt="Slide Coming Soon"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/UpcomingFilmsImages/Goodboys.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/UpcomingFilmsImages/Jumanji.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/UpcomingFilmsImages/Zombieland2.png"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default HomeComponent