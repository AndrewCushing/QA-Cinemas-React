import React from 'react';
import { withRouter } from 'react-router-dom';


class MovieDetails extends React.Component {
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
                    <p>Synopsis: {this.props.movie.detailedDescription}</p>
                    <label>Director:</label> <ExtraDetails content={this.props.movie.directors}/><br/>
                    <label>Starring:</label> <ExtraDetails content={this.props.movie.actors}/><br/>
                    <label>Genre:</label> <ExtraDetails content={this.props.movie.genres}/><br/>
                    <a href ={"/Booking/" + this.props.movie.id}>
                        <button className="bookButton"><i class="fas fa-ticket-alt"></i>Book</button>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    }
}
export default withRouter (MovieDetails);

class ExtraDetails extends React.Component{
    render(){
        let arr =[];
        arr.push(this.props.content[0])
        for(let i=1;i<this.props.content.length;i++){
            arr.push(", "+this.props.content[i])
        }
        return arr
    }
}