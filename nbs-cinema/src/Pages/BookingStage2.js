import React from "react";
import MovieDetails from "../component/MovieDetails";
import ShowingsTable from "../component/ShowingsTable";
import NotFound from "./NotFound";

export default class BookingStage2 extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Film: {this.props.film.title}</h1>
                <h3>Time: {this.props.showing.showingTime}</h3>
                <form onSubmit={this.props.bookingFunc(this.props.showing.id)}>
                    <input type="number" placeholder="No of adults" id="adults"/>
                    <input type="number" placeholder="No of children" id="children"/>
                    <input type="number" placeholder="No of seniors" id="seniors"/><br/>
                    <button>Submit booking</button>
                </form>
            </div>
        )
    }
}