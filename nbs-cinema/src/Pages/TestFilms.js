import React, { Component } from 'react';
import MovieRow from '../component/TestMovieRow';


class TestFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log("This is my intializer")

     const movies = [
       {id: 0, poster_src: "./CurrentFilmImages/Spider.jpg", classification_src:"./ClassificationImages/12A.png",  title: "Spider-Man: Far From Home", shortoverview: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."},
       {id: 1, poster_src:"./CurrentFilmImages/Lionking.jpg", classification_src:"./ClassificationImages/PG_0.png", title: "The Lion King", shortoverview:"This Disney animated feature follows the adventures of the young lion Simba, the heir of his father, Mufasa. Simba's wicked uncle, Scar, plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests"},
       {id: 2, poster_src:"./CurrentFilmImages/Toystory.jpg", classification_src:"./ClassificationImages/U.png",title: "Toy Story 4", shortoverview:"Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. "},
       {id: 3, poster_src:"./CurrentFilmImages/Yesterday.jpg", classification_src:"./ClassificationImages/12A.png", title: "Yesterday", shortoverview:"A struggling singer-songwriter wakes up to discover that The Beatles have never existed before he starts performing songs by the greatest band in history to a world that has never heard them."},
     ]

     var movieRows = []

     movies.forEach((movie) =>{
         console.log(movie.title)
         const movieRow = <MovieRow key={movie.id} movie={movie}/>
         movieRows.push(movieRow)
         })
     this.state = {rows: movieRows}
    };

    handleHome = () => {

        this.props.history.push('/home');
    };

    handleClose = () => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    }



    render() {
        return (
                <div>
            
                {this.state.rows}
                   
                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
            </div>
            
        )
    }
}

export default TestFilms