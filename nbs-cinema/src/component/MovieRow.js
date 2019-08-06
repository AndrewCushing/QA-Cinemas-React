import React from 'react';
import { withRouter } from 'react-router-dom';
class MovieRow extends React.Component {
    render () {
        return <table className = "filmTable" key={this.props.movie.id}>
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
                    <p>{this.props.movie.briefDescription}</p>
                    <a href ={"/Booking/" + this.props.movie.id}>
                        <button className="bookButton"><i class="fas fa-ticket-alt"></i>Book</button>
                    </a>
                    <a href ={"/FilmDetails/" + this.props.movie.id}>
                        <button className="infoButton" id={"More_Info"}><i class="fas fa-info-circle"></i>More Info</button>
                    </a>
                    <a href={"/Reviews/" + this.props.movie.id}>
                        <button className="infoButton"><i class="fas fa-comment"></i> Reviews</button>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    }
}
export default withRouter (MovieRow);