import React from 'react';

export default class Comment extends React.Component {

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