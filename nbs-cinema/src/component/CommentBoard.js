import React, { Component } from 'react';
import DiscussionHeader from './DiscussionHeader.js';
import Comment from './Comment';
import ReviewHeader from "./ReviewHeader";

export default class CommentBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieHeader:"",
            review:"",
            comments:[]
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
                <table className="filmTable">
                    <tbody>
                    <tr>
                        <td>
                            {this.state.movieHeader}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="filmTable">
                    <tbody>
                    <tr>
                        <td>
                            <ReviewHeader rating={this.state.review.rating} username={this.state.review.username} review={this.state.review.review}></ReviewHeader>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {this.state.comments}
                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
            </div>

        )
    }
}