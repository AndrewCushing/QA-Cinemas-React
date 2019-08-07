import React from 'react';
import './ReviewBoard.css';

export default class DiscussionHeader extends React.Component {
    render () {
        return (
            <table className="filmTable" key={this.props.movie.id}>

                    <th className = "filmHead">
                        <a href ={"/FilmDetails/" + this.props.movie.id}>
                            <img alt="poster" width="150" src={this.props.movie.imagePath}/>
                        </a>
                    </th>
                    <td>
                        {/*
                        <a href ={"/FilmDetails/" + this.props.movie.id}>
                            <h2>{this.props.movie.title}<img alt="poster" className="cPoster" width="20" src={this.props.movie.classification}/></h2>
                        </a>
                        */}
                    </td>

            </table>

        )
    }
}