import React from "react";

export default class ShowingsTable extends React.Component{

    constructor(props){
        super(props);
        let newShowingsArr = {};
        this.props.showingsArr.forEach(showing => {
            if (!newShowingsArr[showing.date]){
                newShowingsArr[showing.date] = [];
            }
            newShowingsArr[showing.date].push(showing);
        });
        this.state = {
            showingsArr:newShowingsArr
        };
    }

    render() {
        let stuffToDisplay = [];
        const showingsArr = this.state.showingsArr;
        for (let key in showingsArr){
            stuffToDisplay.push(<label color={"white"}><font color="white">{key}:</font></label> );
            for (let i = 0 ; i < showingsArr[key].length ; i++){
                stuffToDisplay.push(<button title={"Seats available: "+showingsArr[key][i].seatsAvailable} style={{color:showingsArr[key][i].seatsAvailable===0 ? "red" : "green" }} onClick={this.props.bookTimeCallback(showingsArr[key][i],showingsArr[key][i].filmId)}>{showingsArr[key][i].showingTime}</button>)
            }
            stuffToDisplay.push(<div><br/><br/></div>);
        }
        return (
            <div>
                {stuffToDisplay}
            </div>
        )
    }

}