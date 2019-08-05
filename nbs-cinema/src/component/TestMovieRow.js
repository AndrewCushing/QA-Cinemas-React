import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'

class TestMovieRow extends React.Component {
    render () {

        return (<>
            

<Card style={{width:300}}>
    <Link to ={"/FilmDetails/" + this.props.movie.id}>
        <Card.Img variant="top" style = {{width:300}} src={this.props.movie.poster_src}/>
    </Link>
<Card.Body>
    <Link to ={"/FilmDetails/" + this.props.movie.id}>
        <Card.Title>{this.props.movie.title}</Card.Title>
    </Link>
  <Card.Text>{this.props.movie.shortoverview}</Card.Text>
</Card.Body>
<Card.Footer>
    <small className="text-muted">
        <Link to ={"/Booking/" + this.props.movie.id}> 
            <button className="bookButton"><i class="material-icons"> event_seat</i>Book</button>
        </Link>
        <Link to ={"/FilmDetails/" + this.props.movie.id}>
            <button className="infoButton"><i style = {{width:34}}class="material-icons">info</i>More Info</button>
        </Link>
        <Link to ={"/Reviews/" + this.props.movie.id}>
            <button className="infoButton"><i class="material-icons">rate_review</i>Reviews</button>
        </Link>
    </small>
</Card.Footer>
</Card>


    
        {/* // return <table className = "filmTable" key={this.props.movie.id}>
        //     <tbody>
        //     <tr>
        //         <td className = "table2">
        //             <a href ={"/FilmDetails/" + this.props.movie.id}>
        //                 <img alt="poster" width="200" src={this.props.movie.imagePath}/>
        //             </a>
        //         </td>
        //         <td>
        //             <a href ={"/FilmDetails/" + this.props.movie.id}>
        //                 <h2>{this.props.movie.title}<img alt="poster" className="cPoster" width="50" src={this.props.movie.classification}/></h2>
        //             </a>
        //             <p>{this.props.movie.briefDescription}</p>
        //             <a href ={"/Booking/" + this.props.movie.id}>
        //                 <button className="bookButton"><i class="fas fa-ticket-alt"></i>Book</button>
        //             </a>
        //             <a href ={"/FilmDetails/" + this.props.movie.id}>
        //                 <button className="infoButton"><i class="fas fa-info-circle"></i>More Info</button>
        //             </a>
        //             <a href={"/Reviews/" + this.props.movie.id}>
        //                 <button className="infoButton"><i class="fas fa-comment"></i> Reviews</button>
        //             </a>
        //         </td>
        //     </tr>
        //     </tbody>
        // </table>
                 */}
                  </>
)
    }
}
export default TestMovieRow