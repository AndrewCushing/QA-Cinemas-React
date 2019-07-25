import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/lunacinemalogo.jpg';

class HeaderComponent extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Navbar bg={"dark"}>
                        <Navbar.Brand>
                            {/*<a href="/HomeComponent">&#9776;&#1f50d; Home*/}
                            <a href="./home">
                                <img src={logo}
                                     style={{width:64, marginTop: -7}}
                                     className="nav-logo"
                                     alt="Luna Cinema logo and home button" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
                        <div>
                    <ul className="navbar-nav">
                        <li><Link style ={{marginLeft:10,paddingTop:13}} className="nav-link" to="/Screens">Screens</Link></li>
                        <li><Link style ={{paddingTop:13}} className="nav-link" to="/CurrentFilms">Listings</Link></li>
                        <li><Link style ={{paddingTop:3}} className="nav-link" to="/new">New Releases</Link></li>
                    </ul>
                        </div>
                    <div style={{marginLeft:650,paddingTop:11}}className="input-group mb-4 fixed-right">
                        <input type="text" className="form-control" placeholder="&#61442; Search me"
                               aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">&#61442;</button>
                            </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent