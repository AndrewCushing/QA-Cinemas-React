import React from "react";

export default class CommentAdder extends React.Component {

    constructor(props){
        super(props);
        this.submitComment = this.submitComment.bind(this);
    }

    submitComment(event){
        console.log(this.props);
        event.preventDefault();
        const username = document.getElementById("username").value;
        const body = document.getElementById("commentBody").value;
        fetch('https://localhost:8080/comments/addcomment/'+this.props.reviewId+"/"+username+"/"+body)
            .then(res => res.json() ).catch(()=> {window.alert("Unable to submit review!")}).then(results => {
            if (results.successful){
                window.location = window.location;
            }
        });
    }

    render() {
        return(
            <form onSubmit={this.submitComment}>
                <input id={"username"} type={"text"} placeholder={"username"}/><br/>
                <input type={"text"} id={"commentBody"} placeholder={"Write your comment here"}/><br/>
                <button>Submit comment</button>
            </form>
        )
    }
}