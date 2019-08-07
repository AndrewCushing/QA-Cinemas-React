import React from 'react';
import { Link } from 'react-router-dom';
import ExtraDetails from './MovieDetailsArray.js'
import Card from "react-bootstrap/Card";

class MovieDetails extends React.Component {
    constructor(props){
        super(props);
        const buttonToShow = [];
        console.log(this.props.isBooking)
        if (!this.props.isBooking){
            buttonToShow.push(
                <a href={"/Booking/" + this.props.movie.id}>
                    <button className="bookButton" id={"Book_btn"}><i className="fas fa-ticket-alt"></i>Book</button>
                </a>
            );
        }
        this.state = {bookingButton:buttonToShow};
    }
    render () {
        return (
        <Card className="card" style={{width:250}} key={this.props.movie.id}>
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
                        <button className="bookButton" id={"Book_btn"}><i class="material-icons"> event_seat</i>Book</button>
                    </Link>
                    <Link to ={"/Reviews/" + this.props.movie.id}>
                        <button className="infoButton" id={"Reviews_btn"}><i class="material-icons">rate_review</i>Reviews</button>
                    </Link>
                </small>
            </Card.Footer>
        </Card>
    )
}
}


export default MovieDetails;

