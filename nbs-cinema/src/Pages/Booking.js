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
            .then(res => res.json() ).catch(console.log).then(results => {
            const film = results.contentList[0];
            film.classification = classifications[film.classification];
            console.log(film);
            const showings = results.contentList[1];
            console.log(showings);
            let newStuffToShow = [];
            newStuffToShow.push(<MovieDetails movie={film}/>);
            newStuffToShow.push(<ShowingsTable showingsArr={showings}/>)
            this.setState({stuffToShow:newStuffToShow});
        }).catch(()=>{
            this.setState({
                stuffToShow:<NotFound/>
            })
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