import React, { Component } from 'react';
import MovieDetails from '../component/MovieDetails'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class FilmDetails extends Component {

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
        fetch('http://localhost:8080/getfilm/'+this.props.match.params.id)
            .then(res => res.json() ).catch(console.log).then(results => {
            const movies = results.contentList;
            movies.forEach(movie => {
                movie.classification = classifications[movie.classification];
                const movieRow = <MovieDetails isBooking={false} key={movie.id} movie={movie}/>;
                movieRows.push(movieRow)
            });
            this.setState({
                rows:movieRows
            });
        });
    };

    render() {
        return (
            <Row className ="row">
                <Col className="col" md="4">
                    {this.state.rows}
                </Col>
            </Row>
        )
    }
}

export default FilmDetails