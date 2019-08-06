import React from "react";

export default class ShowingsTable extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const showings = this.props.showingsArr;
        let stuffToDisplay = [];
        for (let i = 0 ; i < showings.length ; i++){
            stuffToDisplay.push(<button onClick={this.props.bookTimeCallback(showings[i])}>Date: {showings[i].date} Time: {showings[i].showingTime}</button>);
        }
        return (
            <div>
                {stuffToDisplay}
            </div>
        )
    }

}