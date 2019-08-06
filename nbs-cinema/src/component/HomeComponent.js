import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Jumbotron} from "./Jumbotron";



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
                <Jumbotron/>
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