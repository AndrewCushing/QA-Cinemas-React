import React from 'react';

export default class Comment extends React.Component {

    constructor(props){
        super(props);
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview(event){
        event.preventDefault();
        const username = document.getElementById("username").value;
        const review = document.getElementById("review").value;
        fetch('http://localhost:8080/insertreview/'+this.props.filmId+"/"+"/"+review+"/"+username)
            .then(res => res.json() ).catch(()=> {window.alert("Unable to connect to back end!")}).then(results => {
            console.log(results.successful);
            if (results.successful){
                window.location = 'http://localhost:3000/Reviews/'+this.props.filmId;
            } else {
                window.alert("Unable to submit review. Unlucky!");
            }
        });
    }

    render(){
        return(

            <table className="filmTable">
                <tbody>
                    <tr>
                        <td className = "table2">
                            <label>{this.props.username} says: </label>
                            <p>{this.props.body}</p>

                        </td>
                </tr>



                </tbody>
            </table>
        )
    }

}