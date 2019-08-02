import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';
import Review from './Review';

export default class ReviewBoard extends Component {

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
            fetch('http://localhost:8080/getreviews/'+this.props.match.params.filmId)
                .then(res => res.json() ).catch(console.log).then(results => {
                    console.log(results);
                    let reviews = results.contentList;
                    let reviewArr = [];
                    for (let i = 0 ; i < reviews.length ; i++){
                        reviewArr.push(
                            <Review reviewId={reviews[i].id} username={reviews[i].username} rating={reviews[i].rating} review={reviews[i].review}></Review>
                        )
                    }
                    this.setState({
                        movieHeader:[<DiscussionHeader key={movies[0].id} movie={movies[0]}/>],
                        reviews:reviewArr
                    });
            });
        });
    };

    render() {
        return (
            <div>
                <table className="filmTable">
                    <tbody>
                        <tr>
                            <td>
                                {this.state.movieHeader}
                            </td>
                        </tr>
                    </tbody>
                </table>
                {this.state.reviews}
                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
            </div>

        )
    }
}