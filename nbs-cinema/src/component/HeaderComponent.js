import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/lunacinemalogo.jpg';


class HeaderComponent extends Component {

    constructor(){
        super();
        this.state={
            searchText:""
        };
        this.performSearch = this.performSearch.bind(this);
    }

    performSearch(event){
        event.preventDefault();
        console.log("hi");
        window.location=('http://35.176.119.160:3000/search/'+document.getElementById("searchBar").value);
    };

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
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
                            <li><Link className="nav-link" to="/Screens">Screens</Link></li>
                            <li><Link className="nav-link" to="/CurrentFilms">Listings</Link></li>
                            <li><Link className="nav-link" to="/new">New Releases</Link></li>
                        </ul>
                    </div>
                    <div style={{marginLeft:400,paddingTop:11}} className="input-group mb-4 fixed-right">
                        <form onSubmit={this.performSearch}>
                            <input type="text" className="form-control" placeholder="Search me" aria-label="Search" aria-describedby="basic-addon2" id="searchBar"/>
                            <div className="input-group-append">
                                <button  className="btn btn-outline-secondary"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}

export default HeaderComponent