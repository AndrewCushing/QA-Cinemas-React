import React from 'react';
import MovieDetails from "./MovieDetails";

export default class AddReview extends React.Component {

    constructor(props){
        super(props);
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview(event){
        event.preventDefault();
        const username = document.getElementById("username").value;
        const rating = document.getElementById("rating").value;
        const review = document.getElementById("review").value;
        fetch('http://localhost:8080/insertreview/'+this.props.filmId+"/"+rating+"/"+review+"/"+username)
            .then(res => res.json() ).catch(()=> {window.alert("Unable to connect to back end!")}).then(results => {
            console.log(results.successful);
            if (results.successful){
                window.location = 'http://localhost:3000/Reviews/'+this.props.filmId;
            } else {
                window.alert("Unable to submit review. Unlucky!");
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitReview}>
                    <div>
                        <input type="text" placeholder="username" id="username"/>
                    </div>
                    <div>
                        <select id="rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>
                        <textarea rows={3} placeholder={"Enter your review here"} id="review"/>
                    </div>
                    <div>
                        <button id={"Submit_btn"}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}