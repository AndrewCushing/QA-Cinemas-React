import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import { BrowserRouter as Router} from 'react-router-dom'


class CurrentFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log("This is my intializer")

     const movies = [
       {id: 0, poster_src: "Spider.jpg", classification_src:"12A.png",  title: "Spider-Man: Far From Home", shortoverview: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.", overview:"Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighbourhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent! Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.", cast:"Tom Holland, Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, JB Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, Jake Gyllenhaal", director:"Jon Watts"},
       {id: 1, poster_src:"Lionking.jpg", classification_src:"PG_0.png", title: "The Lion King", shortoverview:"This Disney animated feature follows the adventures of the young lion Simba, the heir of his father, Mufasa. Simba's wicked uncle, Scar, plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests",  overview:"Disney's 'The Lion King', directed by Jon Favreau, journeys to the African savannah where a future king is born. Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother, and former heir to the throne, has plans of his own. The battle for Pride Rock is rife with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his. The all-star cast includes Donald Glover as Simba, Beyonce Knowles-Carter as Nala, James Earl Jones as Mufasa, Chiwetel Ejiofor as Scar, Seth Rogen as Pumbaa and Billy Eichner as Timon. Utilizing pioneering filmmaking techniques to bring treasured characters to life in a whole new way, Disney's 'The Lion King' roars into theatres on 19 July, 2019.", cast: "Donald Glover, Seth Rogan, Chiwtel Ejiofor, Alfre Woodard, Billy Eichner, John Kani, John Oliver, Florence Kasumba, Eric Andre, Keegan-Michael Key, JD McCrary, Shandi Wright Joesph, Beyonce Knowles-Carter, James Earl Jones", director:"Jon Favreau"},
       {id: 2, poster_src:"Toystory.jpg", classification_src:"U.png",title: "Toy Story 4", shortoverview:"Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. ", overview:"Woody (voice of Tom Hanks) has always been confident about his place in the world, and that his priority is taking care of his kid, whether that's Andy or Bonnie. So when Bonnie's beloved new craft-project-turned-toy, Forky (voice of Tony Hale), declares himself as 'trash' and not a toy, Woody takes it upon himself to show Forky why he should embrace being a toy. But when Bonnie takes the whole gang on her family's road trip excursion, Woody ends up on an unexpected detour that includes a reunion with his long-lost friend Bo Peep (voice of Annie Potts). After years of being on her own, Bo's adventurous spirit and life on the road belie her delicate porcelain exterior. As Woody and Bo realize they're worlds apart when it comes to life as a toy, they soon come to find that's the least of their worries.", cast:"Tom Hanks, Tim Allen, Annie Potts, Tony Hale, Keegan-Michael Key, Maddie McGraw, Christina Hendricks, Jordan Peele, Keanu Reeves, Ally Maki, Jay Hernandez, Lori Alan, Joan Cusack, Bonnie Hunt, Kristen Schaal, Emily Davis, Wallace Shawn, John Ratzenberger, Blake Clark, June Squibb, Carl Weathers, Lila Sage, Don Rickles, Jeff Garlin, Maliah Bargas-Good, Jack McGraw, Juliana Hansen, Estelle Harris", director:"Josh Cooley"},
       {id: 3, poster_src:"Yesterday.jpg", classification_src:"12A.png", title: "Yesterday", shortoverview:"A struggling singer-songwriter wakes up to discover that The Beatles have never existed before he starts performing songs by the greatest band in history to a world that has never heard them.", overview:"Yesterday, everyone knew The Beatles. Today, only Jack remembers their songs. He's about to become a very big deal. From Academy Award-winning director Danny Boyle (Slumdog Millionaire, Trainspotting, 28 Days Later) and Richard Curtis, the Oscar-nominated screenwriter of Four Weddings and a Funeral, Love Actually and Notting Hill, comes a rock-n-roll comedy about music, dreams, friendship, and the long and winding road that leads to the love of your life. Jack Malik (Himesh Patel, BBC's Eastenders) is a struggling singer-songwriter in a tiny English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie (Lily James, Mamma Mia! Here We Go Again). Then, after a freak bus accident during a mysterious global blackout, Jack wakes up to discover that The Beatles have never existed ... and he finds himself with a very complicated.", cast:"Himesh Patel, Lily James, Kate McKinnon", director:"Danny Boyle"},
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
                
                <h1 style = {{marginLeft:10,paddingTop:40}}>Current Releases</h1>
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

export default CurrentFilms