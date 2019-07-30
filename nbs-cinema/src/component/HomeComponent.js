import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
        "mdbreact";
// import HomeService from '../service/HomeService';

class CurrentFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("This is my initializer")
        const movies = [
            {id: 0, film_src: "ConAir.jpg",  title: "Con Air"},
            {id: 1, film_src: "GrandBH.jpg",  title: "Grand Budapest Hotel"}
        ]
        const films =  movies.map((F) =>
            ( <film_src key={F.id} title={F.title} />
            ));
        return(
            <div>
                {films}
            </div>
        )
    };
}






class HomeComponent extends Component {
    state = {
       
    };

    componentDidMount() {

        // HomeService.executeGetService()
        //     .then(response => {
        //         this.setState({
        //             homes: response.data
        //         })
        //     })
    };

    // gotoBeanComponent = () => {
    //     this.props.history.push('/add-home')
    // }

    // deleteHome = (id) => {
    //     HomeService.executeDeleteService(id)
    //         .then(response => {
    //             this.setState({
    //                 homes: response.data
    //             })
    //         })
    // }

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={2}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                        carousel-fade

                    >
                        <MDBCarouselInner activeIndex={0}>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <div className="position-relative" style={{height: "500px"}}>
                                        <img
                                            className="d-block w-100 h-100" style={{objectFit: "cover"}}
                                            src="/images/ConAir.jpg"
                                            alt="First slide"
                                        />
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <div className="position-relative" style={{height: "500px"}}>
                                        <img
                                            className="d-block w-100 h-100" style={{objectFit: "cover"}}
                                            src="/images/GrandBH.jpg"
                                            alt="Second slide"
                                        />
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
                {/*<div>*/}

                {/*    <ul className = "list-group">*/}
                {/*        {this.state.home.map(home => <li className = "list-group-item" key={home.id}>home: {home.homeName} <button className="btn btn-danger float-right"onClick={() => {*/}
                {/*            this.deletehome(home.id)}}>x</button></li>)}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className="float-right">*/}
                {/*    <button className="btn btn-success " onClick={this.gotoBeanComponent}>Add home</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default HomeComponent