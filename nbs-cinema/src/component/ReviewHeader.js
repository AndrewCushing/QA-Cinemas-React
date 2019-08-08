
import React from 'react';



export default class ReviewHeader extends React.Component {



    render(){

        return(

            <table className="filmTable">

                <tbody>

                <tr>

                    <td className = "table2">

                        <label>User: </label> <span>{this.props.username}</span><br/>

                        <label>Rating: </label> <span>{this.props.rating}</span><br/>

                        <label>Review: </label> <span>{this.props.review}</span><br/>

                    </td>

                </tr>

                </tbody>

            </table>

        )

    }



}
