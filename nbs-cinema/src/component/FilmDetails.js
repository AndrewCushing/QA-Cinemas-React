import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'



class FilmDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    };

    componentDidMount() {
 
        const movies = [
            {id: 0, poster_src: "./CurrentFilmImages/Spider.jpg", classification_src:"./ClassificationImages/12A.png", title: "Spider-Man: Far From Home", shortoverview: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.", overview:"Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighbourhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent! Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.", cast:"Tom Holland, Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, JB Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, Jake Gyllenhaal", director:"Jon Watts", running_time:"129 minutes"},
            {id: 1, poster_src:"./CurrentFilmImages/Lionking.jpg", classification_src:"./ClassificationImages/PG_0.png", title: "The Lion King", shortoverview:"This Disney animated feature follows the adventures of the young lion Simba, the heir of his father, Mufasa. Simba's wicked uncle, Scar, plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests",  overview:"Disney's 'The Lion King', directed by Jon Favreau, journeys to the African savannah where a future king is born. Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother, and former heir to the throne, has plans of his own. The battle for Pride Rock is rife with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his. The all-star cast includes Donald Glover as Simba, Beyonce Knowles-Carter as Nala, James Earl Jones as Mufasa, Chiwetel Ejiofor as Scar, Seth Rogen as Pumbaa and Billy Eichner as Timon. Utilizing pioneering filmmaking techniques to bring treasured characters to life in a whole new way, Disney's 'The Lion King' roars into theatres on 19 July, 2019.", cast: "Donald Glover, Seth Rogan, Chiwtel Ejiofor, Alfre Woodard, Billy Eichner, John Kani, John Oliver, Florence Kasumba, Eric Andre, Keegan-Michael Key, JD McCrary, Shandi Wright Joesph, Beyonce Knowles-Carter, James Earl Jones", director:"Jon Favreau", running_time:"120 minutes"},
            {id: 2, poster_src:"./CurrentFilmImages/Toystory.jpg", classification_src:"./ClassificationImages/U.png", title: "Toy Story 4", shortoverview:"Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. ", overview:"Woody (voice of Tom Hanks) has always been confident about his place in the world, and that his priority is taking care of his kid, whether that's Andy or Bonnie. So when Bonnie's beloved new craft-project-turned-toy, Forky (voice of Tony Hale), declares himself as 'trash' and not a toy, Woody takes it upon himself to show Forky why he should embrace being a toy. But when Bonnie takes the whole gang on her family's road trip excursion, Woody ends up on an unexpected detour that includes a reunion with his long-lost friend Bo Peep (voice of Annie Potts). After years of being on her own, Bo's adventurous spirit and life on the road belie her delicate porcelain exterior. As Woody and Bo realize they're worlds apart when it comes to life as a toy, they soon come to find that's the least of their worries.", cast:"Tom Hanks, Tim Allen, Annie Potts, Tony Hale, Keegan-Michael Key, Maddie McGraw, Christina Hendricks, Jordan Peele, Keanu Reeves, Ally Maki, Jay Hernandez, Lori Alan, Joan Cusack, Bonnie Hunt, Kristen Schaal, Emily Davis, Wallace Shawn, John Ratzenberger, Blake Clark, June Squibb, Carl Weathers, Lila Sage, Don Rickles, Jeff Garlin, Maliah Bargas-Good, Jack McGraw, Juliana Hansen, Estelle Harris", director:"Josh Cooley", running_time:"100 minutes"},
            {id: 3, poster_src:"./CurrentFilmImages/Yesterday.jpg", classification_src:"./ClassificationImages/12A.png", title: "Yesterday", shortoverview:"A struggling singer-songwriter wakes up to discover that The Beatles have never existed before he starts performing songs by the greatest band in history to a world that has never heard them.", overview:"Yesterday, everyone knew The Beatles. Today, only Jack remembers their songs. He's about to become a very big deal. From Academy Award-winning director Danny Boyle (Slumdog Millionaire, Trainspotting, 28 Days Later) and Richard Curtis, the Oscar-nominated screenwriter of Four Weddings and a Funeral, Love Actually and Notting Hill, comes a rock-n-roll comedy about music, dreams, friendship, and the long and winding road that leads to the love of your life. Jack Malik (Himesh Patel, BBC's Eastenders) is a struggling singer-songwriter in a tiny English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie (Lily James, Mamma Mia! Here We Go Again). Then, after a freak bus accident during a mysterious global blackout, Jack wakes up to discover that The Beatles have never existed ... and he finds himself with a very complicated.", cast:"Himesh Patel, Lily James, Kate McKinnon", director:"Danny Boyle", running_time:"116 minutes"},
            {id: 4, poster_src: "./UpcomingFilmsImages/Goodboys.jpg", classification_src:"./ClassificationImages/15.png",  title: "Good Boys", shortoverview: "Three sixth-graders try to impress girls and upperclassmen by skipping school and attending parties.", overview:"Invited to his first kissing party, 12-year-old Max asks his best friends Lucas and Thor for some much-needed help on how to pucker up. When they hit a dead end, Max decides to use his father's drone to spy on the teenage girls next door. When the boys lose the drone, they skip school and hatch a plan to retrieve it before Max's dad can figure out what happened.", cast:"Jacob Tremblay, Brady Noon, Keith L. Williams, Will Forte, Molly Gordon, Midori Francis", director:"Lee Eisenberg", running_time:"90 minutes"},
            {id: 5, poster_src:"./UpcomingFilmsImages/Zombieland2.png", classification_src:"./ClassificationImages/15.png", title:"Zombieland: Double Tap", shortoverview:"Zombie slayers Tallahassee, Columbus, Wichita and Little Rock square off against the newly evolved undead.", overview:"A decade after Zombieland became a hit film and a cult classic, the lead cast (Woody Harrelson, Jesse Eisenberg, Abigail Breslin, and Emma Stone) have reunited with director Ruben Fleischer (Venom) and the original writers Rhett Reese & Paul Wernick (Deadpool) for Zombieland: Double Tap. In the sequel, written by Rhett Reese & Paul Wernick and Dave Callaham, through comic mayhem that stretches from the White House and the heartland of America, these four slayers must face off against the many new kinds of zombies that have evolved since the first movie, as well as some new human survivors. But most of all, they have to face the growing pains of their own snarky, makeshift family.", cast:"Woody Harrelson, Jesse Eisenberg, Emma Stone, Abigail Breslin, Rosario Dawson, Zoey Deutch, Luke Wilson ", director:"Ruben Fleischer", running_time:"100 Minutes"},
            {id: 6, poster_src:"./UpcomingFilmsImages/GeminiMan.png", classification_src:"./ClassificationImages/15.png", title:"Gemini Man", shortoverview:"Gemini Man is an innovative action-thriller starring Will Smith as Henry Brogan, an elite assassin, who is suddenly targeted and pursued by a mysterious young operative that seemingly can predict his every move.", overview:"Henry Brogan is an elite assassin who becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, he soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.", cast:"Will Smith, Mary Elizabeth Winstead, Clive Owen and Benedict Wong", director:"Ang Lee", running_time:"100 Minutes"},
            {id: 7, poster_src:"./UpcomingFilmsImages/Jumanji.jpg", classification_src:"./ClassificationImages/12A.png", title:"Jumanji: The Next Level", shortoverview:"Everything you know about Jumanji is about to change… ", overview:"A team of friends return to Jumanji to rescue one of their own but discover that nothing is as they expect. The players need to brave parts unknown, from arid deserts to snowy mountains, in order to escape the world's most dangerous game.", cast:"Dwayne Johnson, Karen Gillan, Kevin Hart, Jack Black", director:"Jake Kasdan", running_time:"120 Minutes"},   
          ];
          
          

          this.setState({
                  movie: movies.find((mov) => mov.id == this.props.match.params.id) 
                });
                
    }

    
    handleHome = event => {

        this.props.history.push('/home');
    };

    handleClose = event => {

        if (window.confirm("Are you sure you want to exit?")) {
            window.close();
        }
    };

    render() {
        
return <table className = "filmTable" key={this.state.movie.id}>
        <tbody>
          <tr>
            <td className = "table2">
              <img alt="poster" width="200" src={this.state.movie.poster_src}/>
              
            </td>
            <td>
              <h2>{this.state.movie.title}<img alt="poster" width="50" src={this.state.movie.classification_src}/></h2>
              <p>{this.state.movie.overview}</p>
              <p>Cast: {this.state.movie.cast}</p>
              <p>Director: {this.state.movie.director}</p>
              <p>Running Time: {this.state.movie.running_time}</p>
              <a href ={"/Booking/" + this.state.movie.id}>
              <button className="bookButton"><i class="fas fa-ticket-alt"></i>Book</button>
              </a>
             
            </td>
          </tr>
        </tbody>
      </table>
     
    }
}

export default FilmDetails