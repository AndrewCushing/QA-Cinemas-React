import React, { Component } from 'react';
import MovieRow from '../component/MovieRow';
import NotFound from "./NotFound";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CurrentFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {rows:[]}
    };

    componentDidMount(){
        let movieRows = [];
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://localhost:8080/getnewfilms')
            .then(res => res.json() ).catch(console.log).then(results => {

            const movies = results.contentList.map(movie => ({

                ...movie,

                classification: classifications[movie.classification]

            }));

            this.setState({

                rows: movies

            });

        });

    };



    render() {

        return (

            <Row>

                { this.state.rows.map(movie => (

                    <Col md="6">

                        <MovieRow key={movie.id} movie={movie}/>

                    </Col>

                )) }

            </Row>

        )

    }

}

export default CurrentFilms