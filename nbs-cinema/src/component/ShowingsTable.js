import React from "react";

export default class ShowingsTable extends React.Component{

    constructor(props){
        super(props);
        this.bookTime = this.bookTime.bind(this);
    }

    bookTime(event){
        event.preventDefault();
    }

    render() {
        const showings = this.props.showingsArr;
        const stuffToDisplay = showings.map( showing => {
            return (
                <button onClick={this.bookTime}>{showing.showingTime}</button>
            )
        });
        return (
            <div>
                {stuffToDisplay}
            </div>
        )
    }

}