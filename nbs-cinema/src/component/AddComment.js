import React from 'react';
import MovieDetails from "./MovieDetails";
import './ReviewBoard.css';

export default class AddComment extends React.Component {

    constructor(props){
        super(props);
        this.submitComment = this.submitComment.bind(this);
    }

    submitComment(event){
        event.preventDefault();
        const username = document.getElementById("username").value;
        const comment = document.getElementById("comment").value;

        fetch('http://localhost:8080/insertcomment/'+this.props.reviewId+"/"+username+"/"+comment)
            .then(res => res.json() ).catch(()=> {window.alert("Unable to connect to back end!")}).then(results => {
            console.log(results.successful);
            if (results.successful){
                window.location = 'http://localhost:3000/CommentBoard/'+this.props.filmId+"/"+this.props.reviewId;
            } else {
                window.alert("Unable to submit review. Unlucky!");
            }
        });
    }

    render() {
        return (
            <div>
                <form className={"AddCommentForm"} onSubmit={this.submitComment}>
                    <div>
                        <p className={"commentHead"}> Please Add Your Comment </p>
                        <input className={"AddCommentInput"} id="username" type={"text"} maxLength={15} placeholder={"Username"}/>
                    </div>
                    <div>
                        <textarea className={"AddCommentText"} id="comment" rows={3} maxLength={180} placeholder={"Enter your Comment here"} />
                    </div>
                    <div>
                        <input className={"AddCommentBtn"} type={"Submit"}/>
                    </div>
                </form>
            </div>
        )
    }
}

