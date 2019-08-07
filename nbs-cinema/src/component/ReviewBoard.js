import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';
import Review from './Review';
import AddReview from "./AddReview";
import NoReviewsFound from "./NoReviewsFound";
import {ReviewJumbotron} from "./ReviewJumbotron";

export default class ReviewBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieHeader:"",
            reviews:[]
        };
    };

    componentDidMount(){
        const classifications = {
            ClassU:"/ClassificationImages/U.png",
            ClassPG:"/ClassificationImages/PG.png",
            Class12A:"/ClassificationImages/12A.png",
            Class12:"/ClassificationImages/12.png",
            Class15:"/ClassificationImages/15.png",
            Class18:"/ClassificationImages/18.png"
        };
        fetch('http://35.176.119.160:8080/getfilm/'+this.props.match.params.filmId)
            .then(res => res.json() ).catch(console.log).then(results => {
                const movies = results.contentList;
                movies[0].classification = classifications[movies[0].classification];
            fetch('http://35.176.119.160:8080/getreviews/'+this.props.match.params.filmId)
                .then(res => res.json() ).catch(console.log).then(results => {
                    let reviews = results.contentList;
                    let reviewArr = [];
                    for (let i = 0 ; i < reviews.length ; i++){
                        reviewArr.push(
                            <Review filmId={reviews[i].filmId} reviewId={reviews[i].id} username={reviews[i].username} rating={reviews[i].rating} review={reviews[i].review}></Review>
                        )
                    }
                    this.setState({
                        movieHeader:[<DiscussionHeader key={movies[0].id} movie={movies[0]}/>],
                        reviews:reviewArr,
                        filmId:movies[0].id
                    });
            }).catch(()=>{
                this.setState({
                    movieHeader:[<DiscussionHeader key={movies[0].id} movie={movies[0]}/>],
                    reviews:<NoReviewsFound/>,
                    filmId:movies[0].id
                });
            });
        }).catch(()=>{
            window.location="/noMatch";
        });
    };

    render() {
        return (<div>
            <ReviewJumbotron/>
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
                <AddReview filmId={this.state.filmId}/>
                {this.state.reviews}
            </div>
            </div>

        )
    }
}