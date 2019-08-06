import React from "react";

export default class ShowingsTable extends React.Component{

    constructor(props){
        super(props);
        this.bookTime = this.bookTime.bind(this);
    }

    bookTime = (showingId) => (event) => {
        event.preventDefault();
        console.log(showingId);
    };

    render() {
        const showings = this.props.showingsArr;
        let stuffToDisplay = [];
        for (let i = 0 ; i < showings.length ; i++){
            stuffToDisplay.push(<button onClick={this.bookTime(showings[i].id)}>{showings[i].showingTime}</button>);
        }
        return (
            <div>
                {stuffToDisplay}
            </div>
        )
    }

}