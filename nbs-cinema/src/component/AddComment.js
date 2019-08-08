
import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';
import AddComment from "./AddComment";
import Comment from './Comment';
import ReviewHeader from "./ReviewHeader";
import {CommentJumbotron} from "./CommentJumbotron";




export default class CommentBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieHeader:"",
            review:"",
            comments:[]
        };
    };


    returnFunction = event => {
        window.history.back();
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
        fetch('http://localhost:8080/getfilm/'+this.props.match.params.filmId)
            .then(res => res.json() ).catch(console.log).then(results => {
            const movies = results.contentList;
            movies[0].classification = classifications[movies[0].classification];
            fetch('http://localhost:8080/getreview/'+this.props.match.params.reviewId)
                .then(res => res.json() ).catch(console.log).then(results => {
                let reviewObject = results.contentList[0];
                fetch('http://localhost:8080/getcomments/'+this.props.match.params.reviewId)
                    .then(res => res.json() ).catch(console.log).then(results => {
                    let commentArr = [];
                    let comments = results.contentList;
                    for (let i = 0 ; i < comments.length ; i++){
                        commentArr.push(
                            <Comment key={comments[i].id} username={comments[i].username} body={comments[i].body}></Comment>
                        )
                    }
                    this.setState({
                        movieHeader:[<DiscussionHeader key={movies[0].id} movie={movies[0]}/>],
                        review:reviewObject,
                        comments:commentArr
                    });
                });
            });
        });
    };

    render() {
        return (
            <div>
                <CommentJumbotron/>
                <div>
                    <table className="filmTable">
                        <th className={"ReviewHead"}>
                            {this.state.movieHeader}
                        </th>
                        <tr>
                            <td className={"ChosenReview"}>
                                <ReviewHeader rating={this.state.review.rating} username={this.state.review.username} review={this.state.review.review}></ReviewHeader>
                                <AddComment filmId={this.state.review.filmId} reviewId={this.state.review.id}/>
                            </td>
                        </tr>
                        <tr>
                            <td className={"ReviewHead"}>
                                {this.state.comments}
                            </td>
                        </tr>

                    </table>

                    <div>
                        <button className="ReturnButton" id="ReturnButton" type="submit"
                                onClick={this.returnFunction}> Return </button>
                    </div>

                </div>
            </div>

        )
    }
}