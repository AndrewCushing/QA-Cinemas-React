import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeComponent.css';


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


class HomeComponent extends React.Component {
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
                <h1> Welcome to Luna Cinemas </h1>
                <h5> “Life is not the amount of breaths you take. It’s the moments that take your breath away.” </h5>
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
                            src="/images/ConAir.jpg"
                            alt="Slide Coming Soon"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/GrandBH.jpg"
                            alt="Slide Coming Soon"
                        />
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="CaroImg"
                            src="/images/babydriver.jpg"
                            alt="Slide Coming Soon"
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