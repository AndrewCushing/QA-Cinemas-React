import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {

    render() {
        return (
            <div >
            <footer className="fixed-bottom">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link style ={{marginLeft:315}} className="nav-link" to="/About">About</Link></div>
                    <div>
                    <ul className="navbar-nav" >
                        <li><Link className="nav-link" to="/OpeningTimes">Opening Times</Link></li>
                        <li><Link className="nav-link" to="/Classifications">Classifications</Link></li>
                        <li><Link className="nav-link" to="/nearby">Places To Go</Link></li>
                        <li><Link className="nav-link" to="/travel">Getting Here</Link></li>
                        <li><Link className="nav-link" to="/Contact">Contact</Link></li>
                        <li><Link className="nav-link" to="/Scrum">Scrum Description</Link></li>
                    </ul>
                    </div>
                </nav>
            </footer>
            </div>
        )
    }
}

export default FooterComponent