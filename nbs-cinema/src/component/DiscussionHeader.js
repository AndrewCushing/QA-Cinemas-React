import React from 'react';

export default class DiscussionHeader extends React.Component {
    render () {
        return (
            <table className="filmTable" key={this.props.movie.id}>
                <tbody>
                <tr>
                    <td className = "table2">
                        <a href ={"/FilmDetails/" + this.props.movie.id}>
                            <img alt="poster" width="200" src={this.props.movie.imagePath}/>
                        </a>
                    </td>
                    <td>
                        <a href ={"/FilmDetails/" + this.props.movie.id}>
                            <h2>{this.props.movie.title}<img alt="poster" className="cPoster" width="50" src={this.props.movie.classification}/></h2>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}