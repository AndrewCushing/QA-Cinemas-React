import React from "react";

export default class BookingStage2Basic extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seatsArr:[]
        }
    }

    componentDidMount() {
        const seats = this.props.showing.seatAvailability;
        let seatingArr = [];
        for (let i = 0 ; i < seats.length ; i++){
            seatingArr.push([]);
            for (let j = 0 ; j < seats[i].length ; j++){
                seatingArr[i].push(<button title={seats[i][j] ? "Unavailable" : "Book this seat" } style={{color:seats[i][j] ? "red" : "green" }} key={"seat"+i+""+j}>Row:{i} Col:{j}</button>)
            }
            seatingArr[i].push(<br/>);
        }
        this.setState({
            seatsArr:seatingArr
        })
    }

    //props has: this.props.showing    this.props.film   this.props.bookingFunc(showingId)

    render() {
        return (
            <div>
                <h1>Film: {this.props.film.title}</h1>
                <h3>Date: {this.props.showing.date}</h3>
                <h3>Time: {this.props.showing.showingTime}</h3>
                {this.state.seatsArr}
            </div>
        )
    }
}