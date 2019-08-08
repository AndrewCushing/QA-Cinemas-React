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
        fetch('http://35.176.119.160:8080/insertcomment/'+this.props.reviewId+"/"+username+"/"+body)
            .then(res => res.json() ).catch(()=> {window.alert("Unable to connect to back end!")}).then(results => {
            if (results.successful){
                window.location = window.location;
            } else {
                window.alert("Unable to submit review. Unlucky!");
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