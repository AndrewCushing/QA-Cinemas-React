import React from 'react';
import { ReviewJumbotron }  from "../component/ReviewJumbotron"
export default class Review extends React.Component {

    render(){
        return(<div>
                <table className="filmTable">
                    <tbody>
                    <tr>
                        <td className = "table2">
                            <label>User: </label> <span>{this.props.username}</span><br/>
                            <label>Rating: </label> <span>{this.props.rating}</span><br/>
                            <label>Review: </label> <span>{this.props.review}</span><br/>
                            <a href={"/CommentBoard/"+this.props.filmId+"/"+this.props.reviewId}>
                                <button className="infoButton">Comments</button>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}