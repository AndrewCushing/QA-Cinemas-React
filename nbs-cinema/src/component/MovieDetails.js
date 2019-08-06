import React from 'react';
import { Link } from 'react-router-dom';
import ExtraDetails from './MovieDetailsArray.js'
import Card from "react-bootstrap/Card";

class MovieDetails extends React.Component {
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

                <Card.Text><label>Synopsis:</label> {this.props.movie.detailedDescription}<br/>
                    <label>Director:</label> <ExtraDetails content={this.props.movie.directors}/><br/>
                    <label>Starring:</label> <ExtraDetails content={this.props.movie.actors}/><br/>
                    <label>Genre:</label> <ExtraDetails content={this.props.movie.genres}/><br/>
                    <label>Runtime:</label> <span>{this.props.movie.length}</span><br/>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <Link to ={"/Booking/" + this.props.movie.id}>
                        <button className="bookButton"><i class="material-icons"> event_seat</i>Book</button>
                    </Link>
                    <Link to ={"/Reviews/" + this.props.movie.id}>
                        <button className="infoButton"><i class="material-icons">rate_review</i>Reviews</button>
                    </Link>
                </small>
            </Card.Footer>
        </Card>
    )
}
}


export default MovieDetails;

