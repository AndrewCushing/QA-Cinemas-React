import React, { Component } from 'react';
import MovieRow from './MovieRow.js'

import { BrowserRouter as Router} from 'react-router-dom'


class UpcomingFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log("This is my intializer")

     const movies = [
       {id: 4, poster_src: "./UpcomingFilmsImages/Goodboys.jpg", classification_src:"./ClassificationImages/15.png",  title: "Good Boys", shortoverview: "Three sixth-graders try to impress girls and upperclassmen by skipping school and attending parties.", overview:"Invited to his first kissing party, 12-year-old Max asks his best friends Lucas and Thor for some much-needed help on how to pucker up. When they hit a dead end, Max decides to use his father's drone to spy on the teenage girls next door. When the boys lose the drone, they skip school and hatch a plan to retrieve it before Max's dad can figure out what happened.", cast:"Jacob Tremblay, Brady Noon, Keith L. Williams, Will Forte, Molly Gordon, Midori Francis", director:"Lee Eisenberg"},
       {id: 5, poster_src:"./UpcomingFilmsImages/Zombieland2.png", classification_src:"./ClassificationImages/15.png", title: "Zombieland: Double Tap", shortoverview:"Zombie slayers Tallahassee, Columbus, Wichita and Little Rock square off against the newly evolved undead."},
       {id: 6, poster_src:"./UpcomingFilmsImages/GeminiMan.png", classification_src:"./ClassificationImages/15.png",title: "Gemini Man", shortoverview:"Gemini Man is an innovative action-thriller starring Will Smith as Henry Brogan, an elite assassin, who is suddenly targeted and pursued by a mysterious young operative that seemingly can predict his every move."},
       {id: 7, poster_src:"./UpcomingFilmsImages/Jumanji.jpg", classification_src:"./ClassificationImages/12A.png", title: "Jumanji: The Next Level", shortoverview:"Everything you know about Jumanji is about to change as the gang set off for another adventure. Get ready for a crazy ride!"},
     ]

     var movieRows = []

     movies.forEach((movie) =>{
         console.log(movie.title)
         const movieRow = <MovieRow movie={movie}/>
         movieRows.push(movieRow)
         })
     this.state = {rows: movieRows}
    };

    handleHome = event => {

        this.props.history.push('/home');
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    }

    render() {
        return (
                <div>
            
                <Router>
                {this.state.rows}

                <div>
                    <button className="btn btn-add" type="submit" onClick={this.handleHome}>Home</button>
                    <button type="close" onClick={this.handleClose}>Close</button>
                </div>
                </Router>
            </div>
        )
    }
}

export default UpcomingFilms