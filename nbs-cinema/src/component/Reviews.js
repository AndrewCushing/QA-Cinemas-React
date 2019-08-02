import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';

class FilmDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieHeader:"",
            reviews:[]
        };
    };

    componentDidMount(){
        let movieRows = [];
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://localhost:8080/getfilm/'+this.props.match.params.filmId)
            .then(res => res.json() ).catch(console.log).then(results => {
            const movies = results.contentList;
            movies[0].classification = classifications[movies[0].classification];
            this.setState({
                movieHeader:[<DiscussionHeader key={movies[0].id} movie={movies[0]}/>]
            });
        });
        fetch('http://localhost:8080/getreviews/'+this.props.match.params.filmId)
            .then(res => res.json() ).catch(console.log).then(results => {
                console.log(results);
                this.setState({
                    reviews:results.contentList
                });
        });
    };

    render() {
        return (
            <div>
                {this.state.movieHeader}
                {this.state.reviews}
                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
            </div>

        )
    }

    handleHome = () => {
        this.props.history.push('/home');
    };

    handleClose = () => {
        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };
}

export default FilmDetails