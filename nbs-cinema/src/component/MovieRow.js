import React from 'react';
import { withRouter } from 'react-router-dom';



class MovieRow extends React.Component {
    moreInfo (){
        console.log("Trying to obtain more info")
        console.log(this.props.movie.title)
        return(this.props.history.push())
        
      
      }
      

    bookMovie() {
      console.log("Trying to book movie")
      console.log(this.props.movie.title)
      console.log(this.props.movie.id)
      console.log(this.props.movie.path)
  //     if (this.props.movie.id == "0"){
         return(this.props.history.push("/Booking/"+this.props.movie.path)
         );
        }

  //       this.props.history.push("/Booking/Spiderman")
  //       );
  //     }
  //     else if (this.props.movie.id == "1"){
  //       return(
  //       this.props.history.push("/Booking/LionKing")
  //       );
  //     }
  //     else if (this.props.movie.id == "2"){
  //       return(
  //       this.props.history.push("/Booking/ToyStory")
  //       );
  //     }
  //     else if (this.props.movie.id){
  //       this.props.history.push("/Booking/Yesterday")
  //     }
  // };
    


    render () {
        return <table className="navbar navbar-expand-md navbar-dark bg-secondary text-white" style ={{marginTop:50,marginBottom:100,padding:10}} key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="200" src={this.props.movie.poster_src}/>
            </td>
            <td> 
              <h2>{this.props.movie.title}</h2>
              <p>{this.props.movie.shortoverview}</p>
              {/* <p>Cast: {this.props.movie.cast}</p>
              <p>Director: {this.props.movie.director}</p> */}
              <button onClick = { (e) => {this.bookMovie(); }}>Book</button>
              <button onClick = { (e) => {this.moreInfo(); }}>More Info</button>
              
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default withRouter (MovieRow);