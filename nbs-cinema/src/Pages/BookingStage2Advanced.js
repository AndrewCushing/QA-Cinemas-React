import React from "react";

export default class BookingStage2Basic extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seatStatusArr:[],
            seatsArr:[]
        }
        this.checkSelected = this.checkSelected.bind(this);
    }

    checkSelected(i, j, positionStringArr){
        positionStringArr.forEach(positionString => {
            const posX = Number(positionString.split(":")[0]);
            // console.log(posX);
            const posY = Number(positionString.split(":")[1]);
            // console.log(posY);
            console.log(posX==i && posY == j);
            if (posX==i && posY == j) {
                console.log("It got here");
                return true;
            }
        });
        return false;
    };

    componentDidMount() {
        const seats = this.props.showing.seatAvailability;
        console.log(this.props.selectedSeats);
        let seatingArr = [];
        for (let i = 0 ; i < seats.length ; i++){
            seatingArr.push([]);
            for (let j = 0 ; j < seats[i].length ; j++){
                let colour = "green";
                console.log(this.checkSelected(i,j,this.props.selectedSeats));
                if (seats[i][j]) {
                    colour = "red";
                } if (this.checkSelected(i,j,this.props.selectedSeats)){
                    console.log("It got here too");
                    colour = "blue";
                }
                seatingArr[i].push(<button onClick={seats[i][j] ? ()=>{} : this.props.addSeatFunc(i+":"+j, this.props.showing)}
                                           title={seats[i][j] ? "Unavailable" : "Book this seat" } style={{color:colour}}
                                           key={"seat"+i+""+j}>Row:{i} Col:{j}</button>)
            }
            seatingArr[i].push(<br/>);
        }
        this.setState({
            seatStatusArr:seats,
            seatsArr:seatingArr
        });
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