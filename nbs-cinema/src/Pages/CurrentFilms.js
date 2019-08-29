import React, { Component } from 'react';
import MovieRow from '../component/MovieRow';
import NotFound from "./NotFound";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CurrentJumbotron} from "../component/CurrentJumbotron";
import Loading from "../component/Loading";

export default class CurrentFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {rows:<Loading/>}
    };

    componentDidMount(){
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('https://localhost:8080/film/getnewfilms')
            .then(res => {console.log(res); return res.json();}).catch(console.log).then(results => {
            let movies = results.contentList.map(movie => ({
                ...movie,
                classification: classifications[movie.classification]
            }));
            movies = movies.map(movie => (
                <Col md="6">
                    <MovieRow key={movie.id} movie={movie}/>
                </Col>
            ));
            this.setState({
                rows: movies
            });
        });
    };

    render() {
        return (
            <div>
                <CurrentJumbotron/>
                <Row>
                    { this.state.rows }
                </Row>
            </div>
        )
    }
}