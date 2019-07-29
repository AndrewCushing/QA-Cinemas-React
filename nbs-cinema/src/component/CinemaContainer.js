import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import About from './About'
import Booking from './Booking'
import Classification from './Classifications'
import Contact from './Contact'
import CurrentFilms from './CurrentFilms'
import Deluxe from './DeluxeScreen'
import Discussion from './DiscussionBoard'
import EMail from './EMail'
import FilmDetails from './FilmDetails'
import GettingThere from './GettingThere'
import HomeComponent from './HomeComponent'
import Opening from './OpeningTimes'
import Payment from './Payment'
import PlacesToGo from './PlacesToGo'
import Screens from './Screens'
import Scrum from './ScrumDescription'
import Standard from './StandardScreen'
import NewReleases from './UpcomingFilms'

class LunaCinemaApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <HeaderComponent />
                        <div className="container">
                            <Switch>
                                <Route path="/" exact component={HomeComponent} />
                                <Route path="/home" component={HomeComponent} />
                                <Route path="/about" exact component={About} />
                                <Route path="/Booking/:id" component={Booking} />
                                <Route path="/classifications" component={Classification} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/CurrentFilms" component={CurrentFilms} />
                                <Route path="/DeluxeScreen" component={Deluxe} />
                                <Route path="/DiscussionBoard" component={Discussion} />
                                <Route path="/email" component={EMail} />
                                <Route path="/FilmDetails/:id" component={FilmDetails} />
                                <Route path="/travel" component={GettingThere} />
                                <Route path="/OpeningTimes" component={Opening} />
                                <Route path="/payment" component={Payment} />
                                <Route path="/nearby" component={PlacesToGo} />
                                <Route path="/screens" component={Screens} />
                                <Route path="/Scrum" component={Scrum} />
                                <Route path="/StandardScreen" component={Standard} />
                                <Route path="/new" component={NewReleases} />
                            </Switch>
                        </div>
                        <FooterComponent />
                    </>
                </Router>
            </>
        )
    }
}

export default LunaCinemaApp;