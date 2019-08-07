import React from 'react';
import './ReviewBoard.css';
import { ReviewJumbotron }  from "../component/ReviewJumbotron";


export default class Review extends React.Component {

    render(){
        return(
            <div>
            <ReviewJumbotron/>
            <table className={"filmTable"}>

                        <td className = "reviewTable">
                            <label>User: </label> <span>{this.props.username}</span><br/>
                            <label>Rating: </label> <span>{this.props.rating}</span><br/>
                            <label>Review: </label> <span>{this.props.review}</span><br/>

                            <form className={"AddCommentForm"}>
                                <input className={"AddCommentInput"} type={"text"} maxLength={80} placeholder={"Please add your comment"} onSubmit={""}/>
                                <input className={"AddCommentBtn"} type={"Submit"}/>
                            </form>

                                <a href={"/CommentBoard/"+this.props.filmId+"/"+this.props.reviewId}>
                                    <button className="infoButton">▼ Comments ▼</button>
                                </a>
                        </td>
            </table>
            </div>
            )
    }
}