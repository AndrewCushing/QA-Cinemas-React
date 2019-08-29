import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';
import Review from './Review';
import AddReview from "./AddReview";
import NoReviewsFound from "./NoReviewsFound";
import {ReviewJumbotron} from "./ReviewJumbotron";
import Loading from "./Loading";

export default class ReviewBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieHeader:<Loading/>,
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
        fetch('https://localhost:8080/reviews/getreviews/'+this.props.match.params.filmId)
            .then(res => res.json() ).catch(console.log).then(results => {
            console.log(results);
            const movie = results.contentList[0];
            movie.classification = classifications[movie.classification];
            let reviewArr = [];
            if (results.contentList[1] != null){
                let reviews = results.contentList.slice(1,results.contentList.length);
                console.log(results.contentList[1]);
                console.log(reviews);
                for (let i = 0 ; i < reviews.length ; i++){
                    reviewArr.push(
                        <Review reviewId={reviews[i].id} username={reviews[i].username} rating={reviews[i].rating} review={reviews[i].reviewBody}/>
                    );
                }
            } else {
                reviewArr = <NoReviewsFound/>
            }
            this.setState({
                movieHeader:[<DiscussionHeader key={movie.id} movie={movie}/>],
                reviews:reviewArr,
                filmId:movie.id
            });
        }).catch(()=>{
            this.setState({
                movieHeader:<h1 style={{color:"red"}}>No Match for that movie. Please refresh the database</h1>,
                reviews:<p> </p>,
                filmId:null
            });
        });
    }

    render() {
        return (<div>
                <ReviewJumbotron/>
                <div>
                    {this.state.movieHeader}

                    {this.state.reviews}
                    <AddReview filmId={this.state.filmId}/>

                </div>
            </div>

        )
    }
}