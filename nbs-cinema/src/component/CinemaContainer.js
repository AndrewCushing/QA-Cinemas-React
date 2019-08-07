import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from '../Pages/About';
import Booking from '../Pages/Booking';
import Classification from '../Pages/Classifications';
import Contact from '../Pages/Contact';
import CurrentFilms from '../Pages/CurrentFilms';
import Deluxe from '../Pages/DeluxeScreen';
import Discussion from './DiscussionBoard';
import Email from '../Pages/EMail';
import FilmDetails from '../Pages/FilmDetails';
import GettingThere from '../Pages/GettingThere';
import HomeComponent from './HomeComponent';
import Opening from '../Pages/OpeningTimes';
import Payment from '../Pages/Payment';
import { PlacesToGo } from '../Pages/PlacesToGo';
import Screens from '../Pages/Screens';
import Scrum from '../Pages/ScrumDescription';
import Standard from '../Pages/StandardScreen';
import UpcomingFilms from '../Pages/UpcomingFilms';
import SearchResults from './SearchResults';
import Reviews from './ReviewBoard';
import NoMatch from '../Pages/NotFound';
import CommentBoard from './CommentBoard';
import { Layout } from './Layout';
import NavigationBar  from './NavigationBar';
import  Footer  from  './Footer';
import  PaymentConfirm  from  '../Pages/PaymentConfirm';

class LunaCinemaApp extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={HomeComponent} />
                            <Route path="/Home" component={HomeComponent} />
                            <Route path="/About" exact component={About} />
                            <Route path="/bbfc" component={() => window.location="https://bbfc.co.uk/"} />
                            <Route path="/Booking/:id" component={Booking} />
                            <Route path="/Classifications" component={Classification} />
                            <Route path="/CommentBoard/:filmId/:reviewId" component={CommentBoard} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/CurrentFilms" component={CurrentFilms} />
                            <Route path="/DeluxeScreen" component={Deluxe} />
                            <Route path="/DiscussionBoard" component={Discussion} />
                            <Route path="/Email" component={Email} />
                            <Route path="/FilmDetails/:id" component={FilmDetails} />
                            <Route path="/Travel" component={GettingThere} />
                            <Route path="/OpeningTimes" component={Opening} />
                            <Route path="/Payment" component={Payment} />
                            <Route path="/PlacesToGo" component={PlacesToGo} />
                            <Route path="/Reviews/:filmId" component={Reviews} />
                            <Route path="/Screens" component={Screens} />
                            <Route path="/Scrum" component={Scrum} />
                            <Route path="/StandardScreen" component={Standard} />
                            <Route path="/search/:searchText" component={SearchResults} />
                            <Route path="/UpcomingFilms" component={UpcomingFilms} />
                            <Route path="/p_confirm" component={PaymentConfirm} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Layout>
                    <Footer/>
                </Router>
            </React.Fragment>
        );
    }
}

export default LunaCinemaApp;