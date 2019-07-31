import React from 'react';
import { Link } from 'react-router-dom';

class MovieRow extends React.Component {

    render () {

        return <table className = "filmTable" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              
              <Link to ={"/FilmDetails/" + this.props.movie.id}>
              <img alt="poster" width="200" src={this.props.movie.poster_src}/>
              </Link>
  
            </td>
            <td>
              <Link to={"/FilmDetails/" + this.props.movie.id}>
              <h2>{this.props.movie.title}<img alt="poster" className="cPoster" width="50" src={this.props.movie.classification_src}/></h2>
              </Link> 
              <p>{this.props.movie.shortoverview}</p>
              <Link to={"/Booking/" + this.props.movie.id}>
              <button className="bookButton"><i className="fas fa-ticket-alt"></i>Book</button>
              </Link>
              <Link to={"/FilmDetails/" + this.props.movie.id}>
              <button className="infoButton"><i className="fas fa-info-circle"></i>More Info</button>
              </Link>
             
              
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;