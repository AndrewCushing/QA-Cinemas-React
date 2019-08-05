import React from 'react';
import MovieDetails from "./MovieDetails";

export default class AddReview extends React.Component {

    constructor(props){
        super(props);
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview(){
        const username = document.getElementById("username");
        const rating = document.getElementById("rating");
        const review = document.getElementById("comment");
        fetch('http://localhost:8080/insertreview/'+this.props.filmId+"/"+rating+"/"+review+"/"+username)
            .then(res => res.json() ).catch(console.log).then(results => {
            this.setState({
                submitted:results.successful
            });
        });
    }

    render() {
        return (
            <div>
                <form>
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
                        <textarea rows={3} placeholder={"Enter your comment here"} id="comment"/>
                    </div>
                </form>
            </div>
        )
    }
}