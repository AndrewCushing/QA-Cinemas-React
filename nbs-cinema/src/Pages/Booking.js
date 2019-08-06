import React, { Component } from 'react';
import NotFound from "./NotFound";
import MovieDetails from "../component/MovieDetails";
import ShowingsTable from '../component/ShowingsTable';

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state={
            stuffToShow:<p>Loading</p>
        };
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
        console.log('http://localhost:8080/getshowingsbyfilm/'+this.props.match.params.id);
        fetch('http://localhost:8080/getshowingsbyfilm/'+this.props.match.params.id)
            .then(res => res.json()).catch(console.log).then(results => {
            const film = results.contentList[0];
            const showings = results.contentList[1];
            film.classification = classifications[film.classification];
            console.log(film);
            let newStuffToShow = [];
            newStuffToShow.push(<MovieDetails movie={film}/>);
            if (showings.length>0) {
                newStuffToShow.push(<ShowingsTable showingsArr={showings}/>);
            } else {
                newStuffToShow.push(<h3>Sorry, there are currently no showings available for this film</h3>);
            }
            this.setState({stuffToShow:newStuffToShow});
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