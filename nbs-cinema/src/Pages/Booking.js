import React, { Component } from 'react';
import NotFound from "./NotFound";
import MovieDetails from "../component/MovieDetails";
import ShowingsTable from '../component/ShowingsTable';
import BookingStage2Basic from "./BookingStage2Basic";
import BookingStage2Advanced from "./BookingStage2Advanced";

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state={
            stuffToShow:<p>Loading</p>
        };
        this.bookTime = this.bookTime.bind(this);
        this.attemptBooking = this.attemptBooking.bind(this);
    };

    bookTime = (showing) => (event) => {
        event.preventDefault();
        console.log(showing);
        this.setState({stuffToShow:<BookingStage2Advanced bookingFunc={this.attemptBooking} showing={showing} film={this.state.filmSelected}/>});
    };

    attemptBooking = (showingId) => (event) => {
        event.preventDefault();
        const numAdults = Number(document.getElementById("adults").value);
        const numChildren = Number(document.getElementById("children").value);
        const numSeniors = Number(document.getElementById("seniors").value);
        const totalSeats = numAdults+numChildren+numSeniors;
        console.log('http://localhost:8080/bookany/'+showingId+"/"+totalSeats);
        fetch('http://localhost:8080/bookany/'+showingId+"/"+totalSeats)
            .then(res => res.json()).catch(console.log).then(results => {
            console.log(results);
            if (results.successful){
                this.setState({
                    stuffToShow:<h1>Congrats! Your tickets have been booked!</h1>
                });
            } else {
                this.setState({
                    stuffToShow:<h1>Sorry, we don't have that many seats available. This showing only has {results.contentList[0].seatsAvailable} seats available. If you need more then please select another showing.</h1>
                });
            }
        });
    };

    componentDidMount() {
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://localhost:8080/getshowingsbyfilm/'+this.props.match.params.id)
            .then(res => res.json()).catch(console.log).then(results => {
            const film = results.contentList[0];
            const showings = results.contentList[1];
            film.classification = classifications[film.classification];
            console.log(film);
            let newStuffToShow = [];
            newStuffToShow.push(<MovieDetails isBooking={true} movie={film}/>);
            if (showings.length>0) {
                newStuffToShow.push(<ShowingsTable bookTimeCallback={this.bookTime} showingsArr={showings}/>);
            } else {
                newStuffToShow.push(<h3>Sorry, there are currently no showings available for this film</h3>);
            }
            this.setState({stuffToShow:newStuffToShow, filmSelected:film});
        }).catch(()=>{
            this.setState({
                stuffToShow:<NotFound/>
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.stuffToShow}
            </div>
        )
    }
}

export default Booking