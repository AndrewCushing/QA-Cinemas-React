import React from 'react';

export default class Review extends React.Component {

    render(){
        return(
            <table className="filmTable">
                <tbody>
                    <tr>
                        <td className = "table2">
                            <label>Rating: </label> <span>{this.props.rating}</span><br/>
                            <label>User: </label> <span>{this.props.username}</span><br/>
                            <label>Review: </label> <span>{this.props.review}</span><br/>
                            <a href={"/CommentBoard/"+this.props.filmId+"/"+this.props.reviewId}>
                                <button className="infoButton"><i className="fas fa-comment"></i> Comments</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

}