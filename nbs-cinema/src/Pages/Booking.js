import React, { Component } from 'react';
import NotFound from "./NotFound";
import MovieDetails from "../component/MovieDetails";
import ShowingsTable from '../component/ShowingsTable';
import { BookingJumbotron }  from "../component/BookingJumbotron";


class Booking extends Component {

    constructor(props) {
        super(props);
        this.state={
            movieHeader:"",
            stuffToShow:<p>Loading</p>,
            seatsAvailable:[],
            seatsToBook:["4:4"]
        };
        this.bookTime = this.bookTime.bind(this);
        this.attemptBooking = this.attemptBooking.bind(this);
        this.addSeatToBooking = this.addSeatToBooking.bind(this);
        this.setButtonArray = this.setButtonArray.bind(this);
        this.getRequestedSeatLayout = this.getRequestedSeatLayout.bind(this);
    };

    bookTime = (showing) => (event) => {
        event.preventDefault();
        this.setButtonArray(showing, []);
    };

    addSeatToBooking = (showing, seatsToBook, seatPos) => (event) => {
        this.addOrRemove(seatsToBook, seatPos);
        this.setButtonArray(showing, seatsToBook);
    };

    attemptBooking = (showing, seatsToBook) => (event) => {
        event.preventDefault();
        showing = this.getRequestedSeatLayout(showing, seatsToBook);
        console.log(JSON.stringify(showing));
        fetch('http://35.176.119.160:8080/booktickets/'+showing.id,{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(showing)
        }).then(res => res.json()).catch(console.log).then(results => {
            if (results.successful){
                this.setState({
                    stuffToShow:<h1>Congrats! Your tickets have been booked!</h1>
                });
            } else {
                this.setState({
                    stuffToShow:<h1>{results.body}</h1>
                });
            }
        });
    };

    getRequestedSeatLayout(showing, seatsToBook) {
        seatsToBook.forEach( seat => {
            let posX = seat.split(":")[0];
            let posY = seat.split(":")[1];
            showing.seatAvailability[posX][posY] = true;
        });
        return showing;
    }

    setButtonArray(showing, seatsToBook){
        const booleanSeatsArr = showing.seatAvailability;
        let newSeatElementArr = [];
        for (let i = 0 ; i < booleanSeatsArr.length ; i++){
            for (let j = 0 ; j < booleanSeatsArr[i].length ; j++){
                let colour="";
                if (this.checkSelected(i,j,seatsToBook)){
                    colour = "blue";
                } else if (booleanSeatsArr[i][j]){
                    colour = "red";
                } else {
                    colour = "green";
                }
                newSeatElementArr.push(<button key={i+":"+j} style={{color:colour}} onClick={booleanSeatsArr[i][j] ? ()=>{} : this.addSeatToBooking(showing, seatsToBook, i+":"+j)}>Row:{i} Col:{j}</button>);
            }
            newSeatElementArr.push(<br key={"RowEnd"+i}/>);
        }
        newSeatElementArr.push(<div><br/><br/><br/><button onClick={this.attemptBooking(showing, seatsToBook)}>Book seats</button></div>);
            this.setState({
            stuffToShow:newSeatElementArr
        });
    }

    componentDidMount() {
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://35.176.119.160:8080/getshowingsbyfilm/'+this.props.match.params.id)
            .then(res => res.json()).catch(console.log).then(results => {
            const film = results.contentList[0];
            const showings = results.contentList[1];
            film.classification = classifications[film.classification];
            let newStuffToShow = [];
            if (showings.length>0) {
                newStuffToShow.push(<ShowingsTable bookTimeCallback={this.bookTime} showingsArr={showings}/>);
            } else {
                newStuffToShow.push(<h3>Sorry, there are currently no showings available for this film</h3>);
            }
            this.setState({movieHeader:<MovieDetails isBooking={true} movie={film}/>,stuffToShow:newStuffToShow, filmSelected:film});
        }).catch(()=>{
            this.setState({
                stuffToShow:<NotFound/>
            });
        });
    }

    render() {
        return (<div>
            <BookingJumbotron/>
            <div>
                {this.state.movieHeader}
                {this.state.stuffToShow}
            </div>
            </div>
        )
    }

    checkSelected(i, j, seatsToBook){
        let result = false;
        seatsToBook.forEach(positionString => {
            const posX = Number(positionString.split(":")[0]);
            const posY = Number(positionString.split(":")[1]);
            if (posX==i && posY == j){
                result = true;
            }
        });
        return result;
    };

    addOrRemove(seatsToBook, seatPos) {
        if (seatsToBook.includes(seatPos)){
            seatsToBook.splice(seatsToBook.indexOf(seatPos),1);
        } else {
            seatsToBook.push(seatPos);
        }
    }
}

export default Booking