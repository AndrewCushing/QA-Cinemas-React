import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import './ReviewBoard.css';

class MovieRow extends React.Component {
    render () {
        return (
            <Card className="card" style={{width:270}} key={this.props.movie.id}>
                <Link to ={"/FilmDetails/" + this.props.movie.id}>
                    <Card.Img variant="top"  src={this.props.movie.imagePath}/>
                </Link>
                <Card.Body>
                    <Link to ={"/FilmDetails/" + this.props.movie.id}>
                        <Card.Title>{this.props.movie.title}<Card.Img variant="top" style = {{width:50, paddingLeft:10, marginBottom:10}} src={this.props.movie.classification}/></Card.Title>
                    </Link>

                    <Card.Text>{this.props.movie.briefDescription}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Link to ={"/Booking/" + this.props.movie.id}>
                            <button className="bookFilmButton"><i class="material-icons"> event_seat</i></button>
                        </Link>
                        <Link to ={"/FilmDetails/" + this.props.movie.id}>
                            <button className="FilmInfoButton"><i style = {{width:34}}class="material-icons">info</i></button>
                        </Link>
                        <Link to ={"/Reviews/" + this.props.movie.id}>
                            <button className="ReviewButton"><i class="material-icons">rate_review</i></button>
                        </Link>
                    </small>
                </Card.Footer>
            </Card>
        )
    }
}
export default MovieRow;