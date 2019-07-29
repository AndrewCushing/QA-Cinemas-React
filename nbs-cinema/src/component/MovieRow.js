import React from 'react';
import { withRouter } from 'react-router-dom';

class MovieRow extends React.Component {

    render () {
      console.log(this.props.movie.poster_src)
        return <table className="navbar navbar-expand-md navbar-dark bg-secondary text-white" style ={{marginTop:50,marginBottom:100,padding:10}} key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              
              <a href ={"/FilmDetails/" + this.props.movie.id}>
              <img alt="poster" width="200" src={this.props.movie.poster_src}/>
              </a>
  
            </td>
            <td>
              <a href ={"/FilmDetails/" + this.props.movie.id}>
              <h2>{this.props.movie.title}<img alt="poster" width="50" src={this.props.movie.classification_src}/></h2>
              </a> 
              <p>{this.props.movie.shortoverview}</p>
              <a href ={"/Booking/" + this.props.movie.id}>
              <button>Book</button>
              </a>
              <a href ={"/FilmDetails/" + this.props.movie.id}>
              <button>More Info</button>
              </a>
             
              
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default withRouter (MovieRow);