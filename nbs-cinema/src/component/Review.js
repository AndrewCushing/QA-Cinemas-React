import React from 'react';
import './ReviewBoard.css';

function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

export default class Review extends React.Component {



    render(){
        return(
            <table className="filmTable">

                        <td className = "reviewTable">
                            <label>Rating: </label> <span>{this.props.rating}</span><br/>
                            <label>User: </label> <span>{this.props.username}</span><br/>
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

        )
    }

}